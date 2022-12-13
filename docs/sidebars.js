module.exports = {
  // examples
  examplesSidebar: {
    'Docusaurus': [
        'examples/doc0', 
        'examples/doc1', 
        'examples/doc2',
        'examples/doc3',
        'examples/doc4',
        // 'examples/mypage',
    ],
    'Features': ['examples/mdx'],
  },

  // hardware
  tx2Sidebar: {
    'All About Images': [
    'hardware/jetson-tx2/prepare-bsp-rfs',
    'hardware/jetson-tx2/flash-existing-image',
    'hardware/jetson-tx2/backup-procedures',
    'hardware/jetson-tx2/mount-image-as-loopback',
    
    ],
    'Getting Started': [
    'hardware/jetson-tx2/tx2-post-flashing',
    'hardware/jetson-tx2/uart-setup',
    'hardware/jetson-tx2/usb-setup',
    'hardware/jetson-tx2/power-button',
    'hardware/jetson-tx2/external-sd-card',
    'hardware/jetson-tx2/hotspot-setup',
    'hardware/jetson-tx2/network-sharing',
    'hardware/jetson-tx2/misc',
    'hardware/jetson-tx2/fan',
    'hardware/jetson-tx2/performance-monitoring'
    ],
    'Software Packages': [
    'hardware/jetson-tx2/pytorch-install',
    'hardware/jetson-tx2/vscode-install'
    ]
  },
  xavierNxSidebar:{
    'Getting Started': [
        'hardware/jetson-xavier-nx/getting-started',
        'hardware/jetson-xavier-nx/OpenCV'
    ],
  },
  camerasSidebar: {
      'USB Cameras': [
      'hardware/cameras/tiscamera-install',
      'hardware/cameras/realsense-install',
      'hardware/cameras/zed-install',
      ],
      'Camera - Flash wiring': [
      'hardware/cameras/camera-flash-wiring'

      ]
  },
  px4firmwareSidebar: {
      'PX4 Firmware': [
        'hardware/px4-firmware/px4-overview',
        'hardware/px4-firmware/px4-toolchain-installation-setup',
        'hardware/px4-firmware/px4-log-analysis',
        'hardware/px4-firmware/px4-sitl',
        'hardware/px4-firmware/px4-control-structure',
        'hardware/px4-firmware/mavlink-imu',
        'hardware/px4-firmware/time-synchronisation',
        'hardware/px4-firmware/px4-camera-trigger',
        'hardware/px4-firmware/px4-dynamic-control-allocation',
        'hardware/px4-firmware/px4-FAQ'
        
      ],
      'ECL EKF':[
        'hardware/px4-firmware/ecl-ekf/px4-ecl-ekf',
        'hardware/px4-firmware/ecl-ekf/px4-ecl-initialisation',
        'hardware/px4-firmware/ecl-ekf/px4-ecl-sensor-fusion',
        'hardware/px4-firmware/ecl-ekf/px4-ecl-yaw-fusion',
        'hardware/px4-firmware/ecl-ekf/px4-ecl-state-reset',
      ]
  },
  UAVplatformSidebar: {
    'UAV platform': [
      'hardware/UAV-platform/Multirotor-overview',
    ]
},

  // linux
  linuxSidebar: {
      'Getting Started': [
          'linux/getting-started/installation',
          'linux/getting-started/overview',
          'linux/getting-started/basics-linux-os',
          'linux/getting-started/basics-bash-file-system',
          'linux/getting-started/basics-bash-scripting',
          'linux/getting-started/basics-package-mgt',
          'linux/getting-started/basics-query-devices',
          'linux/getting-started/intermediate-network-drive-samba',
          'linux/getting-started/intermediate-ssh-scp',
          'linux/getting-started/gnome-shell-extensions',
      ],
      'Common Package Install': [
          'linux/packages/file-systems',
          'linux/packages/gstreamer',
          'linux/packages/latex',
          'linux/packages/nodejs',
          'linux/packages/nginx',
          'linux/packages/opencv',
      ],
      'ROS': [
          'linux/ros/installation',
          'linux/ros/using-catkin-build',
          'linux/ros/roslib.js',
          'linux/ros/cv-bridge'
      ],
      'Drivers & Kernel': [
          'linux/kernel/grub-default-kernel',
          'linux/kernel/nvidia-intel-driver',
          'linux/kernel/usb'
      ]
  },

  // productivity
  gitSidebar: {
      'Git Version Control': [
          'productivity/git/git',
      ],
  },
  cmakedebuggingSidebar: {
      'CMake': [
          'productivity/cmake_debug/cmake',
      ],
      'Debugging Techniques': [
          'productivity/cmake_debug/debugging',
      ],
  },
  uiuxSidebar: {
      'C++ Visualisation': [
          'productivity/uiux/pangolin',
      ],
      'ROS Web': [
          'productivity/uiux/roslibjs',
      ],
  },

  // research
  researchSidebar: {
      'Flight Data': [
        'research/flight-data/flight-data-analysis',
      ],
      'Camera Calibration': [
      'research/calibration/getting-started',
      'research/calibration/calibration-target-params',
      'research/calibration/kalibr-result-conventions',
      'research/calibration/calibration-procedures',
      'research/calibration/verify-by-kalibr-validator',
      'research/calibration/verify-by-triangulation-depth',
      'research/calibration/Calibration results/Calibration results', 
      ],
      'Collision Avoidance': [
      'research/collision-avoidance/overview-problems',
      'research/collision-avoidance/design-choices',
      'research/collision-avoidance/controls',
      ],
      'VIO': [
      'research/vio/basalt-overview',
      'research/vio/basalt-tuning',
      'research/vio/basalt-backend',
      'research/vio/basalt-frontend',
      'research/vio/basalt-tests',
      ],
      'EDT': [
      'research/edt/edt-overview',
      'research/edt/MapUpdater',
      'research/edt/stereo',
      ],
      'MSCKF_VIO Loop Closure': [
        'research/msckf_vio/loop_closure',
        ],

  },

  // systems
  systemsSidebar: {
      'General': [
        'systems/ros-coordinate-systems',
      ],
      'Simulations': [
          'systems/unity-simulator',
          'systems/unity-setup',
          'systems/unity-buildyourown',
          'systems/unity-SITL',
          'systems/unity-HITL',
      ],
      'Vicon': [
          'systems/vicon',
      ],
      'SAFMC Drone Build': [
          'systems/SAFMC',
      ],
      'Crazyflie': [
            'systems/Crazyflie',
        ],
      'Auto Fast Flt Platform':[
        'systems/pixhawk/getting-started'
      ],
      'Past Platforms : pixhawk v2': [
        'systems/pixhawk_v1/pixhawk',
        'systems/pixhawk_v1/getting-started',
        'systems/pixhawk_v1/VIO',
        'systems/pixhawk_v1/motion-planning',
        'systems/pixhawk_v1/tracking-and-detection',
        'systems/pixhawk_v1/simulator',
        'systems/pixhawk_v1/web-ui',
    ],
  },

};
