---
hide_title: true
sidebar_label: Basalt Backend (VioEstimator)
---

# Basalt Backend Walkthrough

## Overview & Class Names

The backend of the VIO framework is contained with the base class `VioEstimatorBase` (defined in `vio_estimator.h`) which is the parent class of two type of the estimator possible:

- `KeypointVioEstimator`(defined in `keypoint_vio.h`), and
- `KeypointVoEstimator`(defined in `keypoint_vo.h`)



``` cpp
// how the factory class initialise to different type of estimator depends on use_imu variable
VioEstimatorBase::Ptr VioEstimatorFactory::getVioEstimator(
    const VioConfig& config, const Calibration<double>& cam,
    const Eigen::Vector3d& g, bool use_imu) {
  VioEstimatorBase::Ptr res;

  if (use_imu) {
    res.reset(new KeypointVioEstimator(g, cam, config));
  } else {
    res.reset(new KeypointVoEstimator(cam, config));
  }

  return res;
}
```

For the purpose of this walkthrough honly `KeypointVioEstimator` is conerned. We are interested in understanding how optical flow observations (keypoints) are used to form keyframes, and 3D landmarks.

## I/O of Base Class of VioEstimator

The **inputs** are optical results (observations of keypoints) and imu inputs:

1. A TBB queue, `vision_data_queue` of type `OpticalFlowResult::Ptr`, where each optical flow result contains 
   1. the 64-bit timestamp,
   2. a vector named `observations`, containing a map between the keypoint ID `KeypointId`  and its 2D transformations `Eigen::AffineCompact2f` (2D transformation literally represent the keypoint 2D location in the observing camera frame, aka. the uv coordinates)
   3. and a pointer to the original image data (`std::vector<ImageData>`), for the current frame
2. A TBB queue, `imu_data_queue` of type `ImuData::Ptr`, storing the timestamp, and the accelerometer and gyroscope information

The **outputs** are output states, ⚠️ marginalised data?, and vio visualisation data:

1. A pointer to TBB queue `out_state_queue` of type `PoseVelBiasState::Ptr` containing all the states which are: `t_ns` timestamp of the state in nanoseconds; `T_w_i` pose of the state; `vel_w_i` linear velocity of the state; `bias_gyro` gyroscope bias; `bias_accel  `accelerometer bias.
2. A pointer to TBB queue `out_marg_queue` of type `MargData::Ptr`
3. A pointer to TBB queue`out_vis_queue` of type `VioVisualizationData::Ptr`



## Initialisation

With the incoming flow of visual optical flow observations and IMU data, the backend has a way to initialise itself with a proper initial pose (and velocity) and bias estimate. We can choose to initialise either just the biases and attitude (quaternion), or with the transformation and velocity as well.

**Key things to note:**

- The current implementation in Basalt only does bias and quaternion initialisation (all others set): bias is <u>set them to zero</u>, and attitude is done by two-vector calculation from single data point of imu -> **TODO [Improvement]**
- The initial IMU-world transformation `T_w_i_init` has a very special way to initialise, which is yaw ignorant:
  - First the accelerometer raw reading is used (one data point), it is assumed to be the gravity vector
  - The gravity vector is rotated to be aligned with the positive Z axis, this rotation action is recorded as a quaternion. This quaternion is essentially performing basis changing from body frame to global frame.
  - That is to say, the transformation is only defined by the plane that the gravity vector and the +ve z-axis make as well as the angle itself. This does not take account into the correct yaw, a.k.a the initial heading is not consistent, which is a function of how the IMU is mounted and its initial orientation.
  - **NOTE**: Therefore, with a fixed mounting between the IMU and camera, and with a fixed up direction of the whole rig (e.g. the drone), we can pre-calculate the rotation matrix to make the initialised $T$ transformation matrix to face our desired coordinate convention (e.g. NWU).
- The pre-integration buffer `imu_meas` is also initialised here, taken account of the bias (which is always set to zeros in the implementation)
- The bundle adjustment states `frame_states` of type ` Eigen::aligned_map<int64_t, PoseVelBiasStateWithLin>`
- `marg_order`??
- The processing thread is created within the `initialize()` function, which is basically a **while** loop, by the means of lamda function and `std::thread`.



## The Processing Thread (within `KeypointVioEstimator`)

**Configs**:

- `vio_enforce_realtime` is used to set when the backend cannot catch up with optical flow results. It will throw away all previous results, except the latest one in the queue.

  ``` cpp
  if (config.vio_enforce_realtime) {
          // drop current frame if another frame is already in the queue.
          while (vision_data_queue.try_pop(curr_frame)) {skipped_image++;}
          if(skipped_image)
            std::cerr<< "[Warning] skipped opt flow size: "<<skipped_image<<std::endl;
        }
        if (!curr_frame.get()) {
          break;
        }
  ```

  

- `vio_min_triangulation_dist` is used to determine whether the two camera frames are suitable for triangulation in generating the landmarks, during a keyframe initialisation

- `vio_new_kf_keypoints_thresh` is the threshold for the ratio between tracked landmarks and total tracked keypoints (e.g. raito of 0.7)

- `vio_min_frames_after_kf` 

**Calibs**:

- `cam_time_offset_ns` offset of the camera in time, should be normally 0

  ``` cpp
  // Correct camera time offset
        curr_frame->t_ns += calib.cam_time_offset_ns;
  ```

After initialisation, the actual processing will only start with two concecutive frames (when both `prev_frame` and `curr_frame` are defined):

- Pre-integration is performed, between the two frames, using the latest bias estimation. Blocking may happen, as it reads IMU buffer all the way until one pass the current frame's timestamp (`while (data->t_ns <= curr_frame->t_ns)`)
  - Note: the integration will ensure the upper integral timestamp is at least the current frame timestamp (it will make fake IMU measurement by shifting the last IMU readings, when needed)
- At the same time, bias correction `getCalibrated()` are also done for both gyro and accelerometer
- The bulk of the calculation is doen within the `measure(curr_frame, meas)` function, which is discussed next

## The `Measure()` Routine

The `measure()` routine takes in the current frame optical flow observations, as well as the IMU pre-integration results.



### IMU measurements Processing

- `frame_states` is updated with a entry key `last_state_t_ns` (current frame timestamp), to be stored with the IMU predicted state
- `imu_meas` is also updated by indexed by the previous frame's timestamp
- This whole step might be skipped if IMU measurement is not passed in

### Optical Flow Results Processing

Pre-processing:

- `prev_opt_flow_res` stores, with key in timestamp, the optical flow measurement struct pointer, up to the current time frame

- For each camera frame, iterate through all observations. If that observed keypoint is already a landmark, add the observation to the landmark database; if not put it to the unconnected observation **set**.

  ``` cpp
  // skeleton
  for (size_t i = 0; i < opt_flow_meas->observations.size(); i++)
      for (const auto& kv_obs : opt_flow_meas->observations[i])
          if (lmdb.landmarkExists(kpt_id)){
              num_points_connected[tcid_host.frame_id]++;
          }else{
              unconnected_obs0.emplace(kpt_id);
          }
  ```

Key-framing:



