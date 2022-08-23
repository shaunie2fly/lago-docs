"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[7396],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||l;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},965:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:3},o="Charges",i={unversionedId:"guide/plans/charges",id:"guide/plans/charges",title:"Charges",description:"In addition to the price of the plan, you can charge your customers for usage. For instance, you can create charges based on the number of API calls, the number of active users, transactions, compute time, etc. These additional charges relate to the billable metrics defined previously.",source:"@site/docs/guide/05_plans/charges.md",sourceDirName:"guide/05_plans",slug:"/guide/plans/charges",permalink:"/docs/guide/plans/charges",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"guide",previous:{title:"Plan Model",permalink:"/docs/guide/plans/plan-model"},next:{title:"Subscriptions",permalink:"/docs/guide/plans/subscription"}},s={},c=[{value:"Overview of charges",id:"overview-of-charges",level:2},{value:"Number of decimals",id:"number-of-decimals",level:2},{value:"Charge models",id:"charge-models",level:2},{value:"Standard charge model",id:"standard-charge-model",level:3},{value:"Graduated charge model",id:"graduated-charge-model",level:3},{value:"Package charge model",id:"package-charge-model",level:3},{value:"Percentage charge model",id:"percentage-charge-model",level:3}],p={toc:c};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"charges"},"Charges"),(0,r.kt)("p",null,"In addition to the price of the plan, you can charge your customers for usage. For instance, you can create charges based on the number of API calls, the number of active users, transactions, compute time, etc. These additional charges relate to the ",(0,r.kt)("a",{parentName:"p",href:"../billable-metrics/overview"},"billable metrics")," defined previously."),(0,r.kt)("h2",{id:"overview-of-charges"},"Overview of charges"),(0,r.kt)("p",null,'You can add charges to a plan by calling an existing billable metric. These "pay-as-you-go" features can be linked to several plans.'),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Charges are always paid in arrears as they are based on usage;"),(0,r.kt)("li",{parentName:"ul"},"Charges are denominated in the same currency as the plan; and"),(0,r.kt)("li",{parentName:"ul"},"The trial period does not apply to charges. The trial period only applies to the base amount of the plan."))),(0,r.kt)("p",null,"There are several price models available for charges (see below)."),(0,r.kt)("h2",{id:"number-of-decimals"},"Number of decimals"),(0,r.kt)("p",null,"Lago allows you create charges with up to five decimals (e.g. $0.00012)."),(0,r.kt)("p",null,"Please note that charges are invoiced in ",(0,r.kt)("inlineCode",{parentName:"p"},"amount_cents"),". Therefore, Lago automatically rounds prices (e.g. USD 1102 ",(0,r.kt)("inlineCode",{parentName:"p"},"amount_cents")," = $11.02)."),(0,r.kt)("h2",{id:"charge-models"},"Charge models"),(0,r.kt)("h3",{id:"standard-charge-model"},"Standard charge model"),(0,r.kt)("p",null,"Select the standard charge model if you want to charge the ",(0,r.kt)("strong",{parentName:"p"},"same price for each unit")," consumed."),(0,r.kt)("p",null,"Imagine that your API company charges $0.05 per API call (i.e. your billable metric). By selecting the standard charge model, you will define a fixed unit price. If a customer makes 1,000 API calls during the billing period, the total invoice amount will be $0.05 x 1,000 API calls = $50."),(0,r.kt)("h3",{id:"graduated-charge-model"},"Graduated charge model"),(0,r.kt)("p",null,"Select the graduated charge model if you want to define ",(0,r.kt)("strong",{parentName:"p"},"several price tiers"),". This charge model allows you to apply a discount depending on the number of units consumed. You can also apply a ",(0,r.kt)("strong",{parentName:"p"},"flat fee")," to an entire tier."),(0,r.kt)("p",null,"Let's take back the example of the API company. You could charge $1 per unit for the first 100 units (first 100 API calls), then $0.50 per unit for the next 100 calls and finally, $0.10 for any additional unit."),(0,r.kt)("p",null,"Please refer to the tooltip in the user interface for more information."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration of the graduated charge model",src:a(733).Z,width:"1258",height:"828"})),(0,r.kt)("h3",{id:"package-charge-model"},"Package charge model"),(0,r.kt)("p",null,"Select the package charge model if you want to apply a ",(0,r.kt)("strong",{parentName:"p"},"fixed price to a range of units"),". You also have the ability to offer free units."),(0,r.kt)("p",null,"Let's take back the example of our API company. You may want to charge $5 per 100 units and offer the first 100 units. In this example, 201 units would cost $0 (first 100 units) + $5 (next 100 units) + $5 (last unit) = $10."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration of the package charge model",src:a(1711).Z,width:"1284",height:"836"})),(0,r.kt)("h3",{id:"percentage-charge-model"},"Percentage charge model"),(0,r.kt)("p",null,"Select the percentage charge model if you want to apply a ",(0,r.kt)("strong",{parentName:"p"},"percentage and a fixed fee on transactions")," (e.g. bank transfers, ATM withdrawals, etc.)."),(0,r.kt)("p",null,"This charge model is generally used with billable metrics that allow users to calculate the total amount of transactions (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"sum")," aggregation type and ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," defined as the event property - ",(0,r.kt)("a",{parentName:"p",href:"../billable-metrics/aggregation-types#2-sum"},"learn more"),")."),(0,r.kt)("p",null,"You can define several parameters for the percentage charge model, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Percentage rate"),": charge rate that applies to the total amount (e.g. 1.2% on transactions);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fixed fee (optional)"),": fee that applies to each event ingested during the billing period (e.g. $0.10 per transaction);"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Free units (events - optional)"),": number of events that are not subject to the fixed fee; and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Free units (total amount - optional)"),": amount that is not subject to the charge rate.")),(0,r.kt)("p",null,"When free units are defined for both the total amount and number of events, Lago performs checks each time a new event is ingested to determine whether the free units still apply. In the illustration below for instance, the first 3 events or $500 are free."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Configuration of the percentage charge model",src:a(5699).Z,width:"1062",height:"1320"})),(0,r.kt)("p",null,"Consider the following list of events:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Amount"),(0,r.kt)("th",{parentName:"tr",align:null},"Total number of events"),(0,r.kt)("th",{parentName:"tr",align:null},"Total amount"),(0,r.kt)("th",{parentName:"tr",align:null},"Result"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transaction 1"),(0,r.kt)("td",{parentName:"tr",align:null},"$200"),(0,r.kt)("td",{parentName:"tr",align:null},"1 free event (out of 3)"),(0,r.kt)("td",{parentName:"tr",align:null},"$200 ($500 free)"),(0,r.kt)("td",{parentName:"tr",align:null},"No charges")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transaction 2"),(0,r.kt)("td",{parentName:"tr",align:null},"$100"),(0,r.kt)("td",{parentName:"tr",align:null},"2 free events (out of 3)"),(0,r.kt)("td",{parentName:"tr",align:null},"$300 ($500 free)"),(0,r.kt)("td",{parentName:"tr",align:null},"No charges")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transaction 3"),(0,r.kt)("td",{parentName:"tr",align:null},"$100"),(0,r.kt)("td",{parentName:"tr",align:null},"3 free events (out of 3)"),(0,r.kt)("td",{parentName:"tr",align:null},"$400 ($500 free)"),(0,r.kt)("td",{parentName:"tr",align:null},"No charges")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transaction 4"),(0,r.kt)("td",{parentName:"tr",align:null},"$50"),(0,r.kt)("td",{parentName:"tr",align:null},"4 events (free units exceeded)"),(0,r.kt)("td",{parentName:"tr",align:null},"$450 ($500 free)"),(0,r.kt)("td",{parentName:"tr",align:null},"Charge")))),(0,r.kt)("p",null,"Therefore, for the fourth transaction, the charge will be $0.10 x 1 event + 1.2% of $50 = $0.70."))}u.isMDXComponent=!0},733:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/graduated-charge-pricing-model-65dd3d428a7a5aaeb486e851adf029e7.png"},1711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/package-pricing-charge-model-ff1836a27a037aaf14819bbdb70c836b.png"},5699:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/percentage-model-b2657bc04ac57c27cfe3bc3b830fd8dc.png"}}]);