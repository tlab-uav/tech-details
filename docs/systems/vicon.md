---
hide_title: true
sidebar_label: Vicon Setup
---

import drone_with_vicon_markers from './vicon/assets/drone_with_vicon_markers.jpg';
import vicon_tracker_orientation from './vicon/assets/vicon_tracker_orientation.jpg';
import vicon_tracker_ui_1 from './vicon/assets/vicon_tracker_ui_1.jpg';

# Vicon with PX4/ROS 
Setting up the vicon is relatively simple. There are 3 main steps to interface the vicon with the PX4:
1. Creating the vicon object 
2. Setting up a VRPN Client connection to obtain the vicon pose as a ROS Topic.
3. Passing the Vicon pose to the PX4 flight controller via an offboard computer.

The Vicon room working dimensions are slightly more than 3.5 (width) by 4.64m (Length), without eating into the vicon camera space.

## Vicon Object Setup 
1. Place the **Vicon balls** (about 3 or 4) onto the drone. It should be visible for the Vicon cameras to track. An example is shown below:

<img src={drone_with_vicon_markers} style={{width: 200}} />

2. Place the object into the Vicon tracking area, and someone at the computer should be able to see the various points of the vicon balls in the program. Please note the folloing IMPORTANT pointers.
    - Orientation of item: Vehicle's x-axis (forward) needs to be aligned with the x-axis (RED) of the vicon system.
    - Position: Doesn't matter but best to put it in the middle of the vicon room setup to provide the best possible angle and position for initializing the vicon objects.
<img src={vicon_tracker_orientation} style={{width: 400}} />

3. **Select all** the Vicon trackable points by `ctrl` or `shift` and clicking all the points in the area. 

4. Create a **name** for the object, save it and enable tracking for the object. The object here is named `drone0`
<img src={vicon_tracker_ui_1} style={{width: 400}} />

:::tip
The name you save the object as is IMPORTANT. When obtaining the vicon object pose using vrpn_client_node, it will be advertised as `/vrpn_client_node/*****/pose`. This is why we will have to remap the topic later by adding `<remap from="/vrpn_client_node/*****/pose" to="/mavros/vision_pose/pose" />` in sample.launch in the **Launch Setup**.
:::

6. To navigate around the 3d visualization. You can:
    - Orbit: Left mouse click
    - Pan: Left and right mouse click
    - Zoom: Right mouse click and move up or down

## ROS VRPN Client Setup

:::note 
Important to download the **VRPN library** on ROS. The Debian package can be downloaded via the commands below :
``` bash
sudo apt-get update
sudo apt-get install ros-DISTRO-vrpn-client-ros
```
Set DISTRO to whatever ROS distribution you are using now (noetic, kinetic, etc.)
:::

1. Git clone the **VRPN official repository** from `https://github.com/ros-drivers/vrpn_client_ros`. Clone this into the `src` directory of your catkin_ws:
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

## PX4 and VICON Setup 
You will have to modify some PX4 parameters to accept the vicon pose as an external vision topic. [Reference](https://docs.px4.io/main/en/ros/external_position_estimation.html) 

1. The offboard computer will run the MavROS node which will subscribe to the `/mavros/vision_pose/pose` topic. MavROS will then map this ROS Topic onto it's mavlink equivalent `VISION_POSITION_ESTIMATE`. Additional detail: This is mapped to the uORB topic `vehicle_visual_odometry` which the PX4 operating system uses but it is not crucial to know that. 

2. We need to modify the following PX4 parameters to work with the vision pose estimate: 
    - EKF2_AID_MASK:   
        - Enable the bits that allow fusion with vision:
            - All other bits to false
            - Bit 3: Set to true to enable vision position fusion
            - Bit 4: Set to true to enable vision yaw fusion
    - EKF2_EV_NOISE_MD: 
        - Set to true. This is so that we can use noise values from PX4 parameters directly.

## Troubleshooting
1. Firewall have been known to cause problems when establishing connection between the VRPN server and clients, so try disabling them first if you have connection issues
2. Check that the vicon computer is connected to the same wifi network as the devices receiving the Vicon topics.
3. Vicon cameras not starting up:
    - Is computer connected to Vicon LAN? If not, on the Vicon computer, try disabling and re-enabling the network adapter for the vicon LAN.