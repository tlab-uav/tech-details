---
hide_title: true
sidebar_label: "Vision Module: Setup & Installation"
---
# Vision Sensor: Setup & Installation 

 

## Vision Sensor Details 

Front Vision Sensor : VK180Pro

Rear Vision Sensor  : VK180

## Network Configuration for Vision Sensors

On OBC, delete whatever ethernet network connections are available

```bash
nmcli connection show
sudo nmcli connection delete <connection-name>
```

Setup network connection for the vision modules:
```bash
sudo nmcli connection add type ethernet ifname enP1p1s0 con-name visionmoudle
sudo nmcli connection modify visionmodule ipv4.method shared ipv4.routes 239.0.0.0/24 ipv4.route-metric 1
sudo nmcli connection up visionmoudle


sudo systemctl restart NetworkManager

nmcli connection show #check the active network connection and ensure visionmodule is active
```

## Setup & Installation

To install required packages to integrate the vision sensors with the on-board computer, follow the steps below,

1. [VK System Installation Guide](https://docs.vilota.ai/s/dp180p-product-guide/doc/vk-system-installation-guide-GG408GGuTj)
2. [VK180 IP Network configuration](https://docs.vilota.ai/s/dp180p-product-guide/doc/dp180-ip-network-configuration-1y1YvvDrlY)

## Enabling Time Sync Between OBC & Vision Sensors

Download the Precision Time Protocol(PTP) package on the OBC

```bash
sudo apt install linuxptp
```

<!-- Download the ptp4_software_master.conf file under `~/Downloads/vilota/`

Run the following on the host computer (e.g., Jetson Orin) for starting time synchronizer and verify its working

```bash
sudo ptp4l –2 –i <dev> -S –m –step_threshold=1 –f ~/Downloads/vilota/ptp4l_software_master.conf

#<dev> = Network interface name, if you have configured the network as provided above, then <dev> should be replaced with enP1p1s0

sudo ptp4l –2 –i enP1p1s0 -S –m –step_threshold=1 –f ~/Downloads/vilota/ptp4l_software_master.conf -->

Download the ptp4_software_master.conf file

Run the following on the host computer (e.g., Jetson Orin) for starting time synchronizer and verify its working

```bash
sudo ptp4l –2 –i <dev> -S –m –step_threshold=1 –f ~/path/to/ptp4l_software_master.conf

#<dev> = Network interface name, if you have configured the network as provided above, then <dev> should be replaced with enP1p1s0

sudo ptp4l –2 –i enP1p1s0 -S –m –step_threshold=1 –f ~/path/to/ptp4l_software_master.conf
```
## Creating Service for Time Sync

To automate and start the ptp time synchronizer on boot for the vision sensors, follow the below steps

```bash
sudo vim /etc/systemd/system/vision_timesync.service
```
Copy and paste the following into file and save the file

```
[Unit]
Description= PTP4L based Time Sync Service for Vilota Vision Modules
After=network.target

[Service]
Type=simple
ExecStart=/usr/sbin/ptp4l -2 –i enP1p1s0 –S –m –step_threshold=1 –f /home/nvidia/Downloads/vilota/ptp4l_software_master.conf
Restart=on-failure
User=root

[Install]
WantedBy=multi-user.target
```
You could also download the [vision_timesycn.service](https://tlab-uav.github.io/tech-details/downloads/aira/vision_timesync.service) file and move it to `/etc/systemd/system/`

```bash
sudo mv /path/to/vision_timesync.service /etc/systemd/system/
```

Reload the daemon and enable the vision_timesync.service 

```bash
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable vision_timesync.service

sudo systemctl start vision_timesync.service
sudo systemctl status vision_timesync.service #to check the status of the time synchronizer for the vision modules
```
To restart the vision_timesync.service if needed
```bash
sudo systemctl restart vision_timesync.service
```

## Updating Vision Sensors

Connect the vision sensor to the host PC and open its WebUI on any browser: `10.42.0.64 #For VK180Pro Sensor(Master)` `10.42.0.65 #For VK180 Sensor(Slave)` and also SSH into the vision sensor using a terminal

```bash
#For Master vision sensor
ssh compulab@10.42.0.64

#For Slave vision sensor
ssh compulab@10.42.0.65
```

On WebUI under Home section, check the DP Modules checkbox and click Update

After updating the vision sensor using WebUI, inside the sensor, modify the settings.yaml file as below,

```bash
$ sudo vim /var/lib/vilota/vk_manager/settings.yaml 
 
#For VK180Pro (Master), 
network: 
    managed: true 
    identifier: 1 

#For VK180 (Slave), 
network:
    managed: true 
    identifier: 2 
```

After modifying the settings.yaml file, do `sudo systemctl restart vk-manager-server.service'

Reboot the sensor

Modify the sensor configuration on the WebUI under Modules as below,

For VK180Pro (Master), 

Time Synchronizer 

    Start-on-boot   : Yes 
    Role            : BoundarySoftware 

Camera Driver 0 

    Start-on-boot       : Yes  
    Time-synchronized   : Yes 
    Start Configuration : vk180-pro_light_rectified.json 

VIO 0 

    Start-on-boot       : Yes 
    Start Configuration : vk180-pro_moderate_rectified.json 

For VK180 (Slave),

Time Synchronizer 

    Start-on-boo    : Yes 
    Role            : SlaveSoftware 

Camera Driver 0 

    Start-on-boot       : Yes 
    Time-synchronized   : Yes 
    Start Configuration : vk180_light_rectified.json 

VIO 0 

    Start-on-boot       : Yes 
    Start Configuration : vk180_moderate_rectified.json 


## Reference Links

1. [VK180 Product Guide](https://docs.vilota.ai/s/dp180p-product-guide/doc/dp180-ip-product-guide-CJMUAK7txH)