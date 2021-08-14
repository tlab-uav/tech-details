---
hide_title: true
sidebar_label: Power Button
---
# Set Power Button to Shutdown
- Install acpi `sudo apt install acpid`

```bash
sudo nano /etc/acpi/events/power

# add in

event=button/power
action=/sbin/poweroff

# end

sudo systemctl restart acpid.service

```


## Not working ones
In dconf tool or in gsetting commandline:
- `gsettings set org.gnome.settings-daemon.plugins.power button-power 'shutdown'`

or

In dconf tool or in gsetting commandline:
- `gsettings set org.gnome.settings-daemon.plugins.power power-button-action shutdown`