"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7980],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>y});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(o),u=r,y=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return o?n.createElement(y,l(l({ref:t},s),{},{components:o})):n.createElement(y,l({ref:t},s))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,l=new Array(a);l[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3660:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=o(7462),r=(o(7294),o(3905));const a={},l="SolidUI Docker-Compose deployment",c={unversionedId:"Deployment_Documentation/OverallDeployment/README_DOCKER",id:"Deployment_Documentation/OverallDeployment/README_DOCKER",title:"SolidUI Docker-Compose deployment",description:"1. Environment preparation",source:"@site/docs/Deployment_Documentation/OverallDeployment/README_DOCKER.md",sourceDirName:"Deployment_Documentation/OverallDeployment",slug:"/Deployment_Documentation/OverallDeployment/README_DOCKER",permalink:"/zh-Hans/docs/Deployment_Documentation/OverallDeployment/README_DOCKER",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Deployment_Documentation/OverallDeployment/README_DOCKER.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SolidUI front-end deployment",permalink:"/zh-Hans/docs/Deployment_Documentation/FrontEendDeployment/DEPLOY_WEB"},next:{title:"SolidUI is deployed separately",permalink:"/zh-Hans/docs/Deployment_Documentation/OverallDeployment/README_STANDALONE"}},i={},p=[{value:"1. Environment preparation",id:"1-environment-preparation",level:2},{value:"2. Start DolphinScheduler with docker-compose (recommended)",id:"2-start-dolphinscheduler-with-docker-compose-recommended",level:2},{value:"2.1 Download deployment package or source code",id:"21-download-deployment-package-or-source-code",level:3},{value:"2.2 Pull the image and start the service",id:"22-pull-the-image-and-start-the-service",level:3},{value:"2.3 Accessing Services",id:"23-accessing-services",level:3}],s={toc:p},d="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"solidui-docker-compose-deployment"},"SolidUI Docker-Compose deployment"),(0,r.kt)("h2",{id:"1-environment-preparation"},"1. Environment preparation"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Docker")," 1.13.1+\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose")," 1.11.0+"),(0,r.kt)("h2",{id:"2-start-dolphinscheduler-with-docker-compose-recommended"},"2. Start DolphinScheduler with docker-compose (recommended)"),(0,r.kt)("p",null,"This method needs to install docker-compose first, there are already a lot of information on the installation of docker-compose on the Internet, please install it yourself"),(0,r.kt)("h3",{id:"21-download-deployment-package-or-source-code"},"2.1 Download deployment package or source code"),(0,r.kt)("p",null,"Download at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/CloudOrc/SolidUI/releases"},"https://github.com/CloudOrc/SolidUI/releases")),(0,r.kt)("p",null,"Please download the source package solidui-x.x.x-bin.tar.gz"),(0,r.kt)("h3",{id:"22-pull-the-image-and-start-the-service"},"2.2 Pull the image and start the service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# Enter the server (take Centos7 as an example)\ntar -zxvf solidui-x.x.x-bin.tar.gz\n\ncd solidui-x.x.x-src/solidui-dist/docker/\n\ndocker-compose up -d\n\n")),(0,r.kt)("h3",{id:"23-accessing-services"},"2.3 Accessing Services"),(0,r.kt)("p",null,"Access link http://localhost:8099"),(0,r.kt)("p",null,"Default username and password: admin/adm"))}m.isMDXComponent=!0}}]);