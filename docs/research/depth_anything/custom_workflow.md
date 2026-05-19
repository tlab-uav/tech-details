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
./scripts/onnx2tensorrt.sh trained_data

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

We need to do the following because after all these steps and finally entering the depth_anything_ros_engines:latest container, the launch file is still not available. So what we need to do is to manually update the launch file by doing the following:

```bash
#!/bin/bash

# cd to depth_anything_ros workspace
roscd depth_anything_ros/launch
touch depth_estimation.launch

nano depth_estimation.launch

#### Copy the following into the launch file
<launch>
  <arg name="namespace" default="depth_anything" />
  <arg name="input_image" default="/camera/rgb/image_rect_color"/>
  <arg name="input_depth" default="/depth_anything/depth_registered/image_rect"/>
  <arg name="output_cloud" default="/$(arg namespace)/depth_registered/points" />
  <arg name="camera_info" default="/camera/rgb/camera_info"/>
  <arg name="model" default="vitl"/>
  <arg name="model_path" default="$(find depth_anything_ros)/trained_data/depth_anything_v2_metric_hypersim_$(arg model).engine"/>
  <arg name="depth_scale" default="0.5"/>

  <arg name="nodelet_manager" value="nodelet_manager" />

  <!-- depth_estimation -->
  <group ns="$(arg namespace)">
    <!-- nodelet manager -->
    <node name="nodelet_manager" pkg="nodelet" type="nodelet" args="manager"
          respawn="true"
          output="screen" />

    <!-- depth anything -->
    <node name="depth_estimation" pkg="depth_anything_ros" type="depth_estimation_node" output="screen" >
      <remap from="~input_image" to="$(arg input_image)" />
      <remap from="~depth_registered/image_rect" to="$(arg input_depth)" />
      <rosparam subst_value="true" >
        model_path: $(arg model_path)
        depth_scale: $(arg depth_scale)
      </rosparam>
    </node>

    <!-- create point cloud -->
    <node pkg="nodelet" type="nodelet" name="point_cloud_xyzrgb"
          args="load depth_image_proc/point_cloud_xyzrgb $(arg nodelet_manager)" output="screen" >
      <remap from="rgb/camera_info" to="$(arg camera_info)" />
      <remap from="rgb/image_rect_color" to="$(arg input_image)" />
      <remap from="depth_registered/image_rect" to="$(arg input_depth)" />
      <remap from="depth_registered/points" to="$(arg output_cloud)" />
      <rosparam>
        queue_size: 100
      </rosparam>
    </node>
  </group>

</launch>

#################
After which, you can run the launch file, by

cd to the launch folder and execute the following command:
roslaunch depth_estimation.launch input_image:=/usb_cam/image_raw
```

The above launch requires the input_image to be from usb_cam rospackage. In order to run the usb_cam, we can do the following: Take note of the pixel format. Needs to be specified because by default, it is looking for MPEG file format. However, our current setup with the FPV camera runs in YUYV format. You can also add in params to increase the hz rate of the usb_cam.

```
rosrun usb_cam usb_cam_node _pixel_format:=yuyv _video_device:=/dev/video0
```

To perform camera calibration, we first need a checkered board. It can be downloaded from https://markhedleyjones.com/media/projects/calibration-checkerboard-collection/Checkerboard-A4-25mm-8x6.pdf

This is a 25mm 9 x 7 checkered board orient in landscape. It has 8 x 6 joints.

In order to perform calibration, we use the following package `camera_calibration`

The size = number of joints and --sqaure refers to the dimension of the square in m. You should run the /usb_cam in order to extract the images as ros topic and also where you intend to save the camera_info. In our case, we save the camera info under /usb_cam. By default, when you run /usb_cam, it extracts a default camera info from a file like this `/home/tlabstaff/.ros/camera_info/head_camera.yaml`. When you input `/usb_cam` in `camera:=/usb_cam`, it will override the yaml file after you press the button commit.

```
rosrun camera_calibration cameracalibrator.py --size 8x6 --square 0.025 image:=/usb_cam/image_raw camera:=/usb_cam
```
After running this, you will see a GUI. You can start calibrating, moving the camera nearer or further, translate and rotate the camera with respect to the checkered board. After sufficiently gathering data points, you can click on calibrate, save and finally commit.


To simply extract the images without ros, you can run the following:
`ffplay /dev/video0`

