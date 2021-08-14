---
hide_title: true
sidebar_label: OpenCV
---

# OpenCV (with CUDA)

## Dependencies

apt install the following
- libopenjpip7 libopenjp2-tools
- libatlas-base-dev gfortran
- liblapacke-dev libatlas-base-dev

## Install OpenCV 4 from Source 

- Clone repos of OpenCV and OpenCV Contrib, and
- Checkout the matching release (e.g. 4.1.0)
``` bash
cd ~/opencv
mkdir build
cd build

cmake -D CMAKE_BUILD_TYPE=RELEASE \
	-D CMAKE_INSTALL_PREFIX=/usr/local \
	-D INSTALL_PYTHON_EXAMPLES=ON \
	-D INSTALL_C_EXAMPLES=OFF \
	-D OPENCV_ENABLE_NONFREE=ON \
	-D OPENCV_EXTRA_MODULES_PATH=../../opencv_contrib/modules \
	-D PYTHON3_EXECUTABLE=/usr/bin/python3 \
	-D PYTHON2_EXECUTABLE=/usr/bin/python2 \
	-D BUILD_EXAMPLES=ON \
	-D WITH_CUDA=ON \
	-D CUDA_TOOLKIT_ROOT_DIR=/usr/local/cuda \
	-D CUDA_ARCH_BIN="6.2" \
	-D BUILD_opencv_cudacodec=OFF \
	..
	
```

- TX2 uses 6.2; For CUDA_ARCH_BIN versions, please refer to [GPU Compute Capability](https://developer.nvidia.com/cuda-gpus)
- Note: cuda10以上没有dynlink_nvcuvid.h和nvcuvid.h,所以要将BUILD_opencv_cudacodec=OFF


[Reference 1](https://www.pugetsystems.com/labs/hpc/How-To-Install-CUDA-10-together-with-9-2-on-Ubuntu-18-04-with-support-for-NVIDIA-20XX-Turing-GPUs-1236/)

[Reference 2](https://gist.github.com/Mahedi-61/804a663b449e4cdb31b5fea96bb9d561)
