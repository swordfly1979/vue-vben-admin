import{d as e,b5 as t,aQ as a,cr as s,cs as i,h as l,o as n,i as p,aR as r,aS as d,j as o,bz as c}from"./index.a566a5ca.js";import"./index.8d91dadc.js";var f=e({name:"MenuTypePicker",components:{Tooltip:t},props:{menuTypeList:{type:Array,defualt:[]},handler:{type:Function,default:()=>{}},def:{type:String}},setup(){const{prefixCls:e}=a("setting-menu-type-picker");return{prefixCls:e}}});const m=c("data-v-8f0b3658");s("data-v-8f0b3658");const u=o("div",{class:"mix-sidebar"},null,-1);i();const y=m(((e,t,a,s,i,c)=>{const f=l("Tooltip");return n(),p("div",{class:e.prefixCls},[(n(!0),p(r,null,d(e.menuTypeList||[],(t=>(n(),p(f,{key:t.title,title:t.title,placement:"bottom"},{default:m((()=>[o("div",{onClick:a=>e.handler(t),class:[`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}]},[u],10,["onClick"])])),_:2},1032,["title"])))),128))],2)}));f.render=y,f.__scopeId="data-v-8f0b3658";export default f;