---
hide_title: true
sidebar_label: Kalibr Result Conventions
---

# Kalibr Result Conventions

The conventions used by Kalibr is briefly discussed here: https://github.com/ethz-asl/kalibr/wiki/yaml-formats

## Camera Model (Intrinsics)
- Pinhole [fu fv pu pv]
- Double Sphere (ds): [xi alpha fu fv pu pv]

## Transformation Matrices

**T_cn_cnm1**: Transform `cam0` (`cnm1`?) coordinates to `cam1` (last camera, denoted as `cn`) coordinates (i.e. T_cn_cnm1 = T_c1_c0). Therefore it consists of:
- $R_{c_1c_0}$ or R_c1_c0 formed by basis vectors of `cam0` frame in `cam1` coordinates
- $t_{c_1c_0}$ or t_c1_c0 which is the position of the `cam0` frame's origin in `cam1` coordinates

**T_cam_imu** Transform `imu` coordinates to camera coordnates. It consists of:
- $R_{ci}$ or R_c_i formed by basis vectors of `imu` frame in `cam` coordinates
- $t_{ci}$ or t_c_i which is the position of the imu frame's origin in the `cam` coordinates

### Example Files

```yaml title="camchain-2020-08-05-16-24-56.yaml"

cam0:
  cam_overlaps: [1]
  camera_model: ds
  distortion_coeffs: []
  distortion_model: none
  intrinsics: [-0.19963086018860057, 0.5924590037637837, 317.552559595926, 316.1745713358917,
    724.8551471226007, 546.5708052642561]
  resolution: [1440, 1080]
  rostopic: /tiscamera_ros/fisheye_left/image_rect_raw
cam1:
  T_cn_cnm1:
  - [0.9994397899015358, 0.01583231520610129, 0.029486338477008038, -0.1982100882850154]
  - [-0.014069141538300084, 0.9981545353408604, -0.05907269110882186, -0.003226884424352984]
  - [-0.03036717994712894, 0.05862475052124023, 0.9978181061738522, 0.0003909535695235701]
  - [0.0, 0.0, 0.0, 1.0]
  cam_overlaps: [0]
  camera_model: ds
  distortion_coeffs: []
  distortion_model: none
  intrinsics: [-0.19567833352036393, 0.5934771139662725, 318.54033139830346, 317.0520130252999,
    712.7496608380312, 557.2224352962965]
  resolution: [1440, 1080]
  rostopic: /tiscamera_ros/fisheye_right/image_rect_raw

```

```yaml title="camchain-imucam-2020-08-05-16-54-55.yaml"
cam0:
  T_cam_imu:
  - [0.025462230671673247, -0.9992630992296517, -0.02872165258433318, 0.004244697665851643]
  - [0.04993886668011138, 0.029966538262921255, -0.9983026175360077, 0.003320133241428618]
  - [0.9984276560692467, 0.023984684748595442, 0.050665081600466455, 0.015700839664599384]
  - [0.0, 0.0, 0.0, 1.0]
  cam_overlaps: [1]
  camera_model: ds
  distortion_coeffs: []
  distortion_model: none
  intrinsics: [-0.21697771106770586, 0.5920493574492033, 312.2320475101821, 311.05174019378734,
    725.0950280082754, 545.2634687518469]
  resolution: [1440, 1080]
  rostopic: /tiscamera_ros/fisheye_left/image_rect_raw
  timeshift_cam_imu: 0.07650780716660849
cam1:
  T_cam_imu:
  - [0.05736274985627546, -0.9977239680238397, -0.03544571285346676, -0.1921825607480451]
  - [-0.02404388231864263, 0.03411324897586468, -0.999128709410033, -0.003544617933287773]
  - [0.9980638289468132, 0.05816502278066027, -0.02203232790586701, 0.013584152644111497]
  - [0.0, 0.0, 0.0, 1.0]
  T_cn_cnm1:
  - [0.9994673874821907, 0.00835184517590277, 0.03154660111141055, -0.1969480349995947]
  - [-0.006003694095546954, 0.9972543376065331, -0.0738088191353987, -0.005671290908341935]
  - [-0.032076424625132306, 0.0735801114915753, 0.9967733293864537, -0.002174166631870157]
  - [0.0, 0.0, 0.0, 1.0]
  cam_overlaps: [0]
  camera_model: ds
  distortion_coeffs: []
  distortion_model: none
  intrinsics: [-0.24136341506123252, 0.581315342400733, 301.55643035207885, 300.1877223496746,
    714.9295565564267, 560.0563142309148]
  resolution: [1440, 1080]
  rostopic: /tiscamera_ros/fisheye_right/image_rect_raw
  timeshift_cam_imu: 0.04030756527247593

```