---
hide_title: true
sidebar_label: Getting Started
---

# Getting Started
## Setup 
### Drone system
1. Prepare the downloading script
   
   Running following command to download the script for installation, replace the `YOURNAME` with your account.

```
$ wget --ask-password --user=YOURNAME -c https://bitbucket.org/nusuav/pixhawk_v1/raw/a6268c9207d70f689612ac2a5d5759749897c07f/pixhawk_setup.sh 
For example:
wget --ask-password --user=Yu_ZHOU -c https://bitbucket.org/nusuav/pixhawk_v1/raw/a6268c9207d70f689612ac2a5d5759749897c07f/pixhawk_setup.sh 
```
2. Installation
   
   Set up working directory and install the repository. Note that the script will auto create the directory catkin_ws under pixhawk_DIR folder. 

```
$ export pixhawk_DIR="Your directory" (The default directory is `/media/nvidia/SD/`.)
$ sh pixhawk_setup.sh
```

3. Compiling

    The step 2 will auto compile the package, if you want to do it mannully again, please run the following command.
```
$ cd catkin_ws
$ catkin build --cmake-args -DCMAKE_BUILD_TYPE=Release
```

### Web-UI

Please Refer to the Web-UI page.

## Usage
### Step 1: Common setting before testing

1. Waypoints file 
   
    Put waypoints in pixhawk_v1/param/waypoints.txt or change the file location and name in usr_console.launch (waypoints_file param) based on your requirement. 

2. Flight parameters(optional)

- /pixhawk_v1/us_ws/nndp_cpp/include/optimization/OptimizationUtilities.h
    - Safety distance: **rTooClose**(default: 1.0)
    - Vehicle size: **rVehicle**(default: 0.4)

- /pixhawk_v1/us_ws/edt/src/edt_node_laser_realdrone.cpp
    - compress range for 2d mapping: (default: **FLYHEIGHT-0.4, FLYHEIGHT+0.2**)
        - su->updateEDTMap(FLYHEIGHT-0.4, FLYHEIGHT+0.2, center)
  
- /pixhawk_v1/us_ws/nndp_cpp/src/nndp_cpp_node.cpp
    - flight speed: **ran.loc_h**(default: 2), **ran.loc_v**(default: 1).
       Modify from 1(low speed) to 5(high speed).

4. [zed camera parameters](https://www.stereolabs.com/docs/ros/zed_node/) (optional)

- Please put calibration param under /usr/local/zed/settings with SNxxxx.conf as it's name
- Change camera param in edt.yaml file under edt package.
- Change frequency of zed from tools/ZED Exlplorer
    - Remember to change frequency param in zed.launch file
    - Remember to change the noise param in vision_sensor_fix_pixhawk.yaml as well 
- If you want to use zed only instead of VIO, change the use_zed_only param in pixhawk.launch to true and change the the param file under edt from edt.yaml to edt_mini.yaml

5. zed auto explosure (optional)

   rosrun rqt_reconfigure rqt_reconfigure

### Step 2: Running
1. simulator testing
```
$ sh v2_pixhawk.sh
```
2. Real flight testing
```
$ sh v2_pixhawk_simulation.sh

*if you want to test pixhawk only without other high level modules, then just run: "roslaunch mavros px4.launch system_id:=6(for example)"*
```
### Step 3: System checking

  1. check vio status, whether the location and heading is correct
  2. check mapping status, whether or not good to fly

### Step 4: Take off
#### Method 1: web UI
1. Check the ip adress of the drone
2. Search the address in your web browser
    You will be able to see the UI if everything goes well
3. Send command by clicking each buttons
    - Engine0
    - Takeoff
    - Mission

#### Method 2: previous user console
```
$ roslaunch usr_console usr_console.launch 
```
1. Clear previous reference on pixhawk

wait till all the plugins have been loaded and them input **engine0** command in the terminal.

2. take off

Input **Engage** command in the terminal.

3. Send waypoints command.

    - Global waypoints: **mission*** 

    This command will load the waypoints.txt where all the points are in global NWU frame (True North).

    - Local waypoints: **waypoints*** 

    This command will load the waypoints.txt file but all the waypoints is in local NWU frame.

### step 5: landing

## Useful Command
- Screen
  - Re-attach screen: screen -r nameOfSession
  - Detach screen: ctrl+A+D
  - Kill all sessions
  
- Check GPU usage
```
$ sudo ~/tegrastats --interval <int> --logfile <out_file> &
For example:
$ sudo ~/tegrastats --interval 5000 --logfile ~/pixhawk #This command probes every 5 seconds
```
The out put is similar to this:
```
RAM 2135/7855MB (lfb 1057x4MB) CPU [2%@2035,0%@2035,0%@2035,2%@2035,2%@2036,2%@2035] EMC_FREQ 1%@1866 GR3D_FREQ 0%@1300 APE 150 MTS fg 0% bg 0% BCPU@30C MCPU@30C GPU@29C PLL@30C Tboard@28C Tdiode@28.25C PMIC@100C thermal@29.4C VDD_IN 3104/4029 VDD_CPU 291/730 VDD_GPU 145/207 VDD_SOC 727/746 VDD_WIFI 0/180 VDD_DDR 1248/1375
```
Please check [tegrastats utility reports](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%2520Linux%2520Driver%2520Package%2520Development%2520Guide%2FAppendixTegraStats.html) to get more info about the stats.

The data we normally care about are:
>  - **RAM X/Y**: X is the amount of RAM in use in MB.
>  - **CPU [X%@Z, Y%@Z,...]**: Load statistics for each of the CPU cores relative to the current running frequency Z.
>  - **GR3D_FREQ X%@Y**: Percent of the GR3D that is being used, relative to the current running frequency. GR3D is the GPU engine.

- Hotspot setup
  - Enable broadcast of SSID (self wifi mode)
  ```
  $ echo 2 > /sys/module/bcmdhd/parameters/op_mode
  ```
  - Change back to normal wifi mode
  ```
  $ echo 0 > /sys/module/bcmdhd/parameters/op_mode
  ```

  -  To make it persistent
  Add line `options bcmdhd op_mode=2` in `nano /etc/modprobe.d/bcmdhd.conf`

  - Change ip address
  Add line `address1=192.168.1.150/24`

- Fan
  - stop fan
  ```
  $ sudo -s 
  $ cd /sys/kernel/debug/tegra_fan/
  $ echo 0 > target_pwm
  ```
  - Check temperature
  ```
  $ watch -n 1 cat /sys/class/thermal/thermal_zone?/temp 
  ```

- Submodule
  - Add a new submodule with a branch name
  ```
  $ git submodule add -b branch_name  https://bitbucket.org/nusuav/repo_name.git
  ```
  - Remove a submodule
  ```
  $ git submodule deinit -f submodule_name (The name of the submodule is the same as the repo's name)   
  $ rm -rf .git/modules/submodule_name
  $ git rm -f submodule_name
  ```
