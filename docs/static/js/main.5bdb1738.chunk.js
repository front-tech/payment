(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),o=n(4),r=n.n(o),s=(n(9),n(2)),a=(n(10),n(11),n(0));function j(t){var e=Object(c.useState)(null),n=Object(s.a)(e,2),i=n[0],o=n[1];return Object(c.useEffect)((function(){var t=window.location.search;window.history.replaceState({},"","".concat(window.location.pathname,"?product=",1));var e=new URLSearchParams(t).get("product");e&&fetch("/".concat(e,".json")).then((function(t){return t.json()})).then((function(t){o(t)}))}),[]),Object(a.jsx)("div",{children:i&&Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"header-container",children:[Object(a.jsx)("figure",{children:Object(a.jsx)("img",{className:"img",src:"./carrito.png",alt:""})}),Object(a.jsx)("h1",{children:" Cart "})]}),Object(a.jsxs)("div",{className:"body-container",children:[Object(a.jsxs)("h1",{children:[" ",i.title]}),Object(a.jsxs)("h2",{children:[" ",i.price,"$"]}),Object(a.jsxs)("h3",{children:[" ",i.desc," "]}),Object(a.jsx)("img",{src:i.urlImage,alt:""})]}),Object(a.jsx)("button",{className:"button button1",onClick:function(e){t.onBuyButtonCheck(!1)},children:" COMPRAR"}),Object(a.jsxs)("div",{className:"footer-container",children:[Object(a.jsx)("p",{children:"Informaci\xf3n del producto"}),Object(a.jsx)("a",{href:"".concat(null===t||void 0===t?void 0:t.urlProduct,"=").concat(null===t||void 0===t?void 0:t.productId)})]})]})})}n(13);var u=function(t){return Object(c.useEffect)((function(){}),[]),Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Enhorabuena!"}),Object(a.jsx)("button",{className:"button button1",children:" GO HOME"})]})};var d=function(){var t=Object(c.useState)(!0),e=Object(s.a)(t,2),n=e[0],i=e[1];return Object(a.jsx)("div",{className:"App",children:n?Object(a.jsx)(j,{onBuyButtonCheck:function(t){return function(t){i(t)}(t)}}):Object(a.jsx)(u,{})})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),c(t),i(t),o(t),r(t)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(d,{})}),document.getElementById("root")),l()}],[[14,1,2]]]);
//# sourceMappingURL=main.5bdb1738.chunk.js.map