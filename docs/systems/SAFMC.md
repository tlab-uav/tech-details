---
hide_title: true
sidebar_label: Building SAFMC Drone
---

## Building SAFMC Drone

### Components Required

These are the components required to build a SAFMC Drone

1. Radxa-zero - This is the onboard computer (OBC). See Fig. \ref{obc}
2. Flight controller (F405 Flywoo) - This is the low level controller that contains the PX4 software which will then drive the motors.
3. On the OBC there's the antenna which needs to be attached, otherwise could have surge in power and spoil the OBC.

### Hardware Fix

These are some of the steps required to get the hardware set-up

1. Need to solder red wire to 5V and black wire to GND and a USB C connector. Then heat shrink for final touch
2. The serial port pins (the three pins on the Radxa) need to be soldered onto the OBC (see Fig. \ref{obc})


:::note 
Last time, the OBC was driven directly by the battery pack. However, now they are going to use the output tapping points of the flight controller to draw 5V to the OBC. (see Fig. \ref{pinout} which shows the 5V and GND pinout.).
:::

1. Git clone the **VRPN official repository** from `https://github.com/ros-drivers/vrpn_client_ros`. Clone this into the `src` directory of your catkin_ws along with the Auto Fast Flt_drone or the other modules.
``` bash
    git clone https://github.com/ros-drivers/vrpn_client_ros
```

2. Go into **vrpn_client_ros/launch** and change the **sample.launch** file. 

``` xml
    <arg name="server" default="******"/> 
    - replace with the IP of computer hosting Vicon.

    <remap from="/vrpn_client_node/*****/pose" to="/mavros/vision_pose/pose" /> 
    - replace with the object name created in Vicon.
```
3. Go back to the catkin_ws directory and `catkin build`.

4. Now you are able to launch the VRPN client node using `roslaunch vrpn_client_ros sample.launch`. Test to see whether there are topics published via opening another terminal and 
``` bash
    rostopic list 
    rostopic echo /mavros/vision_pose/pose
```
