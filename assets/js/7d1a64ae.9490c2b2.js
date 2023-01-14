"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8873],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var u=2;u<o;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(7462),i=(n(7294),n(4137));const o={id:"contributing",title:"Contributing"},s=void 0,a={unversionedId:"contributing",id:"version-27.1/contributing",title:"Contributing",description:"When contributing to this repository, please first discuss the change you wish to make via ts-jest GitHub discussion or issue with the owners of this repository before making a change.",source:"@site/versioned_docs/version-27.1/contributing.md",sourceDirName:".",slug:"/contributing",permalink:"/ts-jest/docs/27.1/contributing",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-27.1/contributing.md",tags:[],version:"27.1",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1673688274,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{id:"contributing",title:"Contributing"},sidebar:"version-27.1-docs",previous:{title:"Processing flow",permalink:"/ts-jest/docs/27.1/processing"},next:{title:"Installation",permalink:"/ts-jest/docs/27.1/getting-started/installation"}},l={},u=[{value:"Pull Request Process",id:"pull-request-process",level:2},{value:"E2E Testing",id:"e2e-testing",level:2},{value:"Preparing",id:"preparing",level:3},{value:"Running",id:"running",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"When contributing to this repository, please first discuss the change you wish to make via ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest/discussions"},(0,i.kt)("inlineCode",{parentName:"a"},"ts-jest")," GitHub discussion")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest/issues"},"issue")," with the owners of this repository before making a change."),(0,i.kt)("p",null,"Please note we have a code of conduct, please follow it in all your interactions with the project."),(0,i.kt)("h2",{id:"pull-request-process"},"Pull Request Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Ensure the tests are passing and that you have latest ",(0,i.kt)("inlineCode",{parentName:"li"},"main")," branch merged in."),(0,i.kt)("li",{parentName:"ol"},"Update the ",(0,i.kt)("inlineCode",{parentName:"li"},"docs/")," with details of your changes if required."),(0,i.kt)("li",{parentName:"ol"},"If possible, squash your commits. There must be only one commit in your PR (until a review). Then after each review requesting changes, DO NOT squash your commits with the one before the review, so that we can see intermediate modifications."),(0,i.kt)("li",{parentName:"ol"},"You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"These are internal technical documents. If you're not a contributor to ",(0,i.kt)("inlineCode",{parentName:"em"},"ts-jest"),", but simply trying to use the library you'll find nothing of value here")),(0,i.kt)("h2",{id:"e2e-testing"},"E2E Testing"),(0,i.kt)("h3",{id:"preparing"},"Preparing"),(0,i.kt)("p",null,"The preparation of E2E test directory is done in ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts/e2e.js"),". Here is the process:"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/ZLBBZeCm3Bpp5RuL3gjAUsoFUzglW9GOo18Ib9XIBlljwuI7GAsgvHA9iMV6OtiIZfBaSXkCr0ZaFtxGqpKnbX2SgXjAHgKrt0QbvGh33Ilh44g7WfIfWHg4cI518o4qCsU4cHEx7aRhMf3A7PWB_CJpRvu7aB7SJvrMfitp0iBhWImeIl1HOazW3Nnz0vgxSjPqQCZlnCP6iVsKRG6AiecYcjMplTxwquDWzyh0Qc03ylnSx5XL1UcAdVmI0Zl5agoRiZ2tWHGVofFFaike-f03GM6inBopSj3eYtbkr9uDCYzizND0ro2egX2OxIUeU10FbRCTxAIPOavZv-8w6-n5sOeQGTkoZTrFlbX6GeSaf231NS3Vsyv6U2WROMgKMQm6O9BEtl7bQ6k9wJjErPFWWqbv4wNANeFR7SMRMMfYG37n0_hEq_yuGwivqR5xpZooZ4xnYGmzfuE7d9vNjcoAd-NWf3LyOyabEjZEAmG-CO4ds_y1",alt:null}),(0,i.kt)("h3",{id:"running"},"Running"),(0,i.kt)("p",null,"When a test-case needs to be run with a given template within tests, here is what's happening (in ",(0,i.kt)("inlineCode",{parentName:"p"},"e2e/__helpers__/test-case/runtime.ts"),"):"),(0,i.kt)("img",{src:"https://www.plantuml.com/plantuml/png/hLHDRzim3BthLn3OOGcsjC2EAR2UUzfFI1IPZjN8aY7ATOAX--qZPRcskwAdNV91YUHxZu-Yf6DIQcyYweGmX7Y1oiO7vGF_ZVRS9FMKlZe79-I3kiQ8Fa674H9IsXbDgBIlIgJjd9GvQR9qfv3ZKaVjVWB-mFi_XuCquFe7khNE-ilXSFzxodgLdwNawuDIjePDemaqrwZmq8QgTqY2xd4BgK4FcnlILkrBhTMrGi1XdPH-2RQ2YBlOUs_z6NpNWlMKj7Eg3X5GcoRJ0UaDGcS2zJ2JGCTd6n-s4hArY1Qw6zHMKDKnj8kaXNhSfDonVbQ8MO2EgBY4HMuN5lsd8IYy6kmI79V4ZW9F7JjjBlgCEnVCvUwPWZ_EGDNGS3_Ol56JzcFtgGLNtsQ1BG5vtL4JKWv-AEniYApdb91dWIQ5Q9aTiu6IW9LQ4QBGHpDo9eutEgc-gtIIMN2_bXdthe8S6u4sg4fI7Lo5SK4kZw50V-OMToRusfvPX1LukR4-1aweUs-I3VwTWumCQR2fWKvdVtDIuk-LYvmB0rS8CfSa5l3dJymn1W9tYRa3M-KpMwobKiKUiB17yn-CCMBZp-oGUUsfGsDr0RI2IQ5zTppYodbvp0stPNir8LooEe1NpIRFQwJEKP_WsCLWa6YpFSBJhtn7Ta1eSE6aPI2qGBalHYXKCeirA4pyAfYU4Y_TgKyCxCegUTsERz4BQyurHTbb3TaBtWQnl12ghId2gbd_RsyhkW3qXVle5FRyVkHHiKJ_xDYq55kflsajaRXxETkFN31M6HQRiwv6QbgnstVmEBZR9FtY2ZVnp1Qlbl9AYNa6o_xocBsZJcz62YmDW-9OUOy568slyFJqBamz6oLYwgFdHvHwb_cpzjrV",alt:null}))}p.isMDXComponent=!0}}]);