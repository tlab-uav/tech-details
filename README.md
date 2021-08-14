# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

# Website Link

Website is linked [here](https://tlab-uav.github.io/tech-details/). Trailing slash is important.

## Installation

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

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Note
Following sections are generally not required. Just make your modifications, verify they work well, add, commit and push to the master. Github Actions will be triggered to deploy the page automatically.

If you do not want to work with github workflow, you can also directly edit the files in the browser

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
