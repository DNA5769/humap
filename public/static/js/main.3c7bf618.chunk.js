(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(54),o=a.n(s),r=(a(63),a(8)),l=(a(64),a(34),a(17)),i=a(2);var u=function(e){return Object(i.jsx)("header",{className:"header-bar mt-1",children:Object(i.jsx)("h4",{className:"my-0 mr-md-auto font-weight-bold text-center",children:Object(i.jsx)(l.b,{to:"/",className:"text-white text-center",children:"Humap"})})})},d=a(9),j=a.n(d),p=a(16),m=a(15),b=a.n(m),h=Object(n.createContext)(),g=Object(n.createContext)();var x=function(e){var t=Object(n.useContext)(h),a=Object(n.useContext)(g),c=Object(n.useState)(),s=Object(r.a)(c,2),o=s[0],l=s[1],u=(Object(n.useRef)(null),Object(n.useState)("All")),d=Object(r.a)(u,2),m=d[0],x=d[1],O=Object(n.useState)([]),f=Object(r.a)(O,2),v=f[0],y=f[1],w=Object(n.useState)(1),N=Object(r.a)(w,2),C=N[0],k=N[1],I=Object(n.useRef)(null),S=Object(n.useState)(0),L=Object(r.a)(S,2),M=L[0],A=L[1];function D(){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("/get-posts?limit=3&page=".concat(C),{latitude:t.currLocation[1],longitude:t.currLocation[0],tag:m});case 3:a=e.sent,console.table(a.data),y(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("error getting posts",e.t0.response.data);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function P(){return F.apply(this,arguments)}function F(){return(F=Object(p.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.post("/get-posts-length",{latitude:t.currLocation[1],longitude:t.currLocation[0],tag:m});case 3:a=e.sent,A(a.data.length),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("error getting post count",e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}Object(n.useEffect)((function(){D()}),[C]),Object(n.useEffect)((function(){D(),P()}),[m]),Object(n.useEffect)((function(){t.currLocation!=t.location&&(D(),P())}),[t.currLocation]);var z=function(){var e=Object(p.a)(j.a.mark((function e(n){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,b.a.post("/create-comment",{userID:t.user.userID,postID:n.target.dataset.post,content:o});case 4:l(""),n.target.value="",console.log("comment created"),D(),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),a({type:"flashMessage",value:e.t0.response.data.error}),console.log(n.target.dataset.post),console.log("ERROR commenting",e.t0.response.data);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}();function T(e){return R.apply(this,arguments)}function R(){return(R=Object(p.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t.target.dataset.page);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}for(var B=[],H=1;H<=parseInt(M/3)+1;H++)B.push(Object(i.jsx)("li",{onClick:T,"data-page":H,className:"page-item",children:Object(i.jsx)("a",{"data-page":H,className:"page-link",href:"#",children:H})},H));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"container container--narrow py-md-4",children:[Object(i.jsx)("h2",{onClick:function(){return console.log(t.flashMessage)},className:"text-center text-white",children:"ACTIVITY NEAR YOU"})," ",Object(i.jsxs)("div",{className:"dropdown",children:[Object(i.jsx)("button",{style:{position:"absolute",right:0,bottom:"5px"},type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown",children:"Filter with tags"}),Object(i.jsx)("div",{className:"dropdown-menu",children:["All","Help Wanted","Announcement","Emergency","Complaint","Bored At Home","Looking For Alikes","Confessions","Recommendations","Miscellaneous"].map((function(e,t){return Object(i.jsx)("a",{onClick:function(){return x(e)},className:"dropdown-item"+(m==e?" active":""),href:"#",children:e},t)}))})]})," "]}),Object(i.jsx)("div",{className:"ml-2 list-group list-group-flush",id:"postscontainer",children:v.map((function(e,a){var n=new Date(e.createdAt),c="".concat(n.getDate(),"/").concat(n.getMonth()+1,"/").concat(n.getFullYear());return Object(i.jsxs)("div",{children:[Object(i.jsxs)("a",{href:"#",ref:I,"data-toggle":"collapse","data-target":"#id"+e.postID,className:"list-group-item post rounded",children:[Object(i.jsx)("img",{className:"avatar-tiny",src:e.isAnonymous?"https://st4.depositphotos.com/1000507/24488/v/600/depositphotos_244889634-stock-illustration-user-profile-picture-isolate-background.jpg":e.avatar}),Object(i.jsx)("strong",{className:"text-white",children:e.title})," ",Object(i.jsxs)("strong",{className:"text-white-50",children:["by ",e.isAnonymous?"anonymous":e.author," on ",c," "]}),Object(i.jsx)("span",{className:"tag",children:e.tag}),Object(i.jsxs)("div",{className:"body-content",children:[" ",e.content," "]}),Object(i.jsxs)("span",{className:"badge badge-primary badge-pill align-items-center",children:[Object(i.jsx)("i",{className:"fas fa-comment"})," ",e.comments.length]})]}),Object(i.jsxs)("div",{id:"id"+e.postID,className:"list-group collapse",children:[e.comments.map((function(e,t){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"list-group-item comment rounded",children:[Object(i.jsx)("strong",{children:e.author}),"  ",e.content]})},t)})),t.allowPost&&Object(i.jsx)("div",{className:"list-group-item comment rounded ",children:Object(i.jsxs)("form",{"data-post":e.postID,onSubmit:z,children:[Object(i.jsx)("input",{"data-post":e.postID,onChange:function(e){return l(e.target.value)},autoFocus:!0,name:"title",id:"commentInput",type:"text",placeholder:"Comment",autoComplete:"off"}),Object(i.jsx)("input",{type:"submit",name:"",value:"Comment",href:"#"})]})})]})]},a)}))}),Object(i.jsx)("div",{children:Object(i.jsxs)("ul",{className:"pagination justify-content-center",children:[Object(i.jsx)("li",{className:"page-item",children:Object(i.jsx)("a",{className:"page-link",href:"#",children:"Previous"})}),B,Object(i.jsx)("li",{className:"page-item",children:Object(i.jsx)("a",{className:"page-link",href:"#",children:"Next"})})]})})]})},O=a(33),f=a(32);var v=function(e){var t=Object(n.useContext)(h),a=Object(n.useContext)(g),c=Object(n.useState)({longitude:79.08886,latitude:21.146633,width:"33vw",height:"90vh",zoom:15}),s=Object(r.a)(c,2),o=s[0],l=s[1];return Object(n.useEffect)((function(){"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){a({type:"setLocation",value:[e.coords.longitude,e.coords.latitude]}),a({type:"setCurrLocation",value:[e.coords.longitude,e.coords.latitude]}),l({longitude:e.coords.longitude,latitude:e.coords.latitude,width:"100%",height:"90vh",zoom:15})}))}),[]),Object(i.jsx)("div",{children:Object(i.jsx)(f.b,Object(O.a)(Object(O.a)({className:"mt-1 mr-9 map"},o),{},{onDblClick:function(e){a({type:"setCurrLocation",value:e.lngLat}),console.table(t)},doubleClickZoom:!1,mapStyle:"mapbox://styles/dna5769/ckn4km6x31sob17nzox3gjzdz",onViewportChange:function(e){return l(e)},mapboxApiAccessToken:"pk.eyJ1IjoiZG5hNTc2OSIsImEiOiJja24zaXJzdG4xaHJuMnFwZnA4amc4a21jIn0.w2esHLkzt3LfxhQif-rm8w",children:Object(i.jsx)(f.a,{latitude:t.currLocation[1],longitude:t.currLocation[0],children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"currentColor",class:"bi bi-cursor",viewBox:"0 0 16 16",children:Object(i.jsx)("path",{d:"M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103zM2.25 8.184l3.897 1.67a.5.5 0 0 1 .262.263l1.67 3.897L12.743 3.52 2.25 8.184z"})})})}))})};var y=function(e){var t=Object(n.useContext)(g),a=(Object(n.useContext)(h),Object(n.useState)(!1)),c=Object(r.a)(a,2),s=c[0],o=c[1],l=Object(n.useRef)(null),u=Object(n.useState)(),d=Object(r.a)(u,2),m=d[0],x=d[1],O=Object(n.useState)(),f=Object(r.a)(O,2),v=f[0],y=f[1],w=Object(n.useState)(),N=Object(r.a)(w,2),C=N[0],k=N[1];function I(){return(I=Object(p.a)(j.a.mark((function e(a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,b.a.post("/create-user",{name:m,password:C,email:v});case 4:o(!0),t({type:"flashMessage",value:"You successfully created an account. Log in now."}),console.log("successfully created account"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"flashMessage",value:e.t0.response.data.error}),console.log(e.t0.response.data.error);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}Object(n.useEffect)((function(){l.current.focus()}),[s]);var S=function(){var e=Object(p.a)(j.a.mark((function e(a){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,b.a.post("/login-user",{email:v,password:C});case 4:n=e.sent,console.log(n),t({type:"Login",value:n.data}),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:"flashMessage",value:e.t0.response.data.error}),console.log(e.t0.response.data.error);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();function L(){console.log({username:m,password:C,email:v}),o((function(e){return!e}))}return Object(i.jsx)("div",{children:s?Object(i.jsx)("div",{className:"",children:Object(i.jsxs)("form",{style:{marginTop:"50px"},onSubmit:S,className:"box",children:[Object(i.jsx)("h1",{children:"Login"}),Object(i.jsx)("p",{className:"text-muted",children:" Please enter your login and password!"}),Object(i.jsx)("input",{autoFocus:!0,ref:l,onChange:function(e){return y(e.target.value)},type:"text",name:"",placeholder:"E-mail"}),Object(i.jsx)("input",{onChange:function(e){return k(e.target.value)},type:"password",name:"",placeholder:"Password"}),Object(i.jsx)("input",{type:"submit",name:"",value:"Login"}),Object(i.jsx)("a",{onClick:L,className:"forgot text-muted",href:"#",children:"Don't have an account? Sign Up"})]})}):Object(i.jsx)("div",{className:"",children:Object(i.jsxs)("form",{style:{marginTop:"30px"},onSubmit:function(e){return I.apply(this,arguments)},className:"box",children:[Object(i.jsx)("h1",{children:"Signup"}),Object(i.jsx)("p",{className:"text-muted",children:" Please enter your email, username and create a password!"}),Object(i.jsx)("input",{ref:l,onChange:function(e){return y(e.target.value)},type:"text",name:"",placeholder:"E-mail"}),Object(i.jsx)("input",{onChange:function(e){return k(e.target.value)},type:"password",name:"",placeholder:"Create password"}),Object(i.jsx)("a",{type:"text",name:"",placeholder:"E-mail"}),Object(i.jsx)("input",{autoFocus:!0,onChange:function(e){return x(e.target.value)},type:"text",name:"",placeholder:"Username"}),Object(i.jsx)("input",{type:"submit",name:"",value:"Signup"}),Object(i.jsx)("a",{onClick:L,className:"forgot text-muted",href:"#",children:"Already have an account? Log In"})]})})})},w=a(7);var N=Object(w.f)((function(e){var t=Object(n.useContext)(g),a=Object(n.useContext)(h);return Object(i.jsx)("div",{className:"sticky-top",children:Object(i.jsxs)("div",{className:"nav flex-column",children:[Object(i.jsx)(l.b,{to:"/create-post",className:"nav-link",children:Object(i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",fill:"#2ecc71",className:"bi bi-plus-circle plus",viewBox:"0 0 16 16",children:[Object(i.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(i.jsx)("path",{d:"M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"})]})}),Object(i.jsx)(l.b,{to:"/",className:"nav-link",children:Object(i.jsx)("img",{className:"avatar-small",src:a.user.avatar})}),Object(i.jsx)("a",{onClick:function(){return t({type:"Logout"})},href:"#_",className:"nav-link",children:Object(i.jsx)("i",{className:"fa fa-sign-out-alt fa-lg pl-2",style:{color:"#c62b28"},"aria-hidden":"true"})})]})})}));var C=Object(w.f)((function(e){var t=Object(n.useState)(),a=Object(r.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(),l=Object(r.a)(o,2),u=l[0],d=l[1],m=Object(n.useState)(),x=Object(r.a)(m,2),O=x[0],f=x[1],v=Object(n.useState)(!1),y=Object(r.a)(v,2),w=y[0],N=y[1],C=Object(n.useContext)(g),k=Object(n.useContext)(h);function I(){return(I=Object(p.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,b.a.post("/create-post",{title:c,content:u,latitude:k.location[1],longitude:k.location[0],tag:O,isAnonymous:w,userID:k.user.userID});case 4:C({type:"flashMessage",value:"Congo, You created a post"}),e.history.push("/"),console.log("POST CREATED"),console.log({title:c,content:u,tag:O,isAnonymous:w}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(1),C({type:"flashMessage",value:t.t0.response.data.error}),console.log(t.t0.response.data);case 14:case"end":return t.stop()}}),t,null,[[1,10]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){console.log(O)}),[O]),Object(n.useEffect)((function(){k.allowPost||(e.history.push("/"),C({type:"flashMessage",value:"Post not allowed outside zone"}))}),[k.allowPost]),Object(i.jsx)("div",{className:"d-flex h-100 justify-content-center align-items-center",children:Object(i.jsxs)("form",{className:"createpost",onSubmit:function(e){return I.apply(this,arguments)},children:[Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"post-title",className:"text-muted mb-1",children:Object(i.jsx)("small",{children:"Title"})}),Object(i.jsx)("input",{onChange:function(e){return s(e.target.value)},autoFocus:!0,name:"title",id:"post-title",className:"form-control-title",type:"text",placeholder:"",autoComplete:"off"})]}),Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{htmlFor:"post-body",className:"text-muted mb-1 d-block",children:Object(i.jsx)("small",{children:"Body Content"})}),Object(i.jsx)("textarea",{style:{height:"20vh"},onChange:function(e){return d(e.target.value)},name:"body",id:"post-body",className:"body-content",type:"text"})]}),Object(i.jsxs)("label",{class:"form-check-label text-white",children:[Object(i.jsx)("input",{onClick:function(e){N(e.target.checked)},type:"checkbox",class:"form-check-input",value:""}),"Do you want this posted Anonymously?"]}),Object(i.jsxs)("div",{className:"dropdown dropright ",children:[Object(i.jsx)("button",{type:"button",className:"btn btn-primary dropdown-toggle","data-toggle":"dropdown",children:"Tag"}),Object(i.jsx)("div",{className:"dropdown-menu dropdown-menu-right tagmenu",children:["Help Wanted","Announcement","Emergency","Complaint","Bored At Home","Looking For Alikes","Confessions","Recommendations","Miscellaneous"].map((function(e,t){return Object(i.jsx)("a",{onClick:function(){return f(e)},className:"dropdown-item"+(O==e?" active":""),href:"#",children:e},t)}))})]}),Object(i.jsx)("div",{className:"text-white-50 mb-2",children:Object(i.jsxs)("small",{children:["Pro Tip: You can use the"," ",Object(i.jsx)("a",{target:"_blank",href:"https://www.markdownguide.org/cheat-sheet/",children:"Markdown syntax"})," ","to format your body."]})}),Object(i.jsx)("button",{type:"submit",className:"btn btn-primary pt-2",children:"Post"})]})})}));var k=function(e){var t=Object(n.useContext)(h);return Object(n.useContext)(g),Object(n.useEffect)((function(){console.log(t.loggedIn)}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container-fluid",id:"Home",children:Object(i.jsxs)("div",{className:"row",children:[Object(i.jsx)("div",{className:"col-4",children:Object(i.jsx)(v,{})}),Object(i.jsx)("div",{className:"col-7",children:Object(i.jsxs)(w.c,{children:[Object(i.jsx)(w.a,{exact:!0,path:"/",children:t.loggedIn?Object(i.jsx)(x,{}):Object(i.jsx)(y,{})}),Object(i.jsx)(w.a,{path:"/create-post",children:Object(i.jsx)(C,{})})]})}),t.loggedIn&&Object(i.jsx)("div",{className:"d-flex align-items-center justify-content-end col-1",id:"sidebar",children:Object(i.jsx)(N,{})})]})})})},I=a(58);var S=function(e){var t=Object(n.useContext)(h);return Object(i.jsx)("div",{className:"floating-alerts",children:t.flashMessage.map((function(e,t){return Object(i.jsx)("div",{className:"floating-alert text-centre alert shadow-sm alert-info",children:e},t)}))})};b.a.defaults.baseURL="https://humap-app.herokuapp.com/api";var L=function(e){var t={user:{name:localStorage.getItem("name"),email:localStorage.getItem("email"),avatar:localStorage.getItem("avatar"),userID:localStorage.getItem("userID")},flashMessage:[],loggedIn:Boolean(localStorage.getItem("name")),location:[79.08886,21.146633],currLocation:[79.08886,21.146633],allowPost:!0},a=Object(I.a)((function(e,t){switch(t.type){case"Login":return e.loggedIn=!0,void(e.user=t.value);case"flashMessage":return void e.flashMessage.push(t.value);case"Logout":return void(e.loggedIn=!1);case"setLocation":return void(e.location=t.value);case"setCurrLocation":return void(e.currLocation=t.value);case"setAllowPost":return void(e.allowPost=t.value)}}),t),c=Object(r.a)(a,2),s=c[0],o=c[1];return Object(n.useEffect)((function(){s.loggedIn?(localStorage.setItem("email",s.user.email),localStorage.setItem("avatar",s.user.avatar),localStorage.setItem("name",s.user.name),localStorage.setItem("userID",s.user.userID)):(localStorage.removeItem("email"),localStorage.removeItem("avatar"),localStorage.removeItem("name"),localStorage.removeItem("userID"))}),[s.loggedIn]),Object(n.useEffect)((function(){var e=Math.PI/180,t=.5-Math.cos((s.currLocation[1]-s.location[1])*e)/2+Math.cos(s.location[1]*e)*Math.cos(s.currLocation[1]*e)*(1-Math.cos((s.currLocation[0]-s.location[0])*e))/2,a=12742*Math.asin(Math.sqrt(t));o({type:"setAllowPost",value:a<2}),a>2&&o({type:"flashMessage",value:"You moved outside your zone, commenting/posting disabled now"})}),[s.currLocation]),Object(i.jsx)(h.Provider,{value:s,children:Object(i.jsx)(g.Provider,{value:o,children:Object(i.jsxs)(l.a,{children:[Object(i.jsx)(S,{}),Object(i.jsx)(u,{}),Object(i.jsx)(k,{})]})})})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,108)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),s(e),o(e)}))};a(105);o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(L,{})}),document.getElementById("root")),M()},63:function(e,t,a){},64:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.3c7bf618.chunk.js.map