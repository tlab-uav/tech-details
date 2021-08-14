---
hide_title: true
sidebar_label: ECL EKF State Reset Logics
---

# ECL EKF State Reset Logics

Remark: local frame refers static frame, body frame refers to the moving frame attached to the vehicle.

## Possible Resets and Updated Flag

The reset logics for modern PX4 ECL EKF resides in `ekf_helper.cpp`. All resets are tracked by `_state_reset_status` struct, stored within uORB `vehicle_local_position` message (`PublishLocalPosition()`).


| Reset Logic                   | Updated Flag                    | Delta Frame | uORB                                     | MAVLink |
| ----------------------------- | ------------------------------- | ----------- | ---------------------------------------- | ------- |
| `resetHorizontalVelocityTo()` | `velNE_change`, `velNE_counter` | local NED   | `delta_vxy`, `vxy_reset_counter`         |   NIL   |
| `resetVerticalVelocityTo()`   | `velD_change`, `velD_counter`   | local NED   | `delta_vz`, `vz_reset_counter`           |   NIL   |
| `resetHorizontalPositionTo()` | `posNE_change`, `posNE_counter` | local NED   | `delta_xy`, `xy_reset_counter`           |   NIL   |
| `resetHeight()`               | `posD_change` , `posD_counter`  | local NED   | `delta_z`, `z_reset_counter`             |   NIL   |
| `resetQuatStateYaw()`         | `quat_change`, `quat_counter`   | body frame? | `delta_heading`, `heading_reset_counter` |   NIL   |


```cpp
struct {
    uint8_t velNE_counter;	///< number of horizontal position reset events (allow to wrap if count exceeds 255)
    uint8_t velD_counter;	///< number of vertical velocity reset events (allow to wrap if count exceeds 255)
    uint8_t posNE_counter;	///< number of horizontal position reset events (allow to wrap if count exceeds 255)
    uint8_t posD_counter;	///< number of vertical position reset events (allow to wrap if count exceeds 255)
    uint8_t quat_counter;	///< number of quaternion reset events (allow to wrap if count exceeds 255)
    Vector2f velNE_change;  ///< North East velocity change due to last reset (m)
    float velD_change;	///< Down velocity change due to last reset (m/sec)
    Vector2f posNE_change;	///< North, East position change due to last reset (m)
    float posD_change;	///< Down position change due to last reset (m)
    Quatf quat_change;	///< quaternion delta due to last reset - multiply pre-reset quaternion by this to get post-reset quaternion
} _state_reset_status{};	///< reset event monitoring structure containing velocity, position, height and yaw reset information
```

Suggestion: shall we expose the information to MAVLink for planning algorithms to work with?


### Reference: `vehicle_local_position.msg`

```
# Fused local position in NED.

uint64 timestamp			# time since system start (microseconds)
uint64 timestamp_sample                 # the timestamp of the raw data (microseconds)

bool xy_valid				# true if x and y are valid
bool z_valid				# true if z is valid
bool v_xy_valid				# true if vy and vy are valid
bool v_z_valid				# true if vz is valid

# Position in local NED frame
float32 x				# North position in NED earth-fixed frame, (metres)
float32 y				# East position in NED earth-fixed frame, (metres)
float32 z				# Down position (negative altitude) in NED earth-fixed frame, (metres)

# Position reset delta
float32[2] delta_xy
uint8 xy_reset_counter

float32 delta_z
uint8 z_reset_counter

# Velocity in NED frame
float32 vx 				# North velocity in NED earth-fixed frame, (metres/sec)
float32 vy				# East velocity in NED earth-fixed frame, (metres/sec)
float32 vz				# Down velocity in NED earth-fixed frame, (metres/sec)
float32 z_deriv				# Down position time derivative in NED earth-fixed frame, (metres/sec)

# Velocity reset delta
float32[2] delta_vxy
uint8 vxy_reset_counter

float32 delta_vz
uint8 vz_reset_counter
# Acceleration in NED frame
float32 ax        # North velocity derivative in NED earth-fixed frame, (metres/sec^2)
float32 ay        # East velocity derivative in NED earth-fixed frame, (metres/sec^2)
float32 az        # Down velocity derivative in NED earth-fixed frame, (metres/sec^2)

float32 heading				# Euler yaw angle transforming the tangent plane relative to NED earth-fixed frame, -PI..+PI,  (radians)
float32 delta_heading
uint8 heading_reset_counter

# Position of reference point (local NED frame origin) in global (GPS / WGS84) frame
bool xy_global				# true if position (x, y) has a valid global reference (ref_lat, ref_lon)
bool z_global				# true if z has a valid global reference (ref_alt)
uint64 ref_timestamp			# Time when reference position was set since system start, (microseconds)
float64 ref_lat				# Reference point latitude, (degrees)
float64 ref_lon				# Reference point longitude, (degrees)
float32 ref_alt				# Reference altitude AMSL, (metres)

# Distance to surface
float32 dist_bottom			# Distance from from bottom surface to ground, (metres)
bool dist_bottom_valid			# true if distance to bottom surface is valid

float32 eph				# Standard deviation of horizontal position error, (metres)
float32 epv				# Standard deviation of vertical position error, (metres)
float32 evh				# Standard deviation of horizontal velocity error, (metres/sec)
float32 evv				# Standard deviation of horizontal velocity error, (metres/sec)

# estimator specified vehicle limits
float32 vxy_max				# maximum horizontal speed - set to 0 when limiting not required (meters/sec)
float32 vz_max				# maximum vertical speed - set to 0 when limiting not required (meters/sec)
float32 hagl_min			# minimum height above ground level - set to 0 when limiting not required (meters)
float32 hagl_max			# maximum height above ground level - set to 0 when limiting not required (meters)

# TOPICS vehicle_local_position vehicle_local_position_groundtruth
# TOPICS estimator_local_position
```



