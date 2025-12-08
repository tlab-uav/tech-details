---
hide_title: true
sidebar_label: Depth_Anything
---

# Depth Anything

This documentation provides a brief overview of setting up and getting the **Depth Anything models** ([Depth Anything GitHub](https://github.com/DepthAnything/Depth-Anything-V2/tree/31dc97708961675ce6b3a8d8ffa729170a4aa273)) working inside **ROS Noetic**.  
We'll be using the **ROS1 Wrapper for Depth Anything V2** from <https://github.com/ojh6404/depth_anything_ros>.

## Prerequisites
- **ROS1 (Noetic)**
- **CUDA (11.8+)**
- **TensorRT (8+)**
- **(Recommended)** Docker and `nvidia-container-toolkit` for environment isolation

## Building the Repo

There are two ways to build the repository:  
1. Within your existing ROS workspace, or  
2. Using Docker.

The instructions provided here use the **Docker-based workflow** for building the repository.  
For details on building the package directly in a local workspace, refer to the ROS wrapper GitHub repository linked above.

:::caution
This repository is designed around **TensorRT 8.x**, and although the prerequisites mention “TensorRT (8+)”, the ROS wrapper does **not** reliably build with newer releases such as **TensorRT 10 or TensorRT 11**.

Beginning with TensorRT 9/10, NVIDIA introduced **major API and header-structure changes**, including updates to core data types, dimension handling, and deprecated interfaces. These modifications break backward compatibility for projects originally written for TensorRT 8.x.

In testing performed for this documentation, builds using **TensorRT 10 and 11 failed during CMake compilation** due to missing or restructured header files and symbol changes. TensorRT 8.x, however, worked consistently.

For this reason, a **Docker-based environment is strongly recommended**, as it guarantees the correct TensorRT version and avoids compatibility issues.

If a **local build** is required, ensure that TensorRT 8.x is installed and be aware that newer versions will likely cause build or runtime failures.
:::


