import{r as e,ax as t,M as n,f as o}from"./index.a4c995c9.js";import{u as s}from"./useDebounce.460c0b67.js";function a({el:a=window,name:i,listener:r,options:m,autoRemove:u=!0,isDebounce:c=!0,wait:v=80}){let d=()=>{};const f=e(!1);if(a){const l=e(a),[p]=c?s(r,v):t(r,v),b=v?p:r,w=e=>{f.value=!0,e.removeEventListener(i,b,m)},x=e=>e.addEventListener(i,b,m),E=n(l,((e,t,n)=>{e&&(!o(f)&&x(e),n((()=>{u&&w(e)})))}),{immediate:!0});d=()=>{w(l.value),E()}}return{removeEvent:d}}export{a as u};