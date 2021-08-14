---
hide_title: true
sidebar_label: Getting Started with Kalibr
---

# Getting Started with Kalibr

Kalibr is a ROS Package that is capable of multi-camera calibration which consist of:
1. **Intrinsic calibration** of each individual cameras (camera model parameters)
2. **Extrinsic calibration** of the multiple cameras (spatial transformation)
3. Optionally, the **camera-imu extrinsic calibration**, and time offset calibration. This function is tested to be not very accurate, so less used.

More detailed documentation about the Kalibr package is available here https://github.com/ethz-asl/kalibr/wiki.

## Download and Build
:::warning
Do not download from [official repository](https://github.com/ethz-asl/kalibr)! This is because our calibration board is custom-made with different Apriltag (QR Code) IDs, the official code will not detect the corners correctly.
:::

Git Repository: https://github.com/chengguizi/kalibr (default master branch)

Kalibr is a ROS package, so it is to be cloned into the  `src/`  directory of the caktin workspace.

This version builds on top of the official repository, which:

-   works with a calibration board with non-zero  `low_id`
-   works correctly with Double Sphere Camera Model

# Installation processs
Ensure that ROS melodic and catkin are installed.

Install the build and run dependencies:

    sudo apt-get install python-setuptools python-rosinstall ipython libeigen3-dev libboost-all-dev doxygen libopencv-dev ros-melodic-vision-opencv ros-melodic-image-transport-plugins ros-melodic-cmake-modules python-software-properties software-properties-common libpoco-dev python-matplotlib python-scipy python-git python-pip ipython libtbb-dev libblas-dev liblapack-dev python-catkin-tools libv4l-dev 
    
    sudo pip install python-igraph --upgrade

Create a catkin workspace inside catkin folder


    mkdir -p ~/kalibr_workspace/src    
    cd ~/kalibr_workspace    
    source/opt/ros/melodic/setup.bash    
    catkin init    
    catkin config --extend /opt/ros/melodic    
    catkin config --merge-devel # Necessary for catkin_tools >= 0.4. 
    catkin config --cmake-args -DCMAKE_BUILD_TYPE=Release

Navigate to catkin's src folder, clone custom repo

    cd ~/kalibr_workspace/src  
    git clone https://github.com/chengguizi/kalibr.git

Make kalibr

    catkin make kalibr

It takes a while to compile.
Install Sophus

    sudo apt-get install ros-melodic-sophus

Once the build is finished you have to source the catkin workspace setup to use Kalibr
source ~/kalibr_workspace/devel/setup.bash

More on catkin build, refer  [here](http://172.18.72.192:8888/tech-details/docs/linux/ros/using-catkin-build). To verify the installation, command  `kalibr_calibrate_cameras`  should exist.



More on catkin build, refer [here](../../linux/ros/using-catkin-build.md). To verify the installation, command `kalibr_calibrate_cameras` should exist.

It is recommanded to use our calibration server instead.

## Using Our Calibration Server

However, we have a local server dedicated for calibration at 

> IP address: `172.16.141.132` (NUS network)

For detailed calibration steps, please follow these [instructions](./calibration-procedures.md).

## Knowledge Required for Camera Calibration Work

- Familiar with **Rotation group $SO(3)$** (special othorgnonal group in dimension 3) and its two common representations, including
    - Rotation matrix $R$ (dimensions of $\mathbb{R}^{3 \times 3}$), and 
    - Quaternion $q$ (dimensions of $\mathbb{R}^{4}$)
- Faimiliar with **special Euclidean group** $SE(3)$ and its representation as
    - Homogenous transformation matrix $T$ (dimensions of $\mathbb{R}^{4 \times 4}$)
- Ability to express the rotation relationship between two coordinate frames, and be confortable with the notations like $T_i^c$ or $T_{ic}$ or T_i_c (denotes camera in imu frame).
### Reading Materials

Basics on rotations and rigid-body motions
- Lecture 8 - 10 from http://vision.stanford.edu/teaching/cs131_fall1415/schedule.html
- Note on Camera Models https://web.stanford.edu/class/cs231a/course_notes/01-camera-models.pdf
- Modern Robotics video series, first three videos of chapter 3 [YouTube](https://www.youtube.com/watch?v=29LhXWjn7Pc&list=PLggLP4f-rq02vX0OQQ5vrCxbJrzamYDfx&index=10)
- An Invitation to 3-D Vision, the first three chapters

More regarding quaternions:
- <a
  target="_blank"
  href={require('./standarised_use_of_quaternions.pdf').default}>
  Standarised Use of Quaternions [PDF]
</a>