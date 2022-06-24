var me=Object.defineProperty,be=Object.defineProperties;var fe=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable;var X=(e,a,r)=>a in e?me(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r,G=(e,a)=>{for(var r in a||(a={}))ce.call(a,r)&&X(e,r,a[r]);if(I)for(var r of I(a))pe.call(a,r)&&X(e,r,a[r]);return e},H=(e,a)=>be(e,fe(a));import{h as k,D as se,E as ve,G as ge,r as V,c as j,H as ye,w as B,I as he,J as E,K as Ve,L as we,g as je,l as F,M as re,N as Se,O as K,o as Ce,P as N,Q as $e,R as W,q as Y,_ as O,p as i,t as b,S as h,U as o,d as l,F as Q,V as P,W as S,X as Z,Y as x,Z as ee,$ as ae,v as f,a0 as T,a1 as z,a2 as te,a3 as ne,a4 as ie}from"./index.8c763f12.js";import{Q as U,a as D,b as M,c as _}from"./QTabPanels.19a9dd7e.js";import{Q as le}from"./QTable.875451c8.js";const qe=k("div",{class:"q-space"});var oe=se({name:"QSpace",setup(){return()=>qe}}),ke=se({name:"QSplitter",props:H(G({},ve),{modelValue:{type:Number,required:!0},reverse:Boolean,unit:{type:String,default:"%",validator:e=>["%","px"].includes(e)},limits:{type:Array,validator:e=>e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"?!1:e[0]>=0&&e[0]<=e[1]},emitImmediately:Boolean,horizontal:Boolean,disable:Boolean,beforeClass:[Array,String,Object],afterClass:[Array,String,Object],separatorClass:[Array,String,Object],separatorStyle:[Array,String,Object]}),emits:["update:modelValue"],setup(e,{slots:a,emit:r}){const{proxy:{$q:c}}=je(),y=ge(e,c),p=V(null),t={before:V(null),after:V(null)},s=j(()=>`q-splitter no-wrap ${e.horizontal===!0?"q-splitter--horizontal column":"q-splitter--vertical row"} q-splitter--${e.disable===!0?"disabled":"workable"}`+(y.value===!0?" q-splitter--dark":"")),v=j(()=>e.horizontal===!0?"height":"width"),C=j(()=>e.reverse!==!0?"before":"after"),m=j(()=>e.limits!==void 0?e.limits:e.unit==="%"?[10,90]:[50,1/0]);function $(u){return(e.unit==="%"?u:Math.round(u))+e.unit}const A=j(()=>({[C.value]:{[v.value]:$(e.modelValue)}}));let J,q,d,g,n;function ue(u){if(u.isFirst===!0){const R=p.value.getBoundingClientRect()[v.value];J=e.horizontal===!0?"up":"left",q=e.unit==="%"?100:R,d=Math.min(q,m.value[1],Math.max(m.value[0],e.modelValue)),g=(e.reverse!==!0?1:-1)*(e.horizontal===!0?1:c.lang.rtl===!0?-1:1)*(e.unit==="%"?R===0?0:100/R:1),p.value.classList.add("q-splitter--active");return}if(u.isFinal===!0){n!==e.modelValue&&r("update:modelValue",n),p.value.classList.remove("q-splitter--active");return}const w=d+g*(u.direction===J?-1:1)*u.distance[e.horizontal===!0?"y":"x"];n=Math.min(q,m.value[1],Math.max(m.value[0],w)),t[C.value].value.style[v.value]=$(n),e.emitImmediately===!0&&e.modelValue!==n&&r("update:modelValue",n)}const de=j(()=>[[ye,ue,void 0,{[e.horizontal===!0?"vertical":"horizontal"]:!0,prevent:!0,stop:!0,mouse:!0,mouseAllDir:!0}]]);function L(u,w){u<w[0]?r("update:modelValue",w[0]):u>w[1]&&r("update:modelValue",w[1])}return B(()=>e.modelValue,u=>{L(u,m.value)}),B(()=>e.limits,()=>{he(()=>{L(e.modelValue,m.value)})}),()=>{const u=[k("div",{ref:t.before,class:["q-splitter__panel q-splitter__before"+(e.reverse===!0?" col":""),e.beforeClass],style:A.value.before},E(a.before)),k("div",{class:["q-splitter__separator",e.separatorClass],style:e.separatorStyle,"aria-disabled":e.disable===!0?"true":void 0},[Ve("div",{class:"q-splitter__separator-area absolute-full"},E(a.separator),"sep",e.disable!==!0,()=>de.value)]),k("div",{ref:t.after,class:["q-splitter__panel q-splitter__after"+(e.reverse===!0?"":" col"),e.afterClass],style:A.value.after},E(a.after))];return k("div",{class:s.value,ref:p},we(a.default,u))}}});const Ae=[{name:3,label:"Job Title",align:"left",field:e=>e[18],format:e=>`${e}`,sortable:!0,required:!0},{name:5,label:"Avg. Rate",align:"right",field:e=>e.avgRate,format:e=>`$ ${e.toFixed(2)}`,sortable:!0}],Je=F({setup(){const e=re(),{projectCrafts:a}=Se(K()),{udpateProjectCrafts:r}=K(),c=V(0),y=V(!1);console.log(a.value),B(a,(d,g)=>{c.value=d[0][3]}),Ce(()=>{a.value&&(c.value=a.value[0][3])});const p=N({job:N().required("Job is required."),alias:N().required("Alias is required.").nullable()}),{meta:t,errors:s,handleSubmit:v,handleReset:C}=$e({validationSchema:p}),{value:m}=W("job"),{value:$}=W("alias"),A=v(async d=>{console.log(d);const g=a.value.find(n=>n[9]===d.job[13]);if(g===void 0)e.notify({type:"negative",message:"Something went wrong"});else try{const{data:n}=await Y.upsertRecordsXML({to:"bpzpx5m7x",data:[{9:{value:d.alias[3]},13:{value:d.job[3]},20:{value:g[3]}}],fieldsToReturn:[153],formatObject:153});console.log(n),n.length>0&&(r({craft:n[0][153]}),C(),y.value=!1,e.notify({type:"positive",message:"New job added!"}))}catch{e.notify({type:"negative",message:"Something went wrong"})}});async function J(d,g){console.log(m.value),console.log(d),e.dialog({title:"Confirm",message:`Confirm you want to add "${d}" as a new alias.`,cancel:!0,persistent:!0}).onOk(async()=>{try{const{data:n}=await Y.upsertRecordsXML({to:"bpzpi5rjh",data:[{6:{value:m.value[3]},7:{value:d},11:{value:"No"}}],fieldsToReturn:[25],formatObject:25});console.log(n),n.length>0&&($.value=n[0][25],g(n[0][25]))}catch{e.notify({type:"negative",message:"Something went wrong"})}}).onCancel(()=>{g()})}function q(){y.value=!1,C()}return{projectCrafts:a,tab:c,columns:Ae,initialPagination:{rowsPerPage:100},splitValue:V(20),showAddJob:y,formMeta:t,formErrors:s,job:m,alias:$,submitJob:A,submitAlias:J,cancelAddJob:q}}}),Qe={key:0},Pe={key:1},Te={class:"row justify-between"},ze={class:"col-5"},Ue={class:"text-caption"},Me={class:"col-6"},Re={class:"text-caption"},Ee={key:1},Ne={key:0},Be={key:1},De={class:"text-caption"},_e={class:"text-caption"};function Fe(e,a,r,c,y,p){return i(),b("div",null,[e.$q.screen.gt.sm?(i(),h(ke,{key:0,modelValue:e.splitValue,"onUpdate:modelValue":a[5]||(a[5]=t=>e.splitValue=t)},{before:o(()=>[l(D,{modelValue:e.tab,"onUpdate:modelValue":a[0]||(a[0]=t=>e.tab=t),vertical:e.$q.screen.gt.md,align:"left","indicator-color":"accent","active-bg-color":"dark","active-color":"white"},{default:o(()=>[(i(!0),b(Q,null,P(e.projectCrafts,t=>(i(),h(U,{key:t[3],name:t[3],label:t[10]},null,8,["name","label"]))),128))]),_:1},8,["modelValue","vertical"])]),after:o(()=>[l(_,{modelValue:e.tab,"onUpdate:modelValue":a[4]||(a[4]=t=>e.tab=t),animated:"",vertical:e.$q.screen.gt.md},{default:o(()=>[(i(!0),b(Q,null,P(e.projectCrafts,t=>(i(),h(M,{key:t[3],name:t[3],class:"q-pt-none"},{default:o(()=>[e.showAddJob?(i(),b("div",Pe,[l(Z,{onSubmit:x(e.submitJob,["prevent"])},{default:o(()=>[l(ee,{flat:""},{default:o(()=>[l(ae,null,{default:o(()=>[f("div",Te,[f("div",ze,[l(T,{class:"q-mb-sm",dense:"",label:"Select Default Job","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.job,"onUpdate:modelValue":a[2]||(a[2]=s=>e.job=s),options:t.options.jobs,"option-label":"9","display-value":`${e.job?e.job[9]:""}`,"bottom-slots":"",error:!!e.formErrors.job},{error:o(()=>[f("div",Ue,z(e.formErrors.job),1)]),_:2},1032,["modelValue","options","display-value","error"])]),f("div",Me,[l(T,{disable:!e.job,class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":a[3]||(a[3]=s=>e.alias=s),options:e.job?e.job.aliases:[],"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias,onNewValue:e.submitAlias,"use-input":""},{error:o(()=>[f("div",Re,z(e.formErrors.alias),1)]),_:1},8,["disable","modelValue","options","display-value","error","onNewValue"])])])]),_:2},1024),l(te,{align:"right"},{default:o(()=>[l(S,{color:"secondary",label:"Cancel",onClick:e.cancelAddJob},null,8,["onClick"]),l(S,{color:"primary",label:"Submit Job",type:"submit"})]),_:1})]),_:2},1024)]),_:2},1032,["onSubmit"])])):(i(),b("div",Qe,[l(le,{rows:t.classifications.sort((s,v)=>s.order>v.order?-1:1),columns:e.columns,"hide-pagination":!0,"row-key":"name",pagination:e.initialPagination,"table-header-class":"bg-dark text-white"},{top:o(()=>[l(S,{color:"primary",label:"Add Another Job",onClick:a[1]||(a[1]=s=>e.showAddJob=!0)}),l(oe)]),_:2},1032,["rows","columns","pagination"])]))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue","vertical"])]),_:1},8,["modelValue"])):(i(),b("div",Ee,[l(D,{modelValue:e.tab,"onUpdate:modelValue":a[6]||(a[6]=t=>e.tab=t),align:"left",class:"shadow-2","indicator-color":"accent"},{default:o(()=>[(i(!0),b(Q,null,P(e.projectCrafts,t=>(i(),h(U,{key:t[3],name:t[3],label:t.abbr},null,8,["name","label"]))),128))]),_:1},8,["modelValue"]),l(_,{modelValue:e.tab,"onUpdate:modelValue":a[10]||(a[10]=t=>e.tab=t),animated:""},{default:o(()=>[(i(!0),b(Q,null,P(e.projectCrafts,t=>(i(),h(M,{key:t[3],name:t[3]},{default:o(()=>[e.showAddJob?(i(),b("div",Be,[l(Z,{onSubmit:x(e.submitJob,["prevent"])},{default:o(()=>[l(ee,{flat:""},{default:o(()=>[l(ae,null,{default:o(()=>[l(T,{class:"q-mb-sm",dense:"",label:"Select Default Job","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.job,"onUpdate:modelValue":a[8]||(a[8]=s=>e.job=s),options:t.options.jobs,"option-label":"9","display-value":`${e.job?e.job[9]:""}`,"bottom-slots":"",error:!!e.formErrors.job},{error:o(()=>[f("div",De,z(e.formErrors.job),1)]),_:2},1032,["modelValue","options","display-value","error"]),l(T,{disabled:!e.job,class:"q-mb-sm",dense:"",label:"Select Custom Job Title (Alias)","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.alias,"onUpdate:modelValue":a[9]||(a[9]=s=>e.alias=s),options:e.job?e.job.aliases:[],"option-label":"7","display-value":`${e.alias?e.alias[7]:""}`,"bottom-slots":"",error:!!e.formErrors.alias,onNewValue:e.submitAlias,"use-input":""},{error:o(()=>[f("div",_e,z(e.formErrors.alias),1)]),_:1},8,["disabled","modelValue","options","display-value","error","onNewValue"])]),_:2},1024),l(te,{align:"right"},{default:o(()=>[l(S,{color:"secondary",label:"Cancel",onClick:e.cancelAddJob},null,8,["onClick"]),l(S,{color:"primary",label:"Submit Job",type:"submit"})]),_:1})]),_:2},1024)]),_:2},1032,["onSubmit"])])):(i(),b("div",Ne,[l(le,{rows:t.classifications.sort((s,v)=>s.order>v.order?-1:1),columns:e.columns,"hide-pagination":!0,"row-key":"name",pagination:e.initialPagination,"table-header-class":"bg-dark text-white"},{top:o(()=>[l(S,{color:"primary",label:"Add Another Job",onClick:a[7]||(a[7]=s=>e.showAddJob=!0)}),l(oe)]),_:2},1032,["rows","columns","pagination"])]))]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"])]))])}var Oe=O(Je,[["render",Fe]]);const Le=F({name:"Projects",components:{JobsTab:Oe},setup(){return re(),{tab:V(0)}}}),Ie=f("div",null,[f("div",{align:"center",class:"text-primary text-h6"},"Coming Soon")],-1);function Xe(e,a,r,c,y,p){const t=ne("jobs-tab");return i(),h(ie,{style:{"max-width":"100vw"}},{default:o(()=>[f("div",null,[l(D,{modelValue:e.tab,"onUpdate:modelValue":a[0]||(a[0]=s=>e.tab=s),"bg-color":"none",color:"dark","active-color":"primary","indicator-color":"accent",align:"justify",dense:""},{default:o(()=>[l(U,{name:0,label:e.$q.screen.gt.xs?"Available Jobs":"Jobs"},null,8,["label"]),l(U,{name:1,label:"Users"})]),_:1},8,["modelValue"]),l(_,{modelValue:e.tab,"onUpdate:modelValue":a[1]||(a[1]=s=>e.tab=s),animated:""},{default:o(()=>[l(M,{class:"q-px-xs",name:0},{default:o(()=>[l(t)]),_:1}),l(M,{name:1},{default:o(()=>[Ie]),_:1})]),_:1},8,["modelValue"])])]),_:1})}var Ge=O(Le,[["render",Xe]]);const He=F({name:"PageIndex",components:{ProjectTabs:Ge},setup(){return{}}});function Ke(e,a,r,c,y,p){const t=ne("project-tabs");return i(),h(ie,{padding:"",style:{"max-width":"100vw"}},{default:o(()=>[l(t)]),_:1})}var ea=O(He,[["render",Ke]]);export{ea as default};
