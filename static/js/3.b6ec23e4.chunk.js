(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[3],{291:function(e,t,a){},292:function(e,t,a){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__1zvp6",item:"ProfileInfo_item__3h63g"}},293:function(e,t,a){e.exports=a.p+"static/media/defaultAvatar.7adfc976.gif"},294:function(e,t,a){e.exports={item:"MyPosts_item__33two",postsBlock:"MyPosts_postsBlock__3IJvT",posts:"MyPosts_posts__A7hv0"}},295:function(e,t,a){e.exports={item:"Post_item__23TEc"}},296:function(e,t,a){"use strict";a.r(t);var s=a(34),n=a(35),r=a(39),o=a(37),u=a(0),i=a.n(u),l=(a(291),a(292)),c=a.n(l),p=a(64),m=a(293),d=a.n(m),f=a(127),h=function(e){var t=Object(u.useState)(!1),a=Object(f.a)(t,2),s=a[0],n=a[1],r=Object(u.useState)(e.status),o=Object(f.a)(r,2),l=o[0],c=o[1];Object(u.useEffect)((function(){c(e.status)}),[e.status]);return i.a.createElement("div",null,!s&&i.a.createElement("div",null,i.a.createElement("span",{onDoubleClick:function(){n(!0)}},e.status||"This I'am")),s&&i.a.createElement("div",null,i.a.createElement("input",{onChange:function(e){c(e.currentTarget.value)},autoFocus:!0,onBlur:function(){n(!1),e.updateStatus(l)},value:l})))},v=function(e){var t=e.profile,a=e.status,s=e.updateStatus;if(!t)return i.a.createElement(p.a,null);var n=t.photos.small?t.photos.large:d.a;return i.a.createElement("div",null,i.a.createElement("div",{className:c.a.descriptionBlock},i.a.createElement("img",{src:n}),i.a.createElement(h,{status:a,updateStatus:s})))},E=a(94),b=a(38),g=a(294),j=a.n(g),k=a(295),P=a.n(k),_=function(e){var t=e.message,a=e.likesCount;return i.a.createElement("div",{className:P.a.item},i.a.createElement("img",{src:"https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg",alt:""}),t,i.a.createElement("div",null,i.a.createElement("span",null,"like ",a)))},O=a(86),S=a(126),I=a(83),y=a(32),x=i.a.memo((function(e){console.log("RENDER");var t=Object(b.a)(e.posts).reverse().map((function(e){return i.a.createElement(_,{id:e.id,key:e.id,message:e.message,likesCount:e.likesCount})}));return i.a.createElement("div",{className:j.a.postsBlock},i.a.createElement("h3",null,"My posts"),i.a.createElement(w,{onSubmit:function(t){e.addPost(t.newPostText)}}),i.a.createElement("div",{className:j.a.posts},t))})),B=Object(I.a)(10),w=Object(S.a)({form:"ProfileAddNewPostForm"})((function(e){return i.a.createElement("form",{onSubmit:e.handleSubmit},i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement(O.a,{name:"newPostText",component:y.b,placeholder:"Post message",validate:[I.b,B]})),i.a.createElement("div",null,i.a.createElement("button",null,"Add post"))))})),A=x,C=a(16),N=Object(C.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(Object(E.a)(t))}}}))(A),T=function(e){var t=e.profile,a=e.status,s=e.updateStatus;return i.a.createElement("div",null,i.a.createElement(v,{profile:t,status:a,updateStatus:s}),i.a.createElement(N,null))},U=a(10),z=a(8),M=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=+this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),e?(this.props.getUserProfile(e),this.props.getStatus(e)):console.error("ID should exist in URI params or in state('authorizedUzerId ')")}},{key:"render",value:function(){return i.a.createElement(T,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}]),a}(i.a.Component);t.default=Object(z.d)(Object(C.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:E.d,getStatus:E.c,updateStatus:E.e}),U.f)(M)}}]);
//# sourceMappingURL=3.b6ec23e4.chunk.js.map