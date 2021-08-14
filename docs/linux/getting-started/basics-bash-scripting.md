---
hide_title: true
sidebar_label: Basics - More Bash Scripting
---
# Basics - More Bash Scripting

You could start your learning here:
<iframe width="560" height="315" src="https://www.youtube.com/embed/k91lumNE2zU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

## Reading Documentation about Commands
[The Edx Link (Chapter 8)](https://courses.edx.org/courses/course-v1:LinuxFoundationX+LFS101x+1T2017/course/)
- `man COMMAND`
- `COMMAND -h` or `COMMAND --help`

## Quick Reference - Basic Commands

- `cat`,`less`,`more` to print files,
- `head`, `tail` to print only the two ends of the file
- `grep "text"` to filter the output of the stdout pipe [(Ref)](https://www.guru99.com/linux-pipe-grep.html)
- check network by `ping`,`ifconfig`,`iwconfig`
- check USB devices by `lsusb`
- check harddrive (block device) by `lsblk`
- check device messages by `dmesg` or `dmesg -w`
- check services by `sudo systemctl status` and similar command of `start`, `stop`, `restart`


## `.bashrc` and `.profile` file

They are scripts that are automatically run by the shell when you open a new terminal. They can be quite useful in setting up environment variables like PATH, and running scripts.

https://serverfault.com/questions/261802/what-are-the-functional-differences-between-profile-bash-profile-and-bashrc