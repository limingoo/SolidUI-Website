"use strict";(self.webpackChunksolidui_website=self.webpackChunksolidui_website||[]).push([[477],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=l,y=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(7462),l=(n(7294),n(3905));const o={id:"deployment-standalone",title:"\u72ec\u7acb\u90e8\u7f72",sidebar_position:3},i="SolidUI \u5355\u72ec\u90e8\u7f72",a={unversionedId:"deployment/deployment-standalone",id:"deployment/deployment-standalone",title:"\u72ec\u7acb\u90e8\u7f72",description:"1.\u9996\u6b21\u5b89\u88c5\u51c6\u5907\u4e8b\u9879",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/deployment-standalone.md",sourceDirName:"deployment",slug:"/deployment/deployment-standalone",permalink:"/zh-CN/docs/deployment/deployment-standalone",draft:!1,editUrl:"https://github.com/CloudOrc/SolidUI-Website/edit/dev/i18n/zh-CN/docusaurus-plugin-content-docs/current/deployment/deployment-standalone.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"deployment-standalone",title:"\u72ec\u7acb\u90e8\u7f72",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Docker-Compose \u90e8\u7f72",permalink:"/zh-CN/docs/deployment/deployment-docker"},next:{title:"\u793e\u533a\u5171\u5efa\u5408\u4f5c",permalink:"/zh-CN/docs/operational/community-operation/"}},s={},d=[{value:"1.\u9996\u6b21\u5b89\u88c5\u51c6\u5907\u4e8b\u9879",id:"1\u9996\u6b21\u5b89\u88c5\u51c6\u5907\u4e8b\u9879",level:2},{value:"1.1 Linux \u670d\u52a1\u5668",id:"11-linux-\u670d\u52a1\u5668",level:3},{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:4},{value:"1.2 JDK\u51c6\u5907",id:"12-jdk\u51c6\u5907",level:3},{value:"1.3 \u6570\u636e\u5e93\u51c6\u5907",id:"13-\u6570\u636e\u5e93\u51c6\u5907",level:3},{value:"2.\u914d\u7f6e\u4fee\u6539",id:"2\u914d\u7f6e\u4fee\u6539",level:2},{value:"2.1 \u5b89\u88c5\u5305\u51c6\u5907",id:"21-\u5b89\u88c5\u5305\u51c6\u5907",level:3},{value:"3.\u670d\u52a1\u7aef\u6309\u7167\u548c\u542f\u52a8",id:"3\u670d\u52a1\u7aef\u6309\u7167\u548c\u542f\u52a8",level:2},{value:"3.1 \u51c6\u5907\u5de5\u4f5c",id:"31-\u51c6\u5907\u5de5\u4f5c",level:3},{value:"3.2 \u914d\u7f6e\u4fee\u6539",id:"32-\u914d\u7f6e\u4fee\u6539",level:3},{value:"3.3 \u670d\u52a1\u7aef\u542f\u52a8",id:"33-\u670d\u52a1\u7aef\u542f\u52a8",level:3},{value:"4.\u524d\u7aef\u90e8\u7f72",id:"4\u524d\u7aef\u90e8\u7f72",level:2},{value:"4.1 \u51c6\u5907\u5de5\u4f5c",id:"41-\u51c6\u5907\u5de5\u4f5c",level:3},{value:"4.2 \u542f\u52a8",id:"42-\u542f\u52a8",level:3}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"solidui-\u5355\u72ec\u90e8\u7f72"},"SolidUI \u5355\u72ec\u90e8\u7f72"),(0,l.kt)("h2",{id:"1\u9996\u6b21\u5b89\u88c5\u51c6\u5907\u4e8b\u9879"},"1.\u9996\u6b21\u5b89\u88c5\u51c6\u5907\u4e8b\u9879"),(0,l.kt)("h3",{id:"11-linux-\u670d\u52a1\u5668"},"1.1 Linux \u670d\u52a1\u5668"),(0,l.kt)("h4",{id:"\u786c\u4ef6\u8981\u6c42"},"\u786c\u4ef6\u8981\u6c42"),(0,l.kt)("p",null,"\u5b89\u88c5SolidUI \u5fae\u670d\u52a11\u4e2a\uff0c\u81f3\u5c11512M\u5185\u5b58\u3002\u6bcf\u4e2a\u5fae\u670d\u52a1\u9ed8\u8ba4\u914d\u7f6e\u542f\u52a8\u7684jvm -Xmx \u5185\u5b58\u5927\u5c0f\u4e3a 512M\uff08\u5185\u5b58\u4e0d\u591f\u7684\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u8c03\u5c0f\u81f3256/128M\uff0c\u5185\u5b58\u8db3\u591f\u60c5\u51b5\u4e0b\u4e5f\u53ef\u4ee5\u8c03\u5927\uff09\u3002"),(0,l.kt)("h3",{id:"12-jdk\u51c6\u5907"},"1.2 JDK\u51c6\u5907"),(0,l.kt)("p",null,"java\u7248\u672c\u8981\u6c42\uff1ajdk1.8.0_201 \u6216\u4ee5\u4e0a\u7248\u672c"),(0,l.kt)("h3",{id:"13-\u6570\u636e\u5e93\u51c6\u5907"},"1.3 \u6570\u636e\u5e93\u51c6\u5907"),(0,l.kt)("p",null,"Mysql5.7 \u6216\u4ee5\u4e0a\u7248\u672c"),(0,l.kt)("h2",{id:"2\u914d\u7f6e\u4fee\u6539"},"2.\u914d\u7f6e\u4fee\u6539"),(0,l.kt)("h3",{id:"21-\u5b89\u88c5\u5305\u51c6\u5907"},"2.1 \u5b89\u88c5\u5305\u51c6\u5907"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u65b9\u5f0f1\uff1a\u4ece\u5b98\u7f51\u4e0b\u8f7d\u5730\u5740: ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/CloudOrc/SolidUI/releases"},"https://github.com/CloudOrc/SolidUI/releases")," \uff0c\u4e0b\u8f7d\u5bf9\u5e94\u7684\u5b89\u88c5\u5305\uff08\u6574\u4f53\u5b89\u88c5\u5305\uff09\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u65b9\u5f0f2\uff1a\u6839\u636eSolidUI \u540e\u7aef\u7f16\u8bd1\u548c\u524d\u7aef\u7f16\u8bd1\u81ea\u884c\u7f16\u8bd1\u51fa\u9879\u76ee\u5b89\u88c5\u5305\u3002")),(0,l.kt)("p",null,"\u4e0a\u4f20\u5b89\u88c5\u5305solidui-x.x.x-bin.tar.gz\u540e\uff0c\u8fdb\u884c\u89e3\u538b\u5b89\u88c5\u5305"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0}," tar -zxvf solidui-x.x.x-bin.tar.gz\n")),(0,l.kt)("p",null,"\u89e3\u538b\u540e\u7684\u76ee\u5f55\u7ed3\u6784\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"drwxr-xr-x 2 root root  4096 Jun 10 20:31 docker\ndrwxr-xr-x 6 root root  4096 Jun 11 17:57 entrance-server\n-rw-r--r-- 1 root root 27711 Jun  4 21:47 LICENSE\ndrwxr-xr-x 3 root root  4096 Jun 11 18:03 licenses\n-rw-r--r-- 1 root root 24875 Jun  4 19:29 NOTICE\ndrwxr-xr-x 4 root root  4096 Jun 11 18:26 solidui-web\n")),(0,l.kt)("h2",{id:"3\u670d\u52a1\u7aef\u6309\u7167\u548c\u542f\u52a8"},"3.\u670d\u52a1\u7aef\u6309\u7167\u548c\u542f\u52a8"),(0,l.kt)("h3",{id:"31-\u51c6\u5907\u5de5\u4f5c"},"3.1 \u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# \u521d\u59cb\u5316\u6570\u636e\u5e93ddl \u548c dml \u8def\u5f84\nsolidui-x.x.x-bin/entrance-server/conf/sql/mysql/solidui_mysql.sql\n\n# \u8fdb\u5165mysql\u6570\u636e\u5e93\nmysql -h192.168.xx.xx -P3306 -uroot -p\n\n# \u521b\u5efa\u6570\u636e\u5e93\nCREATE DATABASE solidui DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;\n\n\n# \u4fee\u6539\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\uff0c\u4fee\u6539\u8868solidui_model_type\uff0ctoken\u548cbaseurl\u5b57\u6bb5 (0.2.0\u7248\u672c\u652f\u6301)\ntoken\u4e3a\u6a21\u578bAPI token\nbaseurl\u4e3a\u6a21\u578bAPI\u57fa\u7840\u5730\u5740\uff0c\u4f8b\u5982\uff1ahttps://api.openai.com\uff08\u8fd9\u662f\u56fd\u5916openai\u5730\u5740\uff09\uff0chttps://api.chatanywhere.com.cn\uff08openai\u56fd\u5185\u4ee3\u7406\u5730\u5740\uff09\uff0chttp://ip:port\uff08chatGLM\u5730\u5740\uff09\n\nsolidui-x.x.x-bin/entrance-server/conf/sql/mysql/solidui_mysql.sql\nINSERT INTO `solidui_model_type` (`id`, `name`, `type_name`, `prompt`, `token`, `baseurl`)\nVALUES\n(1,'gpt-3.5-turbo','gpt',NULL,NULL,NULL),\n(2,'gpt-4','gpt',NULL,NULL,NULL),\n(3,'chatglm_lite','chatglm',NULL,NULL,NULL);\n\n\n\n# \u6267\u884c\u6570\u636e\u5e93\u521d\u59cb\u5316\u811a\u672c\n\nsource solidui-x.x.x-bin/entrance-server/conf/sql/mysql/solidui_mysql.sql\n\n")),(0,l.kt)("h3",{id:"32-\u914d\u7f6e\u4fee\u6539"},"3.2 \u914d\u7f6e\u4fee\u6539"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd solidui-x.x.x-bin/entrance-server/conf\n# \u4fee\u6539\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\nvi application.yaml\ndatasource:\nurl: jdbc:mysql://localhost:3306/solidui?useSSL=false&useUnicode=true&characterEncoding=UTF-8&serverTimezone=Asia/Shanghai\nusername: root\npassword: root\n\n# 0.2.0 \u7248\u672c\u589e\u52a0python\u670d\u52a1\u914d\u7f6e\nvi solidui-x.x.x-bin/soliduimodelui/.env\n# \u4fee\u6539\u6570\u636e\u5e93\u8fde\u63a5\u4fe1\u606f\nDB_HOST=localhost\nDB_PORT=3306\nDB_NAME=solidui\nDB_USER=root\nDB_PASS=SolidUI@123\n\n")),(0,l.kt)("h3",{id:"33-\u670d\u52a1\u7aef\u542f\u52a8"},"3.3 \u670d\u52a1\u7aef\u542f\u52a8"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cd solidui-x.x.x-bin/entrance-server\n# \u542f\u52a8\u670d\u52a1\nsh bin/start.sh\n# \u505c\u6b62\u670d\u52a1\nsh bin/stop.sh\n\n#0.2.0 \u7248\u672c\u589e\u52a0python\u670d\u52a1\ncd solidui-x.x.x-bin\npip install -e .\nmodelui\n")),(0,l.kt)("h2",{id:"4\u524d\u7aef\u90e8\u7f72"},"4.\u524d\u7aef\u90e8\u7f72"),(0,l.kt)("h3",{id:"41-\u51c6\u5907\u5de5\u4f5c"},"4.1 \u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("p",null,"\u53c2\u8003",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/deployment/deployment-web"},"\u524d\u7aef\u90e8\u7f72")),(0,l.kt)("h3",{id:"42-\u542f\u52a8"},"4.2 \u542f\u52a8"),(0,l.kt)("p",null,"\u8bbf\u95ee\u9ed8\u8ba4\u94fe\u63a5 http://localhost:8099"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u7528\u6237\u540d\u5bc6\u7801\uff1aadmin/admin"))}c.isMDXComponent=!0}}]);