let e=document.createElement("style");e.innerHTML=".ir-dv{position:relative;display:flex;flex-direction:column;align-items:center}.ir-dv-img__wrap{position:relative;overflow:hidden;border-radius:50%}.ir-dv-img__wrap img{width:100%;border-radius:50%}.ir-dv-img__wrap img.to-origin{transition:transform .3s}.ir-dv-img__tip{position:absolute;bottom:10px;left:0;z-index:1;display:block;width:100%;height:30px;font-size:12px;line-height:30px;color:#fff;text-align:center}.ir-dv-img__tip.success{background:rgba(85,209,135,.6)}.ir-dv-img__tip.error{background:rgba(237,111,111,.6)}.ir-dv-img__tip.normal{background:rgba(0,0,0,.3)}.ir-dv-drag__bar{margin-top:20px}",document.head.appendChild(e);import{a as i,r as t,b as r,u as s,M as a,p as o,O as n,f as m,bN as d}from"./index.a4c995c9.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.ad94a28d.js";import"./CheckOutlined.b19c1a43.js";import"./DoubleRightOutlined.393045ac.js";import{u as g}from"./useTimeout.0fb9d179.js";import"./useDebounce.460c0b67.js";import"./useEventListener.dafd0e6c.js";import"./tsxHelper.20d71045.js";import{h as c}from"./domUtils.e32f343e.js";import"./useExpose.0faa79f6.js";import{r as p,B as l}from"./DragVerify.1f34ed82.js";var u=i({name:"ImgRotateDargVerify",inheritAttrs:!1,props:p,emits:["success","change","update:value"],setup(e,{emit:i,attrs:p}){const u=t(null),f=r({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:h}=s();a((()=>f.isPassing),(e=>{if(e){const{startTime:t,endTime:r}=f;i("success",{isPassing:e,time:((r-t)/1e3).toFixed(1)}),i("change",e),i("update:value",e)}}));const v=o((()=>{const{imgWrapStyle:i,imgWidth:t}=e;return{width:`${t}px`,height:`${t}px`,...i}})),_=o((()=>{const{minDegree:i,maxDegree:t}=e;return i===t?Math.floor(1+1*Math.random())/10+1:1}));function b(){f.startTime=(new Date).getTime()}function x(i){f.draged=!0;const{imgWidth:t,height:r,maxDegree:s}=e,{moveX:a}=i,o=Math.ceil(a/(t-parseInt(r))*s*m(_));f.currentRotate=o,f.imgStyle=c("transform",`rotateZ(${f.randomRotate-o}deg)`)}function T(){const{minDegree:i,maxDegree:t}=e,r=Math.floor(i+Math.random()*(t-i));f.randomRotate=r,f.imgStyle=c("transform",`rotateZ(${r}deg)`)}function w(){const{randomRotate:i,currentRotate:t}=f,{diffDegree:r}=e;Math.abs(i-t)>=(r||20)?(f.imgStyle=c("transform",`rotateZ(${i}deg)`),f.toOrigin=!0,g((()=>{f.toOrigin=!1,f.showTip=!0}),300)):(f.isPassing=!0,f.endTime=(new Date).getTime()),f.showTip=!0}function y(){f.showTip=!1;const e=m(u);e&&(f.isPassing=!1,e.resume(),T())}const j=d();return j&&(j.resume=y),()=>{const{src:i}=e,{toOrigin:t,isPassing:r,startTime:s,endTime:a}=f,o=[];t&&o.push("to-origin");const d=(a-s)/1e3;return n("div",{class:"ir-dv"},n("div",{class:"ir-dv-img__wrap",style:m(v)},n("img",{src:i,onLoad:T,width:parseInt(e.width),class:o,style:f.imgStyle,onClick:()=>{y()}}),f.showTip&&n("span",{class:["ir-dv-img__tip",f.isPassing?"success":"error"]},f.isPassing?h("component.verify.time",{time:d.toFixed(1)}):h("component.verify.error")),!f.showTip&&!f.draged&&n("span",{class:["ir-dv-img__tip","normal"]},"t('redoTip')")),n(l,{class:"ir-dv-drag__bar",onMove:x,onEnd:w,onStart:b,ref:u,...{...p,...e},value:r,isSlot:!0}))}}});export default u;