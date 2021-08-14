---
hide_title: true
sidebar_label: Installation
---


# Installation of ROS
### Installation
### 1.1 Setup your sources.list
```
sudo sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'
```
### 1.2 Setup your keys
```
sudo apt-key adv --keyserver 'hkp://keyserver.ubuntu.com:80' --recv-key C1CF6E31E6BADE8868B172B4F42ED6FBAB17C654
```

:::tip
If you experience issues connecting to the keyserver, you can try substituting hkp://pgp.mit.edu:80 or hkp://keyserver.ubuntu.com:80 in the previous command.
:::

### 2.0 Make sure Debian package index is up-to-date
```
sudo apt update
```
### 2.1 Install ROS (Full Desktop Version)

Desktop-Full Install: (Recommended) : ROS, rqt, rviz, robot-generic libraries, 2D/3D simulators and 2D/3D perception
```
sudo apt install ros-melodic-desktop-full
```
### 2.2 Environment setup
It's convenient if the ROS environment variables are automatically added to your bash session every time a new shell is launched:
```
echo "source /opt/ros/melodic/setup.bash" >> ~/.bashrc
source ~/.bashrc
```
:::tip
If you have more than one ROS distribution installed, ~/.bashrc must only source the setup.bash for the version you are currently using.
:::

If you just want to change the environment of your current shell, instead of the above you can type
```
source /opt/ros/melodic/setup.bash
```
### 3.0 Dependencies for building packages
To install this tool and other dependencies for building ROS packages, run:
```
sudo apt install python-rosdep python-rosinstall python-rosinstall-generator python-wstool build-essential
```
### 3.1 Initializing rosdep
Before you can use many ROS tools, you will need to initialize rosdep. rosdep enables you to easily install system dependencies for source you want to compile and is required to run some core components in ROS. If you have not yet installed rosdep, do so as follows:
```
sudo apt install python-rosdep
```
With the following, you can initialize rosdep.
```
sudo rosdep init
rosdep update
```






@yongtian