---
hide_title: true
sidebar_label: Toolchain Installation & Setup
---

# Toolchain Installation & Setup

## Toolchain installation

It is recommended to use Linux machine for PX4 development as it takes :fire:**excruciatingly**:fire: long time to compile in Windows.

If you have Ubuntu 18.04 installed (recommended), go ahead to this [link](https://dev.px4.io/master/en/setup/dev_env_linux_ubuntu.html) or follow the steps below.

:::caution
If you see errors while running any of the installation scripts, do not proceed to the next step. Check your internet connection and re-run the script until there is no error!
:::

Download PX4 Source Code and run the installation script:

```bash
git clone https://github.com/PX4/PX4-Autopilot.git --recursive
cd PX4-Autopilot
bash ./Tools/setup/ubuntu.sh # re-run this script if there are errors
```

Acknowledge any prompts as the script progress.

Download and run the ROS/Gazebo installation script:

```bash
wget https://raw.githubusercontent.com/PX4/Devguide/master/build_scripts/ubuntu_sim_ros_melodic.sh
bash ubuntu_sim_ros_melodic.sh # re-run this script if there are errors
```

You may need to acknowledge some prompts as the script progresses.

Reboot the system to complete installation.

## Test run

To verify succesful toolchain installation and setup, we will try to compile the PX4 firmware for both simulation and fmu-v2.

First, we try to compile PX4 firmware and run gazebo simulation, more details on simulation with gazebo [here](https://dev.px4.io/master/en/simulation/gazebo.html).

```
cd PX4-Autopilot
make px4_sitl gazebo
```

To takeoff, run `commander takeoff` in the PX4 shell.

:::caution
Sometimes Gazebo fails to load up on the first run. When Gazebo shows a blank window, try running the above command again.
:::

Then, try to compile PX4 firmware for fmu-v2 target, more details on different targets [here](https://dev.px4.io/master/en/setup/building_px4.html#nuttx).

```
make px4_fmu-v2
```

:::tip
1. If there is build error like [this](https://github.com/PX4/Firmware/issues/13809), follow the guide [here](https://dev.px4.io/master/en/setup/dev_env_linux_centos.html#gcc-toolchain-installation) to check compiler version.
2. If you forget the make command, use `make list_config_targets` to remind yourself.
3. After switching branch, submodules are not automatically updated, to update submodules, use `git submodule update --init`
:::
