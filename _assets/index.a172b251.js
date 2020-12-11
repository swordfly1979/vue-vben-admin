function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function o(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function r(t,e){var o=t["page".concat(e?"Y":"X","Offset")],r="scroll".concat(e?"Top":"Left");if("number"!=typeof o){var n=t.document;"number"!=typeof(o=n.documentElement[r])&&(o=n.body[r])}return o}function n(t){return r(t)}function i(t){return r(t,!0)}function l(t){var e=function(t){var e,o,r,n=t.ownerDocument,i=n.body,l=n&&n.documentElement;return o=(e=t.getBoundingClientRect()).left,r=e.top,{left:o-=l.clientLeft||i.clientLeft||0,top:r-=l.clientTop||i.clientTop||0}}(t),o=t.ownerDocument,r=o.defaultView||o.parentWindow;return e.left+=n(r),e.top+=i(r),e}var f,c=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),p=/^(top|right|bottom|left)$/;function u(t,e){for(var o=0;o<t.length;o++)e(t[o])}function a(t){return"border-box"===f(t,"boxSizing")}"undefined"!=typeof window&&(f=window.getComputedStyle?function(t,e,o){var r="",n=t.ownerDocument,i=o||n.defaultView.getComputedStyle(t,null);return i&&(r=i.getPropertyValue(e)||i[e]),r}:function(t,e){var o=t.currentStyle&&t.currentStyle[e];if(c.test(o)&&!p.test(e)){var r=t.style,n=r.left,i=t.runtimeStyle.left;t.runtimeStyle.left=t.currentStyle.left,r.left="fontSize"===e?"1em":o||0,o=r.pixelLeft+"px",r.left=n,t.runtimeStyle.left=i}return""===o?"auto":o});var d=["margin","border","padding"];function s(t,e,o){var r,n={},i=t.style;for(r in e)e.hasOwnProperty(r)&&(n[r]=i[r],i[r]=e[r]);for(r in o.call(t),e)e.hasOwnProperty(r)&&(i[r]=n[r])}function v(t,e,o){var r,n,i,l=0;for(n=0;n<e.length;n++)if(r=e[n])for(i=0;i<o.length;i++){var c=void 0;c="border"===r?"".concat(r+o[i],"Width"):r+o[i],l+=parseFloat(f(t,c))||0}return l}function y(t){return null!=t&&t==t.window}var h={};function w(t,e,o){if(y(t))return"width"===e?h.viewportWidth(t):h.viewportHeight(t);if(9===t.nodeType)return"width"===e?h.docWidth(t):h.docHeight(t);var r="width"===e?["Left","Right"]:["Top","Bottom"],n="width"===e?t.offsetWidth:t.offsetHeight,i=(f(t),a(t)),l=0;(null==n||n<=0)&&(n=void 0,(null==(l=f(t,e))||Number(l)<0)&&(l=t.style[e]||0),l=parseFloat(l)||0),void 0===o&&(o=i?1:-1);var c=void 0!==n||i,p=n||l;if(-1===o)return c?p-v(t,["border","padding"],r):l;if(c){var u=2===o?-v(t,["border"],r):v(t,["margin"],r);return p+(1===o?0:u)}return l+v(t,d.slice(o),r)}u(["Width","Height"],(function(t){h["doc".concat(t)]=function(e){var o=e.document;return Math.max(o.documentElement["scroll".concat(t)],o.body["scroll".concat(t)],h["viewport".concat(t)](o))},h["viewport".concat(t)]=function(e){var o="client".concat(t),r=e.document,n=r.body,i=r.documentElement[o];return"CSS1Compat"===r.compatMode&&i||n&&n[o]||i}}));var b={position:"absolute",visibility:"hidden",display:"block"};function m(t){var e,o=arguments;return 0!==t.offsetWidth?e=w.apply(void 0,o):s(t,b,(function(){e=w.apply(void 0,o)})),e}function g(e,o,r){var n=r;if("object"!==t(o))return void 0!==n?("number"==typeof n&&(n+="px"),void(e.style[o]=n)):f(e,o);for(var i in o)o.hasOwnProperty(i)&&g(e,i,o[i])}u(["width","height"],(function(t){var e=t.charAt(0).toUpperCase()+t.slice(1);h["outer".concat(e)]=function(e,o){return e&&m(e,t,o?0:1)};var o="width"===t?["Left","Right"]:["Top","Bottom"];h[t]=function(e,r){if(void 0===r)return e&&m(e,t,-1);if(e){f(e);return a(e)&&(r+=v(e,["padding","border"],o)),g(e,t,r)}}}));var O=function(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(n,!0).forEach((function(o){e(t,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({getWindow:function(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow},offset:function(t,e){if(void 0===e)return l(t);!function(t,e){"static"===g(t,"position")&&(t.style.position="relative");var o,r,n=l(t),i={};for(r in e)e.hasOwnProperty(r)&&(o=parseFloat(g(t,r))||0,i[r]=o+e[r]-n[r]);g(t,i)}(t,e)},isWindow:y,each:u,css:g,clone:function(t){var e={};for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);if(t.overflow)for(var r in t)t.hasOwnProperty(r)&&(e.overflow[r]=t.overflow[r]);return e},scrollLeft:function(t,e){if(y(t)){if(void 0===e)return n(t);window.scrollTo(e,i(t))}else{if(void 0===e)return t.scrollLeft;t.scrollLeft=e}},scrollTop:function(t,e){if(y(t)){if(void 0===e)return i(t);window.scrollTo(n(t),e)}else{if(void 0===e)return t.scrollTop;t.scrollTop=e}},viewportWidth:0,viewportHeight:0},h);function T(t,e,o){o=o||{},9===e.nodeType&&(e=O.getWindow(e));var r=o.allowHorizontalScroll,n=o.onlyScrollIfNeeded,i=o.alignWithTop,l=o.alignWithLeft,f=o.offsetTop||0,c=o.offsetLeft||0,p=o.offsetBottom||0,u=o.offsetRight||0;r=void 0===r||r;var a,d,s,v,y,h,w,b,m,g,T=O.isWindow(e),S=O.offset(t),W=O.outerHeight(t),L=O.outerWidth(t);T?(w=e,g=O.height(w),m=O.width(w),b={left:O.scrollLeft(w),top:O.scrollTop(w)},y={left:S.left-b.left-c,top:S.top-b.top-f},h={left:S.left+L-(b.left+m)+u,top:S.top+W-(b.top+g)+p},v=b):(a=O.offset(e),d=e.clientHeight,s=e.clientWidth,v={left:e.scrollLeft,top:e.scrollTop},y={left:S.left-(a.left+(parseFloat(O.css(e,"borderLeftWidth"))||0))-c,top:S.top-(a.top+(parseFloat(O.css(e,"borderTopWidth"))||0))-f},h={left:S.left+L-(a.left+s+(parseFloat(O.css(e,"borderRightWidth"))||0))+u,top:S.top+W-(a.top+d+(parseFloat(O.css(e,"borderBottomWidth"))||0))+p}),y.top<0||h.top>0?!0===i?O.scrollTop(e,v.top+y.top):!1===i?O.scrollTop(e,v.top+h.top):y.top<0?O.scrollTop(e,v.top+y.top):O.scrollTop(e,v.top+h.top):n||((i=void 0===i||!!i)?O.scrollTop(e,v.top+y.top):O.scrollTop(e,v.top+h.top)),r&&(y.left<0||h.left>0?!0===l?O.scrollLeft(e,v.left+y.left):!1===l?O.scrollLeft(e,v.left+h.left):y.left<0?O.scrollLeft(e,v.left+y.left):O.scrollLeft(e,v.left+h.left):n||((l=void 0===l||!!l)?O.scrollLeft(e,v.left+y.left):O.scrollLeft(e,v.left+h.left)))}export{T as s};