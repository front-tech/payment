(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(4),s=n.n(r),o=(n(9),n(2)),j=(n(10),n(11),n(0));function a(t){var e=Object(c.useState)(null),n=Object(o.a)(e,2),i=n[0],r=n[1];return Object(c.useEffect)((function(){var t=window.location.search,e=new URLSearchParams(t).get("product");(e=e||"1")&&fetch("./".concat(e,".json")).then((function(t){return t.json()})).then((function(t){r(t)}))}),[]),Object(j.jsx)("div",{children:i&&Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"header-container",children:[Object(j.jsx)("figure",{children:Object(j.jsx)("img",{className:"img",src:"./carrito.png",alt:""})}),Object(j.jsx)("h1",{children:" Cart "})]}),Object(j.jsxs)("div",{className:"body-container",children:[Object(j.jsxs)("h1",{children:[" ",i.title]}),Object(j.jsxs)("h2",{children:[" ",i.price,"$"]}),Object(j.jsxs)("h3",{children:[" ",i.desc," "]}),Object(j.jsx)("img",{src:i.urlImage,alt:""})]}),Object(j.jsx)("button",{className:"button button1",onClick:function(e){t.onBuyButtonCheck(!1)},children:" COMPRAR"}),Object(j.jsxs)("div",{className:"footer-container",children:[Object(j.jsx)("p",{children:"Informaci\xf3n del producto"}),Object(j.jsx)("a",{href:"".concat(null===t||void 0===t?void 0:t.urlProduct,"=").concat(null===t||void 0===t?void 0:t.productId)})]})]})})}n(13);var u=function(t){return Object(c.useEffect)((function(){}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Enhorabuena!"}),Object(j.jsx)("button",{className:"button button1",children:" GO HOME"})]})};var d=function(){var t=Object(c.useState)(!0),e=Object(o.a)(t,2),n=e[0],i=e[1];return Object(j.jsx)("div",{className:"App",children:n?Object(j.jsx)(a,{onBuyButtonCheck:function(t){return function(t){i(t)}(t)}}):Object(j.jsx)(u,{})})},l=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,s=e.getTTFB;n(t),c(t),i(t),r(t),s(t)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),l()}],[[14,1,2]]]);
//# sourceMappingURL=main.5613465c.chunk.js.map