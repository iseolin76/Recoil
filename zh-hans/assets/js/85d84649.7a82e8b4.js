"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4047],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return y}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),y=a,h=d["".concat(c,".").concat(y)]||d[y]||u[y]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7254:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={title:"Recoil and GraphQL with Relay",sidebar_label:"Introduction"},c=void 0,s={unversionedId:"recoil-relay/introduction",id:"recoil-relay/introduction",title:"Recoil and GraphQL with Relay",description:"The recoil-relay NPM library helps Recoil perform type safe and efficient queries using GraphQL with the Relay library.  It provides selectors which can easily query with GraphQL.  The queries are synced with the Recoil data-flow graph so downstream selectors can derive state from them, they can depend on upstream Recoil state, and they are automatically subscribed to any changes in the graph from Relay.  Everything stays in sync automatically.",source:"@site/docs/recoil-relay/introduction.md",sourceDirName:"recoil-relay",slug:"/recoil-relay/introduction",permalink:"/zh-hans/docs/recoil-relay/introduction",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/recoil-relay/introduction.md",tags:[],version:"current",frontMatter:{title:"Recoil and GraphQL with Relay",sidebar_label:"Introduction"},sidebar:"recoil-relay",next:{title:"Relay Environment",permalink:"/zh-hans/docs/recoil-relay/environment"}},p=[{value:"Example",id:"example",children:[],level:2},{value:"Installation",id:"installation",children:[],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/recoil-relay"},(0,i.kt)("inlineCode",{parentName:"a"},"recoil-relay"))," NPM library helps Recoil perform type safe and efficient queries using ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/"},"GraphQL")," with the ",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev"},"Relay")," library.  It provides selectors which can easily query with GraphQL.  The queries are synced with the Recoil data-flow graph so downstream selectors can derive state from them, they can depend on upstream Recoil state, and they are automatically subscribed to any changes in the graph from Relay.  Everything stays in sync automatically."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"After setting up your Relay environment adding a GraphQL query is as simple as defining a ",(0,i.kt)("a",{parentName:"p",href:"/docs/recoil-relay/graphql-selectors"},"GraphQL selector"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"const userNameQuery = graphQLSelector({\n  key: 'UserName',\n  environment: myEnvironment,\n  query: graphql`\n    query UserQuery($id: ID!) {\n      user(id: $id) {\n        name\n      }\n    }\n  `,\n  variables: ({get}) => ({id: get(currentIDAtom)}),\n  mapResponse: data => data.user?.name,\n});\n")),(0,i.kt)("p",null,"Then use it like any other Recoil ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/core-concepts#selectors"},"selector"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyComponent() {\n  const userName = useRecoilValue(userNameQuery);\n  return <span>{userName}</span>;\n}\n")),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/installation"},"Recoil installation guide")," for installing Recoil and the ",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev/docs/getting-started/installation-and-setup/"},"Relay documentation")," and ",(0,i.kt)("a",{parentName:"p",href:"https://relay.dev/docs/getting-started/step-by-step-guide/"},"step-by-step guide")," for installing and setting up the Relay library, GraphQL compiler, Babel plugin, and ESLint plugin.  Then add ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/recoil-relay"},(0,i.kt)("inlineCode",{parentName:"a"},"recoil-relay"))," as a dependency."))}d.isMDXComponent=!0}}]);