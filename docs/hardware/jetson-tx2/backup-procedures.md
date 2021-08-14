---
hide_title: true
sidebar_label: Backup Dos
---
# Backup Dos

## How to save space before you back up

- Clear trash and caches
   1. at `~/.cache/chromium/Default`
   2. at `~/.ros`
   3. 'pip3 cache purge'
   4. Lastly, at  `~/.local/share/Trash/expunged/*`
- To check large files and directories 

   `sudo du -Sh | sort -rh | head -20`
- To clear unallocated disk space to zero, use `zerofree` utility (apt install)
   1. boot into single user mode `sudo init 1` (init level 3 may not work. If no keyboard response, try switch to init 3 first and then into init 1 state, after a fresh reboot)
   2. remount the filesystem to readonly (if failed, reboot the system and try again) `mount -o remount,ro /dev/mmcblk0p1`
      - If the mounting is busy try stop services as followed
      - `killall dhclient` (this should make things work already)
      - `systemctl stop rsyslog`
      - `systemctl stop network-manager`
      - if still, run `systemctl status` to identify further things to stop
   3. perform zerofree command `zerofree -v /dev/mmcblk0p1`
   4. regarding the meaning of the zerofree output:

      ```markdown
      So after some detailed analysis it would look like those numbers are as follows:
      - number of nonzero blocks encountered
      - number of free blocks within the filesystem
      - total number of blocks within the filesystem
      ```

   5. `poweroff` and start backup in recovery mode

## Backup the Image File

In the `Linux_for_Tegra/ folder`, perform backup of the APP partition
   - `sudo ./flash.sh -r -k APP -G backup.img jetson-tx2 mmcblk0p1`

## Creating Compressed File (tar.xz)

`sudo XZ_OPT=-T0 tar -Jcvf xxx.tar.xz Linux_for_Tegra`
- `sudo` is used to be able to access all files
- `-T0` is to enable multi-threading (`tar -Jcvf file.tar.xz /path` is too slow, as it is single threaded)

---

References:
[Official Flashing Guide](https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%2520Linux%2520Driver%2520Package%2520Development%2520Guide%2Fflashing.html%23)
