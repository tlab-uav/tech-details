---
hide_title: true
sidebar_label: Simulation
---

## SAFMC IDP FYP 2023

### AirSim

# Installation
Follow instructions for building Unreal Engine 4.27 from [here](https://microsoft.github.io/AirSim/build_linux/)

Build AirSim using our repo tested for Ubuntu 22.04 LTS. 

```bash
git clone https://github.com/TL-NUS-CFS/AirSim.git
cd AirSim
./setup.sh
./build.sh
```

# Launching AirSim

* Run this command to launch the Blocks project in Unreal Engine.
```bash
<UnrealEngine_path>/Engine/Binaries/Linux/UE4Editor <AirSim_path>/Unreal/Environments/Blocks/Blocks.uproject
```
* If you get prompts to convert project, look for More Options or Convert-In-Place option. If you get prompted to build, choose Yes. If you get prompted to disable AirSim plugin, choose No.

* If you get a compilation error, compile using mono
  1. <p> cd ~/AirSim/Unreal/Environments/Blocks && ./clean.sh </p>
  2. Install [mono-complete] (https://www.mono-project.com/download/stable/#download-lin)
  3. Make symlinks <p> sudo ln -s /usr/bin/mono /bin/mono && sudo ln -s /usr/lib/mono /lib/mono</p>
  4. Rebuild the Blocks project <p> ~/UnrealEngine/Engine/Binaries/ThirdParty/Mono/Linux/bin/mono ~/UnrealEngine/Engine/Binaries/DotNET/UnrealBuildTool.exe Development Linux -Project=/home/andrew/AirSim/Unreal/Environments/Blocks/Blocks.uproject -TargetType=Editor -Progress </p>
  5. Start UE4Editor from command line: <p> ~/UnrealEngine/Engine/Binaries/Linux/UE4Editor </p>
  6. Click More > Browse. Browse to the Blocks Project <p>~/AirSim/Unreal/Environments/Blocks/Blocks.uproject</p>
  7. Error shows up "This project was made with a different version of the Unreal Engine.". Click "More Options" > "Skip conversion"

* After Unreal Editor loads, press Play button.

# Using AirSim
AirSim can be interacted with through the Python and C++ [AirSim API](https://microsoft.github.io/AirSim/apis/). There is a [ROS and ROS2 wrapper](https://microsoft.github.io/AirSim/airsim_ros_pkgs/) that interfaces between ROS and the AirSim C++ API. 

# AirSim ROS2 Wrapper
* Launching the wrapper
* AirSim settings configuration
* Subscribers
* Publishers
* Services

