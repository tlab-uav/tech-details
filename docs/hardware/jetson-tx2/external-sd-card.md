---
hide_title: true
sidebar_label: External SD Card
---
# Steps in preparing an External SD Card with the right permissions for TX2

**Option 1**
1. Format the SD Card in the Ubuntu GUI (right click -> format), selecting `ext4` filesystem.
2. Done :)


**Option 2 (Should not use)**
1. Format the SD Card with `ext4` filesystem
2. Locate in the terminal, the location of the mounting point (in the host machine)
   - An Example is /media/user/sdcard
3. In the parent folder (e.g. /media/user), adjust the ownerships of the SD card's filesystem recursively
   - `sudo chown -R 1001:adm sdcard`
   - 1001 indicate the uid of the user `nvidia` on the TX2
4. Next, adjust the permissions recursively
   - `sudo chmod -R 755 sdcard`, if you want only the TX2 has the write permissions, or
   - `sudo chmod -R 775 sdcard`, if you want both the host and TX2 to have write permissions upon mounting

# Modification done on TX2, one-time
- Add `/dev/mmcblk1p1      /media/nvidia/SD    ext4        defaults,noauto       0  2` to the end of /etc/fstab

# Miscellaneous
## To clear ACL settings
- `setfacl -b nvidia`

# Regarding Removable Devices Permissions

- The SD Card should be formated as ext4 filesystem, as it supports standard Linux permission flags, in contrast to FAT

```

Like any unix-style filesystem, ext4 includes standard Unix file ownership and permission conventions. That is, the user is identified by an UID number, and each user will belong to one or more groups, each group identified by its GID number. Each file has an owner UID and one group owner GID. The three classic Unix file permission sets are:

    one set of permissions for the owner, identified by the owner's UID number
    one set of permissions for the group owner, identified by the group's GID number
    one set of permissions for everyone else

In order to be able to access the stick without needing to adjust permissions, you must make sure any files and directories created on the stick will have non-restrictive permissions automatically. The problem is, permissions on any new files created are controlled by the umask value... and you don't really want to keep changing it to 000 for creating files on the USB stick and back to the default value (usually 002 or 022) for normal use. A single mistake could lead you creating an important configuration file with wide-open permissions, that might compromise the security of your user account or cause other more minor problems.

If you can make sure that your normal user's UID number is the same across all your Linux systems, and you only care about access for that one user (plus root of course), you can get away with just formatting the USB stick to ext4, mounting it for the first time, and assigning the ownership of its root directory to your regular user account before you begin using the filesystem.

Assuming that /dev/sdX1 is the USB stick partition you wish to create the filesystem in, and <username> is your username, you can do this when setting up the USB stick for use:

sudo mkfs.ext4 /dev/sdX1
sudo mount /dev/sdX1 /mnt
sudo chown <username>: /mnt
sudo umount /mnt

But if you cannot guarantee matching UID/GID numbers, and/or there are multiple users who might want to use the USB stick, you'll need to do something a bit more complicated, but still an one-time operation after creating the ext4 filesystem on the stick.

We need to set a default ACL on the root directory of the USB stick filesystem that assigns full access to everyone on any new file or directory. And to ensure that the stick will be mounted with ACL support enabled, we need to use tune2fs to adjust the default mount options stored in the filesystem metadata.

sudo mkfs.ext4 /dev/sdX1
sudo tune2fs -o acl /dev/sdX1
sudo mount /dev/sdX1 /mnt
sudo chown <username>: /mnt
chmod 777 /mnt
setfacl -m d:u::rwx,d:g::rwx,d:o::rwx /mnt
sudo umount /mnt

Assuming that all your systems support ACLs on ext4 filesystems, and that any removable media mounting tool you might use won't choose to ignore the acl mount option, you now should have a USB stick on which all files created on it will have permissions -rw-rw-rw- and all created sub-directories will be drwxrwxrwx+. The plus sign indicates that the sub-directory will have an ACL: the custom default permission set configured for the stick's root directory will be inherited by the sub-directories too, and they will behave the same.

The owner UID/GID will still match the UID and primary GID of the user that created the file on the filesystem, but because of relaxed file and directory permissions, that should not be much of an issue.

The only problem I might expect is that copying files to the USB stick will by default attempt to duplicate the file permissions of the original, which you don't want in this case.

For example, if you create a file on System A with permissions -rw-r--r-- and copy it to the stick, then move the stick to System B with non-matching UID numbers. You can still read the file on System B, but you cannot overwrite it on the stick without first explicitly deleting or renaming the original file. But you can do that, as long as you have write access to the directory the file's in.

This can actually be an useful feature: if you modify the same file on multiple systems, this will push you towards saving a new version of the file each time instead of overwriting the One True File... and if the file is important, that might actually be a good thing.

```
