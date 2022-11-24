(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[5352],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(a),u=n,h=d["".concat(s,".").concat(u)]||d[u]||p[u]||i;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},82025:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return m},default:function(){return d}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),o=["components"],l={hide_title:!0,sidebar_label:"Tiscamera"},s="The Imaging Source USB3.1 IMX Board Cameras",c={unversionedId:"hardware/cameras/tiscamera-install",id:"hardware/cameras/tiscamera-install",isDocsHomePage:!1,title:"The Imaging Source USB3.1 IMX Board Cameras",description:"Product Page",source:"@site/docs/hardware/cameras/tiscamera-install.md",sourceDirName:"hardware/cameras",slug:"/hardware/cameras/tiscamera-install",permalink:"/tech-details/docs/hardware/cameras/tiscamera-install",version:"current",lastUpdatedAt:1628956952,formattedLastUpdatedAt:"8/14/2021",frontMatter:{hide_title:!0,sidebar_label:"Tiscamera"},sidebar:"camerasSidebar",next:{title:"RealSense",permalink:"/tech-details/docs/hardware/cameras/realsense-install"}},m=[{value:"Camera Driver Installation Guide",id:"camera-driver-installation-guide",children:[]},{value:"Step 1/3: Install <code>tiscamera</code> Core Driver",id:"step-13-install-tiscamera-core-driver",children:[{value:"Build <code>tiscamera</code> From Source",id:"build-tiscamera-from-source",children:[]}]},{value:"Step 2/3: Install <code>tiscamera-dutils</code>",id:"step-23-install-tiscamera-dutils",children:[]},{value:"Step 3/3: Integrating with ROS: <code>tiscamera_ros</code>",id:"step-33-integrating-with-ros-tiscamera_ros",children:[]},{value:"Wiring for Hardware Synchronisation",id:"wiring-for-hardware-synchronisation",children:[]}],p={toc:m};function d(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-imaging-source-usb31-imx-board-cameras"},"The Imaging Source USB3.1 IMX Board Cameras"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.theimagingsource.com/products/board-cameras/usb-3.1-monochrome/"},"Product Page")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://s1.www.theimagingsource.com/application-1.5825.43292/img/hero/default/products/board_cameras/usb_31_monochrome.png",alt:null})),(0,i.kt)("h2",{id:"camera-driver-installation-guide"},"Camera Driver Installation Guide"),(0,i.kt)("p",null,"The camera driver has two components"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tiscamera")," which is the core driver"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tiscamera-dutil")," which contains many additional useful features, such as tonemapping")),(0,i.kt)("h2",{id:"step-13-install-tiscamera-core-driver"},"Step 1/3: Install ",(0,i.kt)("inlineCode",{parentName:"h2"},"tiscamera")," Core Driver"),(0,i.kt)("p",null,"For Intel-based processor, you may choose to install the official compiled ",(0,i.kt)("strong",{parentName:"p"},"tiscamera")," package from here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/TheImagingSource/tiscamera/releases"},"https://github.com/TheImagingSource/tiscamera/releases")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"As of Jan 2021, we are using version 0.12.0"),(0,i.kt)("li",{parentName:"ul"},"For TX2 or Xavier, if cannot build from source, can try to install the official compiled tiscamera package  ",(0,i.kt)("inlineCode",{parentName:"li"},"tiscamera_0.12.0_arm64.deb")," directly.")))),(0,i.kt)("p",null,"However, it is strongly recommanded to build from source, for the main tiscamera driver, especially on Nvidia arm64 platform."),(0,i.kt)("h3",{id:"build-tiscamera-from-source"},"Build ",(0,i.kt)("inlineCode",{parentName:"h3"},"tiscamera")," From Source"),(0,i.kt)("ol",{start:0},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install ",(0,i.kt)("inlineCode",{parentName:"p"},"GStreamer")," through apt first")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Clone ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/TheImagingSource/tiscamera")," and checkout the release version, for example ",(0,i.kt)("inlineCode",{parentName:"p"},"v-tiscamera-0.12.0")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/TheImagingSource/tiscamera.git\ngit checkout v-tiscamera-0.12.0\n\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change CMakeList.txt ",(0,i.kt)("inlineCode",{parentName:"p"},"BUILD_TOOLS")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"ON"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(Jetson TX2) Install dependencies ",(0,i.kt)("inlineCode",{parentName:"p"},"gstreamer-1.0 libusb-1.0 libglib2.0 libgirepository1.0-dev libudev-dev libtinyxml-dev libzip-dev libnotify-dev"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Install python dependencies ",(0,i.kt)("inlineCode",{parentName:"p"},"python3-gi python3-pyqt5"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Uninstall existing apt package ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo apt remove tiscamera"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"use CMake build and install:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir build && cd build\ncmake -DBUILD_ARAVIS=OFF ..\nmake\nsudo make install\n")))),(0,i.kt)("h2",{id:"step-23-install-tiscamera-dutils"},"Step 2/3: Install ",(0,i.kt)("inlineCode",{parentName:"h2"},"tiscamera-dutils")),(0,i.kt)("p",null,"Also install the ",(0,i.kt)("strong",{parentName:"p"},"dutils")," package here ",(0,i.kt)("inlineCode",{parentName:"p"},"tiscamera-dutils_1.0.0.160"),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chengguizi/tiscamera_ros/tree/master/sdk_debs"},"https://github.com/chengguizi/tiscamera_ros/tree/master/sdk_debs")),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"To verify driver installation, connect the camera using usb cable, then run ",(0,i.kt)("inlineCode",{parentName:"p"},"tcam-capture"),", and there should be an option for tonemapping showing up. Otherwise, the installation is unsuccessful."),(0,i.kt)("p",{parentName:"div"},"Also, in ",(0,i.kt)("inlineCode",{parentName:"p"},"gst-inspect-1.0 tcambin"),", the ",(0,i.kt)("inlineCode",{parentName:"p"},"dutil")," should have default to be true."))),(0,i.kt)("h2",{id:"step-33-integrating-with-ros-tiscamera_ros"},"Step 3/3: Integrating with ROS: ",(0,i.kt)("inlineCode",{parentName:"h2"},"tiscamera_ros")),(0,i.kt)("p",null,"The ROS driver could be found at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/chengguizi/tiscamera_ros/"},"https://github.com/chengguizi/tiscamera_ros/")),(0,i.kt)("p",null,"Dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"mavlink (install by apt ",(0,i.kt)("inlineCode",{parentName:"li"},"ros-melodic-mavlink"),")"),(0,i.kt)("li",{parentName:"ul"},"mavros (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/chengguizi/mavros"},"https://github.com/chengguizi/mavros"),", monotonic branch)")),(0,i.kt)("p",null,"There are two files important for configuration, in the launch folder"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"device_list")," file, which defines the camera string name, as well as serial number",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hardware_sync_mode")," set to ",(0,i.kt)("inlineCode",{parentName:"li"},"none")," if no hardware synchronisation is used"),(0,i.kt)("li",{parentName:"ul"},"if hardware sync is used, it should set to ",(0,i.kt)("inlineCode",{parentName:"li"},"slave")))),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"param")," file, which sets the exposure settings for all cameras")),(0,i.kt)("h2",{id:"wiring-for-hardware-synchronisation"},"Wiring for Hardware Synchronisation"))}d.isMDXComponent=!0}}]);