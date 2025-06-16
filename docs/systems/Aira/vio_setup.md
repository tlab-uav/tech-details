---
hide_title: true
sidebar_label: "Vision eCAL-ROS2 Bridge"
---

# Vision eCAL-ROS2 Bridge

```bash
sudo apt install ros-<ros-distro>-vrpn-mocap

git clone  --recurse-submodules https://github.com/navinkaviyarasu/tl_vision2.git

cd tl_vision2

colcon build --symlink-install
```

Dependencies:

setuptools 59.6.0 -> pip install setuptools==59.6.0

wheel 0.37.1 -> pip install wheel==0.37.1

pycapnp 1.3.0 -> pip install pycapnp==1.3.0

Numpy -> >=1.17.3 & <1.25 -> pip install numpy==1.24.4