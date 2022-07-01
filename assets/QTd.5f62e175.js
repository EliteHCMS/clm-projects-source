import{bB as d,c as n,h as r,bH as c,bF as i,g as v}from"./index.71a5d202.js";const g=["top","middle","bottom"];var m=d({name:"QBadge",props:{color:String,textColor:String,floating:Boolean,transparent:Boolean,multiLine:Boolean,outline:Boolean,rounded:Boolean,label:[Number,String],align:{type:String,validator:e=>g.includes(e)}},setup(e,{slots:t}){const a=n(()=>e.align!==void 0?{verticalAlign:e.align}:null),l=n(()=>{const o=e.outline===!0&&e.color||e.textColor;return`q-badge flex inline items-center no-wrap q-badge--${e.multiLine===!0?"multi":"single"}-line`+(e.outline===!0?" q-badge--outline":e.color!==void 0?` bg-${e.color}`:"")+(o!==void 0?` text-${o}`:"")+(e.floating===!0?" q-badge--floating":"")+(e.rounded===!0?" q-badge--rounded":"")+(e.transparent===!0?" q-badge--transparent":"")});return()=>r("div",{class:l.value,style:a.value,role:"alert","aria-label":e.label},c(t.default,e.label!==void 0?[e.label]:[]))}}),f=d({name:"QTr",props:{props:Object,noHover:Boolean},setup(e,{slots:t}){const a=n(()=>"q-tr"+(e.props===void 0||e.props.header===!0?"":" "+e.props.__trClass)+(e.noHover===!0?" q-tr--no-hover":""));return()=>r("tr",{class:a.value},i(t.default))}}),q=d({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:t}){const a=v(),l=n(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return r("td",{class:l.value},i(t.default));const o=a.vnode.key,u=(e.props.colsMap!==void 0?e.props.colsMap[o]:null)||e.props.col;if(u===void 0)return;const{row:s}=e.props;return r("td",{class:l.value+u.__tdClass(s),style:u.__tdStyle(s)},i(t.default))}}});export{f as Q,q as a,m as b};
