"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[305,835],{8344:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(5983),a=(n(2791),n(5486)),o=n(4304),s=n(857),i="CMSForm_buttons__s1gOo",u=n(184),l={height:500,menubar:!1,plugins:"codesample",toolbar:"undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | codesample",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:18px }"};function d(e){var t=e.formValues,n=e.submitHandler,d=e.isLoading,c=e.isRequired,m=e.errors,f=e.changeHandler,p=e.editorValue,h=e.setEditorValue;return(0,u.jsxs)(o.ZP,{customButtons:!0,onSubmit:n,isLoading:d,children:[(0,u.jsx)(o.NI,{id:"title",label:"Post Title",errors:m,children:(0,u.jsx)(o.II,{type:"text",name:"title",id:"title",value:t.title,onChange:f})}),(0,u.jsx)(o.NI,{id:"tag",label:"Post Tag",errors:m,children:(0,u.jsx)(o.II,{type:"text",name:"tag",id:"tag",value:t.tag,onChange:f})}),(0,u.jsx)(o.NI,{id:"image",label:"Post Image",errors:m,children:(0,u.jsx)(o.II,{type:"file",name:"image",id:"image",onChange:f,required:c})}),(0,u.jsx)(o.NI,{id:"body",label:"Post Body",errors:m,children:(0,u.jsx)(r.M,{apiKey:a.O,value:p,onEditorChange:h,init:l,id:"body"})}),(0,u.jsxs)("div",{className:i,children:[(0,u.jsx)("button",{type:"submit",name:"draft",value:"false",disabled:d,children:d?(0,u.jsx)(s.Z,{}):"Save as Draft"}),(0,u.jsx)("button",{type:"submit",name:"publish",value:"true",disabled:d,children:d?(0,u.jsx)(s.Z,{}):"Publish Post"})]})]})}},7940:function(e,t,n){n.d(t,{K:function(){return a}});n(2791);var r=n(184);function a(e){var t=e.id,n=e.name,a=e.value,o=e.onChange;return(0,r.jsx)("textarea",{id:t,name:n,value:a,onChange:o})}},4304:function(e,t,n){n.d(t,{NI:function(){return m},II:function(){return l},ZP:function(){return u}});n(2791);var r=n(857),a="Form_form__e1yzW",o="Form_label-text__-KdfF",s="Form_error-message__pIAv9",i=n(184);function u(e){var t=e.children,n=e.onSubmit,o=e.isLoading,s=e.customButtons;return(0,i.jsxs)("form",{onSubmit:n,className:a,children:[t,!s&&(0,i.jsx)("button",{type:"submit",disabled:o,children:o?(0,i.jsx)(r.Z,{}):"Submit"})]})}function l(e){var t=e.type,n=e.id,r=e.name,a=e.value,o=e.onChange,s=e.required;return(0,i.jsx)("input",{type:t,id:n,name:r,value:a,onChange:o,required:s})}var d=n(885),c=n(9647);function m(e){var t,n=e.children,r=e.id,a=e.label,u=e.errors,l=void 0===u?[]:u,m=(0,c.u)(),f=(0,d.Z)(m,1)[0],p=null===(t=l.find((function(e){return e.param===r})))||void 0===t?void 0:t.msg;return(0,i.jsxs)("label",{htmlFor:r,ref:f,children:[(0,i.jsx)("p",{className:o,children:a}),n,p&&(0,i.jsx)("p",{className:s,children:p})]})}n(7940)},5340:function(e,t,n){n.d(t,{$:function(){return d}});var r=n(2791),a=n(8214),o=n(5861),s=n(6196),i=n(7069),u=n(184),l=r.memo((function(e){var t=e.comment,n=e.isAuthor,r=e.postId,l=(0,s.Z)().deleteComment,d=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(r,t._id);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:i.Z["comment-box"],children:[(0,u.jsxs)("div",{className:i.Z["comment-box__header"],children:[(0,u.jsx)("h4",{children:t.user.username}),(0,u.jsx)("span",{children:t.formattedDate})]}),(0,u.jsx)("p",{children:t.text}),n&&(0,u.jsx)("div",{children:(0,u.jsx)("button",{type:"button",onClick:d,className:i.Z["delete-button"],children:"Delete"})})]})})),d=r.memo((function(e){var t=e.comments,n=e.isAuthor,r=e.postId;return(0,u.jsx)(u.Fragment,{children:t.map((function(e){return(0,u.jsx)(l,{comment:e,isAuthor:n,postId:r},e._id)}))})}))},857:function(e,t,n){n.d(t,{Z:function(){return o}});var r="Spinner_spinner__Z6H3Z",a=n(184);function o(){return(0,a.jsx)("div",{className:r,children:(0,a.jsx)("div",{})})}},6196:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(2791),a=n(5579);function o(){var e=r.useContext(a.i);if(!e)throw new Error("useCMS can only be used inside a CMSProvider");return e}},2954:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(4942),a=n(1413),o=n(885),s=n(2791);function i(e){var t=s.useState(e),n=(0,o.Z)(t,2),i=n[0],u=n[1],l=s.useState([]),d=(0,o.Z)(l,2);return{formValues:i,errors:d[0],changeHandler:function(e){var t=e.target,n=t.name,o=t.value,s=t.files;u((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,r.Z)({},n,"image"===n?null===s||void 0===s?void 0:s[0]:o))}))},setErrors:d[1],setFormValues:u}}},6587:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(885),a=n(2791);function o(){var e=a.useState(2),t=(0,r.Z)(e,2),n=t[0],o=t[1];return{loadMoreHandler:a.useCallback((function(e){var t=e.cb,r=e.postId,a=e.tag;a?t(n,a):r?t(n,r):t(n),o(n+1)}),[n]),pageCount:n,setPageCount:o}}},8305:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r=n(8214),a=n(5861),o=n(885),s=n(2791),i=n(6871),u=n(9647),l=n(2954),d=n(6196),c=n(3397),m=n(5340),f=n(8344),p=n(7259),h=n(6587),v=n(184),b={title:"",tag:"",image:""};function x(){var e=(0,d.Z)(),t=e.documents.post,n=e.getPost,x=e.editPost,g=e.loadComments,_=(0,i.s0)(),j=(0,i.UO)().postId,Z=(0,h.Z)(),C=Z.loadMoreHandler,y=Z.pageCount,I=(0,u.u)(),S=(0,o.Z)(I,1)[0],P=s.useState(""),N=(0,o.Z)(P,2),w=N[0],M=N[1],k=s.useState(!1),F=(0,o.Z)(k,2),V=F[0],D=F[1],H=(0,l.Z)(b),E=H.formValues,A=H.setFormValues,q=H.changeHandler,L=H.errors,O=H.setErrors,z=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(t){var a,o,s,i,u;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),a=t.nativeEvent,o=a.submitter,s=o.value,(i=new FormData).append("body",w),i.append("title",E.title),i.append("tag",E.tag),i.append("published",s),i.append("image",E.image),D(!0),e.next=13,x(i,j);case 13:if(u=e.sent,D(!1),!u.data.errors){e.next=17;break}return e.abrupt("return",O(u.data.errors));case 17:return e.next=19,n(j);case 19:_("/cms"),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),O((0,c.Z)(e.t0));case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t){return e.apply(this,arguments)}}();return s.useEffect((function(){n(j)}),[]),s.useEffect((function(){t&&(M(t.body),A({title:t.title,tag:t.tag,image:""}))}),[t]),(0,v.jsxs)("div",{className:p.Z["edit-post"],children:[(0,v.jsx)(f.Z,{formValues:E,submitHandler:z,changeHandler:q,isLoading:V,errors:L,editorValue:w,setEditorValue:M}),(0,v.jsxs)("div",{ref:S,children:[(0,v.jsx)("h4",{children:"Comments"}),null!==t&&void 0!==t&&t.comments.length?(0,v.jsx)(m.$,{comments:t.comments,isAuthor:!0,postId:j}):(0,v.jsx)("p",{children:"There are no comments on this blog post"})]}),null!==t&&void 0!==t&&t.comments.length&&t.comments.length%(10*(y-1))===0?(0,v.jsx)("button",{className:p.Z["load-more"],type:"button",onClick:function(){return C({cb:g,postId:j})},children:"Load more"}):""]})}},3397:function(e,t,n){n.d(t,{Z:function(){return o}});var r="User does not exist",a="Invalid Password";function o(e){switch(e.response.data.message){case r:return[{param:"email",msg:r}];case a:return[{param:"password",msg:a}];default:return[]}}},7069:function(e,t){t.Z={"comment-box":"PostDetailComment_comment-box__1Qm4a","comment-box__header":"PostDetailComment_comment-box__header__yTINb","load-more":"PostDetailComment_load-more__sI0bC","delete-button":"PostDetailComment_delete-button__zVgF3"}},7259:function(e,t){t.Z={cms:"CMS_cms__AqUK-","card-list":"CMS_card-list__77+OO","post-card":"CMS_post-card__Y2axW",buttons:"CMS_buttons__u0fj-","load-more":"CMS_load-more__D4jPz",sidebar:"CMS_sidebar__S-PtC"}}}]);
//# sourceMappingURL=305.43352c8a.chunk.js.map