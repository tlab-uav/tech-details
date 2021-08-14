# VuePress

## Installation

(Make sure Node.js is installed, like [here](../nodejs.md))

To install VuePress 1.x globally is simple:
``` bash
npm install vuepress -g
```

- `vuepress dev docs` starts a development server with automatic reload and all the dev goodies. This is the command you'll use when developing your website.
- `vuepress build docs` builds your website. The generated assets will be ready to deploy on any hosting service.


## Automatic Generation of Sidebar

``` bash
npm install vuepress-bar -g
```

Modify `docs/.vuepress/config.js` file:

``` javascript
const getConfig = require("vuepress-bar");
const barConfig = getConfig(`${__dirname}/..`,{skipEmptySidebar: false, addReadMeToFirstGroup:false})

//// Full Automatic
// module.exports = {
//   themeConfig: {
//     ...barConfig,
//     displayAllHeaders: true // Default: false
//   }
// };


//// Mixed style
module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'Tutorials', link: '/1-tutorials/' },
      // { text: 'External', link: 'https://google.com' },
     ...barConfig.nav],
    sidebar: barConfig.sidebar,
    lastUpdated: 'Last Updated',
    editLinks: false,
    displayAllHeaders: true // Default: false
  }
};
```

## Serve The Website Locally

You have a few options:

``` bash
vuepress dev docs
```
or
``` bash
python3 -m http.server
```
or
``` bash
npm install http-server -g # first-time install
http-server
```