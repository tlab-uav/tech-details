---
hide_title: true
sidebar_label: USB Setup
---

# USB3.0 Availability
- USB3.0 is only accessible from the top USB port on the board
- To test if the port is USB 3 or USB 2, use the command `lsusb -t`
   - 5000M indicates USB3, where 480M indicates USB2 

## Buffer Increase
1. Temporary
`sudo sh -c 'echo 1000 > /sys/module/usbcore/parameters/usbfs_memory_mb'`
2. Permanent in `/etc/default/grub`
`GRUB_CMDLINE_LINUX_DEFAULT="usbcore.usbfs_memory_mb=1000"`
- for TX2, this should lie in /boot/extlinux/extlinux.conf. Add after ${cbootargs} `usbcore.usbfs_memory_mb=1000`