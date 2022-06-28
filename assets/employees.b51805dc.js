import{l as V,bI as M,cw as y,bK as v,bJ as h,r as b,c as g,cC as D,_,bY as Y,p as q,t as N,d as s,bb as i,bR as Q,v as r,bX as w,bS as S,bQ as P,c3 as k,a4 as I,aS as F,ag as T,bZ as j}from"./index.86392f86.js";import{Q as B}from"./QTable.5c49b4bd.js";const J=[{name:1,label:"Name",align:"left",field:e=>e.employee[24],format:e=>`${e}`,sortable:!0},{name:7,label:"Workday ID",align:"left",field:e=>e.employee[378],format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Payroll ID",align:"left",field:e=>e.employee[213],format:e=>e===""?"not available":e,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.fullJob,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e.map.jobNumber,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e.map.start,format:e=>`${e?Y.formatDate(e,"MM/DD/YYYY"):"TBD"}`,sortable:!0}],E=[{name:1,label:"Name",align:"left",field:e=>e.employee[24],format:e=>`${e}`,sortable:!0},{name:7,label:"Workday ID",align:"left",field:e=>e.employee[378],format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Payroll ID",align:"left",field:e=>e.employee[213],format:e=>e===""?"not available":e,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.fullJob,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e.map.jobNumber,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e.map.start,format:e=>`${e?Y.formatDate(e,"MM/DD/YYYY"):"TBD"}`,sortable:!0}],O=V({name:"Table",components:{},setup(){const e=M(),l=y(),m=v(),{assignmentsForProject:n}=h(l),d=n,{active:c}=h(v()),{getAssignments:a}=y(),$=b(""),u=b(null),f=b(null);a();const p=g(()=>{let t=[];return d.value.forEach(o=>{o[75].toLowerCase().includes($.value.toLowerCase())&&t.push(o)}),t=u.value?t.filter(o=>D(o[1].$d).tz("America/Chicago").format("MM/DD/YYYY")===D(u.value).tz("America/Chicago").format("MM/DD/YYYY")):t,t=f.value?t.filter(o=>o[68]===f.value):t,t}),C=g(()=>e.screen.lt.md?100:p.value.length>=25?Math.round(p.value.length/5):5),A=g(()=>[...new Map(n.value.map(t=>[t[68],t[68]])).values()]);return console.log(n.value),{columns:J,mobileColumns:E,rows:p,initialPagination:{rowsPerPage:C},separator:"vertical",projectStore:m,active:c,search:$,startDateFilter:u,craftOptions:A,craftFilter:f}}}),R={class:"q-px-sm"},z={class:"row items-center"},U={class:"col-12 col-md-4 q-px-sm"},L={class:"col-12 col-md-4 q-px-sm"},W={class:"col-12 col-md-4 q-px-sm"},H={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function K(e,l,m,n,d,c){return q(),N("div",R,[s(P,{flat:""},{default:i(()=>[s(Q,{class:"q-pt-none"},{default:i(()=>[r("div",z,[r("div",U,[s(w,{dense:e.$q.screen.lt.md,modelValue:e.search,"onUpdate:modelValue":l[0]||(l[0]=a=>e.search=a),label:"Search"},null,8,["dense","modelValue"])]),r("div",L,[s(w,{dense:e.$q.screen.lt.md,modelValue:e.startDateFilter,"onUpdate:modelValue":l[1]||(l[1]=a=>e.startDateFilter=a),label:"Arrival Date",type:"date","stack-label":""},null,8,["dense","modelValue"])]),r("div",W,[s(S,{dense:e.$q.screen.lt.md,label:"Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.craftFilter,"onUpdate:modelValue":l[2]||(l[2]=a=>e.craftFilter=a),options:e.craftOptions,"use-chips":""},null,8,["dense","modelValue","options"])])])]),_:1})]),_:1}),s(B,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.lt.sm?"Employees":`Employees for ${e.active[20]}`,columns:e.$q.screen.lt.md?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There are no employees for ${e.active[20]}`,grid:e.$q.screen.lt.sm},{"no-data":i(({message:a})=>[r("div",H,[s(k,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),r("span",null,I(a),1)])]),_:1},8,["title-class","title","columns","rows","pagination","no-data-label","grid"])])}var X=_(O,[["render",K],["__scopeId","data-v-366ac274"]]);const Z={name:"Arrivals",components:{employeesTable:X},setup(){return{}}};function x(e,l,m,n,d,c){const a=F("employees-table");return q(),T(j,{style:{"max-width":"100vw"}},{default:i(()=>[s(a)]),_:1})}var ae=_(Z,[["render",x]]);export{ae as default};
