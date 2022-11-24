---
hide_title: true
sidebar_label: Building SAFMC Drone
---

## Building SAFMC Drone

### Components Required

These are the components required to build a SAFMC Drone

1. Radxa-zero - This is the Radxa Zero onboard computer (OBC) that has already been mounted on the drone structure.
![](./SAFMC/assets/Slide1.JPG)

2. Flight controller (F405 Flywoo) - This is the low level controller that contains the PX4 software which will then drive the motors.
![](./SAFMC/assets/Slide2.JPG)

:::note 
On the OBC there's the antenna which needs to be attached, otherwise could have surge in power and spoil the OBC.
:::

### Hardware Fix

These are some of the steps required to get the hardware set-up

1. Need to solder red wire to 5V and black wire to GND and a USB C connector. Then heat shrink for final touch
2. The serial port pins (the three pins on the Radxa) need to be soldered onto the OBC (see Fig. \ref{obc})


:::note 
Last time, the OBC was driven directly by the battery pack. However, now they are going to use the output tapping points of the flight controller to draw 5V to the OBC. (see Fig. \ref{pinout} which shows the 5V and GND pinout.).
:::

### Software Fix

#### Radxa Setup

Flashing the Ubuntu OS into the OBC via eMMC. eMMC is like a non-volatile storage device. There is also another way of flashing using microSD card. An introduction is listed here: `https://wiki.radxa.com/Zero/getting_started`. For flashing using eMMC, follow the website closely `https://github.com/matthewoots/documentation/blob/main/radxa-zero/radxa-flash-backup-image.md`.

1. You need to flash using a ground laptop/workstation. Follow `https://github.com/matthewoots/documentation/blob/main/radxa-zero/radxa-uboot-usb.md`.The boot-g12.py comes from the package pyamlboot which you were told to install in the documentation.
```bash
sudo apt install pip3
sudo pip3 install pyamlboot
# Press the boot button before connecting the PC to the Radxa Zero
lsusb
# lsusb should show Armlogic, Inc. GX-CHIP
# You should download the rz-udisk-loader.bin from the the files folder in this repo
sudo boot-g12.py <path to rz-udisk-loader.bin>    # Get from `https://github.com/matthewoots/documentation/blob/main/files/rz-udisk-loader.bin`
```
2. Need to get a image burner. Get balenaEtcher
```bash
# Go and get Balena Etcher at https://github.com/balena-io/etcher/releases
# or you can get this release link for v1.7.9
cd Downloads
wget https://github.com/balena-io/etcher/releases/download/v1.7.9/balenaEtcher-1.7.9-x64.AppImage 

sudo chmod +x balenaEtcher-1.7.9-x64.AppImage
./balenaEtcher-1.7.9-x64.AppImage
# Load the image onto the board
```
3. Find the correct image in \url{https://github.com/radxa/debos-radxa/releases} Get this version radxa-zero-ubuntu-focal-server-arm64-20220804-0400-mbr.img.xz (this version has been tried and tested and compatible with existing software used in TLab).
4. To flash, first press the boot button at the underside of the Radxa. Then connect the OBC's power port to the USB connection (find the required cable to do this connection) of your ground laptop/workstation. Launch balena and it should be able to detect that you have a device connected to a USB. Flash the ubuntu through that USB port.


Once the OBC is flashed, then when you power on the OBC, it will now run the Ubuntu os.To start up Radxa standalone, you need to:

1. Plug in the power port from an external power supply
2. Connect the keyboard 
3. Connect micro HDMI from the OBC to a monitor
4. Once started up, username and password are 'rock'

#### Connecting to wifi

Instructions taken from \url{https://www.linuxfordevices.com/tutorials/ubuntu/connect-wifi-terminal-command-line}. But essentially the following steps:

1. Run the following command to check SSID: `nmcli dev wifi list`
2. Run the following to connect to specified network: `sudo nmcli --ask dev wifi connect <SSID>`
3. Password will be prompted. Key in password and should be good to go
  
Connecting to wifi in NUS is a problem because NUS network requires your username in addition to the SSID. To make things simpler, get a router to provide the SSID.

1. Get a router and connect the router via ethernet to the NUS network
2. Use your own laptop/desktop to connect to the router's SSID and password. It will then prompt you to key in your NUS details (NUS user name and password). After this, the router connection to NUS will be set up.
3. Then now you can use the above method to connect the OBC to the router. 
