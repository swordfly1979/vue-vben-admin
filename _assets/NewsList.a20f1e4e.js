let t=document.createElement("style");t.innerHTML=".news-list__item-avatar[data-v-1006fc50]{width:35px;height:35px;border-radius:50%}.news-list__item-title[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.65}.news-list__item-time[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.45}.news-list__item-light[data-v-1006fc50]{font-size:14px;line-height:22px;color:#000;opacity:.85}.news-list__item-cnte[data-v-1006fc50]{background:#eef3fb;border-radius:2px;opacity:.6}.news-list__item-cnte__title[data-v-1006fc50]{font-size:14px;line-height:22px;color:rgba(0,0,0,.85)}",document.head.appendChild(t);import{a as e,W as s,X as i,i as a,o as l,j as n,k as o,a8 as c,a9 as r,m as d,n as m,Y as p}from"./index.a4c995c9.js";import"./xlsx.a48e520c.js";import"./index.51976da2.js";import"./Trigger.a445e86a.js";import"./omit.149aedfc.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.afd9afdf.js";import"./CheckOutlined.0ff5e6b7.js";import"./RightOutlined.0310d066.js";import"./LeftOutlined.fa221124.js";import"./index.6e5663f8.js";import"./zh_CN.0242bd16.js";import{L as _}from"./index.ca59c130.js";import{C as f,S as u}from"./index.617c50b6.js";import{n as h}from"./data.edc06832.js";import{h as w}from"./header.817c2c65.js";var x=e({components:{List:_,ListItem:_.Item,ListItemMeta:_.Item.Meta,CollapseContainer:f,ScrollContainer:u},setup:()=>({newList:h})});const j=p("data-v-1006fc50");s("data-v-1006fc50");const v=o("img",{src:w,class:"news-list__item-avatar"},null,-1),b={class:"news-list__item-desc"},g={class:"news-list__item-time mb-1"},L={class:"news-list__item-title mb-1"},C={class:"news-list__item-light"},I=m("申请迭代 "),y={class:"news-list__item-light"},S=m("发布 "),z={class:"news-list__item-cnte p-2"},k={class:"news-list__item-cnte__title"},M=o("br",null,null,-1),O=o("br",null,null,-1),R=o("br",null,null,-1);i();const T=j(((t,e,s,i,p,_)=>{const f=a("ListItemMeta"),u=a("ListItem"),h=a("List"),w=a("ScrollContainer"),x=a("CollapseContainer");return l(),n(x,{class:"news-list",title:"动态",canExpan:!1},{default:j((()=>[o(w,null,{default:j((()=>[o(h,null,{default:j((()=>[(l(!0),n(c,null,r(t.newList,(t=>(l(),n(u,{key:t.id,class:"news-list__item"},{default:j((()=>[o(f,null,{avatar:j((()=>[v])),description:j((()=>[o("div",b,[o("div",g,d(t.sendTime),1),o("div",L,[o("span",C,d(t.sender)+" ",1),I,o("span",y," "+d(t.title)+" ",1),S]),o("div",z,[o("span",k,d(t.cnteId),1),M,m(" Status: "+d(t.cnteStas)+" ",1),O,m(" Repository: "+d(t.cnteRepo)+" ",1),R])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})}));x.render=T,x.__scopeId="data-v-1006fc50";export default x;