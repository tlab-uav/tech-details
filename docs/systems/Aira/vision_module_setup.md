---
hide_title: true
sidebar_label: "Vision Module: Setup & Installation"
---
# Vision Sensor: Setup & Installation 

 

## Vision Sensor Details 

Front Vision Sensor : VK180Pro

Rear Vision Sensor  : VK180

## Setup & Installation

To install required packages to integrate the vision sensors with the on-board computer, follow the steps below,

1. [VK System Installation Guide](https://docs.vilota.ai/s/dp180p-product-guide/doc/vk-system-installation-guide-GG408GGuTj)
2. [VK180 IP Network configuration](https://docs.vilota.ai/s/dp180p-product-guide/doc/dp180-ip-network-configuration-1y1YvvDrlY)

## Updating Vision Sensors

Connect the vision sensor to the host PC and open its WebUI and also SSH into the vision sensor using a terminal

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
    Start-on-boot: Yes 
    Role: BoundarySoftware 

Camera Driver 0 
    Start-on-boot: Yes  
    Time-synchronized: Yes 
    Start Configuration: vk180-pro_light_rectified.json 

VIO 0 
    Start-on-boot: Yes 
    Start Configuration: vk180-pro_moderate_rectified.json 

For VK180 (Slave),

Time Synchronizer 
    Start-on-boot: Yes 
    Role: SlaveSoftware 

Camera Driver 0 
    Start-on-boot: Yes 
    Time-synchronized: Yes 
    Start Configuration: vk180_light_rectified.json 

VIO 0 
    Start-on-boot: Yes 
    Start Configuration: vk180_moderate_rectified.json 


## Reference Links

1. [VK180 Product Guide](https://docs.vilota.ai/s/dp180p-product-guide/doc/dp180-ip-product-guide-CJMUAK7txH)