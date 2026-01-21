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

## Pushing to Docker to share container
So you can actually build your container and share it. There are 2 ways of doing it. One, you build your docker container and send the whole container. The other, you state your configuration, share it on github and others can clone your configuration and build it themselves.

### Pushing to Docker for file sharing

First you have to login to docker by doing 
``` bash
docker login
```

Sometimes, you will have issues logging in with your credentials. In that case you can do the following:

```bash
sudo nano /etc/docker/daemon.json
```
copy the following into the json file
```bash
{
  "dns": ["8.8.8.8", "8.8.4.4"]
}
```

```bash
sudo systemctl restart docker
```

The above should work.

Once you are able to login, commit the file with the repo and tag. 

```bash
docker commit ros_container2 gestelt_ros1:latest

docker tag gestelt_ros1:latest yourusername/gestelt_ros1:latest
```
where ros_container2 is the name of your container and yourusername is the name of the docker login id. gestelt_ros1 is the name of the repo and latest is the tag name.

After which, you can push this to your docker account

```bash
docker push yourusername/gestelt_ros1:latest
```

### Pulling containers from Docker for file sharing

To pull containers from docker, simply run the following code

```bash
docker pull yourusername/gestelt_ros1:latest
```

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


