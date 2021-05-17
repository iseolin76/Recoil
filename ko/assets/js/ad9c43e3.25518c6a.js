(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),c=(n(0),n(151)),o={title:"useRecoilCallback(callback, deps)",sidebar_label:"useRecoilCallback()"},l={unversionedId:"api-reference/core/useRecoilCallback",id:"api-reference/core/useRecoilCallback",isDocsHomePage:!1,title:"useRecoilCallback(callback, deps)",description:"\uc774 hook\uc740 useCallback()\uacfc \ube44\uc2b7\ud569\ub2c8\ub2e4\ub9cc Recoil \uc0c1\ud0dc(state)\uc5d0\uc11c callback\uc774 \ub3d9\uc791\ud558\ub3c4\ub85d API\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 hook\uc740 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \ud604\uc7ac\uc758 Recoil \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uae30\uc220\uacfc Recoil \uc0c1\ud0dc\uc758 \uc77d\uae30 \uc804\uc6a9 Snapshot \uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 callback\uc744 \uad6c\ucd95\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilCallback.md",slug:"/api-reference/core/useRecoilCallback",permalink:"/ko/docs/api-reference/core/useRecoilCallback",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilCallback.md",version:"current",sidebar_label:"useRecoilCallback()",sidebar:"docs",previous:{title:"isRecoilValue(value)",permalink:"/ko/docs/api-reference/core/isRecoilValue"},next:{title:"atomFamily(options)",permalink:"/ko/docs/api-reference/utils/atomFamily"}},i=[{value:"Lazy Read Example (\uc9c0\uc5f0\ud558\uc5ec \uc77d\uae30 \uc608\uc81c)",id:"lazy-read-example-\uc9c0\uc5f0\ud558\uc5ec-\uc77d\uae30-\uc608\uc81c",children:[]}],s={toc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\uc774 hook\uc740 ",Object(c.b)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},Object(c.b)("em",{parentName:"a"},Object(c.b)("inlineCode",{parentName:"em"},"useCallback()"))),"\uacfc \ube44\uc2b7\ud569\ub2c8\ub2e4\ub9cc Recoil \uc0c1\ud0dc(state)\uc5d0\uc11c callback\uc774 \ub3d9\uc791\ud558\ub3c4\ub85d API\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. \uc774 hook\uc740 \ube44\ub3d9\uae30\uc801\uc73c\ub85c \ud604\uc7ac\uc758 Recoil \uc0c1\ud0dc\ub97c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uae30\uc220\uacfc Recoil \uc0c1\ud0dc\uc758 \uc77d\uae30 \uc804\uc6a9 ",Object(c.b)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},Object(c.b)("inlineCode",{parentName:"a"},"Snapshot"))," \uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\ub294 callback\uc744 \uad6c\ucd95\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("p",null,"\uc774 hook\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ub3d9\uae30\ub85c\ub294 \ub2e4\uc74c\uc744 \ud3ec\ud568\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"atom \ud639\uc740 selector\uac00 \uc5c5\ub370\uc774\ud2b8 \ub420 \ub54c \ub9ac\ub80c\ub354\ub9c1\ud558\uae30 \uc704\ud574 React \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ub3c5\ud558\uc9c0 \uc54a\uace0 \ube44\ub3d9\uae30\uc801\uc73c\ub85c Recoil \uc0c1\ud0dc\ub97c \uc77d\uae30 \uc704\ud574 \uc0ac\uc6a9\ud558\uae30"),Object(c.b)("li",{parentName:"ul"},"\ub80c\ub354\ub9c1 \ud560 \ub54c\uc5d0 \uc218\ud589\ud558\uace0 \uc2f6\uc9c0 \uc54a\uc740 \ube44\ub3d9\uae30 \ub3d9\uc791\uc5d0 \ub300\ud55c \uac12\ube44\uc2fc \uc870\ud68c\ub97c \uc5f0\uae30\ud560 \ub54c"),Object(c.b)("li",{parentName:"ul"},"Recoil \uc0c1\ud0dc\uc5d0 \uc77d\uac70\ub098 \uc4f0\ub824\ub294 \uacbd\uc6b0 \ubd80\uc218\ud6a8\uacfc\uac00 \uc2e4\ud589\uc2dc\ud0b5\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\ub80c\ub354\ub9c1 \uc2dc\uc810\uc5d0 \uc5b4\ub5a4 atom \ud639\uc740 selector\uac00 \uc5c5\ub370\uc774\ud2b8\ub97c \uc6d0\ud558\ub294\uc9c0 \ubaa8\ub974\ub294 atom \ud639\uc740 selector\ub97c \ub3d9\uc801\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\ubbc0\ub85c ",Object(c.b)("a",{parentName:"li",href:"/docs/api-reference/core/useSetRecoilState"},Object(c.b)("inlineCode",{parentName:"a"},"useSetRecoilState()"))," \ub294 \uc0ac\uc6a9\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},"\ub80c\ub354\ub9c1 \uc774\uc804\uc5d0 \ub370\uc774\ud130\ub97c \ubbf8\ub9ac \uac00\uc838\uc635\ub2c8\ub2e4.(",Object(c.b)("a",{parentName:"li",href:"/docs/guides/asynchronous-data-queries#pre-fetching"},"Pre-fetching"),")")),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"type CallbackInterface = {\n  snapshot: Snapshot,\n  gotoSnapshot: Snapshot => void,\n  set: <T>(RecoilState<T>, (T => T) | T) => void,\n  reset: <T>(RecoilState<T>) => void,\n};\n\nfunction useRecoilCallback<Args, ReturnValue>(\n  callback: CallbackInterface => (...Args) => ReturnValue,\n  deps?: $ReadOnlyArray<mixed>,\n): (...Args) => ReturnValue\n")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"callback"))," - \ucf5c\ubc31 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud558\ub294 \ub798\ud37c \ud568\uc218\uac00 \uc788\ub294 \uc720\uc800 \ucf5c\ubc31 \ud568\uc218. \uc0c1\ud0dc\ub97c \ubcc0\uacbd\ud558\ub294 \ucf5c\ubc31\uc740 \ud604\uc7ac Recoil \uc0c1\ud0dc\ub97c \ube44\ub3d9\uae30\ub85c \uc5c5\ub370\uc774\ud2b8 \ud558\uae30 \uc704\ud574 \ub300\uae30\ud569\ub2c8\ub2e4. \ub798\ud551\ub41c \ud568\uc218\uc758 \ud0c0\uc785 \uc2dc\uadf8\ub2c8\ucc98\ub294 \ub9ac\ud134\ub41c \ucf5c\ubc31\uc758 \ud0c0\uc785 \uc2dc\uadf8\ub2c8\ucc98\uc640 \uc77c\uce58\ud569\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"deps"))," - \ucf5c\ubc31\uc744 \uba54\ubaa8\ud558\uae30 \uc704\ud55c \uc120\ud0dd\uc801 \uc758\uc874\uc131 \ubaa8\uc74c\uc785\ub2c8\ub2e4. ",Object(c.b)("inlineCode",{parentName:"li"},"useCallback()"),"\ucc98\ub7fc, \uc0dd\uc131\ub41c \ucf5c\ubc31\uc740 \uae30\ubcf8\uc801\uc73c\ub85c \uba54\ubaa8\ub418\uc9c0 \uc54a\uace0 \ub80c\ub354\ub9c1 \ud560 \ub54c\ub9c8\ub2e4 \uc0c8\ub85c\uc6b4 \ud568\uc218\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4. \ube48 \ubc30\uc5f4\uc744 \ub118\uaca8 \ud56d\uc0c1 \ub3d9\uc77c\ud55c \ud568\uc218 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc18\ud658\ud558\uac8c \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \ub9cc\uc57d ",Object(c.b)("inlineCode",{parentName:"li"},"deps")," \ubc30\uc5f4\uc5d0 \uac12\uc744 \uc804\ub2ec\ud558\uace0 dep\uc758 \ucc38\uc870 \ub3d9\ub4f1\uc131\uc774 \ubcc0\uacbd\ub418\uba74 \uc0c8\ub85c\uc6b4 \ud568\uc218\uac00 \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uadf8\ub7ec\uba74 \uadf8 \uac12\ub4e4\uc740 \ucf5c\ubc31\uc758 \ubab8\uccb4 \ub0b4\uc5d0\uc11c \uc624\ub798\ub418\uc9c0 \uc54a\uac8c \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. (",Object(c.b)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-reference.html#usecallback"},Object(c.b)("inlineCode",{parentName:"a"},"useCallback"))," \uc744 \ud655\uc778\ud574\uc8fc\uc138\uc694) ",Object(c.b)("a",{parentName:"li",href:"/docs/introduction/installation#eslint"},"eslint\ub97c \uc5c5\ub370\uc774\ud2b8")," \ud558\uc5ec \uc774\uac83\uc774 \uc62c\ubc14\ub974\uac8c \uc0ac\uc6a9\ub418\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")),Object(c.b)("p",null,"\ucf5c\ubc31 \uc778\ud130\ud398\uc774\uc2a4:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"snapshot"))," - Snapshot\uc740 \ucf5c\ubc31\uc774 \ud638\ucd9c \ub41c \ud604\uc7ac \ud2b8\ub79c\uc7ad\uc158\uc774 \uc2dc\uc791\ub420 \ub54c React batch\ub85c \ucee4\ubc0b\ub41c Recoil atom \uc0c1\ud0dc\uc758 \uc77d\uae30 \uc804\uc6a9 \ubcf4\uae30\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. atom \uac12\uc740 \uc815\uc801\uc774\uc9c0\ub9cc, \ube44\ub3d9\uae30 selector\ub294 \uc5ec\uc804\ud788 \ubcf4\ub958\uc911\uc774\uac70\ub098 resolve \ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"gotoSnapshot"))," - \uc804\uc5ed \uc0c1\ud0dc\ub97c \uc81c\uacf5\ub41c Snapshot\uc5d0 \uc77c\uce58\ud558\ub3c4\ub85d \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub300\uae30\uc5f4\uc5d0 \ud3ec\ud568\ud569\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"set"))," - atom \ud639\uc740 selector\uc758 \uac12\uc744 \uc124\uc815\ud558\ub294 \ub300\uae30\uc5f4\uc5d0 \ud3ec\ud568\ud569\ub2c8\ub2e4. \ub2e4\ub978 \uacf3\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c \uc0c8\ub85c\uc6b4 \uac12\uc744 \uc9c1\uc811 \uc81c\uacf5\ud558\uac70\ub098 \uc0c8\ub85c\uc6b4 \uac12\uc744 \ub9ac\ud134\ud558\uace0 \ud604\uc7ac \uac12\uc744 \ub9e4\uac1c\ubcc0\uc218\ub85c \ubc1b\ub294 updater \ud568\uc218\ub97c \uc81c\uacf5 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud604\uc7ac\uc758 \uac12\uc740 \ud604\uc7ac \ud2b8\ub79c\uc7ad\uc158\uc758 \ub0a0\uc9dc\uae4c\uc9c0 \ud3ec\ud568\ud55c \ub2e4\ub978 \ubaa8\ub4e0 \ub300\uae30\uc5f4\uc5d0 \ud3ec\ud568\ub41c \uc0c1\ud0dc\uc758 \ubcc0\ud654\ub97c \ubcf4\uc5ec\uc90d\ub2c8\ub2e4."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},Object(c.b)("inlineCode",{parentName:"strong"},"reset"))," - atom \ud639\uc740 selector\uc758 \uac12\uc744 \uae30\ubcf8\uc73c\ub85c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4.")),Object(c.b)("h3",{id:"lazy-read-example-\uc9c0\uc5f0\ud558\uc5ec-\uc77d\uae30-\uc608\uc81c"},"Lazy Read Example (\uc9c0\uc5f0\ud558\uc5ec \uc77d\uae30 \uc608\uc81c)"),Object(c.b)("p",null,"\uc774 \uc608\uc81c\ub294 ",Object(c.b)("strong",{parentName:"p"},Object(c.b)("inlineCode",{parentName:"strong"},"useRecoilCallback()"))," \uc744 \uc0ac\uc6a9\ud558\uc5ec \uc0c1\ud0dc\uac00 \ubcc0\ud654 \ud560 \ub54c \ub9ac\ub80c\ub354\ub9c1\uc744 \uc704\ud574\uc11c \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ub3c5\ud558\ub294 \uc77c \uc5c6\uc774 \uc9c0\uc5f0\ud558\uc5ec(lazily) \uc0c1\ud0dc\ub97c \uc77d\uc2b5\ub2c8\ub2e4."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"import {atom, useRecoilCallback} from 'recoil';\n\nconst itemsInCart = atom({\n  key: 'itemsInCart',\n  default: 0,\n});\n\nfunction CartInfoDebug() {\n  const logCartItems = useRecoilCallback(({snapshot}) => async () => {\n    const numItemsInCart = await snapshot.getPromise(itemsInCart);\n    console.log('Items in cart: ', numItemsInCart);\n  });\n\n  return (\n    <div>\n      <button onClick={logCartItems}>Log Cart Items</button>\n    </div>\n  );\n}\n")))}b.isMDXComponent=!0},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=a,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||c;return n?r.a.createElement(d,l(l({ref:t},s),{},{components:n})):r.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);