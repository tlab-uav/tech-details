---
hide_title: true
sidebar_label: Hotspot for TX2
---

# Hotspot for TX2

## To enable broadcast of SSID
- This is needed to turn on hotspot function
- `echo 2 > /sys/module/bcmdhd/parameters/op_mode`

## To disable broadcast, and allow normal wifi connection
- `echo 0 > /sys/module/bcmdhd/parameters/op_mode`

## To make things persistent
- `nano /etc/modprobe.d/bcmdhd.conf`
- add line `options bcmdhd op_mode=2`


## To change IP address for NetworkManager
- add line `address1=192.168.1.150/24` to file `/etc/NetworkManager/system-connections/<corresponding_file>` in the [ipv4] section
