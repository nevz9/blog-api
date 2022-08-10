"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[586],{857:function(t,e,n){n.d(e,{Z:function(){return i}});var r="Spinner_spinner__Z6H3Z",o=n(184);function i(){return(0,o.jsx)("div",{className:r,children:(0,o.jsx)("div",{})})}},6196:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(2791),o=n(5579);function i(){var t=r.useContext(o.i);if(!t)throw new Error("useCMS can only be used inside a CMSProvider");return t}},6587:function(t,e,n){n.d(e,{Z:function(){return i}});var r=n(885),o=n(2791);function i(){var t=o.useState(2),e=(0,r.Z)(t,2),n=e[0],i=e[1];return{loadMoreHandler:o.useCallback((function(t){var e=t.cb,r=t.postId,o=t.tag;o?e(n,o):r?e(n,r):e(n),i(n+1)}),[n]),pageCount:n,setPageCount:i}}},9586:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(8214),o=n(5861),i=n(885),a=n(2791),s=n(9647),c=n(6871),u=n(6196),d=n(6587),l=n(857),f=n(7259),p=n(184);function h(t){var e=t.post,n=t.deletePost,s=a.useState(!1),u=(0,i.Z)(s,2),d=u[0],h=u[1],g=(0,c.s0)(),v=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(){return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return h(!0),t.next=3,n(e._id);case 3:h(!1);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,p.jsxs)("div",{className:f.Z["post-card"],children:[(0,p.jsx)("h4",{children:e.title}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Tag:"})," ",e.tag]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Created at:"})," ",e.formattedDate]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Status:"})," ",e.published?"Published":"Draft"]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("strong",{children:"Comments:"})," ",e.commentCount]}),(0,p.jsxs)("div",{className:f.Z.buttons,children:[e.published&&(0,p.jsx)("button",{type:"button",onClick:function(){return g("/posts/".concat(e._id))},children:"View post"}),(0,p.jsx)("button",{type:"button",onClick:function(){return g("".concat(e._id,"/edit"))},children:"Edit Post"}),(0,p.jsx)("button",{type:"button",onClick:v,disabled:d,children:d?(0,p.jsx)(l.Z,{}):"Delete Post"})]})]})}function g(t){var e=t.posts,n=t.deletePost,r=(0,s.u)(),o=(0,i.Z)(r,1)[0];return(0,p.jsxs)("div",{ref:o,className:f.Z["card-list"],children:[!e.length&&(0,p.jsx)("div",{style:{textAlign:"center",fontSize:"3rem"},children:"No posts"}),e.map((function(t){return(0,p.jsx)(h,{post:t,deletePost:n},t._id)}))]})}function v(){var t=(0,u.Z)(),e=t.documents,n=t.deletePost,r=t.loadPost,o=(0,d.Z)(),i=o.pageCount,a=o.loadMoreHandler;return(0,p.jsxs)("div",{children:[(0,p.jsx)(g,{posts:e.posts,deletePost:n}),e.posts.length&&e.posts.length%(10*(i-1))===0?(0,p.jsx)("button",{className:f.Z["load-more"],type:"button",onClick:function(){return a({cb:r})},children:"Load more"}):""]})}},7259:function(t,e){e.Z={cms:"CMS_cms__AqUK-","card-list":"CMS_card-list__77+OO","post-card":"CMS_post-card__Y2axW",buttons:"CMS_buttons__u0fj-","load-more":"CMS_load-more__D4jPz"}},9647:function(t,e,n){n.d(e,{u:function(){return k}});var r,o,i,a=n(2791),s=n(1413),c=n(885),u=new Set,d=new WeakMap,l=new WeakMap,f=new WeakMap,p=new WeakMap,h=new WeakMap,g=new WeakMap,v=new WeakMap,m="__aa_tgt",b="__aa_del";function x(t){clearTimeout(v.get(t));var e=Z(t),n="function"===typeof e?500:e.duration;v.set(t,setTimeout((function(){var e=f.get(t);e&&!e.finished||(d.set(t,_(t)),function(t){var e=p.get(t);null===e||void 0===e||e.disconnect();var n=d.get(t),o=0;n||(n=_(t),d.set(t,n));var i=r,a=i.offsetWidth,s=i.offsetHeight,c=[n.top-5,a-(n.left+5+n.width),s-(n.top+5+n.height),n.left-5].map((function(t){return"".concat(-1*Math.floor(t),"px")})).join(" "),u=new IntersectionObserver((function(){++o>1&&x(t)}),{root:r,threshold:1,rootMargin:c});u.observe(t),p.set(t,u)}(t))}),n))}function w(t){setTimeout((function(){h.set(t,setInterval((function(){return y(x.bind(null,t))}),2e3))}),Math.round(2e3*Math.random()))}function y(t){"function"===typeof requestIdleCallback?requestIdleCallback((function(){return t()})):requestAnimationFrame((function(){return t()}))}function j(t,e){e||m in t?e&&!(m in e)&&Object.defineProperty(e,m,{value:t}):Object.defineProperty(t,m,{value:t})}function C(t){return Number(t.replace(/[^0-9.\-]/g,""))}function _(t){var e=t.getBoundingClientRect();return{top:e.top+window.scrollY,left:e.left+window.scrollX,width:e.width,height:e.height}}function M(t,e,n){var r=e.width,o=e.height,i=n.width,a=n.height,s=getComputedStyle(t);if("content-box"===s.getPropertyValue("box-sizing")){var c=C(s.paddingTop)+C(s.paddingBottom)+C(s.borderTopWidth)+C(s.borderBottomWidth),u=C(s.paddingLeft)+C(s.paddingRight)+C(s.borderRightWidth)+C(s.borderLeftWidth);r-=u,i-=u,o-=c,a-=c}return[r,i,o,a].map(Math.round)}function Z(t){return m in t&&g.has(t[m])?g.get(t[m]):{duration:250,easing:"ease-in-out"}}function E(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];n.forEach((function(e){return e(t,g.has(t))}));for(var o=function(e){var r=t.children.item(e);r&&n.forEach((function(t){return t(r,g.has(r))}))},i=0;i<t.children.length;i++)o(i)}function S(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o&&i){var n=window.matchMedia("(prefers-reduced-motion: reduce)");if(n.matches)return;"static"===getComputedStyle(t).position&&Object.assign(t.style,{position:"relative"}),E(t,x,w,(function(t){return null===i||void 0===i?void 0:i.observe(t)})),"function"===typeof e?g.set(t,e):g.set(t,(0,s.Z)({duration:250,easing:"ease-in-out"},e)),o.observe(t,{childList:!0}),u.add(t)}}"undefined"!==typeof window&&(r=document.documentElement,o=new MutationObserver((function(t){var e=function(t){return t.reduce((function(t,e){if(!1===t)return!1;if(e.target instanceof Element){if(j(e.target),!t.has(e.target)){t.add(e.target);for(var n=0;n<e.target.children.length;n++){var r=e.target.children.item(n);if(r){if(b in r)return!1;j(e.target,r),t.add(r)}}}if(e.removedNodes.length)for(var o=0;o<e.removedNodes.length;o++){var i=e.removedNodes[o];if(b in i)return!1;i instanceof Element&&(t.add(i),j(e.target,i),l.set(i,[e.previousSibling,e.nextSibling]))}}return t}),new Set)}(t);e&&e.forEach((function(t){return function(t){var e,n=r.contains(t),o=d.has(t);n&&l.has(t)&&l.delete(t),f.has(t)&&(null===(e=f.get(t))||void 0===e||e.cancel()),o&&n?function(t){var e,n=d.get(t),r=_(t);if(n){var o=Z(t);if("function"!==typeof o){var i=n.left-r.left,a=n.top-r.top,s=M(t,n,r),u=(0,c.Z)(s,4),l=u[0],p=u[1],h=u[2],g=u[3],v={transform:"translate(".concat(i,"px, ").concat(a,"px)")},m={transform:"translate(0, 0)"};l!==p&&(v.width="".concat(l,"px"),m.width="".concat(p,"px")),h!==g&&(v.height="".concat(h,"px"),m.height="".concat(g,"px")),e=t.animate([v,m],o)}else(e=new Animation(o(t,"remain",n,r))).play();f.set(t,e),d.set(t,r),e.addEventListener("finish",x.bind(null,t))}}(t):o&&!n?function(t){if(l.has(t)&&d.has(t)){var e=l.get(t),n=(0,c.Z)(e,2),r=n[0],o=n[1];Object.defineProperty(t,b,{value:!0}),o&&o.parentNode&&o.parentNode instanceof Element?o.parentNode.insertBefore(t,o):r&&r.parentNode&&r.parentNode.appendChild(t);var i,a=function(t){for(var e=d.get(t),n=M(t,e,_(t)),r=(0,c.Z)(n,3),o=r[0],i=r[2],a=t.parentElement;a&&("static"===getComputedStyle(a).position||a instanceof HTMLBodyElement);)a=a.parentElement;a||(a=document.body);var s=getComputedStyle(a),u=d.get(a)||_(a);return[Math.round(e.top-u.top)-C(s.borderTopWidth),Math.round(e.left-u.left)-C(s.borderLeftWidth),o,i]}(t),s=(0,c.Z)(a,4),u=s[0],h=s[1],g=s[2],v=s[3],m=Z(t),x=d.get(t);Object.assign(t.style,{position:"absolute",top:"".concat(u,"px"),left:"".concat(h,"px"),width:"".concat(g,"px"),height:"".concat(v,"px"),margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),"function"!==typeof m?i=t.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:m.duration,easing:"ease-out"}):(i=new Animation(m(t,"remove",x))).play(),f.set(t,i),i.addEventListener("finish",(function(){var e;t.remove(),d.delete(t),l.delete(t),f.delete(t),null===(e=p.get(t))||void 0===e||e.disconnect()}))}}(t):function(t){var e=_(t);d.set(t,e);var n,r=Z(t);"function"!==typeof r?n=t.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:1.5*r.duration,easing:"ease-in"}):(n=new Animation(r(t,"add",e))).play(),f.set(t,n),n.addEventListener("finish",x.bind(null,t))}(t)}(t)}))})),(i=new ResizeObserver((function(t){t.forEach((function(t){t.target===r&&(clearTimeout(v.get(r)),v.set(r,setTimeout((function(){u.forEach((function(t){return E(t,(function(t){return y((function(){return x(t)}))}))}))}),100))),d.has(t.target)&&x(t.target)}))}))).observe(r));function k(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(0,a.useRef)(null);return(0,a.useEffect)((function(){e.current instanceof HTMLElement&&S(e.current,t)}),[e]),[e]}}}]);
//# sourceMappingURL=586.3d984027.chunk.js.map