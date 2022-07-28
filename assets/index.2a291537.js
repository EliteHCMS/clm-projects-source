import{l as W,bD as te,bR as I,bE as U,bU as ie,r as C,bF as Z,bH as me,bI as ae,q as G,_ as P,bY as ce,p as y,ag as Y,bb as u,d as o,bK as L,bL as x,v as p,a4 as M,bO as oe,bP as T,bN as pe,bJ as _,by as ue,bQ as de,c as Q,bV as ye,bM as ee,aS as X,t as A,ah as q,bX as ne,bW as se,bC as w,cF as ge,w as $e,o as Ce,b_ as he,F as we,aR as ke,x as Ve,bS as Ye,an as Se,c1 as Te,c2 as Me}from"./index.6fef573e.js";import{a as Ae,Q as Ee,b as De,c as qe}from"./QTabPanels.f39547df.js";import{Q as Ne,a as Fe}from"./QTd.0bf7537d.js";import{Q as je}from"./QTable.19d4a8dc.js";import{e as Re}from"./export-file.819425c9.js";import"./QMarkupTable.4b2daad9.js";const Qe=W({setup(e,t){te();const{availableMatrixColumns:f,active:m}=I(U()),{addNewMatrixColumn:v}=U(),{getUser:i}=I(ie()),{capitalize:s}=ce,$=C(null),r=Z({selection:Z().required().nullable()}),{meta:c,errors:E,handleSubmit:D,handleReset:N}=me({validationSchema:r}),{value:k}=ae("selection"),V=D(async h=>{const g={6:{value:`${i.value[35]} ${i.value[37]}`},7:{value:h.selection[6].toLowerCase()},10:{value:m.value[3]},13:{value:h.selection[8]},14:{value:h.selection[3]}},{data:z}=await G.upsertRecordsXML({to:"bsiy5quec",data:[g],fieldsToReturn:[12],formatObject:12});z.length>0?(v({project:m.value,data:z[0][12]}),t.emit("newColumnAdded")):t.emit("newColumnFailed"),N()});return{formMeta:c,formErrors:E,submit:V,selection:k,availableMatrixColumns:f,selectionError:$,capitalize:s}}}),Le=p("div",{class:"text-body1 text-white"},"Add a Column to Matrix",-1),Ue=p("div",{class:"text-body1"},"Select an Existing Column",-1),Pe=p("div",{class:"q-pl-sm text-caption text-italic"}," Selecting an existing column will display any information previously entered for the employee by any job site. ",-1),ze={class:"text-caption"},Oe=p("div",{class:"text-body2"},"Don't see your column? You can add a new one.",-1);function Be(e,t,f,m,v,i){return y(),Y(de,{onSubmit:ue(e.submit,["prevent"])},{default:u(()=>[o(_,null,{default:u(()=>[o(L,{class:"bg-dark"},{default:u(()=>[Le]),_:1}),o(L,{class:"q-pb-xs"},{default:u(()=>[Ue,Pe,o(x,{class:"q-mb-sm",dense:"",label:"Select a Column to Add","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.selection,"onUpdate:modelValue":t[0]||(t[0]=s=>e.selection=s),options:e.availableMatrixColumns,"option-label":"6","display-value":e.selection?`${e.selection[6]} - ${e.capitalize(e.selection[8])}`:"","bottom-slots":"",error:!!(e.formErrors.selection||e.selectionError)},{error:u(()=>[p("div",ze,M(e.formErrors.selection?e.formErrors.selection:e.selectionError),1)]),_:1},8,["modelValue","options","display-value","error"])]),_:1}),o(L,{class:"q-py-xs"},{default:u(()=>[Oe]),_:1}),o(oe,{align:"left"},{default:u(()=>[o(T,{label:"Add a New Column",color:"info",onClick:t[1]||(t[1]=s=>e.$emit("continueToNewColumn"))})]),_:1}),o(pe),o(oe,{class:"bg-accent",align:"right"},{default:u(()=>[o(T,{size:e.$q.screen.lt.md?"sm":"",color:"secondary",label:"Cancel",onClick:t[2]||(t[2]=s=>e.$emit("closeAddColumn"))},null,8,["size"]),o(T,{type:"submit",size:e.$q.screen.lt.md?"sm":"",color:"primary",label:"Save"},null,8,["size"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])}var Ie=P(Qe,[["render",Be]]);const Xe=W({setup(e,t){const{availableMatrixColumns:f,active:m}=I(U()),{addNewMatrixColumn:v}=U(),{getUser:i}=I(ie()),s=C(null),$=C(null),r=Q(()=>Z({label:ye().required().nullable().label("Column Name"),type:Z().required().nullable().label("Data Type")})),{meta:c,errors:E,handleSubmit:D,handleReset:N}=me({validationSchema:r}),{value:k}=ae("label"),{value:V}=ae("type"),h=D(async g=>{if(!f.value.find(F=>F[7].toLowerCase()===g.label.toLowerCase()&&F[13]===g.type.value)){const F={7:{value:`${i.value[35]} ${i.value[37]}`},6:{value:g.label.toLowerCase()},8:{value:g.type.value}},{data:H}=await G.upsertRecordsXML({to:"bsjdig6gn",data:[F],fieldsToReturn:[9],formatObject:9});if(H.length>0){const J=H[0][9][3],K=await G.upsertRecordsXML({to:"bsiy5quec",data:[{6:{value:`${i.value[35]} ${i.value[37]}`},7:{value:g.label.toLowerCase()},13:{value:g.type.value},10:{value:m.value[3]},14:{value:J}}],fieldsToReturn:[12],formatObject:12});K.data.length>0?(v({project:m.value,data:K.data[0][12]}),t.emit("newColumnAdded")):t.emit("newColumnFailed")}else t.emit("newColumnFailed")}N()});return{formMeta:c,formErrors:E,submit:h,label:k,type:V,labelError:s,typeError:$}}}),We=p("div",{class:"text-body1 text-white"},"Add a Column to Matrix",-1),He=p("div",{class:"text-body1 text-dark"},"Add a New Column",-1),Je={class:"text-caption"},xe={class:"text-caption"};function Ge(e,t,f,m,v,i){return y(),Y(de,{onSubmit:ue(e.submit,["prevent"])},{default:u(()=>[o(_,null,{default:u(()=>[o(L,{class:"bg-dark"},{default:u(()=>[We]),_:1}),o(L,{class:"q-pt-md"},{default:u(()=>[He,o(ee,{class:"q-mb-md",dense:"",type:"text","bottom-slots":"",error:!!(e.formErrors.label||e.labelError),modelValue:e.label,"onUpdate:modelValue":t[0]||(t[0]=s=>e.label=s),label:"Column Name"},{error:u(()=>[p("div",Je,M(e.formErrors.label?e.formErrors.label:e.labelError),1)]),_:1},8,["error","modelValue"]),o(x,{dense:"",label:"Select Data Type",modelValue:e.type,"onUpdate:modelValue":t[1]||(t[1]=s=>e.type=s),options:[{value:"text",label:"Text"},{value:"date",label:"Date"},{value:"checkbox",label:"Checkbox"}],"bottom-slots":"",error:!!(e.formErrors.type||e.typeError)},{error:u(()=>[p("div",xe,M(e.formErrors.type?e.formErrors.type:e.typeError),1)]),_:1},8,["modelValue","error"])]),_:1}),o(pe),o(oe,{class:"bg-accent",align:"right"},{default:u(()=>[o(T,{size:e.$q.screen.lt.md?"sm":"",color:"secondary",label:"Cancel",onClick:t[2]||(t[2]=s=>e.$emit("closeAddColumn"))},null,8,["size"]),o(T,{type:"submit",size:e.$q.screen.lt.md?"sm":"",color:"primary",label:"Save"},null,8,["size"])]),_:1})]),_:1})]),_:1},8,["onSubmit"])}var Ke=P(Xe,[["render",Ge]]);const Ze=W({components:{SelectColumn:Ie,EnterColumn:Ke},setup(){const e=te(),t=C(0),{getMatrixColumns:f}=U();async function m(){e.loading.show(),(await f()).length===0&&(t.value=1),e.loading.hide()}return m(),{step:t}}});function _e(e,t,f,m,v,i){const s=X("select-column"),$=X("enter-column");return y(),A("div",null,[p("div",null,[e.step===0?(y(),Y(s,{key:0,onNoOptions:t[0]||(t[0]=r=>e.step=1),onCloseAddColumn:t[1]||(t[1]=r=>e.$emit("closeAddColumn")),onContinueToNewColumn:t[2]||(t[2]=r=>e.step=1),onNewColumnAdded:t[3]||(t[3]=r=>e.$emit("newColumnAdded")),onNewColumnFailed:t[4]||(t[4]=r=>e.$emit("newColumnFailed"))})):q("",!0),e.step===1?(y(),Y($,{key:1,onCloseAddColumn:t[5]||(t[5]=r=>e.$emit("closeAddColumn")),onBackToSelect:t[6]||(t[6]=r=>e.step=0),onNewColumnAdded:t[7]||(t[7]=r=>e.$emit("newColumnAdded")),onNewColumnFailed:t[8]||(t[8]=r=>e.$emit("newColumnFailed"))})):q("",!0)])])}var et=P(Ze,[["render",_e]]);const tt=W({props:{inputType:String,row:Object,col:Object,currentValue:String,checkValue:Boolean},setup(e,t){const f=C(""),m=C(null),v=C(e.checkValue),i=C(!1),s=C(e.currentValue),{getUser:$}=ie(),{refreshAssignment:r}=ne();function c(){console.log(se.formatDate(e.col.value,"YYYY-MM-DD")),e.inputType==="date"?(m.value=se.formatDate(e.col.value,"YYYY-MM-DD"),i.value=!0):e.inputType==="checkbox"?(v.value=e.col.value,i.value=!0):(f.value=e.col.value,i.value=!0)}const E=Q(()=>!!(s.value&&s.value!==""&&s.value!==void 0));async function D(){let k;if(e.inputType==="checkbox"&&v.value===!1){N();return}else i.value?k={3:{value:e.row[e.col.keyString][3]},10:{value:`${$[35]} ${$[37]}`}}:k={12:{value:e.row.employee[3]},13:{value:e.col.name},6:{value:e.inputType},17:{value:e.col.colRid},10:{value:`${$[35]} ${$[37]}`}};e.inputType==="date"?Object.assign(k,{8:{value:m.value}}):e.inputType==="checkbox"&&v.value!==!1?Object.assign(k,{9:{value:v.value}}):Object.assign(k,{7:{value:f.value}});const{data:V}=await G.upsertRecordsXML({to:"bsi3t4bcz",data:[k],fieldsToReturn:[11],formatObject:11});if(V.length>0){const h=e.row;Object.assign(h,{[e.col.keyString]:V[0][11]}),r({assignment:h}),e.inputType==="date"?(s.value=w(m.value,"YYYY-MM-DD").format("MM/DD/YYYY"),m.value=null):(s.value=f.value,f.value=""),i.value&&(i.value=!1)}}async function N(){const V={3:{value:e.row[e.col.keyString][3]},16:{value:`${$[35]} ${$[37]}`},15:{value:!0}};e.inputType==="checkbox"&&Object.assign(V,{9:{value:v.value}});const{data:h}=await G.upsertRecordsXML({to:"bsi3t4bcz",data:[V],fieldsToReturn:[11],formatObject:11});if(console.log(h),h.length>0){const g=e.row;delete g[e.col.keyString],r({assignment:g}),e.inputType==="date"?(s.value="",m.value=null):(s.value="",f.value=""),i.value&&(i.value=!1)}}return{textEntry:f,dateEntry:m,checkEntry:v,props:e,editMode:i,hasValue:E,setValue:s,submit:D,showEdit:c,remove:N}}}),lt={key:0,class:"row"},at={class:"col-2"},ot={class:"col-10"},nt={key:2,align:"center"};function st(e,t,f,m,v,i){return y(),A("div",null,[e.hasValue&&!e.editMode&&e.props.inputType!=="checkbox"?(y(),A("div",lt,[p("div",at,[o(T,{size:"sm",dense:"",flat:"","text-color":"primary",icon:"edit",onClick:e.showEdit},null,8,["onClick"])]),p("div",ot,[p("span",null,M(e.setValue),1)])])):q("",!0),e.props.inputType!=="checkbox"&&(!e.hasValue||e.editMode)?(y(),Y(de,{key:1,onSubmit:ue(e.submit,["prevent"])},{default:u(()=>[e.props.inputType==="date"?(y(),Y(ee,{key:0,clearable:"",filled:"","input-class":"text-caption",dense:"",type:"date",modelValue:e.dateEntry,"onUpdate:modelValue":t[0]||(t[0]=s=>e.dateEntry=s),onClear:t[1]||(t[1]=s=>e.remove())},{prepend:u(()=>[e.dateEntry?(y(),Y(T,{key:0,"text-color":"primary",flat:"",type:"submit",size:"sm",dense:"",icon:"save",onClick:e.submit},null,8,["onClick"])):q("",!0)]),_:1},8,["modelValue"])):q("",!0),e.props.inputType==="text"?(y(),Y(ee,{key:1,clearable:"",filled:"","input-class":"text-caption",dense:"",type:"text",modelValue:e.textEntry,"onUpdate:modelValue":t[2]||(t[2]=s=>e.textEntry=s),onClear:t[3]||(t[3]=s=>e.remove())},{prepend:u(()=>[e.textEntry!==""?(y(),Y(T,{key:0,"text-color":"primary",flat:"",type:"submit",size:"sm",dense:"",icon:"save",onClick:e.submit},null,8,["onClick"])):q("",!0)]),_:1},8,["modelValue"])):q("",!0)]),_:1},8,["onSubmit"])):q("",!0),e.props.inputType==="checkbox"?(y(),A("div",nt,[o(ge,{modelValue:e.checkEntry,"onUpdate:modelValue":[t[4]||(t[4]=s=>e.checkEntry=s),e.submit]},null,8,["modelValue","onUpdate:modelValue"])])):q("",!0)])}var rt=P(tt,[["render",st]]);const{capitalize:B}=ce,re=e=>{const t=e[20]!==""?B(e[20].toLowerCase().trim()):"",f=e[22]!==""?B(e[22].toLowerCase().trim()):"",m=e[21]!==""?` ${B(e[21].toLowerCase().trim())}`:"",v=e[23]!==""?` ${B(e[23])}`:"";return`${f}${v}, ${t}${m}`},it=[{name:1,label:"Name",align:"left",field:e=>e.employee[22],format:(e,t)=>`${re(t.employee)}`,sortable:!0,sortOrder:"ad"},{name:7,label:"Workday ID",align:"left",field:e=>e.employee[378],format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Payroll ID",align:"left",field:e=>e.employee[213],format:e=>e===""?"not available":e,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.fullJob,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e.map.jobNumber,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e.map.start,format:e=>`${e?se.formatDate(e,"MM/DD/YYYY"):"TBD"}`,sortable:!0}],ut=W({name:"Table",components:{AddColumn:et,TableEdit:rt},setup(){const e=te(),t=ne(),f=U(),{assignmentsForProject:m}=I(t),v=m,{active:i}=I(U()),{getAssignments:s,checkDisa:$}=ne(),r=C(""),c=C(null),E=C(null),D=C(null),N=C(0),k=C(!1),V=C(!1),h=C(!1);s();const g=Q(()=>{let d=v.value;return d=d.filter(a=>a[75].toLowerCase().includes(r.value.toLowerCase())),d=c.value?c.value==="Not Active"?d.filter(a=>a.employee[556]&&a.employee[556][10]&&a.employee[556][10].ownerStatus!=="Active"):d.filter(a=>a.employee[556]&&a.employee[556][10]&&a.employee[556][10].ownerStatus===c.value):d,d=E.value?d.filter(a=>a.employee[556]&&a.employee[556][10]&&a.employee[556][10].hasPendingRandom===E.value.value):d,d=D.value?d.filter(a=>a.employee[556]&&a.employee[556][10]&&a.employee[556][10].backgrounds===D.value):d,d.sort((a,l)=>a.employee[22].toLowerCase().trim()>l.employee[22].toLowerCase().trim()?1:-1).filter(a=>!a[112])});function z(d,a,l){let b=a!==void 0?a(d,l):d;return b=b==null?"":String(b),b=b.split('"').join('""'),`"${b}"`}async function F(){V.value=!0,e.loading.show({message:"Checking Disa Status. This may take a few moments..."});try{await $({project:i.value,roster:g.value})}catch(d){console.log(d),e.notify({message:"There was a problem...",color:"negative",icon:"warning"})}e.loading.hide(),V.value=!1}const H=Q(()=>[...new Map(i.value.matrix.map(a=>[a[7],a])).values()]),J=Q(()=>{const d=[{name:1,label:"Name",align:"left",field:l=>re(l.employee),format:l=>l,sortable:!0,sortOrder:"ad",required:!0},{name:0,label:"Status",align:"center",field:l=>l.employee[556]&&l.employee[556][10]?l.employee[556][10].ownerStatus:null,format:l=>l||"N/A",sortable:!0,required:!0}];if(i.value[322]){const l=i.value[321];l[36]&&d.push({name:5,label:"Background",align:"center",field:n=>n.employee[556]&&n.employee[556][10]?n.employee[556][10].backgrounds:null,format:n=>n||"N/A",sortable:!0,required:!0}),d.push({name:3,label:"Random",align:"left",field:n=>n.employee[556]&&n.employee[556][10]?n.employee[556][10].hasPendingRandom:null,format:n=>n?"Yes":"No",sortable:!0,required:!0},{name:4,label:"Days Left",align:"right",field:n=>n.employee[556]&&n.employee[556][10]&&n.employee[556][10].hasPendingRandom?n.employee[556][10].daysUntilWindowCloses:null,format:n=>n?parseInt(n):"N/A",sortable:!0,required:!0});const b=l[10].split(",");b&&Array.isArray(b)&&b.forEach((n,le)=>{const S=6+(le+1);let j="";n=n.toLowerCase().trim(),n.includes("w/ randoms")&&(n=n.replace(" w/ randoms","")),n==="dccha"||n==="dcceo"?j="lastUrineTest":n==="dccht"?j="lastHairTest":n==="nasap"?j="lastNASAPTest":n==="dccof"&&(j="lastOralFluidTest");const ve={policy:n,key:j};d.push({name:S,label:`${n.toUpperCase()} Last Test`,align:"right",field:R=>R.employee[556]&&R.employee[556][10]?R.employee[556][10][ve.key]:null,format:R=>R&&w(R).isValid()?`${w(R).format("MM/DD/YYYY")}`:"N/A",sortable:!0,required:!0})}),l[36]&&d.push({name:6,label:"BG Exp",align:"right",field:n=>n.employee[556]&&n.employee[556][10]?n.employee[556][10].backgroundsExpDate:null,format:n=>n&&w(n).isValid()?`${w(n).format("MM/DD/YYYY")}`:"N/A",sortable:!0,required:!0})}return[{keyString:"basic_plus",colRid:7,allowEdit:!0,editInputType:"date",name:"basic_plus",classes:"editable",label:"Basic Plus Exp",align:"right",field:l=>l.basic_plus?l.basic_plus.value:null,format:l=>l?w(l,"MM-DD-YYYY").format("MM/DD/YYYY"):null,sortable:!0,required:!0},{keyString:"twic",colRid:8,allowEdit:!0,editInputType:"date",name:"twic",classes:"editable",label:"TWIC Exp",align:"right",field:l=>l.twic?l.twic.value:null,format:l=>l?w(l,"MM-DD-YYYY").format("MM/DD/YYYY"):null,sortable:!0,required:!0}].forEach(l=>{d.push(l)}),H.value.forEach(l=>{let b="";l[7].split(" ").forEach((S,j)=>{b+=j>0?` ${B(S)}`:B(S)});const le={keyString:l[18],colRid:l[14],allowEdit:!0,editInputType:l[13],name:l[18],classes:"editable",label:b,align:"left",field:S=>S[l[18]]?S[l[18]].value:null,format:S=>S?l[13]==="date"?w(S,"MM-DD-YYYY").format("MM/DD/YYYY"):S:null,sortable:!0};d.push(le)}),d}),K=Q(()=>({notActive:g.value.filter(a=>!a.employee[556]||a.employee[556][10].ownerStatus!=="Active").length,active:g.value.filter(a=>a.employee[556]&&a.employee[556][10].ownerStatus==="Active").length,randoms:g.value.filter(a=>a.employee[556]&&a.employee[556][10].hasPendingRandom).length})),O=Q(()=>{if(i.value[322])if(console.log(g.value),g.value.length>0){const d=g.value.filter(a=>a.employee[556]&&a.employee[556][10]&&w(a.employee[556][10].dateChecked).isValid());if(d.length>0){const a=d.sort((l,b)=>l.employee[556][10].dateChecked>b.employee[556][10].dateChecked?-1:1)[0].employee[556][10].dateChecked;return a?w(a):null}else return null}else return null;else return null});$e(O,()=>{i.value&&i.value[322]&&O.value&&O.value.isBefore(w(),"day")&&F()}),Ce(()=>{i.value&&i.value[322]&&O.value&&O.value.isBefore(w(),"day")&&F()});function fe(){h.value=!1,e.notify({type:"positive",message:"New Column Added!",position:"top-right"})}function be(){h.value=!1,e.notify({type:"negative",message:"Cannot add new column",position:"top-right"})}return console.log(i.value),{columns:it,rows:g,initialPagination:C({rowsPerPage:25}),separator:"vertical",projectStore:f,active:i,search:r,statusFilter:c,bgFilter:D,randomFilter:E,assignmentsForProject:m,tab:N,showEmployee:k,formatName:re,exportAllEmployees(){const d=[J.value.map(l=>z(l.label))].concat(g.value.map(l=>J.value.map(b=>z(typeof b.field=="function"?b.field(l):l[b.field===void 0?b.name:b.field],b.format,l)).join(","))).join(`\r
`);Re(`${w().format("MM.DD.YYYY")} ${i.value[20]} Site-Matrix-Export.csv`,d,"text/csv")!==!0&&e.notify({message:"Browser denied file download...",color:"negative",icon:"warning"})},checkDisaStatus:F,computedColumns:J,checkingStatus:V,statusSummary:K,dayjs:w,lastChecked:O,showAddColumn:h,newColumnAdded:fe,newColumnFailed:be,customMatrixColumns:H}}}),dt={key:0},mt={class:"row items-center"},ct={class:"col-12 col-md-3 q-px-sm"},pt={class:"col-12 col-md-2 q-px-sm"},ft={class:"col-12 col-md-2 q-px-sm"},bt={class:"col-12 col-md-2 q-px-sm"},vt={class:"text-primary text-italic text-body2"},yt={class:"text-dark text-italic text-body2 q-mt-sm"},gt=Se(" Last Checked: "),$t={class:"text-accent"},Ct={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},ht={key:1},wt={key:1},kt=p("div",{class:"text-primary text-body1"},"Coming soon. This is available for Disa sites only right now.",-1);function Vt(e,t,f,m,v,i){const s=X("table-edit"),$=X("add-column");return y(),A("div",null,[e.active[322]?(y(),A("div",dt,[o(_,{flat:""},{default:u(()=>[o(L,{class:"q-pt-none"},{default:u(()=>[p("div",mt,[p("div",ct,[o(ee,{dense:"",modelValue:e.search,"onUpdate:modelValue":t[0]||(t[0]=r=>e.search=r),label:"Search"},null,8,["modelValue"])]),p("div",pt,[o(x,{dense:"",label:"Status","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.statusFilter,"onUpdate:modelValue":t[1]||(t[1]=r=>e.statusFilter=r),options:["Active","Not Active"],"use-chips":""},null,8,["modelValue"])]),p("div",ft,[o(x,{dense:"",label:"Pending Random","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.randomFilter,"onUpdate:modelValue":t[2]||(t[2]=r=>e.randomFilter=r),options:[{label:"Yes",value:!0},{label:"No",value:!1}],"use-chips":""},null,8,["modelValue"])]),p("div",bt,[o(x,{dense:"",label:"Background","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.bgFilter,"onUpdate:modelValue":t[3]||(t[3]=r=>e.bgFilter=r),options:["Active","Not Active"],"use-chips":""},null,8,["modelValue"])])])]),_:1})]),_:1}),o(je,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.lt.sm?"Matrix":`Matrix for ${e.active[20]}`,columns:e.computedColumns,rows:e.rows,"row-key":"3",class:"q-pa-sm sticky-header-table",pagination:e.initialPagination,"onUpdate:pagination":t[5]||(t[5]=r=>e.initialPagination=r),"rows-per-page-options":[0],separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There are no employees for ${e.active[20]}`,grid:e.$q.screen.lt.sm,dense:""},{"top-right":u(()=>[o(T,{dense:e.$q.screen.lt.md,color:"accent",label:"Check Disa Status",onClick:e.checkDisaStatus},null,8,["dense","onClick"]),o(T,{dense:e.$q.screen.lt.md,class:"q-ml-sm",color:"info",label:"Add a Column",onClick:t[4]||(t[4]=r=>e.showAddColumn=!0)},null,8,["dense"]),o(T,{dense:e.$q.screen.lt.md,class:"q-ml-sm",color:"primary",label:"Download",onClick:e.exportAllEmployees,disable:e.rows.length<1},null,8,["dense","onClick","disable"])]),"top-left":u(()=>[p("div",vt," ("+M(e.statusSummary.active)+" active / "+M(e.statusSummary.notActive)+" not active / "+M(e.statusSummary.randoms)+" pending randoms) ",1),p("div",yt,[gt,p("span",$t,M(e.lastChecked?e.lastChecked.format("MM/DD/YYYY hh:mm:ss a z"):"Never"),1)])]),"no-data":u(({message:r})=>[p("div",Ct,[o(he,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),p("span",null,M(r),1)])]),body:u(r=>[o(Ne,{props:r},{default:u(()=>[(y(!0),A(we,null,ke(r.cols,c=>(y(),Y(Fe,{key:c.name,props:r,style:Ve(c.editInputType==="text"?"min-width: 150px":"")},{default:u(()=>[c.allowEdit?(y(),Y(s,{key:0,hasValue:!!(c.value||c.value!==""||c.value!==void 0),col:c,currentValue:c.editInputType==="checkbox"?"":c.value,checkValue:c.value==="true",inputType:c.editInputType?c.editInputType:"text",row:r.row},null,8,["hasValue","col","currentValue","checkValue","inputType","row"])):(y(),A("span",ht,M(c.value),1))]),_:2},1032,["props","style"]))),128))]),_:2},1032,["props"])]),_:1},8,["title-class","title","columns","rows","pagination","no-data-label","grid"])])):(y(),A("div",wt,[o(_,null,{default:u(()=>[o(L,{class:"text-center"},{default:u(()=>[kt]),_:1})]),_:1})])),o(Ye,{modelValue:e.showAddColumn,"onUpdate:modelValue":t[7]||(t[7]=r=>e.showAddColumn=r),persistent:""},{default:u(()=>[o($,{onCloseAddColumn:t[6]||(t[6]=r=>e.showAddColumn=!1),onNewColumnAdded:e.newColumnAdded,onNewColumnFailed:e.newColumnFailed},null,8,["onNewColumnAdded","onNewColumnFailed"])]),_:1},8,["modelValue"])])}var Yt=P(ut,[["render",Vt]]);const St=W({name:"Projects",components:{MatrixTab:Yt},setup(){return te(),{tab:C(0)}}}),Tt={class:"q-px-sm"};function Mt(e,t,f,m,v,i){const s=X("matrix-tab");return y(),A("div",Tt,[o(Te,{class:"bg-info text-white shadow-2 rounded-borders"},{default:u(()=>[o(Ae,{modelValue:e.tab,"onUpdate:modelValue":t[0]||(t[0]=$=>e.tab=$),"bg-color":"none","indicator-color":"accent",align:"justify",dense:""},{default:u(()=>[o(Ee,{name:0,label:"Matrix"})]),_:1},8,["modelValue"])]),_:1}),o(qe,{modelValue:e.tab,"onUpdate:modelValue":t[1]||(t[1]=$=>e.tab=$),animated:""},{default:u(()=>[o(De,{class:"q-px-xs",name:0},{default:u(()=>[o(s)]),_:1})]),_:1},8,["modelValue"])])}var At=P(St,[["render",Mt]]);const Et={name:"Compliance",components:{Tabs:At},setup(){return{}}};function Dt(e,t,f,m,v,i){const s=X("tabs");return y(),Y(Me,{style:{"max-width":"100vw"}},{default:u(()=>[o(s)]),_:1})}var Lt=P(Et,[["render",Dt]]);export{Lt as default};
