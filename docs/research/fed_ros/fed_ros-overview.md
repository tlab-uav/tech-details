---
hide_title: true
sidebar_label: Framework Overview
---

# FED_ROS Framework Overview

## Installation

### catkin make error: 
Project 'cv_bridge' specifies '/usr/include/opencv' as an include dir, which is not found.

##### solution:

sudo gedit /opt/ros/melodic/share/cv_bridge/cmake/cv_bridgeConfig.cmake
sudo gedit /opt/ros/melodic/share/image_geometry/cmake/image_geometryConfig.cmake
sudo gedit /opt/ros/melodic/share/image_proc/cmake/image_procConfig.cmake

find and replace "include/opencv" to "include/opencv4"

reference: https://www.cnblogs.com/long5683/p/12390807.html

