"use strict";(self.webpackChunkapiboot_minbox_org=self.webpackChunkapiboot_minbox_org||[]).push([[8131],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},p=Object.keys(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,k=s["".concat(l,".").concat(m)]||s[m]||d[m]||p;return n?i.createElement(k,a(a({ref:t},c),{},{components:n})):i.createElement(k,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,a=new Array(p);a[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var u=2;u<p;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>o,toc:()=>u});var i=n(7462),r=(n(7294),n(3905));const p={slug:"apiboot-security-open-paths-without-intercept",title:"\u539f\u6765SpringSecurity\u6574\u5408OAuth2\u540e\u5f00\u653e\u6743\u9650\u62e6\u622a\u8def\u5f84\u8fd8\u80fd\u8fd9\u4e48\u73a9\uff1f",authors:"hengboy",tags:["Spring","Spring Security","OAuth2"],date:new Date("2019-12-07T09:18:47.000Z")},a=void 0,o={permalink:"/blog/apiboot-security-open-paths-without-intercept",source:"@site/blog/security/apiboot-security-open-paths-without-intercept.md",title:"\u539f\u6765SpringSecurity\u6574\u5408OAuth2\u540e\u5f00\u653e\u6743\u9650\u62e6\u622a\u8def\u5f84\u8fd8\u80fd\u8fd9\u4e48\u73a9\uff1f",description:"\u5f53\u6211\u4eec\u6574\u5408\u4e86Spring Security\u4ee5\u53caOAuth2\u540e\u53d1\u73b0\uff0c\u6709\u4e00\u4e9b\u4e1a\u52a1\u8bf7\u6c42\u662f\u9700\u8981\u5f00\u653e\u7684\uff0c\u56e0\u4e3a\u79cd\u79cd\u539f\u56e0\u8fd9\u65f6\u8bbf\u95ee\u8005\u8fd8\u6ca1\u6709\u8eab\u4efd\u6807\u8bc6\uff08\u6bd4\u5982\uff1a\u7528\u6237\u521a\u6765\uff0c\u8fd8\u6ca1\u6709\u6ce8\u518c\uff0c\u9700\u8981\u8fdb\u884c\u65b0\u7528\u6237\u6ce8\u518c\uff0c\u8fd9\u65f6\u6ce8\u518c\u4e1a\u52a1\u76f8\u5173\u7684\u63a5\u53e3\u90fd\u5e94\u8be5\u662f\u5f00\u653e\u7684\uff09\uff0c\u4e0b\u9762\u6211\u4eec\u6765\u770b\u770bApiBoot\u662f\u600e\u4e48\u6392\u9664\u8def\u5f84\u4e0d\u8fdb\u884c\u6743\u9650\u62e6\u622a\u7684\u3002",date:"2019-12-07T09:18:47.000Z",formattedDate:"2019\u5e7412\u67087\u65e5",tags:[{label:"Spring",permalink:"/blog/tags/spring"},{label:"Spring Security",permalink:"/blog/tags/spring-security"},{label:"OAuth2",permalink:"/blog/tags/o-auth-2"}],readingTime:5.645,hasTruncateMarker:!0,authors:[{name:"\u6052\u5b87\u5c11\u5e74",title:"ApiBoot\u4f5c\u8005\uff0cminbox-projects\u5f00\u6e90\u7ec4\u7ec7\u8d1f\u8d23\u4eba",url:"https://github.com/minbox-projects",imageURL:"https://blog.minbox.org/images/avatar.png",key:"hengboy"}],frontMatter:{slug:"apiboot-security-open-paths-without-intercept",title:"\u539f\u6765SpringSecurity\u6574\u5408OAuth2\u540e\u5f00\u653e\u6743\u9650\u62e6\u622a\u8def\u5f84\u8fd8\u80fd\u8fd9\u4e48\u73a9\uff1f",authors:"hengboy",tags:["Spring","Spring Security","OAuth2"],date:"2019-12-07T09:18:47.000Z"},prevItem:{title:"\u8fd8\u4e0d\u4f1a\u4f7f\u7528JWT\u683c\u5f0f\u5316OAuth2\u4ee4\u724c\u5417\uff1f",permalink:"/blog/apiboot-security-oauth-use-jwt"},nextItem:{title:"\u81ea\u5b9a\u4e49OAuth2\u77ed\u4fe1\u767b\u5f55GrantType",permalink:"/blog/apiboot-define-oauth-grant-type"}},l={authorsImageUrls:[void 0]},u=[{value:"\u5b98\u65b9\u76f8\u5173\u6587\u6863",id:"\u5b98\u65b9\u76f8\u5173\u6587\u6863",level:2},{value:"\u521b\u5efa\u9879\u76ee",id:"\u521b\u5efa\u9879\u76ee",level:2},{value:"\u6392\u9664\u8def\u5f84\u914d\u7f6e",id:"\u6392\u9664\u8def\u5f84\u914d\u7f6e",level:3},{value:"\u793a\u4f8b\u8bf7\u6c42",id:"\u793a\u4f8b\u8bf7\u6c42",level:3},{value:"\u8fd0\u884c\u6d4b\u8bd5",id:"\u8fd0\u884c\u6d4b\u8bd5",level:2},{value:"\u6d4b\u8bd5\u70b9\uff1a\u5f00\u653e\u8def\u5f84",id:"\u6d4b\u8bd5\u70b9\u5f00\u653e\u8def\u5f84",level:3},{value:"\u6d4b\u8bd5\u70b9\uff1a\u672a\u5f00\u653e\u8def\u5f84\u7684\u62e6\u622a",id:"\u6d4b\u8bd5\u70b9\u672a\u5f00\u653e\u8def\u5f84\u7684\u62e6\u622a",level:3},{value:"\u6572\u9ed1\u677f\uff0c\u5212\u91cd\u70b9",id:"\u6572\u9ed1\u677f\u5212\u91cd\u70b9",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5f53\u6211\u4eec\u6574\u5408\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"Spring Security"),"\u4ee5\u53ca",(0,r.kt)("inlineCode",{parentName:"p"},"OAuth2"),"\u540e\u53d1\u73b0\uff0c\u6709\u4e00\u4e9b\u4e1a\u52a1\u8bf7\u6c42\u662f\u9700\u8981\u5f00\u653e\u7684\uff0c\u56e0\u4e3a\u79cd\u79cd\u539f\u56e0\u8fd9\u65f6\u8bbf\u95ee\u8005\u8fd8\u6ca1\u6709\u8eab\u4efd\u6807\u8bc6\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"\u6bd4\u5982\uff1a\u7528\u6237\u521a\u6765\uff0c\u8fd8\u6ca1\u6709\u6ce8\u518c\uff0c\u9700\u8981\u8fdb\u884c\u65b0\u7528\u6237\u6ce8\u518c\uff0c\u8fd9\u65f6\u6ce8\u518c\u4e1a\u52a1\u76f8\u5173\u7684\u63a5\u53e3\u90fd\u5e94\u8be5\u662f\u5f00\u653e\u7684"),"\uff09\uff0c\u4e0b\u9762\u6211\u4eec\u6765\u770b\u770b",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot"),"\u662f\u600e\u4e48\u6392\u9664\u8def\u5f84\u4e0d\u8fdb\u884c\u6743\u9650\u62e6\u622a\u7684\u3002"),(0,r.kt)("h2",{id:"\u5b98\u65b9\u76f8\u5173\u6587\u6863"},"\u5b98\u65b9\u76f8\u5173\u6587\u6863"),(0,r.kt)("p",null,"\u76f8\u5173",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot Security"),"\u5b98\u65b9\u4f7f\u7528\u6587\u6863\uff0c\u8bf7\u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"https://apiboot.minbox.org/docs/components/api-boot-security.html"},"ApiBoot Security"),"\u3002"),(0,r.kt)("p",null,"\u5728\u6587\u6863\u7684\u7b2c",(0,r.kt)("inlineCode",{parentName:"p"},"4. \u9ed8\u8ba4\u6392\u9664\u8def\u5f84"),"\u90e8\u5206\uff0c\u6211\u4eec\u4e86\u89e3\u5230\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot Security"),"\u4e3a\u4e86\u4e0e\u5176\u4ed6\u7684\u7b2c\u4e09\u65b9\u6846\u67b6\u8fdb\u884c\u96c6\u6210\uff0c\u5728\u5185\u90e8\u5df2\u7ecf\u6dfb\u52a0\u4e86\u4e00\u4e9b",(0,r.kt)("inlineCode",{parentName:"p"},"\u9ed8\u8ba4\u7684\u62e6\u622a\u8def\u5f84"),"\uff0c\u5f53\u6211\u4eec\u5728\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"\u5f00\u653e\u8def\u5f84"),"\u65f6\u4f1a\u5728\u9ed8\u8ba4\u7684\u57fa\u7840\u4e0a",(0,r.kt)("strong",{parentName:"p"},"\u589e\u91cf\u6dfb\u52a0\uff0c\u4e0d\u4f1a\u8986\u76d6"),"\u3002"),(0,r.kt)("h2",{id:"\u521b\u5efa\u9879\u76ee"},"\u521b\u5efa\u9879\u76ee"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"IDEA"),"\u5f00\u53d1\u5de5\u5177\u521b\u5efa\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"SpringBoot"),"\u9879\u76ee\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml"),"\u5185\u6dfb\u52a0\u76f8\u5173\u7684\u4f9d\u8d56\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n  <dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n  </dependency>\n  \x3c!--ApiBoot Security OAuth\u5b89\u5168\u7ec4\u4ef6--\x3e\n  <dependency>\n    <groupId>org.minbox.framework</groupId>\n    <artifactId>api-boot-starter-security-oauth-jwt</artifactId>\n  </dependency>\n\n</dependencies>\n<dependencyManagement>\n  <dependencies>\n    \x3c!--ApiBoot\u7edf\u4e00\u7248\u672c\u4f9d\u8d56--\x3e\n    <dependency>\n      <groupId>org.minbox.framework</groupId>\n      <artifactId>api-boot-dependencies</artifactId>\n      <version>2.2.0.RELEASE</version>\n      <type>pom</type>\n      <scope>import</scope>\n    </dependency>\n  </dependencies>\n</dependencyManagement>\n")),(0,r.kt)("h3",{id:"\u6392\u9664\u8def\u5f84\u914d\u7f6e"},"\u6392\u9664\u8def\u5f84\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot Security OAuth"),"\u5b89\u5168\u7ec4\u4ef6\u9ed8\u8ba4\u62e6\u622a\u914d\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/api/**"),"\uff0c\u4e5f\u5c31\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"/api"),"\u4e0b\u7684\u5168\u90e8\u8def\u5f84\u4ee5\u53ca\u5b50\u8def\u5f84\u90fd\u9700\u8981\u8ba4\u8bc1\u540e\u624d\u53ef\u4ee5\u8bbf\u95ee\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"api.boot.security.auth-prefix"),"\u53c2\u6570\u914d\u7f6e\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"\u4fdd\u62a4\u7684\u8def\u5f84\u5217\u8868"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot"),"\u8fd8\u63d0\u4f9b\u4e86\u53e6\u5916\u7684\u4e00\u4e2a\u53c2\u6570\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"api.boot.security.ignoring-urls"),"\uff0c\u7528\u4e8e\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"\u5f00\u653e\u7684\u8def\u5f84\u5217\u8868"),"\uff08\u5f00\u653e\u8def\u5f84\u53ef\u76f4\u63a5\u8bbf\u95ee\uff0c\u4e0d\u8d70\u6743\u9650\u62e6\u622a\uff09\uff0c\u652f\u6301\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Ant"),"\u98ce\u683c\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u914d\u7f6e\u5185\u5bb9\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  application:\n    name: apiboot-security-open-paths-without-intercept\nserver:\n  port: 9090\n\napi:\n  boot:\n    # ApiBoot Security\u5b89\u5168\u914d\u7f6e\n    security:\n      # \u6743\u9650\u62e6\u622a\u7684\u8def\u5f84\u524d\u7f00\n      auth-prefix: /**\n      # \u6392\u9664\u4e0d\u62e6\u622a\u7684\u8def\u5f84\n      ignoring-urls:\n        - /index/**\n")),(0,r.kt)("p",null,"\u6211\u4eec\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u6587\u4ef6\u5185\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"api.boot.security.ignoring-urls"),"\u7684\u503c\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/index/**"),"\uff0c\u8fd9\u65f6\u6211\u4eec\u5728\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"/index"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"/index/xxx"),"\u8def\u5f84\u65f6\u90fd\u4e0d\u4f1a\u7ecf\u8fc7\u6743\u9650\u7684\u62e6\u622a\uff0c\u76f4\u63a5\u53ef\u4ee5\u8bbf\u95ee\u5230\u3002"),(0,r.kt)("h3",{id:"\u793a\u4f8b\u8bf7\u6c42"},"\u793a\u4f8b\u8bf7\u6c42"),(0,r.kt)("p",null,"\u6211\u4eec\u6765\u521b\u5efa\u4e00\u4e2a\u540d\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"IndexController"),"\u7684\u793a\u4f8b\u63a7\u5236\u5668\uff0c\u6765\u9a8c\u8bc1\u6211\u4eec\u5f00\u653e\u7684\u8def\u5f84\u662f\u5426\u5df2\u7ecf\u751f\u6548\u4e86\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n/**\n * \u793a\u4f8b\uff1a\u63a7\u5236\u5668\n *\n * @author \u6052\u5b87\u5c11\u5e74\n */\n@RestController\n@RequestMapping(value = "/index")\npublic class IndexController {\n    /**\n     * \u793a\u4f8b\uff1a\u9996\u9875\u5730\u5740\n     * /index\n     *\n     * @return\n     */\n    @GetMapping\n    public String index() {\n        return "this is index page.";\n    }\n\n    /**\n     * \u793a\u4f8b\uff1a\u9996\u9875\u5730\u5740\u5b50\u9875\u9762\n     * /index/sub\n     *\n     * @return\n     */\n    @GetMapping(value = "/sub")\n    public String indexSub() {\n        return "this is sub index page.";\n    }\n}\n')),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u6211\u4eec\u914d\u7f6e\u7684\u5f00\u653e\u5730\u5740\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/index/**"),"\uff0c\u6240\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"IndexController"),"\u63a7\u5236\u5668\u5185\u7684\u4e24\u4e2a\u5730\u5740",(0,r.kt)("inlineCode",{parentName:"p"},"/index"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"/index/sub"),"\u90fd\u4f1a\u88ab\u5f00\u653e\uff0c\u4e0d\u8d70\u6743\u9650\u62e6\u622a\uff0c\u76f4\u63a5\u653e\u884c\u3002"),(0,r.kt)("h2",{id:"\u8fd0\u884c\u6d4b\u8bd5"},"\u8fd0\u884c\u6d4b\u8bd5"),(0,r.kt)("p",null,"\u6211\u4eec\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"IDEA"),"\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"XxxApplication"),"\u5165\u53e3\u7c7b\u7684\u65b9\u5f0f\u6765\u542f\u52a8\u672c\u7ae0\u9879\u76ee\u6e90\u7801\uff0c\u4e0b\u9762\u662f\u6211\u4eec\u8981\u9a8c\u8bc1\u7684\u6d4b\u8bd5\u70b9\u3002"),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u70b9\u5f00\u653e\u8def\u5f84"},"\u6d4b\u8bd5\u70b9\uff1a\u5f00\u653e\u8def\u5f84"),(0,r.kt)("p",null,"\u6211\u4eec\u5148\u6765\u8bbf\u95ee\u4e0b",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/index"),"\uff0c\u6548\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c ~ curl http://localhost:9090/index    \nthis is index page.\n")),(0,r.kt)("p",null,"\u76f4\u63a5\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"/index"),"\u662f\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\u63a5\u53e3\u8fd4\u56de\u7684\u5185\u5bb9\uff0c\u8fd9\u4e5f\u8bc1\u660e\u4e86\u4e00\u70b9\uff0c\u8fd9\u4e2a\u5730\u5740\u88ab\u5f00\u653e\u4e86\uff0c\u4e0d\u518d\u88ab\u6743\u9650\u62e6\u622a\u3002"),(0,r.kt)("p",null,"\u5728\u4e4b\u524d\u8bf4\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot Security OAuth"),"\u5f00\u653e\u5730\u5740\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"Ant"),"\u98ce\u683c\uff0c\u6211\u4eec\u914d\u7f6e\u7684\u5f00\u653e\u5730\u5740\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/index/**"),"\uff0c\u6240\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"/index/sub"),"\u8fd9\u4e2a\u8bf7\u6c42\u5730\u5740\u4e5f\u5e94\u8be5\u5df2\u7ecf\u88ab\u5f00\u653e\u4e86\uff0c\u6548\u679c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u279c ~ curl http://localhost:9090/index/sub\nthis is sub index page.\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6211\u4eec\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"p"},"api.boot.security.ignoring-urls"),"\u914d\u7f6e\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/index"),"\uff0c\u6211\u4eec\u5728\u8bbf\u95ee",(0,r.kt)("inlineCode",{parentName:"p"},"/index/sub"),"\u8fd9\u4e2a\u5730\u5740\u65f6\u662f\u6ca1\u6709\u6743\u9650\u7684\uff0c\u9700\u8981\u643a\u5e26\u6709\u6548\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"AccessToken"),"\u624d\u53ef\u4ee5\u8bbf\u95ee\u5230\u3002")),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u70b9\u672a\u5f00\u653e\u8def\u5f84\u7684\u62e6\u622a"},"\u6d4b\u8bd5\u70b9\uff1a\u672a\u5f00\u653e\u8def\u5f84\u7684\u62e6\u622a"),(0,r.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u6765\u5b8c\u6210\u4e00\u4e2a\u6bd4\u8f83\u7279\u6b8a\u7684\u6d4b\u8bd5\u70b9\uff0c\u8bbf\u95ee\u4e00\u4e2a\u5e76\u6ca1\u6709\u5728\u540e\u53f0\u5b9a\u4e49\u7684\u8def\u5f84\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'\u279c ~ curl http://localhost:9090/index/11\n{"error":"unauthorized","error_description":"Full authentication is required to access this resource"}\n')),(0,r.kt)("p",null,"\u6211\u4eec\u5e76\u6ca1\u6709\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"/index/xx"),"\u8fd9\u4e2a\u8bf7\u6c42\u5730\u5740\u7684\u5b9e\u73b0\uff0c\u5f53\u8bbf\u95ee\u65f6\u540c\u6837\u4e5f\u4f1a\u88ab\u62e6\u622a\uff0c\u8fd9\u8bc1\u660e\u4e86\u6211\u4eec\u53d1\u8d77\u7684\u8bf7\u6c42\u5e76\u6ca1\u6709\u5230\u8fbe\u89e3\u6790\u8bf7\u6c42\u5c31\u5df2\u7ecf\u88ab\u6743\u9650\u62e6\u622a\u4e86\u3002"),(0,r.kt)("h2",{id:"\u6572\u9ed1\u677f\u5212\u91cd\u70b9"},"\u6572\u9ed1\u677f\uff0c\u5212\u91cd\u70b9"),(0,r.kt)("p",null,"\u9664\u4e86\u88ab\u5f00\u653e\u7684\u8def\u5f84\u90fd\u9700\u8981\u63d0\u4f9b\u6709\u6548\u7684AccessToken\u624d\u53ef\u4ee5\u8bbf\u95ee\uff0c\u65e0\u8bba\u8fd9\u4e2a\u5730\u5740\u662f\u5426\u5b58\u5728\uff0c\u672c\u7ae0\u4e3a\u4e86\u793a\u4f8b\u8bb2\u89e3\u65b9\u4fbf\u6211\u8fd9\u91cc\u914d\u7f6e\u7684\u6743\u9650\u62e6\u622a\u6839\u5730\u5740\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"/**"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"api.boot.security.auth-paths"),"\u53c2\u6570\u6e90\u7801\u662f\u4e00\u4e2a\u6570\u7ec4\uff08\u8be6\u89c1\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"org.minbox.framework.api.boot.autoconfigure.security.ApiBootSecurityProperties"),"\uff09\uff0c\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u5730\u5740\uff0c\u6bd4\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"/user/**"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"/order/**"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"api.boot.security.ignoring-urls"),"\u540c\u6837\u652f\u6301\u6570\u7ec4\u5f62\u5f0f\u914d\u7f6e\u591a\u4e2a\u3002"),(0,r.kt)("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u559c\u6b22\u672c\u7bc7\u6587\u7ae0\u8bf7\u4e3a\u6e90\u7801\u4ed3\u5e93\u70b9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"Star"),"\uff0c\u8c22\u8c22\uff01\uff01\uff01\n\u672c\u7bc7\u6587\u7ae0\u793a\u4f8b\u6e90\u7801\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u9014\u5f84\u83b7\u53d6\uff0c\u76ee\u5f55\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"apiboot-security-open-paths-without-intercept"),"\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gitee\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://gitee.com/minbox-projects/api-boot-chapter"},"https://gitee.com/minbox-projects/api-boot-chapter"))))}d.isMDXComponent=!0}}]);