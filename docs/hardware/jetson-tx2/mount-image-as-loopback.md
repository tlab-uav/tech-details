---
hide_title: true
sidebar_label: Mount Image as Loopback
---

# Mount `.img.raw` as Read-write Loopback Device

- Example to setup the image file as loopback device, without mounting
   - `sudo losetup /dev/loop17 xxx.img.raw`
- Example to check disk integrity
   - `sudo fsck.ext4 -f /dev/loop17`
- Example to mount the loopback device, with read-write permissions
   - `sudo mount /dev/loop17 /mnt/loopback/`
- Remember to `sync` before you umount
- Example to umount
   - `sudo umount /dev/loop17`
   - `sudo losetup -d /dev/loop17`


## Regarding Sparse Image (*.img.raw)


> Historically there was not always a sparse (compressed image), but due to how long it took to copy over USB2 the sparse image had support added. Prior to sparse images the flash program just used the raw image directly. The current flash program can still use an uncompressed/raw image. The order of dealing with flash images is that "bootloader/system.img" is created; this is then moved to "bootloader/system.img.raw", and then system.img.raw is used to compress into system.img. flash.sh does not care if system.img is raw or sparse, it works. ([post](https://devtalk.nvidia.com/default/topic/1009158/jetson-tx2/cloning-or-taking-snapshot-of-tx2-board/))

- To make the sparse .img out of .img.raw, use the following command
   - `./mksparse -v --fillpattern=0 system.img.raw system.img`