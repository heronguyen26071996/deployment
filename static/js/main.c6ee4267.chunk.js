(this["webpackJsonpdeploy-github"]=this["webpackJsonpdeploy-github"]||[]).push([[4],{135:function(e,n,t){e.exports=t(220)},145:function(e,n,t){},220:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),l=t(2),r=t.n(l),c=(t(87),t(36)),i=t(44),u=t(20),m=t(95),d=t(7),f=t.n(d),g=(t(223),t(226)),p=t(224),h=t(225),s=(t(132),t(145),t(38)),v=(t(146),t(148),t(37)),b=t.n(v),E=function(){return o.a.createElement("div",null,"Loading...")},x=b()({loader:function(){return Promise.all([t.e(0),t.e(2),t.e(7),t.e(11)]).then(t.bind(null,434))},loading:E}),w=b()({loader:function(){return t.e(10).then(t.bind(null,435))},loading:E}),y=b()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(9)]).then(t.bind(null,436))},loading:E}),k=b()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(12)]).then(t.bind(null,443))},loading:E}),O=b()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(8)]).then(t.bind(null,437))},loading:E}),j=[{path:"/home",exact:!0,main:function(){return o.a.createElement(w,null)}},{path:"/add",exact:!0,main:function(){return o.a.createElement(y,null)}},{path:"/login",exact:!0,main:function(){return o.a.createElement(x,null)}},{path:"/view",exact:!0,main:function(){return o.a.createElement(k,null)}},{path:"/edt/:id",exact:!0,main:function(){return o.a.createElement(O,null)}}];function N(){var e=Object(c.a)(["\n    float: left;\n    width: 100%;\n    padding: 10px 20px;\n    background-color: #225cc3;\n  "]);return N=function(){return e},e}function S(){var e=Object(c.a)(["\n   font-size: 1.2em;\n    line-height: 20px;\n  position: fixed;\n  margin-bottom: 10px;\n    margin-left: 70px;\n  bottom: 0;\n  display:","\n"]);return S=function(){return e},e}function T(){var e=Object(c.a)(["\n    font-size: 1em;\n    line-height: 20px;\n    padding-bottom: 4px;\n  "]);return T=function(){return e},e}function I(){var e=Object(c.a)(["\n    font-size: 1.5em;\n    line-height: 20px;\n    padding: 10px 0;\n  "]);return I=function(){return e},e}function P(){var e=Object(c.a)(["\n    display: ",";\n    white-space: nowrap;\n    background-color: #225cc3;\n    color: #fff;\n\n    > * {\n      color: inherit;\n      background-color: inherit;\n    }\n  "]);return P=function(){return e},e}var B=function(){var e=Object(a.useState)(!1),n=Object(i.a)(e,2),t=n[0],l=n[1],r=Object(a.useState)(80),c=Object(i.a)(r,2),v=c[0],b=c[1],E=Object(a.useState)("add"),x=Object(i.a)(E,2),w=(x[0],x[1]),y=Object(a.useState)("none"),k=Object(i.a)(y,2),O=k[0],B=k[1],K=s.a.div(P(),(function(e){return e.expanded?"block":"none"})),z=s.a.div(I()),C=s.a.div(T()),J=s.a.div(S(),O);console.log(window.location.pathname.split("/")[1]);var L=s.a.div(N());return o.a.createElement(m.a,null,o.a.createElement(u.a,{render:function(e){var n=e.location,a=e.history;return o.a.createElement(o.a.Fragment,null,o.a.createElement(f.a,{style:{display:"/login"==window.location.pathname?"none":"block"},expanded:t,onToggle:function(e){l(e),e?(B("block"),b(250)):(B("none"),b(80))},onSelect:function(e){w(e),console.log(e);var t="/"+e;"login"===e&&g.a.confirm({title:"\u0110\u0103ng xu\u1ea5t",content:"B\u1ea1n c\xf3 mu\u1ed1n \u0111\u0103ng xu\u1ea5t hay kh\xf4ng ? ...",okText:"C\xf3",cancelText:"Kh\xf4ng",cancelButtonProps:{type:"danger"},onOk:function(){window.location.pathname="/login"},onCancel:function(){}}),n.pathname!==t&&"login"!=e&&a.push(t)}},o.a.createElement(f.a.Toggle,null),o.a.createElement(K,{expanded:t},o.a.createElement(z,null,"Side Navigation"),o.a.createElement(C,null,"Styled Side Navigation")),t&&o.a.createElement(L,null),o.a.createElement(J,null,"Version 2020"),o.a.createElement(f.a.Nav,{defaultSelected:window.location.pathname.split("/")[1]},o.a.createElement(d.NavItem,{eventKey:"add"},o.a.createElement(d.NavIcon,null),o.a.createElement(d.NavText,null,"Th\xeam b\xe1o c\xe1o c\xf4ng vi\u1ec7c")),o.a.createElement(d.NavItem,{eventKey:"view"},o.a.createElement(d.NavIcon,null),o.a.createElement(d.NavText,null,"Xem b\xe1o c\xe1o c\xf4ng vi\u1ec7c")),o.a.createElement(d.NavItem,{eventKey:"login"},o.a.createElement(d.NavIcon,null),o.a.createElement(d.NavText,null,"\u0110\u0103ng xu\u1ea5t"))))," ",o.a.createElement("main",{style:{marginLeft:v}},o.a.createElement(p.a,null,o.a.createElement(h.a,{span:24})),function(e){var n=null;return e.length>0&&(n=e.map((function(e,n){return o.a.createElement(u.a,{key:n,path:e.path,exact:e.exact,component:e.main})}))),n}(j)))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},87:function(e,n,t){}},[[135,5,6]]]);
//# sourceMappingURL=main.c6ee4267.chunk.js.map