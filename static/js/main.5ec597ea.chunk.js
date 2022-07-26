(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{15:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s=c(6),a=c.n(s),n=c(4),r=c(3),l=c(2),i=c.n(l),o=c(1),d=(c(13),c(14),c(7)),j=c.n(d);function u(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}c(15);var b=c(0),h=function(){return Object(b.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(b.jsx)("div",{className:"Loader__content"})})},m=function(e){var t=e.todos,c=e.resetTodoId,s=e.selectTodoId,a=Object(o.useState)(),n=Object(r.a)(a,2),l=n[0],i=n[1],d=t.find((function(e){return e.id===s})),j=(null===d||void 0===d?void 0:d.userId)||0;return Object(o.useEffect)((function(){var e;(e=j,u("/users/".concat(e))).then((function(e){return i(e)}))}),[j]),Object(b.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(b.jsx)("div",{className:"modal-background"}),l?Object(b.jsxs)("div",{className:"modal-card",children:[Object(b.jsxs)("header",{className:"modal-card-head",children:[Object(b.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(s)}),Object(b.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:c})]}),Object(b.jsxs)("div",{className:"modal-card-body",children:[Object(b.jsx)("p",{className:"block","data-cy":"modal-title",children:null===d||void 0===d?void 0:d.title}),Object(b.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==d&&void 0!==d&&d.completed?Object(b.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(b.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(b.jsx)("a",{href:"mailto:Sincere@april.biz",children:l.name})]})]})]}):Object(b.jsx)(h,{})]})},O=function(e){var t=e.todos,c=e.resetTodoId,s=e.selectTodo,a=e.selectTodoId;return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"#"}),Object(b.jsx)("th",{children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check"})})}),Object(b.jsx)("th",{children:"Title"}),Object(b.jsx)("th",{children:" "})]})}),Object(b.jsx)("tbody",{children:t.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"todo",children:[Object(b.jsx)("td",{className:"is-vcentered",children:e.id}),Object(b.jsx)("td",{className:"is-vcentered",children:e.completed?Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"fas fa-check","data-cy":"iconCompleted"})}):Object(b.jsx)("span",{className:"icon",children:"\u2716"})}),Object(b.jsx)("td",{className:"is-vcentered is-expanded",children:Object(b.jsx)("p",{className:j()("TodoList__item",{"has-text-danger":!e.completed,"has-text-success":e.completed}),children:e.title})}),Object(b.jsx)("td",{className:"has-text-right is-vcentered",children:a===e.id?Object(b.jsx)("button",{onClick:function(){s(0)},"data-cy":"selectButton",className:"button is-link",type:"button",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye-slash"})})}):Object(b.jsx)("button",{onClick:function(){s(e.id)},"data-cy":"selectButton",className:"button",type:"button",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{className:"far fa-eye"})})})})]},e.id)}))})]}),0!==a&&Object(b.jsx)(m,{todos:t,resetTodoId:c,selectTodoId:a})]})},x=function(e){var t=e.selectEl,c=e.selectedTodos,s=e.query,a=e.resetQuery,n=e.filter;return Object(b.jsxs)("form",{className:"field has-addons",children:[Object(b.jsx)("p",{className:"control",children:Object(b.jsx)("span",{className:"select",children:Object(b.jsxs)("select",{value:t,onChange:c,"data-cy":"statusSelect",children:[Object(b.jsx)("option",{value:"all",children:"All"}),Object(b.jsx)("option",{value:"active",children:"Active"}),Object(b.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(b.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",name:"query",value:s,onChange:n}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(b.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:s.length>0&&Object(b.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete",onClick:a})})]})]})},f=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],a=Object(o.useState)(0),l=Object(r.a)(a,2),d=l[0],j=l[1],m=Object(o.useState)(""),f=Object(r.a)(m,2),p=f[0],v=f[1],N=Object(o.useState)("all"),y=Object(r.a)(N,2),g=y[0],k=y[1],w=function(){var e=Object(n.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k(t.target.value);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(n.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v(t.target.value.toLowerCase());case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(n.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=c.filter((function(e){switch(g){case"all":default:return e;case"active":return!1===e.completed;case"completed":return!0===e.completed}})).filter((function(e){return e.title.toLowerCase().includes(p)})),S=function(){var e=Object(n.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v("");case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_=function(){var e=Object(n.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:j(0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){u("/todos").then((function(e){return s(e)}))}),[]),Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"box",children:[Object(b.jsx)("h1",{className:"title",children:"Todos:"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsx)(x,{selectEl:g,selectedTodos:w,query:p,resetQuery:S,filter:T})}),Object(b.jsx)("div",{className:"block",children:0===c.length?Object(b.jsx)(h,{}):Object(b.jsx)(O,{todos:C,resetTodoId:_,selectTodoId:d,selectTodo:I})})]})})})})};a.a.render(Object(b.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.5ec597ea.chunk.js.map