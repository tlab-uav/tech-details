---
hide_title: true
sidebar_label: System Tuning & Configs
---

# Basalt VIO Tuning & Configs

The running of the algorithm through `roslaunch`, please refer to the two example files `./launch/tis_23_with_gui.launch` and `./launch/tis_23.launch`

It has three important parameters:
1. `show_gui` to determine if the live 3D tracking is presented through GUI
2. `calib_file` to locate the basalt-specific camera-imu calibration file
3. `config_path` to locate basalt vio configurations

## Update Camera Calibration

`calib_file` should be a `.json` file, typicaly located in `./data` folder. It is different from Kalibr format. Therefore, a convenient python script is provided in the [source code](https://github.com/chengguizi/basalt-mirror/blob/master/data/ds_kalibr_camimu.py). (To run, it has scipy and sophus as dependencies)

Convert the Kalibr's yaml file to json file like this
```bash
./ds_kalibr_camimu.py camchain-imucam-2021-01-27-14-52-36.yaml tis_23

```
:::note IMU-Camera Time offset
`"cam_time_offset_ns": -1897133` in the json file indicate the time offset in nanosecond. Meaning: imu time = camera time + cam_time_offset_ns. A negative value means image is head of imu data.
:::

## Tuning Basalt Configrations

### Front End Optical Flow:
- `optical_flow_epipolar_error` could be smaller if the calibration is good, author's default is 0.01, can be as large as 0.05 if calibration is off
- `optical_flow_skip_frames` will control how frequent the flow tracking results to be send to backend optimisation. For example, a number 2 means only have of the frames are sent to optimisation: If the camera are capturing at 20Hz, the pose output will be at 10Hz.

:::note Front End Debugging
`config.feature_match_show` could be set to true to evaluate optical flow matching performance. Connected lines means successful left-right matching
:::

### Back End Optimisation:
- `vio_max_states` number of latest imu-pose states (shown in red in gui)
- `vio_max_kfs` number of keyframes (shown as blue in gui)
- `vio_min_frames_after_kf` the minimum frames apart, where two keyframes are taken. This is to avoid taking keyframes too frequently
- `vio_new_kf_keypoints_thresh` the higher the threshold, the more frequent the keyframe is taken.

Three more important parameters:
- `vio_obs_std_dev` the lower the standard deviation, the higher weight the back end will trust the optical flow results (hence less trust on imu prior). Typical value: 0.1 - 0.5
- `vio_obs_huber_thresh` to bound the optical flow loss, huber loss is used. The higher the value, the more weights is put on the optical results overall. Typical value 5.0 - 1.0
- `vio_min_triangulation_dist` this should be set just slightly smaller than the baseline of the cameras. This avoid triangulation of two frames that are physically too close in space. (Too close gives more error)