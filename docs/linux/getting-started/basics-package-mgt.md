---
hide_title: true
sidebar_label: Basics - Manage Packages (apt)
---

# Apt Package Manager (Ubuntu)


## Introduction
**Explained! Difference between apt update and apt upgrade in Ubuntu** [YouTube](https://www.youtube.com/watch?v=tNT9Hm8fpOA)
<iframe width="560" height="315" src="https://www.youtube.com/embed/tNT9Hm8fpOA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

If there are some missing dependency errors, try `sudo apt install -f` to try to fix it.

**Managing Software**
<iframe width="560" height="315" src="https://www.youtube.com/embed/lNyJllHk2SA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Check Installed Versions

`apt policy package_name`

## Check Content of the Package

Installed package: 
`dpkg -L package_name`

deb file: 
`dpkg -c package_file.deb`

without installing and without the deb file
```bash
sudo apt-file update        
apt-file list package_name
```