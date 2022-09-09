"use strict";(self.webpackChunklago_doc=self.webpackChunklago_doc||[]).push([[6592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),s=n(7094),p=n(2466);const d="tabList__CuJ",u="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:c,values:k,groupId:_,className:g}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=k?k:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,o.l)(v,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const h=null===c?c:null!=(t=null!=c?c:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==h&&!v.some((e=>e.value===h)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:y,setTabGroupChoices:f}=(0,s.U)(),[T,I]=(0,r.useState)(h),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,p.o5)();if(null!=_){const e=y[_];null!=e&&e!==T&&v.some((t=>t.value===e))&&I(e)}const x=e=>{const t=e.currentTarget,n=C.indexOf(t),a=v[n].value;a!==T&&(E(t),I(a),null!=_&&f(_,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=C.indexOf(e.currentTarget)+1;n=null!=(a=C[t])?a:C[0];break}case"ArrowLeft":{var r;const t=C.indexOf(e.currentTarget)-1;n=null!=(r=C[t])?r:C[C.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},g)},v.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>C.push(e),onKeyDown:O,onFocus:x,onClick:x},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(b.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function c(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},4973:(e,t,n)=>{n.r(t),n.d(t,{Comment:()=>k,Optional:()=>c,PostEndpoint:()=>_,Required:()=>m,Variable:()=>g,assets:()=>d,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),i=n(5162);const o={sidebar_position:2},s="Persisted events",p={unversionedId:"api/events/persisted-event",id:"api/events/persisted-event",title:"Persisted events",description:"Events represents the data delivered to lago application that will then be aggregated into billable metrics.",source:"@site/docs/api/06_events/persisted-event.mdx",sourceDirName:"api/06_events",slug:"/api/events/persisted-event",permalink:"/docs/api/events/persisted-event",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"api",previous:{title:"Metered events",permalink:"/docs/api/events/metered-event"},next:{title:"Batch Events",permalink:"/docs/api/events/create-batch-event"}},d={},u=[{value:"Route",id:"route",level:2},{value:"Usage",id:"usage",level:2},{value:"Arguments",id:"arguments",level:2},{value:"Content of the event properties object",id:"content-of-the-event-properties-object",level:3},{value:"Responses",id:"responses",level:2}],m=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#DC3309",fontSize:"13px"}},t)},c=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#8C95A6",fontSize:"13px"}},t)},k=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{fontSize:"12px"}},t)},_=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#008559",fontSize:"12px"}},t)},g=e=>{let{children:t,color:n}=e;return(0,r.kt)("span",{style:{color:"#422CC1",fontSize:"12px"}},t)},b={toc:u,Required:m,Optional:c,Comment:k,PostEndpoint:_,Variable:g};function v(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"persisted-events"},"Persisted events"),(0,r.kt)("p",null,"Events represents the data delivered to lago application that will then be aggregated into billable metrics.\nBy sending ",(0,r.kt)("strong",{parentName:"p"},"a persisted event"),", ",(0,r.kt)("strong",{parentName:"p"},"it's kept in memory and persisted through the next billable periods"),", unless you or your clients change it. At the end of each period, the total ",(0,r.kt)("strong",{parentName:"p"},"units to be charged")," is resumed to 0.\nPersisted events are available for all billable metrics having the following aggregation type: ",(0,r.kt)("inlineCode",{parentName:"p"},"RECURRING_COUNT"),"."),(0,r.kt)("p",null,"The following endpoint explains how to ",(0,r.kt)("strong",{parentName:"p"},"send a persisted event to a specific customer.")),(0,r.kt)("h2",{id:"route"},"Route"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-curl",metastring:'title="POST"',title:'"POST"'},"api/v1/events\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)(l.Z,{groupId:"prog-language",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"curl",label:"Curl",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'LAGO_URL="https://api.getlago.com"\nAPI_KEY="__YOUR_API_KEY__"\n\ncurl --location --request POST "$LAGO_URL/api/v1/events" \\\n--header "Authorization: Bearer $API_KEY" \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n      "event": {\n          "transaction_id": "__UNIQUE_ID__",\n          "external_customer_id": "__YOUR_CUSTOMER_ID__",\n          "external_subscription_id": "__YOUR_SUBSCRIPTION_ID__",\n          "code": "__EVENT_CODE__",\n          "timestamp": $(date +%s),\n          "properties": {\n            "custom_field": 12,\n            "operation_type": "add"\n          }\n      }\n  }\'\n'))),(0,r.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from lago_python_client import Client\nfrom lago_python_client.models import Event\n\nclient = Client(api_key=\'__YOUR_API_KEY__\')\n\nevent = Event(\n  transaction_id="__UNIQUE_ID__",\n  external_customer_id="__UNIQUE_ID__",\n  external_subscription_id="__UNIQUE_ID__",\n  code="code",\n  timestamp=1650893379,\n  properties={"custom_field": "custom", "operation_type": "add"}\n)\n\nclient.events().create(event)\n'))),(0,r.kt)(i.Z,{value:"ruby",label:"Ruby",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},'require \'lago-ruby-client\'\n\nclient = Lago::Api::Client.new({api_key: \'__YOUR_API_KEY__\'})\n\nclient.events.create(\n  transaction_id: "__UNIQUE_ID__",\n  external_customer_id: "__CUSTOMER_ID__",\n  external_subscription_id: "__SUBSCRIPTION_ID__",\n  code: "code",\n  timestamp: Time.now.to_i,\n  properties: {\n      custom_field: 12,\n      operation_type: "add"\n  }\n)\n'))),(0,r.kt)(i.Z,{value:"javascript",label:"Node.js",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import Client from \'lago-nodejs-client\'\nimport Event from \'lago-nodejs-client/event\'\n\nlet client = new Client(\'__API_KEY__\')\n\nlet event = new Event({\n  transactionId: "__UNIQUE_TRANSACTION_ID__",\n  externalCustomerId: "__UNIQUE_CUSTOMER_ID__",\n  externalSubscriptionId: "__UNIQUE_SUBSCRIPTION_ID__",\n  code: "code",\n  timestamp: 1650893379,\n  properties: {customField: "custom", operationType: "add"}\n})\n\nawait client.createEvent(event);\n'))),(0,r.kt)(i.Z,{value:"go",label:"Go",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'  import "fmt"\n  import "github.com/getlago/lago-go-client"\n\n  func main() {\n    lagoClient := lago.New().\n      SetApiKey("__YOUR_API_KEY__")\n\n    eventInput := &lago.EventInput{\n      TransactionID: "transac_1234",\n      ExternalCustomerID: "vincent_12345",\n      ExternalSubscriptionID: "1dbe81ce-b092-401c-a00b-314292e17a98",\n      Code:          "code",\n      Timestamp:     time.Now().Unix(),\n      Properties: map[string]string{\n                "nbusers": "12",\n        "operation_type": "add",\n            },\n    }\n\n    err := lagoClient.Event().Create(eventInput)\n    if err != nil {\n      // Error is *lago.Error\n      panic(err)\n    }\n  }\n')))),(0,r.kt)("h2",{id:"arguments"},"Arguments"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": {\n    "transaction_id": "__UNIQUE_ID__",\n    "external_customer_id": "__CUSTOMER_ID__",\n    "external_subscription_id": "__SUBSCRIPTION_ID__",\n    "code": "__EVENT_CODE__",\n    "timestamp": 1650893379,\n    "properties": {\n      "custom_field": 12,\n      "operation_type": "add"\n    }\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"transaction_id")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unique ID identifying the event. ",(0,r.kt)("br",null),"As it will be used for idempotency, it should be a unique identifier")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_subscription_id")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unique subscription ID in your application.",(0,r.kt)("br",null),(0,r.kt)("inlineCode",{parentName:"td"},"external_subscription_id")," is required if the customer has multiple subscriptions or if ",(0,r.kt)("inlineCode",{parentName:"td"},"external_customer_id")," is not provided (in case there's only one subscription)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"external_customer_id")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unique customer ID in your application.",(0,r.kt)("br",null),"If ",(0,r.kt)("inlineCode",{parentName:"td"},"external_subscription_id")," is not given, ",(0,r.kt)("inlineCode",{parentName:"td"},"external_customer_id")," is required if there is only one subscription attached to customer. For multiple subscriptions per customer this attribute is not enough")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"code")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Code identifying the type of the event.",(0,r.kt)("br",null)," It should match the ",(0,r.kt)("inlineCode",{parentName:"td"},"code")," property of one of your active billable metrics, otherwise it will be ignored")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"timestamp")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(c,{mdxType:"Optional"},(0,r.kt)("strong",{parentName:"td"},"Optional")),(0,r.kt)("br",null),(0,r.kt)(k,{mdxType:"Comment"},(0,r.kt)("em",{parentName:"td"},"Default: event reception timestamp"))),(0,r.kt)("td",{parentName:"tr",align:null},"Unix timestamp of the event occurence in UTC.",(0,r.kt)("br",null)," If not provided, the API will set the event reception time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"properties")),(0,r.kt)("td",{parentName:"tr",align:null},"JSON ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(g,{mdxType:"Variable"},(0,r.kt)("strong",{parentName:"td"},"Variable"))),(0,r.kt)("td",{parentName:"tr",align:null},"Extra data to use for the event aggregation.",(0,r.kt)("br",null),"When mandatory, it should contains the ",(0,r.kt)("inlineCode",{parentName:"td"},"field_name")," configured at billable metric level as ",(0,r.kt)("inlineCode",{parentName:"td"},"key")," and any value as field ",(0,r.kt)("inlineCode",{parentName:"td"},"value"),".",(0,r.kt)("br",null),"It might also contain an ",(0,r.kt)("inlineCode",{parentName:"td"},"operation_type")," that can be either ",(0,r.kt)("inlineCode",{parentName:"td"},"add")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"remove"),". ",(0,r.kt)("br",null),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Aggregation type:")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"RECURRING COUNT"),": ",(0,r.kt)("strong",{parentName:"td"},"required"),". value must be the unique identifier of the persisted object.",(0,r.kt)("div",null))))))),(0,r.kt)("h3",{id:"content-of-the-event-properties-object"},"Content of the event properties object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Attributes"),(0,r.kt)("th",{parentName:"tr",align:null},"Types"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("em",{parentName:"td"},"field_name")," ",(0,r.kt)("strong",{parentName:"td"},"(*)")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"(*)")," Key must be the ",(0,r.kt)("inlineCode",{parentName:"td"},"field_name")," configured at billable metric level and be the unique identifier of the object to persist.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"operation_type")),(0,r.kt)("td",{parentName:"tr",align:null},"String ","\xa0"," ","\xa0"," ","\xa0",(0,r.kt)(m,{mdxType:"Required"},(0,r.kt)("strong",{parentName:"td"},"Required"))),(0,r.kt)("td",{parentName:"tr",align:null},"Type of operation to perform on the persisted object. ",(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("strong",{parentName:"td"},"Possible values")),(0,r.kt)("div",null,"- ",(0,r.kt)("inlineCode",{parentName:"td"},"add"),": Add or unsuspend a persisted object.",(0,r.kt)("br",null),"- ",(0,r.kt)("inlineCode",{parentName:"td"},"remove"),": Remove or suspend a persisted object.")))))),(0,r.kt)("h2",{id:"responses"},"Responses"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"200",label:"HTTP 200",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"  The event has been stored in the system and will be aggregated to generate fees."),(0,r.kt)("p",null,"  Returns an empty response body.")),(0,r.kt)(i.Z,{value:"400",label:"HTTP 400",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 400,\n  "error": "Bad Request",\n}\n')),(0,r.kt)("p",null,"  The ",(0,r.kt)("inlineCode",{parentName:"p"},"event")," json root is not present in the request body.")),(0,r.kt)(i.Z,{value:"401",label:"HTTP 401",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 401,\n  "error": "Unauthorized",\n}\n')),(0,r.kt)("p",null,"  Access to the API end point is unhautorized."),(0,r.kt)("p",null,"  ",(0,r.kt)("strong",{parentName:"p"},"Possible reasons are:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header is missing"),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Authorization")," header does not contain the API key"),(0,r.kt)("li",{parentName:"ul"},"The Api key is invalid or expired"))),(0,r.kt)(i.Z,{value:"422",label:"HTTP 422",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "status": 422,\n  "error": "Unprocessable entity",\n  "message": "missing_mandatory_param",\n  "error_details": [\n      "transaction_id"\n  ]\n}\n')),(0,r.kt)("p",null,"  Required arguments are missing."))))}v.isMDXComponent=!0}}]);