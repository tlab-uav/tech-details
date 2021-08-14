---
hide_title: true
sidebar_label: Framework Overview
---

# EDT Framework Overview

## Installation


### ROS main function （edt_node_laser_realdrone.cpp）

#### ROS basics

subscribe 4 topics: pose, laser scan, depth from ZED, confidence from ZED
``` cpp
        scan_sub = nh.subscribe("/scan", 1, &EDTNODE::get_scan, this);
        o_sub = nh.subscribe("/mavros/position/local", 1, &EDTNODE::get_pose, this);
        depth_sub = nh.subscribe("/revised_sensor/image",1,&EDTNODE::get_depth, this);
        subConf = nh.subscribe("zed/confidence/confidence_map", 1, &EDTNODE::get_confi_map, this);
```
publish 1 topic:
``` cpp
        mapTimer = nh.createTimer(ros::Duration(0.1), &EDTNODE::publishMap, this);

        pub_map = nh.advertise<edt::CostMap> ("cost_map", 1);
```

node param
``` cpp
        nh.param<bool>("/edt/simulation", simulation, false);
        nh.param<int>("/edt/crop", crop, depth_rows);
        nh.param<float>("/edt/clear_range", clear_range, 10);
        nh.param<double>("/nndp_cpp/fly_height",FLYHEIGHT,1.0);
```

#### Code structure

while receive a depth measurement, update the probatility map (call function from stereo.cpp)
``` cpp
        if (got_depth)
        {
            su->makeStereoPt(trans,depth_ptr,confidence_ptr);
        }
```

Update the cost Map (call function from MapUpdater.cpp)
``` cpp
        su->updateEDTMap(FLYHEIGHT-0.4, FLYHEIGHT+0.4, center);
```

Publish the distance map
``` cpp
        pub_map.publish (cost_map_msg);
```

### ROS main function （edt_node_dsstereo.cpp）

#### Difference with edt_node_laser_realdrone.cpp

set params instead of hard coding, such as 
the physical size of a grid in meter, `gridSize`, 
how many grids in the map, `map_x`, `map_y`, `map_z`
how many grids will be updated in each step, `update_x`, `update_y`, `update_z`
fly height of UAV, `FLYHEIGHT`
height range of the map, `HEIGHT_EXPANSION`
whether there's a confidence map together with depth map, `use_confidence`
the params used in map update, `d_min`, `d_max`, `d_thre`
