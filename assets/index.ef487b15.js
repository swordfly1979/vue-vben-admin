import{j as t,aH as e,aI as a,d as s,aQ as i,cr as r,cs as l,h as o,o as n,i as c,aR as d,aS as p,m,l as u,k as f,bz as v,w as b}from"./index.a566a5ca.js";import{B as y}from"./index.379c6004.js";import{T as j}from"./index.b49e62b0.js";import{P as g}from"./useSortable.6348db1d.js";import{T as h}from"./index.ce5f6841.js";import{A as x}from"./index.726e5344.js";import{L as O}from"./index.0a9cf62d.js";import"./index.85488c04.js";import"./index.be64ae83.js";import"./index.2bf786a7.js";import"./colors.51f7f813.js";import"./isNumeric.2bec345d.js";import"./UpOutlined.d8022224.js";import"./DownOutlined.dd4e6399.js";import"./LeftOutlined.b219af0e.js";import"./RightOutlined.91e3265a.js";import"./SearchOutlined.7c3ad112.js";import"./CheckOutlined.22d125f3.js";import"./zh_CN.8094f4d6.js";import"./responsiveObserve.c545f1cc.js";var k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zM304 768V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340H304z"}}]},name:"bell",theme:"outlined"};function C(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var w=function(s,i){var r=function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?Object(arguments[e]):{},s=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable})))),s.forEach((function(e){C(t,e,a[e])}))}return t}({},s,i.attrs);return t(a,e(r,{icon:k}),null)};w.displayName="BellOutlined",w.inheritAttrs=!1;const S=[{key:"1",name:"通知",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"你收到了 14 份新周报",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"你推荐的 曲妮妮 已通过第三轮面试",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"这种模板可以区分多种通知类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"}]},{key:"2",name:"消息",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",description:"描述信息描述信息描述信息",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"朱偏右 回复了你",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"标题",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0}]},{key:"3",name:"待办",list:[{id:"000000009",avatar:"",title:"任务名称",description:"任务需要在 2017-01-12 20:00 前启动",datetime:"",extra:"未开始",color:"",type:"3"},{id:"000000010",avatar:"",title:"第三方紧急代码变更",description:"冠霖 需在 2017-01-07 前完成代码变更任务",datetime:"",extra:"马上到期",color:"red",type:"3"},{id:"000000011",avatar:"",title:"信息安全考试",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"已耗时 8 天",color:"gold",type:"3"},{id:"000000012",avatar:"",title:"ABCD 版本发布",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"进行中",color:"blue",type:"3"}]}];var P=s({components:{[x.name]:x,[O.name]:O,[O.Item.name]:O.Item,AListItemMeta:O.Item.Meta,[h.name]:h},props:{list:{type:Array,default:()=>[]}},setup(){const{prefixCls:t}=i("header-notify-list");return{prefixCls:t}}});const _=v("data-v-f8337014");r("data-v-f8337014");const z={class:"title"},N={key:0,class:"extra"},B={key:1},T={class:"description"},M={class:"datetime"};l();const A=_(((e,a,s,i,r,l)=>{const v=o("a-tag"),b=o("a-avatar"),y=o("a-list-item-meta"),j=o("a-list-item"),g=o("a-list");return n(),c(g,{class:e.prefixCls},{default:_((()=>[(n(!0),c(d,null,p(e.list,(e=>(n(),c(j,{key:e.id,class:"list-item"},{default:_((()=>[t(y,null,{title:_((()=>[t("div",z,[m(u(e.title)+" ",1),e.extra?(n(),c("div",N,[t(v,{class:"tag",color:e.color},{default:_((()=>[m(u(e.extra),1)])),_:2},1032,["color"])])):f("",!0)])])),avatar:_((()=>[e.avatar?(n(),c(b,{key:0,class:"avatar",src:e.avatar},null,8,["src"])):(n(),c("span",B,u(e.avatar),1))])),description:_((()=>[t("div",null,[t("div",T,u(e.description),1),t("div",M,u(e.datetime),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["class"])}));P.render=A,P.__scopeId="data-v-f8337014";var D=s({components:{Popover:g,BellOutlined:w,Tabs:j,TabPane:j.TabPane,Badge:y,NoticeList:P},setup(){const{prefixCls:t}=i("header-notify");let e=0;for(let a=0;a<S.length;a++)e+=S[a].list.length;return{prefixCls:t,tabListData:S,count:e,numberStyle:{}}}});const I={key:0};D.render=function(e,a,s,i,r,l){const v=o("BellOutlined"),y=o("Badge"),j=o("NoticeList"),g=o("TabPane"),h=o("Tabs"),x=o("Popover");return n(),c("div",{class:e.prefixCls},[t(x,{title:"",trigger:"click",overlayClassName:`${e.prefixCls}__overlay`},{content:b((()=>[t(h,null,{default:b((()=>[(n(!0),c(d,null,p(e.tabListData,(e=>(n(),c(g,{key:e.key},{tab:b((()=>[m(u(e.name)+" ",1),0!==e.list.length?(n(),c("span",I,"("+u(e.list.length)+")",1)):f("",!0)])),default:b((()=>[t(j,{list:e.list},null,8,["list"])])),_:2},1024)))),128))])),_:1})])),default:b((()=>[t(y,{count:e.count,dot:"",numberStyle:e.numberStyle},{default:b((()=>[t(v)])),_:1},8,["count","numberStyle"])])),_:1},8,["overlayClassName"])],2)};export default D;