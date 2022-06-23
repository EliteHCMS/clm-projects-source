var mt=Object.defineProperty;var De=Object.getOwnPropertySymbols;var ft=Object.prototype.hasOwnProperty,bt=Object.prototype.propertyIsEnumerable;var xe=(e,s,c)=>s in e?mt(e,s,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[s]=c,ge=(e,s)=>{for(var c in s||(s={}))ft.call(s,c)&&xe(e,c,s[c]);if(De)for(var c of De(s))bt.call(s,c)&&xe(e,c,s[c]);return e};import{i as vt,ap as Xe,r as F,c as p,a6 as Ze,o as pt,aq as se,ar as ht,h as k,as as gt,at as qt,au as $t,P as Y,a7 as wt,g as we,W as ne,av as yt,aw as Ue,ax as We,ay as _t,w as le,ae as qe,az as Ct,a5 as Rt,a4 as kt,aA as Pt,X as re,aB as Tt,aC as St,Z as jt,aD as At,$ as Nt,aE as Vt,aF as Ft,l as ce,D as ye,E as de,aG as ee,_ as me,p as h,t as N,d as a,L as o,Q as _e,v as t,R as d,N as ie,F as D,aH as x,U as E,aI as U,an as W,aJ as ue,aK as Z,aL as Je,aM as Ye,aN as K,am as oe,M as Ve,aO as et,aP as tt,aQ as Bt,S as $e,aR as He,aS as Mt,aT as Ke,V as Et}from"./index.2b12213f.js";import{a as O,Q as te}from"./QTable.4a686818.js";let Lt=0;const Qt=["click","keydown"],It={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${Lt++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function Ot(e,s,c,m){const i=vt(Xe,()=>{console.error("QTab/QRouteTab component needs to be child of QTabs")}),{proxy:g}=we(),l=F(null),u=F(null),R=F(null),P=p(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),r=p(()=>i.currentModel.value===e.name),w=p(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(r.value===!0?" q-tab--active"+(i.tabProps.value.activeClass?" "+i.tabProps.value.activeClass:"")+(i.tabProps.value.activeColor?` text-${i.tabProps.value.activeColor}`:"")+(i.tabProps.value.activeBgColor?` bg-${i.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&i.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||i.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(m!==void 0&&m.linkClass.value!==""?` ${m.linkClass.value}`:"")),M=p(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(i.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),J=p(()=>e.disable===!0||i.hasFocus.value===!0?-1:e.tabindex||0);function z(q,T){if(T!==!0&&l.value!==null&&l.value.focus(),e.disable!==!0){let j;if(m!==void 0)if(m.hasRouterLink.value===!0)j=()=>{q.__qNavigate=!0,i.avoidRouteWatcher=!0;const S=m.navigateToRouterLink(q);S===!1?i.avoidRouteWatcher=!1:S.then(I=>{i.avoidRouteWatcher=!1,I===void 0&&i.updateModel({name:e.name,fromRoute:!0})})};else{c("click",q);return}else j=()=>{i.updateModel({name:e.name,fromRoute:!1})};c("click",q,j),q.defaultPrevented!==!0&&j()}}function V(q){gt(q,[13,32])?z(q,!0):qt(q)!==!0&&q.keyCode>=35&&q.keyCode<=40&&i.onKbdNavigate(q.keyCode,g.$el)===!0&&$t(q),c("keydown",q)}function L(){const q=i.tabProps.value.narrowIndicator,T=[],j=k("div",{ref:R,class:["q-tab__indicator",i.tabProps.value.indicatorClass]});e.icon!==void 0&&T.push(k(Y,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&T.push(k("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&T.push(e.alertIcon!==void 0?k(Y,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):k("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),q===!0&&T.push(j);const S=[k("div",{class:"q-focus-helper",tabindex:-1,ref:l}),k("div",{class:M.value},wt(s.default,T))];return q===!1&&S.push(j),S}const Q={name:p(()=>e.name),rootRef:u,tabIndicatorRef:R,routerProps:m};Ze(()=>{i.unregisterTab(Q),i.recalculateScroll()}),pt(()=>{i.registerTab(Q),i.recalculateScroll()});function G(q,T){const j=ge({ref:u,class:w.value,tabindex:J.value,role:"tab","aria-selected":r.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:z,onKeydown:V},T);return se(k(q,j,L()),[[ht,P.value]])}return{renderTab:G,$tabs:i}}var Ae=ne({name:"QTab",props:It,emits:Qt,setup(e,{slots:s,emit:c}){const{renderTab:m}=Ot(e,s,c);return()=>m("div")}});function zt(e,s,c){const m=c===!0?["left","right"]:["top","bottom"];return`absolute-${s===!0?m[0]:m[1]}${e?` text-${e}`:""}`}const Dt=["left","center","right","justify"],Ge=()=>{};var xt=ne({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>Dt.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:s,emit:c}){const m=we(),{proxy:{$q:i}}=m,{registerTick:g}=yt(),{registerTimeout:l,removeTimeout:u}=Ue(),{registerTimeout:R}=Ue(),P=F(null),r=F(null),w=F(e.modelValue),M=F(!1),J=F(!0),z=F(!1),V=F(!1),L=p(()=>i.platform.is.desktop===!0||e.mobileArrows===!0),Q=[],G=F(!1);let q=!1,T,j,S,I=L.value===!0?Be:We;const Ce=p(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:zt(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),ae=p(()=>`q-tabs__content--align-${M.value===!0?"left":V.value===!0?"justify":e.align}`),at=p(()=>`q-tabs row no-wrap items-center q-tabs--${M.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${L.value===!0&&e.outsideArrows===!0?"outside":"inside"}`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),lt=p(()=>"q-tabs__content row no-wrap items-center self-stretch hide-scrollbar relative-position "+ae.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")+(i.platform.is.mobile===!0?" scroll":"")),fe=p(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),be=p(()=>e.vertical!==!0&&i.lang.rtl===!0),Re=p(()=>_t===!1&&be.value===!0);le(be,I),le(()=>e.modelValue,n=>{ke({name:n,setCurrent:!0,skipEmit:!0})}),le(()=>e.outsideArrows,()=>{qe(ve())}),le(L,n=>{I=n===!0?Be:We,qe(ve())});function ke({name:n,setCurrent:f,skipEmit:b,fromRoute:y}){w.value!==n&&(b!==!0&&c("update:modelValue",n),(f===!0||e["onUpdate:modelValue"]===void 0)&&(ot(w.value,n),w.value=n)),y!==void 0&&(q=y)}function ve(){g(()=>{m.isDeactivated!==!0&&m.isUnmounted!==!0&&Fe({width:P.value.offsetWidth,height:P.value.offsetHeight})})}function Fe(n){if(fe.value===void 0||r.value===null)return;const f=n[fe.value.container],b=Math.min(r.value[fe.value.scroll],Array.prototype.reduce.call(r.value.children,(v,_)=>v+(_[fe.value.content]||0),0)),y=f>0&&b>f;M.value!==y&&(M.value=y),y===!0&&qe(I);const C=f<parseInt(e.breakpoint,10);V.value!==C&&(V.value=C)}function ot(n,f){const b=n!=null&&n!==""?Q.find(C=>C.name.value===n):null,y=f!=null&&f!==""?Q.find(C=>C.name.value===f):null;if(b&&y){const C=b.tabIndicatorRef.value,v=y.tabIndicatorRef.value;clearTimeout(T),C.style.transition="none",C.style.transform="none",v.style.transition="none",v.style.transform="none";const _=C.getBoundingClientRect(),$=v.getBoundingClientRect();v.style.transform=e.vertical===!0?`translate3d(0,${_.top-$.top}px,0) scale3d(1,${$.height?_.height/$.height:1},1)`:`translate3d(${_.left-$.left}px,0,0) scale3d(${$.width?_.width/$.width:1},1,1)`,qe(()=>{T=setTimeout(()=>{v.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",v.style.transform="none"},70)})}y&&M.value===!0&&pe(y.rootRef.value)}function pe(n){const{left:f,width:b,top:y,height:C}=r.value.getBoundingClientRect(),v=n.getBoundingClientRect();let _=e.vertical===!0?v.top-y:v.left-f;if(_<0){r.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor(_),I();return}_+=e.vertical===!0?v.height-C:v.width-b,_>0&&(r.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil(_),I())}function Be(){const n=r.value;if(n!==null){const f=n.getBoundingClientRect(),b=e.vertical===!0?n.scrollTop:Math.abs(n.scrollLeft);be.value===!0?(J.value=Math.ceil(b+f.width)<n.scrollWidth-1,z.value=b>0):(J.value=b>0,z.value=e.vertical===!0?Math.ceil(b+f.height)<n.scrollHeight:Math.ceil(b+f.width)<n.scrollWidth)}}function Me(n){X(),Qe(n),j=setInterval(()=>{Qe(n)===!0&&X()},5)}function Ee(){Me(Re.value===!0?Number.MAX_SAFE_INTEGER:0)}function Le(){Me(Re.value===!0?0:Number.MAX_SAFE_INTEGER)}function X(){clearInterval(j)}function st(n,f){const b=Array.prototype.filter.call(r.value.children,$=>$===f||$.matches&&$.matches(".q-tab.q-focusable")===!0),y=b.length;if(y===0)return;if(n===36)return pe(b[0]),!0;if(n===35)return pe(b[y-1]),!0;const C=n===(e.vertical===!0?38:37),v=n===(e.vertical===!0?40:39),_=C===!0?-1:v===!0?1:void 0;if(_!==void 0){const $=be.value===!0?-1:1,H=b.indexOf(f)+_*$;return H>=0&&H<y&&(pe(b[H]),b[H].focus({preventScroll:!0})),!0}}const nt=p(()=>Re.value===!0?{get:n=>Math.abs(n.scrollLeft),set:(n,f)=>{n.scrollLeft=-f}}:e.vertical===!0?{get:n=>n.scrollTop,set:(n,f)=>{n.scrollTop=f}}:{get:n=>n.scrollLeft,set:(n,f)=>{n.scrollLeft=f}});function Qe(n){const f=r.value,{get:b,set:y}=nt.value;let C=!1,v=b(f);const _=n<v?-1:1;return v+=_*5,v<0?(C=!0,v=0):(_===-1&&v<=n||_===1&&v>=n)&&(C=!0,v=n),y(f,v),I(),C}function Pe(){return Q.filter(n=>n.routerProps!==void 0&&n.routerProps.hasRouterLink.value===!0)}function rt(){let n=null,f=q;const b={matchedLen:0,hrefLen:0,exact:!1,found:!1},{hash:y}=m.proxy.$route,C=w.value;let v=f===!0?Ge:$=>{C===$.name.value&&(f=!0,v=Ge)};const _=Pe();for(const $ of _){const H=$.routerProps.exact.value===!0;if($.routerProps[H===!0?"linkIsExactActive":"linkIsActive"].value!==!0||b.exact===!0&&H!==!0){v($);continue}const Te=$.routerProps.linkRoute.value,Se=Te.hash;if(H===!0){if(y===Se){n=$.name.value;break}else if(y!==""&&Se!==""){v($);continue}}const je=Te.matched.length,ze=Te.href.length-Se.length;if(je===b.matchedLen?ze>b.hrefLen:je>b.matchedLen){n=$.name.value,Object.assign(b,{matchedLen:je,hrefLen:ze,exact:H});continue}v($)}(f===!0||n!==null)&&ke({name:n,setCurrent:!0,fromRoute:!0})}function it(n){if(u(),G.value!==!0&&P.value!==null&&n.target&&typeof n.target.closest=="function"){const f=n.target.closest(".q-tab");f&&P.value.contains(f)===!0&&(G.value=!0)}}function ut(){l(()=>{G.value=!1},30)}function he(){Ie.avoidRouteWatcher!==!0&&R(rt)}function ct(n){Q.push(n),Pe().length>0&&(S===void 0&&(S=le(()=>m.proxy.$route,he)),he())}function dt(n){Q.splice(Q.indexOf(n),1),S!==void 0&&(Pe().length===0&&(S(),S=void 0),he())}const Ie={currentModel:w,tabProps:Ce,hasFocus:G,registerTab:ct,unregisterTab:dt,verifyRouteModel:he,updateModel:ke,recalculateScroll:ve,onKbdNavigate:st,avoidRouteWatcher:!1};Ct(Xe,Ie),Ze(()=>{clearTimeout(T),S!==void 0&&S()});let Oe=!1;return Rt(()=>{Oe=!0}),kt(()=>{Oe===!0&&ve()}),()=>{const n=[k(Pt,{onResize:Fe}),k("div",{ref:r,class:lt.value,onScroll:I},re(s.default))];return L.value===!0&&n.push(k(Y,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(J.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||i.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedown:Ee,onTouchstartPassive:Ee,onMouseup:X,onMouseleave:X,onTouchend:X}),k(Y,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(z.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||i.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedown:Le,onTouchstartPassive:Le,onMouseup:X,onMouseleave:X,onTouchend:X})),k("div",{ref:P,class:at.value,role:"tablist",onFocusin:it,onFocusout:ut},n)}}}),Ne=ne({name:"QTabPanel",props:Tt,setup(e,{slots:s}){return()=>k("div",{class:"q-tab-panel"},re(s.default))}}),Ut=ne({name:"QTabPanels",props:ge(ge({},St),jt),emits:At,setup(e,{slots:s}){const c=we(),m=Nt(e,c.proxy.$q),{updatePanelsList:i,getPanelContent:g,panelDirectives:l}=Vt(),u=p(()=>"q-tab-panels q-panel-parent"+(m.value===!0?" q-tab-panels--dark q-dark":""));return()=>(i(s),Ft("div",{class:u.value},g(),"pan",e.swipeable,()=>l.value))}}),B=ne({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:s}){const c=p(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>k("tr",{class:c.value},re(s.default))}}),A=ne({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:s}){const c=we(),m=p(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return k("td",{class:m.value},re(s.default));const i=c.vnode.key,g=(e.props.colsMap!==void 0?e.props.colsMap[i]:null)||e.props.col;if(g===void 0)return;const{row:l}=e.props;return k("td",{class:m.value+g.__tdClass(l),style:g.__tdStyle(l)},re(s.default))}}});const Wt=[{name:5,label:"Created",align:"left",field:e=>e.map.duration,format:e=>`${e}`,sortable:!0},{name:2,label:"ID",align:"left",field:e=>e[3],format:e=>`${e}`,sortable:!0,required:!0},{name:3,label:"Office",align:"left",field:e=>e[103],format:e=>`${e}`,sortable:!0},{name:4,label:"Job #",align:"left",field:e=>e[27],format:e=>`${e}`,sortable:!0,required:!0},{name:6,label:"# Requested",align:"right",field:e=>e.map.need,format:e=>`${e}`},{name:7,label:"Offers",align:"right",field:e=>e.map.accepted.length,format:e=>`${e}`,sortable:!0,required:!0},{name:8,label:"Deployed",align:"right",field:e=>e[254],format:e=>`${e}`,sortable:!0,required:!0},{name:9,label:"Balance",align:"right",field:e=>e.map.balance,format:e=>`${e}`,sortable:!0,required:!0}],Jt=[{name:9,label:"Balance",align:"right",field:e=>e.map.balance,format:e=>`${e}`,sortable:!0,required:!0},{name:4,label:"Job #",align:"left",field:e=>e[27],format:e=>`${e}`,sortable:!0,required:!0}],Ht=[{name:3,label:"Classification",align:"left",field:e=>e.title,format:e=>`${e}`,sortable:!0,required:!0},{name:4,label:"Status",align:"left",field:e=>e[17],format:e=>`${e}`,sortable:!0,required:!0},{name:5,label:"Rate",align:"right",field:e=>e[23],format:e=>`$ ${e.toFixed(2)}`,sortable:!0},{name:6,label:"#Requested",align:"right",field:e=>e[18],format:e=>`${e}`},{name:7,label:"Offers",align:"right",field:e=>e.accepted.length,format:e=>`${e}`},{name:9,label:"Balance",align:"right",field:e=>e.balance,format:e=>`${e}`,sortable:!0,required:!0}],Kt=[{name:9,label:"Balance",align:"right",field:e=>e.balance,format:e=>`${e}`,sortable:!0,required:!0},{name:3,label:"Classification",align:"left",field:e=>e.title,format:e=>`${e}`,sortable:!0,required:!0}],Gt=ce({name:"Open Table",components:{},setup(){const e=ye(),{activeProject:s,openRequestsForProject:c,openRequestsForProjectSummary:m}=de(ee()),i=c,g=p(()=>e.screen.lt.md?100:5);return{columns:Wt,rows:i,initialPagination:{rowsPerPage:g},separator:"vertical",secondColumns:Ht,mobileColumns:Jt,secMobileColumns:Kt,activeProject:s,openRequestsForProjectSummary:m}}}),Xt={class:"q-px-none"},Zt={class:"row text-caption"},Yt={class:"col-12 col-md-2"},ea=t("span",{class:"text-accent"},"Total Requests:",-1),ta={class:"text-white q-ml-sm"},aa={class:"col-12 col-md-2"},la=t("span",{class:"text-accent"},"Classifications:",-1),oa={class:"text-white q-ml-sm"},sa={class:"col-12 col-md-2"},na=t("span",{class:"text-accent"},"Total Need:",-1),ra={class:"text-white q-ml-sm"},ia={class:"col-12 col-md-2"},ua=t("span",{class:"text-accent"},"Balance:",-1),ca={class:"text-white q-ml-sm"},da={class:"col-12 col-md-2"},ma=t("span",{class:"text-accent"},"Avg. Rate:",-1),fa={class:"text-white q-ml-sm"},ba={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function va(e,s,c,m,i,g){return h(),N("div",Xt,[a(ie,{class:"q-mb-md bg-dark"},{default:o(()=>[a(_e,{class:"q-pa-sm"},{default:o(()=>[t("div",Zt,[t("div",Yt,[t("div",null,[ea,t("span",ta,d(e.openRequestsForProjectSummary.requestCount),1)])]),t("div",aa,[t("div",null,[la,t("span",oa,d(e.openRequestsForProjectSummary.classCount),1)])]),t("div",sa,[t("div",null,[na,t("span",ra,d(e.openRequestsForProjectSummary.need),1)])]),t("div",ia,[t("div",null,[ua,t("span",ca,d(e.openRequestsForProjectSummary.balance),1)])]),t("div",da,[t("div",null,[ma,t("span",fa,"$ "+d(e.openRequestsForProjectSummary.avgRate),1)])])])]),_:1})]),_:1}),a(te,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.gt.md?`Open Requests for ${e.activeProject[20]}`:"Open Requests",columns:e.$q.screen.lt.sm?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There are no open requests for ${e.activeProject[20]}`,dense:e.$q.screen.lt.md},{header:o(l=>[a(B,{class:"bg-dark text-white",props:l},{default:o(()=>[a(O,{"auto-width":""}),(h(!0),N(D,null,x(l.cols,u=>(h(),E(O,{key:u.name,props:l},{default:o(()=>[U(d(u.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":o(({message:l})=>[t("div",ba,[a(Y,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),t("span",null,d(l),1)])]),body:o(l=>[a(B,{props:l},{default:o(()=>[a(A,{"auto-width":""},{default:o(()=>[a(W,{size:e.$q.screen.gt.sm?"sm":"xs",color:"primary",round:"",dense:"",onClick:u=>l.expand=!l.expand,icon:l.expand?"remove":"add"},null,8,["size","onClick","icon"])]),_:2},1024),(h(!0),N(D,null,x(l.cols,u=>(h(),E(A,{key:u.name,props:l},{default:o(()=>[U(d(u.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"]),se(a(B,{props:l},{default:o(()=>[a(A,{colspan:"100%"},{default:o(()=>[a(te,{dense:"","hide-pagination":!0,columns:e.$q.screen.lt.sm?e.secMobileColumns:e.secondColumns,rows:l.row.classes,"row-key":"3","table-header-class":"bg-secondary"},null,8,["columns","rows"])]),_:2},1024)]),_:2},1032,["props"]),[[ue,l.expand]])]),_:1},8,["title-class","title","columns","rows","pagination","no-data-label","dense"])])}var pa=me(Gt,[["render",va]]);const ha=[{name:1,label:"Created",align:"left",field:e=>e.map.created,format:e=>`${e}`,sortable:!0},{name:4,label:"Job #",align:"left",field:e=>e[27],format:e=>`${e}`,sortable:!0,required:!0},{name:5,label:"Time Open",align:"right",field:e=>e.map.duration,format:e=>`${e}`,sortable:!0},{name:6,label:"#Requested",align:"right",field:e=>e.map.need,format:e=>`${e}`},{name:7,label:"All Offers",align:"right",field:e=>e.map.offers.length,format:e=>`${e}`,sortable:!0,required:!0},{name:8,label:"Accepted",align:"right",field:e=>e.map.accepted.length,format:e=>`${e}`,sortable:!0,required:!0},{name:9,label:"Rejected",align:"right",field:e=>e.map.rejected.length,format:e=>`${e}`,sortable:!0,required:!0},{name:9,label:"Rescinded",align:"right",field:e=>e.map.rescinded.length,format:e=>`${e}`,sortable:!0,required:!0}],ga=[{name:1,label:"Created",align:"left",field:e=>e.map.created,format:e=>`${e}`,sortable:!0},{name:4,label:"Job #",align:"left",field:e=>e[27],format:e=>`${e}`,sortable:!0,required:!0},{name:5,label:"Time Open",align:"right",field:e=>e.map.duration,format:e=>`${e}`,sortable:!0},{name:6,label:"#Requested",align:"right",field:e=>e.map.need,format:e=>`${e}`},{name:7,label:"All Offers",align:"right",field:e=>e.map.offers.length,format:e=>`${e}`,sortable:!0,required:!0},{name:8,label:"Accepted",align:"right",field:e=>e.map.accepted.length,format:e=>`${e}`,sortable:!0,required:!0},{name:9,label:"Rejected",align:"right",field:e=>e.map.rejected.length,format:e=>`${e}`,sortable:!0,required:!0},{name:9,label:"Rescinded",align:"right",field:e=>e.map.rescinded.length,format:e=>`${e}`,sortable:!0,required:!0}],qa=[{name:1,label:"Classification",align:"left",field:e=>e.title,format:e=>`${e}`,sortable:!0,required:!0},{name:2,label:"Time Open",align:"right",field:e=>e.duration,format:e=>`${e}`,sortable:!0}],$a=[{name:1,label:"Job",align:"left",field:e=>e.title,format:e=>`${e}`,sortable:!0,required:!0},{name:2,label:"Time Open",align:"right",field:e=>e.duration,format:e=>`${e}`,sortable:!0}],wa=ce({name:"Closed Table",components:{},setup(){const e=ye(),{activeProject:s,closedRequestsForProject:c,closedRequestsForProjectSummary:m}=de(ee()),i=c,g=p(()=>e.screen.lt.md?100:5);return{columns:ha,rows:i,initialPagination:{rowsPerPage:g},separator:"vertical",secondColumns:qa,mobileColumns:ga,secMobileColumns:$a,activeProject:s,closedRequestsForProjectSummary:m}}}),ya={class:"q-px-none"},_a={class:"row text-caption"},Ca={class:"col-12 col-md-2"},Ra=t("span",{class:"text-accent"},"Requests:",-1),ka={class:"text-white q-ml-sm"},Pa={class:"col-12 col-md-2"},Ta=t("span",{class:"text-accent"},"Classifications:",-1),Sa={class:"text-white q-ml-sm"},ja={class:"col-12 col-md-2"},Aa=t("span",{class:"text-accent"},"Need:",-1),Na={class:"text-white q-ml-sm"},Va={class:"col-12 col-md-2"},Fa=t("span",{class:"text-accent"},"Offers:",-1),Ba={class:"text-white q-ml-sm"},Ma={class:"col-12 col-md-2"},Ea=t("span",{class:"text-accent"},"Avg. Rate:",-1),La={class:"text-white q-ml-sm"},Qa={class:"col-12 col-md-2"},Ia=t("span",{class:"text-accent"},"Avg. Time Open:",-1),Oa={class:"text-white q-ml-sm"},za={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function Da(e,s,c,m,i,g){return h(),N("div",ya,[a(ie,{class:"q-mb-md bg-dark"},{default:o(()=>[a(_e,{class:"q-pa-sm"},{default:o(()=>[t("div",_a,[t("div",Ca,[t("div",null,[Ra,t("span",ka,d(e.closedRequestsForProjectSummary.requestCount),1)])]),t("div",Pa,[t("div",null,[Ta,t("span",Sa,d(e.closedRequestsForProjectSummary.classCount),1)])]),t("div",ja,[t("div",null,[Aa,t("span",Na,d(e.closedRequestsForProjectSummary.need),1)])]),t("div",Va,[t("div",null,[Fa,t("span",Ba,d(e.closedRequestsForProjectSummary.offers),1)])]),t("div",Ma,[t("div",null,[Ea,t("span",La,"$ "+d(e.closedRequestsForProjectSummary.avgRate),1)])]),t("div",Qa,[t("div",null,[Ia,t("span",Oa,d(e.closedRequestsForProjectSummary.avgDuration),1)])])])]),_:1})]),_:1}),a(te,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.gt.md?`Completed Requests for ${e.activeProject[20]}`:"Completed Requests",columns:e.$q.screen.lt.sm?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There are no completed requests for ${e.activeProject[20]}`,dense:e.$q.screen.lt.sm},{header:o(l=>[a(B,{class:"bg-dark text-white",props:l},{default:o(()=>[a(O,{"auto-width":""}),(h(!0),N(D,null,x(l.cols,u=>(h(),E(O,{key:u.name,props:l},{default:o(()=>[U(d(u.label),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"])]),"no-data":o(({message:l})=>[t("div",za,[a(Y,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),t("span",null,d(l),1)])]),body:o(l=>[a(B,{props:l},{default:o(()=>[a(A,{"auto-width":""},{default:o(()=>[a(W,{size:"sm",color:"primary",round:"",dense:"",onClick:u=>l.expand=!l.expand,icon:l.expand?"remove":"add"},null,8,["onClick","icon"])]),_:2},1024),(h(!0),N(D,null,x(l.cols,u=>(h(),E(A,{key:u.name,props:l},{default:o(()=>[U(d(u.value),1)]),_:2},1032,["props"]))),128))]),_:2},1032,["props"]),se(a(B,{props:l},{default:o(()=>[a(A,{colspan:"100%"},{default:o(()=>[t("div",null,[a(te,{dense:"",title:"Classifications","hide-pagination":!0,columns:e.$q.screen.lt.sm?e.secMobileColumns:e.secondColumns,rows:l.row.classes,"row-key":"3","table-header-class":"bg-secondary"},null,8,["columns","rows"])])]),_:2},1024)]),_:2},1032,["props"]),[[ue,l.expand]])]),_:1},8,["title-class","title","columns","rows","pagination","no-data-label","dense"])])}var xa=me(wa,[["render",Da]]);const Ua=[{name:5,label:"Created",align:"left",field:e=>e.map.duration,format:e=>`${e}`,sortable:!0},{name:2,label:"ID",align:"left",field:e=>e[3],format:e=>`${e}`,sortable:!0,required:!0},{name:3,label:"Office",align:"left",field:e=>e[103],format:e=>`${e}`,sortable:!0},{name:4,label:"Job #",align:"left",field:e=>e[27],format:e=>`${e}`,sortable:!0,required:!0},{name:6,label:"# Requested",align:"right",field:e=>e.map.need,format:e=>`${e}`}],Wa=[{name:6,label:"# Requested",align:"right",field:e=>e.map.need,format:e=>`${e}`},{name:4,label:"Job #",align:"left",field:e=>e[27],format:e=>`${e}`,sortable:!0,required:!0}],Ja=[{name:3,label:"Classification",align:"left",field:e=>e.title,format:e=>`${e}`,sortable:!0,required:!0},{name:5,label:"Rate",align:"right",field:e=>e[23],format:e=>`$ ${e.toFixed(2)}`,sortable:!0},{name:6,label:"Quantity",align:"right",field:e=>e[18],format:e=>`${e}`}],Ha=[{name:3,label:"Job",align:"left",field:e=>e.title,format:e=>`${e}`,sortable:!0,required:!0},{name:5,label:"Rate",align:"right",field:e=>e[23],format:e=>`$ ${e.toFixed(2)}`,sortable:!0},{name:6,label:"Qty",align:"right",field:e=>e[18],format:e=>`${e}`}],Ka=ce({name:"Open Table",components:{},setup(){const e=ye(),{submitCancelRequest:s,submitCancelClassification:c}=ee(),{activeProject:m,pendingRequestsForProject:i,pendingRequestsForProjectSummary:g}=de(ee()),l=i,u=p(()=>e.screen.lt.md?100:5);function R(r){e.dialog({title:"Confirm",message:"Are you sure you want to cancel this request?",cancel:!0,persistent:!0}).onOk(async()=>{try{await s({request:r}),e.notify({type:"positive",message:"Request Canceled!",position:"top-right"})}catch(w){e.notify({type:"negative",message:w,position:"top-right"})}})}function P(r){e.dialog({title:"Confirm",message:"Are you sure you want to cancel this classification?",cancel:!0,persistent:!0}).onOk(async()=>{try{await c({item:r}),e.notify({type:"positive",message:"Classification Removed!",position:"top-right"})}catch(w){e.notify({type:"negative",message:w,position:"top-right"})}})}return{columns:Ua,rows:l,initialPagination:{rowsPerPage:u},separator:"vertical",secondColumns:Ja,mobileColumns:Wa,secMobileColumns:Ha,activeProject:m,pendingRequestsForProjectSummary:g,cancelRequest:R,cancelClassification:P}}}),Ga={class:"q-px-none"},Xa={class:"row text-caption"},Za={class:"col-12 col-md-2"},Ya=t("span",{class:"text-accent"},"Total Requests:",-1),el={class:"text-white q-ml-sm"},tl={class:"col-12 col-md-2"},al=t("span",{class:"text-accent"},"Classifications:",-1),ll={class:"text-white q-ml-sm"},ol={class:"col-12 col-md-2"},sl=t("span",{class:"text-accent"},"Total Need:",-1),nl={class:"text-white q-ml-sm"},rl={class:"col-12 col-md-2"},il=t("span",{class:"text-accent"},"Balance:",-1),ul={class:"text-white q-ml-sm"},cl={class:"col-12 col-md-2"},dl=t("span",{class:"text-accent"},"Avg. Rate:",-1),ml={class:"text-white q-ml-sm"},fl={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function bl(e,s,c,m,i,g){return h(),N("div",Ga,[a(ie,{class:"q-mb-md bg-dark"},{default:o(()=>[a(_e,{class:"q-pa-sm"},{default:o(()=>[t("div",Xa,[t("div",Za,[t("div",null,[Ya,t("span",el,d(e.pendingRequestsForProjectSummary.requestCount),1)])]),t("div",tl,[t("div",null,[al,t("span",ll,d(e.pendingRequestsForProjectSummary.classCount),1)])]),t("div",ol,[t("div",null,[sl,t("span",nl,d(e.pendingRequestsForProjectSummary.need),1)])]),t("div",rl,[t("div",null,[il,t("span",ul,d(e.pendingRequestsForProjectSummary.balance),1)])]),t("div",cl,[t("div",null,[dl,t("span",ml,"$ "+d(e.pendingRequestsForProjectSummary.avgRate),1)])])])]),_:1})]),_:1}),a(te,{"title-class":e.$q.screen.gt.sm?"text-primary text-h6":"text-primary text-body1",title:e.$q.screen.gt.md?`Pending Requests for ${e.activeProject[20]}`:"Pending Requests",columns:e.$q.screen.lt.sm?e.mobileColumns:e.columns,rows:e.rows,"row-key":"3",class:"q-pa-sm",pagination:e.initialPagination,separator:"vertical","table-header-class":"bg-dark text-white","no-data-label":`There are no pending requests for ${e.activeProject[20]}`,dense:e.$q.screen.lt.sm},{header:o(l=>[a(B,{class:"bg-dark text-white",props:l},{default:o(()=>[a(O,{"auto-width":""}),(h(!0),N(D,null,x(l.cols,u=>(h(),E(O,{key:u.name,props:l},{default:o(()=>[U(d(u.label),1)]),_:2},1032,["props"]))),128)),a(O,{"auto-width":""})]),_:2},1032,["props"])]),"no-data":o(({message:l})=>[t("div",fl,[a(Y,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),t("span",null,d(l),1)])]),body:o(l=>[a(B,{props:l},{default:o(()=>[a(A,{"auto-width":""},{default:o(()=>[a(W,{size:e.$q.screen.gt.sm?"sm":"xs",color:"primary",round:"",dense:"",onClick:u=>l.expand=!l.expand,icon:l.expand?"remove":"add"},null,8,["size","onClick","icon"])]),_:2},1024),(h(!0),N(D,null,x(l.cols,u=>(h(),E(A,{key:u.name,props:l},{default:o(()=>[U(d(u.value),1)]),_:2},1032,["props"]))),128)),a(A,{"auto-width":""},{default:o(()=>[a(W,{size:"sm",color:"primary",onClick:u=>e.cancelRequest(l.row),label:"Cancel"},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["props"]),se(a(B,{props:l},{default:o(()=>[a(A,{colspan:"100%"},{default:o(()=>[a(te,{dense:"","hide-pagination":!0,columns:e.$q.screen.lt.sm?e.secMobileColumns:e.secondColumns,rows:l.row.classes,"row-key":"3","table-header-class":"bg-secondary"},{header:o(u=>[a(B,{class:"bg-dark text-white",props:u},{default:o(()=>[(h(!0),N(D,null,x(u.cols,R=>(h(),E(O,{key:R.name,props:u},{default:o(()=>[U(d(R.label),1)]),_:2},1032,["props"]))),128)),a(O,{"auto-width":""})]),_:2},1032,["props"])]),body:o(u=>[a(B,{props:u},{default:o(()=>[(h(!0),N(D,null,x(u.cols,R=>(h(),E(A,{key:R.name,props:u},{default:o(()=>[U(d(R.value),1)]),_:2},1032,["props"]))),128)),a(A,{"auto-width":""},{default:o(()=>[a(W,{size:"sm",color:"primary",onClick:R=>e.cancelClassification(u.row),label:"remove"},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["props"])]),_:2},1032,["columns","rows"])]),_:2},1024)]),_:2},1032,["props"]),[[ue,l.expand]])]),_:1},8,["title-class","title","columns","rows","pagination","no-data-label","dense"])])}var vl=me(Ka,[["render",bl]]);const pl=ce({setup(){const{requestOptions:e,addedClassifications:s}=de(ee()),{pushClassification:c}=ee(),m=p(()=>e.value.crafts),i=p(()=>r.value&&r.value!==void 0?r.value.classifications:[]),g=Z({craft:Z().required("Craft is required.").nullable(),job:Z().required("Classification is required.").nullable(),rate:Je().required("Rate is required.").nullable(),qty:Je().required("Craft is required.").nullable()}),{meta:l,errors:u,handleSubmit:R,handleReset:P}=Ye({validationSchema:g}),{value:r}=K("craft"),{value:w}=K("job"),{value:M}=K("rate"),{value:J}=K("qty"),z=R(async V=>{console.log(V);const L={id:s.value.length+1,craft:V.craft,job:V.job,rate:V.rate,qty:V.qty};console.log(L),c(L),P()});return{crafts:m,jobs:i,craft:r,job:w,rate:M,qty:J,formMeta:l,formErrors:u,submit:z}}}),hl=t("div",{class:"text-dark text-body1"},"Add Classifications",-1),gl={class:"row items-center"},ql={class:"col-12 col-md-3 q-px-sm"},$l={class:"text-caption"},wl={class:"col-12 col-md-4 q-px-sm"},yl={class:"text-caption"},_l={class:"col-12 col-md-2 q-px-sm"},Cl={class:"text-caption"},Rl={class:"col-12 col-md-2 q-px-sm"},kl={class:"text-caption"},Pl={class:"col-12 col-md-1 q-px-sm"};function Tl(e,s,c,m,i,g){return h(),N("div",null,[hl,a(tt,{onSubmit:et(e.submit,["prevent"])},{default:o(()=>[t("div",gl,[t("div",ql,[a(oe,{dense:"",label:"Select a Craft","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.craft,"onUpdate:modelValue":s[0]||(s[0]=l=>e.craft=l),options:e.crafts,"option-label":"10","display-value":`${e.craft?e.craft[10]:""}`,"bottom-slots":"",error:!!e.formErrors.craft},{error:o(()=>[t("div",$l,d(e.formErrors.craft),1)]),_:1},8,["modelValue","options","display-value","error"])]),t("div",wl,[a(oe,{dense:"",label:"Select a Classification","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.job,"onUpdate:modelValue":s[1]||(s[1]=l=>e.job=l),options:e.jobs,"option-label":"18","display-value":`${e.job?e.job[18]:""}`,"bottom-slots":"",error:!!e.formErrors.job},{error:o(()=>[t("div",yl,d(e.formErrors.job),1)]),_:1},8,["modelValue","options","display-value","error"])]),t("div",_l,[a(Ve,{dense:"",type:"number",label:"Rate",modelValue:e.rate,"onUpdate:modelValue":s[2]||(s[2]=l=>e.rate=l),"bottom-slots":"",error:!!e.formErrors.rate},{error:o(()=>[t("div",Cl,d(e.formErrors.rate),1)]),_:1},8,["modelValue","error"])]),t("div",Rl,[a(Ve,{dense:"",type:"number",label:"Qty",modelValue:e.qty,"onUpdate:modelValue":s[3]||(s[3]=l=>e.qty=l),"bottom-slots":"",error:!!e.formErrors.qty},{error:o(()=>[t("div",kl,d(e.formErrors.qty),1)]),_:1},8,["modelValue","error"])]),t("div",Pl,[a(W,{type:"submit",size:"sm",color:"primary",round:!!e.$q.screen.gt.sm,icon:"add",label:e.$q.screen.gt.sm?"":"Add Classification"},null,8,["round","label"])])])]),_:1},8,["onSubmit"])])}var Sl=me(pl,[["render",Tl]]);const jl=[{name:1,label:"Craft",align:"left",field:e=>e.craft[10],format:e=>`${e}`,sortable:!0},{name:2,label:"Classification",align:"left",field:e=>e.job[18],format:e=>`${e}`,sortable:!0,required:!0},{name:3,label:"Rate",align:"left",field:e=>e.rate,format:e=>`${e}`,sortable:!0},{name:4,label:"Qty",align:"left",field:e=>e.qty,format:e=>`${e}`,sortable:!0,required:!0}],Al=ce({name:"Requests",components:{openTable:pa,closedTable:xa,pendingTable:vl,addClassifications:Sl},setup(){const e=ye(),{requestOptions:s,getClassifications:c}=de(ee()),{storeRequest:m,resetRequest:i,spliceClassification:g}=ee(),l=F(0),u=F(!1);console.log(s.value),le(c,()=>{console.log(c.value)});const R=Z({jobNumber:Z().required("Job number is required."),contact:Z().required().nullable("Contact is required."),location:Z().required().nullable("Location is required."),perdiem:Z().nullable(),dateNeeded:Bt().required().nullable("Date needed is required.")}),{meta:P,errors:r,handleSubmit:w,handleReset:M}=Ye({validationSchema:R}),{value:J}=K("jobNumber"),{value:z}=K("contact"),{value:V}=K("location"),{value:L}=K("perdiem"),{value:Q}=K("dateNeeded"),G=w(async ae=>{console.log(ae),m({request:ae}),M(),l.value=1,u.value=!1,e.notify({type:"positive",message:"Request submitted!"})}),q=p(()=>s.value.jobNumbers),T=p(()=>s.value.perdiem.length>0?s.value.perdiem:null),j=p(()=>s.value.locations),S=p(()=>s.value.contacts);function I(){e.dialog({title:"Confirm",message:"Are you sure you want to cancel? All of your progress will be lost.",cancel:!0,persistent:!0}).onOk(()=>{i(),u.value=!1,M()})}function Ce(ae){e.dialog({title:"Confirm",message:"Are you sure you want to delete this classification?",cancel:!0,persistent:!0}).onOk(()=>{g({item:ae})})}return{tab:l,showNew:u,getClassifications:c,columns:jl,jobNumbers:q,perdiems:T,locations:j,contacts:S,submitRequest:G,jobNumber:J,contact:z,location:V,perdiem:L,dateNeeded:Q,formMeta:P,formErrors:r,removeClassification:Ce,cancelNew:I}}}),Nl={class:"q-px-md"},Vl={class:"row justify-between"},Fl={class:"col-12 col-md-5 q-pr-lg"},Bl={class:"text-caption"},Ml={class:"text-caption"},El={class:"text-caption"},Ll={class:"text-caption"},Ql={class:"text-caption"},Il={class:"col-12 col-md-7"},Ol={class:"q-mt-md"},zl={class:"full-width row flex-center text-primary q-gutter-sm q-py-md"};function Dl(e,s,c,m,i,g){const l=$e("open-table"),u=$e("pending-table"),R=$e("closed-table"),P=$e("add-classifications");return h(),E(Et,{style:{"max-width":"100vw"}},{default:o(()=>[t("div",Nl,[a(Ke,{duration:100},{default:o(()=>[se(t("div",null,[a(ie,{flat:"",class:"q-mb-sm q-mt-none q-pt-none"},{default:o(()=>[a(He,{align:"right"},{default:o(()=>[e.showNew?Mt("",!0):(h(),E(W,{key:0,dense:e.$q.screen.lt.md,color:"primary",icon:"add",label:e.$q.screen.lt.md?"Add New":"Add New Request",onClick:s[0]||(s[0]=r=>e.showNew=!0)},null,8,["dense","label"]))]),_:1})]),_:1}),a(xt,{modelValue:e.tab,"onUpdate:modelValue":s[1]||(s[1]=r=>e.tab=r),"bg-color":"none",color:"dark","active-color":"primary","indicator-color":"accent",align:"justify",dense:""},{default:o(()=>[a(Ae,{name:0,label:e.$q.screen.gt.xs?"Open Requests":"Open"},null,8,["label"]),a(Ae,{name:1,label:e.$q.screen.gt.xs?"Pending Requests":"Pending"},null,8,["label"]),a(Ae,{name:2,label:e.$q.screen.gt.xs?"Completed Requests":"Completed"},null,8,["label"])]),_:1},8,["modelValue"]),a(Ut,{modelValue:e.tab,"onUpdate:modelValue":s[2]||(s[2]=r=>e.tab=r),animated:""},{default:o(()=>[a(Ne,{name:0},{default:o(()=>[a(l)]),_:1}),a(Ne,{name:1},{default:o(()=>[a(u)]),_:1}),a(Ne,{name:2},{default:o(()=>[a(R)]),_:1})]),_:1},8,["modelValue"])],512),[[ue,!e.showNew]])]),_:1}),a(Ke,{duration:100},{default:o(()=>[se(t("div",null,[a(ie,null,{default:o(()=>[a(tt,{onSubmit:et(e.submitRequest,["prevent"])},{default:o(()=>[a(_e,null,{default:o(()=>[t("div",Vl,[t("div",Fl,[a(oe,{class:"q-mb-sm",dense:"",label:"Select Job Number","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.jobNumber,"onUpdate:modelValue":s[3]||(s[3]=r=>e.jobNumber=r),options:e.jobNumbers,"option-label":"11","display-value":`${e.jobNumber?e.jobNumber[11]:""}`,"bottom-slots":"",error:!!e.formErrors.jobNumber},{error:o(()=>[t("div",Bl,d(e.formErrors.jobNumber),1)]),_:1},8,["modelValue","options","display-value","error"]),a(oe,{class:"q-mb-sm",dense:"",label:"Select Contact","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.contact,"onUpdate:modelValue":s[4]||(s[4]=r=>e.contact=r),options:e.contacts,"option-label":"17","display-value":`${e.contact?e.contact[17]:""}`,"bottom-slots":"",error:!!e.formErrors.contact},{error:o(()=>[t("div",Ml,d(e.formErrors.contact),1)]),_:1},8,["modelValue","options","display-value","error"]),a(oe,{class:"q-mb-sm",dense:"",label:"Select Meeting Location","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.location,"onUpdate:modelValue":s[5]||(s[5]=r=>e.location=r),options:e.locations,"option-label":"6","display-value":`${e.location?e.location[6]:""}`,"bottom-slots":"",error:!!e.formErrors.location},{error:o(()=>[t("div",El,d(e.formErrors.location),1)]),_:1},8,["modelValue","options","display-value","error"]),a(oe,{class:"q-mb-sm",dense:"",label:"Per Diem","transition-show":"flip-up","transition-hide":"flip-down",modelValue:e.perdiem,"onUpdate:modelValue":s[6]||(s[6]=r=>e.perdiem=r),options:e.perdiems,"option-label":"20","display-value":`${e.perdiem?e.perdiem[20]:""}`,"bottom-slots":"",error:!!e.formErrors.perdiem},{error:o(()=>[t("div",Ll,d(e.formErrors.perdiem),1)]),_:1},8,["modelValue","options","display-value","error"]),a(Ve,{dense:"",type:"date",modelValue:e.dateNeeded,"onUpdate:modelValue":s[7]||(s[7]=r=>e.dateNeeded=r),"bottom-slots":"",error:!!e.formErrors.dateNeeded},{error:o(()=>[t("div",Ql,d(e.formErrors.dateNeeded),1)]),_:1},8,["modelValue","error"])]),t("div",Il,[a(P),t("div",Ol,[a(te,{dense:"",rows:e.getClassifications,"row-key":"id",columns:e.columns,"table-header-class":"bg-secondary","no-data-label":"At least one classification is required."},{"no-data":o(({message:r})=>[t("div",zl,[a(Y,{size:"2em",name:"fa-solid fa-person-circle-exclamation"}),t("span",null,d(r),1)])]),header:o(r=>[a(B,{class:"bg-dark text-white",props:r},{default:o(()=>[(h(!0),N(D,null,x(r.cols,w=>(h(),E(O,{key:w.name,props:r},{default:o(()=>[U(d(w.label),1)]),_:2},1032,["props"]))),128)),a(O,{"auto-width":""})]),_:2},1032,["props"])]),body:o(r=>[a(B,{props:r},{default:o(()=>[(h(!0),N(D,null,x(r.cols,w=>(h(),E(A,{key:w.name,props:r},{default:o(()=>[U(d(w.value),1)]),_:2},1032,["props"]))),128)),a(A,{"auto-width":""},{default:o(()=>[a(W,{size:"xs",round:"",color:"primary",onClick:w=>e.removeClassification(r.row),icon:"delete"},null,8,["onClick"])]),_:2},1024)]),_:2},1032,["props"])]),_:1},8,["rows","columns"])])])])]),_:1}),a(He,{align:"right"},{default:o(()=>[a(W,{color:"dark",label:"Cancel",onClick:e.cancelNew},null,8,["onClick"]),a(W,{color:"primary",label:"Submit",type:"submit"})]),_:1})]),_:1},8,["onSubmit"])]),_:1})],512),[[ue,e.showNew]])]),_:1})])]),_:1})}var Jl=me(Al,[["render",Dl]]);export{Jl as default};
