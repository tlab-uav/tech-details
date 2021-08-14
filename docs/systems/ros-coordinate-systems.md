---
hide_title: true
sidebar_label: ROS Coordinate Systems
---

# ROS Coordinate Systems

Refer to ROS standard https://www.ros.org/reps/rep-0103.html:
- For positions represented with reference to a initial body frame, FLU (NWU) should be used
- However, if the position represents a geographic location (either global or local), ENU should be used
  - This includes `/mavros/local_position`, outputing ENU frame [Code](https://github.com/mavlink/mavros/blob/master/mavros/src/plugins/local_position.cpp)


Similarly, in RVIS visualisations, RGB represents the 3-axis of the coordinates in sequence. The default global coordinates is `map`. This map should represent ENU aligned global position or ENU aligned local position.

:::warning
Reading from this [issue](https://github.com/mavlink/mavros/issues/525), we should note that NWU is neither a ROS standard nor a Mavros convention, when describing a location.

However, NWU is used in sensors for example IMU for their linear acceleration and angular rates, which creates confusion, by Mavros. (Mavlink always uses NED)
:::

## Frame ID and Coordinate Frames

Naming convention: [REP 105](https://www.ros.org/reps/rep-0105.html)

Rule of thumb: sensor data should be in NED frame (depth, VIO), global position and orientation should be in ENU frame (Motion Capture, [Code](https://github.com/mavlink/mavros/blob/master/mavros_extras/src/plugins/mocap_pose_estimate.cpp)).

### From Mavros to ROS (Planning)
| Frame ID        | Coordinate Frame | Remark             | Example                                                     |
| --------------- | ---------------- | ------------------ | ----------------------------------------------------------- |
| `map`           | ENU              | True North Aligned | `/mavros/local_position/pose` (configurable in launch file) |
| `map_ned`       | NED              | By Mavros          |                                                             |
| `base_link`     | local **ENU**    | INCONSISTENT       | `/mavros/local_position/odom`, and static tf sent by mavros |
| `base_link_frd` | local NED        | By Mavros          | Should use this as the pointcloud measurement frame         |
| `base_link_enu` |                  |                    | shall we define this?                                       |


![](https://user-images.githubusercontent.com/844913/92745835-fd592f80-f382-11ea-82a7-08724875e74e.png)

[More Info](https://github.com/mavlink/mavros/issues/1388)

It appears that although ROS recommand NWU as the convention for local frame, but `base_link` in mavros uses ENU.

### From Mavros to ROS (VIO)
| Frame ID    | Coordinate Frame | Remark       | Example                                                                     |
| ----------- | ---------------- | ------------ | --------------------------------------------------------------------------- |
| `base_link` | ENU              |              | `/mavros/imu/data/orientation`                                              |
| `base_link` | local NWU        |              | `/mavros/imu/data/angular_velocity`, `/mavros/imu/data/linear_acceleration` |
| `base_link` | local **NWU**    | INCONSISTENT | `/mavros/imu/data_raw/*`                                                    |

### From ROS to Mavros (VIO)
| Frame ID    | Coordinate Frame | Remark             | Example                                           |
| ----------- | ---------------- | ------------------ | ------------------------------------------------- |
| `odom`      | ENU              | True North Aligned |                                                   |
| `odome_ned` | NED              | By Mavros          | `/mavros/odometry/out` with frame_id = "odom_ned" |

```cpp
	// Publish helper TFs used for frame transformation in the odometry plugin
	std::vector<geometry_msgs::TransformStamped> transform_vector;
	add_static_transform("map", "map_ned", Eigen::Affine3d(ftf::quaternion_from_rpy(M_PI, 0, M_PI_2)),transform_vector);
	add_static_transform("odom", "odom_ned", Eigen::Affine3d(ftf::quaternion_from_rpy(M_PI, 0, M_PI_2)),transform_vector);
	add_static_transform("base_link", "base_link_frd", Eigen::Affine3d(ftf::quaternion_from_rpy(M_PI, 0, 0)),transform_vector);

	tf2_static_broadcaster.sendTransform(transform_vector);
```

## Case Study `/mavros/local_position`

All message below assumes `map` as the frame id, and the child frame id is `base_link`. This means that `map` is representing ENU coordinates.

Also, the orientation is also converted to ENU frame, which means `base_link` is also in ENU frame.


### `tf`

The tf transformation is optionally sent by setting the parameter `local_position/tf/send` to true, located at [px4_config.yaml](https://github.com/mavlink/mavros/blob/master/mavros/launch/px4_config.yaml)