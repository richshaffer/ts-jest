"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[414],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),f=s,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||a;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),s=n(6010);const a="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(a,o),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7462),s=n(7294),a=n(6010),o=n(6775),i=n(5238),l=n(3609),u=n(2560);function c(e){return function(e){return s.Children.map(e,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function p(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function d(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=p(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,c]=f({queryString:n,groupId:r}),[d,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),g=(()=>{const e=l??d;return m({value:e,tabValues:a})?e:null})();(0,s.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,a]),tabValues:a}}var b=n(2957),g=n(1048);const h="tabList__CuJ",y="tabItem_LNqP";function j(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,b.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),r=l[n].value;r!==o&&(c(t),i(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t)},l.map((e=>{let{value:t,label:n,attributes:i}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},i,{className:(0,a.Z)("tabs__item",y,i?.className,{"tabs__item--active":o===t})}),n??t)})))}function T(e){let{lazy:t,children:n,selectedValue:r}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function v(e){const t=d(e);return s.createElement("div",{className:(0,a.Z)("tabs-container",h)},s.createElement(j,(0,r.Z)({},e,t)),s.createElement(T,(0,r.Z)({},e,t)))}function k(e){const t=(0,g.Z)();return s.createElement(v,(0,r.Z)({key:String(t)},e))}},3859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var r=n(7462),s=(n(7294),n(4137)),a=n(3992),o=n(425);const i={title:"AST transformers option"},l=void 0,u={unversionedId:"getting-started/options/astTransformers",id:"getting-started/options/astTransformers",title:"AST transformers option",description:"ts-jest by default does hoisting for a few jest methods via a TypeScript AST transformer. One can also create custom",source:"@site/docs/getting-started/options/astTransformers.md",sourceDirName:"getting-started/options",slug:"/getting-started/options/astTransformers",permalink:"/ts-jest/docs/next/getting-started/options/astTransformers",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/docs/getting-started/options/astTransformers.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1675655843,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"AST transformers option"}},c={},p=[{value:"Examples",id:"examples",level:3},{value:"Basic Transformers",id:"basic-transformers",level:4},{value:"Configuring transformers with options",id:"configuring-transformers-with-options",level:4},{value:"Writing custom TypeScript AST transformers",id:"writing-custom-typescript-ast-transformers",level:3}],m={toc:p};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," by default does hoisting for a few ",(0,s.kt)("inlineCode",{parentName:"p"},"jest")," methods via a TypeScript AST transformer. One can also create custom\nTypeScript AST transformers and provide them to ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," to include into compilation process."),(0,s.kt)("p",null,"The option is ",(0,s.kt)("inlineCode",{parentName:"p"},"astTransformers")," and it allows ones to specify which 3 types of TypeScript AST transformers to use with ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"before")," means your transformers get run before TS ones, which means your transformers will get raw TS syntax\ninstead of transpiled syntax (e.g ",(0,s.kt)("inlineCode",{parentName:"li"},"import")," instead of ",(0,s.kt)("inlineCode",{parentName:"li"},"require")," or ",(0,s.kt)("inlineCode",{parentName:"li"},"define")," )."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"after")," means your transformers get run after TS ones, which gets transpiled syntax."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"afterDeclarations")," means your transformers get run during ",(0,s.kt)("inlineCode",{parentName:"li"},"d.ts")," generation phase, allowing you to transform output type declarations.")),(0,s.kt)("h3",{id:"examples"},"Examples"),(0,s.kt)("h4",{id:"basic-transformers"},"Basic Transformers"),(0,s.kt)(a.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: ['my-custom-transformer'],\n        },\n      },\n    ],\n  },\n}\n"))),(0,s.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: ['my-custom-transformer'],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,s.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "astTransformers": {\n            "before": ["my-custom-transformer"]\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,s.kt)("h4",{id:"configuring-transformers-with-options"},"Configuring transformers with options"),(0,s.kt)(a.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"js",label:"JavaScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:"tab",tab:!0},"/** @type {import('ts-jest').JestConfigWithTsJest} */\nmodule.exports = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: [\n            {\n              path: 'my-custom-transformer-that-needs-extra-opts',\n              options: {}, // extra options to pass to transformers here\n            },\n          ],\n        },\n      },\n    ],\n  },\n}\n"))),(0,s.kt)(o.Z,{value:"ts",label:"TypeScript",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-ts",metastring:"tab",tab:!0},"import type { JestConfigWithTsJest } from 'ts-jest'\n\nconst jestConfig: JestConfigWithTsJest = {\n  // [...]\n  transform: {\n    // '^.+\\\\.[tj]sx?$' to process js/ts with `ts-jest`\n    // '^.+\\\\.m?[tj]sx?$' to process js/ts/mjs/mts with `ts-jest`\n    '^.+\\\\.tsx?$': [\n      'ts-jest',\n      {\n        astTransformers: {\n          before: [\n            {\n              path: 'my-custom-transformer-that-needs-extra-opts',\n              options: {}, // extra options to pass to transformers here\n            },\n          ],\n        },\n      },\n    ],\n  },\n}\n\nexport default jestConfig\n"))),(0,s.kt)(o.Z,{value:"JSON",mdxType:"TabItem"},(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-JSON",metastring:"tab",tab:!0},'{\n  // [...]\n  "jest": {\n    "transform": {\n      // \'^.+\\\\.[tj]sx?$\' to process js/ts with `ts-jest`\n      // \'^.+\\\\.m?[tj]sx?$\' to process js/ts/mjs/mts with `ts-jest`\n      "^.+\\\\.tsx?$": [\n        "ts-jest",\n        {\n          "astTransformers": {\n            "before": [\n              {\n                "path": "my-custom-transformer-that-needs-extra-opts",\n                "options": {} // extra options to pass to transformers here\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n}\n')))),(0,s.kt)("h3",{id:"writing-custom-typescript-ast-transformers"},"Writing custom TypeScript AST transformers"),(0,s.kt)("p",null,"To write a custom TypeScript AST transformers, one can take a look at ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kulshekhar/ts-jest/tree/main/src/transformers"},"the one")," that ",(0,s.kt)("inlineCode",{parentName:"p"},"ts-jest")," is using."))}f.isMDXComponent=!0}}]);