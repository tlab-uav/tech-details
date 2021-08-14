---
hide_title: true
sidebar_label: Pytorch for TX2
---
# Pytorch for TX2


## Version for Python 2
The last PyTorch Version to support Python 2 is version 1.4, The 

The address for Installing v1.4 for Jetpack 4.2/4.3 is https://nvidia.box.com/shared/static/1v2cc4ro6zvsbu0p8h6qcuaqco1qcsif.whl

### Installation instruction

- Run the following

``` bash
wget https://nvidia.box.com/shared/static/1v2cc4ro6zvsbu0p8h6qcuaqco1qcsif.whl -O torch-1.4.0-cp27-cp27mu-linux_aarch64.whl
sudo apt-get install libopenblas-base libopenmpi-dev 
pip install torch-1.4.0-cp27-cp27mu-linux_aarch64.whl
```

- Python dependencies

``` bash
pip install future
pip install torchvision --user
```

- Install torchvision

``` bash
sudo apt-get install libjpeg-dev zlib1g-dev
git clone --branch v0.5.0 https://github.com/pytorch/vision torchvision
cd torchvision
sudo python setup.py install
cd ../  # attempting to load torchvision from build dir will result in import error
pip install 'pillow<7' # not needed for torchvision v0.5.0+
```

[Reference](https://forums.developer.nvidia.com/t/pytorch-for-jetson-nano-version-1-5-0-now-available/72048)
