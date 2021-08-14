---
hide_title: true
sidebar_label: Flight Data Analysis
---
## Data Reading
Run terminal in the folder contains .ulg log file and run:
```bash
java -jar flightplot.jar 
```
## Data Plotting

## Following data will be used for analysis
:::note
Click field.list to view all data
:::

1. vehicle_local_position_0.(XYZ) >>> vehicle local position(XYZ)
1. position_setpoint_triplet_0,current.(XYZ) >>> vehicle setpoint position
1. vehicle_local_position_0.a(XYZ) >>> vehicle current acceleration(XYZ)
1. position_setpoint_triplet_0,current.a_(XYZ) >>> vehicle setpoint accleration(XYZ0)
1. vehicle_rates_setpoint_0.(pitch,yaw,row) >>> vehicle angular velocity setting value (pitch,yaw,row)
1. [EulerFromQuaternion]  >>> vehicle current angular velocity(pitch,yaw,row)
:::note
To get this , "vehicle_attitude_0.q[0~3]" need to be selected. Click'add' and add 'Processor'EulerFromQuaternion to these data.
:::
:::