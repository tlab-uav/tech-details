---
hide_title: true
sidebar_label: Crazyflie
---

## Setting up environment to interact with Crazyflie

### Dependencies Required

1. ROS2 - Try install Galactic on Ubuntu 20.04 `https://docs.ros.org/en/galactic/Installation/Ubuntu-Install-Debians.html`. Follow the steps in the website as given.

:::note 
Note that ROS2 is different from ROS1. Source the `local_setup.bash` file instead of `setup.bash` in the workspace that you have built and it is located in the install folder after built. Some other things that are different also include the fact that there's no catkin build. Instead it is colcon.
:::

2. Crazyswarm2 ros packages `https://github.com/IMRCLab/crazyswarm2`. This provides high level API for launching multi-crazyflie. The crazyflie firmware should have already been flashed into the hardware by now. This repo provides highlevel API to interface with the firmware and communicate via various means such as using ESP radio etc. Follow the instructions here `https://imrclab.github.io/crazyswarm2/installation.html` to install. Take note that for SITL, do step 5. This is because you need to have the crazyflie firmware on your local comp to perform the software in the loop functions.

3. Install the GUI for monitoring of Crazyflie status - cfclient `https://www.bitcraze.io/documentation/repository/crazyflie-clients-python/master/installation/install/`

```bash
sudo apt install git python3-pip libxcb-xinerama0
pip3 install --upgrade pip
sudo groupadd plugdev
sudo usermod -a -G plugdev $USER
####### Do note that the following cat to EOF is 1 single command
cat <<EOF | sudo tee /etc/udev/rules.d/99-bitcraze.rules > /dev/null
# Crazyradio (normal operation)
SUBSYSTEM=="usb", ATTRS{idVendor}=="1915", ATTRS{idProduct}=="7777", MODE="0664", GROUP="plugdev"
# Bootloader
SUBSYSTEM=="usb", ATTRS{idVendor}=="1915", ATTRS{idProduct}=="0101", MODE="0664", GROUP="plugdev"
# Crazyflie (over USB)
SUBSYSTEM=="usb", ATTRS{idVendor}=="0483", ATTRS{idProduct}=="5740", MODE="0664", GROUP="plugdev"
EOF
sudo udevadm control --reload-rules
sudo udevadm trigger
pip3 install cfclient
```

After which, you can launch the cfclient, on your terminal by typing `cfclient`. To configure your crazyflie, plug in the crazyflie to USB of your laptop, scan and connect. Can specify the address of the radio of your crazyflie here as well.


### Launch multi Crazyflie

1. Recall that we have already installed and built the ROS2 packages from `https://imrclab.github.io/crazyswarm2`. Then rmb to source `install/local_setup.bash` and then you can continue with examples from here `https://imrclab.github.io/crazyswarm2/usage.html`.
2. The sample config files are available in the `/crazyflie/config` folder. Modify the config files to suit your needs
3. To launch in simulation, run this `ros2 run crazyflie_examples hello_world --ros-args -p use_sim_time:=True`.
4. To launch in hardware, run this `ros2 run crazyflie_examples launch.py use_sim_time:=cflib`. 
5. To takeoff, run this `ros2 run crazyflie_examples nice_hover` after running `launch.py`

You should then see your crazyflie hover.


