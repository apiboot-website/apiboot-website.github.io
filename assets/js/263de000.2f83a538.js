"use strict";(self.webpackChunkapiboot_minbox_org=self.webpackChunkapiboot_minbox_org||[]).push([[7724],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>k});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=a.createContext({}),m=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=m(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),g=m(n),k=o,c=g["".concat(p,".").concat(k)]||g[k]||s[k]||r;return n?a.createElement(c,l(l({ref:e},d),{},{components:n})):a.createElement(c,l({ref:e},d))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,l=new Array(r);l[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var m=2;m<r;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3011:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>m});var a=n(7462),o=(n(7294),n(3905));const r={title:"Spring Mongo\u914d\u7f6e\u53c2\u6570\u6269\u5c55\u7ec4\u4ef6",sidebar_position:4},l=void 0,i={unversionedId:"components/api-boot-mongo-client-settings",id:"components/api-boot-mongo-client-settings",title:"Spring Mongo\u914d\u7f6e\u53c2\u6570\u6269\u5c55\u7ec4\u4ef6",description:"ApiBoot Mongo Settings",source:"@site/docs/components/api-boot-mongo-client-settings.md",sourceDirName:"components",slug:"/components/api-boot-mongo-client-settings",permalink:"/docs/components/api-boot-mongo-client-settings",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Spring Mongo\u914d\u7f6e\u53c2\u6570\u6269\u5c55\u7ec4\u4ef6",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Spring OAuth2\u5c01\u88c5\u7ec4\u4ef6",permalink:"/docs/components/api-boot-oauth"},next:{title:"MyBatis\u589e\u5f3a\u6269\u5c55\u5c01\u88c5\u7ec4\u4ef6",permalink:"/docs/components/api-boot-mybatis-enhance"}},p={},m=[{value:"ApiBoot Mongo Settings",id:"apiboot-mongo-settings",level:2},{value:"1. \u6dfb\u52a0\u4f9d\u8d56\u7ec4\u4ef6",id:"1-\u6dfb\u52a0\u4f9d\u8d56\u7ec4\u4ef6",level:2},{value:"2. \u63d0\u4f9b\u7684\u6269\u5c55\u53c2\u6570",id:"2-\u63d0\u4f9b\u7684\u6269\u5c55\u53c2\u6570",level:2}],d={toc:m};function s(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"apiboot-mongo-settings"},"ApiBoot Mongo Settings"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-data-mongo"),"\u4f9d\u8d56\u914d\u7f6e\u53c2\u6570\u7684\u6269\u5c55\uff0c\u8be5\u7ec4\u4ef6\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"v2.2.7"),"\u540e\u65b0\u589e\u3002")),(0,o.kt)("p",null,"\u6211\u4eec\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"SpringBoot"),"\u6574\u5408",(0,o.kt)("inlineCode",{parentName:"p"},"mongoDB"),"\u65f6\uff0c\u4e00\u822c\u4f1a\u76f4\u63a5\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-data-mongo"),"\u8fd9\u4e2a\u4f9d\u8d56\uff0c\u800c",(0,o.kt)("inlineCode",{parentName:"p"},"SpringBoot"),"\u5185\u90e8\u6240\u63d0\u4f9b\u7684\u914d\u7f6e\u53c2\u6570\u8f83\u5c11\uff0c\u8be6\u60c5\u8bf7\u8bbf\u95ee",(0,o.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#data-properties"},"SpringBoot\u5b98\u65b9\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u6bd4\u8f83\u5e38\u89c1\u7684\u4e00\u4e2a\u95ee\u9898\uff1a",(0,o.kt)("strong",{parentName:"p"},"Mongo\u8fde\u63a5\u8d85\u65f6\u3002")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mongo"),"\u5e76\u4e0d\u662f\u6ca1\u6709\u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u914d\u7f6e\u65b9\u5f0f\uff0c\u53ea\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"SpringBoot"),"\u5e76\u672a\u505a\u51fa\u58f0\u660e\u5f0f\u7684\u5b9a\u4e49\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(137).Z,width:"1039",height:"370"})),(0,o.kt)("h2",{id:"1-\u6dfb\u52a0\u4f9d\u8d56\u7ec4\u4ef6"},"1. \u6dfb\u52a0\u4f9d\u8d56\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u914d\u7f6e\u6587\u4ef6\u5185\u6dfb\u52a0\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.minbox.framework</groupId>\n  <artifactId>api-boot-starter-mongo-client-settings</artifactId>\n</dependency>\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u5982\u679c\u672a\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot"),"\u7248\u672c\u4f9d\u8d56\uff0c\u8bf7\u8bbf\u95ee",(0,o.kt)("a",{parentName:"p",href:"/docs/out-box/version-rely"},"\u7248\u672c\u4f9d\u8d56"),"\u67e5\u770b\u6dfb\u52a0\u65b9\u5f0f\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"api-boot-starter-mongo-client-settings"),"\u5e76\u4e0d\u80fd\u4ee3\u66ff",(0,o.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-data-mongo"),"\u4f9d\u8d56\uff0c\u53ea\u662f\u9488\u5bf9\u5b83\u7684\u914d\u7f6e\u53c2\u6570\u6269\u5c55\u3002")),(0,o.kt)("h2",{id:"2-\u63d0\u4f9b\u7684\u6269\u5c55\u53c2\u6570"},"2. \u63d0\u4f9b\u7684\u6269\u5c55\u53c2\u6570"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,o.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,o.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.socket.connect-timeout-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null},"10000"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eSocket\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.socket.read-timeout-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null},"10000"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6eSocket\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.socket.receive-buffer-size")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u63a5\u6536\u7f13\u51b2\u533a\u7684\u5927\u5c0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.socket.send-buffer-size")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u53d1\u9001\u7f13\u51b2\u533a\u7684\u5927\u5c0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.heartbeat-socket.connect-timeout-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null},"10000"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5fc3\u8df3Socket\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.heartbeat-socket.read-timeout-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null},"10000"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5fc3\u8df3Socket\u8bfb\u53d6\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.heartbeat-socket.receive-buffer-size")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5fc3\u8df3Socket\u63a5\u6536\u7f13\u51b2\u533a\u7684\u5927\u5c0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.heartbeat-socket.send-buffer-size")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u5fc3\u8df3Socket\u53d1\u9001\u7f13\u51b2\u533a\u7684\u5927\u5c0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.server.min-heartbeat-frequency-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null},"500"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u4e0eServer\u7aef\u4fdd\u6301\u6700\u5c0f\u5fc3\u8df3\u9891\u7387\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.server.heartbeat-frequency-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null},"10000"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u7fa4\u96c6\u76d1\u89c6\u5668\u5c1d\u8bd5\u8bbf\u95ee\u6bcf\u4e2a\u670d\u52a1\u5668\u7684\u65f6\u95f4\u9891\u7387\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.connection-pool.min-size")),(0,o.kt)("td",{parentName:"tr",align:null},"100"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5141\u8bb8\u7684\u6700\u5927\u8fde\u63a5\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.connection-pool.max.size")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u6700\u5c0f\u8fde\u63a5\u6570")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.connection-pool.max-wait-time-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null},"120000"),(0,o.kt)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u7b49\u5f85\u8fde\u63a5\u53ef\u7528\u7684\u6700\u957f\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.connection-pool.max-connection-life-time-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u6c60\u5316\u8fde\u63a5\u53ef\u4ee5\u751f\u5b58\u7684\u6700\u957f\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.connection-pool.max-connection-idle-time-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u6c60\u5316\u8fde\u63a5\u7684\u6700\u5927\u7a7a\u95f2\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.connection-pool.maintenance-frequency-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u7ef4\u62a4\u4f5c\u4e1a\u8fd0\u884c\u4e4b\u95f4\u7684\u65f6\u95f4\u6bb5\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.connection-pool.maintenance-initial-delay-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u5728\u8fde\u63a5\u6c60\u4e0a\u8fd0\u884c\u7b2c\u4e00\u4e2a\u7ef4\u62a4\u4f5c\u4e1a\u4e4b\u524d\u8981\u7b49\u5f85\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.cluster.local-threshold-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null},"15"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u672c\u5730\u9608\u503c\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.cluster.server-selection-timeout-milli-seconds")),(0,o.kt)("td",{parentName:"tr",align:null},"30000"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u9009\u62e9\u670d\u52a1\u5668\u65f6\u8981\u5e94\u7528\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.cluster.mode")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6b64\u96c6\u7fa4\u7684\u6a21\u5f0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.cluster.required-cluster-type")),(0,o.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u96c6\u7fa4\u6240\u9700\u7684\u96c6\u7fa4\u7c7b\u578b")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.cluster.required-replica-set-name")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u96c6\u7fa4\u6240\u9700\u7684\u526f\u672c\u96c6\u540d\u79f0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.ssl.enabled")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u662f\u5426\u5e94\u542f\u7528SSL\u3002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"api.boot.mongo.settings.invalid-host-name-allowed")),(0,o.kt)("td",{parentName:"tr",align:null},"false"),(0,o.kt)("td",{parentName:"tr",align:null},"\u5b9a\u4e49\u662f\u5426\u5e94\u5141\u8bb8\u65e0\u6548\u7684\u4e3b\u673a\u540d\u3002")))),(0,o.kt)("p",null,"\u9488\u5bf9\u8fde\u63a5\u8d85\u65f6\u7684\u95ee\u9898\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"api.boot.mongo.settings.socket"),"\u76f8\u5173\u914d\u7f6e\u53c2\u6570\u6765\u89e3\u51b3\uff0c\u53c2\u8003\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# ApiBoot\u76f8\u5173\u914d\u7f6e\napi:\n  boot:\n    mongo:\n      settings:\n        socket:\n          # \u8bfb\u53d6Server\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\n          read-timeout-milli-seconds: 60000\n          # \u8fde\u63a5Server\u7684\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\uff1a\u6beb\u79d2\n          connect-timeout-milli-seconds: 60000\n")))}s.isMDXComponent=!0},137:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/api-boot-mongo-settings-cfe6b691813505536a86d6240dae7242.png"}}]);