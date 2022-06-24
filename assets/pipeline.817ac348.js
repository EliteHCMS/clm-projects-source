import{l as x,M as P,aJ as h,O as b,N as _,c as p,_ as $,aL as f,p as v,t as Y,v as t,d as s,U as m,ac as w,a1 as i,y as S,$ as g,aI as N,Z as C,aV as M,aW as I,a3 as A,S as Q,a4 as T}from"./index.8c763f12.js";import{Q as j}from"./QTable.875451c8.js";const B=[{name:1,label:"Name",align:"left",field:e=>e.map.name,format:e=>`${e}`,sortable:!0},{name:7,label:"Status",align:"left",field:e=>e.map.status,format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Offer Date",align:"left",field:e=>e.map.offerDate,format:e=>`${f.formatDate(e,"MM/DD/YYYY")}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.fullJob,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e.map.jobNumber,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e.map.start,format:e=>`${e?f.formatDate(e,"MM/DD/YYYY"):"TBD"}`,sortable:!0}],k=[{name:1,label:"Name",align:"left",field:e=>e.map.name,format:e=>`${e}`,sortable:!0},{name:7,label:"Status",align:"left",field:e=>e.map.status,format:e=>`${e}`,sortable:!0,sortOrder:"ad"},{name:2,label:"Offer Date",align:"left",field:e=>e.map.offerDate,format:e=>`${f.formatDate(e,"MM/DD/YYYY")}`,sortable:!0},{name:4,label:"Classification",align:"left",field:e=>e.map.fullJob,format:e=>`${!e||e===""?"Not Assigned":e}`,sortable:!0},{name:5,label:"Job #",align:"left",field:e=>e.map.jobNumber,format:e=>`${e===""||!e?"Not Assigned":e}`,sortable:!0},{name:6,label:"Arrival Date",align:"left",field:e=>e.map.start,format:e=>`${e?f.formatDate(e,"MM/DD/YYYY"):"TBD"}`,sortable:!0}],J=x({name:"Pipeline Table",components:{},setup(){const e=P(),o=h(),l=b(),{pipelineForProject:c}=_(o),a=c,{active:u}=_(b()),r=p(()=>a.value.filter(n=>n.map.status==="In Process")),y=p(()=>a.value.filter(n=>n.map.status==="Deployed")),D=p(()=>a.value.filter(n=>n.status==="Arrived")),q=p(()=>e.screen.lt.md?100:a.value.length>=25?Math.round(a.value.length/5):5);return{columns:B,mobileColumns:k,rows:a,initialPagination:{rowsPerPage:q},separator:"vertical",projectStore:l,pipelineForProject:c,inProcess:r,deployed:y,arrived:D,active:u}}}),d=e=>(M("data-v-285300eb"),e=e(),I(),e),O={class:"q-px-sm"},V={class:"row"},z={class:"col-12 col-md-10 q-px-xs"},F={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"},R=d(()=>t("div",{class:"text-body1 text-primary"},"Summary",-1)),E={class:"text-body2"},H=d(()=>t("span",{class:"q-mr-md"},"In Process:",-1)),L={class:"text-body2"},U=d(()=>t("span",{class:"q-mr-md"},"Deployed:",-1)),W={class:"text-body2"},Z=d(()=>t("span",{class:"q-mr-md"},"Arrived:",-1)),G={class:"text-body2"},K=d(()=>t("span",{class:"q-mr-md"},"Total:",-1));function X(e,o,l,c,a,u){return v(),Y("div",O,[t("div",V,[t("div",z,[s(j,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.lt.sm?"Pipeline":`Staffing Pipeline for ${e.active[20]}`,columns:e.$q.screen.lt.md?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There is no one in the pipeline for ${e.active[20]}`,grid:e.$q.screen.lt.sm},{"no-data":m(({message:r})=>[t("div",F,[s(w,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),t("span",null,i(r),1)])]),_:1},8,["title-class","title","columns","rows","pagination","no-data-label","grid"])]),t("div",{class:S(e.$q.screen.lt.md?"col q-px-xs q-mt-sm":"col q-px-xs")},[s(C,null,{default:m(()=>[s(g,{class:"q-pb-xs"},{default:m(()=>[R]),_:1}),s(g,{class:"text-right q-pt-xs"},{default:m(()=>[t("div",E,[H,t("span",null,i(e.inProcess.length),1)]),t("div",L,[U,t("span",null,i(e.deployed.length),1)]),t("div",W,[Z,t("span",null,i(e.arrived.length),1)]),s(N,{color:"primary",class:"q-my-sm"}),t("div",G,[K,t("span",null,i(e.pipelineForProject.length),1)])]),_:1})]),_:1})],2)])])}var ee=$(J,[["render",X],["__scopeId","data-v-285300eb"]]);const te={name:"Pipeline",components:{pipelineTable:ee},setup(){const{getInProcesses:e,getDispatches:o,getDeployments:l}=h();return e(),o(),l(),{}}};function ae(e,o,l,c,a,u){const r=A("pipeline-table");return v(),Q(T,{style:{"max-width":"100vw"}},{default:m(()=>[s(r)]),_:1})}var le=$(te,[["render",ae]]);export{le as default};
