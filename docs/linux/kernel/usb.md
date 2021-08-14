---
hide_title: true
sidebar_label: USB Bus
---

# USB

## Buffer Setup
1. Temporary
`sudo sh -c 'echo 1000 > /sys/module/usbcore/parameters/usbfs_memory_mb'`
2. Permanent in `/etc/default/grub`
`GRUB_CMDLINE_LINUX_DEFAULT="usbcore.usbfs_memory_mb=1000"`
- for TX2, this should lie in /boot/extlinux/extlinux.conf. Add after ${cbootargs} `usbcore.usbfs_memory_mb=1000`