---
hide_title: true
sidebar_label: "MicroXRCE DDS Agent: Setup & Installation"
---
# MicroXRCE DDS Agent: Setup & Installation

## Installation of uxrcedds agent
Git clone thee MicroXRCE DDS Agent git repository

:::note
Current version of PX4 has MicroXRCE DDS Client based on v2.x.x which supports only MicroXRCE DDS Agent version based on v2.x.x
:::

```bash
git clone -b v2.4.3 https://github.com/eProsima/Micro-XRCE-DDS-Agent.git  
```

```bash
$ cd Micro-XRCE-DDS-Agent
$ mkdir build && cd build

$ cmake ..
$ make
$ sudo make install

sudo ldconfig /usr/local/lib/
```

To run the MicroXRCE DDS Agent

```bash
sudo MicroXRCEAgent serial -D /dev/ttyTHS1 -b 926100
```

:::note
The above command is specific to the Aira drone, as the OBC is integrated with the flight contoller on UART1 of OBC, that has the device address `/dev/ttyTHS1`
:::

## MicroXRCE Agent Service

To automate and run the MicroXRCE Agent after boot, follow the steps

```bash
sudo vim /etc/systemd/system/microxrceagent.service
```
Copy and paste the following lines and save the file

```
[Unit]
Description= MicroXRCEAgent serial interface to flight controller
After=network.target

[Service]
ExecStart=/usr/local/bin/MicroXRCEAgent serial -D /dev/ttyTHS1 -b 921600
Restart=on-failure
User=root

[Install]
WantedBy=multi-user.target
```
<!-- Download the above file from [microxrceagent.service](/downloads/microxrceagent.service) -->
<!-- 
Download the above file from <a href="/downloads/microxrceagent.service" download="microxrceagent.service">`microxrceagent.service`</a>

<a href="./downloads/microxrceagent.service">uxrce.service</a> -->


<!-- <a href="/downloads/aira/microxrceagent.service" download>Download file.txt</a> -->

<a href="/tech-details/downloads/aira/microxrceagent.service" download>Download file</a>


Reload the daemon and enable the microxrceagent.service

```bash
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable microxrceagent.service

sudo systemctl start microxrceagent.service
sudo systemctl status microxrceagent.service #to check the status of the MicroXRCEAgent status
```

To restart the microxrceagent.service if needed,
```bash
sudo systemctl restart microxrceagent.service
```