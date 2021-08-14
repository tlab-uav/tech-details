---
hide_title: true
sidebar_label: Getting Started
---

# Software Installation

## Pre-requisite
- Xavier NX Development Kit Hardware
  - Flashed with the lastest OS from nvidia, as well as CUDA (recommand to install using recovery mode + SDK manager). Remarks: Install NVIDIA SDK manager in a Linux machine; Use jumper wire to short RCV pin with GND pin on Xavier module.
- Assume username to be `nvidia`

## Install tiscamera Camera Driver
1. Build from source and install [tiscamera core driver](/hardware/cameras/tiscamera-install.md#build-tiscamera-from-source)
2. Install from `.deb` file the `tiscamera-dutils` package, [insturctions here](/hardware/cameras/tiscamera-install.md#step-23-install-tiscamera-dutils)

## Install ROS Melodic

1. [Install ROS](/linux/ros/installation.md)
2. [Install Catkin Tools](/linux/ros/using-catkin-build.md)
3. Create the workspace, for example:
    ```bash
    cd /home/nvidia
    mkdir catkin_ws
    cd catkin_ws
    mkdir src
    catkin build # this command should suceed
    ```
4. Done, from now on all source code should be place within the `./src` folder

## Install Basic ROS Dependencies

1. Mavlink, install by apt manager: `ros-melodic-mavlink`
2. Mavros, the modified monotonic version is needed: (https://github.com/chengguizi/mavros, monotonic branch, Notes: clone the source code, the source code should be place within the ./src folder. Then go to catkin_ws folder to build the code using cmd `catkin build`)
3. Install `cv_bridge` from source, refer [here](/docs/linux/ros/cv-bridge)


## Install Camera ROS Wrapper

Installation refer to [here](/hardware/cameras/tiscamera-install.md#step-33-integrating-with-ros-tiscamera_ros).

Take special note of the `device_list.yaml` file, which is called by the corresponding `.launch` file. If the serial number of the cameras do not match, the driver will not run.

## Install VIO Code

Refer [here](/research/vio/basalt-overview.md#basalt-main-code).

