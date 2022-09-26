"use strict";(self.webpackChunkapiboot_minbox_org=self.webpackChunkapiboot_minbox_org||[]).push([[6255],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),k=m(n),u=r,c=k["".concat(l,".").concat(u)]||k[u]||s[u]||i;return n?a.createElement(c,o(o({ref:t},d),{},{components:n})):a.createElement(c,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},1375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const i={title:"\u5206\u5e03\u5f0f\u8bf7\u6c42\u6d41\u91cf\u9650\u5236\u5c01\u88c5\u7ec4\u4ef6",sidebar_position:13},o="ApiBoot \u5b9e\u73b0\u5206\u5e03\u5f0f\u4ee4\u724c\u6876\u65b9\u5f0f\u9650\u6d41",p={unversionedId:"components/api-boot-rate-limiter",id:"components/api-boot-rate-limiter",title:"\u5206\u5e03\u5f0f\u8bf7\u6c42\u6d41\u91cf\u9650\u5236\u5c01\u88c5\u7ec4\u4ef6",description:"ApiBoot RateLimiter\u57fa\u4e8e\u62e6\u622a\u5668\u7684\u5b9e\u73b0\uff0c\u5c01\u88c5\u4e86Google\u7684\u4ee4\u724c\u6876\u65b9\u5f0f\u7684\u9650\u6d41\u5b9e\u73b0\uff0c\u53ef\u901a\u8fc7\u6ce8\u89e3\u914d\u7f6e\u6bcf\u4e2a\u63a5\u53e3\u7684\u6d41\u91cfQPS\uff08\u6bcf\u79d2\u5141\u8bb8\u7684\u6d41\u91cf\u8bf7\u6c42\uff09\u3002",source:"@site/docs/components/api-boot-rate-limiter.md",sourceDirName:"components",slug:"/components/api-boot-rate-limiter",permalink:"/docs/components/api-boot-rate-limiter",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{title:"\u5206\u5e03\u5f0f\u8bf7\u6c42\u6d41\u91cf\u9650\u5236\u5c01\u88c5\u7ec4\u4ef6",sidebar_position:13},sidebar:"tutorialSidebar",previous:{title:"\u5206\u5e03\u5f0fID\u751f\u6210\u7ec4\u4ef6",permalink:"/docs/components/api-boot-sequence"},next:{title:"Quartz\u5c01\u88c5\u7ec4\u4ef6",permalink:"/docs/components/api-boot-quartz"}},l={},m=[{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:2},{value:"\u76f8\u5173\u914d\u7f6e",id:"\u76f8\u5173\u914d\u7f6e",level:2},{value:"QPS\u5b9a\u4e49",id:"qps\u5b9a\u4e49",level:2},{value:"\u5355\u670d\u52a1\u9650\u6d41",id:"\u5355\u670d\u52a1\u9650\u6d41",level:2},{value:"\u5206\u5e03\u5f0f\u670d\u52a1\u9650\u6d41",id:"\u5206\u5e03\u5f0f\u670d\u52a1\u9650\u6d41",level:2},{value:"\u7b2c\u4e00\u6b65\uff1a\u6dfb\u52a0Redis\u4f9d\u8d56",id:"\u7b2c\u4e00\u6b65\u6dfb\u52a0redis\u4f9d\u8d56",level:4},{value:"\u7b2c\u4e8c\u6b65\uff1a\u914d\u7f6eRedis",id:"\u7b2c\u4e8c\u6b65\u914d\u7f6eredis",level:4},{value:"\u6d4b\u8bd5\u9650\u6d41",id:"\u6d4b\u8bd5\u9650\u6d41",level:3},{value:"\u81ea\u5b9a\u4e49\u6d41\u91cf\u6ea2\u51fa\u54cd\u5e94",id:"\u81ea\u5b9a\u4e49\u6d41\u91cf\u6ea2\u51fa\u54cd\u5e94",level:2},{value:"\u914d\u7f6e\u4e2d\u5fc3\u652f\u6301",id:"\u914d\u7f6e\u4e2d\u5fc3\u652f\u6301",level:2},{value:"Nacos \u914d\u7f6e\u4e2d\u5fc3",id:"nacos-\u914d\u7f6e\u4e2d\u5fc3",level:3},{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56-1",level:4},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:4},{value:"\u6d4b\u8bd5\u52a8\u6001\u4fee\u6539",id:"\u6d4b\u8bd5\u52a8\u6001\u4fee\u6539",level:4}],d={toc:m};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apiboot-\u5b9e\u73b0\u5206\u5e03\u5f0f\u4ee4\u724c\u6876\u65b9\u5f0f\u9650\u6d41"},"ApiBoot \u5b9e\u73b0\u5206\u5e03\u5f0f\u4ee4\u724c\u6876\u65b9\u5f0f\u9650\u6d41"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot RateLimiter"),"\u57fa\u4e8e\u62e6\u622a\u5668\u7684\u5b9e\u73b0\uff0c\u5c01\u88c5\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Google"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"\u4ee4\u724c\u6876\u65b9\u5f0f"),"\u7684\u9650\u6d41\u5b9e\u73b0\uff0c\u53ef\u901a\u8fc7\u6ce8\u89e3\u914d\u7f6e\u6bcf\u4e2a\u63a5\u53e3\u7684\u6d41\u91cf",(0,r.kt)("inlineCode",{parentName:"p"},"QPS"),"\uff08\u6bcf\u79d2\u5141\u8bb8\u7684\u6d41\u91cf\u8bf7\u6c42\uff09\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u76ee\u524d\u4e0d\u652f\u6301\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u6d41\u91cf\u9650\u5236\uff0c\u4f1a\u5728\u4e0b\u4e2a\u7248\u672c\u8fdb\u884c\u66f4\u65b0\u6dfb\u52a0\u3002")),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!--ApiBoot RateLimiter--\x3e\n  <dependency>\n    <groupId>org.minbox.framework</groupId>\n    <artifactId>api-boot-starter-rate-limiter</artifactId>\n  </dependency>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u672a\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot"),"\u7248\u672c\u4f9d\u8d56\uff0c\u8bf7\u8bbf\u95ee",(0,r.kt)("a",{parentName:"p",href:"/docs/out-box/version-rely"},"\u7248\u672c\u4f9d\u8d56"),"\u67e5\u770b\u6dfb\u52a0\u65b9\u5f0f\u3002")),(0,r.kt)("h2",{id:"\u76f8\u5173\u914d\u7f6e"},"\u76f8\u5173\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"api.boot.rate-limiter.interceptor-url")),(0,r.kt)("td",{parentName:"tr",align:null},"/**"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u7ec4\u7c7b\u578b\uff0c\u53ef\u914d\u7f6e\u591a\u4e2a\u9650\u6d41\u7684\u8def\u5f84\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"api.boot.rate-limiter.enable-global-qps")),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u5f00\u542f\u5168\u5c40\u9650\u6d41\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"api.boot.rate-limiter.global-qps")),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5168\u5c40\u9650\u6d41QPS")))),(0,r.kt)("h2",{id:"qps\u5b9a\u4e49"},"QPS\u5b9a\u4e49"),(0,r.kt)("p",null,"\u9650\u6d41\u6ce8\u89e3",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimiter"),"\u914d\u7f6e\u4f7f\u7528\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@RestController\n@RequestMapping(value = "/resource")\npublic class ResourceSampleController {\n    /**\n     * QPS = 10\n     * \u914d\u7f6e\u8be5\u63a5\u53e3\u6bcf\u79d2\u53ea\u5141\u8bb8\u8bbf\u95ee10\u6b21\n     *\n     * @return\n     */\n    @RequestMapping(value = "/")\n    @RateLimiter(QPS = 10)\n    public UserInfo user() {\n        return new UserInfo("admin");\n    }\n}\n')),(0,r.kt)("h2",{id:"\u5355\u670d\u52a1\u9650\u6d41"},"\u5355\u670d\u52a1\u9650\u6d41"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5355\u4e2a\u670d\u52a1\u7684\u573a\u666f\u4f7f\u7528\u9650\u6d41\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot RateLimiter"),"\u5185\u90e8\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Google Guava"),"\u91c7\u7528\u4ee4\u724c\u6876\u7684\u65b9\u5f0f\u5b9e\u73b0\uff0c\u5177\u4f53\u6e90\u7801\u5b9e\u73b0\u8be6\u89c1",(0,r.kt)("inlineCode",{parentName:"p"},"GoogleGuavaRateLimiter"),"\u7c7b\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f15\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot RateLimiter"),"\u7684\u9879\u76ee\u5982\u679c\u5e76\u672a\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"spring-boot-starter-data-redis"),"\u4f9d\u8d56\uff0c\u9879\u76ee\u4e2d\u5e76\u672a\u521d\u59cb\u5316",(0,r.kt)("inlineCode",{parentName:"p"},"RedisTemplate"),"\u65f6\u5219\u4f1a\u91c7\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Google Guava"),"\u65b9\u5f0f\u6765\u8fdb\u884c\u9650\u6d41\u3002")),(0,r.kt)("h2",{id:"\u5206\u5e03\u5f0f\u670d\u52a1\u9650\u6d41"},"\u5206\u5e03\u5f0f\u670d\u52a1\u9650\u6d41"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u91c7\u7528\u5fae\u670d\u52a1\u3001\u8d1f\u8f7d\u5747\u8861\u7684\u65b9\u5f0f\u8fdb\u884c\u90e8\u7f72\u670d\u52a1\u65f6\uff0c\u5355\u670d\u52a1\u9650\u6d41\u662f\u65e0\u6cd5\u5b8c\u6210\u9884\u671f\u7684\u6548\u679c\u7684\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot RateLimiter"),"\u5185\u90e8\u96c6\u6210\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Redis"),"\u65b9\u5f0f\u6765\u81ea\u52a8\u5b8c\u6210\u9650\u6d41\uff0c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Redis"),"\u540e\u671f\u4e5f\u5229\u4e8e\u6269\u5c55\uff0c\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u8fc7\u5927\u4e5f\u53ef\u4ee5\u642d\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"Redis \u96c6\u7fa4"),"\u5b8c\u6210\u9650\u6d41\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot RateLimiter"),"\u5185\u90e8\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Redis"),"\u4f7f\u7528\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"SpringCloud GateWay"),"\u5b98\u65b9\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Lua"),"\u811a\u672c\u6765\u4fdd\u8bc1\u9650\u6d41\u7684\u539f\u5b50\u6027\u3001\u7ebf\u7a0b\u5b89\u5168\u6027\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Redis"),"\u65b9\u5f0f\u5f88\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u9879\u76ee\u4e2d\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"Redis"),"\u4f9d\u8d56\u540e\u8fdb\u884c\u914d\u7f6e\u540e",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot RateLimiter"),"\u5c31\u4f1a\u81ea\u52a8\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"RedisTemplate"),"\u6765\u64cd\u4f5c",(0,r.kt)("inlineCode",{parentName:"p"},"Lua"),"\u811a\u672c\uff0c\u6b65\u9aa4\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("h4",{id:"\u7b2c\u4e00\u6b65\u6dfb\u52a0redis\u4f9d\u8d56"},"\u7b2c\u4e00\u6b65\uff1a\u6dfb\u52a0Redis\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--Redis--\x3e\n<dependency>\n  <groupId>org.springframework.boot</groupId>\n  <artifactId>spring-boot-starter-data-redis</artifactId>\n</dependency>\n")),(0,r.kt)("h4",{id:"\u7b2c\u4e8c\u6b65\u914d\u7f6eredis"},"\u7b2c\u4e8c\u6b65\uff1a\u914d\u7f6eRedis"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  # redis \u76f8\u5173\u914d\u7f6e\n  redis:\n    password: 123456\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u4f60\u6240\u4f7f\u7528\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Redis"),"\u6709\u5bc6\u7801\uff0c\u8fd9\u91cc\u9700\u8981\u8fdb\u884c\u914d\u7f6e\uff0c\u5176\u4ed6\u914d\u7f6e\u53c2\u6570\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002")),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u9650\u6d41"},"\u6d4b\u8bd5\u9650\u6d41"),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u8bbf\u95ee\u88ab\u9650\u6d41\u7684\u63a5\u53e3\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot RateLimiter"),"\u4f1a\u81ea\u52a8\u5411",(0,r.kt)("inlineCode",{parentName:"p"},"Redis"),"\u5199\u5165\u4e24\u6761\u6570\u636e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"// redis key list\nqps_rate_limiter.{/test/}.timestamp\nqps_rate_limiter.{/test/}.tokens\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"qps_rate_limiter.{/test/}.timestamp"),"\uff1a\u5b58\u653e\u4e0a\u4e00\u6b21\u8bf7\u6c42\u7684\u65f6\u95f4\u6233"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"qps_rate_limiter.{/test/}.tokens"),"\uff1a\u5b58\u653e\u5269\u4f59\u7684\u8bf7\u6c42\u4ee4\u724c\u6570\u91cf")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u7684\u683c\u5f0f\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"qps_rate_limiter.{xxx}.timestamp"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"qps_rate_limiter.{xxx}.tokens"),"\u3002"),(0,r.kt)("p",null,"\u5176\u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"xxx"),"\u4e3a\u8bf7\u6c42\u63a5\u53e3\u7684\u8def\u5f84\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5f53\u7136\u5355\u670d\u52a1\u5b9e\u4f8b\u4e5f\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"strong"},"Redis"),"\u65b9\u5f0f")),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u6d41\u91cf\u6ea2\u51fa\u54cd\u5e94"},"\u81ea\u5b9a\u4e49\u6d41\u91cf\u6ea2\u51fa\u54cd\u5e94"),(0,r.kt)("p",null,"\u6d41\u91cf\u88ab\u9650\u5236\u540e\u53ef\u4ee5\u81ea\u5b9a\u4e49\u54cd\u5e94\u7684\u5b9e\u4f53\u6765\u544a\u77e5\u8bf7\u6c42\u53d1\u8d77\u7aef\uff0c\u65b9\u4fbf\u505a\u4e00\u4e9b\u4e1a\u52a1\u6027\u8d28\u7684\u5904\u7406\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'import org.minbox.framework.api.boot.common.model.ApiBootResult;\nimport org.minbox.framework.api.boot.plugin.rate.limiter.result.RateLimiterOverFlowResponse;\nimport org.springframework.stereotype.Component;\n\n/**\n * \u81ea\u5b9a\u4e49\u6d41\u91cf\u6ea2\u51fa\u540e\u54cd\u5e94\u7684\u5b9e\u4f53\u683c\u5f0f\n *\n * @author\uff1a\u6052\u5b87\u5c11\u5e74 - \u4e8e\u8d77\u5b87\n * <p>\n * DateTime\uff1a2019-05-25 16:21\n * Blog\uff1ahttps://blog.yuqiyu.com\n * WebSite\uff1ahttp://www.jianshu.com/u/092df3f77bca\n * Gitee\uff1ahttps://gitee.com/hengboy\n * GitHub\uff1ahttps://github.com/hengboy\n */\n@Component\npublic class CustomerResponse implements RateLimiterOverFlowResponse {\n    @Override\n    public Object overflow(Object[] methodArgs) {\n        return ApiBootResult.builder().errorCode("REQUEST_OVER_FLOW").errorMessage("\u6d41\u91cf\u88ab\u9650\u5236.").build();\n    }\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"overflow"),"\u65b9\u6cd5\u53ef\u8fd4\u56de\u4efb\u610f\u7c7b\u578b\u5bf9\u8c61\u3002")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u4e2d\u5fc3\u652f\u6301"},"\u914d\u7f6e\u4e2d\u5fc3\u652f\u6301"),(0,r.kt)("p",null,"\u4e3a\u4e86\u4fdd\u8bc1\u6709\u524d\u77bb\u6027\u7a81\u53d1\u6d41\u91cf\u7684\u5904\u7406\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot RateLimiter"),"\u652f\u6301\u4e86\u5916\u90e8\u914d\u7f6e\u4e2d\u5fc3\uff0c\u5728\u914d\u7f6e\u4e2d\u5fc3\u4fee\u6539\u63a5\u53e3\u9650\u6d41",(0,r.kt)("inlineCode",{parentName:"p"},"QPS"),"\u540e\u4f1a\u5b9e\u65f6\u66f4\u65b0\u5230\u5e94\u7528\u7a0b\u5e8f\u5185\u3002"),(0,r.kt)("h3",{id:"nacos-\u914d\u7f6e\u4e2d\u5fc3"},"Nacos \u914d\u7f6e\u4e2d\u5fc3"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos Config"),"\u4f5c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot RateLimiter"),"\u7684\u5916\u90e8",(0,r.kt)("inlineCode",{parentName:"p"},"QPS"),"\u914d\u7f6e\u65b9\u5f0f\uff0c\u90a3\u4e48\u6211\u4eec\u9700\u8981\u8fdb\u884c\u4e0b\u9762\u7684\u6b65\u9aa4\u6765\u5b8c\u6210\uff1a"),(0,r.kt)("h4",{id:"\u6dfb\u52a0\u4f9d\u8d56-1"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--Nacos--\x3e\n<dependency>\n  <groupId>com.alibaba.boot</groupId>\n  <artifactId>nacos-config-spring-boot-starter</artifactId>\n</dependency>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot"),"\u5185\u7f6e\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos Starter"),"\u7684\u7248\u672c\uff0c\u8fd9\u91cc\u65e0\u9700\u6dfb\u52a0\u7248\u672c\u53f7\u3002")),(0,r.kt)("h4",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("p",null,"\u6211\u4eec\u6dfb\u52a0\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos"),"\u4f9d\u8d56\uff0c\u90a3\u9700\u8981\u8fdb\u884c\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos Server"),"\u7684\u5730\u5740\uff0c\u5177\u4f53",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos Server"),"\u600e\u4e48\u5b89\u88c5\uff0c\u53ef\u4ee5\u53bb\u770b\u6211\u7684\u535a\u5ba2\u6587\u7ae0\u6216\u8005\u76f4\u63a5\u8bbf\u95ee",(0,r.kt)("a",{parentName:"p",href:"https://nacos.io/zh-cn/docs/quick-start.html"},"Nacos \u5feb\u901f\u5f00\u59cb")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Nacos\u5728application.yml"),"\u914d\u7f6e\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# nacos config\nnacos:\n  config:\n    server-addr: 127.0.0.1:8848\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"8848"),"\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos Server"),"\u7684\u9ed8\u8ba4\u7aef\u53e3\u53f7\uff0c\u8fd9\u91cc\u76f4\u63a5\u914d\u7f6e\u4f7f\u7528\u3002"),(0,r.kt)("h4",{id:"\u6d4b\u8bd5\u52a8\u6001\u4fee\u6539"},"\u6d4b\u8bd5\u52a8\u6001\u4fee\u6539"),(0,r.kt)("p",null,"\u6211\u4eec\u5728\u542f\u52a8\u5e94\u7528\u7a0b\u5e8f\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot RateLimiter"),"\u4f1a\u81ea\u52a8\u4ece",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos"),"\u8bfb\u53d6",(0,r.kt)("inlineCode",{parentName:"p"},"DATA_ID"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"apiboot-rate-limiter-config"),"\u7684\u914d\u7f6e\uff0c\u5206\u7ec4\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"DEFAULT_GROUP"),"\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"Properties"),"\u7c7b\u578b\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u7136\u540e",(0,r.kt)("strong",{parentName:"p"},"\u7f13\u5b58\u5230\u672c\u5730"),"\u3002"),(0,r.kt)("p",null,"\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos"),"\u5e76\u6ca1\u6709\u8be5\u914d\u7f6e\u6587\u4ef6\uff0c\u5219\u5728",(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b21\u8bbf\u95ee\u63a5\u53e3\u65f6\u81ea\u52a8\u521b\u5efa"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://image.yuqiyu.com/apiboot/rate-limiter-nacos-config.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apiboot-rate-limiter-config"),"\u914d\u7f6e\u6587\u4ef6\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Properties"),"\u5f62\u5f0f\u7684\u5b58\u50a8\u7684\uff0c\u90a3\u4e48",(0,r.kt)("inlineCode",{parentName:"p"},"Key"),"\u7684\u751f\u6210\u89c4\u5219\u5219\u662f\u628a\u8bf7\u6c42\u63a5\u53e3\u5730\u5740\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"/"),"\u66ff\u6362\u4e3a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"."),"\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},".resource.=50\n.resource.detail=10\n")),(0,r.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u6d4b\u8bd5\u4fee\u6539\u914d\u7f6e\u540e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot RateLimiter"),"\u662f\u5426\u53ef\u4ee5\u5b9e\u65f6\u751f\u6548\uff0c\u5c06",(0,r.kt)("inlineCode",{parentName:"p"},".resource."),"\u4fee\u6539\u4e3a20\u540e\uff0c\u63a7\u5236\u53f0\u4f1a\u6253\u5370\u5982\u4e0b\u65e5\u5fd7\u4fe1\u606f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Update local current RateLimiter configuration is complete\uff0ccontent\uff1a{.resource.=20, .resource.detail=10}\n")),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u518d\u6b21\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"/resource/"),"\u63a5\u53e3\u65f6\u5c31\u4f1a\u53d1\u73b0\u9650\u6d41\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"QPS"),"\u4e00\u79d2\u5185\u53ea\u5141\u8bb8\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"20"),"\u6b21\u3002"))}s.isMDXComponent=!0}}]);