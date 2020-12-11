import{P as t,a as e,x as n,y as o,D as r,aL as s,b5 as i,ds as a,I as l,F as c,k as h,b3 as d,dt as u,ai as p,ad as f,G as m,J as y,K as v,ac as b,aX as g,E as w,aT as O}from"./index.a4c995c9.js";function C(){return(C=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var D={width:t.any,height:t.any,defaultOpen:t.looseBool,firstEnter:t.looseBool,open:t.looseBool,prefixCls:t.string,placement:t.string,level:t.oneOfType([t.string,t.array]),levelMove:t.oneOfType([t.number,t.func,t.array]),ease:t.string,duration:t.string,handler:t.any,showMask:t.looseBool,maskStyle:t.object,className:t.string,wrapStyle:t.object,maskClosable:t.looseBool,afterVisibleChange:t.func,keyboard:t.looseBool},T=C(C({},D),{wrapperClassName:t.string,forceRender:t.looseBool,getContainer:t.oneOfType([t.string,t.func,t.object,t.looseBool])});C(C({},D),{getContainer:t.func,getOpenCount:t.func,switchScrollingEffect:t.func});var S={transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend"},E=Object.keys(S).filter((function(t){if("undefined"==typeof document)return!1;var e=document.getElementsByTagName("html")[0];return t in(e?e.style:{})}))[0],P=S[E];function k(t,e,n,o){t.addEventListener?t.addEventListener(e,n,o):t.attachEvent&&t.attachEvent("on".concat(e),n)}function x(t,e,n,o){t.removeEventListener?t.removeEventListener(e,n,o):t.attachEvent&&t.detachEvent("on".concat(e),n)}var j=function(t){return!isNaN(parseFloat(t))&&isFinite(t)};function M(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function N(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?M(Object(n),!0).forEach((function(e){$(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function L(t){return(L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function B(){return(B=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function I(){}var F={},H=!("undefined"!=typeof window&&window.document&&window.document.createElement),A=e({name:"Drawer",mixins:[n],inheritAttrs:!1,props:o(T,{prefixCls:"drawer",placement:"left",getContainer:"body",level:"all",duration:".3s",ease:"cubic-bezier(0.78, 0.14, 0.15, 0.86)",firstEnter:!1,showMask:!0,handler:!0,maskStyle:{},wrapperClassName:""}),data:function(){this.levelDom=[],this.contentDom=null,this.maskDom=null,this.handlerdom=null,this.mousePos=null,this.sFirstEnter=this.firstEnter,this.timeout=null,this.children=null,this.drawerId=Number((Date.now()+Math.random()).toString().replace(".",Math.round(9*Math.random()))).toString(16);var t=void 0!==this.open?this.open:!!this.defaultOpen;return F[this.drawerId]=t,this.orignalOpen=this.open,this.preProps=B({},this.$props),{sOpen:t,isOpenChange:void 0,passive:void 0,container:void 0}},watch:{open:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(t){var e=this;void 0!==t&&t!==this.preProps.open&&(this.isOpenChange=!0,this.container||this.getDefault(this.$props),this.setState({sOpen:open})),this.preProps.open=t,t&&r((function(){e.domFocus()}))})),placement:function(t){t!==this.preProps.placement&&(this.contentDom=null),this.preProps.placement=t},level:function(t){this.preProps.level!==t&&this.getParentAndLevelDom(this.$props),this.preProps.level=t}},mounted:function(){var t=this;r((function(){H||(t.passive=!!s&&{passive:!1});var e=t.getOpen();(t.handler||e||t.sFirstEnter)&&(t.getDefault(t.$props),e&&(t.isOpenChange=!0,r((function(){t.domFocus()}))),t.$forceUpdate())}))},updated:function(){var t=this;r((function(){!t.sFirstEnter&&t.container&&(t.$forceUpdate(),t.sFirstEnter=!0)}))},beforeUnmount:function(){delete F[this.drawerId],delete this.isOpenChange,this.container&&(this.sOpen&&this.setLevelDomTransform(!1,!0),document.body.style.overflow=""),this.sFirstEnter=!1,clearTimeout(this.timeout)},methods:{domFocus:function(){this.dom&&this.dom.focus()},onKeyDown:function(t){t.keyCode===i.ESC&&(t.stopPropagation(),this.__emit("close",t))},onMaskTouchEnd:function(t){this.__emit("close",t),this.onTouchEnd(t,!0)},onIconTouchEnd:function(t){this.__emit("handleClick",t),this.onTouchEnd(t)},onTouchEnd:function(t,e){if(void 0===this.open){var n=e||this.sOpen;this.isOpenChange=!0,this.setState({sOpen:!n})}},onWrapperTransitionEnd:function(t){if(t.target===this.contentWrapper&&t.propertyName.match(/transform$/)){var e=this.getOpen();this.dom.style.transition="",!e&&this.getCurrentDrawerSome()&&(document.body.style.overflowX="",this.maskDom&&(this.maskDom.style.left="",this.maskDom.style.width="")),this.afterVisibleChange&&this.afterVisibleChange(!!e)}},getDefault:function(t){this.getParentAndLevelDom(t),(t.getContainer||t.parent)&&(this.container=this.defaultGetContainer())},getCurrentDrawerSome:function(){return!Object.keys(F).some((function(t){return F[t]}))},getSelfContainer:function(){return this.container},getParentAndLevelDom:function(t){var e=this;if(!H){var n,o=t.level,r=t.getContainer;if(this.levelDom=[],r){if("string"==typeof r){var s=document.querySelectorAll(r)[0];this.parent=s}"function"==typeof r&&(this.parent=r()),"object"===L(r)&&r instanceof window.HTMLElement&&(this.parent=r)}if(!r&&this.container&&(this.parent=this.container.parentNode),"all"===o)Array.prototype.slice.call(this.parent.children).forEach((function(t){"SCRIPT"!==t.nodeName&&"STYLE"!==t.nodeName&&"LINK"!==t.nodeName&&t!==e.container&&e.levelDom.push(t)}));else o&&(n=o,Array.isArray(n)?n:[n]).forEach((function(t){document.querySelectorAll(t).forEach((function(t){e.levelDom.push(t)}))}))}},setLevelDomTransform:function(t,e,n,o){var r=this,s=this.$props,i=s.placement,l=s.levelMove,c=s.duration,h=s.ease,d=s.getContainer;if(!H&&(this.levelDom.forEach((function(s){if(r.isOpenChange||e){s.style.transition="transform ".concat(c," ").concat(h),k(s,P,r.trnasitionEnd);var a=t?o:0;if(l){var d=(m={target:s,open:t},y="function"==typeof(f=l)?f(m):f,Array.isArray(y)?2===y.length?y:[y[0],y[1]]:[y]);a=t?d[0]:d[1]||0}var u="number"==typeof a?"".concat(a,"px"):a,p="left"===i||"top"===i?u:"-".concat(u);s.style.transform=a?"".concat(n,"(").concat(p,")"):"",s.style.msTransform=a?"".concat(n,"(").concat(p,")"):""}var f,m,y})),"body"===d)){var u=["touchstart"],p=[document.body,this.maskDom,this.handlerdom,this.contentDom],f=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth?a(1):0,m="width ".concat(c," ").concat(h),y="transform ".concat(c," ").concat(h);if(t&&"hidden"!==document.body.style.overflow){if(document.body.style.overflow="hidden",f){switch(document.body.style.position="relative",document.body.style.width="calc(100% - ".concat(f,"px)"),this.dom.style.transition="none",i){case"right":this.dom.style.transform="translateX(-".concat(f,"px)"),this.dom.style.msTransform="translateX(-".concat(f,"px)");break;case"top":case"bottom":this.dom.style.width="calc(100% - ".concat(f,"px)"),this.dom.style.transform="translateZ(0)"}clearTimeout(this.timeout),this.timeout=setTimeout((function(){r.dom.style.transition="".concat(y,",").concat(m),r.dom.style.width="",r.dom.style.transform="",r.dom.style.msTransform=""}))}p.forEach((function(t,e){t&&k(t,u[e]||"touchmove",e?r.removeMoveHandler:r.removeStartHandler,r.passive)}))}else if(this.getCurrentDrawerSome()){if(document.body.style.overflow="",(this.isOpenChange||e)&&f){var v;switch(document.body.style.position="",document.body.style.width="",E&&(document.body.style.overflowX="hidden"),this.dom.style.transition="none",i){case"right":this.dom.style.transform="translateX(".concat(f,"px)"),this.dom.style.msTransform="translateX(".concat(f,"px)"),this.dom.style.width="100%",m="width 0s ".concat(h," ").concat(c),this.maskDom&&(this.maskDom.style.left="-".concat(f,"px"),this.maskDom.style.width="calc(100% + ".concat(f,"px)"));break;case"top":case"bottom":this.dom.style.width="calc(100% + ".concat(f,"px)"),this.dom.style.height="100%",this.dom.style.transform="translateZ(0)",v="height 0s ".concat(h," ").concat(c)}clearTimeout(this.timeout),this.timeout=setTimeout((function(){r.dom.style.transition="".concat(y,",").concat(v?"".concat(v,","):"").concat(m),r.dom.style.transform="",r.dom.style.msTransform="",r.dom.style.width="",r.dom.style.height=""}))}p.forEach((function(t,e){t&&x(t,u[e]||"touchmove",e?r.removeMoveHandler:r.removeStartHandler,r.passive)}))}}var b=this.$attrs.onChange;b&&this.isOpenChange&&this.sFirstEnter&&(b(t),this.isOpenChange=!1)},getChildToRender:function(t){var e,n,o=this,r=this.$props,s=r.prefixCls,i=r.placement,a=r.handler,u=r.showMask,p=r.maskStyle,f=r.width,m=r.height,y=r.wrapStyle,v=r.keyboard,b=r.maskClosable,g=this.$attrs,w=g.class,O=g.style,C=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(g,["class","style"]),D=l(this),T=c(s,($(e={},"".concat(s,"-").concat(i),!0),$(e,"".concat(s,"-open"),t),$(e,"no-mask",!u),$(e,w,w),e)),S=this.isOpenChange,E="left"===i||"right"===i,P="translate".concat(E?"X":"Y"),k="left"===i||"top"===i?"-100%":"100%",x=t?"":"".concat(P,"(").concat(k,")");if(void 0===S||S){var M=this.contentDom?this.contentDom.getBoundingClientRect()[E?"width":"height"]:0,L=(E?f:m)||M;this.setLevelDomTransform(t,!1,P,L)}if(!1!==a){var F=h("div",{class:"drawer-handle",onClick:function(){}},[h("i",{class:"drawer-handle-icon"},null)]),H=this.handler||F,A=H.props&&H.props.onClick;n=d(H,{onClick:function(t){A&&A(),o.onIconTouchEnd(t)},ref:function(t){o.handlerdom=t}})}var X=B(B({},C),{class:T,onTransitionend:this.onWrapperTransitionEnd,onKeydown:t&&v?this.onKeyDown:I,style:B(B({},y),O)});return h("div",N(N({ref:function(t){o.dom=t}},X),{},{tabindex:-1}),[u&&h("div",{key:t,class:"".concat(s,"-mask"),onClick:b?this.onMaskTouchEnd:I,style:p,ref:function(t){o.maskDom=t}},null),h("div",{class:"".concat(s,"-content-wrapper"),style:{transform:x,msTransform:x,width:j(f)?"".concat(f,"px"):f,height:j(m)?"".concat(m,"px"):m},ref:function(t){o.contentWrapper=t}},[h("div",{class:"".concat(s,"-content"),ref:function(t){o.contentDom=t},onTouchstart:t?this.removeStartHandler:I,onTouchmove:t?this.removeMoveHandler:I},[D]),n])])},getOpen:function(){return void 0!==this.open?this.open:this.sOpen},getTouchParentScroll:function(t,e,n,o){if(!e||e===document)return!1;if(e===t.parentNode)return!0;var r=Math.max(Math.abs(n),Math.abs(o))===Math.abs(o),s=Math.max(Math.abs(n),Math.abs(o))===Math.abs(n),i=e.scrollHeight-e.clientHeight,a=e.scrollWidth-e.clientWidth,l=e.scrollTop,c=e.scrollLeft;e.scrollTo&&e.scrollTo(e.scrollLeft+1,e.scrollTop+1);var h=e.scrollTop,d=e.scrollLeft;return e.scrollTo&&e.scrollTo(e.scrollLeft-1,e.scrollTop-1),!((!r||i&&h-l&&(!i||!(e.scrollTop>=i&&o<0||e.scrollTop<=0&&o>0)))&&(!s||a&&d-c&&(!a||!(e.scrollLeft>=a&&n<0||e.scrollLeft<=0&&n>0))))&&this.getTouchParentScroll(t,e.parentNode,n,o)},removeStartHandler:function(t){t.touches.length>1||(this.startPos={x:t.touches[0].clientX,y:t.touches[0].clientY})},removeMoveHandler:function(t){if(!(t.changedTouches.length>1)){var e=t.currentTarget,n=t.changedTouches[0].clientX-this.startPos.x,o=t.changedTouches[0].clientY-this.startPos.y;(e===this.maskDom||e===this.handlerdom||e===this.contentDom&&this.getTouchParentScroll(e,t.target,n,o))&&t.preventDefault()}},trnasitionEnd:function(t){x(t.target,P,this.trnasitionEnd),t.target.style.transition=""},defaultGetContainer:function(){if(H)return null;var t=document.createElement("div");return this.parent.appendChild(t),this.wrapperClassName&&(t.className=this.wrapperClassName),t}},render:function(){var t=this,e=this.$props,n=e.getContainer,o=e.wrapperClassName,r=e.handler,s=e.forceRender,i=this.getOpen(),a=null;F[this.drawerId]=i?this.container:i;var l=this.getChildToRender(!!this.sFirstEnter&&i);return n?this.container&&(i||this.sFirstEnter)?((!!r||s||i||this.dom)&&(a=h(u,{to:this.getSelfContainer()},{default:function(){return[l]}})),a):null:h("div",{class:o,ref:function(e){t.container=e}},[l])}});function X(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function V(){return(V=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}var W=f("top","right","bottom","left"),R=p(e({name:"ADrawer",mixins:[n],inheritAttrs:!1,props:{closable:t.looseBool.def(!0),destroyOnClose:t.looseBool,getContainer:t.any,maskClosable:t.looseBool.def(!0),mask:t.looseBool.def(!0),maskStyle:t.object,wrapStyle:t.object,bodyStyle:t.object,headerStyle:t.object,drawerStyle:t.object,title:t.VNodeChild,visible:t.looseBool,width:t.oneOfType([t.string,t.number]).def(256),height:t.oneOfType([t.string,t.number]).def(256),zIndex:t.number,prefixCls:t.string,placement:t.oneOf(W).def("right"),level:t.any.def(null),wrapClassName:t.string,handle:t.VNodeChild,afterVisibleChange:t.func,keyboard:t.looseBool.def(!0),onClose:t.func,"onUpdate:visible":t.func},setup:function(t){return{configProvider:m("configProvider",y),destroyClose:!1,preVisible:t.visible,parentDrawer:m("parentDrawer",null)}},data:function(){return{sPush:!1}},beforeCreate:function(){v("parentDrawer",this)},mounted:function(){this.visible&&this.parentDrawer&&this.parentDrawer.push()},updated:function(){var t=this;r((function(){t.preVisible!==t.visible&&t.parentDrawer&&(t.visible?t.parentDrawer.push():t.parentDrawer.pull()),t.preVisible=t.visible}))},beforeUnmount:function(){this.parentDrawer&&this.parentDrawer.pull()},methods:{domFocus:function(){this.$refs.vcDrawer&&this.$refs.vcDrawer.domFocus()},close:function(t){this.$emit("update:visible",!1),this.$emit("close",t)},push:function(){this.setState({sPush:!0})},pull:function(){var t=this;this.setState({sPush:!1},(function(){t.domFocus()}))},onDestroyTransitionEnd:function(){this.getDestroyOnClose()&&(this.visible||(this.destroyClose=!0,this.$forceUpdate()))},getDestroyOnClose:function(){return this.destroyOnClose&&!this.visible},getPushTransform:function(t){return"left"===t||"right"===t?"translateX(".concat("left"===t?180:-180,"px)"):"top"===t||"bottom"===t?"translateY(".concat("top"===t?180:-180,"px)"):void 0},getRcDrawerStyle:function(){var t=this.$props,e=t.zIndex,n=t.placement,o=t.wrapStyle;return V({zIndex:e,transform:this.$data.sPush?this.getPushTransform(n):void 0},o)},renderHeader:function(t){var e=this.$props,n=e.closable,o=e.headerStyle,r=b(this,"title");if(!r&&!n)return null;var s="".concat(t,r?"-header":"-header-no-title");return h("div",{class:s,style:o},[r&&h("div",{class:"".concat(t,"-title")},[r]),n?this.renderCloseIcon(t):null])},renderCloseIcon:function(t){return this.closable&&h("button",{key:"closer",onClick:this.close,"aria-label":"Close",class:"".concat(t,"-close")},[h(g,null,null)])},renderBody:function(t){var e,n;if(this.destroyClose&&!this.visible)return null;this.destroyClose=!1;var o=this.$props,r=o.bodyStyle,s=o.drawerStyle,i={};return this.getDestroyOnClose()&&(i.opacity=0,i.transition="opacity .3s"),h("div",{class:"".concat(t,"-wrapper-body"),style:V(V({},i),s),onTransitionend:this.onDestroyTransitionEnd},[this.renderHeader(t),h("div",{key:"body",class:"".concat(t,"-body"),style:r},[null===(n=(e=this.$slots).default)||void 0===n?void 0:n.call(e)])])}},render:function(){var t,e=this,n=w(this),o=n.prefixCls,r=n.width,s=n.height,i=n.visible,a=n.placement,l=n.wrapClassName,d=n.mask,u=function(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}(n,["prefixCls","width","height","visible","placement","wrapClassName","mask"]),p=d?"":"no-mask",f={};"left"===a||"right"===a?f.width="number"==typeof r?"".concat(r,"px"):r:f.height="number"==typeof s?"".concat(s,"px"):s;var m=b(this,"handle")||!1,y=(0,this.configProvider.getPrefixCls)("drawer",o),v=this.$attrs.class,g=V(V(V(V(V({},this.$attrs),O(u,["closable","destroyOnClose","drawerStyle","headerStyle","bodyStyle","title","push","visible","getPopupContainer","rootPrefixCls","getPrefixCls","renderEmpty","csp","pageHeader","autoInsertSpaceInButton"])),{onClose:this.close,handler:m}),f),{prefixCls:y,open:i,showMask:d,placement:a,class:c((t={},X(t,v,!!v),X(t,l,!!l),X(t,p,!!p),t)),wrapStyle:this.getRcDrawerStyle(),ref:"vcDrawer"});return h(A,g,{default:function(){return[e.renderBody(y)]}})}}));export{R as D};