---
hide_title: true
sidebar_label: Node.js
---

# Node.js

## Installation on Ubuntu (18.04/16.04)

[Reference](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/)

``` bash
## the following line is not needed for Ubuntu 18.04 as the dependencies are installed already
# sudo apt-get install curl python-software-properties
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install nodejs
```

To verify version 12 has been installed successfully:
``` bash
node -v 
npm -v
```



## Install yarn package manager

*NOTE*: Many have said yarn is no longer relevant, as it no longer has much advantages over Node.js
https://yarnpkg.com/lang/en/docs/install/#debian-stable

``` bash
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn

```

history below

---

## Fix npm Global Install Permissions

First check, where npm point to, if you call:

`npm config get prefix`

If /usr is returned, you can do the following:

``` bash
mkdir ~/.npm-global
export NPM_CONFIG_PREFIX=~/.npm-global
export PATH=$PATH:~/.npm-global/bin
```
To make it permanent, add the `export` items in the `.bashrc`
