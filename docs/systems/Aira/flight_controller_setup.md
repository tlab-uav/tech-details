---
hide_title: true
sidebar_label: "Flight Controller Setup"
---

# Flight Controller: Setup & Configuration 

Download the firmware from here and use QGroundControl to install the firmware on the flight controller hardware

If the above steps doesn't work, try the following steps

Clone the git repository locally,

```bash
git clone --submodule-recurse
```

If you have already set up the PX4 development environment, you can build and upload the firmware

```bash
cd PX4-Autopilot #or the name of the cloned repository
make cuav-7-nano
```

To upload the built firmware, plug-in the drone to your PC using the USB port and do the following

```bash 
make cuav-7-nano upload
```
The firmware should be uploaded to the flight control hardware.

Power cycle the drone and connect it to QGroundControl, and open mavlink console the verify the firmware installation

```bash
ver all
```

The above command should output the following,

```
TODO:

```

Once the firmware installation has been verified, you can update the PX4 firmware parameters to setup the parameter configuration for Aira

Download the Aira PX4 parameter file

Open QGroundControl and connect the drone

Open Vehicle Setup-> Parameters

Select Tools->Load from file and select the downloaded parameter file

Review the parameter changes and click OK

:::warning
make sure there are no system specific parameters like callibration, rc values, etc,. are changed
:::

You have the change the following parameters manually,

```
MAV_SYS_ID #It should be the integer number based on the drone ID, say if the drone ID is 0101_SDP_003, then the MAV_SYS_ID = 3
```

 
