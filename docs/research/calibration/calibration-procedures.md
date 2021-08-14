---
hide_title: true
sidebar_label: Calibration Procedures
---

# Calibration Procedures 123

Cameras should ideally be mounted horizontally against a rigit blackplate, such as aluminium or acrylic. If movement of the entire mount cannot be eliminated it would then be prudent to ensure the cameras does not flex independently against each other.

VNC into `nvidia-desktop.local`

## For Multi-camera calibration
**Changing the pixhawk IMU frequency**

On the sd card that is to be inserted into the pixhawk device:
Create a new folder named "etc"
Create a new .txt file named "extras.txt"

> mavlink stream -d/dev/ttyACM0 -s ATTITUDE -r 100   
> mavlink stream -d/dev/ttyACM0 -s ATTITUDE_QUATERNION -r 100  
> mavlink stream -d/dev/ttyACM0 -s HIGHRES_IMU -r 100_

Save the .txt file, insert into pixhawk device, reboot device. PX4 IMU will be changed to 100Hz. Comfirm in mavlink inspector (Qgroundcontrol) or imu/data (RQT).

**Changing the trigger frequency**
Navigate to Qgroundcontrol->settings->cameras

Adjust the follow settings

> Triger mode: Time based always on 
> Trigger interface: GPIO Time
> interval: 250 ms 
> Trigger Pin Polarity: High (3.3V) 
> AUX Pin Assignment: Aux pin number

**Setting the focus of the camera.**
After mounting the cameras to the backplace, loosen the allen screw securing the lens element. Focus the camera against a target of further than 5m away.

Operate the viewfinder through the camera interface

    tcam-capture

Zoom in to focus on a far away object. Once in focus secure allen screw and ensure that the lens element is immune to loosening, as adjusting the focus of the camera after the calibration process produces undesirable results.

Identify the serial number of both cameras through tcam interface. 

**Before calibration**
Launch roscore

    Roscore

Launch mavros

    roslaunch mavros px4.launch

Refer to device_list.yaml (catkin_ws/src/tiscamera_ros/launch/device_list.yaml).
Update the camera serial number under fisheye_left, SN and fisheye_right, SN.

Make the edited files in the catkin folder

    catkin make

Launch tiscamera

    roslaunch tiscamera_ros tiscamera_ros_drone23.launch

 Launch RQT to access viewfinder during calibration

    rqt_image_view

Start the imaging capture by running tisbag script

    ./tisbag
If script is unavailable:
```bash

> rosbag record --lz4 /mavros/imu/data /tiscamera_ros/fisheye_left/camera_info /tiscamera_ros/fisheye_left/image_rect_raw /tiscamera_ros/fisheye_right/camera_info /tiscamera_ros/fisheye_right/image_rect_raw

```

If the script cannot be run due to a lack of permission, permission canbe added to file

    chmod +x tisbag
To review the bag(optional)

    Rosbag info bagname.bag

**Recording process**
Orientate the board and the camera rig such that the april5x5 target board is 2-3 meters away and fills up around 30% of the screen size. 

Slowly orientate the rig/board such that the big is positioned (and still fully visible) at the outer edge of the camera vision. Slowly rotate the board/camera to cover the entire circumference of the camera vision. At each position briefly tilt the angle of the board that is facing the camera.

Position the board/rig such that the board is in the center of the camera vision.  Slowly move the board in a circular motion to ensure maximum coverage at the center of vision. Repeat the above processes for both left and right cameras.

End the recording via ctrl-c.
The recording will be saved in a date-time.bag file.

**Calibrating the cameras.**
If kalibr isnt install on the computer, you can process the calibration through another terminal that has kalibr installed.

Update camera info in target, run-ds-none.sh with those in tisbag

> -/tiscamera_ros/fisheye_right/image_rect_raw
> -/tiscamera_ros/fisheye_left/image_rect_raw

If script is unavailable

> kalibr_calibrate_cameras --target april_5x5.yaml --bag $1 --models
> ds-none ds-none --topics /tiscamera_ros/fisheye_left/image_rect_raw
> /tiscamera_ros/fisheye_right/image_rect_raw
 
 Run the tisbag script

     ./run-ds-none.sh ./.bag file directory/bag-name.bag
     
Calibration report and camchain file will be generated.

## Calibration of IMU-Camera(Optional)
This step is usually not needed, as the calibration result is generally not accurate, especially in the relative position between the IMU and the cameras.

It might only be useful to serve as a way to determine the mounting position and coordinate systems used in both IMU and the cameras.

Update the parameters inside the imu_run.sh
```
--bag <data-time.bag> --cam <camchain.date-time.yaml> --imu imu.yaml --target april_5x5.yaml
```

If script is unavailable

> #!/bin/bash 
> kalibr_calibrate_imu_camera --bag $1 --cam $2 --imu $3 --target $4

