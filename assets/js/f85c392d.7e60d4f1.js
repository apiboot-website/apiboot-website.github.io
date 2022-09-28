"use strict";(self.webpackChunkapiboot_minbox_org=self.webpackChunkapiboot_minbox_org||[]).push([[3500],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),s=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6169:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={title:"SSH\u5b89\u5168\u901a\u9053\u7aef\u53e3\u4ee3\u7406\u8f6c\u53d1\u7ec4\u4ef6",sidebar_position:1},o=void 0,i={unversionedId:"components/api-boot-ssh-agent",id:"components/api-boot-ssh-agent",title:"SSH\u5b89\u5168\u901a\u9053\u7aef\u53e3\u4ee3\u7406\u8f6c\u53d1\u7ec4\u4ef6",description:"\u5982\u679c\u8fd0\u7ef4\u4eba\u5458\u53ea\u7ed9\u4f60\u901a\u8fc7SSH\u516c\u94a5\u7684\u65b9\u5f0f\u6388\u6743\u8bbf\u95ee\uff0c\u8be5\u670d\u52a1\u5668\u5e76\u4e0d\u5f00\u653e\u6211\u4eec\u9700\u8981\u7684\u670d\u52a1\u7684\u7aef\u53e3\u53f7\u65f6\uff0c\u6211\u4eec\u8be5\u600e\u4e48\u505a\u624d\u80fd\u8bbf\u95ee\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u5462\uff1f",source:"@site/docs/components/api-boot-ssh-agent.md",sourceDirName:"components",slug:"/components/api-boot-ssh-agent",permalink:"/docs/components/api-boot-ssh-agent",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"SSH\u5b89\u5168\u901a\u9053\u7aef\u53e3\u4ee3\u7406\u8f6c\u53d1\u7ec4\u4ef6",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Grace\u4e1a\u52a1\u64cd\u4f5c\u65e5\u5fd7\u7ec4\u4ef6",permalink:"/docs/components/api-boot-garce"},next:{title:"Spring Security\u5c01\u88c5\u7ec4\u4ef6",permalink:"/docs/components/api-boot-security"}},p={},s=[{value:"1. \u4f7f\u7528\u573a\u666f",id:"1-\u4f7f\u7528\u573a\u666f",level:2},{value:"2. \u7ec4\u4ef6\u4f9d\u8d56",id:"2-\u7ec4\u4ef6\u4f9d\u8d56",level:2},{value:"3. \u914d\u7f6e\u53c2\u6570",id:"3-\u914d\u7f6e\u53c2\u6570",level:2},{value:"4. \u5b9e\u73b0\u539f\u7406",id:"4-\u5b9e\u73b0\u539f\u7406",level:2},{value:"4.1 AgentConnection",id:"41-agentconnection",level:3},{value:"4.2 SshAgentServletContextListener",id:"42-sshagentservletcontextlistener",level:3},{value:"5. \u8ba4\u8bc1\u65b9\u5f0f",id:"5-\u8ba4\u8bc1\u65b9\u5f0f",level:2},{value:"6. \u5728Junit5\u4e2d\u4f7f\u7528",id:"6-\u5728junit5\u4e2d\u4f7f\u7528",level:2},{value:"7. \u4ee3\u7406\u65e5\u5fd7",id:"7-\u4ee3\u7406\u65e5\u5fd7",level:2},{value:"8. \u4ee3\u7406\u76ee\u6807\u5c40\u57df\u7f51\u7aef\u53e3",id:"8-\u4ee3\u7406\u76ee\u6807\u5c40\u57df\u7f51\u7aef\u53e3",level:2},{value:"9. \u5e38\u89c1\u95ee\u9898",id:"9-\u5e38\u89c1\u95ee\u9898",level:2},{value:"9.1 JSCH\u79d8\u94a5\u8fde\u63a5\u5f02\u5e38",id:"91-jsch\u79d8\u94a5\u8fde\u63a5\u5f02\u5e38",level:3}],d={toc:s};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u5982\u679c\u8fd0\u7ef4\u4eba\u5458\u53ea\u7ed9\u4f60\u901a\u8fc7SSH\u516c\u94a5\u7684\u65b9\u5f0f\u6388\u6743\u8bbf\u95ee\uff0c\u8be5\u670d\u52a1\u5668\u5e76\u4e0d\u5f00\u653e\u6211\u4eec\u9700\u8981\u7684\u670d\u52a1\u7684\u7aef\u53e3\u53f7\u65f6\uff0c\u6211\u4eec\u8be5\u600e\u4e48\u505a\u624d\u80fd\u8bbf\u95ee\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u5462\uff1f"),(0,r.kt)("p",null,"\u5176\u5b9e\u4e0a\u9762\u7684\u95ee\u9898\u6211\u4eec\u5728\u5e73\u65f6\u5de5\u4f5c\u4e2d\u7ecf\u5e38\u9047\u5230\uff0c\u4e3a\u4e86\u670d\u52a1\u7684\u6570\u636e\u5b89\u5168\u6027\u8003\u8651\uff0c\u4e00\u822c\u4e0d\u4f1a\u76f4\u63a5\u5c06\u7aef\u53e3\u53f7\u5f00\u653e\uff0c\u6211\u4eec\u53ea\u80fd\u901a\u8fc7\u767b\u5f55\u670d\u52a1\u5668\u540e\u4f7f\u7528\u547d\u4ee4\u624d\u53ef\u4ee5\u8fdb\u884c\u64cd\u4f5c\uff0c\u76ee\u524d\u5e02\u9762\u4e0a\u4e5f\u6709\u5f88\u591a\u7684\u5de5\u5177\u652f\u6301SSH\u516c\u94a5\u7684\u65b9\u5f0f\u8fde\u63a5\uff0c\u6bd4\u5982\uff1aDataGrip\u3001Navicat\u3001Redis Desktop Manager\u3001MongoDB Compass\u7b49\u5de5\u5177\u3002"),(0,r.kt)("p",null,"\u90a3\u5982\u679c\u6211\u4eec\u7684\u672c\u5730\u9879\u76ee\u9700\u8981\u8fde\u63a5\u5230\u8fdc\u7a0b\u670d\u52a1\u7684\u6570\u636e\u5e93\u3001Redis\u6216\u8005MongoDB\u65f6\u8be5\u600e\u4e48\u53bb\u505a\u5462\uff1f"),(0,r.kt)("p",null,"GitHub\u6e90\u7801\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/minbox-projects/ssh-agent"},"minbox-projects/ssh-agent")),(0,r.kt)("h2",{id:"1-\u4f7f\u7528\u573a\u666f"},"1. \u4f7f\u7528\u573a\u666f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SSH-Agent\u5c31\u662f\u6765\u89e3\u51b3\u8fd9\u7c7b\u95ee\u9898\u7684\uff0c\u4e3b\u8981\u539f\u7406\u662f\u5728\u672c\u5730\u521b\u5efa\u4e00\u4e2a\u7aef\u53e3\u901a\u8fc7SSH\u65b9\u5f0f\u767b\u5f55\u540e\u4e0e\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u7aef\u53e3\u53f7\u8fdb\u884c\u7ed1\u5b9a\uff0c\u8fd9\u6837\u6211\u4eec\u8fde\u63a5\u672c\u5730\u7684\u7aef\u53e3\u53f7\u65f6\u5c31\u53ef\u4ee5\u8bbf\u95ee\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u670d\u52a1\u4e86\u3002")),(0,r.kt)("h2",{id:"2-\u7ec4\u4ef6\u4f9d\u8d56"},"2. \u7ec4\u4ef6\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>org.minbox.framework</groupId>\n  <artifactId>api-boot-starter-ssh-agent</artifactId>\n</dependency>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5982\u679c\u672a\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot"),"\u7248\u672c\u4f9d\u8d56\uff0c\u8bf7\u8bbf\u95ee",(0,r.kt)("a",{parentName:"p",href:"/docs/out-box/version-rely"},"\u7248\u672c\u4f9d\u8d56"),"\u67e5\u770b\u6dfb\u52a0\u65b9\u5f0f\u3002")),(0,r.kt)("h2",{id:"3-\u914d\u7f6e\u53c2\u6570"},"3. \u914d\u7f6e\u53c2\u6570"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml/properties"),"\u914d\u7f6e\u6587\u4ef6\u5185\u7684\u914d\u7f6e\u524d\u7f00\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"api.boot.ssh-agent"),"\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"api.boot.ssh-agent.configs"),"\u914d\u7f6e\u591a\u4e2a\u4ee3\u7406\u4fe1\u606f\uff0c\u6bcf\u4e2a\u4ee3\u7406\u914d\u7f6e\u7684\u53c2\u6570\u5982\u4e0b\u8868\u6240\u793a\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"username"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8fde\u63a5\u670d\u52a1\u5668\u7684\u7528\u6237\u540d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"password"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8fde\u63a5\u670d\u52a1\u5668\u7684\u5bc6\u7801\uff08\u4ec5\u9650\u5bc6\u7801\u8ba4\u8bc1\u65b9\u5f0f\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"authentication-method"),(0,r.kt)("td",{parentName:"tr",align:null},"SSH_PRIVATE_KEY"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8ba4\u8bc1\u65b9\u5f0f\uff0c\u53c2\u6570\u503c\uff1a",(0,r.kt)("br",null),"USERNAME_PASSWORD\uff1a\u7528\u6237\u540d\u5bc6\u7801\u65b9\u5f0f",(0,r.kt)("br",null),"SSH_PRIVATE_KEY\uff1aSSH\u79d8\u94a5\u65b9\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"server-ip"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8fde\u63a5\u670d\u52a1\u5668\u7684IP\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssh-port"),(0,r.kt)("td",{parentName:"tr",align:null},"22"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8fde\u63a5\u670d\u52a1\u5668\u7684SSH\u7aef\u53e3\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key-type"),(0,r.kt)("td",{parentName:"tr",align:null},"rsa"),(0,r.kt)("td",{parentName:"tr",align:null},"SSH\u79d8\u94a5\u52a0\u5bc6\u7c7b\u578b\uff0c\u53c2\u6570\u503c\uff1a",(0,r.kt)("br",null),"rsa\uff1aRSA\u7c7b\u578b\u52a0\u5bc6",(0,r.kt)("br",null),"ed25519\uff1aED25519\u7c7b\u578b\u52a0\u5bc6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssh-private-key-path"),(0,r.kt)("td",{parentName:"tr",align:null},"~/.ssh/id_rsa"),(0,r.kt)("td",{parentName:"tr",align:null},"SSH\u65b9\u5f0f\u8ba4\u8bc1\u79d8\u94a5\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssh-known-hosts-path"),(0,r.kt)("td",{parentName:"tr",align:null},"~/.ssh/known_hosts"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u5df2\u77e5\u4e3b\u673a\u914d\u7f6e\u6587\u4ef6\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"local-port"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u672c\u5730\u4ee3\u7406\u7684\u7aef\u53e3\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forward-target-port"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u914d\u7f6e\u8f6c\u53d1\u5230\u8fdc\u7a0b\u670d\u52a1\u5668\u7684\u7aef\u53e3\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"forward-target-ip"),(0,r.kt)("td",{parentName:"tr",align:null},"127.0.0.1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u767b\u5f55\u540e\u7684\u670d\u52a1\u5668IP\u5730\u5740\uff0c\u5982\u679c\u662f\u5c40\u57df\u7f51\uff0c\u53ef\u4ee5\u914d\u7f6e\u5185\u7f51IP\u5730\u5740")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addition"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"jsch\u8ba4\u8bc1\u9700\u8981\u7684\u989d\u5916\u9644\u52a0\u53c2\u6570\u5217\u8868")))),(0,r.kt)("h2",{id:"4-\u5b9e\u73b0\u539f\u7406"},"4. \u5b9e\u73b0\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot SSH Agent"),"\u901a\u8fc7\u5c01\u88c5",(0,r.kt)("inlineCode",{parentName:"p"},"jsch"),"\u6765\u5b9e\u73b0\u4ee3\u7406SSH\u7aef\u53e3\uff0c\u5e76\u4e14\u4e0e\u4ee3\u7406\u7aef\u53e3\u4fdd\u6301\u957f\u8fde\u63a5\u5b9e\u73b0\u6570\u636e\u4e0d\u95f4\u65ad\u7684\u8f6c\u53d1\u3002"),(0,r.kt)("h3",{id:"41-agentconnection"},"4.1 AgentConnection"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AgentConnection"),"\u662f\u4e00\u4e2a\u63a5\u53e3\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"ssh-agent"),"\u63d0\u4f9b\u4e86\u8be5\u63a5\u53e3\u7684\u9ed8\u8ba4\u5b9e\u73b0\u7c7b",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultAgentConnection"),"\uff0c\u901a\u8fc7\u5b9e\u4f8b\u5316",(0,r.kt)("inlineCode",{parentName:"p"},"DefaultAgentConnection"),"\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4ee3\u7406SSH\u7aef\u53e3\uff0c\u90e8\u5206\u6e90\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'try {\n  AgentConnection connection = new DefaultAgentConnection(config);\n  this.connections.add(connection);\n  connection.connect();\n} catch (Exception e) {\n  log.error("Connection\uff1a{}:{}\uff0ctry agent failure.", config.getServerIp(), config.getForwardTargetPort(), e);\n}\n')),(0,r.kt)("h3",{id:"42-sshagentservletcontextlistener"},"4.2 SshAgentServletContextListener"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot"),"\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"AgentConnection"),"\u8fdb\u884c\u4e86\u5c01\u88c5\uff0c\u901a\u8fc7\u76d1\u542c",(0,r.kt)("inlineCode",{parentName:"p"},"ServletContextEvent"),"\u4e8b\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"ServletContextListener"),"\u76d1\u542c\u5668\u6765\u5b9e\u73b0\u9879\u76ee\u542f\u52a8\u6210\u529f\u540e\u6839\u636e\u914d\u7f6e\u7684\u4ee3\u7406\u53c2\u6570\u8fdb\u884c\u5f00\u542f\u4ee3\u7406SSH\u901a\u9053\u3002"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u4e0d\u8fc7\uff0c\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"SshAgentServletContextListener"),"\u6709\u4e2a\u7f3a\u9677\uff01\uff01\uff01"),(0,r.kt)("p",{parentName:"admonition"},"\u53ea\u80fd\u6b63\u5e38\u542f\u52a8\u9879\u76ee\u65f6\u624d\u53ef\u4ee5\u4ee3\u7406SSH\u7aef\u53e3\u8f6c\u53d1\u901a\u9053\uff0c\u5982\u679c\u6211\u4eec\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Junit"),"\u6765\u8fdb\u884c\u5355\u5143\u6d4b\u8bd5\u65f6\u867d\u7136\u4f1a\u542f\u52a8\u9879\u76ee\u4f46\u662f\u5e76\u4e0d\u4f1a\u89e6\u53d1",(0,r.kt)("inlineCode",{parentName:"p"},"ServletContextEvent"),"\u4e8b\u4ef6\uff0c\u56e0\u6b64\u5728\u6267\u884c\u5355\u5143\u7684\u65f6\u5019\u4f1a\u63d0\u793a\u65e0\u6cd5\u8fde\u63a5\uff0c\u9488\u5bf9\u8fd9\u4e2a\u95ee\u9898\u8bf7\u67e5\u9605",(0,r.kt)("a",{parentName:"p",href:"#5-%E5%9C%A8junit5%E4%B8%AD%E4%BD%BF%E7%94%A8"},"\u5728junit5\u4e2d\u4f7f\u7528"))),(0,r.kt)("h2",{id:"5-\u8ba4\u8bc1\u65b9\u5f0f"},"5. \u8ba4\u8bc1\u65b9\u5f0f"),(0,r.kt)("p",null,"\u76ee\u524d\u767b\u5f55\u670d\u52a1\u5668\u7684\u8ba4\u8bc1\u65b9\u5f0f\u6709\u4e24\u79cd\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d + \u5bc6\u7801\uff1a\u76f4\u63a5\u901a\u8fc7\u7528\u6237\u540d\u5bc6\u7801\u7684\u65b9\u5f0f\u767b\u5f55\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u4e0d\u9700\u8981\u8d70SSH"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u540d + \u79d8\u94a5\uff1a\u9700\u8981\u901a\u8fc7SSH\u8fde\u63a5\u8fdc\u7a0b\u670d\u52a1\u5668\uff0c\u8fdc\u7a0b\u670d\u52a1\u5668\u9700\u8981\u914d\u7f6e\u6388\u6743\u7684\u516c\u94a5\uff08\u9ed8\u8ba4\u65b9\u5f0f\uff0c\u4e5f\u5efa\u8bae\u4f7f\u7528\u8fd9\u79cd\uff0c\u5b89\u5168\u7cfb\u6570\u597d\u9ad8\u5f88\u591a\uff09")),(0,r.kt)("h2",{id:"6-\u5728junit5\u4e2d\u4f7f\u7528"},"6. \u5728Junit5\u4e2d\u4f7f\u7528"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u4e00\uff1a\u7ee7\u627fSshAgentJunitTest\u5355\u5143\u6d4b\u8bd5\u7c7b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootTest\nclass SimulationServiceApiApplicationTests extends SshAgentJunitTest {\n    @Test\n    void contextLoads() {\n        //...\n    }\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5728\u4e0a\u9762\u4ee3\u7801\u793a\u4f8b\u4e2d\uff0c\u5355\u5143\u6d4b\u8bd5\u7c7b",(0,r.kt)("inlineCode",{parentName:"p"},"SimulationServiceApiApplicationTests"),"\u7ee7\u627f\u81ea",(0,r.kt)("inlineCode",{parentName:"p"},"SshAgentJunitTest"),"\u540e\uff0c\u5728\u6267\u884c",(0,r.kt)("inlineCode",{parentName:"p"},"contextLoads()"),"\u65b9\u6cd5\u65f6\uff0c\u6267\u884c\u524d\u4f1a\u81ea\u52a8",(0,r.kt)("strong",{parentName:"p"},"\u5f00\u542f"),"SSH\u4ee3\u7406\u8fde\u63a5\uff0c\u6267\u884c\u540e\u4f1a\u81ea\u52a8",(0,r.kt)("strong",{parentName:"p"},"\u5173\u95ed"),"\u4ee3\u7406\u8fde\u63a5\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6b65\u9aa4\u4e8c\uff1a\u6dfb\u52a0",(0,r.kt)("inlineCode",{parentName:"strong"},"ssh-agent.yml"),"\u914d\u7f6e\u6587\u4ef6")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ssh-agent.yml"),"\u7528\u4e8e\u914d\u7f6essh\u4ee3\u7406\u8fde\u63a5\u5217\u8868\uff0c\u4f4d\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"src/test/resources"),"\u76ee\u5f55\u4e0b\uff0c\u5982\u679c\u4e0d\u521b\u5efa\u8be5\u914d\u7f6e\u6587\u4ef6\u8fd0\u884c\u5355\u5143\u6d4b\u8bd5\u65b9\u6cd5\u65f6\u4f1a\u629b\u51fa\u5f02\u5e38\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="ssh-agent.yml"',title:'"ssh-agent.yml"'},"configs:\n  # \u4ee3\u7406\u8f6c\u53d1MySQL\n  - username: developer\n    serverIp: x.x.x.x\n    localPort: 3306\n    forwardTargetPort: 59500\n  # \u4ee3\u7406\u8f6c\u53d1Redis\n  - username: developer\n    serverIp: x.x.x.x\n    localPort: 6379\n    forwardTargetPort: 59504\n  # \u4ee3\u7406\u8f6c\u53d1mongo\n  - username: developer\n    serverIp: x.x.x.x\n    localPort: 27017\n    forwardTargetPort: 59503\n")),(0,r.kt)("h2",{id:"7-\u4ee3\u7406\u65e5\u5fd7"},"7. \u4ee3\u7406\u65e5\u5fd7"),(0,r.kt)("p",null,"\u5728\u9879\u76ee\u542f\u52a8\u65f6\u5982\u679c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"application.yml/.properties"),"\u6587\u4ef6\u5185\u914d\u7f6e\u7684\u670d\u52a1\u5668\u8fde\u63a5\u4fe1\u606f\u6ca1\u6709\u95ee\u9898\uff0c\u63a7\u5236\u53f0\u4f1a\u8f93\u51fa\u7ed1\u5b9a\u8f6c\u53d1\u7aef\u53e3\u6210\u529f\u7684\u65e5\u5fd7\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Port forwarding binding is completed, local port : 3307, forward IP: 127.0.0.1, forward port : 3306\n")),(0,r.kt)("h2",{id:"8-\u4ee3\u7406\u76ee\u6807\u5c40\u57df\u7f51\u7aef\u53e3"},"8. \u4ee3\u7406\u76ee\u6807\u5c40\u57df\u7f51\u7aef\u53e3"),(0,r.kt)("p",null,"\u6709\u4e00\u79cd\u60c5\u51b5\uff1a\u7ba1\u7406\u5458\u7ed9\u4f60\u5f00\u901a\u4e86\u4e00\u4e2a\u8df3\u677f\u673a\u8bbf\u95ee\u6743\u9650\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7ssh\u65b9\u5f0f\u767b\u5f55\u8be5\u8df3\u677f\u673a\uff0c\u4f46\u662f\u4f60\u9700\u8981\u8bbf\u95ee\u7684\u5177\u4f53\u670d\u52a1\u5728\u53e6\u5916\u4e00\u53f0\u6216\u8005\u591a\u53f0\u670d\u52a1\u5668\u4e0a\uff0c\u5177\u4f53\u670d\u52a1\u7684\u673a\u5668\u8ddf\u8df3\u677f\u673a\u662f\u4e00\u4e2a\u5c40\u57df\u7f51\uff0c\u9488\u5bf9\u8fd9\u4e2a\u60c5\u51b5\u6211\u4eec\u600e\u4e48\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot SshAgent"),"\u6765\u914d\u7f6e\u5462\uff1f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5047\u5982\u670d\u52a1\u5668\u90e8\u7f72\u73af\u5883\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\u8df3\u677f\u673a\uff1a192.168.1.100\nMySQL\u670d\u52a1\uff1a192.168.1.101\nRedis\u670d\u52a1\uff1a192.168.1.102\nMongoDB\u670d\u52a1\uff1a192.168.1.103\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u9488\u5bf9\u4e0a\u8ff0\u670d\u52a1\u90e8\u7f72\u73af\u5883\uff0c\u5bf9\u5e94\u7684\u4ee3\u7406\u914d\u7f6e\u5982\u4e0b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="application.yml"',title:'"application.yml"'},"api:\n  boot:\n    ssh-agent:\n      configs:\n        # \u4ee3\u7406\u8f6c\u53d1MySQL\n         # ssh\u65b9\u5f0f\u767b\u5f55\u7684\u8df3\u677f\u673a\u7528\u6237\u540d\n        - username: developer\n          # ssh\u65b9\u5f0f\u767b\u5f55\u7684\u8df3\u677f\u673a\u670d\u52a1\u5668IP\n          server-ip: 192.168.1.100\n          # \u672c\u5730\u8bbf\u95ee\u4ee3\u7406\u670d\u52a1\u7684\u7aef\u53e3\u53f7\n          # \u4ee3\u7406\u6210\u529f\u540e\u8bbf\u95ee127.0.0.1:3306\u7b49\u4e8e\u8bbf\u95ee192.168.1.101:3306\n          local-port: 3306\n          # \u8f6c\u53d1\u76ee\u6807\u7684\u5c40\u57df\u7f51\u670d\u52a1IP\n          forward-target-ip: 192.168.1.101\n          # \u8f6c\u53d1\u76ee\u6807\u7684\u5c40\u57df\u7f51\u670d\u52a1Port\n          forward-target-port: 3306\n        # \u4ee3\u7406\u8f6c\u53d1Redis\n        - username: developer\n          server-ip: 192.168.1.100\n          local-port: 6379\n          forward-target-ip: 192.168.1.102\n          forward-target-port: 6379\n        # \u4ee3\u7406\u8f6c\u53d1MongoDB\n        - username: developer\n          server-ip: 192.168.1.100\n          local-port: 27017\n          forward-target-ip: 192.168.1.103\n          forward-target-port: 27017\n")),(0,r.kt)("h2",{id:"9-\u5e38\u89c1\u95ee\u9898"},"9. \u5e38\u89c1\u95ee\u9898"),(0,r.kt)("h3",{id:"91-jsch\u79d8\u94a5\u8fde\u63a5\u5f02\u5e38"},"9.1 JSCH\u79d8\u94a5\u8fde\u63a5\u5f02\u5e38"),(0,r.kt)("p",null,"\u5982\u679c\u7b2c\u4e00\u6b21\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ApiBoot SshAgent"),"\u63a7\u5236\u53f0\u8f93\u51fa\u4ee5\u4e0b\u9519\u8bef\u4fe1\u606f\uff0c\u8bc1\u660e\u751f\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"open-ssh"),"\u79d8\u94a5\u7684\u65b9\u5f0f\u6709\u70b9\u95ee\u9898\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ERROR: Failed to authenticate with public key\ncom.jcraft.jsch.JSchException: invalid privatekey: [B@5b5361f0\n")),(0,r.kt)("p",null,"\u9488\u5bf9\u4e0a\u8ff0\u95ee\u9898\uff0c\u6211\u4eec\u53ea\u9700\u8981\u91cd\u65b0\u751f\u6210\u4e00\u6b21",(0,r.kt)("inlineCode",{parentName:"p"},"open-ssh"),"\u516c\u94a5\u5bc6\u94a5\u5bf9\u5373\u53ef\uff0c\u751f\u6210\u65f6\u4f20\u9012",(0,r.kt)("inlineCode",{parentName:"p"},"-m"),"\u53c2\u6570\u4e3a\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"PEM"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ssh-keygen -m PEM\n")))}m.isMDXComponent=!0}}]);