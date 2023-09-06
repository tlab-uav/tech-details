(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[8346],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return u}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22077:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),o=["components"],l={hide_title:!0,sidebar_label:"Patch JetPack BSP"},s="Preparing The Patched BSP",p={unversionedId:"hardware/jetson-tx2/prepare-bsp-rfs",id:"hardware/jetson-tx2/prepare-bsp-rfs",isDocsHomePage:!1,title:"Preparing The Patched BSP",description:"You could safely skip this whole step, if the Patched BSP has been provided for you. (Typically contain the board name, such as 'J120' in the zip file)",source:"@site/docs/hardware/jetson-tx2/prepare-bsp-rfs.md",sourceDirName:"hardware/jetson-tx2",slug:"/hardware/jetson-tx2/prepare-bsp-rfs",permalink:"/tech-details/docs/hardware/jetson-tx2/prepare-bsp-rfs",version:"current",lastUpdatedAt:1628956952,formattedLastUpdatedAt:"8/14/2021",frontMatter:{hide_title:!0,sidebar_label:"Patch JetPack BSP"},sidebar:"tx2Sidebar",next:{title:"Flash An Existing Image",permalink:"/tech-details/docs/hardware/jetson-tx2/flash-existing-image"}},d=[{value:"For Auvidea J120",id:"for-auvidea-j120",children:[{value:"What You Need:",id:"what-you-need",children:[]},{value:"The Steps",id:"the-steps",children:[]}]},{value:"Flashing Your First Image (Clean Install)",id:"flashing-your-first-image-clean-install",children:[]}],c={toc:d};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"preparing-the-patched-bsp"},"Preparing The Patched BSP"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You could safely skip this whole step, if the ",(0,i.kt)("strong",{parentName:"p"},"Patched")," BSP has been provided for you. (Typically contain the board name, such as 'J120' in the zip file)"))),(0,i.kt)("h2",{id:"for-auvidea-j120"},"For Auvidea J120"),(0,i.kt)("h3",{id:"what-you-need"},"What You Need:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Check the latest firmware version from ",(0,i.kt)("a",{parentName:"li",href:"https://auvidea.eu/firmware/"},"Auvidea Firmware"),", and download the zip file."),(0,i.kt)("li",{parentName:"ol"},"Download the corresponding ",(0,i.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/jetpack-archive"},"L4T BSP")," (inside which provides Linux kernel, bootloader, NVIDIA drivers, and flashing utilities)")),(0,i.kt)("h3",{id:"the-steps"},"The Steps"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unzip the BSP and Sample Root Filesystem, using command line to ",(0,i.kt)("strong",{parentName:"p"},"preserve the correct permissions")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tar -xpf <BSP zip file>\nsudo tar -xpf <Sample Root Filesystem zip file>\n# use sudo cp -a to copy the Sample Root Filesystem to rootfs folder inside BSP\nsudo cp -a <Sample Root Filesystem>/* <BSP>/rootfs\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rename the extracted Linux_for_Tegra folder, to indicate its target Auvidea board and firmware version. Such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Linux_for_Tegra_J120_Dec2019"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Extract the corresponding J120 / J90 Firmware"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo tar -xpf <Firmware zip file>\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Navigate into the Auvidea firmware's Linux_for_Tegra folder, copy the files to overide Nvidia's Original, ",(0,i.kt)("strong",{parentName:"p"},"preserving permissions")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp -a * <BSP Root Folder>\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Double check by ensureing all relevant files in the BSP's folder is the same modification dates as the Auvidea's Firmware folder.")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Apply binaries"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./apply_binaries.sh\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You are done!"))),(0,i.kt)("h2",{id:"flashing-your-first-image-clean-install"},"Flashing Your First Image (Clean Install)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"to flash every partitions with fresh build of ",(0,i.kt)("inlineCode",{parentName:"li"},"system.img"),": ",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ./flash.sh jetson-tx2 mmcblk0p1\n")))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Addtional Nvidia Libraries (e.g. CUDA, cuDNN), could be installed by Nvidia's SDK Manager, by"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"Boot up TX2 into Ubuntu"),(0,i.kt)("li",{parentName:"ol"},"Plug in the debugging USB to host Linux machine; TX2 should be mounted as a network device automatically with 192.168.55.1 address"),(0,i.kt)("li",{parentName:"ol"},"Thereafter, the SDK Manager could do the install automatically")))))}m.isMDXComponent=!0}}]);