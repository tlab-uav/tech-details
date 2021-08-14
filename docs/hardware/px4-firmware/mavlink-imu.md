---
hide_title: true
sidebar_label: MAVLink IMU Topics
---

# MAVLink IMU Topics

High rates of IMU data is necessary information for visual-inertial navigation and other tasks. However, it can be tricky to increase the data frequency from the default 50Hz.

In addition, it can be confusing to see that there are a few different types of IMU data available an [issue discussed here](https://github.com/PX4/Firmware/issues/9796).

In general, the topic [`HIGHRES_IMU`](https://mavlink.io/en/messages/common.html#HIGHRES_IMU) should be used for feeding into the vision algorithm. The `SCALED_IMUx` topics are raw readings from the respective IMUs, which is not fused. The `HIGHRES_IMU` message comesfrom the uORB message `sensor_combined`, which incorporates sensor fusion as well as temperature correction features (in `voted_sensors_update.cpp`). In addition, in mavros, `HIGHRES_IMU` will supercede `SCALED_IMUx` when the MAVLink message is available. The corresponding ROS topic is `/mavros/imu/data_raw`.

:::caution

The ROS message `/mavros/imu/data` is an aggregation of a mixture of MAVLINK messages. The data rate is determined either by `ATTITUDE` or `ATTITUDE_QUATERNION` (take precedence), NOT the IMU data rates from one of the topics: `RAW_IMU`, `SCALED_IMUx` or `HIGHRES_IMU`, where the latter one take precedence.


Also, `/mavros/imu/data` is documented in the code to be `ENU` frame, but in reality carries the same orientation as the `data_raw`, which is `NWU` (`flu`).

:::

:::caution Regarding Bias
`HIGHRES_IMU` mavlink topic in PX4 firmware will carry bias (calculated from the filter). This may not be ideal to be fed into VIO system.
`SCALED_IMUx` should come without the estimated bias.
`RAW_IMU` seems to be not used in PX4 firmware.
:::

## IMU Data Rates

`HIGHRES_IMU` has a default rate limiting at 50Hz, when at `ONBOARD` (with OBC) or `CONFIG` (USB) mode. This topic is published whenever any of the field in the message is refreshed. Therefore, the actual rates, where the IMU data relevant to the visual algorithm is updated, might be lower. For example, if the rate is set at 200Hz, the actual rates might only achieve 150Hz observed on the final ROS topic `/mavros/imu/data_raw`. Therefore, set the data rates to be higher when necessary.

### Add `extras.txt`

Place the `extras.txt` file in the `etc/` folder within the SD card for Pixhawk.

First in the QGC's mavlink console, identify the tty device, by typing `mavlink status` in the console. Example output is "/dev/ttyS2"
#### Using `SCALED_IMUx`
```bash
mavlink stream -d /dev/ttyACM0 -s HIGHRES_IMU -r 0
mavlink stream -d /dev/ttyS2 -s HIGHRES_IMU -r 0

```
#### Using `HIGHRES_IMU` (not recommnaded)
```bash
mavlink stream -d /dev/ttyACM0 -s HIGHRES_IMU -r 300
mavlink stream -d /dev/ttyS2 -s HIGHRES_IMU -r 300
```

### MAVLINK Defaults in PX4 Firmware

```cpp title="mavlink.cpp"
switch (_mode) {
	case MAVLINK_MODE_NORMAL:
		configure_stream_local("ADSB_VEHICLE", unlimited_rate);
		configure_stream_local("ALTITUDE", 1.0f);
		configure_stream_local("ATTITUDE", 15.0f);
		configure_stream_local("ATTITUDE_TARGET", 2.0f);
		configure_stream_local("BATTERY_STATUS", 0.5f);
		configure_stream_local("CAMERA_IMAGE_CAPTURED", unlimited_rate);
		configure_stream_local("COLLISION", unlimited_rate);
		configure_stream_local("DEBUG", 1.0f);
		configure_stream_local("DEBUG_FLOAT_ARRAY", 1.0f);
		configure_stream_local("DEBUG_VECT", 1.0f);
		configure_stream_local("DISTANCE_SENSOR", 0.5f);
		configure_stream_local("ESTIMATOR_STATUS", 0.5f);
		configure_stream_local("EXTENDED_SYS_STATE", 1.0f);
		configure_stream_local("GLOBAL_POSITION_INT", 5.0f);
		configure_stream_local("GPS2_RAW", 1.0f);
		configure_stream_local("GPS_RAW_INT", 1.0f);
		configure_stream_local("HOME_POSITION", 0.5f);
		configure_stream_local("LOCAL_POSITION_NED", 1.0f);
		configure_stream_local("NAMED_VALUE_FLOAT", 1.0f);
		configure_stream_local("NAV_CONTROLLER_OUTPUT", 1.0f);
		configure_stream_local("OBSTACLE_DISTANCE", 1.0f);
		configure_stream_local("ORBIT_EXECUTION_STATUS", 2.0f);
		configure_stream_local("PING", 0.1f);
		configure_stream_local("POSITION_TARGET_GLOBAL_INT", 1.0f);
		configure_stream_local("POSITION_TARGET_LOCAL_NED", 1.5f);
		configure_stream_local("RC_CHANNELS", 5.0f);
		configure_stream_local("SERVO_OUTPUT_RAW_0", 1.0f);
		configure_stream_local("SYS_STATUS", 1.0f);
		configure_stream_local("UTM_GLOBAL_POSITION", 0.5f);
		configure_stream_local("VFR_HUD", 4.0f);
		configure_stream_local("WIND_COV", 0.5f);
		break;

	case MAVLINK_MODE_ONBOARD:
		configure_stream_local("ACTUATOR_CONTROL_TARGET0", 10.0f);
		configure_stream_local("ADSB_VEHICLE", unlimited_rate);
		configure_stream_local("ALTITUDE", 10.0f);
		configure_stream_local("ATTITUDE", 100.0f);
		configure_stream_local("ATTITUDE_QUATERNION", 50.0f);
		configure_stream_local("ATTITUDE_TARGET", 10.0f);
		configure_stream_local("BATTERY_STATUS", 0.5f);
		configure_stream_local("CAMERA_CAPTURE", 2.0f);
		configure_stream_local("CAMERA_IMAGE_CAPTURED", unlimited_rate);
		configure_stream_local("CAMERA_TRIGGER", unlimited_rate);
		configure_stream_local("COLLISION", unlimited_rate);
		configure_stream_local("DEBUG", 10.0f);
		configure_stream_local("DEBUG_FLOAT_ARRAY", 10.0f);
		configure_stream_local("DEBUG_VECT", 10.0f);
		configure_stream_local("DISTANCE_SENSOR", 10.0f);
		configure_stream_local("ESTIMATOR_STATUS", 1.0f);
		configure_stream_local("EXTENDED_SYS_STATE", 5.0f);
		configure_stream_local("GLOBAL_POSITION_INT", 50.0f);
		configure_stream_local("GPS2_RAW", unlimited_rate);
		configure_stream_local("GPS_RAW_INT", unlimited_rate);
		configure_stream_local("HIGHRES_IMU", 50.0f);
		configure_stream_local("HOME_POSITION", 0.5f);
		configure_stream_local("LOCAL_POSITION_NED", 30.0f);
		configure_stream_local("NAMED_VALUE_FLOAT", 10.0f);
		configure_stream_local("NAV_CONTROLLER_OUTPUT", 10.0f);
		configure_stream_local("ODOMETRY", 30.0f);
		configure_stream_local("OPTICAL_FLOW_RAD", 10.0f);
		configure_stream_local("ORBIT_EXECUTION_STATUS", 5.0f);
		configure_stream_local("PING", 1.0f);
		configure_stream_local("POSITION_TARGET_GLOBAL_INT", 10.0f);
		configure_stream_local("POSITION_TARGET_LOCAL_NED", 10.0f);
		configure_stream_local("RC_CHANNELS", 20.0f);
		configure_stream_local("SERVO_OUTPUT_RAW_0", 10.0f);
		configure_stream_local("SYS_STATUS", 5.0f);
		configure_stream_local("SYSTEM_TIME", 1.0f);
		configure_stream_local("TIMESYNC", 10.0f);
		configure_stream_local("TRAJECTORY_REPRESENTATION_WAYPOINTS", 5.0f);
		configure_stream_local("UTM_GLOBAL_POSITION", 1.0f);
		configure_stream_local("VFR_HUD", 10.0f);
		configure_stream_local("WIND_COV", 10.0f);
		break;

	case MAVLINK_MODE_EXTVISION:
		configure_stream_local("HIGHRES_IMU", unlimited_rate);		// for VIO
		configure_stream_local("TIMESYNC", 10.0f);

	// FALLTHROUGH
	case MAVLINK_MODE_EXTVISIONMIN:
		configure_stream_local("ADSB_VEHICLE", unlimited_rate);
		configure_stream_local("ALTITUDE", 10.0f);
		configure_stream_local("ATTITUDE", 20.0f);
		configure_stream_local("ATTITUDE_TARGET", 2.0f);
		configure_stream_local("BATTERY_STATUS", 0.5f);
		configure_stream_local("CAMERA_IMAGE_CAPTURED", unlimited_rate);
		configure_stream_local("CAMERA_TRIGGER", unlimited_rate);
		configure_stream_local("COLLISION", unlimited_rate);
		configure_stream_local("DEBUG", 1.0f);
		configure_stream_local("DEBUG_FLOAT_ARRAY", 1.0f);
		configure_stream_local("DEBUG_VECT", 1.0f);
		configure_stream_local("DISTANCE_SENSOR", 10.0f);
		configure_stream_local("ESTIMATOR_STATUS", 1.0f);
		configure_stream_local("EXTENDED_SYS_STATE", 1.0f);
		configure_stream_local("GLOBAL_POSITION_INT", 5.0f);
		configure_stream_local("GPS2_RAW", 1.0f);
		configure_stream_local("GPS_RAW_INT", 1.0f);
		configure_stream_local("HOME_POSITION", 0.5f);
		configure_stream_local("LOCAL_POSITION_NED", 30.0f);
		configure_stream_local("NAMED_VALUE_FLOAT", 1.0f);
		configure_stream_local("NAV_CONTROLLER_OUTPUT", 1.5f);
		configure_stream_local("ODOMETRY", 30.0f);
		configure_stream_local("OPTICAL_FLOW_RAD", 1.0f);
		configure_stream_local("ORBIT_EXECUTION_STATUS", 5.0f);
		configure_stream_local("PING", 0.1f);
		configure_stream_local("POSITION_TARGET_GLOBAL_INT", 1.5f);
		configure_stream_local("POSITION_TARGET_LOCAL_NED", 1.5f);
		configure_stream_local("RC_CHANNELS", 5.0f);
		configure_stream_local("SERVO_OUTPUT_RAW_0", 1.0f);
		configure_stream_local("SYS_STATUS", 5.0f);
		configure_stream_local("TRAJECTORY_REPRESENTATION_WAYPOINTS", 5.0f);
		configure_stream_local("UTM_GLOBAL_POSITION", 1.0f);
		configure_stream_local("VFR_HUD", 4.0f);
		configure_stream_local("WIND_COV", 1.0f);
		break;


	case MAVLINK_MODE_OSD:
		configure_stream_local("ALTITUDE", 10.0f);
		configure_stream_local("ATTITUDE", 25.0f);
		configure_stream_local("ATTITUDE_TARGET", 10.0f);
		configure_stream_local("BATTERY_STATUS", 0.5f);
		configure_stream_local("ESTIMATOR_STATUS", 1.0f);
		configure_stream_local("EXTENDED_SYS_STATE", 1.0f);
		configure_stream_local("GLOBAL_POSITION_INT", 10.0f);
		configure_stream_local("GPS_RAW_INT", 1.0f);
		configure_stream_local("HOME_POSITION", 0.5f);
		configure_stream_local("RC_CHANNELS", 5.0f);
		configure_stream_local("SERVO_OUTPUT_RAW_0", 1.0f);
		configure_stream_local("SYS_STATUS", 5.0f);
		configure_stream_local("SYSTEM_TIME", 1.0f);
		configure_stream_local("VFR_HUD", 25.0f);
		configure_stream_local("WIND_COV", 2.0f);
		break;

	case MAVLINK_MODE_MAGIC:

	/* fallthrough */
	case MAVLINK_MODE_CUSTOM:
		//stream nothing
		break;

	case MAVLINK_MODE_CONFIG:
		// Enable a number of interesting streams we want via USB
		configure_stream_local("ACTUATOR_CONTROL_TARGET0", 30.0f);
		configure_stream_local("ADSB_VEHICLE", unlimited_rate);
		configure_stream_local("ALTITUDE", 10.0f);
		configure_stream_local("ATTITUDE", 50.0f);
		configure_stream_local("ATTITUDE_QUATERNION", 50.0f);
		configure_stream_local("ATTITUDE_TARGET", 8.0f);
		configure_stream_local("BATTERY_STATUS", 0.5f);
		configure_stream_local("CAMERA_IMAGE_CAPTURED", unlimited_rate);
		configure_stream_local("CAMERA_TRIGGER", unlimited_rate);
		configure_stream_local("COLLISION", unlimited_rate);
		configure_stream_local("DEBUG", 50.0f);
		configure_stream_local("DEBUG_FLOAT_ARRAY", 50.0f);
		configure_stream_local("DEBUG_VECT", 50.0f);
		configure_stream_local("DISTANCE_SENSOR", 10.0f);
		configure_stream_local("ESTIMATOR_STATUS", 5.0f);
		configure_stream_local("EXTENDED_SYS_STATE", 2.0f);
		configure_stream_local("GLOBAL_POSITION_INT", 10.0f);
		configure_stream_local("GPS2_RAW", unlimited_rate);
		configure_stream_local("GPS_RAW_INT", unlimited_rate);
		configure_stream_local("HIGHRES_IMU", 50.0f);
		configure_stream_local("HOME_POSITION", 0.5f);
		configure_stream_local("LOCAL_POSITION_NED", 30.0f);
		configure_stream_local("MANUAL_CONTROL", 5.0f);
		configure_stream_local("NAMED_VALUE_FLOAT", 50.0f);
		configure_stream_local("NAV_CONTROLLER_OUTPUT", 10.0f);
		configure_stream_local("ODOMETRY", 30.0f);
		configure_stream_local("OPTICAL_FLOW_RAD", 10.0f);
		configure_stream_local("ORBIT_EXECUTION_STATUS", 5.0f);
		configure_stream_local("PING", 1.0f);
		configure_stream_local("POSITION_TARGET_GLOBAL_INT", 10.0f);
		configure_stream_local("RC_CHANNELS", 10.0f);
		configure_stream_local("SCALED_IMU", 25.0f);
		configure_stream_local("SCALED_IMU2", 25.0f);
		configure_stream_local("SCALED_IMU3", 25.0f);
		configure_stream_local("SERVO_OUTPUT_RAW_0", 20.0f);
		configure_stream_local("SERVO_OUTPUT_RAW_1", 20.0f);
		configure_stream_local("SYS_STATUS", 1.0f);
		configure_stream_local("SYSTEM_TIME", 1.0f);
		configure_stream_local("TIMESYNC", 10.0f);
		configure_stream_local("UTM_GLOBAL_POSITION", 1.0f);
		configure_stream_local("VFR_HUD", 20.0f);
		configure_stream_local("WIND_COV", 10.0f);
		break;

	case MAVLINK_MODE_IRIDIUM:
		configure_stream_local("HIGH_LATENCY2", 0.015f);
		break;

	case MAVLINK_MODE_MINIMAL:
		configure_stream_local("ALTITUDE", 0.5f);
		configure_stream_local("ATTITUDE", 10.0f);
		configure_stream_local("EXTENDED_SYS_STATE", 0.1f);
		configure_stream_local("GLOBAL_POSITION_INT", 5.0f);
		configure_stream_local("GPS_RAW_INT", 0.5f);
		configure_stream_local("HOME_POSITION", 0.1f);
		configure_stream_local("NAMED_VALUE_FLOAT", 1.0f);
		configure_stream_local("RC_CHANNELS", 0.5f);
		configure_stream_local("SYS_STATUS", 0.1f);
		configure_stream_local("VFR_HUD", 1.0f);
		break;

	default:
		ret = -1;
		break;
	}
```
