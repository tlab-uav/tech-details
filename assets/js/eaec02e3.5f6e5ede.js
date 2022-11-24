(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[8746],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||p;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},58462:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var n=r(22122),a=r(19756),p=(r(67294),r(3905)),o=["components"],c={hide_title:!0,sidebar_label:"Map Updater"},i="Map Updater",s={unversionedId:"research/edt/MapUpdater",id:"research/edt/MapUpdater",isDocsHomePage:!1,title:"Map Updater",description:"Overview & Class Names",source:"@site/docs/research/edt/MapUpdater.md",sourceDirName:"research/edt",slug:"/research/edt/MapUpdater",permalink:"/tech-details/docs/research/edt/MapUpdater",version:"current",lastUpdatedAt:1628956952,formattedLastUpdatedAt:"8/14/2021",frontMatter:{hide_title:!0,sidebar_label:"Map Updater"},sidebar:"researchSidebar",previous:{title:"Framework Overview",permalink:"/tech-details/docs/research/edt/edt-overview"},next:{title:"stereo",permalink:"/tech-details/docs/research/edt/stereo"}},l=[{value:"Overview &amp; Class Names",id:"overview--class-names",children:[]},{value:"MapUpdater.cpp",id:"mapupdatercpp",children:[]}],d={toc:l};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"map-updater"},"Map Updater"),(0,p.kt)("h2",{id:"overview--class-names"},"Overview & Class Names"),(0,p.kt)("p",null,"class name: ",(0,p.kt)("inlineCode",{parentName:"p"},"MapUpdater"),", "),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"MapUpdater::MapUpdater(LinDistMap *dmap, DevMap *dev_map)\n")),(0,p.kt)("h2",{id:"mapupdatercpp"},"MapUpdater.cpp"),(0,p.kt)("p",null,"get camera pose from tf, and update projection"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"cudaMat::SE3<float> MapUpdater::getCamPos(const tf::Transform &trans) const"),"\n",(0,p.kt)("inlineCode",{parentName:"p"},"void MapUpdater::updateProjection(const tf::Transform &trans)")),(0,p.kt)("p",null,"update EDT Map\n",(0,p.kt)("inlineCode",{parentName:"p"},"void MapUpdater::updateEDTMap(const double &min_z_pos, const double &max_z_pos, const DevGeo::pos &center)")),(0,p.kt)("p",null,"Get the vehicle's global coordinates"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-cpp"},"    DevGeo::coord c = _dev_map->pos2coord(center);\n\n")))}u.isMDXComponent=!0}}]);