---
hide_title: true
sidebar_label: Flash An Existing Image
---

# Flashing An Existing Image to TX2

:::caution
You must have exactly the same version of **patched** BSP to flash the image correctly. This is because the image file only backs up the main partition, and the rest of the booting partitions are prepared by the BSP at flashing time.
:::

## Pre-requisite
- A host machine running Ubuntu 16 or 18
- Prepared the Patched L4T BSP (e.g. patched with Auvidea's Firmware)
- Have the .img file ready
- A bare TX2 module
- A Dev Kit with the stock 19V supply
- A micro USB cable for flashing
- HDMI Monitor and cable
- (Optionally) A Ethernet cable or WiFi Antenna connected, for updating the Ubuntu packages to the latest

## Flashing Steps
:::warning
Make sure `./apply_binaries.sh` is executed once before ANY flashing, after a BSP update / overwrite from the board overlay.
:::
0. Make sure patched BSP is ready.
    - If it is prepared by someone else in a zip file. Make sure it is unzipped with permission preserved `sudo tar -xpf ***` 

1. Power off the dev kit
    - The CR5 red LED should not light up. Otherwise, removing or installing TX2 module while the dev kit is powered may damage the system electrically

2. Install the TX2 module firmly, and plug-in the power for dev kit

3. Boot TX2 into recovery mode
   - You could enter the recovery mode by 
      1. PWR - press and release (Skip if the board is already powered on)
      2. REC - press and hold
      3. RST - press and release 
      4. Wait 2 sec 
      5. REC - release
   - (Advanced) if not successful, you could still enter by interrupting the bootloader in the UART0 console, and by typing `enterrcm` 


4. With the OTG micro-USB attached (hidden on the left of the antennas) to the host. Check the connection by opening a terminal, key in
    ``` bash
    lsusb
    ```
    It should show `ID 0955:7c18 NVidia Corp.`

5. The image to be flashed should be symlinked as `./bootloader/system.img`
    - For example: `cd bootloader` and `sudo ln -s ../../../images/backup_190413.img system.img`
    - It should **always be named** `system.img`

6. Go back to the root of the BSP folder, flash all board partitions by

    ``` bash
    sudo ./flash.sh -r jetson-tx2 mmcblk0p1 # flash all partitions

    # Below only for reference
    # sudo ./flash.sh -k kernel-dtb jetson-tx2 mmcblk0p1 # flash kernel device tree-blob
    # other -k options: cpu-bootloader, bootloader-dtb, LNX, kernel
    ```

    The process should end with `*** The target t186ref has been flashed successfully. ***`

7. You are done!
    - Sanity check with `sha1sum –c /etc/nv_tegra_release`


Nvidia Official Reference: [Flashing and Booting the Target Device](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%2520Linux%2520Driver%2520Package%2520Development%2520Guide%2Fflashing.html%23wwpID0E0YJ0HA)

[Jetpack Archive](https://developer.nvidia.com/embedded/jetpack-archive)
[L4T Archive](https://developer.nvidia.com/embedded/linux-tegra-archive)