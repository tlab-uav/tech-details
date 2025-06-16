---
hide_title: true
sidebar_label: Introduction
---


# Introduction

This documentation consists of the steps and procedures for the bringup of the Aira drone
![](./assets/aira_drone.jpg)
![](./assets/aira_drone_with_controller.jpg)

## Aira System Specification

### Drone Details 

<div className="invisible-table">

| Sub-System|Name& Link|
|------------|---------|
|Flight Controller               |: [CUAV 7 Nano](https://www.cuav.net/en/7-nano-en/)|
|Motors		            		|: [FETEC FM2104M 1950KV](https://fettec.net/en/shop/electronics/motors/fettec-motor-fm2104m?number=FET71.1)|
|Propellers		            	|: [Gemfan 5055](https://www.gemfanhobby.com/goods/2733949)|
|ESC				                |: [TMotor F55A Pro II 4in1 ESC](https://store.tmotor.com/product/f55a-pro-v2-4in1-fpv-esc.html)|
|Battery				            |: [DJI Air3Li-ion 4S-4241mAh](https://store.dji.com/sg/product/dji-air-3-intelligent-flight-battery?vid=143391)|
|Optical Flow Sensor	            |: [micoair MTF-01P](https://micoair.com/optical_range_sensor_mtf-01p/)|
|GNSS Modules		            |: [M10Q-5883](https://www.mateksys.com/?portfolio=m10q-5883)|
|RC Transmitter          		|: [Futaba 16IZ Super Heli](https://futabausa.com/product/16izs/) with [TM-18-9001SB RF Module](https://futabausa.com/product/tm18-9001-combo/)|
|RC Receiver			            |: [Futaba R9001SB](https://futabausa.com/product/r9001sb-ardcss-s-bus/)|
|Communication Radio	            |: [ViuMesh Lite](https://nusu.sharepoint.com/sites/TLFlightSciences/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FTLFlightSciences%2FShared%20Documents%2F02%2D06%20Drone%20Details%2FStudy%20%2D%20Raynor%20II%20Drone%20Development%2FOutsourced%20Development%2FManuals%2FViuMesh%5FQuick%5FStart%5FTaisync%5FMesh%5FLite%5F2%2E4G%2Epdf&parent=%2Fsites%2FTLFlightSciences%2FShared%20Documents%2F02%2D06%20Drone%20Details%2FStudy%20%2D%20Raynor%20II%20Drone%20Development%2FOutsourced%20Development%2FManuals)|

</div>

### Payload Details

<div className="invisible-table">

| Sub-System|Name& Link|
|------------|---------|
|On-Board Computer_SoM		    |: [Orin NX 16GB](https://developer.download.nvidia.com/assets/embedded/secure/jetson/orin_nx/docs/Jetson_Orin_NX_DS-10712-001_v0.5.pdf?__token__=exp=1750057869~hmac=4b1e1aa54916f471bd72bbbed05e78dbd8528366716e84e84efd08689c8b23c1&t=eyJscyI6IndlYnNpdGUiLCJsc2QiOiJkZXZlbG9wZXIubnZpZGlhLmNvbS8/ZmlsZW5hbWU9NDAzLmh0bWwifQ==)|
|On-Board Computer_Carrier Board	|: [Forecr DSBOARD-ORNXS w/ 256GB SSD & WiFi](https://www.forecr.io/products/dsboard-ornxs?variant=52578497462621)|
|Vision Sensors				    |: [DP180 Pro Nadir(Front) & DP180 Pro](https://nusu.sharepoint.com/sites/TLFlightSciences/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FTLFlightSciences%2FShared%20Documents%2F02%2D06%20Drone%20Details%2FStudy%20%2D%20Raynor%20II%20Drone%20Development%2FOutsourced%20Development%2FManuals%2FSpec%20Sheet%20DP180%5FDSO%2Epdf&parent=%2Fsites%2FTLFlightSciences%2FShared%20Documents%2F02%2D06%20Drone%20Details%2FStudy%20%2D%20Raynor%20II%20Drone%20Development%2FOutsourced%20Development%2FManuals)|

</div>