"use strict";(self.webpackChunkapiboot_minbox_org=self.webpackChunkapiboot_minbox_org||[]).push([[395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=u(r),g=o,y=m["".concat(p,".").concat(g)]||m[g]||l[g]||i;return r?n.createElement(y,a(a({ref:t},s),{},{components:r})):n.createElement(y,a({ref:t},s))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const i={slug:"apiboot-security-customize-select-user",title:"ApiBoot\u96f6\u4ee3\u7801\u6574\u5408Spring Security\u7684JDBC\u65b9\u5f0f\u83b7\u53d6AccessToken",authors:"hengboy",tags:["Spring","Spring Security","OAuth2"],date:new Date("2019-11-29T12:34:41.000Z")},a=void 0,c={permalink:"/blog/apiboot-security-customize-select-user",source:"@site/blog/security/apiboot-security-customize-select-user.md",title:"ApiBoot\u96f6\u4ee3\u7801\u6574\u5408Spring Security\u7684JDBC\u65b9\u5f0f\u83b7\u53d6AccessToken",description:"ApiBoot Security\u5185\u90e8\u63d0\u4f9b\u4e86\u4e24\u79cd\u65b9\u5f0f\u8fdb\u884c\u8bfb\u53d6\u9700\u8981\u8ba4\u8bc1\u7684\u7528\u6237\u4fe1\u606f\uff0c\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\u8bb2\u5230\u8fc7ApiBoot Security\u4f7f\u7528\u5185\u5b58\u65b9\u5f0f\uff08memory\uff09\u4e0d\u5199\u4e00\u884c\u4ee3\u7801\u5c31\u53ef\u4ee5\u5b9e\u73b0\u7528\u6237\u7684\u8ba4\u8bc1\u5e76\u83b7\u53d6AccessToken\uff0c\u90a3\u6211\u4eec\u4f7f\u7528JDBC\u65b9\u5f0f\u662f\u4e0d\u662f\u4e5f\u662f\u8fd9\u4e48\u7684\u7b80\u5355\u5462\uff1f",date:"2019-11-29T12:34:41.000Z",formattedDate:"2019\u5e7411\u670829\u65e5",tags:[{label:"Spring",permalink:"/blog/tags/spring"},{label:"Spring Security",permalink:"/blog/tags/spring-security"},{label:"OAuth2",permalink:"/blog/tags/o-auth-2"}],readingTime:5.725,hasTruncateMarker:!0,authors:[{name:"\u6052\u5b87\u5c11\u5e74",title:"ApiBoot\u4f5c\u8005\uff0cminbox-projects\u5f00\u6e90\u7ec4\u7ec7\u8d1f\u8d23\u4eba",url:"https://github.com/minbox-projects",imageURL:"https://blog.minbox.org/images/avatar.png",key:"hengboy"}],frontMatter:{slug:"apiboot-security-customize-select-user",title:"ApiBoot\u96f6\u4ee3\u7801\u6574\u5408Spring Security\u7684JDBC\u65b9\u5f0f\u83b7\u53d6AccessToken",authors:"hengboy",tags:["Spring","Spring Security","OAuth2"],date:"2019-11-29T12:34:41.000Z"},prevItem:{title:"\u89c1\u8fc7\u8fd9\u4e48\u7b80\u5355\u7684\u65b9\u5f0f\u6574\u5408SpringSecurity & OAuth2\u7684\u81ea\u5b9a\u4e49\u67e5\u8be2\u7528\u6237\u5417\uff1f",permalink:"/blog/apiboot-security-oauth-custom-certification-user"},nextItem:{title:"\u96f6\u4ee3\u7801\u6574\u5408Spring Security & OAuth2",permalink:"/blog/apiboot-security-oauth-zero-code-integration"}},p={authorsImageUrls:[void 0]},u=[],s={toc:u};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot Security"),"\u5185\u90e8\u63d0\u4f9b\u4e86",(0,o.kt)("strong",{parentName:"p"},"\u4e24\u79cd\u65b9\u5f0f"),"\u8fdb\u884c\u8bfb\u53d6\u9700\u8981\u8ba4\u8bc1\u7684\u7528\u6237\u4fe1\u606f\uff0c\u5728\u4e4b\u524d\u7684\u6587\u7ae0\u4e2d\u8bb2\u5230\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot Security"),"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"\u5185\u5b58\u65b9\u5f0f\uff08memory\uff09"),(0,o.kt)("strong",{parentName:"p"},"\u4e0d\u5199\u4e00\u884c\u4ee3\u7801"),"\u5c31\u53ef\u4ee5\u5b9e\u73b0\u7528\u6237\u7684\u8ba4\u8bc1\u5e76\u83b7\u53d6",(0,o.kt)("inlineCode",{parentName:"p"},"AccessToken"),"\uff0c\u90a3\u6211\u4eec\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"JDBC"),"\u65b9\u5f0f\u662f\u4e0d\u662f\u4e5f\u662f\u8fd9\u4e48\u7684\u7b80\u5355\u5462\uff1f"))}l.isMDXComponent=!0}}]);