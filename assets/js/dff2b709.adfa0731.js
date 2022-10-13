"use strict";(self.webpackChunkapiboot_minbox_org=self.webpackChunkapiboot_minbox_org||[]).push([[1299],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),g=c(r),m=o,y=g["".concat(l,".").concat(m)]||g[m]||s[m]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},9395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={slug:"apiboot-define-oauth-grant-type",title:"\u81ea\u5b9a\u4e49OAuth2\u77ed\u4fe1\u767b\u5f55GrantType",authors:"hengboy",tags:["Spring","Spring Security","OAuth2"],date:new Date("2019-12-04T09:18:26.000Z")},i=void 0,p={permalink:"/blog/apiboot-define-oauth-grant-type",source:"@site/blog/security/apiboot-define-oauth-grant-type.md",title:"\u81ea\u5b9a\u4e49OAuth2\u77ed\u4fe1\u767b\u5f55GrantType",description:"Spring\u63d0\u4f9b\u7684\u539f\u751f\u7684OAuth2\u4f9d\u8d56\u5185\u7f6e\u4e86\u51e0\u79cd\u6bd4\u8f83\u5e38\u7528\u7684\u6388\u6743\u65b9\u5f0f\uff1apassword\u3001authorization-code\u3001clientcredentials\u3001refreshtoken\u3001implicit\u7b49\uff0c\u867d\u7136\u53ef\u4ee5\u6ee1\u8db3\u6211\u4eec\u65e5\u5e38\u7684\u9700\u6c42\uff0c\u4e0d\u8fc7\u9488\u5bf9\u4e00\u4e9b\u7279\u6b8a\u7684\u9700\u6c42\u8fd8\u662f\u6349\u895f\u89c1\u8098\uff0c\u6709\u70b9\u65e0\u5948\uff0c\u6bd4\u5982\uff1a\u5fae\u4fe1\u767b\u5f55\u3001\u77ed\u4fe1\u767b\u5f55...\uff0c\u9488\u5bf9\u8fd9\u4e00\u70b9ApiBoot\u901a\u8fc7\u4fee\u6539Spring OAuth2\u4f9d\u8d56\u7684\u6e90\u7801\uff0c\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u8fdb\u884c\u81ea\u5b9a\u4e49\u6dfb\u52a0grantType\u3002",date:"2019-12-04T09:18:26.000Z",formattedDate:"2019\u5e7412\u67084\u65e5",tags:[{label:"Spring",permalink:"/blog/tags/spring"},{label:"Spring Security",permalink:"/blog/tags/spring-security"},{label:"OAuth2",permalink:"/blog/tags/o-auth-2"}],readingTime:9.39,hasTruncateMarker:!0,authors:[{name:"\u6052\u5b87\u5c11\u5e74",title:"ApiBoot\u4f5c\u8005\uff0cminbox-projects\u5f00\u6e90\u7ec4\u7ec7\u8d1f\u8d23\u4eba",url:"https://github.com/minbox-projects",imageURL:"https://blog.minbox.org/images/avatar.png",key:"hengboy"}],frontMatter:{slug:"apiboot-define-oauth-grant-type",title:"\u81ea\u5b9a\u4e49OAuth2\u77ed\u4fe1\u767b\u5f55GrantType",authors:"hengboy",tags:["Spring","Spring Security","OAuth2"],date:"2019-12-04T09:18:26.000Z"},prevItem:{title:"\u539f\u6765SpringSecurity\u6574\u5408OAuth2\u540e\u5f00\u653e\u6743\u9650\u62e6\u622a\u8def\u5f84\u8fd8\u80fd\u8fd9\u4e48\u73a9\uff1f",permalink:"/blog/apiboot-security-open-paths-without-intercept"},nextItem:{title:"\u89c1\u8fc7\u8fd9\u4e48\u7b80\u5355\u7684\u65b9\u5f0f\u6574\u5408SpringSecurity & OAuth2\u7684\u81ea\u5b9a\u4e49\u67e5\u8be2\u7528\u6237\u5417\uff1f",permalink:"/blog/apiboot-security-oauth-custom-certification-user"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Spring"),"\u63d0\u4f9b\u7684\u539f\u751f\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"OAuth2"),"\u4f9d\u8d56\u5185\u7f6e\u4e86\u51e0\u79cd\u6bd4\u8f83\u5e38\u7528\u7684\u6388\u6743\u65b9\u5f0f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"password"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"authorization-code"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"client_credentials"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"refresh_token"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"implicit"),"\u7b49\uff0c\u867d\u7136\u53ef\u4ee5\u6ee1\u8db3\u6211\u4eec\u65e5\u5e38\u7684\u9700\u6c42\uff0c\u4e0d\u8fc7\u9488\u5bf9\u4e00\u4e9b\u7279\u6b8a\u7684\u9700\u6c42\u8fd8\u662f\u6349\u895f\u89c1\u8098\uff0c\u6709\u70b9\u65e0\u5948\uff0c\u6bd4\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"\u5fae\u4fe1\u767b\u5f55"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"\u77ed\u4fe1\u767b\u5f55"),"...\uff0c\u9488\u5bf9\u8fd9\u4e00\u70b9",(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot"),"\u901a\u8fc7\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"p"},"Spring OAuth2"),"\u4f9d\u8d56\u7684\u6e90\u7801\uff0c\u53ef\u4ee5\u6839\u636e\u4e1a\u52a1\u8fdb\u884c\u81ea\u5b9a\u4e49\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"grantType"),"\u3002"))}s.isMDXComponent=!0}}]);