import{aO as e,aP as o,d as t,r as l,L as a,e as r,cr as s,cs as i,h as d,o as n,i as c,j as m,bz as u,m as p}from"./index.a566a5ca.js";import{a as g}from"./index.adcbe97e.js";import{_ as f}from"./index.1b767185.js";import"./index.11164d45.js";import"./domUtils.a46c7224.js";import"./_stringToArray.1cfb153c.js";import"./RightOutlined.b48611f5.js";import"./index.8d91dadc.js";import"./useTimeout.e434fe9c.js";import"./useScrollTo.e749e6c6.js";import"./animation.831cbf1f.js";import"./index.327858b4.js";import"./index.5274dc7a.js";import"./RightOutlined.91e3265a.js";import"./types.e18f0e7b.js";import"./isEqual.ec621c06.js";import"./toInteger.baf86ce7.js";import"./DownOutlined.dd4e6399.js";import"./index.726e5344.js";import"./usePageContext.0bdca749.js";import"./transButton.fe643f31.js";const b=e((()=>o((()=>import("./index.ec9f4921.js")),["/assets/index.ec9f4921.js","/assets/index.a566a5ca.js","/assets/index.94daecd6.css","/assets/download.6d573c3b.js"])));var v=t({components:{CollapseContainer:g,QrCode:b,PageWrapper:f},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:a,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const j=u("data-v-40460a35");s("data-v-40460a35");const x={class:"flex flex-wrap"},q=p(" 下载 "),C=m("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1);i();const _=j(((e,o,t,l,a,r)=>{const s=d("QrCode"),i=d("CollapseContainer"),u=d("a-button"),p=d("PageWrapper");return n(),c(p,{title:"二维码组件使用示例"},{default:j((()=>[m("div",x,[m(i,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),m(i,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),m(i,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(i,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),m(i,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),m(i,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),m(i,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),m(u,{class:"mb-2",type:"primary",onClick:e.download},{default:j((()=>[q])),_:1},8,["onClick"]),C])),_:1}),m(i,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:j((()=>[m(s,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])])),_:1})}));v.render=_,v.__scopeId="data-v-40460a35";export default v;