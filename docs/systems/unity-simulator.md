---
id: unity-simulator
title: Unity Outline
sidebar_label: Unity Simulator

---
# Unity Simulator : Outline

## Summary
summary: The simulator is introduced in this post. Without the presence of the real vehicle and further ado, algorithm developers can swiftly test, debug and revise their codes in the provided mock-up UAV in the simulated environment which is modelled comparable to the actual test field.

## Overview
Ahead of the physical UAV platform being built up, software codes and algorithms to be implemented on the drone later on can be validated and substantiated by means of **Unity3D** simulation. Without the presence of the real vehicle and further ado, algorithm developers can swiftly test, debug and revise their codes in the provided mock-up UAV in the simulated environment which is modelled comparable to the actual test field.

As for the whole simulation structure, all the sections can be categorized and divided into two sides: Unity3D side, which resembles the information and data flow for the UAV hardware excluding the on-board CPU, and the ROS side, which acts as the `brain' of the UAV, processes acquired sensor data and distributes commands and tasks. All the ROS codes are run on an actual TX2. As a result, the flow of data transmission is as follows: firstly, sensors on the UAV (Unity3D side) acquire data of the surroundings; secondly, the data are sent to the on-board CPU, in other words, TX2 (ROS side) to be processed and transformed into task commands; thirdly, task commands are sent to the motion controller Pixhawk (Unity3D side) and control signals in PWM are generated; fourthly, PWM signals are transmitted to the motors and propellers (Unity3D side) for them to spin and generate upward thrust for the drone; fifthly, the drone therefore can manoeuvre in the built-up environment (Unity3D side) and the on-board sensors can collect data accordingly; lastly, the data goes to the TX2 again in the first step and that closes the loop for data flow. In this method, a hardware-in-the-loop simulation is realized, because the TX2 is to be installed onto the actual drone afterwards. The full simulation is conducted in the following manner: the drone takes off outside of the building, flies through the gate and avoids the obstacles, detects and tracks human targets; when all the requirements are achieved, the simulation is considered completed. 

Below is about the excutable file for the simulator and the communicate socket between ROS and Unity simulator supporting UDP protocol.

 

## Unity Socket
### Subscribed Topics
- */mavlink/from_pixhawk (mavros::Mavlink)*

MAVLink messages, which will be send to simulator.

### Published Topics
- */hil/sensor/laser_altitude (sensor_msgs::Range)*

Altitude data measured by laser from simulator.
- */hil/sensor/imu (sensor_msgs::Imu)*

IMU data from simulator.
- */hil/sensor/magnetic_field (sensor_msgs::MagneticField)*

Magnetic field data from simulator.
- */hil/sensor/absolute_pressure (sensor_msgs::FluidPressure)*

Absolute pressure data from simulator.
- */hil/sensor/differential_pressure (sensor_msgs::FluidPressure)*

Differential pressue data from simulator.
- */hil/sensor/pressure_altitude (sensor_msgs::Range)*

Altitude data measured by pressure from simulator.
- */hil/sensor/temperature (sensor_msgs::Temperature)*

Temperature data from simulator.
- */hil/sensor/gps (sensor_msgs::NavSatFix)*

GPS data from simulator.
- */hil/state/ground_truth (nus_msgs::StateWithCovarianceStamped)*

Ground truth data from simulator.
- */hil/state/measurement (nus_msgs::StateWithCovarianceStamped)*

Measurement data from simulator.

 

### Parameters
- *~server_ip* (string, default: 172.16.142.34)

Unity simulator IP address.
- *~server_port_basic* (int, default: 26000)

Unity simulator port for basic data.
- *~server_port_image* (int, default: 26500)

Unity simulator port for image data.
- *~server_port_stereo* (int, default: 26510)

Unity simulator port for stereo image data.
- *~server_port_laser2d* (int, default: 26600)

Unity simulator port for 2D laser data.
- *~server_port_laser3d* (int, default: 26700)

Unity simulator port for 3D laser data.
- *~server_port_mavlink* (int, default: 27000)

Unity simulator port for MAVLink data.
