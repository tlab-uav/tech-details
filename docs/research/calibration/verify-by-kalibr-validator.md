---
hide_title: true
sidebar_label: Verify by Kalibr Validator
---

# Verify Camera Calibration by Kalibr Validator

Launch roscore

    Roscore
Launch tiscamera

    roslaunch tiscamera_ros tiscamera_ros_drone23.launch

Run the kalibr validator 

    kalibr_camera_validator --cam camchain.yaml --target target.yaml

@yanfeng


Reference:
https://github.com/ethz-asl/kalibr/wiki/calibration-validator

