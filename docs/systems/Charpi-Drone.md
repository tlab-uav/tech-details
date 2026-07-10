---
hide_title: true
sidebar_label: Important Information on Setting Up Charpi Drone
---

# To install Ubuntu 20.04 or 22.04
The current drone is built with Jetson Orin with the Seeed Studio mini J4012 carrier board. It comes with eMMC.
To install the O.S, on another workstation with Ubuntu, install jetpack (version depending on which Ubuntu you want to flash).

Important things to note, you need to know if it's Orin NX/Nano 8GB/16GB in order to download the correct jetpack.

Follow the following website for more details. 

`https://wiki.seeedstudio.com/recomputer_mini_j401_getting_started/`

# WiFi

If after installing the O.S, you find that your WiFi doesn't work. It could be because the network driver from jetpack is too old for the wifi card that is used.

If so, perform the following steps.
`sudo mv /lib/firmware/iwlwifi-ty-a0-gf-a0.pnvm /lib/firmware/iwlwifi-ty`

Then reboot your comp and it should work.


