import{a as e,r as t,p as n,N as s,D as o,bO as l,f as i,O as c,a8 as a,cB as r,k as d,cC as u,bN as m}from"./index.a4c995c9.js";import{M as p}from"./index.2bdd82eb.js";import{D as f}from"./index.73c71c16.js";import{I as h}from"./index.85a2c56f.js";import{p as y}from"./propTypes.7f710850.js";const v={width:y.number.def(156),customEvent:{type:Object,default:null},styles:y.style,showIcon:y.bool.def(!0),axis:{type:Object,default:()=>({x:0,y:0})},items:{type:Array,default:()=>[]}},b=e=>{const{item:t}=e;return c("span",{style:"display: inline-block; width: 100%;",onClick:e.handler.bind(null,t)},e.showIcon&&t.icon&&c(h,{class:"mr-2",icon:t.icon}),c("span",null,t.label))};var x=e({name:"ContextMenu",props:v,setup(e){const r=t(null),d=t(!1),u=n((()=>{const{axis:t,items:n,styles:s,width:o}=e,{x:l,y:i}=t||{x:0,y:0},c=40*(n||[]).length,a=o,r=document.body;return{...s,width:`${o}px`,left:`${(r.clientWidth<l+a?l-a:l)+1}px`,top:`${(r.clientHeight<i+c?i-c:i)+1}px`}}));function m(e,t){const{handler:n,disabled:s}=e;s||(d.value=!1,null==t||t.stopPropagation(),null==t||t.preventDefault(),null==n||n())}function h(t){return t.map((t=>{const{disabled:n,label:s,children:o,divider:l=!1}=t,r=l?c(f,{key:`d-${s}`}):null;return o&&0!==o.length?i(d)?c(p.SubMenu,{key:s,disabled:n,popupClassName:"context-menu__popup"},{title:()=>c(b,{showIcon:e.showIcon,item:t,handler:m}),default:()=>h(o)}):null:c(a,null,c(p.Item,{disabled:n,class:"context-menu__item",key:s},(()=>[c(b,{showIcon:e.showIcon,item:t,handler:m})])),r)}))}return s((()=>{o((()=>d.value=!0))})),l((()=>{const e=i(r);e&&document.body.removeChild(e)})),()=>{const{items:t}=e;return i(d)?c(p,{inlineIndent:12,mode:"vertical",class:"context-menu",ref:r,style:i(u)},(()=>h(t))):null}}});const w={domList:[],resolve:()=>{}},I=function(e){const{event:t}=e||{};if(t&&(null==t||t.preventDefault()),r)return new Promise((n=>{const s=document.body,o=document.createElement("div"),l={};e.styles&&(l.styles=e.styles),e.items&&(l.items=e.items),e.event&&(l.customEvent=t,l.axis={x:t.clientX,y:t.clientY});const i=d(x,l);u(i,o);const c=function(){w.resolve("")};w.domList.push(o);const a=function(){w.domList.forEach((e=>{try{e&&s.removeChild(e)}catch(e){}})),s.removeEventListener("click",c),s.removeEventListener("scroll",c)};w.resolve=function(...e){a(),n(e[0])},a(),s.appendChild(o),s.addEventListener("click",c),s.addEventListener("scroll",c)}))},k=function(){w&&(w.resolve(""),w.domList=[])};function E(e=!0){return m()&&e&&l((()=>{k()})),[I,k]}export{E as u};