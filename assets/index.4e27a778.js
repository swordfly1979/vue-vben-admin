import{d as e,aN as n,a1 as a,e as t,h as s,o as i,i as d,aH as r,w as o,j as l,aR as c,aS as u,k as m,l as p,b4 as y,bZ as f}from"./index.a566a5ca.js";import{D as v,a as g,M as k}from"./index.5274dc7a.js";import"./index.8d91dadc.js";v.Button=g,v.install=function(e){return e.component(v.name,v),e.component(g.name,g),e};var M=e({name:"BasicDropdown",components:{[v.name]:v,[k.name]:k,[k.Item.name]:k.Item,[k.Divider.name]:k.Divider,Icon:n},props:{trigger:{type:[Array],default:()=>["contextmenu"]},dropMenuList:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]}},emits:["menuEvent"],setup(e,{emit:n}){const s=a((()=>e.dropMenuList));return{handleClickMenu:function(e){var a;const{event:i}=e,d=t(s).find((e=>`${e.event}`==`${i}`));n("menuEvent",d),null==(a=e.onClick)||a.call(e)},getMenuList:s}}});const x={class:"ml-1"};M.render=function(e,n,a,t,f,v){const g=s("Icon"),k=s("a-menu-item"),M=s("a-menu-divider"),$=s("a-menu"),b=s("a-dropdown");return i(),d(b,r({trigger:e.trigger},e.$attrs),{overlay:o((()=>[l($,{selectedKeys:e.selectedKeys},{default:o((()=>[(i(!0),d(c,null,u(e.getMenuList,(n=>(i(),d(c,{key:`${n.event}`},[l(k,{onClick:a=>e.handleClickMenu(n),disabled:n.disabled},{default:o((()=>[n.icon?(i(),d(g,{key:0,icon:n.icon},null,8,["icon"])):m("",!0),l("span",x,p(n.text),1)])),_:2},1032,["onClick","disabled"]),n.divider?(i(),d(M,{key:`d-${n.event}`})):m("",!0)],64)))),128))])),_:1},8,["selectedKeys"])])),default:o((()=>[l("span",null,[y(e.$slots,"default")])])),_:3},16,["trigger"])},f(M);export{M as _};