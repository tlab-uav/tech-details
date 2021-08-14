---
hide_title: true
sidebar_label: Post-flashing Dos
---
# Post-flashing Dos 
(TX2 Platform for ROS-Robotics)

## Check L4T and Jetpack version
-`cat /etc/nv_tegra_release`, e.g. R32.3.2 is the L4T Version

## Install Absolute Dependencies
0. `sudo apt update` to the latest
1. Install CUDA and cuDNN etc. from Nvidia SDK Manager, over the USB Cable (check install by `nvcc --version` and `~/.bashrc` export 2 lines are there)
2. Install ROS, and `apt install python-catkin-tools python-rosdep`; do `sudo rosdep init`
4. Setup SD Card `/etc/fstab`
5. Add user `nvidia` to dialout group, to access tty serial port normally
6. Install pytorch and torchvision
7. Install ZED SDK
8. `sudo apt install ros-melodic-mavlink`

## Downgrade OpenCV
1. For new Jetpack, the OpenCV version is 4.1+. Whereas ROS 1 needs Version 3.x to function. Hence, downgrade by using Nvidia's SDK Manager's .deb file , e.g. 
	- `libopencv_3.3.1-2-g31ccdfe11_arm64.deb`
	- `libopencv-dev_3.3.1-2-g31ccdfe11_arm64.deb`
	- `libopencv-python_3.3.1-2-g31ccdfe11_arm64.deb`
	- `libopencv-samples_3.3.1-2-g31ccdfe11_arm64.deb`

## Install Optional Dependencies
1. For Pangolin OpenGL Display
	- `sudo apt install libgl1-mesa-dev libglew-dev`
	- `sudo apt install libegl1-mesa-dev libwayland-dev libxkbcommon-dev wayland-protocols`
	- `sudo python -mpip install numpy pyopengl Pillow pybind11`
2. librealsense for Jetson from [official](https://github.com/IntelRealSense/librealsense/blob/master/doc/installation_jetson.md)

## Python Dependencies
- `pip install --upgrade pip`, same to pip3
- `pip install` and `pip3 install` the following
	- cpython (may try `pip install --upgrade`)
	- numpy
	- scipy (need `gfortran` compiler)

## Convenience
1. Add right-click to create new file: `touch ~/Templates/Empty\ Document`
2. Add system monitor applet at status bar (gnome extension)
3. Setting of power button to shutdown without prompt of 60 seconds
4. Do not blank screen display

## Tools
1. Install VS Code
2. Install Samba
3. Install git, and configure timeout for asking password `git config --global credential.helper 'cache --timeout=300'`
4. catkin build, make it default Release mode `catkin config --cmake-args -DCMAKE_BUILD_TYPE=Release`

## Hardware / Kernel
1. Increase USBFS buffer size (uboot at /boot/extlinux/extlinux.conf)

## Web Applications

1. Nodejs and yarn
2. Nginx `sudo apt install nginx`


## OpenCV 4 from Source
0. It is required, if contrib features of OpenCV is to be used. Does not come with shipped .deb
1. build it from source, using a external ext4 disk drive, as large space is needed
2. for TX2, the `CUDA_ARCH_BIN` version is 6.2
