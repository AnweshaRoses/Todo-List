(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(6),o=n.n(s),l=(n(12),n(3)),r=n(7),i=(n(13),n(0)),b=function(){return Object(i.jsx)("footer",{className:"bg-dark text-light py-3",children:Object(i.jsx)("p",{className:"text-center ",children:"Copyright \xa9 AnweshaRoses.com"})})};function d(e){return Object(i.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(i.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(i.jsx)("span",{className:"navbar-toggler-icon"})}),Object(i.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(i.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(i.jsx)("li",{className:"nav-item",children:Object(i.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})})})]})})}var j=function(e){var t=e.todo,n=e.onDelete;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("h4",{children:t.title}),Object(i.jsx)("p",{children:t.desc}),Object(i.jsx)("button",{className:"btn btn-sm btn-danger",onClick:function(){n(t)},children:"Delete"})]}),Object(i.jsx)("hr",{})]})},u=function(e){return Object(i.jsxs)("div",{className:"container my-3",style:{minHeight:"70vh",margin:"40px auto"},children:[Object(i.jsx)("h3",{className:" my-3",children:"To-Do List"}),0===e.todos.length?"No To-Dos to Display":e.todos.map((function(t){return Object(i.jsx)(j,{todo:t,onDelete:e.onDelete},t.sno)}))]})},m=function(e){var t=e.addTodo,n=Object(a.useState)(""),c=Object(l.a)(n,2),s=c[0],o=c[1],r=Object(a.useState)(""),b=Object(l.a)(r,2),d=b[0],j=b[1];return Object(i.jsxs)("div",{className:"container my-3",children:[Object(i.jsx)("h3",{children:"Add a Todo"}),Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s?(t(s,d),o(""),j("")):alert("Title cannot be blank")},children:[Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"title",className:"form-label",children:"Title"}),Object(i.jsx)("input",{type:"text",value:s,onChange:function(e){o(e.target.value)},className:"form-control",id:"title","aria-describedby":"emailHelp"})]}),Object(i.jsxs)("div",{className:"mb-3",children:[Object(i.jsx)("label",{htmlFor:"desc",className:"form-label",children:"Description"}),Object(i.jsx)("input",{type:"text",value:d,onChange:function(e){j(e.target.value)},className:"form-control",id:"desc"})]}),Object(i.jsx)("button",{type:"submit",className:"btn btn-sm btn-success",children:"Add"})]})]})};var h=function(){var e;e=null===localStorage.getItem("todos")?[]:JSON.parse(localStorage.getItem("todos"));var t=Object(a.useState)(e),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(c))}),[c]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d,{title:"My Todo List"}),Object(i.jsx)(m,{addTodo:function(e,t){console.log("Adding to todo list",e,t);var n={sno:0===c.length?0:c[c.length-1].sno+1,title:e,desc:t};s([].concat(Object(r.a)(c),[n]))}}),Object(i.jsx)(u,{todos:c,onDelete:function(e){console.log("onDelete",e),s(c.filter((function(t){return t!==e}))),localStorage.setItem("todos",JSON.stringify(c))}}),Object(i.jsx)(b,{})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(h,{})}),document.getElementById("root")),g()}},[[15,1,2]]]);
//# sourceMappingURL=main.f6224e7a.chunk.js.map