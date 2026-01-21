---
hide_title: true
sidebar_label: ROS Noetic & DOcker
---

# This page serves to document information relating to installing ROS1 noetic on Docker containers
More specifically, we want to install gestelt [Link Text]https://github.com/Temasek-Dynamics/gestelt into Docker
We follow the following webpage: [Link Text]https://discourse.openrobotics.org/t/running-ros-noetic-in-docker-a-practical-guide-for-simulation-and-teleoperation/42572

``` bash
docker run -it --name ros_container --net=host --privileged osrf/ros:noetic-desktop-full bash
```

### Option 2
 1. Open Software & Updates
 1. Tick first four options
 ![](./img/swup.png)
 1. NVIDIA device drivers can be found in 'Additional Drivers'
 ![](./img/driver.png)
 1. After the drivers have been installed, reboot
 


## Install CUDA if necessary

install CUDA 10 from [official website](https://developer.nvidia.com/cuda-downloads?target_os=Linux&target_arch=x86_64&target_distro=Ubuntu&target_version=1804&target_type=deblocal) (.deb), and follow the instructions to add apt-key. Lastly:

`sudo apt install cuda`

In .bashrc add:
``` bash
# CUDA
export PATH=/usr/local/cuda/bin${PATH:+:${PATH}}$
export LD_LIBRARY_PATH=/usr/local/cuda/lib64${LD_LIBRARY_PATH:+:${LD_LIBRARY_PATH}}
```

# Install CUDA DNN
``` bash
sudo apt install libcudnn7
```

[Official Installation Guide (CUDA)](https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html)
