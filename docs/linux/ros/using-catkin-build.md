---
hide_title: true
sidebar_label: Using Catkin Build
---

# Installing Catkin

It is a one line command
```bash
sudo apt install python-catkin-tools
```

### Install Missing Dependencies Automatically

```bash
# Navigate to the root path of the caktin workspace, e.g. cd /home/user/catkin_ws/
rosdep install --from-paths src --ignore-src -r -y
```



### Source catkin_ws in bashrc

```bash
# Navigate to the root path of the catkin workspace, e.g. cd /home/bashrc, CTRL+h to show the bashrc file
source /home/catkin_ws/devel/setup.bash
```
Reference:
http://wiki.ros.org/rosdep 