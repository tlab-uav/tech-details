---
hide_title: true
sidebar_label: Basics - Linux OS Concepts
---

# Basics - Linux OS Concepts

## Why An Opertating System?

What is an operation system and why do we need them in the first place? This is a _very important question_ to ask yourself, hopefully even before you getting into the myriad of Linux knowledge. The answers are not as trivial as one might expect, and everyone might have a slightly different interpretation on this matter. But that's okay, as operating system is truly multifacaded.

View the following video to get another overview of the operating system:

**Operating Systems: Crash Course** (history)
<iframe width="560" height="315" src="https://www.youtube.com/embed/26QPDBe-NB8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

**Operating System Basics** (device driver, scheduler, memory management)
<iframe width="560" height="315" src="https://www.youtube.com/embed/9GDX-IyZ_C8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


> _**Question**: Why do we need an operating system? When do we not needing them?_

### Hardware Abstraction through API and "Files"

The necessity of an operating system arise when a single piece of user program need to **run on possibly different hardware**. Without an operating system, the programmer need to write the program in such a way that directly interfaces with the hardware (bare-metal programming). This makes it an almost impossible task to write a generic program that could run on wide variaty of machines, which is a pretty bad situation.

Fortunately, an operating system is able to provide an **hardware-neutral** abstraction layer for the programmer to work with. For Linux specifically, this abstraction is achieved through **Linux API**, or more specifically the **System Call Interface**. Here is a [list of Syscalls](https://linuxhint.com/list_of_linux_syscalls/) for your reference, some of the good examples are `read`, `write`,   `poll` and `ioctl`. (Many of them are actually POSIX-compliant, for example [`poll`](https://pubs.opengroup.org/onlinepubs/9699919799/functions/poll.html#) from the Standard). Within the operating system, the intricate dealing with the specific hardware devices is handled by **device drivers**, written by the hardware vendor or the open source community.

![](https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Linux_API.svg/1920px-Linux_API.svg.png)

As you can tell, most of these function calls (API) are pretty high-level (which means we don't have to fuss around the register-level configuration of hardware), and most objects and devices to operate upon are abstrated as files (or more specifically **file descriptors**, or fd for short). This is a pretty powerful idea for the abstraction to be done this way, as it turns out to be a very flexible design to treat vitually everything as file objects.

Most devices should be found by one of the following:
- navigating in the `/dev/` directory
- `lsusb` for USB devices
- `lspci` for PCI-e devices

>_**Exercice**: Obtain as much as information about your hardware devices using the commands above._

**"Everything is a file" in UNIX**
<iframe width="560" height="315" src="https://www.youtube.com/embed/dDwXnB6XeiA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

Lastly, here is a more in-depth video regarding the under-the-hood operations behind some of the syscalls: [UNIX System Calls (YouTube, 50min)](https://www.youtube.com/watch?v=2DrjQBL5FMU).

### Multi-threading
In addition, for the longest time, our CPU-based machines runs program code in a sequential manner (per CPU thread), which does not have a concept of running multiple program code in a time-sharing manner. Therefore, another important role an operating system plays is to implement a **scheduler** to allow multiple program code to run on a single physical CPU thread, by time-sharing. This is the key feature that enable the user to run almost unlimited program on a machine, regardless the number of CPU cores and threads the physical machine has.

### User Interface
Operating system also provides user interfaces through either **terminals** (command prompt) or a **graphical interface** (desktop environment, the X Window system in Linux). It is capable of handling multiple user inputs at the same time. Getting to use terminal (and technically, its underlying shell program, e.g. Bash) is important for using Linux. _Why?_ Immediately after this section, we will jump straight into using the Bash shell. The interface through the commandline is normally achieved through `stdin` / `stdout`, where text data (and possibly raw binary data) can flow in and out.

**Unix terminals and shells** (history of terminal, terminal character device file, stdin/stdout, terminal emulator, X Window system)
<iframe width="560" height="315" src="https://www.youtube.com/embed/07Q9oqNLXB4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

The most important thing to note here is that virtually all program on Linux natively support user interface through terminals. On Linux, the glue between the terminal and the actual running program is the shell, which is responsible for parsing the commandline line input obtained from the terminal like `cd` or `mkdir new_directory` to execute the right commands. Later on we will learn extensively about the Bash shell.


> _**Exercies**: List all the tty devices on your machine, and can you identify some of their usage?_

> _**Exercies**: Could you stop your graphical interface and obtain a pure tty terminal? (How to stop the X Server?)_

### Memory Vitualisation and Protection

We don't need to get very in-depth here, but the important concept is that every program executed by the OS is run on its own virtual memory. This design provides security between program processes.

The second thing is that as the memory is virtual, some of the memory address can actually exist on hard disks (or SSDs)! That is precisely the use of the `swap` partition. It will prevent hanging when the physical memory runs out under high load.


## Knowing Liunx OS

[Linux Foundation - Chapter 2 (Edx)](https://courses.edx.org/courses/course-v1:LinuxFoundationX+LFS101x+1T2017/course/)

[Boot Process from LinuxJourney](https://linuxjourney.com/lesson/boot-process-overview)

### Questions for Thought 
Try explaining in your own words:
- Where can we find Linux being used in everyday life?
- Why is filesystem concept so important in Linux? What can a file represent?
- What role does Linux Kernel play within a computer system?

More specific terminologies:
- What are the main distributions of Linux? How is each Linux distribution related to Linux kernel?
- What does a bootloader do?
- What is the relationship between BIOS(MBR), UEFI and GRUB?
- What is X Window system?

Further readings: CS5250 Advanced Operating Systems (Lecture 3 - Boot Process)