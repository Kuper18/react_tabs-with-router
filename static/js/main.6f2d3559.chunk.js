(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{34:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var s=c(24),a=c.n(s),n=c(11),i=c(2),j=(c(32),c(33),c(34),c(17)),b=c.n(j),l=c(3),r=function(e){var t=e.isActive;return b()("navbar-item",{"is-active":t})},d=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(n.c,{to:"/",className:r,children:"Home"}),Object(l.jsx)(n.c,{to:"/tabs",className:r,children:"Tabs"})]})})}),Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(i.b,{})})})]})},o=function(){return Object(l.jsx)("h1",{className:"title",children:"Home page"})},x=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],h=function(){var e=Object(i.s)().tabId,t=x.find((function(t){return t.id===e}));return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:x.map((function(t){return Object(l.jsx)("li",{"data-cy":"Tab",className:b()({"is-active":e===t.id}),children:Object(l.jsx)(n.b,{to:"/tabs/".concat(t.id),children:t.title})},t.id)}))})}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:t?t.content:"Please select a tab"})]})};a.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(i.e,{children:Object(l.jsxs)(i.c,{path:"/",element:Object(l.jsx)(d,{}),children:[Object(l.jsx)(i.c,{path:"/home",element:Object(l.jsx)(i.a,{to:"/"})}),Object(l.jsx)(i.c,{index:!0,element:Object(l.jsx)(o,{})}),Object(l.jsxs)(i.c,{path:"tabs",children:[Object(l.jsx)(i.c,{index:!0,element:Object(l.jsx)(h,{})}),Object(l.jsx)(i.c,{path:":tabId?",element:Object(l.jsx)(h,{})})]}),Object(l.jsx)(i.c,{path:"*",element:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})]})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.6f2d3559.chunk.js.map