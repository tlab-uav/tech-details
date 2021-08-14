---
id: doc3
title: Work with Github Pages
sidebar_label: Work with Github Pages
---
## Dependencies 
For changing NodeJS version to >= 12.13.0, you can refer to https://phoenixnap.com/kb/update-node-js-version
```bash
sudo apt update
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
source ~/.bashrc
nvm --version #Check NVM version
nvm ls
nvm ls-remote #Will display all the available versions
nvm install 12.13.0
node --version #Check NodeJS version
```


## Overview
Clone the master branch https://github.com/tsltech/tech-details

Follow the README on https://github.com/tsltech/tech-details for initialization.

Make your changes.

Test your changes: `yarn start`

If everything looks great, go ahead to commit and push your changes to master.
