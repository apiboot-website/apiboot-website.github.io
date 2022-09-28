"use strict";(self.webpackChunkapiboot_minbox_org=self.webpackChunkapiboot_minbox_org||[]).push([[214],{3905:(e,n,o)=>{o.d(n,{Zo:()=>c,kt:()=>d});var l=o(7294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,l)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function g(e,n){if(null==e)return{};var o,l,t=function(e,n){if(null==e)return{};var o,l,t={},a=Object.keys(e);for(l=0;l<a.length;l++)o=a[l],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)o=a[l],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var i=l.createContext({}),p=function(e){var n=l.useContext(i),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},c=function(e){var n=p(e.components);return l.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,c=g(e,["components","mdxType","originalType","parentName"]),s=p(o),d=t,u=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return o?l.createElement(u,r(r({ref:n},c),{},{components:o})):l.createElement(u,r({ref:n},c))}));function d(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,r=new Array(a);r[0]=s;var g={};for(var i in n)hasOwnProperty.call(n,i)&&(g[i]=n[i]);g.originalType=e,g.mdxType="string"==typeof e?e:t,r[1]=g;for(var p=2;p<a;p++)r[p]=o[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,o)}s.displayName="MDXCreateElement"},2381:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>g,toc:()=>p});var l=o(7462),t=(o(7294),o(3905));const a={slug:"apiboot-logging-use-global-log",title:"ApiBoot\u65b0\u7279\u6027GlobalLogging\u8be6\u89e3",authors:"hengboy",tags:["Log"],date:new Date("2019-12-17T10:12:47.000Z")},r=void 0,g={permalink:"/blog/apiboot-logging-use-global-log",source:"@site/blog/logging/apiboot-logging-use-global-log.md",title:"ApiBoot\u65b0\u7279\u6027GlobalLogging\u8be6\u89e3",description:"\u5168\u5c40\u65e5\u5fd7\u662f\u4e00\u4e2a\u4ec0\u4e48\u6982\u5ff5\u5462\uff1f",date:"2019-12-17T10:12:47.000Z",formattedDate:"2019\u5e7412\u670817\u65e5",tags:[{label:"Log",permalink:"/blog/tags/log"}],readingTime:9.55,hasTruncateMarker:!0,authors:[{name:"\u6052\u5b87\u5c11\u5e74",title:"ApiBoot\u4f5c\u8005\uff0cminbox-projects\u5f00\u6e90\u7ec4\u7ec7\u8d1f\u8d23\u4eba",url:"https://github.com/minbox-projects",imageURL:"https://blog.minbox.org/images/avatar.png",key:"hengboy"}],frontMatter:{slug:"apiboot-logging-use-global-log",title:"ApiBoot\u65b0\u7279\u6027GlobalLogging\u8be6\u89e3",authors:"hengboy",tags:["Log"],date:"2019-12-17T10:12:47.000Z"},prevItem:{title:"\u4f7f\u7528Swagger2\u4f5c\u4e3a\u6587\u6863\u6765\u63cf\u8ff0\u4f60\u7684\u63a5\u53e3\u4fe1\u606f",permalink:"/blog/apiboot-swagger-describe-the-interface"},nextItem:{title:"OAuth2\u4f7f\u7528Redis\u6765\u5b58\u50a8\u5ba2\u6237\u7aef\u4fe1\u606f\u4ee5\u53caAccessToken",permalink:"/blog/apiboot-oauth-use-redis-storage"}},i={authorsImageUrls:[void 0]},p=[{value:"\u5168\u5c40\u65e5\u5fd7\u662f\u4e00\u4e2a\u4ec0\u4e48\u6982\u5ff5\u5462\uff1f",id:"\u5168\u5c40\u65e5\u5fd7\u662f\u4e00\u4e2a\u4ec0\u4e48\u6982\u5ff5\u5462",level:2},{value:"\u4ec0\u4e48\u662f\u5168\u5c40\u65e5\u5fd7\uff1f",id:"\u4ec0\u4e48\u662f\u5168\u5c40\u65e5\u5fd7",level:2},{value:"\u4e86\u89e3GlobalLogging\u63a5\u53e3",id:"\u4e86\u89e3globallogging\u63a5\u53e3",level:2},{value:"GlobalLogging\u81ea\u52a8\u5316\u914d\u7f6e",id:"globallogging\u81ea\u52a8\u5316\u914d\u7f6e",level:2},{value:"\u4f7f\u7528GlobalLogging",id:"\u4f7f\u7528globallogging",level:2},{value:"GlobalLogging\u8868\u7ed3\u6784",id:"globallogging\u8868\u7ed3\u6784",level:2},{value:"\u91c7\u96c6Exception\u5806\u6808\u4fe1\u606f",id:"\u91c7\u96c6exception\u5806\u6808\u4fe1\u606f",level:2},{value:"\u8fd0\u884c\u6d4b\u8bd5",id:"\u8fd0\u884c\u6d4b\u8bd5",level:2},{value:"\u8f93\u51fa\u7684\u91c7\u96c6\u65e5\u5fd7",id:"\u8f93\u51fa\u7684\u91c7\u96c6\u65e5\u5fd7",level:3},{value:"\u5b58\u50a8\u7684\u91c7\u96c6\u65e5\u5fd7",id:"\u5b58\u50a8\u7684\u91c7\u96c6\u65e5\u5fd7",level:3},{value:"\u6572\u9ed1\u677f\uff0c\u5212\u91cd\u70b9",id:"\u6572\u9ed1\u677f\u5212\u91cd\u70b9",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2}],c={toc:p};function m(e){let{components:n,...o}=e;return(0,t.kt)("wrapper",(0,l.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"\u5168\u5c40\u65e5\u5fd7\u662f\u4e00\u4e2a\u4ec0\u4e48\u6982\u5ff5\u5462"},"\u5168\u5c40\u65e5\u5fd7\u662f\u4e00\u4e2a\u4ec0\u4e48\u6982\u5ff5\u5462\uff1f"),(0,t.kt)("p",null,"\u5176\u5b9e\u7406\u89e3\u8d77\u6765\u6bd4\u8f83\u7b80\u5355\uff0c\u7c7b\u4f3c\u4e8e\u6211\u4eec\u5e73\u65f6\u4e00\u76f4\u5728\u4f7f\u7528\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"logback"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"log4j"),"\u8fd9\u79cd\u7684\u65e5\u5fd7\u6846\u67b6\u7684\u5176\u4e2d\u4e00\u4e2a\u529f\u80fd\u90e8\u5206\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"minbox-logging"),"\u5206\u5e03\u5f0f\u65e5\u5fd7\u6846\u67b6\u76ee\u524d\u72ec\u7acb\u4e8e",(0,t.kt)("inlineCode",{parentName:"p"},"api-boot-plugins"),"\uff0c\u5df2\u7ecf\u52a0\u5165\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"minbox-projects"),"\u5f00\u6e90\u7ec4\u7ec7\uff0c\u4e4b\u524d\u535a\u5ba2\u6709\u4e00\u7cfb\u5217\u7684\u6587\u7ae0\u6765\u8bb2\u89e3\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\uff08\u5185\u90e8\u662f\u96c6\u6210\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"minbox-logging"),"\uff09\u65e5\u5fd7\u7ec4\u4ef6\u7684\u4f7f\u7528\u4ee5\u53ca\u6781\u7b80\u7684\u914d\u7f6e\u65b9\u5f0f\uff0c\u53ef\u4ee5\u8bbf\u95ee",(0,t.kt)("a",{parentName:"p",href:"https://blog.yuqiyu.com/apiboot-all-articles.html"},"ApiBoot \u7ec4\u4ef6\u7cfb\u5217\u6587\u7ae0\u4f7f\u7528\u6c47\u603b"),"\u4e86\u89e3\u65e5\u5fd7\u7ec4\u4ef6\u7684\u4f7f\u7528\u8be6\u60c5\u3002"),(0,t.kt)("hr",null),(0,t.kt)("h2",{id:"\u4ec0\u4e48\u662f\u5168\u5c40\u65e5\u5fd7"},"\u4ec0\u4e48\u662f\u5168\u5c40\u65e5\u5fd7\uff1f"),(0,t.kt)("p",null,"\u5728\u4e4b\u524d",(0,t.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u5206\u5e03\u5f0f\u65e5\u5fd7\u7ec4\u4ef6\u53ef\u4ee5\u5b9e\u73b0",(0,t.kt)("inlineCode",{parentName:"p"},"\u65e5\u5fd7\u91c7\u96c6"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"\u65e5\u5fd7\u4e0a\u62a5"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"\u65e5\u5fd7\u7edf\u4e00\u5b58\u50a8"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"\u96c6\u6210Spring Security"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"\u96c6\u6210Openfeign"),"\u7b49\u529f\u80fd\uff0c\u968f\u7740",(0,t.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging 2.2.1.RELEASE"),"\u7248\u672c\u7684\u53d1\u5e03\u5f15\u5165\u4e86\u4e00\u4e2a\u65b0\u7684\u6982\u5ff5\uff0c\u90a3\u5c31\u662f",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLog"),"\u3002"),(0,t.kt)("p",null,"\u7528\u8fc7",(0,t.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u65e5\u5fd7\u7ec4\u4ef6\u7684\u540c\u5b66\u5e94\u8be5\u90fd\u6709\u4e86\u89e3\uff0c\u5b83\u53ea\u4f1a\u8bb0\u5f55\u6bcf\u4e00\u6b21\u53d1\u9001",(0,t.kt)("inlineCode",{parentName:"p"},"\u8bf7\u6c42"),"\u76f8\u5173\u7684\u4e00\u4e9b\u4fe1\u606f\uff0c\u5982\uff1a\u8bf7\u6c42\u53c2\u6570\u3001\u8bf7\u6c42\u5730\u5740\u3001\u8bf7\u6c42\u5934\u4fe1\u606f\u3001\u54cd\u5e94\u5185\u5bb9\u7b49\uff0c\u5e76\u6ca1\u6709\u63d0\u4f9b\u4e1a\u52a1\u4ee3\u7801\u4e2d\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"debug"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"info"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"error"),"\u7b49\u7ea7\u65e5\u5fd7\u7684\u91c7\u96c6\u65b9\u5f0f\uff0c\u5c31\u4e0d\u8981\u63d0\u4e0a\u62a5\u8fd9\u79cd\u65e5\u5fd7\u5230",(0,t.kt)("inlineCode",{parentName:"p"},"Logging Admin"),"\u4e86\u3002"),(0,t.kt)("p",null,"\u65b0\u7248\u672c\u7684\u53d1\u5e03\u7ed9\u6211\u4eec\u5e26\u6765\u4e86\u6625\u5929\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u4e3a\u4e86\u65b9\u4fbf\u4ee3\u7801\u7684\u8c03\u8bd5\uff0c\u6267\u884c\u65f6\u4e1a\u52a1\u6570\u636e\u7684\u76d1\u63a7\uff0c\u652f\u6301\u4e86\u91c7\u96c6\u4e1a\u52a1\u4ee3\u7801\u5185\u7684\u4e0d\u540c\u7b49\u7ea7\u7684\u65e5\u5fd7\uff0c\u800c\u4e14\u8fd8\u652f\u6301\u91c7\u96c6",(0,t.kt)("inlineCode",{parentName:"p"},"Exception"),"\u7684\u5806\u6808\u4fe1\u606f\uff0c\u65b9\u4fbf\u5b9a\u4f4d\u9519\u8bef\uff0c\u53ca\u65f6\u7ea0\u6b63\u3002"),(0,t.kt)("h2",{id:"\u4e86\u89e3globallogging\u63a5\u53e3"},"\u4e86\u89e3GlobalLogging\u63a5\u53e3"),(0,t.kt)("p",null,"\u4e3a\u4e86\u652f\u6301",(0,t.kt)("inlineCode",{parentName:"p"},"\u4e1a\u52a1\u5168\u5c40\u65e5\u5fd7"),"\uff0c\u65b0\u7248\u672c\u4e2d\u5f15\u5165\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLogging"),"\u63a5\u53e3\uff0c\u6211\u4eec\u5148\u6765\u770b\u770b\u8fd9\u4e2a\u63a5\u53e3\u7684\u6e90\u7801\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"\n/**\n * Global log collection interface\n * Provide debug, info, and error log collection\n *\n * @author \u6052\u5b87\u5c11\u5e74\n */\npublic interface GlobalLogging {\n    /**\n     * Collect Debug Level Logs\n     *\n     * @param msg log content\n     */\n    void debug(String msg);\n\n    /**\n     * Collect Debug Level Logs\n     *\n     * @param format    Unformatted log content\n     * @param arguments List of parameters corresponding to log content\n     */\n    void debug(String format, Object... arguments);\n\n    /**\n     * Collect Info Level Logs\n     *\n     * @param msg log content\n     */\n    void info(String msg);\n\n    /**\n     * Collect Info Level Logs\n     *\n     * @param format    Unformatted log content\n     * @param arguments List of parameters corresponding to log content\n     */\n    void info(String format, Object... arguments);\n\n    /**\n     * Collect Error Level Logs\n     *\n     * @param msg log content\n     */\n    void error(String msg);\n\n    /**\n     * Collect Error Level Logs\n     *\n     * @param msg       log content\n     * @param throwable Exception object instance\n     */\n    void error(String msg, Throwable throwable);\n\n    /**\n     * Collect Error Level Logs\n     *\n     * @param format    Unformatted log content\n     * @param arguments List of parameters corresponding to log content\n     */\n    void error(String format, Object... arguments);\n}\n")),(0,t.kt)("p",null,"\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLogging"),"\u63a5\u53e3\u5185\u63d0\u4f9b\u4e86\u4e09\u79cd\u7c7b\u578b\u7684\u65e5\u5fd7\u91c7\u96c6\u65b9\u6cd5\uff0c\u5206\u522b\u662f\uff1a",(0,t.kt)("inlineCode",{parentName:"p"},"debug"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"info"),"\u3001",(0,t.kt)("inlineCode",{parentName:"p"},"error"),"\uff0c\u8fd9\u4e2a\u7248\u672c\u53ea\u662f\u5bf9\u65e5\u5fd7\u7684\u7b49\u7ea7\u8fdb\u884c\u4e86\u5212\u5206\uff0c\u5e76\u6ca1\u6709\u6dfb\u52a0\u9650\u5236\u6216\u8005\u8fc7\u6ee4\u673a\u5236\u3002"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLogging"),"\u5f53\u524d\u7248\u672c\u6709\u4e00\u4e2a\u5b9e\u73b0\u7c7b",(0,t.kt)("inlineCode",{parentName:"p"},"org.minbox.framework.logging.client.global.support.GlobalLoggingMemoryStorage"),"\uff0c\u8be5\u7c7b\u5b9e\u73b0\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLogging"),"\u5185\u7684\u5168\u90e8\u65b9\u6cd5\uff0c\u5e76\u5c06\u91c7\u96c6\u5230\u7684\u65e5\u5fd7\u4fdd\u5b58\u5230\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLoggingThreadLocal"),"\uff0c\u65b9\u4fbf\u7edf\u4e00\u4e0a\u62a5\u5230",(0,t.kt)("inlineCode",{parentName:"p"},"Logging Admin"),"\u3002"),(0,t.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u540e\u671f\u4fee\u6539",(0,t.kt)("inlineCode",{parentName:"p"},"Global Log"),"\u7684\u5b58\u50a8\u65b9\u5f0f\uff0c",(0,t.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u914d\u7f6e\u53c2\u6570",(0,t.kt)("inlineCode",{parentName:"p"},"api.boot.logging.global-logging-storage-away"),"\uff0c\u8be5\u914d\u7f6e\u7684\u9ed8\u8ba4\u503c\u4e3a",(0,t.kt)("inlineCode",{parentName:"p"},"memory"),"\uff0c\u5bf9\u5e94",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLoggingMemoryStorage"),"\u5b9e\u73b0\u7c7b\u3002"),(0,t.kt)("h2",{id:"globallogging\u81ea\u52a8\u5316\u914d\u7f6e"},"GlobalLogging\u81ea\u52a8\u5316\u914d\u7f6e"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u6839\u636e",(0,t.kt)("inlineCode",{parentName:"p"},"api.boot.logging.global-logging-storage-away"),"\u914d\u7f6e\u53c2\u6570\uff0c\u6761\u4ef6\u5224\u65ad\u81ea\u52a8\u5316\u914d\u7f6e\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLogging"),"\u63a5\u53e3\u7684\u5b9e\u73b0\u7c7b\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'package org.minbox.framework.api.boot.autoconfigure.logging;\nimport ...\n/**\n * the "minbox-logging" global log storage configuration\n *\n * @author \u6052\u5b87\u5c11\u5e74\n */\n@Configuration\n@ConditionalOnClass(GlobalLogging.class)\npublic class ApiBootLoggingGlobalLogStorageAutoConfiguration {\n    /**\n     * Instance global log memory mode storage\n     *\n     * @return {@link GlobalLoggingMemoryStorage}\n     */\n    @Bean\n    @ConditionalOnProperty(prefix = API_BOOT_LOGGING_PREFIX,\n        name = "global-logging-storage-away", havingValue = "memory", matchIfMissing = true)\n    public GlobalLogging globalLogging() {\n        return new GlobalLoggingMemoryStorage();\n    }\n}\n')),(0,t.kt)("p",null,"\u6839\u636e",(0,t.kt)("inlineCode",{parentName:"p"},"globalLogging()"),"\u65b9\u6cd5\u4e0a\u7684\u6761\u4ef6\u6ce8\u5165\u6ce8\u89e3",(0,t.kt)("inlineCode",{parentName:"p"},"@ConditionalOnProperty"),"\u914d\u7f6e\u5185\u5bb9\u53ef\u4ee5\u4e86\u89e3\u5230\uff0c\u5f53\u6211\u4eec\u5728",(0,t.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u914d\u7f6e\u6587\u4ef6\u5185\u6dfb\u52a0",(0,t.kt)("inlineCode",{parentName:"p"},"api.boot.logging.global-logging-storage-away=memory"),"\u65f6\u6216\u8005",(0,t.kt)("inlineCode",{parentName:"p"},"\u7f3a\u5c11\u8be5\u914d\u7f6e"),"\u65f6\uff0c\u8be5\u65b9\u6cd5\u4f1a\u88ab\u8c03\u7528\u5e76\u4e14\u521b\u5efa\u4e00\u4e2a",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLoggingMemoryStorage"),"\u5bf9\u8c61\u5b9e\u4f8b\uff0c\u5e76\u5c06\u8be5\u5b9e\u4f8b\u5bf9\u8c61\u5199\u5165\u5230",(0,t.kt)("inlineCode",{parentName:"p"},"IOC"),"\u5bb9\u5668\u5185\uff0c\u8fd9\u6837\u6211\u4eec\u5728\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLogging"),"\u5b9e\u4f8b\u65f6\uff0c\u53ea\u9700\u8981\u6ce8\u5165\u5c31\u53ef\u4ee5\u4e86\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"/**\n  * {@link GlobalLogging}\n  *\n  * @see org.minbox.framework.logging.client.global.AbstractGlobalLogging\n  * @see org.minbox.framework.logging.client.global.support.GlobalLoggingMemoryStorage\n  */\n@Autowired\nprivate GlobalLogging logging;\n")),(0,t.kt)("h2",{id:"\u4f7f\u7528globallogging"},"\u4f7f\u7528GlobalLogging"),(0,t.kt)("p",null,"\u91c7\u96c6\u7684\u65b9\u5f0f\u5f88\u7b80\u5355\uff0c\u6211\u4eec\u53ea\u9700\u8981\u6ce8\u5165",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLogging"),"\u5bf9\u8c61\uff0c\u4f7f\u7528\u8be5\u63a5\u53e3\u63d0\u4f9b\u7684\u65b9\u6cd5\u5373\u53ef\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * \u6d4b\u8bd5\u7528\u6237\u63a7\u5236\u5668\n *\n * @author \u6052\u5b87\u5c11\u5e74\n */\n@RestController\n@RequestMapping(value = "/user")\npublic class UserController {\n    /**\n     * {@link GlobalLogging}\n     *\n     * @see org.minbox.framework.logging.client.global.AbstractGlobalLogging\n     * @see org.minbox.framework.logging.client.global.support.GlobalLoggingMemoryStorage\n     */\n    @Autowired\n    private GlobalLogging logging;\n\n    /**\n     * \u6d4b\u8bd5\u83b7\u53d6\u7528\u6237\u540d\n     *\n     * @return\n     */\n    @GetMapping(value = "/name")\n    public String getUserName() {\n        logging.debug("\u8fd9\u662f\u4e00\u6761debug\u7ea7\u522b\u7684\u65e5\u5fd7");\n        logging.info("\u8fd9\u662f\u4e00\u6761info\u7ea7\u522b\u7684\u65e5\u5fd7");\n        return "\u7528\u6237\u540d\uff1a\u6052\u5b87\u5c11\u5e74";\n    }\n}\n')),(0,t.kt)("p",null,"\u5f53\u6211\u4eec\u8c03\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLogging"),"\u63d0\u4f9b\u7684\u4e0d\u540c\u65e5\u5fd7\u7b49\u7ea7\u7684\u65b9\u6cd5\u65f6\uff0c\u4f1a\u81ea\u52a8\u5c06\u65e5\u5fd7\u76f8\u5173\u4fe1\u606f\u5199\u5165\u5230",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLoggingThreadLocal"),"\u7684\u96c6\u5408\u5185\uff0c\u7b49\u5230\u4e0a\u62a5\u8bf7\u6c42\u65e5\u5fd7\u65f6\u4e00\u5e76\u63d0\u4ea4\u7ed9",(0,t.kt)("inlineCode",{parentName:"p"},"Logging Admin"),"\uff0c\u7531",(0,t.kt)("inlineCode",{parentName:"p"},"Logging Admin"),"\u8fdb\u884c\u4fdd\u5b58\u3002"),(0,t.kt)("h2",{id:"globallogging\u8868\u7ed3\u6784"},"GlobalLogging\u8868\u7ed3\u6784"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLogging"),"\u76f8\u5173\u7684\u5168\u5c40\u65e5\u5fd7\u91c7\u96c6\u5230",(0,t.kt)("inlineCode",{parentName:"p"},"Logging Admin"),"\u9700\u8981\u8fdb\u884c\u4fdd\u5b58\uff0c\u6240\u6709\u5bf9\u5e94\u6dfb\u52a0\u4e86\u4e00\u4e2a\u540d\u4e3a",(0,t.kt)("inlineCode",{parentName:"p"},"logging_global_logs"),"\u4fe1\u606f\u8868\uff0c\u7ed3\u6784\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE `logging_global_logs` (\n  `lgl_id` varchar(36) COLLATE utf8mb4_general_ci NOT NULL COMMENT '\u65e5\u5fd7\u4e3b\u952e',\n  `lgl_request_log_id` varchar(36) COLLATE utf8mb4_general_ci NOT NULL COMMENT '\u8bf7\u6c42\u65e5\u5fd7\u7f16\u53f7\uff0c\u5173\u8054logging_request_logs\u4e3b\u952e',\n  `lgl_level` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '\u65e5\u5fd7\u7b49\u7ea7',\n  `lgl_content` mediumtext COLLATE utf8mb4_general_ci COMMENT '\u65e5\u5fd7\u5185\u5bb9',\n  `lgl_caller_class` varchar(200) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '\u65e5\u5fd7\u8f93\u51fa\u7684\u7c7b\u540d',\n  `lgl_caller_method` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL COMMENT '\u65e5\u5fd7\u8f93\u51fa\u7684\u65b9\u6cd5\u540d\u79f0',\n  `lgl_caller_code_line_number` int(11) DEFAULT NULL COMMENT '\u65e5\u5fd7\u8f93\u51fa\u7684\u4ee3\u7801\u884c\u53f7',\n  `lgl_exception_stack` mediumtext COLLATE utf8mb4_general_ci COMMENT 'error\u7b49\u7ea7\u7684\u65e5\u5fd7\u5f02\u5e38\u5806\u6808\u4fe1\u606f',\n  `lgl_create_time` mediumtext COLLATE utf8mb4_general_ci COMMENT '\u65e5\u5fd7\u53d1\u751f\u65f6\u95f4',\n  PRIMARY KEY (`lgl_id`),\n  KEY `logging_global_logs_logging_request_logs_lrl_id_fk` (`lgl_request_log_id`),\n  CONSTRAINT `logging_global_logs_logging_request_logs_lrl_id_fk` FOREIGN KEY (`lgl_request_log_id`) REFERENCES `logging_request_logs` (`lrl_id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='\u5168\u5c40\u65e5\u5fd7\u4fe1\u606f\u8868';\n")),(0,t.kt)("h2",{id:"\u91c7\u96c6exception\u5806\u6808\u4fe1\u606f"},"\u91c7\u96c6Exception\u5806\u6808\u4fe1\u606f"),(0,t.kt)("p",null,"\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLogging"),"\u53ef\u4ee5\u91c7\u96c6\u9047\u5230\u5f02\u5e38\u7684\u8be6\u7ec6\u5806\u6808\u4fe1\u606f\uff0c\u53ef\u4ee5\u8ba9\u6211\u4eec\u76f4\u63a5\u5b9a\u4f4d\u5230\u95ee\u9898\u51fa\u73b0\u7684\u4f4d\u7f6e\uff0c\u5728\u7b2c\u4e00\u65f6\u95f4\u89e3\u51b3\u51fa\u73b0\u7684\u95ee\u9898\uff0c\u5177\u4f53\u4f7f\u7528\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java"},"try {\n  int a = 5 / 0;\n} catch (Exception e) {\n  logging.error(e.getMessage(), e);\n}\n")),(0,t.kt)("h2",{id:"\u8fd0\u884c\u6d4b\u8bd5"},"\u8fd0\u884c\u6d4b\u8bd5"),(0,t.kt)("p",null,"\u6211\u4eec\u6765\u8fd0\u884c\u672c\u7ae0\u7684\u6e90\u7801\uff0c\u770b\u4e0b\u65e5\u5fd7\u91c7\u96c6\u7684\u6548\u679c\u3002"),(0,t.kt)("h3",{id:"\u8f93\u51fa\u7684\u91c7\u96c6\u65e5\u5fd7"},"\u8f93\u51fa\u7684\u91c7\u96c6\u65e5\u5fd7"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "endTime":1576561372604,\n    "globalLogs":[{\n        "callerClass":"org.minbox.chapter.user.service.UserController",\n        "callerCodeLineNumber":33,\n        "callerMethod":"getUserName",\n        "content":"\u8fd9\u662f\u4e00\u6761debug\u7ea7\u522b\u7684\u65e5\u5fd7\uff0c\u53d1\u751f\u65f6\u95f4\uff1a{}",\n        "createTime":1576561372585,\n        "level":"debug"\n    },{\n        "callerClass":"org.minbox.chapter.user.service.UserController",\n        "callerCodeLineNumber":34,\n        "callerMethod":"getUserName",\n        "content":"\u8fd9\u662f\u4e00\u6761info\u7ea7\u522b\u7684\u65e5\u5fd7\uff0c\u53d1\u751f\u65f6\u95f4\uff1a1576561372586",\n        "createTime":1576561372586,\n        "level":"info"\n    },{\n        "callerClass":"org.minbox.chapter.user.service.UserController",\n        "callerCodeLineNumber":43,\n        "callerMethod":"aa",\n        "content":"\u51fa\u73b0\u4e86\u5f02\u5e38.",\n        "createTime":1576561372586,\n        "exceptionStack":"java.lang.ArithmeticException: / by zero\\n\\tat org.minbox.chapter.user.service.UserController.aa(UserController.java:41)\\n\\tat org.minbox.chapter.user.service.UserController.getUserName(UserController.java:35)\\n\\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\\n\\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\\n\\t....",\n        "level":"error"\n    }],\n    "httpStatus":200,\n    "requestBody":"",\n    "requestHeaders":{\n        "accept":"*/*",\n        "host":"localhost:10000",\n        "user-agent":"curl/7.64.1"\n    },\n    "requestIp":"0:0:0:0:0:0:0:1",\n    "requestMethod":"GET",\n    "requestParam":"{}",\n    "requestUri":"/user/name",\n    "responseBody":"\u7528\u6237\u540d\uff1a\u6052\u5b87\u5c11\u5e74",\n    "responseHeaders":{},\n    "serviceId":"user-service",\n    "serviceIp":"127.0.0.1",\n    "servicePort":"10000",\n    "spanId":"41a0c852-812b-4a2e-aa4a-228b87ce52f6",\n    "startTime":1576561372577,\n    "timeConsuming":27,\n    "traceId":"42ca9f5a-5977-49cf-909d-a23614a47a6b"\n}\n')),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u4e0a\u9762\u662f\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u4e00\u4e2a\u8bf7\u6c42\u65e5\u5fd7\u7684\u8be6\u7ec6\u5185\u5bb9\uff0c\u5176\u4e2d",(0,t.kt)("inlineCode",{parentName:"p"},"globalLogs"),"\u5b57\u6bb5\u5c31\u662f\u6211\u4eec\u91c7\u96c6\u7684\u5168\u5c40\u65e5\u5fd7\u5217\u8868\u3002")),(0,t.kt)("h3",{id:"\u5b58\u50a8\u7684\u91c7\u96c6\u65e5\u5fd7"},"\u5b58\u50a8\u7684\u91c7\u96c6\u65e5\u5fd7"),(0,t.kt)("p",null,"\u6211\u4eec\u6765\u786e\u8ba4\u4e0b\u91c7\u96c6\u65e5\u5fd7\u4e0a\u62a5\u5230",(0,t.kt)("inlineCode",{parentName:"p"},"Logging Admin"),"\u540e\u662f\u5426\u4fdd\u5b58\u5230\u4e86",(0,t.kt)("inlineCode",{parentName:"p"},"logging_global_logs"),"\u65e5\u5fd7\u8868\u5185\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> select * from logging_global_logs order by lgl_create_time asc\\G;\n*************************** 1. row ***************************\n                     lgl_id: 112e36ff-e781-4f11-8f21-2196823cde38\n         lgl_request_log_id: f91382e2-2d79-499e-b1df-4757c1ffdbc5\n                  lgl_level: info\n                lgl_content: \u8fd9\u662f\u4e00\u6761info\u7ea7\u522b\u7684\u65e5\u5fd7\uff0c\u53d1\u751f\u65f6\u95f4\uff1a1576561856333\n           lgl_caller_class: org.minbox.chapter.user.service.UserController\n          lgl_caller_method: getUserName\nlgl_caller_code_line_number: 34\n        lgl_exception_stack: NULL\n            lgl_create_time: 1576561856333\n*************************** 2. row ***************************\n                     lgl_id: f1d172a6-5cce-4df0-bc29-fe27ac441089\n         lgl_request_log_id: f91382e2-2d79-499e-b1df-4757c1ffdbc5\n                  lgl_level: debug\n                lgl_content: \u8fd9\u662f\u4e00\u6761debug\u7ea7\u522b\u7684\u65e5\u5fd7\uff0c\u53d1\u751f\u65f6\u95f4\uff1a{}\n           lgl_caller_class: org.minbox.chapter.user.service.UserController\n          lgl_caller_method: getUserName\nlgl_caller_code_line_number: 33\n        lgl_exception_stack: NULL\n            lgl_create_time: 1576561856333\n*************************** 3. row ***************************\n                     lgl_id: d95d850d-3bc9-4689-928a-32c6089ff7a2\n         lgl_request_log_id: f91382e2-2d79-499e-b1df-4757c1ffdbc5\n                  lgl_level: error\n                lgl_content: \u51fa\u73b0\u4e86\u5f02\u5e38.\n           lgl_caller_class: org.minbox.chapter.user.service.UserController\n          lgl_caller_method: getUserName\nlgl_caller_code_line_number: 38\n        lgl_exception_stack: java.lang.ArithmeticException: / by zero\n        at org.minbox.chapter.user.service.UserController.getUserName(UserController.java:36)\n        at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n        at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n                        ...\n            lgl_create_time: 1576561856334\n3 rows in set (0.01 sec)\n\n")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u5f02\u5e38\u7684\u5806\u6808\u4fe1\u606f\u6bd4\u8f83\u591a\uff0c\u505a\u51fa\u4e86\u7701\u7565\u3002")),(0,t.kt)("h2",{id:"\u6572\u9ed1\u677f\u5212\u91cd\u70b9"},"\u6572\u9ed1\u677f\uff0c\u5212\u91cd\u70b9"),(0,t.kt)("p",null,"\u672c\u7ae0\u628a",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLog"),"\u5168\u5c40\u65e5\u5fd7\u7684\u6982\u5ff5\u8fdb\u884c\u4e86\u8be6\u7ec6\u7684\u63cf\u8ff0\uff0c\u5efa\u8bae\u5c06\u4e00\u4e9b\u91cd\u8981\u903b\u8f91\u5224\u65ad\u6027\u8d28\u7684",(0,t.kt)("inlineCode",{parentName:"p"},"GlobalLog"),"\u8fdb\u884c\u91c7\u96c6\u4e0a\u62a5\uff0c\u9632\u6b62",(0,t.kt)("inlineCode",{parentName:"p"},"logging_global_logs"),"\u8868\u5185\u7684\u6570\u636e\u91cf\u8fc7\u5927\u3002"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},"\u8be6\u7ec6\u7684\u4f7f\u7528\u65b9\u5f0f\u8bf7\u53c2\u8003\u672c\u7ae0\u7684\u6e90\u7801\u3002")),(0,t.kt)("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,t.kt)("p",null,"\u5982\u679c\u60a8\u559c\u6b22\u672c\u7bc7\u6587\u7ae0\u8bf7\u4e3a\u6e90\u7801\u4ed3\u5e93\u70b9\u4e2a",(0,t.kt)("inlineCode",{parentName:"p"},"Star"),"\uff0c\u8c22\u8c22\uff01\uff01\uff01\n\u672c\u7bc7\u6587\u7ae0\u793a\u4f8b\u6e90\u7801\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u9014\u5f84\u83b7\u53d6\uff0c\u76ee\u5f55\u4e3a",(0,t.kt)("inlineCode",{parentName:"p"},"apiboot-logging-use-global-log"),"\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Gitee\uff1a",(0,t.kt)("a",{parentName:"li",href:"https://gitee.com/minbox-projects/api-boot-chapter"},"https://gitee.com/minbox-projects/api-boot-chapter"))))}m.isMDXComponent=!0}}]);