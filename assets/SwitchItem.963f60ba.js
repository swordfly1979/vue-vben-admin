import{d as e,aQ as t,u as i,a1 as s,h as a,o as n,i as d,j as o,l as r,aH as c,bz as l}from"./index.a566a5ca.js";import{S as p}from"./index.d21f5957.js";import{b as m}from"./index.5841357c.js";import"./index.ba5d05b1.js";import"./index.51f39a86.js";import"./index.65b79cb4.js";import"./index.adcbe97e.js";import"./index.11164d45.js";import"./domUtils.a46c7224.js";import"./_stringToArray.1cfb153c.js";import"./RightOutlined.b48611f5.js";import"./index.8d91dadc.js";import"./useTimeout.e434fe9c.js";import"./useScrollTo.e749e6c6.js";import"./animation.831cbf1f.js";import"./useAttrs.64188c7e.js";import"./isEqual.ec621c06.js";import"./useHeaderSetting.c3e18070.js";import"./SettingOutlined.74fa68dd.js";var u=e({name:"SwitchItem",components:{Switch:p},props:{event:{type:Number,default:()=>{}},disabled:{type:Boolean},title:{type:String},def:{type:Boolean}},setup(e){const{prefixCls:a}=t("setting-switch-item"),{t:n}=i();return{prefixCls:a,t:n,handleChange:function(t){e.event&&m(e.event,t)},getBindValue:s((()=>e.def?{checked:e.def}:{}))}}});const f=l("data-v-3a858942")(((e,t,i,s,l,p)=>{const m=a("Switch");return n(),d("div",{class:e.prefixCls},[o("span",null,r(e.title),1),o(m,c(e.getBindValue,{onChange:e.handleChange,disabled:e.disabled,checkedChildren:e.t("layout.setting.on"),unCheckedChildren:e.t("layout.setting.off")}),null,16,["onChange","disabled","checkedChildren","unCheckedChildren"])],2)}));u.render=f,u.__scopeId="data-v-3a858942";export default u;