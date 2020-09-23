(function(t){function e(e){for(var n,i,u=e[0],d=e[1],c=e[2],s=0,f=[];s<u.length;s++)i=u[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);l&&l(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var d=o[i];0!==r[d]&&(n=!1)}n&&(a.splice(e--,1),t=u(u.s=o[0]))}return t}var n={},r={app:0},a=[];function i(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"57d2a3b0"}[t]+".js"}function u(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var a,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=i(t);var c=new Error;a=function(e){d.onerror=d.onload=null,clearTimeout(s);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",c.name="ChunkLoadError",c.type=n,c.request=a,o[1](c)}r[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:d})}),12e4);d.onerror=d.onload=a,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=n,u.d=function(t,e,o){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)u.d(o,n,function(e){return t[e]}.bind(null,n));return o},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=e,d=d.slice();for(var s=0;s<d.length;s++)e(d[s]);var l=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"38a0":function(t,e,o){"use strict";var n=o("7477"),r=o.n(n);r.a},5151:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("router-view")],1)},a=[],i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("Todo List")]),o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),o("router-link",{attrs:{to:"/about"}},[t._v("About")])],1)])},u=[],d={name:"Header"},c=d,s=(o("a35a"),o("2877")),l=Object(s["a"])(c,i,u,!1,null,"8212cdca",null),f=l.exports,p={name:"App",components:{Header:f}},m=p,v=(o("034f"),Object(s["a"])(m,r,a,!1,null,null,null)),h=v.exports,b=(o("d3b7"),o("8c4f")),_=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},y=[],g=(o("99af"),o("4de4"),o("2909")),T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},j=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-completed":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:function(e){t.$emit("del-todo"),t.todo.id}}},[t._v("x")])])])},w=[],x={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},k=x,P=(o("6d95"),Object(s["a"])(k,O,w,!1,null,"5ee3975c",null)),$=P.exports,E={name:"Todos",components:{TodoItem:$},props:["todos"]},A=E,C=Object(s["a"])(A,T,j,!1,null,"1f8bdf55",null),H=C.exports,S=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("form",{attrs:{autocomplete:"off"},on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{autocomplete:"off",type:"text",name:"title",placeholder:"Add Task"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])])},M=[],I=o("11c1"),L={name:"AddTask",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={id:Object(I["v4"])(),title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},J=L,q=(o("38a0"),Object(s["a"])(J,S,M,!1,null,"5e9178f3",null)),D=q.exports,N={name:"Home",components:{AddTodo:D,Todos:H},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!==t}))},addTodo:function(t){this.todos=[].concat(Object(g["a"])(this.todos),[t])}}},z=N,B=Object(s["a"])(z,_,y,!1,null,null,null),F=B.exports;n["a"].use(b["a"]);var G=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],K=new b["a"]({routes:G}),Q=K;n["a"].config.productionTip=!1,new n["a"]({router:Q,render:function(t){return t(h)}}).$mount("#app")},"6d95":function(t,e,o){"use strict";var n=o("5151"),r=o.n(n);r.a},7477:function(t,e,o){},"85ec":function(t,e,o){},a35a:function(t,e,o){"use strict";var n=o("b13f"),r=o.n(n);r.a},b13f:function(t,e,o){}});
//# sourceMappingURL=app.bd9b72cb.js.map