(this["webpackJsonpdeploy-github"]=this["webpackJsonpdeploy-github"]||[]).push([[8],{251:function(e){e.exports=JSON.parse('[{"name":"D\u1ef1 \xe1n Kim Nguy\xean","code":"KN"},{"name":"D\u1ef1 \xe1n Kim Th\xe0nh","code":"KT"},{"name":"D\u1ef1 \xe1n M\u1ef9 \u0110\u1ee9c","code":"M\u0110"},{"name":"D\u1ef1 \xe1n V\u0103n Tung","code":"VT"},{"name":"D\u1ef1 \xe1n  Thanh Thanh","code":"TT"},{"name":"D\u1ef1 \xe1n  Tung","code":"T"},{"name":"D\u1ef1 \xe1n  Thi\xean Thanh","code":"TTT"},{"name":"D\u1ef1 \xe1n  Kim V\u0103n","code":"KV"},{"name":"D\u1ef1 \xe1n  M\xe3 Th\u0103ng","code":"MT"},{"name":"D\u1ef1 \xe1n  La Th\xe0nh","code":"LT"},{"name":"D\u1ef1 \xe1n  Minh T\xedn","code":"MT"},{"name":"D\u1ef1 \xe1n  QWR","code":"QWR"},{"name":"D\u1ef1 \xe1n  ETB","code":"ETB"}]')},436:function(e,a,t){"use strict";t.r(a);var n=t(278),r=t(287),c=t(279),l=t.n(c),o=t(280),i=t(281),s=t(250),d=t(288),u=t(44),m=t(0),f=t.n(m),p=t(439),h=t(286),b=t(441),g=t(443),v=t(222),y=t(223),O=t(438),j=t(437),T=t(39),E=t(20),S=(t(233),t(87),t(251)),D=t(252),k=t.n(D);a.default=function(){var e=p.a.useForm(),a=Object(u.a)(e,1)[0],t=h.a.Option,c=Object(E.f)().id,D=JSON.parse(localStorage.getItem("data")),x=Object(m.useState)([]),I=Object(u.a)(x,2),w=I[0],C=I[1],N=Object(m.useState)([]),M=Object(u.a)(N,2),V=(M[0],M[1],Object(m.useState)(D.filter((function(e){return e.key==c}))[0].dataSource)),Y=Object(u.a)(V,2),J=Y[0],K=Y[1],F=Object(m.useState)(!1),B=Object(u.a)(F,2);B[0],B[1];D.map((function(e){if(1==e.key)return e}));var L=f.a.createContext(),R=function(e){var a=Object(r.a)(J),t=a.findIndex((function(a){return e.key===a.key})),n=a[t];a.splice(t,1,Object(o.a)({},n,{},e)),console.log(a),K(a)};var q={wrapperCol:{offset:4,span:20}};var P=function(e,a,t){g.a[e]({message:a,description:t})};var A={body:{row:function(e){e.index;var a=Object(d.a)(e,["index"]),t=p.a.useForm(),n=Object(u.a)(t,1)[0];return f.a.createElement(p.a,{form:n,component:!1},f.a.createElement(L.Provider,{value:n},f.a.createElement("tr",a)))},cell:function(e){var a=e.title,t=e.editable,n=e.children,r=e.dataIndex,c=e.record,h=e.handleSave,g=Object(d.a)(e,["title","editable","children","dataIndex","record","handleSave"]),v=Object(m.useState)(!1),y=Object(u.a)(v,2),O=y[0],j=y[1],T=Object(m.useRef)(),E=Object(m.useContext)(L);Object(m.useEffect)((function(){O&&T.current.focus()}),[O]);var S=function(){j(!O),E.setFieldsValue(Object(s.a)({},r,c[r]))},D=function(){var e=Object(i.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.validateFields();case 3:t=e.sent,S(),h(Object(o.a)({},c,{},t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),k=n;return t&&(k=O?f.a.createElement(p.a.Item,{style:{margin:0},name:r,rules:[{required:!0,message:"".concat(a," is required.")}]},f.a.createElement(b.a,{defaultValue:100,min:1,max:100,formatter:function(e){return"".concat(e,"%")},parser:function(e){return e.replace("%","")},ref:T,onPressEnter:D,onBlur:D})):f.a.createElement("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:S},n)),f.a.createElement("td",g,k)}}},Q=[{title:"T\xean d\u1ef1 \xe1n",dataIndex:"name",editable:!1},{title:"Ti\u1ebfn \u0111\u1ed9 trong ng\xe0y (%)",width:"20%",dataIndex:"age",editable:!0}].map((function(e){return e.editable?Object(o.a)({},e,{onCell:function(a){return{record:a,editable:e.editable,dataIndex:e.dataIndex,title:e.title,handleSave:R}}}):e}));return f.a.createElement("div",{className:"dv"},f.a.createElement(v.a,null,f.a.createElement(y.a,{span:12},f.a.createElement("div",{className:"dvFrm"},f.a.createElement("h2",null,"Ch\u1ec9nh s\u1eeda th\xf4ng tin b\xe1o c\xe1o"),f.a.createElement(p.a,Object.assign({},{labelCol:{span:4},wrapperCol:{span:20}},{form:a}),f.a.createElement(p.a.Item,Object.assign({name:"date"},q,{label:"Ng\xe0y"}),f.a.createElement(O.a,{disabled:!0,format:"DD/MM/YYYY",disabledDate:function(e){return e&&e>k()().endOf("day")},style:{width:"100%"},onChange:function(e,a){C(a)},defaultValue:k()(D.filter((function(e){return e.key==c}))[0].date,"DD/MM/YYYY")}))," ",f.a.createElement(p.a.Item,Object.assign({},q,{label:"D\u1ef1 \xe1n",name:"select"}),f.a.createElement(h.a,{mode:"multiple",style:{width:"100%"},placeholder:"select one project",defaultValue:D.filter((function(e){return e.key==c}))[0].proArray,onChange:function(e){K([]),function(e){var a,t=[],r=Object(n.a)(e);try{for(r.s();!(a=r.n()).done;){var c=a.value;t.push({key:c,name:c,age:1}),t.map((function(e){for(var a=0;a<J.length;a++)console.log(),e.name==J[a].name&&(console.log("chay"),e.age=J[a].age)})),K(t)}}catch(l){r.e(l)}finally{r.f()}}(e)},optionLabelProp:"label"},S.map((function(e){return f.a.createElement(t,{key:e.name},f.a.createElement("div",{className:"demo-option-label-item"},e.name))})))),f.a.createElement(j.a,{components:A,rowClassName:function(){return"editable-row"},bordered:!0,scroll:{y:450},dataSource:J,columns:Q,style:{width:"100%"}}),f.a.createElement(p.a.Item,q,f.a.createElement(T.a,{style:{marginLeft:"40%",marginTop:20,width:220},className:"input",type:"primary",htmlType:"submit",onClick:function(){for(var e=[],a="",t=[],n=(localStorage.getItem("data"),0),r=(JSON.parse(localStorage.getItem("email")),0);r<J.length;r++)a+=J[r].name+" - "+J[r].age+"%, ",n+=J[r].age,t.push(J[r].name);if(""!==w)if(0!==J.length)if(n<100)P("error","T\u1ed5ng ti\u1ebfn \u0111\u1ed9 trong ng\xe0y ph\u1ea3i \u0111\u1ea1t 100% ","");else if(n>100)P("error","T\u1ed5ng ti\u1ebfn \u0111\u1ed9 kh\xf4ng \u0111\u01b0\u1ee3c v\u01b0\u1ee3t qu\xe1 100%","");else{for(var l=JSON.parse(localStorage.getItem("data")),o=0;o<l.length;o++)e.push(l[o]);e.map((function(e){e.key==c&&(e.projectHistory=a,e.dataSource=J,e.proArray=t)})),P("success","C\u1eadp nh\u1eadt th\xe0nh c\xf4ng",""),localStorage.setItem("data",JSON.stringify(e))}else P("error","Ch\u01b0a ch\u1ecdn d\u1ef1 \xe1n c\u1ea7n b\xe1o c\xe1o","")}},"C\u1eadp nh\u1eadt b\xe1o c\xe1o"))))),f.a.createElement(y.a,{span:12},f.a.createElement("div",{className:"dvBg"}))))}}}]);
//# sourceMappingURL=8.cab7140b.chunk.js.map