"use strict";(self.webpackChunkapiboot_minbox_org=self.webpackChunkapiboot_minbox_org||[]).push([[7470],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>s});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g=a.createContext({}),l=function(e){var n=a.useContext(g),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(g.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,g=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),s=o,u=d["".concat(g,".").concat(s)]||d[s]||m[s]||r;return t?a.createElement(u,i(i({ref:n},c),{},{components:t})):a.createElement(u,i({ref:n},c))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=d;var p={};for(var g in n)hasOwnProperty.call(n,g)&&(p[g]=n[g]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2376:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={slug:"apiboot-custom-logging-traceid",title:"\u81ea\u5b9a\u4e49ApiBoot Logging\u94fe\u8def\u4ee5\u53ca\u5355\u5143ID",authors:"hengboy",tags:["Log"],date:new Date("2019-10-21T16:44:52.000Z")},i=void 0,p={permalink:"/blog/apiboot-custom-logging-traceid",source:"@site/blog/logging/apiboot-custom-logging-traceid.md",title:"\u81ea\u5b9a\u4e49ApiBoot Logging\u94fe\u8def\u4ee5\u53ca\u5355\u5143ID",description:"ApiBoot Logging\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u90fd\u5bf9\u5e94\u521b\u5efa\u94fe\u8def\u7f16\u53f7\uff08TraceID\uff09\u4ee5\u53ca\u5355\u5143\u7f16\u53f7\uff08SpanID\uff09\uff0c\u7528\u4e8e\u5f52\u7c7b\u6bcf\u4e00\u6b21\u8bf7\u6c42\u65e5\u5fd7\uff0c\u901a\u8fc7\u4e00\u4e2a\u94fe\u8def\u4e0b\u65e5\u5fd7\u5355\u5143\u7684Parent SpanID\u53ef\u4ee5\u8fdb\u884c\u4e0a\u4e0b\u7ea7\u5173\u7cfb\u7684\u68b3\u7406\u3002",date:"2019-10-21T16:44:52.000Z",formattedDate:"2019\u5e7410\u670821\u65e5",tags:[{label:"Log",permalink:"/blog/tags/log"}],readingTime:7.845,hasTruncateMarker:!0,authors:[{name:"\u6052\u5b87\u5c11\u5e74",title:"ApiBoot\u4f5c\u8005\uff0cminbox-projects\u5f00\u6e90\u7ec4\u7ec7\u8d1f\u8d23\u4eba",url:"https://github.com/minbox-projects",imageURL:"https://blog.minbox.org/images/avatar.png",key:"hengboy"}],frontMatter:{slug:"apiboot-custom-logging-traceid",title:"\u81ea\u5b9a\u4e49ApiBoot Logging\u94fe\u8def\u4ee5\u53ca\u5355\u5143ID",authors:"hengboy",tags:["Log"],date:"2019-10-21T16:44:52.000Z"},prevItem:{title:"ApiBoot Logging\u6574\u5408Spring Security\u5b89\u5168\u4e0a\u62a5\u65e5\u5fd7",permalink:"/blog/apiboot-logging-integrates-spring-security"},nextItem:{title:"\u5c06ApiBoot Logging\u91c7\u96c6\u7684\u65e5\u5fd7\u4e0a\u62a5\u5230Admin",permalink:"/blog/apiboot-report-logs-by-logging-to-admin"}},g={authorsImageUrls:[void 0]},l=[{value:"\u524d\u6587\u56de\u987e",id:"\u524d\u6587\u56de\u987e",level:2},{value:"\u4e86\u89e3\u94fe\u8def\u7f16\u53f7\u7684\u4f20\u9012\u65b9\u5f0f",id:"\u4e86\u89e3\u94fe\u8def\u7f16\u53f7\u7684\u4f20\u9012\u65b9\u5f0f",level:2},{value:"\u9ed8\u8ba4\u7f16\u53f7",id:"\u9ed8\u8ba4\u7f16\u53f7",level:2},{value:"\u9ed8\u8ba4\u7684\u94fe\u8def\u7f16\u53f7",id:"\u9ed8\u8ba4\u7684\u94fe\u8def\u7f16\u53f7",level:3},{value:"\u9ed8\u8ba4\u7684\u5355\u5143\u7f16\u53f7",id:"\u9ed8\u8ba4\u7684\u5355\u5143\u7f16\u53f7",level:3},{value:"\u81ea\u5b9a\u4e49\u7f16\u53f7",id:"\u81ea\u5b9a\u4e49\u7f16\u53f7",level:2},{value:"\u81ea\u5b9a\u4e49\u94fe\u8def\u7f16\u53f7",id:"\u81ea\u5b9a\u4e49\u94fe\u8def\u7f16\u53f7",level:3},{value:"\u81ea\u5b9a\u4e49\u5355\u5143\u7f16\u53f7",id:"\u81ea\u5b9a\u4e49\u5355\u5143\u7f16\u53f7",level:3},{value:"LoggingFactoryBeanCustomizer",id:"loggingfactorybeancustomizer",level:3},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u6572\u9ed1\u677f\u5212\u91cd\u70b9",id:"\u6572\u9ed1\u677f\u5212\u91cd\u70b9",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2}],c={toc:l};function m(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u4f1a\u4e3a\u6bcf\u4e00\u4e2a\u8bf7\u6c42\u90fd\u5bf9\u5e94\u521b\u5efa\u94fe\u8def\u7f16\u53f7\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"TraceID"),"\uff09\u4ee5\u53ca\u5355\u5143\u7f16\u53f7\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"SpanID"),"\uff09\uff0c\u7528\u4e8e\u5f52\u7c7b\u6bcf\u4e00\u6b21\u8bf7\u6c42\u65e5\u5fd7\uff0c\u901a\u8fc7\u4e00\u4e2a\u94fe\u8def\u4e0b\u65e5\u5fd7\u5355\u5143\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Parent SpanID"),"\u53ef\u4ee5\u8fdb\u884c\u4e0a\u4e0b\u7ea7\u5173\u7cfb\u7684\u68b3\u7406\u3002"),(0,o.kt)("h2",{id:"\u524d\u6587\u56de\u987e"},"\u524d\u6587\u56de\u987e"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"{% post_link apiboot-unified-manage-request-logs %}")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"{% post_link apiboot-report-logs-by-logging-to-admin %}"))),(0,o.kt)("h2",{id:"\u4e86\u89e3\u94fe\u8def\u7f16\u53f7\u7684\u4f20\u9012\u65b9\u5f0f"},"\u4e86\u89e3\u94fe\u8def\u7f16\u53f7\u7684\u4f20\u9012\u65b9\u5f0f"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(7027).Z,width:"1113",height:"493"})),(0,o.kt)("p",null,"\u5728\u6bcf\u4e00\u6b21\u8bf7\u6c42\u4e2d\u94fe\u8def\u7f16\u53f7\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"traceId"),"\uff09\u3001\u5355\u5143\u7f16\u53f7",(0,o.kt)("inlineCode",{parentName:"p"},"\uff08spanId\uff09"),"\u90fd\u662f\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"HttpHeader"),"\u7684\u65b9\u5f0f\u8fdb\u884c\u4f20\u9012\uff0c\u65e5\u5fd7\u7684\u8d77\u59cb\u4f4d\u7f6e\u4f1a\u4e3b\u52a8\u751f\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"traceId"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"spanId"),"\uff0c\u800c\u8d77\u59cb\u4f4d\u7f6e\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"Parent SpanId"),"\u5219\u662f\u4e0d\u5b58\u5728\u7684\uff0c\u503c\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"null"),"\u3002"),(0,o.kt)("p",null,"\u8fd9\u6837\u6bcf\u6b21\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"restTemplate"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"Openfeign"),"\u7684\u5f62\u5f0f\u8bbf\u95ee\u5176\u4ed6\u670d\u52a1\u7684\u63a5\u53e3\u65f6\uff0c\u5c31\u4f1a",(0,o.kt)("strong",{parentName:"p"},"\u643a\u5e26\u8d77\u59cb\u4f4d\u7f6e\u751f\u6210\u7684",(0,o.kt)("inlineCode",{parentName:"strong"},"traceId"),"\u3001",(0,o.kt)("inlineCode",{parentName:"strong"},"spanId"),"\u5230\u4e0b\u4e00\u4e2a\u670d\u52a1\u5355\u5143"),"\u3002"),(0,o.kt)("h2",{id:"\u9ed8\u8ba4\u7f16\u53f7"},"\u9ed8\u8ba4\u7f16\u53f7"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u5185\u90e8\u63d0\u4f9b\u4e86\u9ed8\u8ba4\u7684\u7f16\u53f7\u683c\u5f0f\uff0c\u9ed8\u8ba4\u4e3a\u901a\u7528\u683c\u5f0f\uff0c\u6ca1\u6709\u533a\u5206\u6027\uff0c\u65e0\u6cd5\u4ece\u7f16\u53f7\u4e0a\u8fdb\u884c\u533a\u5206\u65e5\u5fd7\u7684\u5177\u4f53\u5f52\u7c7b\u3002"),(0,o.kt)("h3",{id:"\u9ed8\u8ba4\u7684\u94fe\u8def\u7f16\u53f7"},"\u9ed8\u8ba4\u7684\u94fe\u8def\u7f16\u53f7"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u5185\u90e8\u901a\u8fc7\u96c6\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"minbox-logging"),"\u65e5\u5fd7\u7ec4\u4ef6\u6765\u5b8c\u6210\u65e5\u5fd7\u7684\u91c7\u96c6\u7b49\u57fa\u672c\u529f\u80fd\uff0c\u6bcf\u4e00\u6b21\u751f\u6210\u91c7\u96c6\u7684\u65e5\u5fd7\u65f6\u90fd\u4f1a\u901a\u8fc7",(0,o.kt)("strong",{parentName:"p"},"LoggingTraceGenerator"),"\u63a5\u53e3\u8fdb\u884c\u751f\u6210\u94fe\u8def\u7f16\u53f7\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"TraceID"),"\uff09\uff0c\u8be5\u63a5\u53e3\u6e90\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * ApiBoot Logging Tracer\n * Create new traceId\n *\n * @author\uff1a\u6052\u5b87\u5c11\u5e74 - \u4e8e\u8d77\u5b87\n * <p>\n * DateTime\uff1a2019-07-10 17:01\n * Blog\uff1ahttp://blog.yuqiyu.com\n * WebSite\uff1ahttp://www.jianshu.com/u/092df3f77bca\n * Gitee\uff1ahttps://gitee.com/hengboy\n * GitHub\uff1ahttps://github.com/hengboy\n */\npublic interface LoggingTraceGenerator {\n    /**\n     * create new traceId\n     *\n     * @return traceId\n     * @throws MinBoxLoggingException exception\n     */\n    String createTraceId() throws MinBoxLoggingException;\n\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u9ed8\u8ba4\u7684\u94fe\u8def\u7f16\u53f7\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"TraceID"),"\uff09\u91c7\u7528\u7684\u662f",(0,o.kt)("strong",{parentName:"p"},"UUID\u968f\u673a\u5b57\u7b26\u4e32"),"\u7684\u65b9\u5f0f\u751f\u6210\u7684\uff0c\u5185\u90e8\u5b9e\u73b0\u662f\u901a\u8fc7",(0,o.kt)("strong",{parentName:"p"},"LoggingTraceGenerator"),"\u63a5\u53e3\u7684\u9ed8\u8ba4\u5b9e\u73b0\u7c7b",(0,o.kt)("strong",{parentName:"p"},"LoggingDefaultTraceGenerator"),"\u8fdb\u884c\u751f\u6210\uff0c\u751f\u6210\u7c7b\u6e90\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * ApiBoot Logging Tracer Default Support Instance\n *\n * @author\uff1a\u6052\u5b87\u5c11\u5e74 - \u4e8e\u8d77\u5b87\n * <p>\n * DateTime\uff1a2019-07-10 17:28\n * Blog\uff1ahttp://blog.yuqiyu.com\n * WebSite\uff1ahttp://www.jianshu.com/u/092df3f77bca\n * Gitee\uff1ahttps://gitee.com/hengboy\n * GitHub\uff1ahttps://github.com/hengboy\n */\npublic class LoggingDefaultTraceGenerator implements LoggingTraceGenerator {\n    /**\n     * Use UUID as the default traceId\n     *\n     * @return traceId\n     * @throws MinBoxLoggingException Exception\n     */\n    @Override\n    public String createTraceId() throws MinBoxLoggingException {\n        return UUID.randomUUID().toString();\n    }\n}\n\n")),(0,o.kt)("h3",{id:"\u9ed8\u8ba4\u7684\u5355\u5143\u7f16\u53f7"},"\u9ed8\u8ba4\u7684\u5355\u5143\u7f16\u53f7"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"\u5355\u5143\u7f16\u53f7"),"\u662f\u4e00\u6761\u94fe\u8def\u4e0b\u7ecf\u8fc7\u7684\u6bcf\u4e00\u4e2a\u4e1a\u52a1\u5355\u5143\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"SpringCloud"),"\u5fae\u670d\u52a1\u7684\u573a\u666f\u4e0b\u6bcf\u53d1\u8d77\u4e00\u4e2a\u8bf7\u6c42\u5185\u90e8\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"Openfeign"),"\u53ef\u80fd\u4f1a\u7ecf\u8fc7\u591a\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"\u670d\u52a1"),"\uff0c\u8fd9\u6837\u6bcf\u7ecf\u8fc7\u7684\u4e00\u4e2a\u670d\u52a1\u79f0\u4e4b\u4e3a\u5355\u5143\uff0c\u800c\u5f53\u524d\u8fd9\u6761\u94fe\u8def\u4e0b\u7684\u5355\u5143\u552f\u4e00\u6807\u8bc6\u5b57\u7b26\u4e32\u5c31\u79f0\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"\u5355\u5143\u7f16\u53f7"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"minbox-logging"),"\u63d0\u4f9b\u4e86\u751f\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"\u5355\u5143\u7f16\u53f7"),"\u7684\u63a5\u53e3",(0,o.kt)("strong",{parentName:"p"},"LoggingSpanGenerator"),"\uff0c\u6e90\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * ApiBoot Logging Span\n * Create new spanId\n *\n * @author\uff1a\u6052\u5b87\u5c11\u5e74 - \u4e8e\u8d77\u5b87\n * <p>\n * DateTime\uff1a2019-07-10 17:02\n * Blog\uff1ahttp://blog.yuqiyu.com\n * WebSite\uff1ahttp://www.jianshu.com/u/092df3f77bca\n * Gitee\uff1ahttps://gitee.com/hengboy\n * GitHub\uff1ahttps://github.com/hengboy\n */\npublic interface LoggingSpanGenerator {\n    /**\n     * create new spanId\n     *\n     * @return span id\n     * @throws MinBoxLoggingException exception\n     */\n    String createSpanId() throws MinBoxLoggingException;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"spanId"),"\u9ed8\u8ba4\u91c7\u7528\u7684\u8ddf",(0,o.kt)("inlineCode",{parentName:"p"},"traceId"),"\u751f\u6210\u65b9\u5f0f\u4e00\u81f4\uff0c\u90fd\u662f",(0,o.kt)("inlineCode",{parentName:"p"},"UUID"),"\u968f\u673a\u5b57\u7b26\u4e32\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"minbox-logging"),"\u63d0\u4f9b\u4e86",(0,o.kt)("strong",{parentName:"p"},"LoggingSpanGenerator"),"\u63a5\u53e3\u9ed8\u8ba4\u7684\u5b9e\u73b0",(0,o.kt)("strong",{parentName:"p"},"LoggingDefaultSpanGenerator"),"\uff0c\u6e90\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * ApiBoot Logging Default Span\n * Use By Create New SpanId\n *\n * @author\uff1a\u6052\u5b87\u5c11\u5e74 - \u4e8e\u8d77\u5b87\n * <p>\n * DateTime\uff1a2019-07-15 17:24\n * Blog\uff1ahttp://blog.yuqiyu.com\n * WebSite\uff1ahttp://www.jianshu.com/u/092df3f77bca\n * Gitee\uff1ahttps://gitee.com/hengboy\n * GitHub\uff1ahttps://github.com/hengboy\n */\npublic class LoggingDefaultSpanGenerator implements LoggingSpanGenerator {\n    /**\n     * Create New SpanId\n     *\n     * @return SpanId\n     * @throws MinBoxLoggingException Exception\n     */\n    @Override\n    public String createSpanId() throws MinBoxLoggingException {\n        return UUID.randomUUID().toString();\n    }\n}\n")),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u7f16\u53f7"},"\u81ea\u5b9a\u4e49\u7f16\u53f7"),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u6839\u636e\u81ea\u5df1\u7684\u4e1a\u52a1\u8fdb\u884c\u81ea\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"traceId"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"spanId"),"\uff0c\u53ef\u4ee5\u52a0\u5165\u4e00\u4e9b\u81ea\u5df1\u4e1a\u52a1\u7684\u5143\u7d20\uff0c\u53ea\u9700\u8981\u63d0\u4f9b",(0,o.kt)("inlineCode",{parentName:"p"},"minbox-logging"),"\u63d0\u4f9b\u7684\u751f\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"traceId"),"\u7684\u63a5\u53e3",(0,o.kt)("strong",{parentName:"p"},"LoggingTraceGenerator"),"\u3001\u751f\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"spanId"),"\u7684\u63a5\u53e3",(0,o.kt)("strong",{parentName:"p"},"LoggingSpanGenerator"),"\u5bf9\u5e94\u7684\u5b9e\u73b0\u7c7b\uff0c\u5e76\u5c06\u5b9e\u73b0\u7c7b\u4ea4\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingFaceBean"),"\u7ba1\u7406\u5373\u53ef\u3002"),(0,o.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u94fe\u8def\u7f16\u53f7"},"\u81ea\u5b9a\u4e49\u94fe\u8def\u7f16\u53f7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * \u81ea\u5b9a\u4e49traceId\u751f\u6210\u7b56\u7565\n *\n * @author \u6052\u5b87\u5c11\u5e74\n */\npublic class CustomTraceIdGenerator implements LoggingTraceGenerator {\n    /**\n     * \u94fe\u8def\u7f16\u53f7\u524d\u7f00\n     */\n    private static final String TRACE_ID_PREFIX = "local";\n    \n    @Override\n    public String createTraceId() throws MinBoxLoggingException {\n        return TRACE_ID_PREFIX + UUID.randomUUID().toString().hashCode();\n    }\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"CustomTraceIdGenerator"),"\u7684\u7c7b\u5e76\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingTraceGenerator"),"\u63a5\u53e3\uff0c\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"createTraceId()"),"\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u6839\u636e",(0,o.kt)("inlineCode",{parentName:"p"},"local-"),"\u4f5c\u4e3a\u524d\u7f00\uff0c\u62fc\u63a5",(0,o.kt)("inlineCode",{parentName:"p"},"UUID"),"\u968f\u673a\u5b57\u7b26\u4e32\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"hashCode"),"\u503c\u4f5c\u4e3a\u540e\u7f00\u3002"),(0,o.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u5355\u5143\u7f16\u53f7"},"\u81ea\u5b9a\u4e49\u5355\u5143\u7f16\u53f7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'/**\n * \u81ea\u5b9a\u4e49\u5355\u5143\u7f16\u53f7\u751f\u6210\u7b56\u7565\n *\n * @author \u6052\u5b87\u5c11\u5e74\n */\npublic class CustomSpanIdGenerator implements LoggingSpanGenerator {\n    /**\n     * \u5355\u5143\u7f16\u53f7\u524d\u7f00\n     */\n    private static final String SPAN_ID_PREFIX = "group";\n\n    @Override\n    public String createSpanId() throws MinBoxLoggingException {\n        return SPAN_ID_PREFIX + UUID.randomUUID().toString().hashCode();\n    }\n}\n')),(0,o.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u540d\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"CustomSpanIdGenerator"),"\u7684\u7c7b\u5e76\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingSpanGenerator"),"\u63a5\u53e3\uff0c\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"createSpanId()"),"\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u6839\u636e",(0,o.kt)("inlineCode",{parentName:"p"},"group-"),"\u4f5c\u4e3a\u524d\u7f00\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"UUID"),"\u968f\u673a\u5b57\u7b26\u4e32\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"hashCode"),"\u503c\u4f5c\u4e3a\u540e\u7f00\u3002"),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u6211\u4eec\u5df2\u7ecf\u521b\u5efa\u4e86\u81ea\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"traceId"),"\u4ee5\u53ca",(0,o.kt)("inlineCode",{parentName:"p"},"spanId"),"\u7684\u5b9e\u73b0\u7c7b\uff0c\u6211\u4eec\u9700\u8981\u5c06\u5b9e\u73b0\u7c7b\u7684\u5b9e\u4f8b\u4ea4\u7ed9",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingFactoryBean"),"\u7ba1\u7406\uff0c\u8fd9\u6837\u6211\u4eec\u624d\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7f16\u53f7\u3002"),(0,o.kt)("h3",{id:"loggingfactorybeancustomizer"},"LoggingFactoryBeanCustomizer"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u63d0\u4f9b\u4e86\u4e00\u4e2a\u81ea\u5b9a\u4e49\u8bbe\u7f6e",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingFactoryBean"),"\u7684\u63a5\u53e3",(0,o.kt)("strong",{parentName:"p"},"LoggingFactoryBeanCustomizer"),"\uff0c\u901a\u8fc7\u8be5\u63a5\u53e3\u53ef\u4ee5\u4fee\u6539",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingFactoryBean"),"\u5185\u5141\u8bb8\u4fee\u6539\u7684\u4efb\u610f\u503c\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u521b\u5efa\u540d\u4e3a",(0,o.kt)("strong",{parentName:"p"},"CustomCreateTraceAndSpanId"),"\u7c7b\u5e76\u5b9e\u73b0",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingFactoryBeanCustomizer"),"\u63a5\u53e3\uff0c\u6e90\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * \u81ea\u5b9a\u4e49\u521b\u5efa\u94fe\u8def\u4ee5\u53ca\u5355\u5143\u7f16\u53f7\n *\n * @author \u6052\u5b87\u5c11\u5e74\n * @see LoggingFactoryBeanCustomizer\n * @see LoggingFactoryBean\n * @see org.minbox.framework.logging.client.tracer.LoggingTraceGenerator\n * @see org.minbox.framework.logging.client.span.LoggingSpanGenerator\n */\n@Component\npublic class CustomCreateTraceAndSpanId implements LoggingFactoryBeanCustomizer {\n    /**\n     * {@link CustomTraceIdGenerator} \u81ea\u5b9a\u4e49\u94fe\u8def\u7f16\u53f7\u751f\u6210\u7b56\u7565\n     * {@link CustomSpanIdGenerator} \u81ea\u5b9a\u4e49\u5355\u5143\u7f16\u53f7\u751f\u6210\u7b56\u7565\n     *\n     * @param factoryBean {@link LoggingFactoryBean}\n     */\n    @Override\n    public void customize(LoggingFactoryBean factoryBean) {\n        CustomTraceIdGenerator traceIdGenerator = new CustomTraceIdGenerator();\n        factoryBean.setTraceGenerator(traceIdGenerator);\n\n        CustomSpanIdGenerator spanIdGenerator = new CustomSpanIdGenerator();\n        factoryBean.setSpanGenerator(spanIdGenerator);\n    }\n}\n\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"customize"),"\u8fd9\u79cd\u8bbe\u8ba1\u65b9\u5f0f\u662f\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"SpringBoot"),"\u4e2d\u6bd4\u8f83\u5e38\u89c1\u7684\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot"),"\u4e5f\u6cbf\u7528\u4e86\u8fd9\u79cd\u8bbe\u8ba1\u65b9\u5f0f\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"customize\uff08\uff09"),"\u65b9\u6cd5\u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingFactoryBean"),"\u5bf9\u8c61\u5b9e\u4f8b\u4f5c\u4e3a\u53c2\u6570\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"setXxx"),"\u65b9\u6cd5\u8fdb\u884c\u4fee\u6539\u5185\u5b9a\u4e49\u7684\u9ed8\u8ba4\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"facetory.setTraceGenerator"),"\u65b9\u6cd5\u53ef\u4ee5\u4fee\u6539\u9ed8\u8ba4\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"traceId"),"\u751f\u6210\u7b56\u7565\u3002"),(0,o.kt)("p",null,"\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"facetory.setSpanGenerator"),"\u65b9\u6cd5\u53ef\u4ee5\u4fee\u6539\u9ed8\u8ba4\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"spanId"),"\u751f\u6210\u7b56\u7565\u3002"),(0,o.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,o.kt)("p",null,"\u542f\u52a8\u9879\u76ee\u540e\u6211\u4eec\u6765\u67e5\u770b\u63a7\u5236\u53f0\u6253\u5370\u7684\u65e5\u5fd7\u5185\u5bb9\uff0c\u786e\u8ba4\u662f\u5426\u4fee\u6539\u6210\u529f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "endTime":1571711067664,\n    "httpStatus":200,\n    "requestBody":"",\n    "requestHeaders":{\n        "accept":"*/*",\n        "host":"localhost:8080",\n        "user-agent":"curl/7.64.1"\n    },\n    "requestIp":"0:0:0:0:0:0:0:1",\n    "requestMethod":"GET",\n    "requestParam":"{}",\n    "requestUri":"/index",\n    "responseBody":"this is index.",\n    "responseHeaders":{},\n    "serviceId":"apiboot-custom-logging-traceid",\n    "serviceIp":"127.0.0.1",\n    "servicePort":"8080",\n    "spanId":"group-1780993769",\n    "startTime":1571711067643,\n    "timeConsuming":21,\n    "traceId":"local1111437283"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"traceId"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"spanId"),"\u5df2\u7ecf\u4fee\u6539\u6210\u6211\u4eec\u81ea\u5b9a\u4e49\u7684\u7f16\u53f7\u751f\u6210\u7b56\u7565\u65b9\u5f0f\u3002"),(0,o.kt)("h2",{id:"\u6572\u9ed1\u677f\u5212\u91cd\u70b9"},"\u6572\u9ed1\u677f\u5212\u91cd\u70b9"),(0,o.kt)("p",null,"\u672c\u7ae0\u8282\u4e3b\u8981\u662f\u8bb2\u5230\u4e86\u5982\u4f55\u81ea\u5b9a\u4e49",(0,o.kt)("inlineCode",{parentName:"p"},"traceId"),"\u4ee5\u53ca",(0,o.kt)("inlineCode",{parentName:"p"},"spanId"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingFactoryBeanCustomizer"),"\u5bf9",(0,o.kt)("inlineCode",{parentName:"p"},"LoggingFactoryBean"),"\u5bf9\u8c61\u8fdb\u884c\u6df1\u5ea6\u7684\u81ea\u5b9a\u4e49\u914d\u7f6e\uff0c\u6709\u5173",(0,o.kt)("inlineCode",{parentName:"p"},"ApiBoot Logging"),"\u4f7f\u7528\u7684\u6b63\u786e\u59ff\u52bf\u8fd8\u6709\u5f88\u591a\uff0c\u656c\u8bf7\u671f\u5f85\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bf7\u7ed3\u5408\u6587\u4e2d\u524d\u6587\u56de\u987e\u90e8\u5206\u8fdb\u884c\u7f16\u5199\u6d4b\u8bd5\u3002")),(0,o.kt)("h2",{id:"\u4ee3\u7801\u793a\u4f8b"},"\u4ee3\u7801\u793a\u4f8b"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u559c\u6b22\u672c\u7bc7\u6587\u7ae0\u8bf7\u4e3a\u6e90\u7801\u4ed3\u5e93\u70b9\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"Star"),"\uff0c\u8c22\u8c22\uff01\uff01\uff01\n\u672c\u7bc7\u6587\u7ae0\u793a\u4f8b\u6e90\u7801\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u9014\u5f84\u83b7\u53d6\uff0c\u76ee\u5f55\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"apiboot-custom-logging-traceid"),"\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gitee\uff1a",(0,o.kt)("a",{parentName:"li",href:"https://gitee.com/minbox-projects/api-boot-chapter"},"https://gitee.com/minbox-projects/api-boot-chapter"))))}m.isMDXComponent=!0},7027:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/apiboot-custom-logging-traceid-1-fa67c2cf54de4133ec3b2bfeb8f20f89.png"}}]);