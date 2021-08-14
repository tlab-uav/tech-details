---
hide_title: true
sidebar_label: Framework Overview
---

# Basalt VIO Framework Overview

## Installation

### Install Camera Dependency
First, install the camera driver (from .deb will do):
[Tiscamera Driver](../../hardware/cameras/tiscamera-install.md)

Second, install the ROS wrapper:
[Tiscamera ROS Wrapper](https://github.com/chengguizi/tiscamera_ros)

### Install mavros Dependency

[Modified mavros for monotonic time sync](https://github.com/chengguizi/mavros/tree/monotonic)

### Basalt Main Code
Git Repository: https://github.com/chengguizi/basalt-mirror
Branch: Master

``` bash
# in src/ directory of the catkin workspace, do
git clone --recursive https://github.com/chengguizi/basalt-mirror
# git submodule update --recursive --init
cd basalt-mirror

./scripts/install_deps.sh

catkin build basalt
```