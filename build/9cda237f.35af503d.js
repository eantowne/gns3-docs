(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{179:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var r=t(2),o=(t(0),t(212));const i={id:"gns3-server-configuration-file",title:"GNS3 server configuration file",sidebar_label:"GNS3 server configuration file"},a={id:"using-gns3/administration/gns3-server-configuration-file",isDocsHomePage:!1,title:"GNS3 server configuration file",description:"If you want to run the GNS3 server without the GUI, you can configure it with via an ini file.",source:"@site/docs/using-gns3/administration/gns3-server-configuration-file.md",permalink:"/docs/using-gns3/administration/gns3-server-configuration-file",editUrl:"https://github.com/mother/gns3-docs/blob/master/docs/using-gns3/administration/gns3-server-configuration-file.md",sidebar_label:"GNS3 server configuration file",sidebar:"someSidebar",previous:{title:"Configuration transfer to QEMU VMs",permalink:"/docs/using-gns3/advanced/configuration-transfer-qemu-vms"},next:{title:"Running the GNS3 server as a daemon",permalink:"/docs/using-gns3/administration/running-gns3-server-as-daemon"}},c=[{value:"File Location",id:"file-location",children:[{value:"Linux",id:"linux",children:[]},{value:"Mac OS X",id:"mac-os-x",children:[]},{value:"Windows",id:"windows",children:[]}]}],s={rightToc:c};function l({components:e,...n}){return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"If you want to run the GNS3 server without the GUI, you can configure it with via an ini file."),Object(o.b)("h2",{id:"file-location"},"File Location"),Object(o.b)("p",null,"We search for the configuration file in multiple locations:"),Object(o.b)("h3",{id:"linux"},"Linux"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"$HOME/.config/GNS3/gns3_server.conf"),Object(o.b)("li",{parentName:"ul"},"$HOME/.config/GNS3.conf"),Object(o.b)("li",{parentName:"ul"},"/etc/xdg/GNS3/gns3_server.conf"),Object(o.b)("li",{parentName:"ul"},"/etc/xdg/GNS3.conf"),Object(o.b)("li",{parentName:"ul"},"gns3_server.conf in the current directory")),Object(o.b)("h3",{id:"mac-os-x"},"Mac OS X"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"$HOME/.config/GNS3/gns3_server.conf"),Object(o.b)("li",{parentName:"ul"},"gns3_server.conf in the current directory")),Object(o.b)("h3",{id:"windows"},"Windows"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"%APPDATA%/GNS3/gns3_server.ini"),Object(o.b)("li",{parentName:"ul"},"%APPDATA%/Roaming/GNS3/gns3_server.ini"),Object(o.b)("li",{parentName:"ul"},"%APPDATA%/GNS3.ini"),Object(o.b)("li",{parentName:"ul"},"%COMMON_APPDATA%/GNS3/gns3_server.ini"),Object(o.b)("li",{parentName:"ul"},"%COMMON_APPDATA%/GNS3.ini"),Object(o.b)("li",{parentName:"ul"},"gns3_server.ini in current directory")),Object(o.b)("p",null,"All configurations have default settings.  This means you need in the configuration file only the configuration you need to change. For executables like VCPS, ubridge, and dynamips, we search in the PATH environment variable by default (on a standard linux install we will look in /bin, /usr/bin)."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"The configuration file"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"[Server]\n; IP where the server listen for connection\nhost = 127.0.0.1\n; HTTP port for controlling the servers\nport = 3080\n; Path where images of devices are stored\nimages_path = /home/gns3/GNS3/images\n; Path where user project are stored\nprojects_path = /home/gns3/GNS3/projects\n; Send crash to the GNS3 team\nreport_errors = True\n; First port of the range allocated to devices telnet console\nconsole_start_port_range = 2001\n; Last port of the range allocated to devices telnet console\nconsole_end_port_range = 5000\n; First port of the range allocated to communication between devices. You need two port by link\nudp_start_port_range = 10000\n; Last port of the range allocated to communication between devices. You need two port by link\nudp_end_port_range = 20000\n; Path of the ubridge program\nubridge_path = /Applications/GNS3.app/Contents/Resources/ubridge\n; Boolean for enabling HTTP auth\nauth = True\n; Username for HTTP auth\nuser = bob\n; Password for HTTP auth\npassword = alice\n\n[VPCS]\n; Path of the VPCS binary\nvpcs_path = /usr/local/bin/vpcs\n\n[Dynamips]\nallocate_aux_console_ports = False\nmmap_support = True\n; Path of the dynamips path\ndynamips_path = /usr/local/bin/dynamips\nsparse_memory_support = True\nghost_ios_support = True\n\n[IOU]\n; Path of the iouyap binary\niouyap_path = /usr/local/bin/iouyap\n; Path of your .iourc file. If empty we search in $HOME/.iourc\niourc_path = /home/gns3/.iourc\n; Validate if the iourc is correct. If you turn off and your licence is invalid iou will crash without errors\nlicense_check = True\n\n[VirtualBox]\n; Path of the VBoxManage command\nvboxmanage_path = /usr/local/bin/VBoxManage\n; Run VirtualBox with sudo as vbox_user\nvbox_user =\n\n[VMware]\n; Type of Virtualization product (fusion, player, workstation)\nhost_type = fusion\n; First vmnet adapter controlled by GNS3\nvmnet_start_range = 2\n; Last vmnet adapter controlled by GNS3\nvmnet_end_range = 50\n; Path of the vmrun executable\nvmrun_path = /Applications/VMware Fusion.app/Contents/Library/vmrun\n")))}l.isMDXComponent=!0},212:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return d}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),u=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||i;return t?o.a.createElement(d,c(c({ref:n},l),{},{components:t})):o.a.createElement(d,c({ref:n},l))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);