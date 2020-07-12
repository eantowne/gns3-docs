(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(209)),i=n(211),c={id:"settings-profiles",title:"Settings profiles",sidebar_label:"Settings profiles"},s={id:"using-gns3/advanced/settings-profiles",isDocsHomePage:!1,title:"Settings profiles",description:"This documentation is only for GNS3 2.0 and later",source:"@site/docs/using-gns3/advanced/settings-profiles.md",permalink:"/gns3-docs/docs/using-gns3/advanced/settings-profiles",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/advanced/settings-profiles.md",sidebar_label:"Settings profiles",sidebar:"someSidebar",previous:{title:"Move from IOUVM to GNS3 VM",permalink:"/gns3-docs/docs/using-gns3/advanced/move-from-iouvm-gns3-vm"},next:{title:"Create a new version for an appliance",permalink:"/gns3-docs/docs/using-gns3/advanced/create-a-new-version-for-an-appliance"}},l=[{value:"Create a Profile",id:"create-a-profile",children:[]},{value:"Comman Line Usage",id:"comman-line-usage",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"This documentation is only for GNS3 2.0 and later"))),Object(o.b)("p",null,"If you need to connect your GNS3 GUI to different GNS3 servers, you can use the settings profiles. This allows you to have multiple GNS3 environments."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Video: ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.youtube.com/watch?v=IMpmosLy9i8"}),"https://www.youtube.com/watch?v=IMpmosLy9i8"))),Object(o.b)("h2",{id:"create-a-profile"},"Create a Profile"),Object(o.b)("p",null,"First click Edit->Preferences to  go to the settings in order to enable the feature"),Object(o.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/advanced/settings-profiles/1.jpg")}),Object(o.b)("p",null,"And restart GNS3.  You can now create a profile:"),Object(o.b)("img",{alt:"screenshot",src:Object(i.a)("img/using-gns3/advanced/settings-profiles/2.jpg")}),Object(o.b)("p",null,"default is a profile always here. It\u2019s the profile use when you don\u2019t choose a profile."),Object(o.b)("h2",{id:"comman-line-usage"},"Comman Line Usage"),Object(o.b)("p",null,"You can also use different profile if you pass ",Object(o.b)("inlineCode",{parentName:"p"},"--profile")," to the GNS3 client with the profile name."),Object(o.b)("p",null,"Example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"gns3 --profile work\n")))}p.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||o;return n?a.a.createElement(f,c(c({ref:t},l),{},{components:n})):a.a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},210:function(e,t,n){"use strict";var r=n(0),a=n(52);t.a=function(){return Object(r.useContext)(a.a)}},211:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(76);var r=n(210),a=n(212);function o(e,t){var n=void 0===t?{}:t,o=n.forcePrependBaseUrl,i=void 0!==o&&o,c=n.absolute,s=void 0!==c&&c,l=Object(r.a)().siteConfig,u=(l=void 0===l?{}:l).baseUrl,p=void 0===u?"/":u,d=l.url;if(!e)return e;if(i)return p+e;if(!Object(a.a)(e))return e;var b=p+e.replace(/^\//,"");return s?d+b:b}},212:function(e,t,n){"use strict";function r(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return r}))}}]);