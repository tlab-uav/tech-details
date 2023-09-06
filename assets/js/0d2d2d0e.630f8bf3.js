(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[8305],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90938:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return f}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a=["components"],s={hide_title:!0,sidebar_label:"Multiagent PX4 SITL"},l="Lessons Learnt from launching multiple instances of PX4 SITL",u={unversionedId:"systems/multi-agent-px4-sitl",id:"systems/multi-agent-px4-sitl",isDocsHomePage:!1,title:"Lessons Learnt from launching multiple instances of PX4 SITL",description:"If using v1.13.0, there might be the possibility where you are unable to go into offboard mode and there is warning shown in the QGroundControl that says failsafe enabled/disabled. This implies that the drone is looking out for an RC but none is detected (which is strange for SITL). But nonetheless, the workaround is as follows:",source:"@site/docs/systems/multi-agent-px4-sitl.md",sourceDirName:"systems",slug:"/systems/multi-agent-px4-sitl",permalink:"/tech-details/docs/systems/multi-agent-px4-sitl",version:"current",lastUpdatedAt:1693990514,formattedLastUpdatedAt:"9/6/2023",frontMatter:{hide_title:!0,sidebar_label:"Multiagent PX4 SITL"}},c=[],p={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lessons-learnt-from-launching-multiple-instances-of-px4-sitl"},"Lessons Learnt from launching multiple instances of PX4 SITL"),(0,i.kt)("p",null,"If using v1.13.0, there might be the possibility where you are unable to go into offboard mode and there is warning shown in the QGroundControl that says failsafe enabled/disabled. This implies that the drone is looking out for an RC but none is detected (which is strange for SITL). But nonetheless, the workaround is as follows: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to QGroundControl -> application settings, and then enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"virtual joystick")," option. This alone does not solve the problem because you have multiple agents but only one virtual joystick so you can only control 1 drone at a time. So when you switch to different drones, the other drones will not detect the RC and then it will go into fail safe mode. Hence, second step is important")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to QGroundControl, after connection to the drone, set the following parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"COM_RCL_EXCEPT")," to 4 (which is offboard). This provides an exception to require comms when it is in offboard mode. And thus circumnavigate the problem. Unsure if the previous step is required if you straight up use this. But nonetheless, this is the workaround"))))}f.isMDXComponent=!0}}]);