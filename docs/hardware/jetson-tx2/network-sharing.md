---
hide_title: true
sidebar_label: Network Sharing
---

## Modifications Done for Networking
- Wifi power saving is disabled in `/etc/NetworkManager/conf.d/` `wifi.powersave` from 3 to 2
- ipv6 usage in avahi-daemon is turned off in `/etc/avahi/avahi-daemon.conf`. This is to make .local resolve works better


## Added Samba Services for Remote File Editing

1. `sudo apt install samba`
2. add current user to samba database
   > `sudo smbpasswd -a nvidia`
   - to list users, use `sudo pdbedit -L`
3. edit `/etc/samba/smb.conf`, add at last:
   
    ```
    [home]
    path = /home/nvidia
    valid users = nvidia
    create mask = 0664
    directory mask = 0775
    browseable = yes
    writable = yes
    guest ok = no
    follow symlinks = yes

    [SD]
    path = /media/nvidia/SD
    valid users = nvidia
    create mask = 0664
    directory mask = 0775
    browseable = yes
    writable = yes
    guest ok = no
    follow symlinks = yes

    [rootfs]
    path = /
    admin users = nvidia
    force group = root
    create mask = 0644
    browseable = yes
    writable = yes
    guest ok = no
    follow symlinks = yes
    ```

- restart samba `sudo systemctl restart smbd.service`

## To allow insecure symlinks to outside shared folder (Not needed)

```
[global]
allow insecure wide links = yes

[share]
wide links = yes
```

## Enable Screen Sharing for VNC
- setup in ubuntu settings first, enable screen sharing
- then disable encryption by, `sudo apt install dconf-tools`, and in org.gnome.desktop.remote-access.require-encryption, turn off


[Reference](https://askubuntu.com/questions/1192382/can-i-use-ubuntu-18-04-screen-sharing-with-vino-with-mac-os-x-mojave-screen-shar)