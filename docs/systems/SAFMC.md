---
hide_title: true
sidebar_label: Building SAFMC Drone
---
import controller_img from './SAFMC/assets/controller.jpg';
import rf_img from './SAFMC/assets/rf.png';

# Introduction
There are a few important parts to setting up the SAFMC Drone, or otherwise known as the NUSwarm drone:
1. Assembly of drone
2. PX4 setup and configuration
3. Radxa setup and configuration

## Assembly of drone

### Components Required
These are the components required to build a SAFMC Drone:

- Radxa-zero - This is the Radxa Zero onboard computer (OBC) that has already been mounted on the drone structure.
  - Ideally the specs are 4GB Ram and 32gb emmc
  - [GPIO Wiring](https://wiki.radxa.com/Zero/hardware/gpio)
  - [Pin location](https://wiki.radxa.com/Zero)
  - [Github docu](https://github.com/radxa/documentation/tree/master/rs102)
![](./SAFMC/assets/Slide1.JPG)

:::note 
On the Radxa OBC there's the antenna which needs to be attached, otherwise could have surge in power and spoil the OBC.
:::

- Flight controller (F405s Flywoo) - This is the low level controller that contains the PX4 software which will then drive the motors.
  - MCU: STM32F405 BGA
  - Integrated ESCs
  - Built-in Sensors: BMP280 Barometer AND MPU6000 IMU.  
  - [Link](https://flywoo.net/products/goku-gn-405s-20a-aio-bmi270-25-5-x-25-5)
![](./SAFMC/assets/Slide2.JPG)

- Motors: Flywoo NIN 1404 (4850 kV)

- Lidar: TF-Luna V1.2

- Serial Receiver
  - FM800 (FASST RX)
  - OR FrSky R-XSR/RXSR Ultra mini S.BUS Smart Port Redundancy Receiver for FPV Drone

- Power supply
  - Should be a 3S battery with XT-30 connector

- Frame 
  - To obtain from relevant contributors/maintainers.

### Wiring Guide
![](./SAFMC/assets/gn405s_wiring_diagram.png)

- Make sure you know what serial ports are available on the flight controller. For the flywoo GN405s, refer to `boards/flywoo/f405s_aio/nuttx-config/include/board.h` in the [board firmware code](https://github.com/matthewoots/PX4-Autopilot.git):
  - UART 1 <-> /dev/ttyS0
    - UART 1 is used for communicating via USB
  - UART 2 <-> TEL1/101 (/dev/ttyS1)
  - UART 4 <-> TEL2/102 (/dev/ttyS2)
  - UART 6 <-> UART6 (/dev/ttyS3)

- These are some of the steps required to get the hardware set-up:
  - Need to solder red wire to 5V and black wire to GND and a USB C connector. Then heat shrink for final touch
  - The serial port pins (the three pins on the Radxa) need to be soldered onto the OBC (see Fig. \ref{obc})

:::note 
Last time, the OBC was driven directly by the battery pack. However, now they are going to use the output tapping points of the flight controller to draw 5V to the OBC. (see Fig. \ref{pinout} which shows the 5V and GND pinout.).
:::

- Connecting RF receiver to the Flight Controller:
  - Refer to wiring diagram above and you can see some pinouts stating 4.5V, GND and SBUS. Solder the wires to a connector such that you can connect it to the RF receiver.
  - Then refer to the figure below and you can see how the wires should be connected to the connector. Once done, you can plug the RF receiver to the connector accordingly. 

<img src={rf_img} style={{width: 700}} />

  - With that, you can set up the remote control (in this case we are using the remote control as seen below) to pair with the RF receiver. There is a button on the RF receiver which you can press. Press and hold it while you plug in the USB-b connector to the flight controller (F405). Then go to QGroundControl.

- There is also a need to check which channel the RF is communicating on (ie SBUS). There should be a blue light on the receiver if so. If not, there is a need to configure it to comms via SBUS. On the RF packaging there should be a manual. Look at the manual for more instructions.

- To check if the receiver is connected, go to QGroundControl and go to the radio tab to check if the flight controller responds to the control movements.

<img src={controller_img} style={{width: 200}} />

## PX4 setup and configuration
We will need to:
1. Make sure PX4 parameters are set correctly.
2. Set up radio (Please set a killswitch)
3. Calibrate sensors (Done using QGroundControl)
4. Test motors (without propellers), make sure they are spinning in the right direction
    - IMPORTANT: If you are using a flywoo board with native support for betaflight, it is necessary to set the `MOT_ORDERING` param to 1.
5. Make sure that flight does not have significant vibrations. The default PID parameters should be good enough. Vibrations will lead to negative effects on motor health, EKF2 fusion etc.

### Building and flashing the Flywoo F405 Firmware
1. Build the board firmware 
```bash 
# Clone the custom version of PX4 
git clone https://github.com/matthewoots/PX4-Autopilot.git --recursive
cd ./PX4-Autopilot/
# Default build for Flywoo F405 AIO
make flywoo_f405s_aio_default
```
2. Upload firmware to flight controller board. Make sure to connect the FCU to the computer first.
```bash
make flywoo_f405s_aio_default upload
```

### Parameter Configuration
```yaml
################
# Communication/Serial ports
################
  baud rates:
    SER_TEL1_BAUD: 230400 
    SER_TEL2_BAUD: 230400 # Can be used for companion computer 
    SER_UART6_BAUD: 9600 # Can be used for lidar 
  GPS:
    GPS_1_CONFIG: Set to 0 # Disabled unless using
  Lidar:
    SENS_TFMINI_CFG: Set to UART6 
  Mavlink:
    Connection to companion computer:
      MAV_0_CONFIG: TEL2/102 
      MAV_0_MODE: 2 (ONBOARD)
      MAV_0_RATE: 0 (Half maximum)
      MAV_0_FORWARD: 0 (DISABLED)
    Connection to Lidar:
      MAV_1_CONFIG: UART6 
      MAV_1_MODE: Normal
      MAV_1_RATE: 1200 Byte/s
      MAV_1_FORWARD: True

################
# Lidar/Range finder
################
  EKF2_RNG_AID: Set to 0 to disallow use of range sensor.
  Position offset should be 0.0:
    EKF2_RNG_POS_X, EKF2_RNG_POS_Y, EKF2_RNG_POS_Z 
  Other values:
    EKF2_MIN_RNG: In units of meters. Set to 0.04m (or whatever your sensor reading tells you when your drone is on the ground). This is the expected rangefinder value when on the ground.

################
# Vicon (If using)
################
  EKF2_AID_MASK: 
    All other bits to false
    Bit 3: Set to true to enable vision position fusion
    Bit 4: Set to true to enable vision yaw fusion
  EKF2_EV_NOISE_MD: Set to true. This is so that we can use noise values from PX4 parameters directly.

################
# EKF2 
################
  SYS_MC_EST_GROUP: Set to EKF2
  EKF2_HGT_MODE: Set to 2 (If lidar is used)
  EKF2_MAG_CHECK: Set to 0
  EKF2_MAG_TYPE: If no magnetometer, set to NONE. Else AUTOMATIC

################
# Position control 
################
  MPC_ALT_HOLD: Set to 2 (requires distance sensor)
  MPC_THR_HOVER: Set to % required to achieve hover
  MPC_LAND_SPEED: Rate of descent, can leave as default

################
# Others 
################
  Checks
    COM_ARM_WO_GPS: Allow arming without GPS Values
    COM_RC_IN_MODE: Set to enable RC checks (if testing with a single drone)
    CBRK_SUPPLY_CHK: If disabling voltage check, set to 894281
  Auto disarm timeouts
    COM_DISARM_PRFLT: Timeout for auto disarm if vehicle is too slow to takeoff.
  Arming/Disarming
    MAN_ARM_GESTURE: Enable arming/disarming via stick gestures
  Motor ordering
    MOT_ORDERING: Set to 1 for betaflight. This is because the default motor ordering on the Flywoo GN405 is for betaflight.
  Sensor
    SENS_BOARD_ROT: Set to Yaw 270 degrees

################
# Battery
################
  Set the number of cells. Should be 3S.
  Set the voltage divider value (There is a bug that it cannot be changed if the initial value is -1.0, so set it to a random positive value first. Then calculate it with the real value)
```

References:
1. [V1.9 Reference](https://dev.px4.io/v1.9.0_noredirect/en/advanced/parameter_reference.html)

### PX4 console troubleshooting
```bash
# Communication
uorb status
mavlink status streams

# List processes
top

# List all modules
ls /bin/

# Listen to topics
listener TOPIC 

# Modules
## Get Distance sensor status
tfmini status
## Get sensors status
sensors status
```

## Radxa setup and configuration
There are a few important steps for setting up the Radxa:
1. Remove auto-boot (i.e. Create an access point to the FCU)
2. Flashing of Ubuntu server image
3. Enable headless mode
4. Connecting to wifi network
5. Synchronization of time in isolated network (no internet connection)
6. Interfacing with PX4
7. Additional information. Important for debugging.

### 1. Remove autoboot (i.e. Create an access point to the FCU)

There's a need to create an access point by removing auto-boot from the radxa bootloader. When we power on the OBC, what the bootloader will usually do is that it will keep do a countdown and check for any disruption. So if we have the serial port of OBC connected to the flight controller, then there will be some input signal going to the serial port and hence it keeps disrupting the bootloading process. Therefore the OBC cannot boot up.

So the following instructions configures the bootloader to go into fastboot mode, which means don't do a count down and just immediately boot up. Which means you have to amend the config file to the bootloader.This bootloader is also stored in the eMMC. So how should we amend this config file? We have to clone the bootloader from the radxa github page, rebuild the binaries, ie `u-boot.bin` and then replace the u-boot.bin file in the eMMC (which is the `dd` step in the instruction).

- Install dependencies: 
    - `sudo apt-get install -y wget bc nano mc build-essential autoconf libtool cmake pkg-config git python-dev swig libpcre3-dev libnode-dev gawk wget diffstat bison flex device-tree-compiler libncurses5-dev gcc-aarch64-linux-gnu g++-aarch64-linux-gnu binfmt-support binfmt-support qemu-user-static gcc-aarch64-linux-gnu gcc-arm-linux-gnueabihf fastboot`
- Git clone 2 packages
    - `git clone  --branch radxa-zero-v2021.07 https://github.com/radxa/u-boot.git`
    - `git clone https://github.com/radxa/fip.git`
- Edit the radxa zero config in the u-boot repo
    - `nano u-boot/configs/radxa-zero_defconfig`
    - Add "CONFIG_BOOTDELAY=-2" before "#CONFIG_DISPLAY_CPUINFO is not set"
- Compile from `u-boot`
    ```bash
    cd u-boot
    export ARCH=arm
    export CROSS_COMPILE=aarch64-linux-gnu-
    make radxa-zero_defconfig
    make
    ```
- Compile from `fip/radxa-zero`
    ```bash
    cp u-boot.bin ../fip/radxa-zero/bl33.bin
    cd ../fip/radxa-zero
    make
    ```
- Copy u-boot.bin over
    - Sideload (Safer option) 
        - Hold down boot button on radxa and connect to PC, then run:
            - `sudo boot-g12.py /path/to/fip/radxa-zero/u-boot.bin`
    - (ONLY AS LAST RESORT) Use dd to write over the eMMC
        - Hold down boot button on radxa and connect to PC. Run:
            - `sudo boot-g12.py rz-udisk-loader.bin` to expose the Radxa as a mountable disk
        - Use dmesg/lsblk to figure out what `sdX` is Radxa
        - In fip/radxa-zero, run `sudo dd if=u-boot.bin of=/dev/sdX bs=512 seek=1` to copy the files over
- Reboot device

[Reference](https://github.com/matthewoots/documentation/blob/main/radxa-zero/radxa-remove-autoboot-countdown.md)

### 2. Flashing of Ubuntu Server image
Here, we focus on flashing the Ubuntu OS into the OBC via eMMC. eMMC is like a non-volatile storage device. There is also another way of flashing using microSD card. An introduction is listed here: `https://wiki.radxa.com/Zero/getting_started`.

1. Install the following tools on your main computer:
    ```bash
    sudo apt update
    sudo apt install python3-pip
    sudo pip3 install pyamlboot
    ```

2. Erase eMMC of Radxa
    - Press down boot button on Radxa before powering it on and connecting it to the PC. NOTE: Button must be pressed down WHILE physically connecting it via USB to the computer.
    - Download `radxa-zero-erase-emmc.bin` AND `rz-udisk-loader.bin`
    - Run `sudo boot-g12.py radxa-zero-erase-emmc.bin`
        - This will automatically erase eMMC, then present eMMC as a USB storage device.
    - [Reference](https://wiki.radxa.com/Zero/install/eMMC_erase)

3. Install [Balena Etcher](https://github.com/balena-io/etcher)

4. Flash Ubuntu OS onto Radxa
    - Download images from [here](https://wiki.radxa.com/Zero/downloads), the file name should be something like `radxa-zero-ubuntu-focal-server-arm64-XXX-mbr.img`
    - Decompress images using `xz -v --decompress IMAGE_COMPRESSED`
    - Use BalenaEtcher to mount the image. After step 2 (erasing the eMMC), the radxa eMMC should appear as a flashable device

Once the OBC is flashed, then when you power on the OBC, it will now run the Ubuntu os. To start up Radxa standalone, you need to:

1. Plug in the power port from an external power supply
2. Connect the keyboard 
3. Connect micro HDMI from the OBC to a monitor
4. Once started up, username and password are 'rock'

### 3. Enable headless mode
Disable debug port on OBC. This is so that the Flight controller unit can communicate with the radxa. Edit `/boot/uEnv.txt` and remove line with `console=ttyAML0,115200`, which removes this port as a debugging console.

### 4. Connecting to wifi network
```bash
# Proceed on activating WIFI using https://wiki.radxa.com/Zero/Ubuntu
# Root username and pasword is rock/rock
sudo su
sudo nmcli r wifi on
sudo nmcli dev wifi
sudo nmcli dev wifi connect "wifi_name" password "wifi_password"                   
```
Optionally, you can set network priorities to prioritize which network to connect to:
```bash
# List priority table
nmcli -f NAME,UUID,AUTOCONNECT,AUTOCONNECT-PRIORITY c
# Set priority of WIFINAME network
nmcli connection modify WIFINAME connection.autoconnect-priority 10
```

### 5. Synchronization of time in isolated network (no internet connection)
There will be situations where your local network does not have internet but you will need to maintain time synchronization across the devices within the same network especially when operating ROS. 

The following instruction goes through how to set up a NTP (Network Time Protocol) server on your host computer and NTP clients on your radxa devices (or any other linux device for that matter).

- Make sure ntp daemon is installed on both host and client computer: `sudo apt-get install ntp`
- (Optional) Add network aliases to /etc/hosts

- Host computer
  1. modify the ntp config: `sudo vim /etc/ntp.conf` and add the following lines
    ```bash
      # Add local clock as server in the event there is no internet connection
      server 127.127.1.0
      # fudge forces the system to treat local clock as a ntp server
      fudge 127.127.1.0 stratum 10
      # Restrict access to only within the local network subnet
      restrict 192.168.31.0 mask 255.255.255.0 nomodify notrap
    ```
  2. Restart ntp: `sudo /etc/init.d/ntp restart`
  3. Monitor system log to see if you can synchronize with a time server: `tail -f /var/log/syslog`

- Client computer
  1. modify the ntp config: `sudo vim /etc/ntp.conf` and add the following lines
    ```bash
      # Add the local ntp server as a master, please DO NOT ever add 'prefer' keyword, it will not work
      server master0 iburst
    ```
  2. Restart ntp: `sudo /etc/init.d/ntp restart`
  3. Monitor connections to peer: `ntpq -c lpeer`

- More commands for ntp
  ```bash
    #####
    # ntp
    #####
    # Restart ntp server
    sudo /etc/init.d/ntp restart

    # Check for synchronization 
    tail -f /var/log/syslog

    # Check list of peers
    ntpq -c lpeer

    # systemctl
    systemctl status chronyd
    sudo systemctl restart chronyd
    
    # timedatectl
    timedatectl status
    timedatectl set-ntp 1
    timedatectl set-local-rtc 1

    # To manually set time, disable ntp first 'timedatectl set-ntp 0'
    timedatectl set-time '2023-08-18 15:05:30'
  ```

- [Reference: how-do-i-setup-a-local-ntp-server](https://askubuntu.com/questions/14558/how-do-i-setup-a-local-ntp-server)

### 6. Interface with PX4
- Make sure you have already enabled headless mode in step 3
- Make sure your current user (on Radxa) is added to the dialout group through `sudo usermod -a -G dialout $USER`
  - If not, you will meet a `permission denied` error when trying to access the serial port
- Make sure Baud rate when launching MAVROS matches what is set as PX4 params
  - Format: `roslaunch mavros px4.launch fcu_url:=/dev/<PORT>:<BAUD_RATE>`
  - Example: `roslaunch mavros px4.launch fcu_url:=/dev/ttyAML0:230400`
- A successful connection should show you that an IMU is detected from the node and you should be able to rostopic echo the current drone's position 

2. Connection between FCU and Radxa
    - FCU: Connected as MAV_0_CONFIG to one of the UART (should be UART4, which is registered as TEL2 in PX4)
    - Radxa: Connected to UART_AO_A (/dev/ttyAML0)
3. Launch mavros bridge
    - Might need to perform the following in root mode. Enter with `sudo su`
    - `source /home/rock/.bashrc`
    - `roslaunch mavros apm.launch fcu_url:=/dev/ttyAML0:230400`


### 7. Additional information

#### How to startup Radxa terminal on Your Laptop/Desktop's OS

Because Radxa has no GUI, it might be better to run the Radxa's terminal on top of an existing desktop OS like Ubuntu. So that you can copy and paste and browse the web. So what you need is the following:

1. You need to connect the serial debug port on the Radxa to a USB for communication with the desktop. (Don't connect the power supply to the board yet).
2. Download minicom, which is a software that can be used to communicate with Radxa through serial port. see `https://wiki.radxa.com/Zero/dev/serial-console`. In general the steps are:
  2.1 Add current user to the plugdev group so that can access serial device without root permission.
  2.2 Then edit bashrc with alias minicom and default settings
  2.3 Run the command 'minicom zero'
  2.4 After running, you can press Crtl+X and then followed by z to set configurations.
```bash
# Download Minicom
sudo apt-get update
sudo apt-get install minicom
#First let's add the current user to plugdev group so we can access serial device without root permission.
sudo usermod -a -G plugdev $USER
# Edit your ~/.bashrc and add the following line so minicom will always be launched with the following default setting
alias minicom='minicom -w -t xterm -l -R UTF-8'

#Login to a new terminal to for the change to take effect.
#Create and edit file ~/.minirc.zero with the following content:
pu port             /dev/ttyUSB0
pu baudrate         115200
pu bits             8
pu parity           N
pu stopbits         1
pu rtscts           No

#Now executing minicom zero will use the config above, and connect to Radxa Zero's serial console.
```
3. With the above steps, you can then plug in your power supply to power up the OBC. Minicom should be able to auto detect the OBC and display the OBC's terminal on the terminal that you ran Minicom.
4. So in a way this feels like an SSH. You can now control the OBC from your existing main OS.

#### Clone your Radxa device as an image
```bash
# Hold boot button and connect radxa to pc, run the following command
sudo boot-g12.py rz-udisk-loader.bin

# Get device name, should be something like "/dev/sdX" where X is a letter
lsblk -p

# Copy device image
export SD_CARD_DEVICE_NAME=/dev/sdX
export IMAGE_FILE_NAME=~/Downloads/gestelt_os_15_8_23.img

sudo dd bs=4M if=$SD_CARD_DEVICE_NAME of=$IMAGE_FILE_NAME conv=fsync status=progress
sudo chown $USER: $IMAGE_FILE_NAME

# Installation of PiShrink
cd ~
wget https://raw.githubusercontent.com/Drewsif/PiShrink/master/pishrink.sh
chmod +x pishrink.sh
sudo mv pishrink.sh /usr/local/sbin/pishrink
sudo pishrink $IMAGE_FILE_NAME

# Compress image if necessary 
tar -czf $IMAGE_NAME.tar.gz $IMAGE_NAME.img

# Proceed to load image onto board using BalenaEtcher or other methods
```
[Reference](https://github.com/matthewoots/documentation/blob/main/radxa-zero/radxa-flash-backup-image.md)

#### ssh into Radxa
```bash
# Get RADXA_IP_ADDR from ifconfig on the radxa device
ssh rock@RADXA_IP
```

(OPTIONAL) Generate ssh keys to make your life easier
```bash
# On central computer, generate a public key
ssh-keygen -t ecdsa -b 521
# Copy public key over to robot
ssh-copy-id -i ~/.ssh/id_ecdsa rock@ROBOT_IP
```
On central computer, setup ssh config file. Save as `~/.ssh/config`
```bash
Host robot
    User rock
    Hostname ROBOT_IP
    IdentityFile ~/.ssh/id_ecdsa
    ForwardX11 yes
```
Now you can access the Radxa using `ssh robot`

#### Adding ESP32 Radio 

ESP32 is a radio that is faster than communicating via the TCP/IP protocol. It can be integrated with the flight controller board. One ESP32 radio will be attached to the Drone via serial port while the other will be attached to the ground laptop (USB port). In general, some code will be uploaded into the ESP32 board which allows it to transmit and receives messages continuously from its serial connection.

1. To start writing the code to be uploaded into the radio, you need have an arduino IDE and set up your IDE to work with ESP32 board (because it requires prerequisite packages like esp_now.h etc). Look here `https://randomnerdtutorials.com/installing-the-esp32-board-in-arduino-ide-windows-instructions/`.

2. Afterwhich, you can start writing the code to be uploaded. Some examples are as follows: `https://randomnerdtutorials.com/esp-now-two-way-communication-esp32/`

For actual flight, you need to make sure the baud rate at which each radio is receiving and transmitting is the same (recommended 57600). For the ESP32 boards, this has to be configured in the code that you will upload to the board. For the drones, you have to configure it in the QGroundControl.Set baud rate telem2 to 57600 (or which ever baud rate to be consistent).

#### Additional Resources

`https://github.com/radxa/documentation/tree/master/rs102`


### Troubleshooting
1. Permission denied when accessing serial port of FCU from MAVROS on Radxa
    - Make sure Baud rate when launching MAVROS matches what is set as PX4 params
    - Make sure your current user (on Radxa) is added to the dialout group through `sudo usermod -a -G dialout $USER`
2. Unable to boot up Radxa.
  - Did you miss out on any installation steps?
  - If not, proceed to reflash the bootloader. This is done by pressing the boot button on radxa and connecting it to the PC. You would then run the following command: `sudo boot-g12.py /path/to/fip/radxa-zero/u-boot.bin` 