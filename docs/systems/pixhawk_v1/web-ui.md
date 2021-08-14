---
hide_title: true
sidebar_label: Web-based UI
---

# Web-based UI

## Overview
This Robot web-based UI package is built based on [robotwebtools](http://robotwebtools.org/tools.html). It has the following functions:
- Showing the status of the robot, such as position, real-time image, path, and map, etc
- Integrated RVIZ allowing further potential functions
- Command (takeoff, mission, land, etc.) can be sent to the robot directly from the UI
- Console output from ROS
- A mission tab allowing the user to choose multiple waypoints directly from the floor plan

![](./assets/ui.png)

![](./assets/waypoint_selection_tab.png)

## Installation

### User 
  You will have to deploy the web page to access it by IP address. It should be deployed on the robot for now.

#### 1. Packages Installation

  - nginx
    ```
    $ sudo apt-get update
    $ sudo apt-get install nginx
    ```
#### 2. Setup

  - Make sure the full path of your UI folder have 775 permission
    ```
    $ chmod 775 folder_name 
    Usually you will have to give SD card 775 permission if you put the UI inside it.
    ```
  - Config nginx
    ```
    $ sudo gedit /etc/nginx/sites-enabled/default
    find the line:
    $ root /var/www/html;
    and change the value /var/www/html to the path to your UI folder. For example:
    root /media/nvidia/SD/catkin_ws/src/pixhawk_v1/pixhawk_ui;
    ```
  - Restart Nginx:
    ```
    $ sudo systemctl restart nginx
    ```
#### 3. Usage: access by IP

    Try 'Open Incognito Window' in your web browser and put the pixhawk's IP, you will be able to see the UI if you set everything correctly. 

You are good to stop here if you want to use the UI only. 

### Developer (Optional)
#### 1. Download tools in Vscode on host PC 
- Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets.

    This is the framework itself with couple of additional features which contain ready-to-use templates and other stuff useful while developing in bootstrap.

- Live Server 

    To see your web UI changes in realtime

- Prettier Code formatter 

    To keep your source code clean

- vscode-icons 

    To make your workspace look good

#### 2. Onboard PC setup 
#####  Download ros web server packages
- web_video_server
    ```
    $ sudo apt-get install ros-kinetic-web-video-server
      It launches the server for streaming ROS image messages as video through the web.
    ```
-  rosbridge_server
    ``` bash
    $ sudo apt-get install ros-kinetic-rosbridge-suite
      It launches the web sockets to allow web apps to publish or subscribe ROS messages.
    ```
- tf2-web-republisher
   ```
   $ sudo apt-get install ros-kinetic-tf2-web-republisher
   ```
##### Put the following contents in ui.launch under your package
``` xml
<!-- -->
<launch>
  <node pkg="web_video_server" type="web_video_server" name="web_video_server"/>
  <include file="$(find rosbridge_server)/launch/rosbridge_websocket.launch" />
  <node pkg="tf2_web_republisher" type="tf2_web_republisher" name="tf2_web_republisher" />
</launch>
```

#### 3. Usage

- Run UI launch file on the onboard PC
```
$ roslaunch your_packages ui.launch

```

- Access UI web page on local ground station From Vscode

  Open your workspace with Vscode; Right click index.html in your Vscode; Click "Open with Live Server" and then the web will show up in your browser

## MISC
### Tutorials and useful websites
1. [Bootstrap 4 + ROS](https://medium.com/husarion-blog/bootstrap-4-ros-creating-a-web-ui-for-your-robot-9a77a8e373f9)
2. [Bootstrap 4 Tutorial](https://www.w3schools.com/bootstrap4/default.asp)
3. [ROBOTWEBTOOLS](http://robotwebtools.org/tools.html)
4. [Theme](https://bootswatch.com/)
5. [HTML color code](https://www.rapidtables.com/web/color/html-color-codes.htmls)

