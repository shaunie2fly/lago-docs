"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[9671],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,o(o({ref:n},c),{},{components:t})):r.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294);function a(e){var n=e.children,t=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var r=t(7462),a=t(7294),i=t(2389),o=t(5979),l=t(6010),u="tabItem_LplD";function s(e){var n,t,i,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,o.lx)(v,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(n=null!=p?p:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(i=g[0])?void 0:i.props.value;if(null!==h&&!v.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),k=y.tabGroupChoices,w=y.setTabGroupChoices,N=(0,a.useState)(h),O=N[0],E=N[1],T=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=k[f];null!=C&&C!==O&&v.some((function(e){return e.value===C}))&&E(C)}var P=function(e){var n=e.currentTarget,t=T.indexOf(n),r=v[t].value;r!==O&&(x(n),E(r),null!=f&&w(f,r))},j=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r=T.indexOf(e.currentTarget)+1;t=T[r]||T[0];break;case"ArrowLeft":var a=T.indexOf(e.currentTarget)-1;t=T[a]||T[T.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return T.push(e)},onKeyDown:j,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),s?(0,a.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function c(e){var n=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(n)},e))}},9881:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),o=(t(9877),t(8215),["components"]),l={sidebar_position:1},u="Welcome to Lago",s={unversionedId:"intro",id:"intro",title:"Welcome to Lago",description:"Lago is an open-source Stripe Billing alternative.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Installation",permalink:"/docs/self-hosting/installation"}},c={},p=[{value:"Four-step billing workflow",id:"four-step-billing-workflow",level:2},{value:"1. Events ingestion",id:"1-events-ingestion",level:3},{value:"2. Billable Metrics aggregation",id:"2-billable-metrics-aggregation",level:3},{value:"3. Pricing definition",id:"3-pricing-definition",level:3},{value:"4. Invoicing creation",id:"4-invoicing-creation",level:3},{value:"Next steps",id:"next-steps",level:2}],d={toc:p};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"welcome-to-lago"},"Welcome to Lago"),(0,i.kt)("p",null,"Lago is an open-source Stripe Billing alternative. "),(0,i.kt)("p",null,"By implementing this library, you are able to build an entire billing logic from zero to hero, even the most complex one. Lago is a real-time event-based library made for usage-based billing, metered billing, subscription-based billing, and all the nuances of pricing in between."),(0,i.kt)("h2",{id:"four-step-billing-workflow"},"Four-step billing workflow"),(0,i.kt)("h3",{id:"1-events-ingestion"},"1. Events ingestion"),(0,i.kt)("p",null,"By ingesting events into Lago, you send the consumption of your clients at scale. You can send anything that is happening in your product, with the highest granularity. You can also use events to send a daily summary for one of your feature that is being charged. Any features that you want your customers to pay should be a specific event."),(0,i.kt)("h3",{id:"2-billable-metrics-aggregation"},"2. Billable Metrics aggregation"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Billable Metrics")," aggregation is the way we translate your events into a real billable metric that can be charge at the end of a billable period. You can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COUNT")," count the number of times an incoming event occurs"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SUM")," sum a defined property for incoming events"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MAX")," get the maximum value of a defined property for incoming events"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"COUNT DISTINCT")," get the number of unique value of a defined property for incoming events")),(0,i.kt)("h3",{id:"3-pricing-definition"},"3. Pricing definition"),(0,i.kt)("p",null,"Pricing represents how much a customer should pay based on the consumption. Each ",(0,i.kt)("inlineCode",{parentName:"p"},"Billable metric")," can be priced differently regarding the ",(0,i.kt)("inlineCode",{parentName:"p"},"Plan")," a customer belongs to."),(0,i.kt)("h3",{id:"4-invoicing-creation"},"4. Invoicing creation"),(0,i.kt)("p",null,"Invoicing occurs at the end of the billing period, regarding the ",(0,i.kt)("inlineCode",{parentName:"p"},"Plan")," a customer belongs to. Invoices detail all the usage a customer should pay for, alongside the total amount and the applied taxes to pay."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"Before ingesting events and define your usage metrics, you must ",(0,i.kt)("a",{parentName:"p",href:"/docs/self-hosting/installation"},"deploy Lago locally"),"."))}f.isMDXComponent=!0}}]);