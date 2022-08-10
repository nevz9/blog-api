"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[304],{7940:function(e,t,n){n.d(t,{K:function(){return i}});n(2791);var r=n(184);function i(e){var t=e.id,n=e.name,i=e.value,o=e.onChange;return(0,r.jsx)("textarea",{id:t,name:n,value:i,onChange:o})}},4304:function(e,t,n){n.d(t,{NI:function(){return l},II:function(){return s},ZP:function(){return c}});n(2791);var r=n(857),i="Form_form__e1yzW",o="Form_label-text__-KdfF",a="Form_error-message__pIAv9",u=n(184);function c(e){var t=e.children,n=e.onSubmit,o=e.isLoading,a=e.customButtons;return(0,u.jsxs)("form",{onSubmit:n,className:i,children:[t,!a&&(0,u.jsx)("button",{type:"submit",disabled:o,children:o?(0,u.jsx)(r.Z,{}):"Submit"})]})}function s(e){var t=e.type,n=e.id,r=e.name,i=e.value,o=e.onChange,a=e.required;return(0,u.jsx)("input",{type:t,id:n,name:r,value:i,onChange:o,required:a})}var d=n(885),f=n(9647);function l(e){var t,n=e.children,r=e.id,i=e.label,c=e.errors,s=void 0===c?[]:c,l=(0,f.u)(),h=(0,d.Z)(l,1)[0],p=null===(t=s.find((function(e){return e.param===r})))||void 0===t?void 0:t.msg;return(0,u.jsxs)("label",{htmlFor:r,ref:h,children:[(0,u.jsx)("p",{className:o,children:i}),n,p&&(0,u.jsx)("p",{className:a,children:p})]})}n(7940)},857:function(e,t,n){n.d(t,{Z:function(){return o}});var r="Spinner_spinner__Z6H3Z",i=n(184);function o(){return(0,i.jsx)("div",{className:r,children:(0,i.jsx)("div",{})})}},2954:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(4942),i=n(1413),o=n(885),a=n(2791);function u(e){var t=a.useState(e),n=(0,o.Z)(t,2),u=n[0],c=n[1],s=a.useState([]),d=(0,o.Z)(s,2);return{formValues:u,errors:d[0],changeHandler:function(e){var t=e.target,n=t.name,o=t.value,a=t.files;c((function(e){return(0,i.Z)((0,i.Z)({},e),{},(0,r.Z)({},n,"image"===n?null===a||void 0===a?void 0:a[0]:o))}))},setErrors:d[1],setFormValues:c}}},5534:function(e,t){t.Z={signup:"Auth_signup__5tlRG",signin:"Auth_signin__MqQGy","image-container":"Auth_image-container__0e4N5"}},9647:function(e,t,n){n.d(t,{u:function(){return C}});var r,i,o,a=n(2791),u=n(1413),c=n(885),s=new Set,d=new WeakMap,f=new WeakMap,l=new WeakMap,h=new WeakMap,p=new WeakMap,v=new WeakMap,g=new WeakMap,m="__aa_tgt",b="__aa_del";function w(e){clearTimeout(g.get(e));var t=j(e),n="function"===typeof t?500:t.duration;g.set(e,setTimeout((function(){var t=l.get(e);t&&!t.finished||(d.set(e,M(e)),function(e){var t=h.get(e);null===t||void 0===t||t.disconnect();var n=d.get(e),i=0;n||(n=M(e),d.set(e,n));var o=r,a=o.offsetWidth,u=o.offsetHeight,c=[n.top-5,a-(n.left+5+n.width),u-(n.top+5+n.height),n.left-5].map((function(e){return"".concat(-1*Math.floor(e),"px")})).join(" "),s=new IntersectionObserver((function(){++i>1&&w(e)}),{root:r,threshold:1,rootMargin:c});s.observe(e),h.set(e,s)}(e))}),n))}function y(e){setTimeout((function(){p.set(e,setInterval((function(){return x(w.bind(null,e))}),2e3))}),Math.round(2e3*Math.random()))}function x(e){"function"===typeof requestIdleCallback?requestIdleCallback((function(){return e()})):requestAnimationFrame((function(){return e()}))}function _(e,t){t||m in e?t&&!(m in t)&&Object.defineProperty(t,m,{value:e}):Object.defineProperty(e,m,{value:e})}function E(e){return Number(e.replace(/[^0-9.\-]/g,""))}function M(e){var t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function Z(e,t,n){var r=t.width,i=t.height,o=n.width,a=n.height,u=getComputedStyle(e);if("content-box"===u.getPropertyValue("box-sizing")){var c=E(u.paddingTop)+E(u.paddingBottom)+E(u.borderTopWidth)+E(u.borderBottomWidth),s=E(u.paddingLeft)+E(u.paddingRight)+E(u.borderRightWidth)+E(u.borderLeftWidth);r-=s,o-=s,i-=c,a-=c}return[r,o,i,a].map(Math.round)}function j(e){return m in e&&v.has(e[m])?v.get(e[m]):{duration:250,easing:"ease-in-out"}}function N(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];n.forEach((function(t){return t(e,v.has(e))}));for(var i=function(t){var r=e.children.item(t);r&&n.forEach((function(e){return e(r,v.has(r))}))},o=0;o<e.children.length;o++)i(o)}function W(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(i&&o){var n=window.matchMedia("(prefers-reduced-motion: reduce)");if(n.matches)return;"static"===getComputedStyle(e).position&&Object.assign(e.style,{position:"relative"}),N(e,w,y,(function(e){return null===o||void 0===o?void 0:o.observe(e)})),"function"===typeof t?v.set(e,t):v.set(e,(0,u.Z)({duration:250,easing:"ease-in-out"},t)),i.observe(e,{childList:!0}),s.add(e)}}"undefined"!==typeof window&&(r=document.documentElement,i=new MutationObserver((function(e){var t=function(e){return e.reduce((function(e,t){if(!1===e)return!1;if(t.target instanceof Element){if(_(t.target),!e.has(t.target)){e.add(t.target);for(var n=0;n<t.target.children.length;n++){var r=t.target.children.item(n);if(r){if(b in r)return!1;_(t.target,r),e.add(r)}}}if(t.removedNodes.length)for(var i=0;i<t.removedNodes.length;i++){var o=t.removedNodes[i];if(b in o)return!1;o instanceof Element&&(e.add(o),_(t.target,o),f.set(o,[t.previousSibling,t.nextSibling]))}}return e}),new Set)}(e);t&&t.forEach((function(e){return function(e){var t,n=r.contains(e),i=d.has(e);n&&f.has(e)&&f.delete(e),l.has(e)&&(null===(t=l.get(e))||void 0===t||t.cancel()),i&&n?function(e){var t,n=d.get(e),r=M(e);if(n){var i=j(e);if("function"!==typeof i){var o=n.left-r.left,a=n.top-r.top,u=Z(e,n,r),s=(0,c.Z)(u,4),f=s[0],h=s[1],p=s[2],v=s[3],g={transform:"translate(".concat(o,"px, ").concat(a,"px)")},m={transform:"translate(0, 0)"};f!==h&&(g.width="".concat(f,"px"),m.width="".concat(h,"px")),p!==v&&(g.height="".concat(p,"px"),m.height="".concat(v,"px")),t=e.animate([g,m],i)}else(t=new Animation(i(e,"remain",n,r))).play();l.set(e,t),d.set(e,r),t.addEventListener("finish",w.bind(null,e))}}(e):i&&!n?function(e){if(f.has(e)&&d.has(e)){var t=f.get(e),n=(0,c.Z)(t,2),r=n[0],i=n[1];Object.defineProperty(e,b,{value:!0}),i&&i.parentNode&&i.parentNode instanceof Element?i.parentNode.insertBefore(e,i):r&&r.parentNode&&r.parentNode.appendChild(e);var o,a=function(e){for(var t=d.get(e),n=Z(e,t,M(e)),r=(0,c.Z)(n,3),i=r[0],o=r[2],a=e.parentElement;a&&("static"===getComputedStyle(a).position||a instanceof HTMLBodyElement);)a=a.parentElement;a||(a=document.body);var u=getComputedStyle(a),s=d.get(a)||M(a);return[Math.round(t.top-s.top)-E(u.borderTopWidth),Math.round(t.left-s.left)-E(u.borderLeftWidth),i,o]}(e),u=(0,c.Z)(a,4),s=u[0],p=u[1],v=u[2],g=u[3],m=j(e),w=d.get(e);Object.assign(e.style,{position:"absolute",top:"".concat(s,"px"),left:"".concat(p,"px"),width:"".concat(v,"px"),height:"".concat(g,"px"),margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!==typeof m?o=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:m.duration,easing:"ease-out"}):(o=new Animation(m(e,"remove",w))).play(),l.set(e,o),o.addEventListener("finish",(function(){var t;e.remove(),d.delete(e),f.delete(e),l.delete(e),null===(t=h.get(e))||void 0===t||t.disconnect()}))}}(e):function(e){var t=M(e);d.set(e,t);var n,r=j(e);"function"!==typeof r?n=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*r.duration,easing:"ease-in"}):(n=new Animation(r(e,"add",t))).play(),l.set(e,n),n.addEventListener("finish",w.bind(null,e))}(e)}(e)}))})),(o=new ResizeObserver((function(e){e.forEach((function(e){e.target===r&&(clearTimeout(g.get(r)),g.set(r,setTimeout((function(){s.forEach((function(e){return N(e,(function(e){return x((function(){return w(e)}))}))}))}),100))),d.has(e.target)&&w(e.target)}))}))).observe(r));function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,a.useRef)(null);return(0,a.useEffect)((function(){t.current instanceof HTMLElement&&W(t.current,e)}),[t]),[t]}}}]);
//# sourceMappingURL=304.b3151c5f.chunk.js.map