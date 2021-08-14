---
hide_title: true
sidebar_label: ZED Camera
---

## ZED SDK Download and Installation
- Download from https://www.stereolabs.com/developers/release/, use version ZED SDK for Ubuntu 18.04
- To check cuda version
```bash
nvcc --version
```
- Based on the version, download the ZED SDK
- Open the folder and run terminal
```bash
./ZED________ # run the program
```
:::note
If you have no Permissions to execute the program, you may need to [set permissions](http://172.18.72.192:8888/tech-details/docs/linux/getting-started/basics-bash-file-system) first.
:::

## ZED ROS Wrapper
The ZED ROS Wrapper lets you use the ZED stereo cameras with ROS.
### Installation
### Prerequisites
1. Ubuntu 18.04
1. ZED SDK and CUDA dependency
1. ROS Melodic or ROS Kineti

### Build the Packages
```bash
$ cd ~/catkin_ws/src
$ git clone https://github.com/stereolabs/zed-ros-wrapper.git
$ cd ../
$ rosdep install --from-paths src --ignore-src -r -y
$ catkin_make -DCMAKE_BUILD_TYPE=Release
$ source ./devel/setup.bash
```
:::note
Create a catkin work space first if 'catkin_ws' cannot be found
::: 




## Modification to Settings Folder (if needed):

- add soft symlink from `/usr/local/zed/settings` to `/media/nvidia/SD/catkin_ws/src/pixhawk_v1/param/zed/settings`