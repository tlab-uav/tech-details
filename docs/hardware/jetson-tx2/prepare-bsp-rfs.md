---
hide_title: true
sidebar_label: Patch JetPack BSP
---
# Preparing The Patched BSP

:::tip
You could safely skip this whole step, if the **Patched** BSP has been provided for you. (Typically contain the board name, such as 'J120' in the zip file)
:::

## For Auvidea J120

### What You Need:
1. Check the latest firmware version from [Auvidea Firmware](https://auvidea.eu/firmware/), and download the zip file.
2. Download the corresponding [L4T BSP](https://developer.nvidia.com/embedded/jetpack-archive) (inside which provides Linux kernel, bootloader, NVIDIA drivers, and flashing utilities)


### The Steps

1. Unzip the BSP and Sample Root Filesystem, using command line to **preserve the correct permissions**

  ```bash
  sudo tar -xpf <BSP zip file>
  sudo tar -xpf <Sample Root Filesystem zip file>
  # use sudo cp -a to copy the Sample Root Filesystem to rootfs folder inside BSP
  sudo cp -a <Sample Root Filesystem>/* <BSP>/rootfs
  ```

2. Rename the extracted Linux_for_Tegra folder, to indicate its target Auvidea board and firmware version. Such as `Linux_for_Tegra_J120_Dec2019`

3. Extract the corresponding J120 / J90 Firmware

  ``` bash
  sudo tar -xpf <Firmware zip file>
  ```

4. Navigate into the Auvidea firmware's Linux_for_Tegra folder, copy the files to overide Nvidia's Original, **preserving permissions**

  ``` bash
  sudo cp -a * <BSP Root Folder>
  ```
  
  - Double check by ensureing all relevant files in the BSP's folder is the same modification dates as the Auvidea's Firmware folder.

5. Apply binaries

  ``` bash
  sudo ./apply_binaries.sh
  ```

6. You are done!

## Flashing Your First Image (Clean Install)

- to flash every partitions with fresh build of `system.img`: 
  ``` bash
  sudo ./flash.sh jetson-tx2 mmcblk0p1
  ```

:::tip
Addtional Nvidia Libraries (e.g. CUDA, cuDNN), could be installed by Nvidia's SDK Manager, by
1. Boot up TX2 into Ubuntu
2. Plug in the debugging USB to host Linux machine; TX2 should be mounted as a network device automatically with 192.168.55.1 address
3. Thereafter, the SDK Manager could do the install automatically
:::