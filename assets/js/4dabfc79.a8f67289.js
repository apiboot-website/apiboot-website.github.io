"use strict";(self.webpackChunkapiboot_minbox_org=self.webpackChunkapiboot_minbox_org||[]).push([[4849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=r.createContext({}),l=function(e){var t=r.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(g.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,g=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=l(n),m=o,f=s["".concat(g,".").concat(m)]||s[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var p={};for(var g in t)hasOwnProperty.call(t,g)&&(p[g]=t[g]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7949:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>g,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={slug:"apiboot-logging-using-openfeign-transparent-traceid",title:"ApiBoot Logging\u4f7f\u7528SpringCloud Openfeign\u900f\u4f20\u94fe\u8def\u4fe1\u606f",authors:"hengboy",tags:["Log"],date:new Date("2019-11-05T15:47:14.000Z")},a=void 0,p={permalink:"/blog/apiboot-logging-using-openfeign-transparent-traceid",source:"@site/blog/logging/apiboot-logging-using-openfeign-transparent-traceid.md",title:"ApiBoot Logging\u4f7f\u7528SpringCloud Openfeign\u900f\u4f20\u94fe\u8def\u4fe1\u606f",description:"ApiBoot Logging\u53ef\u4ee5\u65e0\u7f1d\u6574\u5408SpringCloud\u6765\u91c7\u96c6\u8bf7\u6c42\u65e5\u5fd7\uff0c\u76ee\u524d\u652f\u6301RestTemplate\u3001Openfeign\u4e24\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u672c\u7ae0\u6765\u8bb2\u89e3\u4e0b\u5728\u4f7f\u7528Openfeign\u5b8c\u6210\u670d\u52a1\u4e4b\u95f4\u8bf7\u6c42\u76f8\u4e92\u8c03\u7528\u7684\u4e00\u6761\u94fe\u8def\u8bf7\u6c42\u65e5\u5fd7\u662f\u5426\u53ef\u4ee5\u90fd\u91c7\u96c6\u5230\u3002",date:"2019-11-05T15:47:14.000Z",formattedDate:"2019\u5e7411\u67085\u65e5",tags:[{label:"Log",permalink:"/blog/tags/log"}],readingTime:10.6,hasTruncateMarker:!0,authors:[{name:"\u6052\u5b87\u5c11\u5e74",title:"ApiBoot\u4f5c\u8005\uff0cminbox-projects\u5f00\u6e90\u7ec4\u7ec7\u8d1f\u8d23\u4eba",url:"https://github.com/minbox-projects",imageURL:"https://blog.minbox.org/images/avatar.png",key:"hengboy"}],frontMatter:{slug:"apiboot-logging-using-openfeign-transparent-traceid",title:"ApiBoot Logging\u4f7f\u7528SpringCloud Openfeign\u900f\u4f20\u94fe\u8def\u4fe1\u606f",authors:"hengboy",tags:["Log"],date:"2019-11-05T15:47:14.000Z"},prevItem:{title:"ApiBoot Logging\u4f7f\u7528RestTemplate\u900f\u4f20\u94fe\u8def\u4fe1\u606f",permalink:"/blog/apiboot-logging-using-resttemplate-transparent-traceid"},nextItem:{title:"ApiBoot Logging\u6574\u5408SpringCloud Eureka\u8d1f\u8f7d\u5747\u8861\u4e0a\u62a5\u65e5\u5fd7",permalink:"/blog/apiboot-logging-integrates-eureka-report-logs"}},g={authorsImageUrls:[void 0]},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u53ef\u4ee5\u65e0\u7f1d\u6574\u5408",(0,o.kt)("inlineCode",{parentName:"p"},"SpringCloud"),"\u6765\u91c7\u96c6\u8bf7\u6c42\u65e5\u5fd7\uff0c\u76ee\u524d\u652f\u6301",(0,o.kt)("inlineCode",{parentName:"p"},"RestTemplate"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Openfeign"),"\u4e24\u79cd\u65b9\u5f0f\uff0c\u6211\u4eec\u672c\u7ae0\u6765\u8bb2\u89e3\u4e0b\u5728\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Openfeign"),"\u5b8c\u6210\u670d\u52a1\u4e4b\u95f4\u8bf7\u6c42\u76f8\u4e92\u8c03\u7528\u7684\u4e00\u6761\u94fe\u8def\u8bf7\u6c42\u65e5\u5fd7\u662f\u5426\u53ef\u4ee5\u90fd\u91c7\u96c6\u5230\u3002"))}u.isMDXComponent=!0}}]);