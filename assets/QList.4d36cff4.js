var u=Object.defineProperty,i=Object.defineProperties;var c=Object.getOwnPropertyDescriptors;var t=Object.getOwnPropertySymbols;var p=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var r=(e,a,s)=>a in e?u(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,o=(e,a)=>{for(var s in a||(a={}))p.call(a,s)&&r(e,s,a[s]);if(t)for(var s of t(a))q.call(a,s)&&r(e,s,a[s]);return e},n=(e,a)=>i(e,c(a));import{p as m,O as v,P as g,q as k,s as B,u as b,z as D}from"./index.d168d62c.js";var h=m({name:"QList",props:n(o({},v),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:a}){const s=D(),d=g(e,s.proxy.$q),l=k(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(d.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>B("div",{class:l.value},b(a.default))}});export{h as Q};
