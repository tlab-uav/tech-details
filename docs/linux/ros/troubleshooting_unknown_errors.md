---
hide_title: true
sidebar_label: Toubleshooting if launching a ROS Node causes a crash for unspecified reasons
---

# Troubleshooting first step
If the code is not complex, you should definitely insert ROS_INFO print statements to determine the source of the crash.

# Troubleshooting second step

If the code is very complex, make use of the following steps which can help to pinpoint exactly where the code crashes

## 1. Enable Core Dumps (current shell)
```bash
ulimit -c unlimited
ulimit -c   # should print: unlimited
```

## 2. Configure Core Dump Location
```bash
echo '/tmp/core_%e.%p' | sudo tee /proc/sys/kernel/core_pattern
```

## 3. Build With Debug Symbols
### catkin tools
```bash
catkin config -DCMAKE_BUILD_TYPE=RelWithDebInfo #or Debug
catkin build
```

## 4. Run ROS and Reproduce Crash

## 5. Open Core Dump in GDB
```bash
gdb <path_to_node_binary> <core_file>
```

Example:
```bash
gdb ~/storage/ros_ws/devel/lib/ros_pkg/ros_node\    /tmp/core_hydra_front_end.12345
```

## 6. Inspect Crash in GDB
### Stack trace
```gdb
bt
bt full
```

## 8. OR VSCode Core Dump Debugging instead of GDB
`.vscode/launch.json`
```json
{
  "name": "Debug Core Dump",
  "type": "cppdbg",
  "request": "launch",
  "program": "/path/to/devel/lib/pkg/node",
  "coreDumpPath": "/tmp/core_node.12345",
  "MIMode": "gdb"
}
```
