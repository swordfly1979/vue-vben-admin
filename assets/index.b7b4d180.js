import{T as e}from"./index.cfac1e53.js";import{_ as a}from"./index.1b767185.js";import{d as t,r as o,h as n,o as i,i as r,w as s,j as d}from"./index.a566a5ca.js";import"./index.327858b4.js";import"./index.5274dc7a.js";import"./RightOutlined.91e3265a.js";import"./types.e18f0e7b.js";import"./isEqual.ec621c06.js";import"./toInteger.baf86ce7.js";import"./DownOutlined.dd4e6399.js";import"./index.8d91dadc.js";import"./index.726e5344.js";import"./usePageContext.0bdca749.js";import"./transButton.fe643f31.js";var m=t({components:{Tinymce:e,PageWrapper:a},setup:()=>({handleChange:function(e){},value:o("hello world!")})});m.render=function(e,a,t,o,m,p){const l=n("Tinymce"),u=n("PageWrapper");return i(),r(u,{title:"富文本组件示例"},{default:s((()=>[d(l,{modelValue:e.value,"onUpdate:modelValue":a[1]||(a[1]=a=>e.value=a),onChange:e.handleChange,width:"100%"},null,8,["modelValue","onChange"])])),_:1})};export default m;