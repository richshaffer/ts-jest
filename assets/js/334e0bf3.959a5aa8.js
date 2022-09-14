"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8366],{4137:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(u,".").concat(f)]||d[f]||l[f]||i;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5244:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l}});var r=n(7462),o=n(3366),i=(n(7294),n(4137)),s=["components"],a={id:"using-with-monorepo",title:"Using with monorepo"},u=void 0,c={unversionedId:"guides/using-with-monorepo",id:"version-26.5/guides/using-with-monorepo",title:"Using with monorepo",description:"To use ts-jest in a project with monorepo structure, you'll need to use Jest projects configuration.",source:"@site/versioned_docs/version-26.5/guides/using-with-monorepo.md",sourceDirName:"guides",slug:"/guides/using-with-monorepo",permalink:"/ts-jest/docs/26.5/guides/using-with-monorepo",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-26.5/guides/using-with-monorepo.md",tags:[],version:"26.5",lastUpdatedBy:"Tom Mrazauskas",lastUpdatedAt:1663166884,formattedLastUpdatedAt:"Sep 14, 2022",frontMatter:{id:"using-with-monorepo",title:"Using with monorepo"},sidebar:"version-26.5-docs",previous:{title:"Troubleshooting",permalink:"/ts-jest/docs/26.5/guides/troubleshooting"},next:{title:"Babel7 or TypeScript",permalink:"/ts-jest/docs/26.5/babel7-or-ts"}},p={},l=[],d={toc:l};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," in a project with monorepo structure, you'll need to use ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/next/configuration#projects-arraystring--projectconfig"},"Jest projects configuration"),"."),(0,i.kt)("p",null,"When using Jest ",(0,i.kt)("inlineCode",{parentName:"p"},"projects")," configuration, Jest will run ",(0,i.kt)("inlineCode",{parentName:"p"},"ts-jest")," against each project which is defined in the configuration."),(0,i.kt)("p",null,"One should not be confused between the term ",(0,i.kt)("strong",{parentName:"p"},"monorepo")," vs TypeScript ",(0,i.kt)("strong",{parentName:"p"},"project references"),". These are 2 different terms."))}f.isMDXComponent=!0}}]);