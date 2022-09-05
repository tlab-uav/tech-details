(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[514],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),h=a,d=f["".concat(c,".").concat(h)]||f[h]||s[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45930:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={hide_title:!0,sidebar_label:"PX4 FAQ"},c="PX4 FAQ",u={unversionedId:"hardware/px4-firmware/px4-FAQ",id:"hardware/px4-firmware/px4-FAQ",isDocsHomePage:!1,title:"PX4 FAQ",description:"- Cannot Arm the Drone?",source:"@site/docs/hardware/px4-firmware/px4-FAQ.md",sourceDirName:"hardware/px4-firmware",slug:"/hardware/px4-firmware/px4-FAQ",permalink:"/tech-details/docs/hardware/px4-firmware/px4-FAQ",version:"current",lastUpdatedAt:1662371842,formattedLastUpdatedAt:"9/5/2022",frontMatter:{hide_title:!0,sidebar_label:"PX4 FAQ"},sidebar:"px4firmwareSidebar",previous:{title:"PX4 Dynamic Control Allocation",permalink:"/tech-details/docs/hardware/px4-firmware/px4-dynamic-control-allocation"},next:{title:"Getting Started",permalink:"/tech-details/docs/hardware/px4-firmware/ecl-ekf/px4-ecl-ekf"}},p=[{value:"Cannot Arm the Drone?",id:"cannot-arm-the-drone",children:[]},{value:"Radio channel twitches in QGroundControl",id:"radio-channel-twitches-in-qgroundcontrol",children:[]},{value:"Drone slowly spins after takeoff",id:"drone-slowly-spins-after-takeoff",children:[]}],s={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"px4-faq"},"PX4 FAQ"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cannot-arm-the-drone"},"Cannot Arm the Drone?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#radio-channel-twitches-in-qgroundcontrol"},"Radio channel twitches in QGroundControl")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#drone-slowly-spins-after-takeoff"},"Drone slowly spins after takeoff"))),(0,o.kt)("h2",{id:"cannot-arm-the-drone"},"Cannot Arm the Drone?"),(0,o.kt)("p",null,"Check for any (",(0,o.kt)("b",null,"Preflight checks fail"),") error messages from QGC."),(0,o.kt)("p",null,"Check for the ",(0,o.kt)("b",null,"throttle position")," (it must be ",(0,o.kt)("i",null,'"low"'),")."),(0,o.kt)("p",null,"Check whether you are using ",(0,o.kt)("b",null,"Arming Gesture")," or ",(0,o.kt)("b",null,"Arming Buttom/Switch")," (they are either or). More info ",(0,o.kt)("a",{parentName:"p",href:"https://docs.px4.io/master/en/advanced_config/prearm_arm_disarm.html#arming-gesture"},(0,o.kt)("inlineCode",{parentName:"a"},"here"))),(0,o.kt)("p",null,"Check the parameter ",(0,o.kt)("b",null,(0,o.kt)("inlineCode",{parentName:"p"},"COM_RC_IN_MODE")),", it should be the default value 0."),(0,o.kt)("p",null,"more information regarding PX4 mixing and geometry file\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jlecoeur/servo_mix_matrix"},"https://github.com/jlecoeur/servo_mix_matrix")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PX4/PX4-Devguide/issues/435"},"https://github.com/PX4/PX4-Devguide/issues/435")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/PX4/PX4-Devguide/issues/511"},"https://github.com/PX4/PX4-Devguide/issues/511")),(0,o.kt)("h2",{id:"radio-channel-twitches-in-qgroundcontrol"},"Radio channel twitches in QGroundControl"),(0,o.kt)("p",null,"Check if you are using manually inverted SBUS signal. Try to use the original signal pad from the receiver. "),(0,o.kt)("p",null,"Past experience with frsky r-xsr is that if we manually solder the wire from the inverted SBUS pad, it may have the twitching problem. If we use the original SBUS signal wire connect to the flight controller SBUS pad then all is good."),(0,o.kt)("h2",{id:"drone-slowly-spins-after-takeoff"},"Drone slowly spins after takeoff"),(0,o.kt)("p",null,"Check RC calibration. If you copy the param from another drone, you may encounter this. Just try to re-calibrate your RC from QGroundControl."))}f.isMDXComponent=!0}}]);