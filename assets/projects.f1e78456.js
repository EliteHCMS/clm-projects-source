var je=Object.defineProperty,Ce=Object.defineProperties;var ke=Object.getOwnPropertyDescriptors;var ce=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ve=(e,a,s)=>a in e?je(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,ge=(e,a)=>{for(var s in a||(a={}))Ne.call(a,s)&&ve(e,s,a[s]);if(ce)for(var s of ce(a))Se.call(a,s)&&ve(e,s,a[s]);return e},ye=(e,a)=>Ce(e,ke(a));import{bB as Ae,bC as Ue,bD as Pe,r as w,c as V,bE as Re,w as x,aB as Ee,h as H,bF as le,bG as Je,bH as Te,g as Qe,l as B,bI as fe,bJ as ee,bK as z,bL as O,bM as we,bN as S,q as P,_ as X,p as n,t as y,ag as j,bb as r,d as o,F as K,aR as Z,bO as q,bP as te,by as re,bQ as se,bR as ne,v as f,bS as I,a4 as T,bT as ie,bU as Me,bV as De,bW as L,aS as F,y as J,bX as _,bY as Le,al as Ie,ah as he,bZ as Oe,b_ as ze}from"./index.cc00f7f1.js";import{Q as ae,a as ue,b as oe,c as de}from"./QTabPanels.fee1dc06.js";import{Q as me}from"./QSpace.2a9f743a.js";import{Q as be}from"./QTable.bae7c27d.js";var Fe=Ae({name:"QSplitter",props:ye(ge({},Ue),{modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]}),emits:["update:modelValue"],setup(e,{slots:a,emit:s}){const{proxy:{$q:g}}=Qe(),m=Pe(e,g),d=w(null),l={before:w(null),after:w(null)},t=V(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(m.value===!0?" q-splitter--dark":"")),b=V(()=>e.horizontal===!0?"height":"width"),R=V(()=>e.reverse!==!0?"before":"after"),h=V(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function C(v){return(e.unit==="%"?v:Math.round(v))+e.unit}const A=V(()=>({[R.value]:{[b.value]:C(e.modelValue)}}));let E,k,U,p,c;function u(v){if(v.isFirst===!0){const M=d.value.getBoundingClientRect()[b.value];E=e.horizontal===!0?"up":"left",k=e.unit==="%"?100:M,U=Math.min(k,h.value[1],Math.max(h.value[0],e.modelValue)),p=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:g.lang.rtl===!0?-1:1)*(e.unit==="%"?M===0?0:100/M:1),d.value.classList.add("q-splitter--active");return}if(v.isFinal===!0){c!==e.modelValue&&s("update:modelValue",c),d.value.classList.remove("q-splitter--active");return}const $=U+p*(v.direction===E?-1:1)*v.distance[e.horizontal===!0?"y":"x"];c=Math.min(k,h.value[1],Math.max(h.value[0],$)),l[R.value].value.style[b.value]=C(c),e.emitImmediately===!0&&e.modelValue!==c&&s("update:modelValue",c)}const Q=V(()=>[[Re,u,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function Y(v,$){v<$[0]?s("update:modelValue",$[0]):v>$[1]&&s("update:modelValue",$[1])}return x(()=>e.modelValue,v=>{Y(v,h.value)}),x(()=>e.limits,()=>{Ee(()=>{Y(e.modelValue,h.value)})}),()=>{const v=[H("div",{ref:l.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:A.value.before},le(a.before)),H("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[Je("div",{class:"q-splitter__separator-area absolute-full"},le(a.separator),"sep",e.disable!==!0,()=>Q.value)]),H("div",{ref:l.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:A.value.after},le(a.after))];return H("div",{class:t.value,ref:d},Te(a.default,v))}}});const Be=[{name:0,label:"Job Title",align:"left",field:e=>e[18],format:e=>`${e}`,sortable:!0,required:!0},{name:1,label:"Avg. Rate",align:"right",field:e=>e.avgRate,format:e=>`$ ${e.toFixed(2)}`,sortable:!0},{name:2,label:"Times Requested",align:"right",field:e=>e.timesRequested,format:e=>`${e}`,sortable:!0},{name:2,label:"Quantity Requested",align:"right",field:e=>e.qtyRequested,format:e=>`${e}`,sortable:!0}],Xe=B({setup(){const e=fe(),{projectCrafts:a,active:s}=ee(z()),{udpateProjectCrafts:g}=z(),m=w(a.value[0][3]),d=w(!1);console.log(a.value),x(s,(p,c)=>{m.value=p.crafts.sort((u,Q)=>u.order>Q.order?1:-1)[0][3]});const l=O({job:O().required("Job is required."),alias:O().required("Alias is required.").nullable()}),{meta:t,errors:b,handleSubmit:R,handleReset:h}=we({validationSchema:l}),{value:C}=S("job"),{value:A}=S("alias"),E=R(async p=>{console.log(p);const c=a.value.find(u=>u[9]===p.job[13]);if(c===void 0)e.notify({type:"negative",message:"Something went wrong"});else try{const{data:u}=await P.upsertRecordsXML({to:"bpzpx5m7x",data:[{9:{value:p.alias[3]},13:{value:p.job[3]},20:{value:c[3]}}],fieldsToReturn:[153],formatObject:153});console.log(u),u.length>0&&(g({craft:u[0][153]}),h(),d.value=!1,e.notify({type:"positive",message:"New job added!"}))}catch{e.notify({type:"negative",message:"Something went wrong"})}});async function k(p,c){console.log(C.value),console.log(p),e.dialog({title:"Confirm",message:`Confirm you want to add "${p}" as a new alias.`,cancel:!0,persistent:!0}).onOk(async()=>{try{const{data:u}=await P.upsertRecordsXML({to:"bpzpi5rjh",data:[{6:{value:C.value[3]},7:{value:p},11:{value:"No"}}],fieldsToReturn:[25],formatObject:25});console.log(u),u.length>0&&(A.value=u[0][25],c(u[0][25]))}catch{e.notify({type:"negative",message:"Something went wrong"})}}).onCancel(()=>{c()})}function U(){d.value=!1,h()}return{projectCrafts:a,tab:m,columns:Be,initialPagination:{rowsPerPage:100},splitValue:w(20),showAddJob:d,formMeta:t,formErrors:b,job:C,alias:A,submitJob:E,submitAlias:k,cancelAddJob:U}}}),Ye={key:0},We={key:1},Ge={class:"row justify-between"},He={class:"col-5"},Ke={class:"text-caption"},Ze={class:"col-6"},_e={class:"text-caption"},xe={key:1},ea={key:0},aa={key:1},oa={class:"text-caption"},la={class:"text-caption"};function ta(e,a,s,g,m,d){return n(),y("div",null,[e.$q.screen.gt.sm?(n(),j(Fe,{key:0,modelValue:e.splitValue,"onUpdate:modelValue":a[5]||(a[5]=l=>e.splitValue=l)},{before:r(()=>[o(ue,{modelValue:e.tab,"onUpdate:modelValue":a[0]||(a[0]=l=>e.tab=l),vertical:e.$q.screen.gt.md,align:"left","indicator-color":"accent","active-bg-color":"dark","active-color":"white"},{default:r(()=>[(n(!0),y(K,null,Z(e.projectCrafts,l=>(n(),j(ae,{key:l[3],name:l[3],label:l[10]},null,8,["name","label"]))),128))]),_:1},8,["modelValue","vertical"])]),after:r(()=>[o(de,{modelValue:e.tab,"onUpdate:modelValue":a[4]||(a[4]=l=>e.tab=l),animated:"",vertical:e.$q.screen.gt.md},{default:r(()=>[(n(!0),y(K,null,Z(e.projectCrafts,l=>(n(),j(oe,{key:l[3],name:l[3],class:"q-pt-none"},{default:r(()=>[e.showAddJob?(n(),y("div",We,[o(te,{onSubmit:re(e.submitJob,["prevent"])},{default:r(()=>[o(se,{flat:""},{default:r(()=>[o(ne,null,{default:r(()=>[f("div",Ge,[f("div",He,[o(I,{class:"q-mb-sm",dense:"",label:"Select Default Job","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.job,"onUpdate:modelValue":a[2]||(a[2]=t=>e.job=t),options:l.options.jobs,"option-label":"9","display-value":`${e.job?e.job[9]:""}`,"bottom-slots":"",error:!!e.formErrors.job},{error:r(()=>[f("div",Ke,T(e.formErrors.job),1)]),_:2},1032,["modelValue","options","display-value","error"])]),f("div",Ze,[o(I,{disable:!e.job,class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":a[3]||(a[3]=t=>e.alias=t),options:e.job?e.job.aliases:[],"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias,onNewValue:e.submitAlias,"use-input":""},{error:r(()=>[f("div",_e,T(e.formErrors.alias),1)]),_:1},8,["disable","modelValue","options","display-value","error","onNewValue"])])])]),_:2},1024),o(ie,{align:"right"},{default:r(()=>[o(q,{color:"secondary",label:"Cancel",onClick:e.cancelAddJob},null,8,["onClick"]),o(q,{color:"primary",label:"Submit Job",type:"submit"})]),_:1})]),_:2},1024)]),_:2},1032,["onSubmit"])])):(n(),y("div",Ye,[o(be,{rows:l.classifications.sort((t,b)=>t.order>b.order?-1:1),columns:e.columns,"hide-pagination":!0,"row-key":"name",pagination:e.initialPagination,"table-header-class":"bg-dark text-white"},{top:r(()=>[o(q,{color:"primary",label:"Add Another Job",onClick:a[1]||(a[1]=t=>e.showAddJob=!0)}),o(me)]),_:2},1032,["rows","columns","pagination"])]))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","vertical"])]),_:1},8,["modelValue"])):(n(),y("div",xe,[o(ue,{modelValue:e.tab,"onUpdate:modelValue":a[6]||(a[6]=l=>e.tab=l),align:"left",class:"shadow-2","indicator-color":"accent"},{default:r(()=>[(n(!0),y(K,null,Z(e.projectCrafts,l=>(n(),j(ae,{key:l[3],name:l[3],label:l.abbr},null,8,["name","label"]))),128))]),_:1},8,["modelValue"]),o(de,{modelValue:e.tab,"onUpdate:modelValue":a[10]||(a[10]=l=>e.tab=l),animated:""},{default:r(()=>[(n(!0),y(K,null,Z(e.projectCrafts,l=>(n(),j(oe,{key:l[3],name:l[3]},{default:r(()=>[e.showAddJob?(n(),y("div",aa,[o(te,{onSubmit:re(e.submitJob,["prevent"])},{default:r(()=>[o(se,{flat:""},{default:r(()=>[o(ne,null,{default:r(()=>[o(I,{class:"q-mb-sm",dense:"",label:"Select Default Job","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.job,"onUpdate:modelValue":a[8]||(a[8]=t=>e.job=t),options:l.options.jobs,"option-label":"9","display-value":`${e.job?e.job[9]:""}`,"bottom-slots":"",error:!!e.formErrors.job},{error:r(()=>[f("div",oa,T(e.formErrors.job),1)]),_:2},1032,["modelValue","options","display-value","error"]),o(I,{disabled:!e.job,class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":a[9]||(a[9]=t=>e.alias=t),options:e.job?e.job.aliases:[],"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias,onNewValue:e.submitAlias,"use-input":""},{error:r(()=>[f("div",la,T(e.formErrors.alias),1)]),_:1},8,["disabled","modelValue","options","display-value","error","onNewValue"])]),_:2},1024),o(ie,{align:"right"},{default:r(()=>[o(q,{color:"secondary",label:"Cancel",onClick:e.cancelAddJob},null,8,["onClick"]),o(q,{color:"primary",label:"Submit Job",type:"submit"})]),_:1})]),_:2},1024)]),_:2},1032,["onSubmit"])])):(n(),y("div",ea,[o(be,{rows:l.classifications.sort((t,b)=>t.order>b.order?-1:1),columns:e.columns,"hide-pagination":!0,"row-key":"name",pagination:e.initialPagination,"table-header-class":"bg-dark text-white"},{top:r(()=>[o(q,{color:"primary",label:"Add Another Job",onClick:a[7]||(a[7]=t=>e.showAddJob=!0)}),o(me)]),_:2},1032,["rows","columns","pagination"])]))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]))])}var ra=X(Xe,[["render",ta]]);const sa=B({components:{phoneNumberInput:Me},setup(e,a){const s=fe(),g=w(10),m=w(null),{active:d}=ee(z()),{userPermissions:l,getUser:t}=ee(De()),{addUser:b}=z(),R=V(()=>{const i=l.value.find(N=>N[7]==="create"&&N[16]==="users");return i!==void 0?i.roles:[]}),h=V(()=>{const i=new RegExp("^[0-9]{"+g.value+"}","g");return O({firstName:L().required().label("First Name"),lastName:L().required().label("Last Name"),email:L().email().required().label("Email"),phoneNumber:L().matches(i,{excludeEmptyString:!0,message:"Valid Phone Number Required!"}).required().label("Phone Number"),role:O().required().nullable().label("Role"),workdayId:L().required().label("Workday ID")})}),{meta:C,errors:A,handleSubmit:E,handleReset:k}=we({validationSchema:h}),{value:U}=S("firstName"),{value:p}=S("lastName"),{value:c}=S("email"),{value:u}=S("phoneNumber"),{value:Q}=S("role"),{value:Y}=S("workdayId"),v=E(async i=>{console.log(i);const N={userType:"Project User",phoneNumber:`+${m.value?m.value.dialCode:"1"}${i.phoneNumber}`,email:i.email};if(d.value.users.filter(D=>D[6]===N.email||D[8]===N.phoneNumber).length>0)s.dialog({title:"Alert",message:"Your project already has a user with that phone or email."}).onOk(()=>{a.emit("userAdded")});else{const D=await P.checkIfUserExist(N);if(D){const{data:W}=await P.upsertRecordsXML({to:"br598isx6",data:[{6:{value:D[3]},7:{value:"Project"},9:{value:d.value[3]}}],fieldsToReturn:[28],formatObject:28});W.length>0&&(b({user:W[0][28]}),s.notify({type:"positive",message:"User successfully added"}),a.emit("userAdded"))}else{const W=c.value.match(/^([^@]*)@/)[1],qe=Object.assign({phoneNumber:u.value},m.value),{data:pe}=await P.upsertRecordsXML({to:"br4pxrbs6",data:[{6:{value:i.email},7:{value:"temp"},8:{value:`+${m.value?m.value.dialCode:"1"}${i.phoneNumber}`},9:{value:JSON.stringify(qe)},10:{value:"Active"},11:{value:i.role[3]},17:{value:!0},23:{value:t.value[3]},24:{value:t.value[3]},25:{value:new Date},26:{value:new Date},32:{value:"Project User"},33:{value:W},35:{value:U.value},37:{value:p.value},49:{value:!0},50:{value:!0},70:{value:i.workdayId}}],fieldsToReturn:[3,96],formatObject:96});if(pe[0]!==void 0){const G=await P.upsertRecordsXML({to:"br598isx6",data:[{6:{value:pe[0][3]},7:{value:"Project"},9:{value:d.value[3]}}],fieldsToReturn:[28],formatObject:28});G.data[0]!==void 0&&(b({user:G.data[0][28]}),console.log(G.data[0][28]),s.dialog({title:"Confirm",message:"User successfully added. Would you like to send them an invite?",cancel:!0,persistent:!0}).onOk(async()=>{(await P.upsertRecordsXML({to:"br4pxrbs6",data:[{3:{value:G.data[0][28][3]},93:{value:new Date}}],fieldsToReturn:[3]})).data[0]!==void 0&&(s.notify({type:"positive",message:"User successfully added"}),s.notify({type:"positive",message:"User invite submitted"}),a.emit("userAdded"))}).onCancel(()=>{s.notify({type:"positive",message:"User successfully added"}),a.emit("userAdded")}))}}}k()}),$=V(()=>{const i=[];return d.value.users.forEach(N=>{i.push(N[9].phoneNumber)}),i});x(u,i=>{$.value.includes(i)&&s.notify({type:"negative",message:"Phone Number is already in use!",timeout:1e4,position:s.screen.lt.md?"top":"center"})});const M=i=>{m.value=i},$e=i=>{g.value=i};function Ve(){k(),a.emit("userCanceled")}return console.log(l.value,$.value),{updateCountry:M,updatePhoneMaxLength:$e,firstName:U,lastName:p,email:c,phoneNumber:u,role:Q,workdayId:Y,formMeta:C,formErrors:A,submitUser:v,active:d,roleOptions:R,cancel:Ve}}}),na=f("div",{class:"text-primary text-h6 q-mb-sm"},"Add a New User",-1),ia={class:"row justify-between"},ua={class:"row justify-between"},da={class:"text-caption"},ma={class:"text-caption"};function ba(e,a,s,g,m,d){const l=F("phone-number-input");return n(),y("div",null,[o(se,null,{default:r(()=>[o(te,{onSubmit:re(e.submitUser,["prevent"])},{default:r(()=>[o(ne,null,{default:r(()=>[na,f("div",ia,[f("div",{class:J(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[o(_,{dense:"",outlined:"",label:"First Name",modelValue:e.firstName,"onUpdate:modelValue":a[0]||(a[0]=t=>e.firstName=t),error:!!e.formErrors.firstName},null,8,["modelValue","error"])],2),f("div",{class:J(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[o(_,{dense:"",outlined:"",label:"Last Name",modelValue:e.lastName,"onUpdate:modelValue":a[1]||(a[1]=t=>e.lastName=t),error:!!e.formErrors.lastName},null,8,["modelValue","error"])],2),f("div",{class:J(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[o(_,{dense:"",outlined:"",label:"Workday ID",modelValue:e.workdayId,"onUpdate:modelValue":a[2]||(a[2]=t=>e.workdayId=t),error:!!e.formErrors.workdayId},null,8,["modelValue","error"])],2)]),f("div",ua,[f("div",{class:J(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[o(l,{name:"phoneNumber",class:"col-xs-12 col-sm-12",outlined:"",modelValue:e.phoneNumber,"onUpdate:modelValue":a[3]||(a[3]=t=>e.phoneNumber=t),label:"Phone Number",tabindex:"3",onMaxLengthChanged:e.updatePhoneMaxLength,error:!!e.formErrors.phoneNumber,"error-message":e.formErrors.phoneNumber,onCountryChanged:e.updateCountry,dense:""},null,8,["modelValue","onMaxLengthChanged","error","error-message","onCountryChanged"])],2),f("div",{class:J(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[o(_,{dense:"",outlined:"",label:"Email","bottom-slots":"",modelValue:e.email,"onUpdate:modelValue":a[4]||(a[4]=t=>e.email=t),error:!!e.formErrors.email},{error:r(()=>[f("div",da,T(e.formErrors.email),1)]),_:1},8,["modelValue","error"])],2),f("div",{class:J(["col-12 col-md-4",e.$q.screen.lt.md?"q-pt-sm":"q-pr-sm"])},[o(I,{dense:"",outlined:"",label:"Role","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.role,"onUpdate:modelValue":a[5]||(a[5]=t=>e.role=t),options:e.roleOptions,"option-label":"6","display-value":`${e.role?e.role[6]:""}`,"bottom-slots":"",error:!!e.formErrors.role},{error:r(()=>[f("div",ma,T(e.formErrors.role),1)]),_:1},8,["modelValue","options","display-value","error"])],2)])]),_:1}),o(ie,{align:"right"},{default:r(()=>[o(q,{color:"secondary",onClick:e.cancel,label:"Cancel"},null,8,["onClick"]),o(q,{color:"primary",type:"submit",label:"Submit"})]),_:1})]),_:1},8,["onSubmit"])]),_:1})])}var fa=X(sa,[["render",ba]]);const pa=[{name:0,label:"Date Created",align:"left",field:e=>e[1],format:e=>`${Le.formatDate(e.$d,"MM/DD/YYYY")}`,sortable:!0},{name:1,label:"Name",align:"left",field:e=>e[35],format:(e,a)=>`${e} ${a[37]}`,sortable:!0},{name:2,label:"Role",align:"left",field:e=>e[44],format:e=>`${e}`,sortable:!0},{name:3,label:"Email",align:"left",field:e=>e[6],format:e=>`${e}`,sortable:!0},{name:4,label:"Last Access",align:"left",field:e=>e.lastLogin,format:(e,a)=>`${a.registered?e.date:"Never"}`,sortable:!0}],ca=B({components:{CreateUser:fa},setup(){const{usersForProject:e}=ee(z()),a=w(!1);function s(){a.value=!1}function g(m){console.log(m)}return{usersForProject:e,columns:pa,initialPagination:{rowsPerPage:100},showAddUser:a,userAdded:s,sendInvite:g}}}),va={key:1};function ga(e,a,s,g,m,d){const l=F("create-user");return n(),y("div",null,[e.showAddUser?(n(),y("div",va,[o(l,{onUserAdded:e.userAdded,onUserCanceled:a[1]||(a[1]=t=>e.showAddUser=!1)},null,8,["onUserAdded"])])):(n(),j(be,{key:0,rows:e.usersForProject.sort((t,b)=>t[44]>b[44]?-1:1),columns:e.columns,"hide-pagination":!0,"row-key":"name",pagination:e.initialPagination,"table-header-class":"bg-dark text-white"},Ie({_:2},[e.$can("create","users")?{name:"top",fn:r(()=>[o(q,{color:"primary",label:"Add Another User",onClick:a[0]||(a[0]=t=>e.showAddUser=!0)}),o(me)])}:void 0]),1032,["rows","columns","pagination"]))])}var ya=X(ca,[["render",ga]]);const ha=B({name:"Projects",components:{JobsTab:ra,UsersTab:ya},setup(){return fe(),{tab:w(0)}}}),wa={class:"q-px-sm"};function $a(e,a,s,g,m,d){const l=F("jobs-tab"),t=F("users-tab");return n(),y("div",wa,[o(Oe,{class:"bg-info text-white shadow-2 rounded-borders"},{default:r(()=>[o(ue,{modelValue:e.tab,"onUpdate:modelValue":a[0]||(a[0]=b=>e.tab=b),"bg-color":"none","indicator-color":"accent",align:"justify",dense:""},{default:r(()=>[o(ae,{name:0,label:e.$q.screen.gt.xs?"Available Jobs":"Jobs"},null,8,["label"]),e.$can("read","users")?(n(),j(ae,{key:0,name:1,label:"Users"})):he("",!0)]),_:1},8,["modelValue"])]),_:1}),o(de,{modelValue:e.tab,"onUpdate:modelValue":a[1]||(a[1]=b=>e.tab=b),animated:""},{default:r(()=>[o(oe,{class:"q-px-xs",name:0},{default:r(()=>[o(l)]),_:1}),e.$can("read","users")?(n(),j(oe,{key:0,class:"q-px-xs",name:1},{default:r(()=>[o(t)]),_:1})):he("",!0)]),_:1},8,["modelValue"])])}var Va=X(ha,[["render",$a]]);const qa=B({name:"PageIndex",components:{ProjectTabs:Va},setup(){return{}}});function ja(e,a,s,g,m,d){const l=F("project-tabs");return n(),j(ze,{style:{"max-width":"100vw"}},{default:r(()=>[o(l)]),_:1})}var Ra=X(qa,[["render",ja]]);export{Ra as default};
