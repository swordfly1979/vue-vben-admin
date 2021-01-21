import{P as t,ab as e,d as n,O as o,v as i,x as r,E as s,da as a,y as c,j as l,a5 as u,D as g,a6 as d,aO as f,aP as p,bk as h,h as v,o as m,i as b,k as T,aR as k}from"./index.a566a5ca.js";import{s as y,g as S}from"./scrollTo.c9242ea7.js";function O(){return(O=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function w(){return window}var P=n({name:"ABackTop",mixins:[o],inheritAttrs:!1,props:O(O({},{visibilityHeight:t.number,target:t.func,prefixCls:t.string,onClick:t.func}),{visibilityHeight:t.number.def(400)}),emits:["click"],setup:function(){return{configProvider:i("configProvider",r)}},data:function(){return{visible:!1,scrollEvent:null}},mounted:function(){var t=this;s((function(){var e=t.target||w;t.scrollEvent=a(e(),"scroll",t.handleScroll),t.handleScroll()}))},beforeUnmount:function(){this.scrollEvent&&this.scrollEvent.remove()},methods:{getCurrentScrollTop:function(){var t=(this.target||w)();return t===window?window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop:t.scrollTop},scrollToTop:function(t){var e=this.target;y(0,{getContainer:void 0===e?w:e}),this.$emit("click",t)},handleScroll:function(){var t=this.visibilityHeight,e=this.target,n=S((void 0===e?w:e)(),!0);this.setState({visible:n>t})}},render:function(){var t,e,n=this.prefixCls,o=this.$slots,i=(0,this.configProvider.getPrefixCls)("back-top",n),r=c(i,this.$attrs.class),s=l("div",{class:"".concat(i,"-content")},[l("div",{class:"".concat(i,"-icon")},null)]),a=O(O({},this.$attrs),{onClick:this.scrollToTop,class:r}),f=this.visible?l("div",a,[(null===(t=o.default)||void 0===t?void 0:t.call(o))||s]):null,p=u("fade");return l(d,p,"function"==typeof(e=f)||"[object Object]"===Object.prototype.toString.call(e)&&!g(e)?f:{default:function(){return[f]}})}}),j=n({name:"LayoutFeatures",components:{BackTop:e(P),LayoutLockPage:f((()=>p((()=>import("./index.8405601e.js")),["/assets/index.8405601e.js","/assets/LockPage.5a1f868b.js","/assets/LockPage.426e5e92.css","/assets/index.a566a5ca.js","/assets/index.94daecd6.css","/assets/index.cf22a6d5.js","/assets/index.ea8fd93a.css","/assets/SearchOutlined.7c3ad112.js","/assets/EyeOutlined.77d25fed.js","/assets/index.585ce7e7.js","/assets/index.9c2623aa.css","/assets/header.9f640cf1.js","/assets/LockOutlined.ac38a9b9.js"]))),SettingDrawer:f((()=>p((()=>import("./index.5841357c.js").then((function(t){return t.i}))),["/assets/index.5841357c.js","/assets/index.60acafd9.css","/assets/index.a566a5ca.js","/assets/index.94daecd6.css","/assets/index.ba5d05b1.js","/assets/index.5692a970.css","/assets/index.51f39a86.js","/assets/index.2f74f299.css","/assets/index.65b79cb4.js","/assets/index.990d17ac.css","/assets/index.adcbe97e.js","/assets/index.f0b9f139.css","/assets/index.11164d45.js","/assets/index.121e7eba.css","/assets/domUtils.a46c7224.js","/assets/_stringToArray.1cfb153c.js","/assets/RightOutlined.b48611f5.js","/assets/index.8d91dadc.js","/assets/index.0b3c95d7.css","/assets/useTimeout.e434fe9c.js","/assets/useScrollTo.e749e6c6.js","/assets/animation.831cbf1f.js","/assets/useAttrs.64188c7e.js","/assets/isEqual.ec621c06.js","/assets/useHeaderSetting.c3e18070.js","/assets/SettingOutlined.74fa68dd.js"])))},setup(){const{getUseOpenBackTop:t,getShowSettingButton:e}=h();return{getTarget:()=>document.body,getUseOpenBackTop:t,getShowSettingButton:e}}});j.render=function(t,e,n,o,i,r){const s=v("LayoutLockPage"),a=v("BackTop"),c=v("SettingDrawer");return m(),b(k,null,[l(s),t.getUseOpenBackTop?(m(),b(a,{key:0,target:t.getTarget},null,8,["target"])):T("",!0),t.getShowSettingButton?(m(),b(c,{key:1})):T("",!0)],64)};export default j;