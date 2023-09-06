---
hide_title: true
sidebar_label: Multiagent PX4 SITL
---

# Lessons Learnt from launching multiple instances of PX4 SITL

If using v1.13.0, there might be the possibility where you are unable to go into offboard mode and there is warning shown in the QGroundControl that says failsafe enabled/disabled. This implies that the drone is looking out for an RC but none is detected (which is strange for SITL). But nonetheless, the workaround is as follows: 

1. Go to QGroundControl -> application settings, and then enable the `virtual joystick` option. This alone does not solve the problem because you have multiple agents but only one virtual joystick so you can only control 1 drone at a time. So when you switch to different drones, the other drones will not detect the RC and then it will go into fail safe mode. Hence, second step is important

2. Go to QGroundControl, after connection to the drone, set the following parameter `COM_RCL_EXCEPT` to 4 (which is offboard). This provides an exception to require comms when it is in offboard mode. And thus circumnavigate the problem. Unsure if the previous step is required if you straight up use this. But nonetheless, this is the workaround


If there is a need to have more than 10 drones, you can do the following (from https://discuss.px4.io/t/multi-vehicle-gazebo-sitl-port-configuration/32753)

1. Go to the PX4 firmware `ROMFS/px4fmu_common/init.d-posix/px4-rc.mavlink` file and then change the udp offboard port number to be starting from some other port numbers. This should allow more than 10 drones to be spawned.
