---
hide_title: true
sidebar_label: ECL EKF Initialisation
---

This document is based on stock PX4 Autopilot v1.11.2

# ECL EKF Initialisation

## Software Architecture Overview
### Multi-EKF and Sensor Voting
The EKF logic is wrapped around by class `EKF2`, which is implemented as a `ScheduledWorkItem`. It is initialised by the static method `task_spawn`.

The reason for this wrapper architecture is that, the `EKF2` class can turn on a mode called `multi mode`, which enables multi-EKF support. This essentially runs one EKF instance per physical IMU detected on the hardware platform. With the `multi mode` enabled, the ekf selector is also run to perform the selection logic.

![Multi-EKF support](https://user-images.githubusercontent.com/84712/79085293-024b8180-7d06-11ea-9db0-6c68cf0e59d6.png)

:::note
`ScheduledWorkItem` inherits `WorkItem` which contains private object `WorkQueue`. Given the `wq_config_t` struct in the constructor of `WorkItem`, it will find or create the relevant Work Queue by `WorkQueueFindOrCreate(config)`, then attach the current work item class object `this` to the target work queue by `Attach(this)`.

Here each work queue is identified by name, in struct `wq_config_t.name`. For more info refer to [here](https://dev.px4.io/v1.10/en/concept/architecture.html#runtime-environment).
:::

#### Mode Selection

The multi-EKF mode is enabled when `SENS_IMU_MODE` is set to 0 (disabled), [reference](https://docs.px4.io/master/en/advanced_config/parameter_reference.html). Setting the value to 0 disable Sensors hub IMU, hence to expose all IMU data out. Otherwise, setting `SENS_IMU_MODE` to 1, enables sensor voting, in which disable multi-EKF support.

The sensor voting result is published as the uORB `sensor_combined` message (`VotedSensorsUpdate::sensorsPoll`). It is received by `_sensor_combined_sub` in `EKF2` class (non multi-EKF mode).

:::tip
Currently, we are using the default value of `SENS_IMU_MODE` which is 1. We are not using multi-EKF mode now.
:::

## Bootstraping Process (Non Multi-EKF)

- `ekf2_main` C method, which handles `help`, `start`, `stop` parameters.
- `EKF2::task_spawn()`, checking `SENS_IMU_MODE`. If it is 1 (default), enter normal non multi-EKF mode. A new `EKF2` instance is allocated.
  - Inside the spawning, it schedule the `EKF2::Run()` as well
- `EKF2` has a member variable of class `Ekf`, which is the actuall ECL library (external to PX4 firmware itself)
- `EKF2::Run()`
  - On the first run, it will register itself to the callback of sensor_combined message: `_sensor_combined_sub.registerCallback()`. Hence the `Run()` function will be called everytime a new combined IMU message is available.

## IMU Update Routine

As we have discussed the `EKF2::Run()` function is called whenever a new IMU data is available (callback). For each run:
- update status like `_armed`, `_standby`
- maintain `_preflt_checker`, which is updated during stand by mode
  - `_preflt_checker` is responsible for the `xy_valid`, `z_valid`, `v_xy_valid`, `v_z_valid` entries in `vehicle_local_position` uORB message.



```cpp title="PreFlightChecker.cpp"
void PreFlightChecker::update(const float dt, const estimator_innovations_s &innov)
{
	const float alpha = InnovationLpf::computeAlphaFromDtAndTauInv(dt, _innov_lpf_tau_inv);

	_has_heading_failed = preFlightCheckHeadingFailed(innov, alpha);
	_has_horiz_vel_failed = preFlightCheckHorizVelFailed(innov, alpha);
	_has_vert_vel_failed = preFlightCheckVertVelFailed(innov, alpha);
	_has_height_failed = preFlightCheckHeightFailed(innov, alpha);
}
```

- call `_ekf.setIMUData(imu_sample_new)` and then `_ekf.update()`
- Among other things, update sensors sample too

```cpp
    UpdateAirspeedSample(ekf2_timestamps);
    UpdateAuxVelSample(ekf2_timestamps);
    UpdateBaroSample(ekf2_timestamps);
    UpdateGpsSample(ekf2_timestamps);
    UpdateMagSample(ekf2_timestamps);
    UpdateRangeSample(ekf2_timestamps);

    vehicle_odometry_s ev_odom;
    const bool new_ev_odom = UpdateExtVisionSample(ekf2_timestamps, ev_odom);

    optical_flow_s optical_flow;
    const bool new_optical_flow = UpdateFlowSample(ekf2_timestamps, optical_flow);
```

### Yaw Alignment

Inside `bool Ekf::initialiseFilter()`, yaw alignment is attempted:

```cpp
	// calculate the initial magnetic field and yaw alignment
	_control_status.flags.yaw_align = resetMagHeading(_mag_lpf.getState(), false, false);
```

If the type is `MAG_FUSE_TYPE_NONE`, then the yaw_align will return false. If the type is `MAG_FUSE_TYPE_INDOOR` (`_`is_yaw_fusion_inhibited` would be false at initialisation)