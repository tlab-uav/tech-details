---
hide_title: true
sidebar_label: Map Updater
---

# Map Updater


## Overview & Class Names

class name: `MapUpdater`, 
``` cpp
MapUpdater::MapUpdater(LinDistMap *dmap, DevMap *dev_map)
```

## MapUpdater.cpp

get camera pose from tf, and update projection

`cudaMat::SE3<float> MapUpdater::getCamPos(const tf::Transform &trans) const`
`void MapUpdater::updateProjection(const tf::Transform &trans)`

update EDT Map
`void MapUpdater::updateEDTMap(const double &min_z_pos, const double &max_z_pos, const DevGeo::pos &center)`

Get the vehicle's global coordinates
``` cpp
    DevGeo::coord c = _dev_map->pos2coord(center);

```