(self.webpackChunktech_details=self.webpackChunktech_details||[]).push([[9514,6035],{63616:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Q}});var n=a(67294),r=a(3905),i=a(52263),o=a(46291),c=a(68115),l=a(22122),s=a(19756),d=a(86010),u=a(39306),m=a(31839),b=a(93783),p=a(77898),h=a(36742),f=a(13919),v=a(55537),E=function(e){return n.createElement("svg",(0,l.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=a(84478),C=a(18617),_=a(24973),k="sidebar_15mo",S="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",Z="sidebarLogo_3h0W",I="menu_Bmed",x="menuLinkText_2aKo",M="menuWithAnnouncementBar_2WvA",T="collapseSidebarButton_1CGd",y="collapseSidebarButtonIcon_3E-R",B="sidebarMenuIcon_fgN0",R="sidebarMenuCloseIcon_1lpH",w=["items"],A=["item","onItemClick","collapsible","activePath"],P=["item","onItemClick","activePath","collapsible"],D=function e(t,a){return"link"===t.type?(0,u.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},L=(0,n.memo)((function(e){var t=e.items,a=(0,s.Z)(e,w);return t.map((function(e,t){return n.createElement(H,(0,l.Z)({key:t,item:e},a))}))}));function H(e){switch(e.item.type){case"category":return n.createElement(W,e);case"link":default:return n.createElement(F,e)}}function W(e){var t,a=e.item,r=e.onItemClick,i=e.collapsible,o=e.activePath,c=(0,s.Z)(e,A),m=a.items,b=a.label,p=D(a,o),h=(0,u.D9)(p),f=(0,n.useState)((function(){return!!i&&(!p&&a.collapsed)})),v=f[0],E=f[1],g=(0,n.useRef)(null),C=(0,n.useState)(void 0),_=C[0],k=C[1],S=function(e){var t;void 0===e&&(e=!0),k(e?(null==(t=g.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){p&&!h&&v&&E(!1)}),[p,h,v]);var N=(0,n.useCallback)((function(e){e.preventDefault(),_||S(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[_]);return 0===m.length?null:n.createElement("li",{className:(0,d.Z)("menu__list-item",{"menu__list-item--collapsed":v})},n.createElement("a",(0,l.Z)({className:(0,d.Z)("menu__link",(t={"menu__link--sublist":i,"menu__link--active":i&&p},t[x]=!i,t)),onClick:i?N:void 0,href:i?"#":void 0},c),b),n.createElement("ul",{className:"menu__list",ref:g,style:{height:_},onTransitionEnd:function(){v||S(!1)}},n.createElement(L,{items:m,tabIndex:v?"-1":"0",onItemClick:r,collapsible:i,activePath:o})))}function F(e){var t=e.item,a=e.onItemClick,r=e.activePath,i=(e.collapsible,(0,s.Z)(e,P)),o=t.href,c=t.label,u=D(t,r);return n.createElement("li",{className:"menu__list-item",key:c},n.createElement(h.Z,(0,l.Z)({className:(0,d.Z)("menu__link",{"menu__link--active":u}),to:o},(0,f.Z)(o)&&{isNavLink:!0,exact:!0,onClick:a},i),(0,f.Z)(o)?c:n.createElement("span",null,c,n.createElement(C.Z,null))))}function O(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,_.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,d.Z)("button button--secondary button--outline",T),onClick:t},n.createElement(E,{className:y}))}function K(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,_.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,_.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,d.Z)(B,R)},"\xd7"):n.createElement(g.Z,{className:B,height:24,width:24}))}var U=function(e){var t,a,r=e.path,i=e.sidebar,o=e.sidebarCollapsible,c=void 0===o||o,l=e.onCollapse,s=e.isHidden,h=function(){var e=(0,u.nT)().isClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,p.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),f=(0,u.LU)(),E=f.navbar.hideOnScroll,g=f.hideableSidebar,C=(0,u.nT)().isClosed,x=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,m.Z)(t);var r=(0,b.Z)();return(0,n.useEffect)((function(){r===b.D.desktop&&a(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),T=x.showResponsiveSidebar,y=x.closeResponsiveSidebar,B=x.toggleResponsiveSidebar;return n.createElement("div",{className:(0,d.Z)(k,(t={},t[S]=E,t[N]=s,t))},E&&n.createElement(v.Z,{tabIndex:-1,className:Z}),n.createElement("nav",{className:(0,d.Z)("menu","menu--responsive","thin-scrollbar",I,(a={"menu--show":T},a[M]=!C&&h,a)),"aria-label":(0,_.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},n.createElement(K,{responsiveSidebarOpened:T,onClick:B}),n.createElement("ul",{className:"menu__list"},n.createElement(L,{items:i,onItemClick:y,collapsible:c,activePath:r}))),g&&n.createElement(O,{onClick:l}))},j=a(87277),z=a(24608),J=a(5977),Y={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function G(e){var t,a,o,l,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,i.Z)(),f=h.siteConfig,v=h.isClient,g=b.pluginId,C=b.version,k=function(e){var t,a=e.versionMetadata,n=e.currentDocRoute,r=a.permalinkToSidebar,i=a.docsSidebars,o=r[n.path]||r[(t=n.path,t.endsWith("/")?t:t+"/")]||r[function(e){return e.endsWith("/")?e.slice(0,-1):e}(n.path)];return{sidebar:i[o],sidebarName:o}}({versionMetadata:b,currentDocRoute:m}),S=k.sidebarName,N=k.sidebar,Z=(0,n.useState)(!1),I=Z[0],x=Z[1],M=(0,n.useState)(!1),T=M[0],y=M[1],B=(0,n.useCallback)((function(){T&&y(!1),x(!I)}),[T]);return n.createElement(c.Z,{key:v,wrapperClassName:u.kM.wrapper.docPages,pageClassName:u.kM.page.docPage,searchMetadatas:{version:C,tag:(0,u.os)(g,C)}},n.createElement("div",{className:Y.docPage},N&&n.createElement("aside",{className:(0,d.Z)(Y.docSidebarContainer,(t={},t[Y.docSidebarContainerHidden]=I,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Y.docSidebarContainer)&&I&&y(!0)}},n.createElement(U,{key:S,sidebar:N,path:m.path,sidebarCollapsible:null==(a=null==(o=f.themeConfig)?void 0:o.sidebarCollapsible)||a,onCollapse:B,isHidden:T}),T&&n.createElement("div",{className:Y.collapsedDocSidebar,title:(0,_.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:B,onClick:B},n.createElement(E,{className:Y.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,d.Z)(Y.docMainContainer,(l={},l[Y.docMainContainerEnhanced]=I||!N,l))},n.createElement("div",{className:(0,d.Z)("container padding-top--md padding-bottom--lg",Y.docItemWrapper,(s={},s[Y.docItemWrapperEnhanced]=I,s))},n.createElement(r.Zo,{components:j.Z},p)))))}var Q=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,J.LX)(r.pathname,e)}));return i?n.createElement(G,{currentDocRoute:i,versionMetadata:a},(0,o.Z)(t,{versionMetadata:a})):n.createElement(z.default,e)}},24608:function(e,t,a){"use strict";a.r(t);var n=a(67294),r=a(68115),i=a(24973);t.default=function(){return n.createElement(r.Z,{title:(0,i.I)({id:"theme.NotFound.title",message:"Page Not Found"})},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6979:function(e,t,a){"use strict";var n=a(67294),r=a(94184),i=a.n(r),o=a(5977),c=a(52263),l=a(28084);t.Z=function(e){var t=(0,n.useRef)(!1),r=(0,n.useRef)(null),s=(0,o.k6)(),d=(0,c.Z)().siteConfig,u=(void 0===d?{}:d).baseUrl,m=(0,l.usePluginData)("docusaurus-lunr-search"),b=function(){t.current||(Promise.all([fetch(""+u+m.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+u+m.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([a.e(9878),a.e(4452)]).then(a.bind(a,57780)),Promise.all([a.e(532),a.e(3343)]).then(a.bind(a,53343))]).then((function(e){var t=e[0],a=e[1],n=e[2].default;0!==t.length&&function(e,t,a){new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,a){var n=u+a.url;document.createElement("a").href=n,s.push(n)}})}(t,a,n)})),t.current=!0)},p=(0,n.useCallback)((function(t){r.current.contains(t.target)||r.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.createElement("div",{className:"navbar__search",key:"search-box"},n.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),n.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:b,onMouseOver:b,onFocus:p,onBlur:p,ref:r}))}}}]);