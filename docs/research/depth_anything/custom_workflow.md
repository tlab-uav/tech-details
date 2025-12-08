---
hide_title: true
sidebar_label: Custom Workflow
---

# Custom Workflow

The previous sections covered the standard tutorial as described in the official repository.  
For convenience and improved usability—particularly for workflows involving RViz—additional steps were taken, which readers may choose to adopt depending on their requirements.

To enable RViz support and avoid regenerating TensorRT engine files on every run, a custom workflow was created. This involved:

1. Launching a container from the base image `depth_anything_ros:latest` with **X11 forwarding** enabled to support GUI applications such as RViz.  
2. Running the provided script to convert the trained ONNX model files into TensorRT engine files.  
3. Saving the resulting container (with generated engine files and GUI-ready configuration) as a new image named **`depth_anything_ros_engines:latest`**.

The commands used for these steps are shown below:

```bash
# Enable access to the host X server
xhost +local:docker

# 1. Start a GUI-enabled container from the base image
docker run -it --rm --net=host --gpus all \
    -e DISPLAY=$DISPLAY \
    -v /tmp/.X11-unix:/tmp/.X11-unix \
    depth_anything_ros:latest \
    /bin/bash

# 2. Inside the container, generate TensorRT engine files
roscd depth_anything_ros
./scripts/onnx2tensorrt trained_data

# 3. From the host, save the modified container as a new image
docker commit <container-id> depth_anything_ros_engines:latest
```

Once this new image is created—with both RViz support and pre-generated TensorRT engine files—the following custom shell script can be used to launch the container.  
This script mounts the local `launch` and `node_scripts` directories into the container and relies on host networking, allowing ROS nodes and topics to be accessed seamlessly from both the host machine and the container.

```bash
#!/bin/bash

# Name of the Docker image that already contains your ENGINE files
IMAGE_NAME="depth_anything_ros_engines:latest"

# Absolute path to your local repo (current folder)
REPO_PATH="$(pwd)"

# Run container
docker run --rm --net=host -it --gpus 1 \
    -v ${REPO_PATH}/launch:/root/catkin_ws/src/depth_anything_ros/launch \
    -v ${REPO_PATH}/node_scripts:/root/catkin_ws/src/depth_anything_ros/node_scripts \
    ${IMAGE_NAME} \
    /bin/bash
```
