var gt=Object.defineProperty,bt=Object.defineProperties;var mt=Object.getOwnPropertyDescriptors;var Oe=Object.getOwnPropertySymbols;var St=Object.prototype.hasOwnProperty,yt=Object.prototype.propertyIsEnumerable;var Fe=(e,l,a)=>l in e?gt(e,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[l]=a,_=(e,l)=>{for(var a in l||(l={}))St.call(l,a)&&Fe(e,a,l[a]);if(Oe)for(var a of Oe(l))yt.call(l,a)&&Fe(e,a,l[a]);return e},O=(e,l)=>bt(e,mt(l));import{W as H,h as r,X as be,Y as ht,P as je,g as te,Z as Se,$ as ye,c as u,a0 as wt,r as z,a1 as _t,w as N,a2 as qt,a3 as Le,I as Pt,o as Ct,a4 as kt,a5 as Rt,a6 as Tt,a7 as Ae,a8 as xt,a9 as Bt,aa as Ot,ab as me,ac as De,ad as Ft,ae as Ee,af as Ne,ag as Lt,ah as Dt,ai as Vt,aj as $t,ak as Q,al as ge,am as Mt,an as p,ao as jt}from"./index.2b12213f.js";var At=H({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:l,emit:a}){const g=te(),{proxy:{$q:i}}=g,b=s=>{a("click",s)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:b},be(l.default));let s,v;const c=g.vnode.key;if(c){if(s=e.props.colsMap[c],s===void 0)return}else s=e.props.col;if(s.sortable===!0){const n=s.align==="right"?"unshift":"push";v=ht(l.default,[]),v[n](r(je,{class:s.__iconClass,name:i.iconSet.table.arrowUp}))}else v=be(l.default);const y={class:s.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:s.headerStyle,onClick:n=>{s.sortable===!0&&e.props.sort(s),b(n)}};return r("th",y,v)}}});const Et=["horizontal","vertical","cell","none"];var Nt=H({name:"QMarkupTable",props:O(_({},Se),{dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>Et.includes(e)}}),setup(e,{slots:l}){const a=te(),g=ye(e,a.proxy.$q),i=u(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(g.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>r("div",{class:i.value},[r("table",{class:"q-table"},be(l.default))])}});function Qe(e,l){return r("div",e,[r("table",{class:"q-table"},l)])}const Qt={list:xt,table:Nt},zt=["list","table","__qtable"];var Ht=H({name:"QVirtualScroll",props:O(_({},wt),{type:{type:String,default:"list",validator:e=>zt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}}),setup(e,{slots:l,attrs:a}){let g;const i=z(null),b=u(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:s,localResetVirtualScroll:v,padVirtualScroll:c,onVirtualScrollEvt:y}=_t({virtualScrollLength:b,getVirtualScrollTarget:C,getVirtualScrollEl:P}),n=u(()=>{if(b.value===0)return[];const L=(D,T)=>({index:s.value.from+T,item:D});return e.itemsFn===void 0?e.items.slice(s.value.from,s.value.to).map(L):e.itemsFn(s.value.from,s.value.to-s.value.from).map(L)}),S=u(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),q=u(()=>e.scrollTarget!==void 0?{}:{tabindex:0});N(b,()=>{v()}),N(()=>e.scrollTarget,()=>{w(),h()});function P(){return i.value.$el||i.value}function C(){return g}function h(){g=qt(P(),e.scrollTarget),g.addEventListener("scroll",y,Le.passive)}function w(){g!==void 0&&(g.removeEventListener("scroll",y,Le.passive),g=void 0)}function F(){let L=c(e.type==="list"?"div":"tbody",n.value.map(l.default));return l.before!==void 0&&(L=l.before().concat(L)),Ae(l.after,L)}return Pt(()=>{v()}),Ct(()=>{h()}),kt(()=>{h()}),Rt(()=>{w()}),Tt(()=>{w()}),()=>{if(l.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?Qe({ref:i,class:"q-table__middle "+S.value},F()):r(Qt[e.type],_(O(_({},a),{ref:i,class:[a.class,S.value]}),q.value),F)}}});const Ut={xs:2,sm:4,md:6,lg:10,xl:14};function Ve(e,l,a){return{transform:l===!0?`translateX(${a.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var It=H({name:"QLinearProgress",props:O(_(_({},Se),Bt),{value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean}),setup(e,{slots:l}){const{proxy:a}=te(),g=ye(e,a.$q),i=Ot(e,Ut),b=u(()=>e.indeterminate===!0||e.query===!0),s=u(()=>e.reverse!==e.query),v=u(()=>O(_({},i.value!==null?i.value:{}),{"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=u(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),y=u(()=>Ve(e.buffer!==void 0?e.buffer:1,s.value,a.$q)),n=u(()=>`q-linear-progress__track absolute-full q-linear-progress__track--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__track--${g.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),S=u(()=>Ve(b.value===!0?1:e.value,s.value,a.$q)),q=u(()=>`q-linear-progress__model absolute-full q-linear-progress__model--with${e.instantFeedback===!0?"out":""}-transition q-linear-progress__model--${b.value===!0?"in":""}determinate`),P=u(()=>({width:`${e.value*100}%`})),C=u(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"}`);return()=>{const h=[r("div",{class:n.value,style:y.value}),r("div",{class:q.value,style:S.value})];return e.stripe===!0&&b.value===!1&&h.push(r("div",{class:C.value,style:P.value})),r("div",{class:c.value,style:v.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},Ae(l.default,h))}}});function Wt(e,l){return new Date(e)-new Date(l)}const Kt={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function Gt(e,l,a,g){const i=u(()=>{const{sortBy:v}=l.value;return v&&a.value.find(c=>c.name===v)||null}),b=u(()=>e.sortMethod!==void 0?e.sortMethod:(v,c,y)=>{const n=a.value.find(P=>P.name===c);if(n===void 0||n.field===void 0)return v;const S=y===!0?-1:1,q=typeof n.field=="function"?P=>n.field(P):P=>P[n.field];return v.sort((P,C)=>{let h=q(P),w=q(C);return h==null?-1*S:w==null?1*S:n.sort!==void 0?n.sort(h,w,P,C)*S:me(h)===!0&&me(w)===!0?(h-w)*S:De(h)===!0&&De(w)===!0?Wt(h,w)*S:typeof h=="boolean"&&typeof w=="boolean"?(h-w)*S:([h,w]=[h,w].map(F=>(F+"").toLocaleString().toLowerCase()),h<w?-1*S:h===w?0:S)})});function s(v){let c=e.columnSortOrder;if(Ft(v)===!0)v.sortOrder&&(c=v.sortOrder),v=v.name;else{const S=a.value.find(q=>q.name===v);S!==void 0&&S.sortOrder&&(c=S.sortOrder)}let{sortBy:y,descending:n}=l.value;y!==v?(y=v,n=c==="da"):e.binaryStateSort===!0?n=!n:n===!0?c==="ad"?y=null:n=!1:c==="ad"?n=!0:y=null,g({sortBy:y,descending:n,page:1})}return{columnToSort:i,computedSortMethod:b,sort:s}}const Xt={filter:[String,Object],filterMethod:Function};function Yt(e,l){const a=u(()=>e.filterMethod!==void 0?e.filterMethod:(g,i,b,s)=>{const v=i?i.toLowerCase():"";return g.filter(c=>b.some(y=>{const n=s(y,c)+"";return(n==="undefined"||n==="null"?"":n.toLowerCase()).indexOf(v)!==-1}))});return N(()=>e.filter,()=>{Ee(()=>{l({page:1},!0)})},{deep:!0}),{computedFilterMethod:a}}function Zt(e,l){for(const a in l)if(l[a]!==e[a])return!1;return!0}function $e(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const Jt={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function pt(e,l){const{props:a,emit:g}=e,i=z(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:a.rowsPerPageOptions.length>0?a.rowsPerPageOptions[0]:5},a.pagination)),b=u(()=>{const n=a["onUpdate:pagination"]!==void 0?_(_({},i.value),a.pagination):i.value;return $e(n)}),s=u(()=>b.value.rowsNumber!==void 0);function v(n){c({pagination:n,filter:a.filter})}function c(n={}){Ee(()=>{g("request",{pagination:n.pagination||b.value,filter:n.filter||a.filter,getCellValue:l})})}function y(n,S){const q=$e(_(_({},b.value),n));if(Zt(b.value,q)===!0){s.value===!0&&S===!0&&v(q);return}if(s.value===!0){v(q);return}a.pagination!==void 0&&a["onUpdate:pagination"]!==void 0?g("update:pagination",q):i.value=q}return{innerPagination:i,computedPagination:b,isServerSide:s,requestServerInteraction:c,setPagination:y}}function el(e,l,a,g,i,b){const{props:s,emit:v,proxy:{$q:c}}=e,y=u(()=>g.value===!0?a.value.rowsNumber||0:b.value),n=u(()=>{const{page:T,rowsPerPage:x}=a.value;return(T-1)*x}),S=u(()=>{const{page:T,rowsPerPage:x}=a.value;return T*x}),q=u(()=>a.value.page===1),P=u(()=>a.value.rowsPerPage===0?1:Math.max(1,Math.ceil(y.value/a.value.rowsPerPage))),C=u(()=>S.value===0?!0:a.value.page>=P.value),h=u(()=>(s.rowsPerPageOptions.includes(l.value.rowsPerPage)?s.rowsPerPageOptions:[l.value.rowsPerPage].concat(s.rowsPerPageOptions)).map(x=>({label:x===0?c.lang.table.allRows:""+x,value:x})));N(P,(T,x)=>{if(T===x)return;const U=a.value.page;T&&!U?i({page:1}):T<U&&i({page:T})});function w(){i({page:1})}function F(){const{page:T}=a.value;T>1&&i({page:T-1})}function L(){const{page:T,rowsPerPage:x}=a.value;S.value>0&&T*x<y.value&&i({page:T+1})}function D(){i({page:P.value})}return s["onUpdate:pagination"]!==void 0&&v("update:pagination",_({},a.value)),{firstRowIndex:n,lastRowIndex:S,isFirstPage:q,isLastPage:C,pagesNumber:P,computedRowsPerPageOptions:h,computedRowsNumber:y,firstPage:w,prevPage:F,nextPage:L,lastPage:D}}const tl={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},ll=["update:selected","selection"];function al(e,l,a,g){const i=u(()=>{const C={};return e.selected.map(g.value).forEach(h=>{C[h]=!0}),C}),b=u(()=>e.selection!=="none"),s=u(()=>e.selection==="single"),v=u(()=>e.selection==="multiple"),c=u(()=>a.value.length>0&&a.value.every(C=>i.value[g.value(C)]===!0)),y=u(()=>c.value!==!0&&a.value.some(C=>i.value[g.value(C)]===!0)),n=u(()=>e.selected.length);function S(C){return i.value[C]===!0}function q(){l("update:selected",[])}function P(C,h,w,F){l("selection",{rows:h,added:w,keys:C,evt:F});const L=s.value===!0?w===!0?h:[]:w===!0?e.selected.concat(h):e.selected.filter(D=>C.includes(g.value(D))===!1);l("update:selected",L)}return{hasSelectionMode:b,singleSelection:s,multipleSelection:v,allRowsSelected:c,someRowsSelected:y,rowsSelectedNumber:n,isRowSelected:S,clearSelection:q,updateSelection:P}}function Me(e){return Array.isArray(e)?e.slice():[]}const nl={expanded:Array},rl=["update:expanded"];function ol(e,l){const a=z(Me(e.expanded));N(()=>e.expanded,s=>{a.value=Me(s)});function g(s){return a.value.includes(s)}function i(s){e.expanded!==void 0?l("update:expanded",s):a.value=s}function b(s,v){const c=a.value.slice(),y=c.indexOf(s);v===!0?y===-1&&(c.push(s),i(c)):y!==-1&&(c.splice(y,1),i(c))}return{isRowExpanded:g,setExpanded:i,updateExpanded:b}}const il={visibleColumns:Array};function sl(e,l,a){const g=u(()=>{if(e.columns!==void 0)return e.columns;const v=e.rows[0];return v!==void 0?Object.keys(v).map(c=>({name:c,label:c.toUpperCase(),field:c,align:me(v[c])?"right":"left",sortable:!0})):[]}),i=u(()=>{const{sortBy:v,descending:c}=l.value;return(e.visibleColumns!==void 0?g.value.filter(n=>n.required===!0||e.visibleColumns.includes(n.name)===!0):g.value).map(n=>{const S=n.align||"right",q=`text-${S}`;return O(_({},n),{align:S,__iconClass:`q-table__sort-icon q-table__sort-icon--${S}`,__thClass:q+(n.headerClasses!==void 0?" "+n.headerClasses:"")+(n.sortable===!0?" sortable":"")+(n.name===v?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:n.style!==void 0?typeof n.style!="function"?()=>n.style:n.style:()=>null,__tdClass:n.classes!==void 0?typeof n.classes!="function"?()=>q+" "+n.classes:P=>q+" "+n.classes(P):()=>q})})}),b=u(()=>{const v={};return i.value.forEach(c=>{v[c.name]=c}),v}),s=u(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(a.value===!0?1:0));return{colList:g,computedCols:i,computedColsMap:b,computedColspan:s}}const ee="q-table__bottom row items-center",ze={};Ne.forEach(e=>{ze[e]={}});var dl=H({name:"QTable",props:_(_(_(_(_(_(_(_(O(_({rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0}},ze),{noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function}),Se),Lt),il),Xt),Jt),nl),tl),Kt),emits:["request","virtual-scroll",...Dt,...rl,...ll],setup(e,{slots:l,emit:a}){const g=te(),{proxy:{$q:i}}=g,b=ye(e,i),{inFullscreen:s,toggleFullscreen:v}=Vt(),c=u(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),y=z(null),n=z(null),S=u(()=>e.grid!==!0&&e.virtualScroll===!0),q=u(()=>" q-table__card"+(b.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),P=u(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":q.value)+(b.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(s.value===!0?" fullscreen scroll":"")),C=u(()=>P.value+(e.loading===!0?" q-table--loading":""));N(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+P.value,()=>{S.value===!0&&n.value!==null&&n.value.reset()});const{innerPagination:h,computedPagination:w,isServerSide:F,requestServerInteraction:L,setPagination:D}=pt(g,A),{computedFilterMethod:T}=Yt(e,D),{isRowExpanded:x,setExpanded:U,updateExpanded:He}=ol(e,a),le=u(()=>{let t=e.rows;if(F.value===!0||t.length===0)return t;const{sortBy:o,descending:d}=w.value;return e.filter&&(t=T.value(t,e.filter,V.value,A)),Ge.value!==null&&(t=Xe.value(e.rows===t?t.slice():t,o,d)),t}),he=u(()=>le.value.length),M=u(()=>{let t=le.value;if(F.value===!0)return t;const{rowsPerPage:o}=w.value;return o!==0&&(W.value===0&&e.rows!==t?t.length>K.value&&(t=t.slice(0,K.value)):t=t.slice(W.value,K.value)),t}),{hasSelectionMode:j,singleSelection:Ue,multipleSelection:we,allRowsSelected:Ie,someRowsSelected:_e,rowsSelectedNumber:ae,isRowSelected:ne,clearSelection:We,updateSelection:I}=al(e,a,M,c),{colList:Ke,computedCols:V,computedColsMap:qe,computedColspan:Pe}=sl(e,w,j),{columnToSort:Ge,computedSortMethod:Xe,sort:re}=Gt(e,w,Ke,D),{firstRowIndex:W,lastRowIndex:K,isFirstPage:oe,isLastPage:ie,pagesNumber:G,computedRowsPerPageOptions:Ye,computedRowsNumber:X,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de}=el(g,h,w,F,D,he),Ze=u(()=>M.value.length===0),Je=u(()=>{const t={};return Ne.forEach(o=>{t[o]=e[o]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function pe(){S.value===!0&&n.value.reset()}function et(){if(e.grid===!0)return vt();const t=e.hideHeader!==!0?xe:null;if(S.value===!0){const d=l["top-row"],f=l["bottom-row"],m={default:R=>ke(R.item,l.body,R.index)};if(d!==void 0){const R=r("tbody",d({cols:V.value}));m.before=t===null?()=>R:()=>[t()].concat(R)}else t!==null&&(m.before=t);return f!==void 0&&(m.after=()=>r("tbody",f({cols:V.value}))),r(Ht,O(_({ref:n,class:e.tableClass,style:e.tableStyle},Je.value),{scrollTarget:e.virtualScrollTarget,items:M.value,type:"__qtable",tableColspan:Pe.value,onVirtualScroll:lt}),m)}const o=[at()];return t!==null&&o.unshift(t()),Qe({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},o)}function tt(t,o){if(n.value!==null){n.value.scrollTo(t,o);return}t=parseInt(t,10);const d=y.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(d!==null){const f=y.value.querySelector(".q-table__middle.scroll"),{offsetTop:m}=d,R=m<f.scrollTop?"decrease":"increase";f.scrollTop=m,a("virtual-scroll",{index:t,from:0,to:h.value.rowsPerPage-1,direction:R})}}function lt(t){a("virtual-scroll",t)}function Ce(){return[r(It,{class:"q-table__linear-progress",color:e.color,dark:b.value,indeterminate:!0,trackColor:"transparent"})]}function ke(t,o,d){const f=c.value(t),m=ne(f);if(o!==void 0)return o(Re({key:f,row:t,pageIndex:d,__trClass:m?"selected":""}));const R=l["body-cell"],k=V.value.map(B=>{const Z=l[`body-cell-${B.name}`],J=Z!==void 0?Z:R;return J!==void 0?J(nt({key:f,row:t,pageIndex:d,col:B})):r("td",{class:B.__tdClass(t),style:B.__tdStyle(t)},A(B,t))});if(j.value===!0){const B=l["body-selection"],Z=B!==void 0?B(rt({key:f,row:t,pageIndex:d})):[r(ge,{modelValue:m,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(J,ft)=>{I([f],[t],J,ft)}})];k.unshift(r("td",{class:"q-table--col-auto-width"},Z))}const $={key:f,class:{selected:m}};return e.onRowClick!==void 0&&($.class["cursor-pointer"]=!0,$.onClick=B=>{a("RowClick",B,t,d)}),e.onRowDblclick!==void 0&&($.class["cursor-pointer"]=!0,$.onDblclick=B=>{a("RowDblclick",B,t,d)}),e.onRowContextmenu!==void 0&&($.class["cursor-pointer"]=!0,$.onContextmenu=B=>{a("RowContextmenu",B,t,d)}),r("tr",$,k)}function at(){const t=l.body,o=l["top-row"],d=l["bottom-row"];let f=M.value.map((m,R)=>ke(m,t,R));return o!==void 0&&(f=o({cols:V.value}).concat(f)),d!==void 0&&(f=f.concat(d({cols:V.value}))),r("tbody",f)}function Re(t){return ve(t),t.cols=t.cols.map(o=>{const d=_({},o);return Q(d,"value",()=>A(o,t.row)),d}),t}function nt(t){return ve(t),Q(t,"value",()=>A(t.col,t.row)),t}function rt(t){return ve(t),t}function ve(t){Object.assign(t,{cols:V.value,colsMap:qe.value,sort:re,rowIndex:W.value+t.pageIndex,color:e.color,dark:b.value,dense:e.dense}),j.value===!0&&Q(t,"selected",()=>ne(t.key),(o,d)=>{I([t.key],[t.row],o,d)}),Q(t,"expand",()=>x(t.key),o=>{He(t.key,o)})}function A(t,o){const d=typeof t.field=="function"?t.field(o):o[t.field];return t.format!==void 0?t.format(d,o):d}const E=u(()=>({pagination:w.value,pagesNumber:G.value,isFirstPage:oe.value,isLastPage:ie.value,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,inFullscreen:s.value,toggleFullscreen:v}));function ot(){const t=l.top,o=l["top-left"],d=l["top-right"],f=l["top-selection"],m=j.value===!0&&f!==void 0&&ae.value>0,R="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:R},[t(E.value)]);let k;if(m===!0?k=f(E.value).slice():(k=[],o!==void 0?k.push(r("div",{class:"q-table-control"},[o(E.value)])):e.title&&k.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),d!==void 0&&(k.push(r("div",{class:"q-table__separator col"})),k.push(r("div",{class:"q-table__control"},[d(E.value)]))),k.length!==0)return r("div",{class:R},k)}const Te=u(()=>_e.value===!0?null:Ie.value);function xe(){const t=it();return e.loading===!0&&l.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:Pe.value},Ce())])),r("thead",t)}function it(){const t=l.header,o=l["header-cell"];if(t!==void 0)return t(fe({header:!0})).slice();const d=V.value.map(f=>{const m=l[`header-cell-${f.name}`],R=m!==void 0?m:o,k=fe({col:f});return R!==void 0?R(k):r(At,{key:f.name,props:k},()=>f.label)});if(Ue.value===!0&&e.grid!==!0)d.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(we.value===!0){const f=l["header-selection"],m=f!==void 0?f(fe({})):[r(ge,{color:e.color,modelValue:Te.value,dark:b.value,dense:e.dense,"onUpdate:modelValue":Be})];d.unshift(r("th",{class:"q-table--col-auto-width"},m))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},d)]}function fe(t){return Object.assign(t,{cols:V.value,sort:re,colsMap:qe.value,color:e.color,dark:b.value,dense:e.dense}),we.value===!0&&Q(t,"selected",()=>Te.value,Be),t}function Be(t){_e.value===!0&&(t=!1),I(M.value.map(c.value),M.value,t)}const Y=u(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function st(){if(e.hideBottom===!0)return;if(Ze.value===!0){if(e.hideNoData===!0)return;const d=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,f=l["no-data"],m=f!==void 0?[f({message:d,icon:i.iconSet.table.warning,filter:e.filter})]:[r(je,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),d];return r("div",{class:ee+" q-table__bottom--nodata"},m)}const t=l.bottom;if(t!==void 0)return r("div",{class:ee},[t(E.value)]);const o=e.hideSelectedBanner!==!0&&j.value===!0&&ae.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(ae.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:ee+" justify-end"},ct(o));if(o.length>0)return r("div",{class:ee},o)}function ut(t){D({page:1,rowsPerPage:t.value})}function ct(t){let o;const{rowsPerPage:d}=w.value,f=e.paginationLabel||i.lang.table.pagination,m=l.pagination,R=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),R===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),r(Mt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:d,options:Ye.value,displayValue:d===0?i.lang.table.allRows:d,dark:b.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":ut})])),m!==void 0)o=m(E.value);else if(o=[r("span",d!==0?{class:"q-table__bottom-item"}:{},[d?f(W.value+1,Math.min(K.value,X.value),X.value):f(1,he.value,X.value)])],d!==0&&G.value>1){const k={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(k.size="sm"),G.value>2&&o.push(r(p,O(_({key:"pgFirst"},k),{icon:Y.value[0],disable:oe.value,onClick:se}))),o.push(r(p,O(_({key:"pgPrev"},k),{icon:Y.value[1],disable:oe.value,onClick:ue})),r(p,O(_({key:"pgNext"},k),{icon:Y.value[2],disable:ie.value,onClick:ce}))),G.value>2&&o.push(r(p,O(_({key:"pgLast"},k),{icon:Y.value[3],disable:ie.value,onClick:de})))}return t.push(r("div",{class:"q-table__control"},o)),t}function dt(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[xe()])]:e.loading===!0&&l.loading===void 0?Ce():void 0;return r("div",{class:"q-table__middle"},t)}function vt(){const t=l.item!==void 0?l.item:o=>{const d=o.cols.map(m=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[m.label]),r("div",{class:"q-table__grid-item-value"},[m.value])]));if(j.value===!0){const m=l["body-selection"],R=m!==void 0?m(o):[r(ge,{modelValue:o.selected,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(k,$)=>{I([o.key],[o.row],k,$)}})];d.unshift(r("div",{class:"q-table__grid-item-row"},R),r(jt,{dark:b.value}))}const f={class:["q-table__grid-item-card"+q.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(f.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(f.onClick=m=>{a("RowClick",m,o.row,o.pageIndex)}),e.onRowDblclick!==void 0&&(f.onDblclick=m=>{a("RowDblclick",m,o.row,o.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(o.selected===!0?" q-table__grid-item--selected":"")},[r("div",f,d)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},M.value.map((o,d)=>t(Re({key:c.value(o),row:o,pageIndex:d}))))}return Object.assign(g.proxy,{requestServerInteraction:L,setPagination:D,firstPage:se,prevPage:ue,nextPage:ce,lastPage:de,isRowSelected:ne,clearSelection:We,isRowExpanded:x,setExpanded:U,sort:re,resetVirtualScroll:pe,scrollTo:tt,getCellValue:A}),$t(g.proxy,{filteredSortedRows:()=>le.value,computedRows:()=>M.value,computedRowsNumber:()=>X.value}),()=>{const t=[ot()],o={ref:y,class:C.value};return e.grid===!0?t.push(dt()):Object.assign(o,{class:[o.class,e.cardClass],style:e.cardStyle}),t.push(et(),st()),e.loading===!0&&l.loading!==void 0&&t.push(l.loading()),r("div",o,t)}}});export{dl as Q,At as a};
