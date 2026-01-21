---
hide_title: true
sidebar_label: ROS Noetic & DOcker
---

# This page serves to document information relating to installing ROS1 noetic on Docker containers
More specifically, we want to install gestelt [Gestelt]https://github.com/Temasek-Dynamics/gestelt into Docker
## Install ROS in Docker
docker pull ros:noetic-robot

## Launching the docker container with ROS
We follow the following webpage: [ROS Noetic in Docker]https://discourse.openrobotics.org/t/running-ros-noetic-in-docker-a-practical-guide-for-simulation-and-teleoperation/42572

``` bash
docker run -it --name ros_container --net=host --privileged osrf/ros:noetic-desktop-full bash
```

## Install Gestelt in Container
After we have installed both docker as well as ROS Noetic within the docker, we can now proceed to follow the instructions in [Gestelt]https://github.com/Temasek-Dynamics/gestelt

## Important commands in Docker

### To start a new container with ROS
``` bash
docker run -it --name ros_container --net=host --privileged osrf/ros:noetic-desktop-full bash
```

### To start re-enter the ros_container
``` bash
docker start -ai ros_container2
```

### To delete a container
```bash
docker rm ros_container2
```

### To attach to a running container
```bash
docker exec -it ros_container2 bash
```


