(this["webpackJsonpdeploy-github"]=this["webpackJsonpdeploy-github"]||[]).push([[10],{114:function(e){e.exports=JSON.parse('[{"name":"D\u1ef1 \xe1n Kim Nguy\xean","code":"KN"},{"name":"D\u1ef1 \xe1n Kim Th\xe0nh","code":"KT"},{"name":"D\u1ef1 \xe1n M\u1ef9 \u0110\u1ee9c","code":"M\u0110"},{"name":"D\u1ef1 \xe1n V\u0103n Tung","code":"VT"},{"name":"D\u1ef1 \xe1n  Thanh Thanh","code":"TT"},{"name":"D\u1ef1 \xe1n  Tung","code":"T"},{"name":"D\u1ef1 \xe1n  Thi\xean Thanh","code":"TTT"},{"name":"D\u1ef1 \xe1n  Kim V\u0103n","code":"KV"},{"name":"D\u1ef1 \xe1n  M\xe3 Th\u0103ng","code":"MT"},{"name":"D\u1ef1 \xe1n  La Th\xe0nh","code":"LT"},{"name":"D\u1ef1 \xe1n  Minh T\xedn","code":"MT"},{"name":"D\u1ef1 \xe1n  QWR","code":"QWR"},{"name":"D\u1ef1 \xe1n  ETB","code":"ETB"}]')},409:function(e,a,t){"use strict";t.r(a);var n=t(110),r=t(130),c=t(111),l=t.n(c),o=t(112),i=t(113),s=t(58),m=t(131),d=t(129),u=t(0),p=t.n(u),h=t(412),f=t(184),g=t(402),b=t(415),v=t(407),y=t(408),O=t(400),T=t(411),j=t(50),E=(t(63),t(114)),S=t(59),D=t.n(S);a.default=function(){var e=h.a.useForm(),a=Object(d.a)(e,1)[0],t=f.a.Option,c=Object(u.useState)(""),S=Object(d.a)(c,2),x=S[0],I=S[1],w=Object(u.useState)([]),N=Object(d.a)(w,2),k=N[0],C=N[1],M=Object(u.useState)(!1),F=Object(d.a)(M,2),J=(F[0],F[1],p.a.createContext()),K=function(e){var a=Object(r.a)(k),t=a.findIndex((function(a){return e.key===a.key})),n=a[t];a.splice(t,1,Object(o.a)({},n,{},e)),console.log(a),C(a)};var V={wrapperCol:{offset:4,span:20}};var q=function(e,a,t){b.a[e]({message:a,description:t})};var B={body:{row:function(e){e.index;var a=Object(m.a)(e,["index"]),t=h.a.useForm(),n=Object(d.a)(t,1)[0];return p.a.createElement(h.a,{form:n,component:!1},p.a.createElement(J.Provider,{value:n},p.a.createElement("tr",a)))},cell:function(e){var a=e.title,t=e.editable,n=e.children,r=e.dataIndex,c=e.record,f=e.handleSave,b=Object(m.a)(e,["title","editable","children","dataIndex","record","handleSave"]),v=Object(u.useState)(!1),y=Object(d.a)(v,2),O=y[0],T=y[1],j=Object(u.useRef)(),E=Object(u.useContext)(J);Object(u.useEffect)((function(){O&&j.current.focus()}),[O]);var S=function(){T(!O),E.setFieldsValue(Object(s.a)({},r,c[r]))},D=function(){var e=Object(i.a)(l.a.mark((function e(a){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.validateFields();case 3:t=e.sent,S(),f(Object(o.a)({},c,{},t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log("Save failed:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(a){return e.apply(this,arguments)}}(),x=n;return t&&(x=O?p.a.createElement(h.a.Item,{style:{margin:0},name:r,rules:[{required:!0,message:"".concat(a," is required.")}]},p.a.createElement(g.a,{defaultValue:100,min:1,max:100,formatter:function(e){return"".concat(e,"%")},parser:function(e){return e.replace("%","")},ref:j,onPressEnter:D,onBlur:D})):p.a.createElement("div",{className:"editable-cell-value-wrap",style:{paddingRight:24},onClick:S},n)),p.a.createElement("td",b,x)}}},L=[{title:"T\xean d\u1ef1 \xe1n",dataIndex:"name",editable:!1},{title:"Ti\u1ebfn \u0111\xf4 (%)",width:"30%",dataIndex:"age",editable:!0}].map((function(e){return e.editable?Object(o.a)({},e,{onCell:function(a){return{record:a,editable:e.editable,dataIndex:e.dataIndex,title:e.title,handleSave:K}}}):e}));return p.a.createElement("div",{className:"dv"},p.a.createElement(v.a,null,p.a.createElement(y.a,{span:12},p.a.createElement("div",{className:"dvFrm"},p.a.createElement("h2",null,"Th\xeam b\xe1o c\xe1o c\xf4ng vi\u1ec7c"),p.a.createElement(h.a,Object.assign({},{labelCol:{span:4},wrapperCol:{span:20}},{form:a}),p.a.createElement(h.a.Item,Object.assign({name:"date"},V,{label:"Ng\xe0y"},{rules:[{type:"object",required:!0,message:"Please select time!"}]}),p.a.createElement(O.a,{format:"DD/MM/YYYY",disabledDate:function(e){return e&&e>D()().endOf("day")},style:{width:"100%"},onChange:function(e,a){I(a)}}))," ",p.a.createElement(h.a.Item,Object.assign({},V,{label:"D\u1ef1 \xe1n",name:"select"}),p.a.createElement(f.a,{mode:"multiple",style:{width:"100%"},placeholder:"select one project",onChange:function(e){C([]),function(e){var a=[],t=100/e.length>>0;if(console.log(t),1===e.length){var r,c=Object(n.a)(e);try{for(c.s();!(r=c.n()).done;){var l=r.value;a.push({key:l,name:l,age:100}),C(a)}}catch(m){c.e(m)}finally{c.f()}}else{var o,i=Object(n.a)(e);try{for(i.s();!(o=i.n()).done;){var s=o.value;a.push({key:s,name:s,age:t})}}catch(m){i.e(m)}finally{i.f()}a.map((function(n,r){r===a.length-1&&(n.age=100-t*e.length+n.age)})),C(a)}}(e)},optionLabelProp:"label"},E.map((function(e){return p.a.createElement(t,{key:e.name},p.a.createElement("div",{className:"demo-option-label-item"},e.name))})))),p.a.createElement(T.a,{components:B,rowClassName:function(){return"editable-row"},bordered:!0,scroll:{y:450},dataSource:k,columns:L,style:{width:"100%"}}),p.a.createElement(h.a.Item,V,p.a.createElement(j.a,{style:{marginLeft:"40%",marginTop:20,width:220},className:"input",type:"primary",htmlType:"submit",onClick:function(){for(var e=[],t=[],n="",r=localStorage.getItem("data"),c=0,l=JSON.parse(localStorage.getItem("email")),o=0;o<k.length;o++)n+=k[o].name+" - "+k[o].age+"%, ",c+=k[o].age,t.push(k[o].name);if(""!==x)if(0!==k.length)if(c<100)q("error","T\u1ed5ng ti\u1ebfn \u0111\u1ed9 trong ng\xe0y ph\u1ea3i \u0111\u1ea1t 100% ","");else if(c>100)q("error","T\u1ed5ng ti\u1ebfn \u0111\u1ed9 kh\xf4ng \u0111\u01b0\u1ee3c v\u01b0\u1ee3t qu\xe1 100%","");else if(null!=r){for(var i=JSON.parse(localStorage.getItem("data")),s=0;s<i.length;s++)e.push(i[s]);for(var m=0;m<e.length;m++)if(x===e[m].date&&l[0].email===e[m].reporter)return console.log("trung"),void q("error","D\u1eef li\u1ec7u \u0111\xe3 t\u1ed3n t\u1ea1i","");e.push({key:e.length+1,date:x,projectHistory:n,reporter:l[0].email,reportername:l[0].name,dataSource:k,proArray:t}),localStorage.setItem("data",JSON.stringify(e)),q("success","Th\xeam m\u1edbi th\xe0nh c\xf4ng",""),I(""),a.resetFields(),C([])}else e.push({key:1,date:x,projectHistory:n,reporter:l[0].email,reportername:l[0].name,dataSource:k,proArray:t}),q("success","Th\xeam m\u1edbi th\xe0nh c\xf4ng",""),I(""),a.resetFields(),localStorage.setItem("data",JSON.stringify(e)),C([]);else q("error","Ch\u01b0a ch\u1ecdn d\u1ef1 \xe1n c\u1ea7n b\xe1o c\xe1o","")}},"T\u1ea1o b\xe1o c\xe1o"))))),p.a.createElement(y.a,{span:12},p.a.createElement("div",{className:"dvBg"}))))}}}]);
//# sourceMappingURL=10.82e8b206.chunk.js.map