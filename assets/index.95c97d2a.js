import{d as e,bE as t,h as s,o,i as r,w as i,j as l,m as a}from"./index.a566a5ca.js";import{I as c}from"./index.cf22a6d5.js";import{a as n}from"./index.adcbe97e.js";import{_ as m}from"./index.1b767185.js";import"./SearchOutlined.7c3ad112.js";import"./EyeOutlined.77d25fed.js";import"./index.11164d45.js";import"./domUtils.a46c7224.js";import"./_stringToArray.1cfb153c.js";import"./RightOutlined.b48611f5.js";import"./index.8d91dadc.js";import"./useTimeout.e434fe9c.js";import"./useScrollTo.e749e6c6.js";import"./animation.831cbf1f.js";import"./index.327858b4.js";import"./index.5274dc7a.js";import"./RightOutlined.91e3265a.js";import"./types.e18f0e7b.js";import"./isEqual.ec621c06.js";import"./toInteger.baf86ce7.js";import"./DownOutlined.dd4e6399.js";import"./index.726e5344.js";import"./usePageContext.0bdca749.js";import"./transButton.fe643f31.js";var d=e({name:"TabsDemo",components:{CollapseContainer:n,PageWrapper:m,[c.name]:c},setup(){const{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:i,refreshPage:l}=t();return{closeAll:e,closeLeft:s,closeRight:o,closeOther:r,closeCurrent:i,refreshPage:l}}});const p=a("关闭所有"),f=a("关闭左侧"),u=a("关闭右侧"),j=a("关闭其他"),C=a("关闭当前"),h=a("刷新当前");d.render=function(e,t,a,c,n,m){const d=s("a-input"),g=s("CollapseContainer"),b=s("a-button"),k=s("PageWrapper");return o(),r(k,{title:"标签页操作示例"},{default:i((()=>[l(g,{title:"在下面输入框输入文本,切换后回来内容会保存"},{default:i((()=>[l(d,{placeholder:"请输入"})])),_:1}),l(g,{class:"mt-4",title:"标签页操作"},{default:i((()=>[l(b,{class:"mr-2",onClick:e.closeAll},{default:i((()=>[p])),_:1},8,["onClick"]),l(b,{class:"mr-2",onClick:e.closeLeft},{default:i((()=>[f])),_:1},8,["onClick"]),l(b,{class:"mr-2",onClick:e.closeRight},{default:i((()=>[u])),_:1},8,["onClick"]),l(b,{class:"mr-2",onClick:e.closeOther},{default:i((()=>[j])),_:1},8,["onClick"]),l(b,{class:"mr-2",onClick:e.closeCurrent},{default:i((()=>[C])),_:1},8,["onClick"]),l(b,{class:"mr-2",onClick:e.refreshPage},{default:i((()=>[h])),_:1},8,["onClick"])])),_:1})])),_:1})};export default d;