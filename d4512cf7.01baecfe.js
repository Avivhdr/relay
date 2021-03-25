(window.webpackJsonp=window.webpackJsonp||[]).push([[206],{284:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(8),o=(n(0),n(323)),i=n(329),l=n(324),s=n(363),c=n(364),p={id:"type-emission",title:"Type Emission",slug:"/guides/type-emission/"},u={unversionedId:"guides/type-emission",id:"version-v11.0.0/guides/type-emission",isDocsHomePage:!1,title:"Type Emission",description:"As part of its normal work, the Relay Compiler will emit type information for your language of choice that helps you write type-safe application code. These types are included in the artifacts that relay-compiler generates to describe your operations and fragments.",source:"@site/versioned_docs/version-v11.0.0/guides/type-emission.md",slug:"/guides/type-emission/",permalink:"/docs/guides/type-emission/",editUrl:"https://github.com/facebook/relay/edit/master/website/versioned_docs/version-v11.0.0/guides/type-emission.md",version:"v11.0.0",lastUpdatedBy:"Jan Kassens",lastUpdatedAt:1616707352,sidebar:"version-v11.0.0/docs",previous:{title:"Relay Compiler",permalink:"/docs/guides/compiler/"},next:{title:"Persisted Queries",permalink:"/docs/guides/persisted-queries/"}},m=[{value:"Operation input data",id:"operation-input-data",children:[]},{value:"Operation/Fragment selection-set data",id:"operationfragment-selection-set-data",children:[]},{value:"Fragment references",id:"fragment-references",children:[]},{value:"Single artifact directory",id:"single-artifact-directory",children:[{value:"Background information",id:"background-information",children:[]}]},{value:"Language plugins",id:"language-plugins",children:[]}],d={toc:m};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"As part of its normal work, the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../compiler"}),Object(o.b)("strong",{parentName:"a"},"Relay Compiler"))," will emit type information for your language of choice that helps you write type-safe application code. These types are included in the artifacts that ",Object(o.b)("inlineCode",{parentName:"p"},"relay-compiler")," generates to describe your operations and fragments."),Object(o.b)("p",null,"Regardless of your choice of language, all language plugins will emit roughly the same sort of type-information, but be sure to read the documentation for other ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#language-plugins"}),"language plugins")," to learn about their specifics."),Object(o.b)("h2",{id:"operation-input-data"},"Operation input data"),Object(o.b)("p",null,"The shape of the variables object used for query, mutation, or subscription operations."),Object(o.b)("p",null,"In this example the emitted type-information would require the variables object to contain an ",Object(o.b)("inlineCode",{parentName:"p"},"artistID")," key with a non-null string."),Object(o.b)(s.a,{defaultValue:Object(l.fbContent)({internal:"Flow",external:"TypeScript"}),values:[{label:"Flow",value:"Flow"},{label:"TypeScript",value:"TypeScript"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"Flow",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * export type ExampleQueryVariables = {\n *   +artistID: string,\n * }\n * export type ExampleQueryResponse = {\n *   +artist: {\n *     +name: ?string,\n *   }\n * }\n * export type ExampleQuery = {\n *   +variables: ExampleQueryVariables,\n *   +response: ExampleQueryResponse,\n * }\n */\n\nimport type { ExampleQuery } from \"__generated__/ExampleQuery.graphql\"\n\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `,\n  // variables are expected to be of type ExampleQueryVariables\n  {artistID: 'banksy'},\n);\n"))),Object(o.b)(c.a,{value:"TypeScript",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * export type ExampleQueryVariables = {\n *   readonly artistID: string\n * }\n * export type ExampleQueryResponse = {\n *   readonly artist?: {\n *     readonly name?: string\n *   }\n * }\n * export type ExampleQuery = {\n *   readonly variables: ExampleQueryVariables\n *   readonly response: ExampleQueryResponse\n * }\n */\n\nimport { ExampleQuery } from \"__generated__/ExampleQuery.graphql\"\n\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `,\n  // variables are expected to be of type ExampleQueryVariables\n  {artistID: 'banksy'},\n);\n")))),Object(o.b)("h2",{id:"operationfragment-selection-set-data"},"Operation/Fragment selection-set data"),Object(o.b)("p",null,"The shape of the data selected in a operation or fragment, following the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../principles-and-architecture/thinking-in-relay#data-masking"}),"data-masking")," rules. That is, excluding any data selected by fragment spreads."),Object(o.b)("p",null,"In this example the emitted type-information describes the response data which is returned by ",Object(o.b)("inlineCode",{parentName:"p"},"useLazyLoadQuery")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"usePreloadedQuery"),")."),Object(o.b)(s.a,{defaultValue:Object(l.fbContent)({internal:"Flow",external:"TypeScript"}),values:[{label:"Flow",value:"Flow"},{label:"TypeScript",value:"TypeScript"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"Flow",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * export type ExampleQueryVariables = {\n *   +artistID: string,\n * }\n * export type ExampleQueryResponse = {\n *   +artist: {\n *     +name: ?string,\n *   }\n * }\n * export type ExampleQuery = {\n *   +variables: ExampleQueryVariables,\n *   +response: ExampleQueryResponse,\n * }\n */\n\nimport type { ExampleQuery } from \"__generated__/ExampleQuery.graphql\"\n\n// data is of type ExampleQueryResponse\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `,\n  {artistID: 'banksy'},\n);\n\nreturn props.artist && <div>{props.artist.name} is great!</div>\n"))),Object(o.b)(c.a,{value:"TypeScript",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"/**\n * export type ExampleQueryVariables = {\n *   readonly artistID: string\n * }\n * export type ExampleQueryResponse = {\n *   readonly artist?: {\n *     readonly name?: string\n *   }\n * }\n * export type ExampleQuery = {\n *   readonly variables: ExampleQueryVariables\n *   readonly response: ExampleQueryResponse\n * }\n */\n\nimport { ExampleQuery } from \"__generated__/ExampleQuery.graphql\"\n\n// data is of type ExampleQueryResponse\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        name\n      }\n    }\n  `,\n  {artistID: 'banksy'},\n);\n\nreturn props.artist && <div>{props.artist.name} is great!</div>\n")))),Object(o.b)("p",null,"Similarly, in this example the emitted type-information describes the type of the prop to match the type of the fragment reference ",Object(o.b)("inlineCode",{parentName:"p"},"useFragment"),"  expects to receive."),Object(o.b)(s.a,{defaultValue:Object(l.fbContent)({internal:"Flow",external:"TypeScript"}),values:[{label:"Flow",value:"Flow"},{label:"TypeScript",value:"TypeScript"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"Flow",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * export type ExampleFragmentComponent_artist$data = {\n *   +name: string\n * }\n *\n * export type ExampleFragmentComponent_artist$key = { ... }\n */\n\nimport type { ExampleFragmentComponent_artist$key } from "__generated__/ExampleFragmentComponent_artist.graphql"\n\ntype Props = {\n  artist: ExampleFragmentComponent_artist$key,\n};\n\nexport default ExampleFragmentComponent(props) {\n  // data is of type ExampleFragmentComponent_artist$data\n  const data = useFragment(\n    graphql`\n      fragment ExampleFragmentComponent_artist on Artist {\n        biography\n      }\n    `,\n    props.artist,\n  );\n\n  return <div>About the artist: {props.artist.biography}</div>;\n}\n'))),Object(o.b)(c.a,{value:"TypeScript",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * export type ExampleFragmentComponent_artist$data = {\n *   readonly name: string\n * }\n *\n * export type ExampleFragmentComponent_artist$key = { ... }\n */\n\nimport { ExampleFragmentComponent_artist$key } from "__generated__/ExampleFragmentComponent_artist.graphql"\n\ninterface Props {\n  artist: ExampleFragmentComponent_artist$key,\n};\n\nexport default ExampleFragmentComponent(props: Props) {\n  // data is of type ExampleFragmentComponent_artist$data\n  const data = useFragment(\n    graphql`\n      fragment ExampleFragmentComponent_artist on Artist {\n        biography\n      }\n    `,\n    props.artist,\n  );\n\n  return <div>About the artist: {props.artist.biography}</div>;\n}\n')))),Object(o.b)("h2",{id:"fragment-references"},"Fragment references"),Object(o.b)("p",null,"The opaque identifier described in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../principles-and-architecture/thinking-in-relay#data-masking"}),"data-masking")," that a child container expects to receive from its parent, which represents the child container\u2019s fragment spread inside the parent\u2019s fragment."),Object(o.b)(l.OssOnly,{mdxType:"OssOnly"},Object(o.b)("div",{className:"admonition admonition-important alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please read ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#single-artifact-directory"}),"this important caveat")," about actually enabling type-safe fragment reference checking.")))),Object(o.b)("p",null,"Consider a component that ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../guided-tour/rendering/fragments/#composing-fragments"}),"composes")," the above fragment component example. In this example, the emitted type-information of the child component receives a unique opaque identifier type, called a fragment reference, which the type-information emitted for the parent\u2019s fragment references in the location where the child\u2019s fragment is spread. Thus ensuring that the child\u2019s fragment is spread into the parent\u2019s fragment ",Object(o.b)("em",{parentName:"p"},"and")," the correct fragment reference is passed to the child component at runtime."),Object(o.b)(s.a,{defaultValue:Object(l.fbContent)({internal:"Flow",external:"TypeScript"}),values:[{label:"Flow",value:"Flow"},{label:"TypeScript",value:"TypeScript"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"Flow",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * import type { FragmentReference } from "relay-runtime";\n * declare export opaque type ExampleFragmentComponent_artist$ref: FragmentReference;\n *\n * export type ExampleFragmentComponent_artist$data = {\n *   +name: string,\n *   +$refType: ExampleFragmentComponent_artist$ref,\n * };\n */\n\nimport { ExampleFragmentComponent } from "./ExampleFragmentComponent"\n\n/**\n * import type { ExampleFragmentComponent_artist$ref } from "ExampleFragmentComponent_artist.graphql";\n *\n * export type ExampleQueryResponse = {\n *   +artist: ?{\n *     +$fragmentRefs: ExampleFragmentComponent_artist$ref,\n *   }\n * };\n * export type ExampleQueryVariables = {\n *   +artistID: string,\n * }\n * export type ExampleQuery = {\n *   +variables: ExampleQueryVariables,\n *   +response: ExampleQueryResponse,\n * }\n */\nimport type { ExampleQuery } from "__generated__/ExampleQuery.graphql"\n\n// data is of type ExampleQueryResponse\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        ...ExampleFragmentComponent_artist\n      }\n    }\n  `,\n  {artistID: \'banksy\'},\n);\n\n// Here only `data.artist` is an object typed as the appropriate type\n// for the `artist` prop of `ExampleFragmentComponent`.\nreturn <ExampleFragmentComponent artist={data.artist} />;\n'))),Object(o.b)(c.a,{value:"TypeScript",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),'/**\n * declare const _ExampleFragmentComponent_artist$ref: unique symbol;\n * export type ExampleFragmentComponent_artist$ref = typeof _ExampleFragmentComponent_artist$ref;\n *\n * export type ExampleFragmentComponent_artist = {\n *   readonly name: string\n *   readonly " $refType": ExampleFragmentComponent_artist$ref\n * }\n */\nimport { ExampleFragmentComponent } from "./ExampleFragmentComponent"\n\n/**\n * import { ExampleFragmentComponent_artist$ref } from "ExampleFragmentComponent_artist.graphql";\n *\n * export type ExampleQueryResponse = {\n *   readonly artist?: {\n *     readonly " $fragmentRefs": ExampleFragmentComponent_artist$ref\n *   }\n * }\n * export type ExampleQueryVariables = {\n *   readonly artistID: string\n * }\n * export type ExampleQuery = {\n *   readonly variables: ExampleQueryVariables\n *   readonly response: ExampleQueryResponse\n * }\n */\nimport { ExampleQuery } from "__generated__/ExampleQuery.graphql"\n\n// data is of type ExampleQueryResponse\nconst data = useLazyLoadQuery<ExampleQuery>(\n  graphql`\n    query ExampleQuery($artistID: ID!) {\n      artist(id: $artistID) {\n        ...ExampleFragmentComponent_artist\n      }\n    }\n  `,\n  {artistID: \'banksy\'},\n);\n\n// Here only `data.artist` is an object typed as the appropriate type\n// for the `artist` prop of `ExampleFragmentComponent`.\nreturn <ExampleFragmentComponent artist={data.artist} />;\n')))),Object(o.b)(l.OssOnly,{mdxType:"OssOnly"},Object(o.b)("h2",{id:"single-artifact-directory"},"Single artifact directory"),Object(o.b)("p",null,"An important caveat to note is that by default strict fragment reference type-information will ",Object(o.b)("em",{parentName:"p"},"not")," be emitted, instead they will be typed as ",Object(o.b)("inlineCode",{parentName:"p"},"any")," and would allow you to pass in any data to the child component."),Object(o.b)("p",null,"To enable this feature, you will have to tell the compiler to store all the artifacts in a single directory, like so:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"\n$ relay-compiler --artifactDirectory ./src/__generated__ [\u2026]\n\n")),Object(o.b)("p",null,"\u2026and additionally inform the babel plugin in your ",Object(o.b)("inlineCode",{parentName:"p"},".babelrc")," config where to look for the artifacts:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'\n{\n  "plugins": [\n    ["relay", { "artifactDirectory": "./src/__generated__" }]\n  ]\n}\n\n')),Object(o.b)("p",null,"It is recommended to alias this directory in your module resolution configuration such that you don\u2019t need to specify relative paths in your source files. This is what is also done in the above examples, where artifacts are imported from a ",Object(o.b)("inlineCode",{parentName:"p"},"__generated__")," alias, rather than relative paths like ",Object(o.b)("inlineCode",{parentName:"p"},"../../../../__generated__"),"."),Object(o.b)("h3",{id:"background-information"},"Background information"),Object(o.b)("p",null,"The reason is that ",Object(o.b)("inlineCode",{parentName:"p"},"relay-compiler")," and its artifact emission is stateless. Meaning that it does not keep track of locations of original source files and where the compiler previously saved the accompanying artifact on disk. Thus, if the compiler were to emit artifacts that try to import fragment reference types from ",Object(o.b)("em",{parentName:"p"},"other")," artifacts, the compiler would:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"first need to know where on disk that other artifact exists;"),Object(o.b)("li",{parentName:"ul"},"and update imports when the other artifact changes location on disk.")),Object(o.b)("p",null,"Facebook uses a module system called ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://twitter.com/dan_abramov/status/758655309212704768"}),"Haste"),", in which all source files are considered in a flat namespace. This means that an import declaration does not need to specify the path to another module and thus there is no need for the compiler to ever consider the above issues. I.e. an import only needs to specify the basename of the module filename and Haste takes care of actually finding the right module at import time. Outside of Facebook, however, usage of the Haste module system is non-existent nor encouraged, thus the decision to not import fragment reference types but instead type them as ",Object(o.b)("inlineCode",{parentName:"p"},"any"),"."),Object(o.b)("p",null,"At its simplest, we can consider Haste as a single directory that contains all module files, thus all module imports always being safe to import using relative sibling paths. This is what is achieved by the single artifact directory feature. Rather than co-locating artifacts with their source files, all artifacts are stored in a single directory, allowing the compiler to emit imports of fragment reference types."),Object(o.b)("h2",{id:"language-plugins"},"Language plugins"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Flow: This is the default and builtin language plugin. You can explicitly enable it like so:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"\n$ relay-compiler --language javascript [\u2026]\n\n")))),Object(o.b)("p",null,"By default, Flow types are emitted inside of comments to avoid forcing your project to use Flow. Flow types inside of comments is perfectly valid Flow, however, some editors and IDEs (like WebStorm/IDEA) do not understand Flow unless it's in plain source code. In order to solve that, there's a language plugin maintained by the community that replicates the functionality of the default builtin plugin, but emits the Flow types as plain source and not inside comments. Installation and usage:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"\n  $ yarn add --dev relay-compiler-language-js-flow-uncommented\n  $ relay-compiler --language js-flow-uncommented [\u2026]\n\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/relay-tools/relay-compiler-language-typescript"}),"TypeScript"),": This is a language plugin for the TypeScript language maintained by the community. Install and enable it like so:"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-shell"}),"\n$ yarn add --dev relay-compiler-language-typescript @types/react-relay @types/relay-runtime\n$ relay-compiler --language typescript [\u2026]\n\n")))),Object(o.b)("p",null,"If you are looking to create your own language plugin, refer to the ",Object(o.b)("inlineCode",{parentName:"p"},"relay-compiler")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/relay/blob/master/packages/relay-compiler/language/RelayLanguagePluginInterface.js"}),"language plugin interface"),".")),Object(o.b)(i.a,{mdxType:"DocsRating"}))}b.isMDXComponent=!0},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||o;return n?r.a.createElement(b,l(l({ref:t},c),{},{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";(function(e){var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.OssOnly=t.FbInternalOnly=t.isInternal=t.validateFbContentArgs=t.fbInternalOnly=t.fbContent=t.bloks=void 0,t.bloks=o(n(327));const i=["internal","external"];let l;try{l=n(325).usePluginData}catch(m){l=null}function s(e){return p(e),u()?"internal"in e?c(e.internal):[]:"external"in e?c(e.external):[]}function c(e){return"function"==typeof e?e():e}function p(e){if("object"!=typeof e)throw new Error(`fbContent() args must be an object containing keys: ${i}. Instead got ${e}`);if(!Object.keys(e).find((e=>i.find((t=>t===e)))))throw new Error(`No valid args found in ${JSON.stringify(e)}. Accepted keys: ${i}`);const t=Object.keys(e).filter((e=>!i.find((t=>t===e))));if(t.length>0)throw new Error(`Unexpected keys ${t} found in fbContent() args. Accepted keys: ${i}`)}function u(){return e.env.FB_INTERNAL||l&&l("internaldocs-fb").FB_INTERNAL}t.fbContent=s,t.fbInternalOnly=function(e){return s({internal:e})},t.validateFbContentArgs=p,t.isInternal=u,t.FbInternalOnly=function(e){return u()?e.children:null},t.OssOnly=function(e){return u()?null:e.children}}).call(this,n(326))},325:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return i}));var a=n(22);function r(){var e=Object(a.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=r()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function i(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},326:function(e,t){var n,a,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{a="function"==typeof clearTimeout?clearTimeout:i}catch(e){a=i}}();var s,c=[],p=!1,u=-1;function m(){p&&s&&(p=!1,s.length?c=s.concat(c):u=-1,c.length&&d())}function d(){if(!p){var e=l(m);p=!0;for(var t=c.length;t;){for(s=c,c=[];++u<t;)s&&s[u].run();u=-1,t=c.length}s=null,p=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===i||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function b(e,t){this.fun=e,this.array=t}function f(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new b(e,t)),1!==c.length||p||l(d)},b.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=f,r.addListener=f,r.once=f,r.off=f,r.removeListener=f,r.removeAllListeners=f,r.emit=f,r.prependListener=f,r.prependOnceListener=f,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},327:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function l(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.getSpecInfo=void 0;const r=n(328);t.getSpecInfo=function(e){return a(this,void 0,void 0,(function*(){return yield r.call({module:"bloks",api:"getSpecInfo",args:{styleId:e}})}))}},328:function(e,t,n){"use strict";var a=this&&this.__awaiter||function(e,t,n,a){return new(n||(n=Promise))((function(r,o){function i(e){try{s(a.next(e))}catch(t){o(t)}}function l(e){try{s(a.throw(e))}catch(t){o(t)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}s((a=a.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.call=void 0;let r=!1,o=0;const i={};t.call=function(e){return a(this,void 0,void 0,(function*(){if("staticdocs.thefacebook.com"!==window.location.hostname&&"localhost"!==window.location.hostname)return Promise.reject(new Error("Not running on static docs"));r||(r=!0,window.addEventListener("message",(e=>{if("static-docs-bridge-response"!==e.data.event)return;const t=e.data.id;t in i||console.error(`Recieved response for id: ${t} with no matching receiver`),"response"in e.data?i[t].resolve(e.data.response):i[t].reject(new Error(e.data.error)),delete i[t]})));const t=o++,n=new Promise(((e,n)=>{i[t]={resolve:e,reject:n}})),a={event:"static-docs-bridge-call",id:t,module:e.module,api:e.api,args:e.args},l="localhost"===window.location.hostname?"*":"https://www.internalfb.com";return window.parent.postMessage(a,l),n}))}},329:function(e,t,n){"use strict";n(61);var a=n(324),r=n(0);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function i(e){var t=e.children;return r.createElement("div",{className:"docsRating",id:"docsRating"},r.createElement("hr",null),t)}var l=function(){var e=r.useState(!1),t=e[0],n=e[1],a=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":r.createElement(r.Fragment,null,"Is this page useful?",r.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(1)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),r.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return a(0)}},r.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return r.createElement("p",null,"Let us know how these docs can be improved by",r.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},c=function(){return r.createElement(i,null,r.createElement(s,null),r.createElement(l,null))},p=function(){return r.createElement(i,null,r.createElement(l,null))};t.a=function(){return Object(a.fbContent)({internal:r.createElement(c,null),external:r.createElement(p,null)})}},332:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},342:function(e,t,n){"use strict";var a=n(0),r=n(343);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},343:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},363:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(342),i=n(332),l=n(80),s=n.n(l),c=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,l=e.defaultValue,u=e.values,m=e.groupId,d=e.className,b=Object(o.a)(),f=b.tabGroupChoices,y=b.setTabGroupChoices,g=Object(a.useState)(l),h=g[0],v=g[1],O=a.Children.toArray(e.children);if(null!=m){var j=f[m];null!=j&&j!==h&&u.some((function(e){return e.value===j}))&&v(j)}var x=function(e){v(e),null!=m&&y(m,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return x(t)},onClick:function(){x(t)}},n)}))),t?Object(a.cloneElement)(O.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},364:function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return o.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);