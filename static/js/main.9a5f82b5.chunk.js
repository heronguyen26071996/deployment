(this["webpackJsonpdeploy-github"]=this["webpackJsonpdeploy-github"]||[]).push([[4],{136:function(e,n,t){e.exports=t(218)},218:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),o=t(2),c=t.n(o),r=t(37),i=t(45),u=t(21),m=t(97),d=t(7),s=t.n(d),f=(t(222),t(225)),g=t(223),p=t(224),h=t(226),v=t(227),E=t(228),b=t(229),x=t(38),w=(t(146),t(148),t(49)),y=t.n(w),k=function(){return l.a.createElement("div",null,"Loading...")},O=y()({loader:function(){return Promise.all([t.e(0),t.e(2),t.e(7),t.e(10)]).then(t.bind(null,438))},loading:k}),j=y()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(9)]).then(t.bind(null,439))},loading:k}),N=y()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(11)]).then(t.bind(null,446))},loading:k}),S=y()({loader:function(){return Promise.all([t.e(0),t.e(1),t.e(2),t.e(3),t.e(8)]).then(t.bind(null,440))},loading:k}),T=[{path:"/add",exact:!0,main:function(){return l.a.createElement(j,null)}},{path:"/login",exact:!0,main:function(){return l.a.createElement(O,null)}},{path:"/view",exact:!0,main:function(){return l.a.createElement(N,null)}},{path:"/edt/:id",exact:!0,main:function(){return l.a.createElement(S,null)}}];function I(){var e=Object(r.a)(["\n    float: left;\n    width: 100%;\n    padding: 10px 20px;\n    background-color: #225cc3;\n  "]);return I=function(){return e},e}function z(){var e=Object(r.a)(["\n   font-size: 1.2em;\n    line-height: 20px;\n  position: fixed;\n  margin-bottom: 10px;\n    margin-left: 70px;\n  bottom: 0;\n  display:","\n"]);return z=function(){return e},e}function P(){var e=Object(r.a)(["\n    font-size: 1em;\n    line-height: 20px;\n    padding-bottom: 4px;\n  "]);return P=function(){return e},e}function B(){var e=Object(r.a)(["\n    font-size: 1.5em;\n    line-height: 20px;\n    padding: 10px 0;\n  "]);return B=function(){return e},e}function K(){var e=Object(r.a)(["\n    display: ",";\n    white-space: nowrap;\n    background-color: #225cc3;\n    color: #fff;\n\n    > * {\n      color: inherit;\n      background-color: inherit;\n    }\n  "]);return K=function(){return e},e}var C=function(){var e=Object(a.useState)(!1),n=Object(i.a)(e,2),t=n[0],o=n[1],c=Object(a.useState)(80),r=Object(i.a)(c,2),w=r[0],y=r[1],k=Object(a.useState)("add"),O=Object(i.a)(k,2),j=(O[0],O[1]),N=Object(a.useState)("none"),S=Object(i.a)(N,2),C=S[0],J=S[1],L=x.a.div(K(),(function(e){return e.expanded?"block":"none"})),W=x.a.div(B()),F=x.a.div(P()),M=x.a.div(z(),C);console.log(window.location.pathname.split("/")[1]);var V=x.a.div(I());return l.a.createElement("div",{className:"dvModal"},l.a.createElement(m.a,null,l.a.createElement(u.a,{render:function(e){var n=e.location,a=e.history;return l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{style:{display:"/login"==window.location.pathname?"none":"block"},expanded:t,onToggle:function(e){o(e),e?(J("block"),y(250)):(J("none"),y(80))},onSelect:function(e){j(e),console.log(e);var t="/"+e;"login"===e&&f.a.confirm({title:"\u0110\u0103ng xu\u1ea5t",icon:l.a.createElement(h.a,null),content:"B\u1ea1n c\xf3 mu\u1ed1n \u0111\u0103ng xu\u1ea5t hay kh\xf4ng ? ...",okText:"C\xf3",cancelText:"Kh\xf4ng",cancelButtonProps:{type:"danger"},onOk:function(){window.location.pathname="/login"},onCancel:function(){}}),n.pathname!==t&&"login"!=e&&a.push(t)}},l.a.createElement(s.a.Toggle,null),l.a.createElement(L,{expanded:t},l.a.createElement(W,null,"Side Navigation"),l.a.createElement(F,null,"Styled Side Navigation")),t&&l.a.createElement(V,null),l.a.createElement(M,null,"Version 2020"),l.a.createElement(s.a.Nav,{defaultSelected:window.location.pathname.split("/")[1]},l.a.createElement(d.NavItem,{eventKey:"add"},l.a.createElement(d.NavIcon,null,l.a.createElement(v.a,{style:{fontSize:"1.25em"}})),l.a.createElement(d.NavText,null,"Th\xeam b\xe1o c\xe1o c\xf4ng vi\u1ec7c")),l.a.createElement(d.NavItem,{eventKey:"view"},l.a.createElement(d.NavIcon,null,l.a.createElement(E.a,{style:{fontSize:"1.25em"}})),l.a.createElement(d.NavText,null,"Xem b\xe1o c\xe1o c\xf4ng vi\u1ec7c")),l.a.createElement(d.NavItem,{eventKey:"login"},l.a.createElement(d.NavIcon,null,l.a.createElement(b.a,{style:{fontSize:"1.25em"}})),l.a.createElement(d.NavText,null,"\u0110\u0103ng xu\u1ea5t"))))," ",l.a.createElement("main",{style:{marginLeft:w}},l.a.createElement(g.a,null,l.a.createElement(p.a,{span:24})),function(e){var n=null;return e.length>0&&(n=e.map((function(e,n){return l.a.createElement(u.a,{key:n,path:e.path,exact:e.exact,component:e.main})}))),n}(T)))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[136,5,6]]]);
//# sourceMappingURL=main.9a5f82b5.chunk.js.map