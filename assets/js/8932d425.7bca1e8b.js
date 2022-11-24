(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[563],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,h=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return a?r.createElement(h,l(l({ref:t},d),{},{components:a})):r.createElement(h,l({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},25913:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),l=["components"],o={hide_title:!0,sidebar_label:"Getting Started"},s="Software Installation",c={unversionedId:"systems/pixhawk/getting-started",id:"systems/pixhawk/getting-started",isDocsHomePage:!1,title:"Software Installation",description:"Pre-requisite",source:"@site/docs/systems/pixhawk/getting-started.md",sourceDirName:"systems/pixhawk",slug:"/systems/pixhawk/getting-started",permalink:"/tech-details/docs/systems/pixhawk/getting-started",version:"current",lastUpdatedAt:1628956952,formattedLastUpdatedAt:"8/14/2021",frontMatter:{hide_title:!0,sidebar_label:"Getting Started"},sidebar:"systemsSidebar",previous:{title:"Building SAFMC Drone",permalink:"/tech-details/docs/systems/SAFMC"},next:{title:"pixhawk Project",permalink:"/tech-details/docs/systems/pixhawk_v1/pixhawk"}},d=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Install tiscamera Camera Driver",id:"install-tiscamera-camera-driver",children:[]},{value:"Install ROS Melodic",id:"install-ros-melodic",children:[]},{value:"Install Basic ROS Dependencies",id:"install-basic-ros-dependencies",children:[]},{value:"Install Camera ROS Wrapper",id:"install-camera-ros-wrapper",children:[]},{value:"Install VIO Code",id:"install-vio-code",children:[]}],m={toc:d};function p(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"software-installation"},"Software Installation"),(0,i.kt)("h2",{id:"pre-requisite"},"Pre-requisite"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Xavier NX Development Kit Hardware",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Flashed with the lastest OS from nvidia, as well as CUDA (recommand to install using recovery mode + SDK manager). Remarks: Install NVIDIA SDK manager in a Linux machine; Use jumper wire to short RCV pin with GND pin on Xavier module."))),(0,i.kt)("li",{parentName:"ul"},"Assume username to be ",(0,i.kt)("inlineCode",{parentName:"li"},"nvidia"))),(0,i.kt)("h2",{id:"install-tiscamera-camera-driver"},"Install tiscamera Camera Driver"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Build from source and install ",(0,i.kt)("a",{parentName:"li",href:"/tech-details/docs/hardware/cameras/tiscamera-install#build-tiscamera-from-source"},"tiscamera core driver")),(0,i.kt)("li",{parentName:"ol"},"Install from ",(0,i.kt)("inlineCode",{parentName:"li"},".deb")," file the ",(0,i.kt)("inlineCode",{parentName:"li"},"tiscamera-dutils")," package, ",(0,i.kt)("a",{parentName:"li",href:"/tech-details/docs/hardware/cameras/tiscamera-install#step-23-install-tiscamera-dutils"},"insturctions here"))),(0,i.kt)("h2",{id:"install-ros-melodic"},"Install ROS Melodic"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/tech-details/docs/linux/ros/installation"},"Install ROS")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/tech-details/docs/linux/ros/using-catkin-build"},"Install Catkin Tools")),(0,i.kt)("li",{parentName:"ol"},"Create the workspace, for example:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /home/nvidia\nmkdir catkin_ws\ncd catkin_ws\nmkdir src\ncatkin build # this command should suceed\n"))),(0,i.kt)("li",{parentName:"ol"},"Done, from now on all source code should be place within the ",(0,i.kt)("inlineCode",{parentName:"li"},"./src")," folder")),(0,i.kt)("h2",{id:"install-basic-ros-dependencies"},"Install Basic ROS Dependencies"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Mavlink, install by apt manager: ",(0,i.kt)("inlineCode",{parentName:"li"},"ros-melodic-mavlink")),(0,i.kt)("li",{parentName:"ol"},"Mavros, the modified monotonic version is needed: (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chengguizi/mavros"},"https://github.com/chengguizi/mavros"),", monotonic branch, Notes: clone the source code, the source code should be place within the ./src folder. Then go to catkin_ws folder to build the code using cmd ",(0,i.kt)("inlineCode",{parentName:"li"},"catkin build"),")"),(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("inlineCode",{parentName:"li"},"cv_bridge")," from source, refer ",(0,i.kt)("a",{parentName:"li",href:"/docs/linux/ros/cv-bridge"},"here"))),(0,i.kt)("h2",{id:"install-camera-ros-wrapper"},"Install Camera ROS Wrapper"),(0,i.kt)("p",null,"Installation refer to ",(0,i.kt)("a",{parentName:"p",href:"/tech-details/docs/hardware/cameras/tiscamera-install#step-33-integrating-with-ros-tiscamera_ros"},"here"),"."),(0,i.kt)("p",null,"Take special note of the ",(0,i.kt)("inlineCode",{parentName:"p"},"device_list.yaml")," file, which is called by the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},".launch")," file. If the serial number of the cameras do not match, the driver will not run."),(0,i.kt)("h2",{id:"install-vio-code"},"Install VIO Code"),(0,i.kt)("p",null,"Refer ",(0,i.kt)("a",{parentName:"p",href:"/tech-details/docs/research/vio/basalt-overview#basalt-main-code"},"here"),"."))}p.isMDXComponent=!0}}]);