const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '117411 TSL UAV Tech Details',
  tagline: 'Landing Page for TSL Technical Details and Tutorials',
  url: 'https://tlab-uav.github.io/',
  baseUrl: '/tech-details/',
  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tlab-uav', // Usually your GitHub org/user name.
  trailingSlash: true,
  projectName: 'tech-details', // Usually your repo name.
  plugins: [require.resolve('docusaurus-lunr-search')],
  // for rendering latex
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq',
      crossorigin: 'anonymous',
    },
  ],

  // for light theme code style
  themeConfig: {
        prism: {
          theme: require('prism-react-renderer/themes/github'),
        },
    
        navbar: {
          title: 'TSL Tech Details',
          logo: {
            alt: 'My Site Logo',
            src: 'img/android-chrome-192x192.png',
          },
          items: [
    
            // Hardware
              {
              to: 'docs/hardware/jetson-tx2/flash-existing-image',
              activeBasePath: 'docs/hardware',
              label: 'Hardware',
              position: 'left',
              items: [
                {
                  activeBasePath:'docs/hardware/jetson-tx2',
                  label: 'Jetson TX2',
                  to: 'docs/hardware/jetson-tx2/flash-existing-image'
                },
                {
                  activeBasePath:'docs/hardware/jetson-xavier-nx',
                  label: 'Jetson Xavier NX',
                  to: 'docs/hardware/jetson-xavier-nx/getting-started'
                },
                {
                  activeBasePath:'docs/hardware/cameras',
                  label: 'Cameras',
                  to: 'docs/hardware/cameras/tiscamera-install'
                },
                {
                  activeBasePath:'docs/hardware/px4-firmware',
                  label: 'PX4 Firmware',
                  to: 'docs/hardware/px4-firmware/px4-overview'
                },
                {
                  activeBasePath:'docs/hardware/UAV-platform',
                  label: 'UAV Platform',
                  to: 'docs/hardware/UAV-Platform/Multirotor-overview'
                },
              ]
            },
    
            // Systems
            {
              to: 'docs/systems/vicon',
              activeBasePath: 'docs/systems',
              label: 'Systems',
              position: 'left',
              items: [
                {
                  // activeBasePath:'docs/systems/pixhawk_v1',
                  label: 'ROS Coordinate Systems',
                  to: 'docs/systems/ros-coordinate-systems'
                },
                {
                  // activeBasePath:'docs/systems/',
                  label: 'Simulations',
                  to: 'docs/systems/unity-simulator'
                },
                {
                  // activeBasePath:'docs/systems/',
                  label: 'Vicon',
                  to: 'docs/systems/vicon'
                },
                {
                  label: 'Pixhawk Platform',
                  to: 'docs/systems/pixhawk/getting-started'
                },
                {
                  // activeBasePath:'docs/systems/pixhawk_v1',
                  label: 'Past Platforms : pixhawk v1',
                  to: 'docs/systems/pixhawk_v1/pixhawk'
                },
                {
                  label: 'SAFMC Drone Buildup',
                  to: 'docs/systems/SAFMC'
                },
                {
                  label: 'Crazyflie',
                  to: 'docs/systems/Crazyflie'
                },
              ]
            },
    
            // Linux
            {
              to: 'docs/linux/getting-started/gnome-shell-extensions',
              activeBasePath: 'docs/linux/',
              label: 'Linux',
              position: 'left',
              items: [
                {
                  activeBasePath:'docs/linux/getting-started/',
                  label: 'Getting Started',
                  to: 'docs/linux/getting-started/overview'
                },
                {
                  activeBasePath:'docs/linux/packages',
                  label: 'Software Packages',
                  to: 'docs/linux/packages/file-systems'
                },
                {
                  activeBasePath:'docs/linux/ros',
                  label: 'ROS',
                  to: 'docs/linux/ros/using-catkin-build'
                },
                {
                  activeBasePath:'docs/linux/kernel',
                  label: 'Drivers & Kernel',
                  to: 'docs/linux/kernel/grub-default-kernel'
                },
              ]
            },

            // Productivity
            {
              to: 'docs/productivity/git/git',
              activeBasePath: 'docs/productivity/',
              label: 'Productivity',
              position: 'left',
              items: [
                {
                  activeBasePath:'docs/productivity/git',
                  label: 'Git Version Control',
                  to: 'docs/productivity/git/git'
                },
                {
                  activeBasePath:'docs/productivity/cmake_debug',
                  label: 'CMake and Debugging',
                  to: 'docs/productivity/cmake_debug/cmake'
                },
                {
                  activeBasePath:'docs/productivity/uiux',
                  label: 'UI/UX Tools',
                  to: 'docs/productivity/uiux/pangolin'
                },
              ]
            },

            // Research
            {
              to: 'docs/research/flight-data/flight-data-analysis',
              activeBasePath: 'docs/research/',
              label: 'Research',
              position: 'left',
    
              items: [
                {
                  activeBasePath:'docs/research/flight-data',
                  label: 'Flight Data',
                  to: 'docs/research/flight-data/flight-data-analysis'
                },
                {
                  activeBasePath:'docs/research/calibration',
                  label: 'Sensor Calibration',
                  to: 'docs/research/calibration/getting-started'
                },
                {
                  activeBasePath:'docs/research/collision-avoidance',
                  label: 'Collision Avoidance',
                  to: 'docs/research/collision-avoidance/overview-problems'
                },
                {
                  activeBasePath:'docs/research/vio',
                  label: 'VIO',
                  to: 'docs/research/vio/basalt-overview'
                },
                {
                  activeBasePath:'docs/research/edt',
                  label: 'EDT',
                  to: 'docs/research/edt/edt-overview'
                },
              ]
            },

            // Examples
            {
              to: 'docs/examples/doc0',
              activeBasePath: 'docs/examples',
              label: 'Examples (To Edit)',
              position: 'left',
            },
            {to: 'blog', label: 'Blog', position: 'left'},
            {
              href: 'https://github.com/tlab-uav/tech-details',
              label: 'Github',
              position: 'right',
            },
          ],
        },
        footer: {
          style: 'dark',
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Style Guide',
                  to: 'docs/doc1',
                },
                {
                  label: 'Second Doc',
                  to: 'docs/doc2',
                },
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Stack Overflow',
                  href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                },
              ],
            },
            {
              title: 'More',
              items: [
                {
                  label: 'Blog',
                  to: 'blog',
                },
                {
                  label: 'Github',
                  href: 'https://github.com/tlab-uav/tech-details',
                },
              ],
            },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} TSL. Built with Docusaurus.`,
        },
      },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          // homePageId: 'examples/doc1',
          sidebarPath: require.resolve('./docs/sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'ftp://172.18.72.192/docusaurus_html/tl-tech-details',
          
          showLastUpdateTime: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl: 'file://deptnas.nus.edu.sg/TSL/Research/Centre%20Flight%20Science/Intelligent%20Unmanned%20Systems/Research%20Data%20Backup/Users/00_Tech_Details',
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, {strict: false}]],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
