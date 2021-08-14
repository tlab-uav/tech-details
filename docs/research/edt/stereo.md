---
hide_title: true
sidebar_label: stereo
---

# stereo.cpp

implement a class `StereoUpdater` with param 

``` cpp
    StereoUpdater::StereoUpdater(LinDistMap *dmap, DevMap *dev_map,
                                StereoParams p):
        MapUpdater(dmap,dev_map),
        _sp(p)
    {
        allocMem(_sp.rows,_sp.cols);
    }
```

allocate, free, reallocate memory for depth and confidence on device, `_D_depth`, `_D_confi_map`


implement a function `makeStereoPt`: (1) get the current camera pose (call `updateProjection(trans)` in `MapUpdater.cpp`); (2) copy depthmap and confidence into device (although confidence not used in linear distance map optimization currently); (3) call the GPU function to construct probablity map in kernel/stereo_kernel.cu
``` cpp
    
    // Get the current camera pose
    updateProjection(trans);

    // Copty the depthmap, etc into the device
    topic2Dmem(depthPoint,confidence_ptr);

    // Start the GPU kernel to construct the probability map
    stereo::stereoKernelWrapper(_sp,_mp,_D_depth,_D_confi_map,_dev_map);
```

# kernel/stereo_kernel.cu
in function `void stereoKernelWrapper(const StereoParams &sp, const ProjParams &mp, float *d_depth, float* d_confi_map, DevMap *dev_map)` call the GPU kernel function `__global__ void stereoMapSingleUpdater(StereoParams sp, ProjParams mp,float *d_depth, DevMap dev_map, DevGeo::coord shift)`, blks=range of z, threads=range of y

``` cpp
    const int gridSize = dev_map->updateRange.z;
    const int blkSize = dev_map->updateRange.y;

    // calculate the shift
    DevGeo::coord shift = dev_map->pos2coord(mp.center);
    shift.x -= dev_map->updateRange.x/2;
    shift.y -= dev_map->updateRange.y/2;
    shift.z -= dev_map->updateRange.z/2;
    stereoMapSingleUpdater<<<gridSize,blkSize>>>(sp,mp,d_depth,*dev_map,shift);
```

in GPU kernel function `stereoMapSingleUpdater`, in each thread, loop all the range of x, convert grid coordinate to global position (call function `coord2pos` in `kernel/helper_mapop.cuh`), then transform to body frame, finally project into pixel through calling the function `void global2project(const DevGeo::coord &grid_crd,const ProjParams &mp, const DevMap &dev_map, const StereoParams &sp, int2 &pix, float &depth)`, global frame using NWU. in  `coord2pos`

``` cpp
    for (s.x = 0; s.x < dev_map.updateRange.x; ++s.x)
    {
        c = s + shift;
        global2project(c,mp,dev_map,sp,pix,depth);
```

do nothing for too large or too small depth and projected pixels out of image range. 
``` cpp
        if (depth <= 0 || depth >4.5)
            continue;
        if (pix.x < 0 || pix.x >= sp.cols || pix.y < 0 || pix.y >= sp.rows || pix.y >= sp.crop)
          continue;
```

Here, compare two values, depth and img_depth. depth is the existing grid after projection, img_depth is the sensor measured depth in current frame. if grid is in front of the sensor measured depth, it should be not occupied (value = 0), then send to low pass filter to update. if grid is far behind the sensor measured depth, it cannot be seen by sensor, do nothing. if the grid is near the sensor measured depth, it should be occupied (value = 1), send to low pass filter to update. the low pass filter is a function `lowpassOccupancy` in `kernel/helper_mapop.cuh`.

``` cpp
        img_depth=d_depth[sp.cols*pix.y+pix.x];
        if (isnan(img_depth) || img_depth <= 0.21)
          continue;
        if (depth < img_depth - 0.21)
        {
            lowpassOccupancy(c, 0, 0.5, dev_map);
        }
        else if (depth > img_depth + 0.21)
        {
            // not seen do nothing
        }
        else
        {
            lowpassOccupancy(c, 255, 0.5, dev_map);
        }
```

# kernel/helper_mapop.cuh

low pass filter

`__device__ __forceinline__ void lowpassOccupancy(const DevGeo::coord &c, float val, float beta,const DevMap &dev_map)`

global position to grid map coordinate

`__device__ __forceinline__ DevGeo::coord pos2coord(const DevGeo::pos &p,const DevGeo::pos &origin, const float &gridstep)`

grid map coordinate to global position

`__device__ __forceinline__ DevGeo::pos coord2pos(const DevGeo::coord & c,const DevGeo::pos &origin, const float &gridstep)`

# dsstereo_kernel.cu
difference with `stereo_kernel.cu`
in the function `global2project`, the projection of 3D point to image pixel using the double sphere fisheye camera model; add params, `d_min`, `d_max`, `d_thre`, `sweep_mode`

