(this["webpackJsonpdeploy-github"]=this["webpackJsonpdeploy-github"]||[]).push([[10],{438:function(e,a,t){"use strict";t.r(a);var n=t(45),s=t(0),l=t.n(s),r=t(447),c=t(312),i=t(223),m=t(224),o=t(443),u=t(444),g=t(40),h=(t(238),t(21)),p=t(295);a.default=function(){var e=Object(h.e)(),a=Object(s.useState)(""),t=Object(n.a)(a,2),d=t[0],E=t[1],f=Object(s.useState)(""),v=Object(n.a)(f,2),b=v[0],k=v[1],w=Object(s.useState)(!1),y=Object(n.a)(w,2),N=y[0],O=y[1],j=function(e,a,t){r.a[e]({message:a,description:t})};return l.a.createElement("div",{className:"dv"},l.a.createElement(c.a,{tip:"Loading...",spinning:N},l.a.createElement(i.a,null,l.a.createElement(m.a,{span:12},l.a.createElement("div",{className:"dvFrmLogin"},l.a.createElement(o.a,{name:"normal_login",className:"login-form",initialValues:{remember:!0},onFinish:function(e){console.log("Success:",e)}},l.a.createElement(o.a.Item,null,l.a.createElement("div",{className:"frmTitle"}," \u0110\u0103ng nh\u1eadp")),l.a.createElement(o.a.Item,{name:"username",rules:[{required:!0,message:"Email kh\xf4ng \u0111\u01b0\u1ee3c tr\u1ed1ng"},{type:"email",message:"Email kh\xf4ng \u0111\xfang \u0111\u1ecbnh d\u1ea1ng"}],className:"input"},l.a.createElement(u.a,{size:"large",placeholder:"Email",style:{widows:220},onChange:function(e){E(e.target.value)}})),l.a.createElement(o.a.Item,{name:"password",rules:[{required:!0,message:"Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u"}]},l.a.createElement(u.a.Password,{size:"large",type:"password",placeholder:"Password",onChange:function(e){k(e.target.value)}}))," ",l.a.createElement(o.a.Item,null,l.a.createElement(g.a,{type:"primary",htmlType:"submit",className:"login-form-button",onClick:function(){O(!0);var a="http://localhost:3002/api/user/".concat(d,"/").concat(b);p.get(a).then((function(a){if(200==a.data.statusCode){O(!1),j("success","\u0110\u0103ng nh\u1eadp th\xe0nh c\xf4ng",""),e.push({pathname:"/home"});var t=[];t.push({email:d,password:b}),localStorage.setItem("email",JSON.stringify(t)),localStorage.setItem("show",!0)}else j("error","T\xe0i kho\u1ea3n ho\u1eb7c m\u1eadt kh\u1ea9u kh\xf4ng \u0111\xfang",""),O(!1)})).catch((function(e){j("error","L\u1ed7i server","Kh\xf4ng th\u1ec3 k\u1ebft n\u1ed1i t\u1edbi server"),O(!1)}))}},"Log in"))))),l.a.createElement(m.a,{span:12},l.a.createElement("div",{className:"dvBg"})))))}}}]);
//# sourceMappingURL=10.89a0d410.chunk.js.map