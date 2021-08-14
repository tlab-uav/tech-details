# Installation of Pangolin

Pangolin is a lightweight portable rapid development library for managing OpenGL display / interaction and abstracting video input. At its heart is a simple OpenGl viewport manager which can help to modularise 3D visualisation without adding to its complexity, and offers an advanced but intuitive 3D navigation handler. Pangolin also provides a mechanism for manipulating program variables through config files and ui integration, and has a flexible real-time plotter for visualising graphical data.

The ethos of Pangolin is to reduce the boilerplate code that normally gets written to visualise and interact with (typically image and 3D based) systems, without compromising performance. It also enables write-once code for a number of platforms, currently including Windows, Linux, OSX, Android and IOS.


## Git repo
Find the latest version on [Github]
```
git clone https://github.com/stevenlovegrove/Pangolin.git
```

## Installing dependencies
C++11
OpenGL (Desktop / ES / ES2)
`sudo apt install libgl1-mesa-dev`
Glew
 `sudo apt install libglew-dev`
Python3

    sudo apt install libpython2.7-dev
    sudo python -mpip install numpy pyopengl Pillow pybind11


## Build

Pangolin uses the CMake portable pre-build tool. To checkout and build pangolin in the directory 'build', execute the following at a shell (or the equivelent using a GUI):

```
git clone https://github.com/stevenlovegrove/Pangolin.git
cd Pangolin
mkdir build
cd build
cmake ..
cmake --build .

```

@yanfeng