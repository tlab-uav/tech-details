---
hide_title: true
sidebar_label: Unity Setup
---

# Usage
## Simulator
### Setup
1. Select the venue needed, download the correspoinding folder to local PC.
2. Go into the folder, you'll see a few executable files. The simulation requires you to run the **Server** file first, followed by the **Client** files sequentially.
3. Open the **Server** file, click **Play!**, select the map needed, click **LAUNCH**, you'll see the map loaded.
4. Go back to the folder, open the **Client01** file, click **Play!**, make sure the **Sim Mode** is at **DebugOnlyReference** (at the upper left corner). Change the **REMOTE DATA IP ADDRESS** to that of the drone you are gonna connect, if needed, then click **CONNECT**.
5. Redo step 4 for **Client02**, **Client03** etc., if there is more than one client needed until all client files are opened.
6. After each simulation, make sure all the .exe files are closed. Re-open them by following **step 1 to 5** for another round of simulation.

---
:::tip
### How to choose which client to connect which drone
1. Open a TX2 terminal and run $ `echo $simulator_id` which gives you a number that represents the first number of a client's UDP port.
2. `simulator_id` is one bigger than the number in client's name. 
3. So, for example, if `simulator_id` is 2, you should choose `client01`.
:::

:::tip
For build your own unity scene and guide to modify please refer to **(Build-your-own)**
:::

### Build for Auto Fast Flt
1. The build folder is too large to upload to bitbucket. **(Will be available soon)**
2. It has been uploaded to 
- `"\\deptnas.nus.edu.sg\TSL\Research\Centre Flight Science\Intelligent Unmanned Systems\Research Data Backup\Users\YONG Wen Huei Wayne\Unity Simulator\Auto Fast Flt_build-2020-mm-dd"`
3. Start Server.exe. Select environment **"Science Centre"**
4. For 5 degree downward tilt Lidar, use  
- `"\\deptnas.nus.edu.sg\TSL\Research\Centre Flight Science\Intelligent Unmanned Systems\Research Data Backup\Users\YONG Wen Huei Wayne\Unity Simulator\Auto Fast Flt_5_deg_down_build-2020-mm-dd"`
5. For 10 degree downward tilt Lidar, use  
- `"\\deptnas.nus.edu.sg\TSL\Research\Centre Flight Science\Intelligent Unmanned Systems\Research Data Backup\Users\YONG Wen Huei Wayne\Unity Simulator\Auto Fast Flt_10_deg_down_build-2020-mm-dd"`

### Build for Fisheye View Mavlink2
1. The build folder is too large to upload to bitbucket.
2. It has been uploaded to "\\deptnas.nus.edu.sg\TSL\Research\Centre Flight Science\Intelligent Unmanned Systems\Research Data Backup\Users\YONG Wen Huei Wayne\Unity Simulator\Fisheye_build-2020-mm-dd"
3. Start Server.exe. Select environment "Science Centre"
4. Start Client01.exe. Select Sim Mode "DebugOnlyReference"
4. Launch nus_unity_socket
5. The fisheye image topic is `/hil/sensor/stereo/right/image_raw` and `/hil/sensor/stereo/right/image_raw`

### Build for Auto Fast Flt Mavlink2
1. The build folder is too large to upload to bitbucket.
2. It has been uploaded to "\\deptnas.nus.edu.sg\TSL\Research\Centre Flight Science\Intelligent Unmanned Systems\Research Data Backup\Users\YONG Wen Huei Wayne\Unity Simulator\Auto Fast Flt-mavlink2_build-2020-mm-dd"
3. Start Server.exe. Select environment "Science Centre"
4. Start Client01.exe. Select Sim Mode "Vision" if DJI simulation pose is used.
5. Launch nus_unity_socket
6. Publish DJI (ENU) pose to `/mavros/vision_pose/pose`