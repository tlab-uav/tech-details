---
hide_title: true
sidebar_label: About Time Synchronisation
---

# FCU-OBC Time Synchronisation

## Motivation - Sensor Data Correspondence

PX4-based flight controller boards (FCU), such as Pixhawk series, have rich I/O interfaces, and at the same time provides a real-time operating system environment (POSIX-compliant Nuttx specifically). These capabilities enables us to have real-time guarantees, when interfacing any sensors that are time-critical.

The necessity of time synchronisation comes into play due to the following facts:

1. The flight controller board (FCU) and the on-board computer (OBC) operates on different hardware clocks (typically its respective boot time, in nanoseconds);
2. Sensor data reception is physically distributed: some sensor data (e.g. built-in IMU) is received by the FCU, while others (e.g. cameras) are received by the OBC;
3. Tight-coupled sensor fusion algorithm requires precise time correspondence of all sensor inputs involved, to perform inference on the state of the agent.

One particular use case is to operate multiple cameras in a hardware-synchronised fashion, with a master IMU module sending electrical triggering signal. We are interested in determining the correspondence between all incoming image streams and the triggering IMU measurement.

The solution is non-trivial as IMU measurement is taken with a timestamp in **FCU-time domain**, whereas the image reception (either over MIPI or USB data link) is timestamped in **OBC-time domain**.

## Doing Without Time Synchronisation

It is technically possible to determine correspondence without any time synchronisation, but with a few necessary assumptions. In this setting, we need to assume:

- All sensor data to establish correspondence are strictly triggered by the same physical event (CPU instruction, electrical signal), up to the precision required (often sub-millisecond);
- The communication delays of respective sensor data **to OBC** are predicable / consistent;
- The sensor data is gathered by OBC, and the sensor fusion algorithms are only carried out on OBC. In this way, we could perform all processing in **OBC-time domain**;
- The OBC has close to realtime scheduling performance. (This is where things may break, particularly under high CPU load)

Fortunately, this is often the case. Lets do some quick maths in the case of IMU-Cameras data correspondence.



### Correspondance with Known Latency and Sampling Period

#### Latency for IMU Data over UART

Typically, IMU data is transmitted over UART protocol from FCU / dedicated IMU to the OBC. The typical baud rate we have is 921600bps, which is ~90KB per second, which in turn is **90 byte per millisecond**. It is typically safe to assume each IMU packet is less than a 100 byte, therefore the communication delay induced by the physical UART layer is about $t_{UART} \approx 1$ ms. In reality, this number is still in the range of very few milliseconds (depending on the pulling rate of the OS; In Linux low-latency mode, the rate is about 1ms).

#### Latency for Image Data over USB3.0

On the other hand, one image data frame is much much larger than an imu data frame. A 1-megapixel 16-bit raw image would give rise to a data size of 2MB. Provided a USB3.0 physical layer connection has a bandwidth of 5Gbit/s, the communication delay over USB is $t_{USB} \approx \frac{8*2}{5} = 3.4$ ms. In reality, the delay could be in terms of $10$ ms or more, heavily **depends on how many devices** present on the USB bus streaming.

Putting into context, with a 20Hz rate of IMU-cameras correspondence frequency, the data correspondence happens every 50ms or so. Therefore, we could infer the IMU-cameras correspondence by just looking at the time of arrival (TOA) at OBC side. Why is that the case?

1. Camera data is almost surely (we will see when this is not the case soon) arrived after IMU data, because of the communication delays;
2. Compared to the 50ms sampling period in between each IMU-camera correspondence event, the expected slack time between the TOA of camera data and TOA of IMU data is much less, $10ms < 50ms$. This ensures that we do not have ambiguity of having camera data 'diffusing' into the next IMU-camera event. (We may term this as **aliasing**)

In summary, the good stuff here is that we have the **slack time** (between IMU data and camera data) predicable and less than the **sampling period**. We could use a trivial algorithm to match the camera data to the closest IMU data which is *strictly earlier* in OBC-time domain.

### Potential Issues Working without Time Synchronisation

**Pros**:

- No software architectural dependency outside OBC

**Cons**:
- All sensor data need to be triggered by the same physical event, and the precise timing of that event cannot be determined precisely (can only be estimated based on the communication delays etc.)
- Case-by-case analysis needed
- Non-realtime operating system may cause jittering which corrupts the correspondence
- Subject to system CPU loading and other resource constraints

The obvious advantage of this no-synchornisation approach is that there is no dependency outside the OBC, as we disregard all other time domains, and only work on time of arrival timings in the OBC-time domain.

However, as we have seen, the correctness of such approach need to be analysed case-by-case: the nature of the communication channels, the data size, the time period of each correspondence event. All those piece must be compatible to make inference of correspondance work. Otherwise, issues like aliasing may happen.

**Known issue**: In not-so rare cases, camera data may arrive to OBC earlier than the triggering. This may caused by multiple factors, such as the USB kernel was allocated the right time to transmit the data over, while the UART kernel is stucked waiting for scheduling. I would like to term this effect as **jitter**, as this normally have something to do on how the OS schedule kernel tasks.

In addition, there is no way to know the actual time that the correspondence is happening, which hides behind the non-deterministic communication delay, buffering delay etc.

For a reference on how the implementation may look like for a IMU-Camera synchronisation, without assuming time synchronisation, refer here [camera_imu_sync.cpp](https://github.com/chengguizi/tiscamera_ros/blob/master/include/camera_imu_sync.hpp).

## Doing Time Synchronisation using MAVLink

 The more elaborated and proper way to achieve time synchronisation of different sensor data in different time-domain is discussed below.

In the platform we used, an implementation has been done using MAVLink protocol, implemented in both PX4 Firmware and Mavros package.

### Working Principle ([Reference](https://github.com/mavlink/mavlink-devguide/issues/194))

The host (both side CAN be the host at the SAME time) sends a [TIMESYNC message](https://mavlink.io/en/messages/common.html#TIMESYNC), which contain two fields `tc1` (filled with zero) and `ts1`(filled with current hardware time in nanoseconds). 

As the receiver, when a TIMESYNC message is received, there are two cases:

- `tc1` == 0, then the message just make a half-round trip. The receiver sends back `tc1` filled with its own current hardware timestamp in nanoseconds, and the original `ts1` field
- `tc1` != 0, then the message has made the full round trip. Then the current hardware time subtracted by the `ts1` field will give the round trip time, and tc1 - (current time + `ts1`) / 2 will give the offset.

The logics are both implemented in mavros (`sys_time.cpp`) and in PX4 firmware. On mavros, the estimation is availalbe at topic `/mavros/timesync_status`, like example below:

```yaml
header: 
  seq: 172
  stamp: 
    secs: 1013
    nsecs: 301973092
  frame_id: ''
remote_timestamp_ns: 35922878000
observed_offset_ns: 977378604936
estimated_offset_ns: 977378507661
round_trip_time_ms: 0.979619979858
```

### Synchronising Timestamp

:::note
The content below is based on the modified version of [mavros](https://github.com/chengguizi/mavros/tree/monotonic).

The original mavros only allows the time synchronisation to be performed against OBC's realtime clock (Wallclock / UNIX Time). This is potentially problematic for us, as realtime clock can jump, whenever a NTP timesync happens over the network.

`clock_source: monotonic # realtime (ros::Time::now()) or monotonic (MONOTOMIC_TIME)` option has been added to allow mavros to track against monotonic clock (hardware time) on the OBC, instead of the wallclock. (encapsulated in the `get_time_now()`)
:::

To turn on time synchronisation, just set the `timesync_mode` option to be `MAVLINK`, and `clock_source` to be `monotonic`. When `mavros` first starts up, it requires **tens of seconds** to stabilise the estimation. A info prompt will be shown after the synchronisation estimate has been completed.