"use strict";(self.webpackChunkts_jest_docs=self.webpackChunkts_jest_docs||[]).push([[8],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},425:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:n},t)}},3992:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(7462),r=n(7294),o=n(6010),i=n(6775),l=n(5238),s=n(3609),u=n(2560);function c(e){return function(e){return r.Children.map(e,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[s,c]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),g=(()=>{const e=s??f;return d({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var b=n(2957),g=n(1048);const h="tabList__CuJ",y="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,b.o5)(),p=e=>{const t=e.currentTarget,n=u.indexOf(t),a=s[n].value;a!==i&&(c(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:d,onClick:p},l,{className:(0,o.Z)("tabs__item",y,l?.className,{"tabs__item--active":i===t})}),n??t)})))}function k(e){let{lazy:t,children:n,selectedValue:a}=e;if(n=Array.isArray(n)?n:[n],t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",h)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(k,(0,a.Z)({},e,t)))}function j(e){const t=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(t)},e))}},3427:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(4137)),o=n(3992),i=n(425);const l={id:"installation",title:"Installation"},s=void 0,u={unversionedId:"getting-started/installation",id:"version-29.0/getting-started/installation",title:"Installation",description:"Dependencies",source:"@site/versioned_docs/version-29.0/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/ts-jest/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/kulshekhar/ts-jest/edit/main/website/versioned_docs/version-29.0/getting-started/installation.md",tags:[],version:"29.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1675655843,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-29.0-docs",previous:{title:"Contributing",permalink:"/ts-jest/docs/contributing"},next:{title:"Presets",permalink:"/ts-jest/docs/getting-started/presets"}},c={},p=[{value:"Dependencies",id:"dependencies",level:3},{value:"Jest config file",id:"jest-config-file",level:3},{value:"Creating",id:"creating",level:4},{value:"Customizing",id:"customizing",level:4}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"You can install ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," and dependencies all at once with one of the following commands."),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install --save-dev jest typescript ts-jest @types/jest\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add --dev jest typescript ts-jest @types/jest\n")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Tip: If you get an error with the following ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," commands such as ",(0,r.kt)("inlineCode",{parentName:"p"},"npx: command not found"),", you can replace ",(0,r.kt)("inlineCode",{parentName:"p"},"npx XXX")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"node node_modules/.bin/XXX")," from the root of your project.")),(0,r.kt)("h3",{id:"jest-config-file"},"Jest config file"),(0,r.kt)("h4",{id:"creating"},"Creating"),(0,r.kt)("p",null,"By default, Jest can run without any config files, but it will not compile ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," files.\nTo make it transpile TypeScript with ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest"),", we will need to create a configuration file that will tell Jest to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," preset."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," can create the configuration file for you automatically:"),(0,r.kt)(o.Z,{groupId:"code-examples",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-npm",metastring:"tab",tab:!0},"npx ts-jest config:init\n"))),(0,r.kt)(i.Z,{value:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Yarn",metastring:"tab",tab:!0},"yarn ts-jest config:init\n")))),(0,r.kt)("p",null,"This will create a basic Jest configuration file which will inform Jest about how to handle ",(0,r.kt)("inlineCode",{parentName:"p"},".ts")," files correctly."),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"jest --init")," command (prefixed with either ",(0,r.kt)("inlineCode",{parentName:"p"},"npx")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"yarn")," depending on what you're using) to have more options related to Jest.\nHowever, answer ",(0,r.kt)("inlineCode",{parentName:"p"},"no")," to the Jest question about whether or not to enable TypeScript. Instead, add the line: ",(0,r.kt)("inlineCode",{parentName:"p"},'preset: "ts-jest"')," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"jest.config.js")," file afterwards."),(0,r.kt)("h4",{id:"customizing"},"Customizing"),(0,r.kt)("p",null,"For customizing jest, please follow their ",(0,r.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/en/configuration.html"},"official guide online"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ts-jest")," specific options can be found ",(0,r.kt)("a",{parentName:"p",href:"options"},"here"),"."))}m.isMDXComponent=!0}}]);