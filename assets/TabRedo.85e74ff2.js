import{d as e,b5 as t,r as a,aQ as o,u as n,bE as s,h as l,o as d,i,w as r,j as u}from"./index.a566a5ca.js";import"./index.8d91dadc.js";import{R as p}from"./RedoOutlined.8cd4028d.js";var m=e({name:"TabContent",components:{RedoOutlined:p,Tooltip:t},setup(){const e=a(!1),{prefixCls:t}=o("multiple-tabs-content"),{t:l}=n(),{refreshPage:d}=s();return{prefixCls:t,t:l,handleRedo:async function(){e.value=!0,await d(),setTimeout((()=>{e.value=!1}),1e3)},loading:e}}});m.render=function(e,t,a,o,n,s){const p=l("RedoOutlined"),m=l("Tooltip");return d(),i(m,{title:e.t("common.redo"),placement:"bottom",mouseEnterDelay:.5},{default:r((()=>[u("span",{class:`${e.prefixCls}__extra-redo`,onClick:t[1]||(t[1]=(...t)=>e.handleRedo&&e.handleRedo(...t))},[u(p,{spin:e.loading},null,8,["spin"])],2)])),_:1},8,["title","mouseEnterDelay"])};export default m;