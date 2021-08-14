---
hide_title: true
sidebar_label: Miscellaneous
---
# Miscellaneous

## To Add A New IP address to network of machine (only when needed)
- To add temporarily:

`ip addr add 192.168.1.149/24 broadcast 192.168.1.255 dev wlan0 label wlan0:1`

## Ghostwriter Markdown Viewer
- `git clone https://github.com/wereturtle/ghostwriter`
- Follow the build instructions in readme
- qmake, make, make install

## Check DTS file version

dmesg | grep "DTS File Name"

## Known Issues

- Fans is not working properly on Jetpack 4.2 [Link](https://devtalk.nvidia.com/default/topic/1060713/can-t-access-fan-jetpack-4-2-development-board-and-auvidea-j120-board-/)

## GPIO

https://elixir.bootlin.com/linux/latest/source/include/dt-bindings/gpio/tegra-gpio.h#L49
