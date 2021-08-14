---
hide_title: true
sidebar_label: Linux Installation
---

# Install Ubuntu from USB Drive

## Installation Guide
Ask for the USB Flash Drive with the Ubuntu 18.04 Intaller Image. Boot your laptop / computer into the USB Drive to start the installation.

A few helpful guides:
- Installation guide [(linuxtechi)](https://www.linuxtechi.com/ubuntu-18-04-lts-desktop-installation-guide-screenshots/)
- More on dual boot [(itzgeek)](https://www.itzgeek.com/how-tos/linux/ubuntu-how-tos/how-to-install-ubuntu-18-04-alongside-with-windows-10-or-8-in-dual-boot.html)
- Regarding boot options [(phoenixnap)](https://phoenixnap.com/kb/how-to-install-ubuntu-18-04).

:::caution
- Always try to boot using **UEFI mode**, instead of the legacy BIOS mode. This will make sure the Ubuntu uses its UEFI bootloader after installation. Make sure to **disable** legacy mode or secure boot, if your system has this option. [Reference](https://help.ubuntu.com/community/UEFI)
- Remember to give sufficient `swap` space during installation's disk partitioning, to protect the OS from hanging when the physical memory running low. [Reference](https://itsfoss.com/swap-size/)
- Connect to a LAN Internet connection if possible, so update downloads could be much faster
:::

## Prepare the USB Flash Drive Yourself
We currently use Ubuntu 18.04 LTS as the standard OS, and the download link is available [here](https://releases.ubuntu.com/18.04.5/?_ga=2.187936878.711589267.1598318830-982879939.1598318830):
- choose `ubuntu-18.04.x-desktop-amd64.iso`
- Use any USB image flashing tool to do it, for example the [universal usb installer](https://www.pendrivelinux.com/universal-usb-installer-easy-as-1-2-3/) on Windows, or the cross-platform [Etcher](https://github.com/balena-io/etcher/releases).
- A good reference tutorial is available here: https://www.guru99.com/install-linux.html