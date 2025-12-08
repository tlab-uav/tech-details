---
hide_title: true
sidebar_label: Docker Build
---

# Building with Docker

The repository includes a preconfigured Dockerfile, making the Docker-based build process straightforward. As noted in the prerequisites, Docker must be installed prior to continuing.  
To begin, clone the repository locally and build the Docker image using the provided Dockerfile:

```bash
git clone https://github.com/ojh6404/depth_anything_ros.git
cd depth_anything_ros && docker build -t depth_anything_ros .
```
For readers who are unfamiliar with Dockerfiles, the following section provides a brief overview to help understand how the provided file works.  
If you are already comfortable with Docker, you may skip to the next section.

## Overview of the Dockerfile

The author assumes that the reader is familiar with basic Docker concepts such as images, containers, and Docker Hub. If not, refer to: <https://docker-curriculum.com/>

```dockerfile
FROM nvcr.io/nvidia/tensorrt:23.03-py3
ENV DEBIAN_FRONTEND=noninteractive

# install essential packages
RUN apt update && apt install -q -y --no-install-recommends \
    dirmngr \
    gnupg2 \
    curl \
    wget \
    build-essential \
    git \
    lsb-release \
    && rm -rf /var/lib/apt/lists/*
```

This section of the Dockerfile specifies the **base image**:

- `FROM nvcr.io/nvidia/tensorrt:23.03-py3`  
  This pulls an official NVIDIA container containing **TensorRT**, Python 3, CUDA, and other NVIDIA-optimized libraries. It provides a consistent environment for building TensorRT engines and running GPU-accelerated inference, avoiding version mismatches on the host system.

- `ENV DEBIAN_FRONTEND=noninteractive`  
  Ensures that package installations run without interactive prompts, which is necessary for automated Docker builds.

- The `RUN` command updates the package index and installs essential utilities:
  - **dirmngr, gnupg2** — key and certificate management  
  - **curl, wget** — downloading external files  
  - **build-essential** — compilers and build tools  
  - **git** — repository cloning  
  - **lsb-release** — for identifying the distro version  

The final cleanup step (`rm -rf /var/lib/apt/lists/*`) removes cached package lists to keep the image size smaller.

Overall, this block sets up a stable and consistent foundation on top of NVIDIA’s TensorRT base image, ensuring that later build steps run smoothly.

```dockerfile
# setup sources.list
RUN sh -c 'echo "deb http://packages.ros.org/ros/ubuntu $(lsb_release -sc) main" > /etc/apt/sources.list.d/ros-latest.list'

# setup keys
RUN curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.asc | apt-key add -

ENV ROS_DISTRO=noetic

# install ros core
RUN apt-get update && apt-get install -y --no-install-recommends \
    ros-noetic-ros-core=1.5.0-1* \
    ros-noetic-ros-base=1.5.0-1* \
    && rm -rf /var/lib/apt/lists/*

# install bootstrap tools
RUN apt-get update && apt-get install --no-install-recommends -y \
    python3-rosdep \
    python3-rosinstall \
    python3-osrf-pycommon \
    python3-catkin-tools \
    python3-wstool \
    python3-vcstools \
    python-is-python3 \
    python3-pip \
    && rm -rf /var/lib/apt/lists/*

# install ros packages
RUN apt update && apt install -y --no-install-recommends \
    ros-noetic-image-transport-plugins \
    ros-noetic-jsk-tools \
    ros-noetic-jsk-common \
    ros-noetic-jsk-topic-tools \
    && rm -rf /var/lib/apt/lists/*

# install point cloud library if needed
RUN apt-get update && apt-get install -y ros-noetic-jsk-pcl-ros ros-noetic-jsk-pcl-ros-utils &&\
    rm -rf /var/lib/apt/lists/*
```

This portion of the Dockerfile configures the **ROS Noetic environment** required for building and running the ROS wrapper.  
It begins by adding the official ROS package repository and importing the necessary keys, then installs the core ROS components (both `ros-core` and `ros-base`).  

Additional bootstrap tools such as `rosdep`, `catkin-tools`, `rosinstall`, and Python utilities are included to support workspace configuration and dependency management.  
Common ROS Noetic packages—image transport plugins, JSK tools, topic utilities, and point cloud processing libraries—are also installed to ensure the environment has all the runtime dependencies needed by various ROS nodes within the project.

Overall, this block fully prepares a functional ROS Noetic environment inside the container, allowing the depth processing and related ROS functionality to run reliably and consistently.

```dockerfile
# Installing catkin package
RUN pip install gdown
RUN /opt/tensorrt/install_opensource.sh
ENV TENSORRT_DIR=/workspace/tensorrt
ENV PATH=$TENSORRT_DIR/bin:$PATH
RUN mkdir -p ~/catkin_ws/src
RUN rosdep init && rosdep update && apt update
RUN git clone --recurse-submodules https://github.com/ojh6404/depth_anything_ros.git ~/catkin_ws/src/depth_anything_ros
RUN cd ~/catkin_ws/src/ &&\
    source /opt/ros/noetic/setup.bash &&\
    rosdep install --from-paths . -i -r -y &&\
    cd ~/catkin_ws && catkin init && catkin build
RUN pip install -r ~/catkin_ws/src/depth_anything_ros/requirements.txt --user &&\
    rm -rf ~/.cache/pip

# to avoid conflcit when mounting
RUN rm -rf ~/catkin_ws/src/depth_anything_ros/launch
RUN rm -rf ~/catkin_ws/src/depth_anything_ros/node_scripts
```

This part of the Dockerfile configures the **TensorRT open-source components**, sets the necessary environment variables, and prepares the Catkin workspace used to build the ROS package.  
The repository is cloned into `~/catkin_ws/src`, dependencies are installed using `rosdep`, and the workspace is initialized and built using `catkin build`.  
The Python dependencies listed in `requirements.txt` are installed afterward to complete the environment setup.

:::important
At the end of this block, the `launch` and `node_scripts` directories from the cloned repository are removed.  
This is intentional— the repository’s workflow expects these directories to be **mounted from the host machine** rather than baked into the Docker image.  
If you inspect the `run_docker.py` script in the repository, you will see that it binds your local repository paths into the container at runtime.  
More details on this mounting behavior are covered in the following sections.
:::

```dockerfile
RUN touch ~/.bashrc
RUN echo "source ~/catkin_ws/devel/setup.bash" >> ~/.bashrc

CMD ["bash"]
```

These final lines ensure that the container environment is configured correctly when a terminal session starts.  
A `.bashrc` file is created (if it does not already exist), and the Catkin workspace’s `setup.bash` is sourced automatically so that all ROS and package-related environment variables are available in every shell session.  

The `CMD ["bash"]` instruction sets the default command for the container, allowing users to access an interactive Bash terminal whenever the image is launched.

