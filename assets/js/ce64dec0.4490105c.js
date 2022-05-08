"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[987],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return g}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),g=a,m=d["".concat(u,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2360:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(6010),o="tabItem_OmH5";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7462),a=n(7294),o=n(2389),i=n(7392),l=n(7094),u=n(2466),s=n(6010),c="tabList_uSqn",p="tabItem_LplD";function d(e){var t,n,o,d=e.lazy,g=e.block,m=e.defaultValue,f=e.values,v=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,i.l)(y,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==N&&!y.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),T=w.tabGroupChoices,O=w.setTabGroupChoices,E=(0,a.useState)(N),_=E[0],x=E[1],C=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var I=T[v];null!=I&&I!==_&&y.some((function(e){return e.value===I}))&&x(I)}var P=function(e){var t=e.currentTarget,n=C.indexOf(t),r=y[n].value;r!==_&&(j(t),x(r),null!=v&&O(v,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=C.indexOf(e.currentTarget)+1;n=C[r]||C[0];break;case"ArrowLeft":var a=C.indexOf(e.currentTarget)-1;n=C[a]||C[C.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,s.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":g},b)},y.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return C.push(e)},onKeyDown:D,onFocus:P,onClick:P},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),d?(0,a.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function g(e){var t=(0,o.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},6290:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return g},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=(n(9877),n(2360),["components"]),l={sidebar_position:3},u="Aggregation examples",s={unversionedId:"guide/billable-metrics/aggregation-examples",id:"guide/billable-metrics/aggregation-examples",title:"Aggregation examples",description:"Image you are a Tracking API company (such as Segment.com). For the same events received, the result provided by the aggregation types proposed by Lago is completely different. This result is used to charge your customers.",source:"@site/docs/guide/03_billable-metrics/aggregation-examples.md",sourceDirName:"guide/03_billable-metrics",slug:"/guide/billable-metrics/aggregation-examples",permalink:"/docs/guide/billable-metrics/aggregation-examples",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guide",previous:{title:"Aggregation Types",permalink:"/docs/guide/billable-metrics/aggregation-types"},next:{title:"Ingesting Events",permalink:"/docs/guide/ingesting-events"}},c={},p=[{value:"Example of events received",id:"example-of-events-received",level:2},{value:"Differences between the aggregation types",id:"differences-between-the-aggregation-types",level:2}],d={toc:p};function g(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"aggregation-examples"},"Aggregation examples"),(0,o.kt)("p",null,"Image you are a Tracking API company (such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.segment.com/"},"Segment.com"),"). For the same events received, the result provided by the aggregation types proposed by Lago is completely different. This result is used to charge your customers."),(0,o.kt)("h2",{id:"example-of-events-received"},"Example of events received"),(0,o.kt)("p",null,"You decided to charge the ",(0,o.kt)("inlineCode",{parentName:"p"},"Tracked Pages"),". ",(0,o.kt)("strong",{parentName:"p"},"This is your Billable metric.")," Here are the 2 events sent by your backend to Lago, based on the consumption of a customer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Event received n\xb01"',title:'"Event',received:!0,'n\xb01"':!0},'{\n    "transaction_id": "1111-1111-1111-1111",\n    "customer_id": "1",\n    "timestamp": "2022-03-16T00:00:00Z",\n    "code": "tracked_pages",\n    "properties": {\n            "tracked_user_id": "1234-5678-9098-7654"\n            "pageviews": 10\n    }\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Event received n\xb02"',title:'"Event',received:!0,'n\xb02"':!0},'{\n    "transaction_id": "2222-2222-2222-2222",\n    "customer_id": "1",\n    "timestamp": "2022-03-17T00:00:00Z",\n    "code": "tracked_pages",\n    "properties": {\n            "tracked_user_id": "1234-5678-9098-7654",\n            "pageviews": 20\n    }\n}\n')),(0,o.kt)("p",null,"Let's see below the differences between the aggregation types."),(0,o.kt)("h2",{id:"differences-between-the-aggregation-types"},"Differences between the aggregation types"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Aggregation"),(0,o.kt)("th",{parentName:"tr",align:null},"Code"),(0,o.kt)("th",{parentName:"tr",align:null},"Units to be charged"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"COUNT")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"COUNT(tracked_pages)")),(0,o.kt)("td",{parentName:"tr",align:null},"2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"SUM")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"SUM(tracked_pages.properties.pageviews)")),(0,o.kt)("td",{parentName:"tr",align:null},"30")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"MAX")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"MAX(tracked_pages.properties.pageviews)")),(0,o.kt)("td",{parentName:"tr",align:null},"20")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"COUNT DISTINCT")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"DISTINCT_COUNT(tracked_pages.properties.tracked_user_id)")),(0,o.kt)("td",{parentName:"tr",align:null},"1")))),(0,o.kt)("p",null,"Based on the aggregation type you defined for you Billable metric ",(0,o.kt)("inlineCode",{parentName:"p"},"Tracked Pages"),", the result that is going to be charged to your customer is completely different. Make sure to choose the right aggregation type for all your Billable metrics. If you need help, don't hesitate to reach out the Lago Team!"))}g.isMDXComponent=!0}}]);