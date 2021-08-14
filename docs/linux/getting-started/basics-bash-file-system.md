---
hide_title: true
sidebar_label: Basics - Bash & File Systems
---

# Basics - Bash & File Systems

Open a terminal (with a Bash shell) by `Ctrl+ALt+T`.

## Bash Syntax
Watch the following video:
<iframe width="560" height="315" src="https://www.youtube.com/embed/hgFBRZmwpSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Keypoints of the video:
- `~` and `$`
- Bash syntax (command base): _program-name arguments_
- the search paths when executing: 
    - the `PATH` variable, 
    - the absolute path, denoted with leading `/`, or 
    - the relative path, the PWD (current working directory)

> _**Excercise**: What is the different between executing `foo` and `./foo`?_

> _**Excercise**: How to pass multiple arguments when executing a program?_

## Bash Pipeline, Redirection and Built-in Commands

Watch the video until 11:30
<iframe width="560" height="315" src="https://www.youtube.com/embed/GA2mIUQq48s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


Watch the video above from 11:30
First few built-in commands: 
- `cd` change directory
- `echo` print arguments to stdout (try `echo $PATH`)
- `export` set environment variable (inheritable variables)

## Bash Basic Navigation and File Manipulations

**Access and Navigation**
<iframe width="560" height="315" src="https://www.youtube.com/embed/eH8Z9zeywq0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Keypoints of the video:
- Understand command `cd`,`cd ..`,`ls`, `ls -a`, `mkdir`, `pwd`
- Understand command `touch`, `mv`, `rm`

**Creating & Editing Text Files**
<iframe width="560" height="315" src="https://www.youtube.com/embed/CaJYuRgRQxg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
Keypoints of the video:
- Understand command `cat`,`less`,`tail`,
- Use `nano` to edit files


**Privileges and Permissions**
<iframe width="560" height="315" src="https://www.youtube.com/embed/s23NqWKxOXk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
Keypoints of the video:
- Using `sudo` to raise to root access
- Set permissions and group using `chmod` and `chown`

## Finding Documentation and Files

<iframe width="560" height="315" src="https://www.youtube.com/embed/4r7V2-EBnR0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Keypoints of the video:
- Locate executable in PATH by `which`
- Locate files using `find` or `locate` or `whereis`
- using `grep` to find text in files [(Reference)](https://stackoverflow.com/questions/16956810/how-do-i-find-all-files-containing-specific-text-on-linux)


## Navigating through Directories and Locating Files

:::tip
Other Learning Materials:
1. [The Edx Link (Chapter 7)](https://courses.edx.org/courses/course-v1:LinuxFoundationX+LFS101x+1T2017/course/)
2. [Tutorial Point (Unix for Beginners)](https://www.tutorialspoint.com/unix/unix-file-management.htm)
3. [Shell Tutorials](https://linuxjourney.com/lesson/the-shell)
:::

### Questions for Thought
- What is the difference between `ls` and `ls -a`?
- How to differentiate between an absolute path and a relative path? 
- What does environment variable PATH do? How to view, set, append environment variables?
- What can `which` `whereis` and `locate` do? What are their differences? [](https://askubuntu.com/questions/832562/difference-among-whereis-locate-and-findcommand)

### Know More about a File

- `stat` to show the modification date etc
- `file` to know the binary type (architecture)
- `ldd` to know the dynamic linkage (.so file links)

### Uncompress Zip File
[Reference](https://www.hostingmanual.net/zipping-unzipping-files-unix/)

Tar file:
`tar -czvf archive.tar.gz /usr/local/something`

Unzip file with permission preserved:
`tar -xpf file`