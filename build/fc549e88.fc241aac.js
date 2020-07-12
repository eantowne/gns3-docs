(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{207:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),o=(n(0),n(211)),r=n(213);const i={id:"the-console-terminal",title:"The console terminal",sidebar_label:"The console terminal"},l={id:"using-gns3/beginners/the-console-terminal",isDocsHomePage:!1,title:"The console terminal",description:"GNS3 uses Solar-PuTTY as the default console terminal in Windows* (see note), and will attempt to use the default system terminal in other operating systems (gnome-terminal, for example, in vanilla Ubuntu).",source:"@site/docs/using-gns3/beginners/the-console-terminal.md",permalink:"/gns3-docs/docs/using-gns3/beginners/the-console-terminal",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/beginners/the-console-terminal.md",sidebar_label:"The console terminal",sidebar:"someSidebar",previous:{title:"Switching and GNS3",permalink:"/gns3-docs/docs/using-gns3/beginners/switching-and-gns3"},next:{title:"Install an appliance from the GNS3 Marketplace",permalink:"/gns3-docs/docs/using-gns3/beginners/install-from-marketplace"}},s=[{value:"Change the Terminal",id:"change-the-terminal",children:[]},{value:"Use a custom Terminal",id:"use-a-custom-terminal",children:[]},{value:"Use a different terminal just one at a time",id:"use-a-different-terminal-just-one-at-a-time",children:[]}],c={rightToc:s};function u({components:e,...t}){return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"GNS3 uses Solar-PuTTY as the default console terminal in Windows* (see note), and will attempt to use the default system terminal in other operating systems (gnome-terminal, for example, in vanilla Ubuntu).  "),Object(o.b)("p",null,"You can direct GNS3  to use one of multiple other popular terminals (as options are provided in a handy dropdown selection menu), you can also create and save custom entries for any console applications (if needed), as well as temporarily use a custom console on a per-node basis in a project."),Object(o.b)("h2",{id:"change-the-terminal"},"Change the Terminal"),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"Edit->Preferences->General preferences->Console applications"),", you can edit the command used to start the console application."),Object(o.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/beginners/the-console-terminal/1.jpg")}),Object(o.b)("p",null,"And choose a predefined command"),Object(o.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/beginners/the-console-terminal/2.jpg")}),Object(o.b)("p",null,"Below are the predefined commands currently included:"),Object(o.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/beginners/the-console-terminal/3.jpg")}),Object(o.b)("h2",{id:"use-a-custom-terminal"},"Use a custom Terminal"),Object(o.b)("p",null,"If you choose Custom and Save, you can add a non-supported terminal to the dropdown list:"),Object(o.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/beginners/the-console-terminal/4.jpg")}),Object(o.b)("p",null,"Modify the highlighted section above to include the application\u2019s executable, along with any necessary variables required."),Object(o.b)("p",null,"If the console application isn\u2019t part of your PATH environment variable, you\u2019ll need to include the full directory path to it. For example, you\u2019d add \u201cC:\\Program Files\\some-console-app\\program.exe\u201d, and then any necessary variables. It\u2019s outside the scope of this document to cover editing your PATH environment variable, or cover all the possible variables available for the many console applications available."),Object(o.b)("h2",{id:"use-a-different-terminal-just-one-at-a-time"},"Use a different terminal just one at a time"),Object(o.b)("p",null,"If you right-click on node in a topology you can open a different terminal than the default."),Object(o.b)("img",{alt:"screenshot",src:Object(r.a)("img/using-gns3/beginners/the-console-terminal/5.jpg")}),Object(o.b)("p",null,"Now that Solar-Putty is the default, David Bombal has created some videos on how you can customize it to your liking:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Video: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=mQKbXMIxHSk"}),"https://www.youtube.com/watch?v=mQKbXMIxHSk")),Object(o.b)("li",{parentName:"ul"},"Video: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=Q2TnxcJa0wI"}),"https://www.youtube.com/watch?v=Q2TnxcJa0wI")),Object(o.b)("li",{parentName:"ul"},"Video: ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=shoDldraAsE"}),"https://www.youtube.com/watch?v=shoDldraAsE"))),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Solar PuTTY is only included by default, if you download the GNS3 AIO installer for Windows from gns3.com directly. If you downloaded that installer from, say, github, then vanilla PuTTY will be the default terminal emulator used, instead."),Object(o.b)("p",{parentName:"div"},"You can still download Solar-PuTTY from SolarWinds (it\u2019s free), copy/paste the Solar-PuTTY executable to the main GNS3 installation folder, and then direct GNS3 to use it as the default console application, by editing the preferences (as shown above)."))))}u.isMDXComponent=!0},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,p=d["".concat(i,".").concat(b)]||d[b]||m[b]||r;return n?o.a.createElement(p,l(l({ref:t},c),{},{components:n})):o.a.createElement(p,l({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},212:function(e,t,n){"use strict";var a=n(0),o=n(52);t.a=function(){return Object(a.useContext)(o.a)}},213:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(76);var a=n(212),o=n(214);function r(e,t){var n=void 0===t?{}:t,r=n.forcePrependBaseUrl,i=void 0!==r&&r,l=n.absolute,s=void 0!==l&&l,c=Object(a.a)().siteConfig,u=(c=void 0===c?{}:c).baseUrl,d=void 0===u?"/":u,m=c.url;if(!e)return e;if(i)return d+e;if(!Object(o.a)(e))return e;var b=d+e.replace(/^\//,"");return s?m+b:b}},214:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))}}]);