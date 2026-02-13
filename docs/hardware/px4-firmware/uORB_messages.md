---
hide_title: true
sidebar_label: uORB Messages
---

# What are uORB Messages?
PX4 runs several modules concurrently. uORB are ways that allow the PX4 modules to communicate with each other effectively. It is almost like ROS. The difference between mavlink and uORB are that mavlink is an interface that allows communication between PX4 and external programmes. uORB is purely for internal (within PX4) purposes.

## Creating uORB messages

Go to PX4-Autopilot/msg folder. Under which, you will see many ready-made messages. You can follow one of these messages and create one of your own.

## Building the message

After creating your own message, you may now search for PX4-Autopilot/msg/CMakeList.txt file. Add in your custom message (xxx.msg) into the line that says set(msg_files ....)

## Testing the message

You can test the interface with this. In PX4, there is a debug message `mavros/debug_value/send`. You can rostopic pub to this topic. 

in PX4-Autopilot/src/modules/mavlink/mavlink_receiver.cpp, there is a function called `handle_message_debug`. You can change the code to this

```
MavlinkReceiver::handle_message_debug(mavlink_message_t *msg)
{
	mavlink_debug_t debug_msg;
	mavlink_msg_debug_decode(msg, &debug_msg);

	debug_value_s debug_topic{};

	debug_topic.timestamp = hrt_absolute_time();
	debug_topic.ind = debug_msg.ind;
	debug_topic.value = debug_msg.value;
	PX4_INFO("Received value: %f", static_cast<double>(debug_msg.value));
	test_position_setpoint_s test_setpoint{};
	test_setpoint.vx = debug_msg.value;
	_test_position_setpoint_pub.publish(test_setpoint);

	_debug_value_pub.publish(debug_topic);
}
```

This basically receives the mavlink message (interfaced by mavros) and then processes the mavlink messages here. _test_position_setpoint_pub is the uORB that I have created just now. Remember to include `#include <uORB/topics/test_position_setpoint.h>` and `	uORB::Publication<test_position_setpoint_s>		_test_position_setpoint_pub{ORB_ID(test_position_setpoint)};` in the mavlink_receiver.h file.


## Testing the receiving of the message
After that, you can launch the PX4. Then you can send a message to through the debug topic `mavros/debug_value/send`. Then under the PX4 terminal, you can type `listener test_position_setpoint` and you will then see your message appear. Rmb test_position_setpoint is the name of your message.
