import{d as e,aQ as s,h as a,o as i,i as t,j as r,w as l,k as n,aR as u,aS as m}from"./index.a566a5ca.js";import{I as o}from"./index.b77e5e9f.js";import"./LeftOutlined.b219af0e.js";import"./RightOutlined.91e3265a.js";var p=e({name:"TableImage",components:{Image:o,PreviewGroup:o.PreviewGroup},props:{imgList:{type:Array,default:null},size:{type:Number,default:40}},setup(){const{prefixCls:e}=s("basic-table-img");return{prefixCls:e}}});p.render=function(e,s,o,p,d,f){const g=a("Image"),c=a("PreviewGroup");return e.imgList&&e.imgList.length?(i(),t("div",{key:0,class:e.prefixCls},[r(c,null,{default:l((()=>[(i(!0),t(u,null,m(e.imgList,(s=>(i(),t(g,{key:s,width:e.size,src:s},null,8,["width","src"])))),128))])),_:1})],2)):n("",!0)};export default p;