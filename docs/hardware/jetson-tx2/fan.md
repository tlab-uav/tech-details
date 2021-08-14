---
hide_title: true
sidebar_label: Fan Related
---

## Check Fan on New L4T

``` bash
cd /sys/devices/pwm-fan/target-pwm
```

## Fan Related (Old Location)

```bash
sudo -s 
cd /sys/kernel/debug/tegra_fan/
echo 0 > target_pwm
watch -n 1 cat /sys/class/thermal/thermal_zone?/temp 
```