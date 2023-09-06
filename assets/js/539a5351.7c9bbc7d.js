(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[326],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90725:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),i=["components"],l={hide_title:!0,sidebar_label:"Web-based UI"},s="Web-based UI",p={unversionedId:"systems/pixhawk_v1/web-ui",id:"systems/pixhawk_v1/web-ui",isDocsHomePage:!1,title:"Web-based UI",description:"Overview",source:"@site/docs/systems/pixhawk_v1/web-ui.md",sourceDirName:"systems/pixhawk_v1",slug:"/systems/pixhawk_v1/web-ui",permalink:"/tech-details/docs/systems/pixhawk_v1/web-ui",version:"current",lastUpdatedAt:1628956952,formattedLastUpdatedAt:"8/14/2021",frontMatter:{hide_title:!0,sidebar_label:"Web-based UI"},sidebar:"systemsSidebar",previous:{title:"Simulator",permalink:"/tech-details/docs/systems/pixhawk_v1/simulator"}},u=[{value:"Overview",id:"overview",children:[]},{value:"Installation",id:"installation",children:[{value:"User",id:"user",children:[]},{value:"Developer (Optional)",id:"developer-optional",children:[]}]},{value:"MISC",id:"misc",children:[{value:"Tutorials and useful websites",id:"tutorials-and-useful-websites",children:[]}]}],c={toc:u};function d(e){var t=e.components,l=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-based-ui"},"Web-based UI"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This Robot web-based UI package is built based on ",(0,o.kt)("a",{parentName:"p",href:"http://robotwebtools.org/tools.html"},"robotwebtools"),". It has the following functions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Showing the status of the robot, such as position, real-time image, path, and map, etc"),(0,o.kt)("li",{parentName:"ul"},"Integrated RVIZ allowing further potential functions"),(0,o.kt)("li",{parentName:"ul"},"Command (takeoff, mission, land, etc.) can be sent to the robot directly from the UI"),(0,o.kt)("li",{parentName:"ul"},"Console output from ROS"),(0,o.kt)("li",{parentName:"ul"},"A mission tab allowing the user to choose multiple waypoints directly from the floor plan")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(62827).Z})),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(61163).Z})),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"user"},"User"),(0,o.kt)("p",null,"  You will have to deploy the web page to access it by IP address. It should be deployed on the robot for now."),(0,o.kt)("h4",{id:"1-packages-installation"},"1. Packages Installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"nginx",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ sudo apt-get update\n$ sudo apt-get install nginx\n")))),(0,o.kt)("h4",{id:"2-setup"},"2. Setup"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure the full path of your UI folder have 775 permission",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ chmod 775 folder_name \nUsually you will have to give SD card 775 permission if you put the UI inside it.\n"))),(0,o.kt)("li",{parentName:"ul"},"Config nginx",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ sudo gedit /etc/nginx/sites-enabled/default\nfind the line:\n$ root /var/www/html;\nand change the value /var/www/html to the path to your UI folder. For example:\nroot /media/nvidia/SD/catkin_ws/src/pixhawk_v1/pixhawk_ui;\n"))),(0,o.kt)("li",{parentName:"ul"},"Restart Nginx:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ sudo systemctl restart nginx\n")))),(0,o.kt)("h4",{id:"3-usage-access-by-ip"},"3. Usage: access by IP"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Try 'Open Incognito Window' in your web browser and put the pixhawk's IP, you will be able to see the UI if you set everything correctly. \n")),(0,o.kt)("p",null,"You are good to stop here if you want to use the UI only. "),(0,o.kt)("h3",{id:"developer-optional"},"Developer (Optional)"),(0,o.kt)("h4",{id:"1-download-tools-in-vscode-on-host-pc"},"1. Download tools in Vscode on host PC"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Bootstrap 4, Font awesome 4, Font Awesome 5 Free & Pro snippets."),(0,o.kt)("p",{parentName:"li"},"  This is the framework itself with couple of additional features which contain ready-to-use templates and other stuff useful while developing in bootstrap.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Live Server "),(0,o.kt)("p",{parentName:"li"},"  To see your web UI changes in realtime")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Prettier Code formatter "),(0,o.kt)("p",{parentName:"li"},"  To keep your source code clean")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"vscode-icons "),(0,o.kt)("p",{parentName:"li"},"  To make your workspace look good"))),(0,o.kt)("h4",{id:"2-onboard-pc-setup"},"2. Onboard PC setup"),(0,o.kt)("h5",{id:"download-ros-web-server-packages"},"Download ros web server packages"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"web_video_server",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ sudo apt-get install ros-kinetic-web-video-server\n  It launches the server for streaming ROS image messages as video through the web.\n"))),(0,o.kt)("li",{parentName:"ul"},"rosbridge_server",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt-get install ros-kinetic-rosbridge-suite\n  It launches the web sockets to allow web apps to publish or subscribe ROS messages.\n"))),(0,o.kt)("li",{parentName:"ul"},"tf2-web-republisher",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"$ sudo apt-get install ros-kinetic-tf2-web-republisher\n")))),(0,o.kt)("h5",{id:"put-the-following-contents-in-uilaunch-under-your-package"},"Put the following contents in ui.launch under your package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- --\x3e\n<launch>\n  <node pkg="web_video_server" type="web_video_server" name="web_video_server"/>\n  <include file="$(find rosbridge_server)/launch/rosbridge_websocket.launch" />\n  <node pkg="tf2_web_republisher" type="tf2_web_republisher" name="tf2_web_republisher" />\n</launch>\n')),(0,o.kt)("h4",{id:"3-usage"},"3. Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run UI launch file on the onboard PC")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ roslaunch your_packages ui.launch\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Access UI web page on local ground station From Vscode"),(0,o.kt)("p",{parentName:"li"},'Open your workspace with Vscode; Right click index.html in your Vscode; Click "Open with Live Server" and then the web will show up in your browser'))),(0,o.kt)("h2",{id:"misc"},"MISC"),(0,o.kt)("h3",{id:"tutorials-and-useful-websites"},"Tutorials and useful websites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/husarion-blog/bootstrap-4-ros-creating-a-web-ui-for-your-robot-9a77a8e373f9"},"Bootstrap 4 + ROS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.w3schools.com/bootstrap4/default.asp"},"Bootstrap 4 Tutorial")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"http://robotwebtools.org/tools.html"},"ROBOTWEBTOOLS")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://bootswatch.com/"},"Theme")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.rapidtables.com/web/color/html-color-codes.htmls"},"HTML color code"))))}d.isMDXComponent=!0},62827:function(e,t,r){"use strict";t.Z=r.p+"assets/images/ui-d7e491b9208dfee98bcf29a361151ba5.png"},61163:function(e,t,r){"use strict";t.Z=r.p+"assets/images/waypoint_selection_tab-4bb6df8afa2b8ab7b7dbfeabc91a12c8.png"}}]);