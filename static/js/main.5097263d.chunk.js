(this.webpackJsonpnikavanberkelcom=this.webpackJsonpnikavanberkelcom||[]).push([[1],{33:function(e,n,t){e.exports=t.p+"static/media/front.a649bba2.jpg"},34:function(e,n,t){e.exports=t.p+"static/media/front.ab9f8d21.jpg"},35:function(e,n,t){e.exports=t.p+"static/media/front.37cfa772.jpg"},36:function(e,n,t){e.exports=t.p+"static/media/front.50cb1cae.jpg"},37:function(e,n,t){e.exports=t.p+"static/media/front.ab09fc69.jpg"},43:function(e,n,t){e.exports=t(68)},48:function(e,n,t){},49:function(e,n,t){},63:function(e,n,t){},66:function(e,n,t){},67:function(e,n,t){},68:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(15),l=t.n(i),c=(t(48),t(12)),o=t(11),m=t(29),u=t(30),p=t(16),s=t(42),d=t(41),f=t(70),h=t(73),b=t(71),x=t(72),g=(t(49),t(50),function(e){Object(s.a)(t,e);var n=Object(d.a)(t);function t(e){var a;return Object(m.a)(this,t),(a=n.call(this,e)).toggle=a.toggle.bind(Object(p.a)(a)),a.state={isOpen:!1},a}return Object(u.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light"},r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},r.a.createElement("div",{className:"Name"},"Nika van Berkel"))),r.a.createElement(f.a,{onClick:this.toggle}),r.a.createElement(h.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(b.a,{className:"ml-auto",navbar:!0},r.a.createElement(x.a,null,r.a.createElement(c.b,{className:"About",to:"/about"},"About"))))))}}]),t}(a.Component)),v=t(18),E=t(33),j=t.n(E),w=t(34),k=t.n(w),y=t(35),O=t.n(y),N=t(36),S=t.n(N),z=t(37),P=t.n(z),B=[{id:1,title:"From Albania with love",src:j.a,route:"albania"},{id:2,title:"Posy",src:O.a,route:"posy"},{id:3,title:"Bookholder",src:k.a,route:"bookholder"},{id:4,title:"Two dimensional vase",src:P.a,route:"twodimensionalvase"},{id:5,title:"Space for one",src:S.a,route:"spaceforone"}],C=t(6),F=t(7);function A(){var e=Object(C.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n\n  & ",":nth-child(1) "," {\n    margin-right: 150px;\n    @media (max-width: 768px) {\n      margin-right: 40px;\n    }\n  }\n\n  & ",":nth-child(2) "," {\n    @media (max-width: 768px) {\n      margin-top: 0px;\n    }\n  }\n  & ",":nth-child(3) "," {\n    margin-top: 100px;\n    width: 25rem;\n    object-fit: cover;\n    @media (max-width: 768px) {\n      margin-top: 0px;\n    }\n  }\n  & ",":nth-child(3) "," {\n    margin-top: -25px;\n    @media (max-width: 768px) {\n      margin-top: 0px;\n    }\n  }\n  & ",":nth-child(4) "," {\n    margin-top: 20px;\n    @media (max-width: 768px) {\n      margin-top: 0px;\n    }\n  }\n  & ",":nth-child(5) "," {\n    margin-top: 25px;\n    margin-left: -50px;\n    @media (max-width: 768px) {\n      margin-top: 0px;\n      margin-left: 0px;\n    }\n  }\n  & ",":nth-child(5) "," {\n    margin-top: 0px;\n    margin-left: -100px;\n    @media (max-width: 768px) {\n      margin-top: 0px;\n      margin-left: 0px;\n    }\n  }\n"]);return A=function(){return e},e}function T(){var e=Object(C.a)(["\n  display: none;\n\n  ",":hover & {\n    display: ",";\n  }\n"]);return T=function(){return e},e}function I(){var e=Object(C.a)(["\n  position: relative;\n"]);return I=function(){return e},e}function J(){var e=Object(C.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  text-align: center;\n  height: 80%;\n  min-width: 25%;\n  justify-content: space-around;\n  text-align: center;\n"]);return J=function(){return e},e}function L(){var e=Object(C.a)(["\n  max-width: 15rem;\n  max-height: 15rem;\n  margin: 3rem;\n"]);return L=function(){return e},e}var M=F.a.img(L()),D=F.a.div(J()),_=F.a.div(I()),q=F.a.div(T(),_,(function(e){return e.displayTitle?"":"block"})),G=F.a.div(A(),D,M,D,M,D,M,D,q,D,M,D,M,D,q),H=(t(63),{display:"flex",flexDirection:"column"}),K=function(){var e=Object(a.useState)([]),n=Object(v.a)(e,2),t=n[0],i=n[1],l=Object(a.useState)(!1),o=Object(v.a)(l,2),m=o[0],u=o[1];return Object(a.useEffect)((function(){i(B)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null,t.map((function(e,n){var t=e.id,a=e.title,i=e.route,l=e.src;return r.a.createElement(D,{id:t,key:t},r.a.createElement(c.c,{activeClassName:"active",className:"Nav_link",exact:!0,to:"/".concat(i)},r.a.createElement(_,{displayTitle:m,onMouseEnter:function(){n+1===t&&document.getElementById(t).id&&a.toLowerCase().replace(/\s/g,"")===i&&u(!0)},onMouseLeave:function(){u(!1)},style:H},r.a.createElement(M,{src:l,alt:a}),r.a.createElement(q,null,a))))}))))};function Q(){var e=Object(C.a)(["\n  padding: 25px;\n  font-weight: lighter;\n  font-size: 10pt;\n"]);return Q=function(){return e},e}var R=F.a.div(Q()),U=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(R,null,r.a.createElement("p",null,"nika.van.berkel@gmail.com"),r.a.createElement("p",null,"+31 6 38 45 63 49")))};t(64),t(65),t(66),t(67);function V(){var e=Object(C.a)(["\n  animation: "," 2s infinite ease-in-out;\n  min-width: 30rem;\n  min-height: 40rem;\n  background: rgba(10, 10, 10, 0.1);\n"]);return V=function(){return e},e}function W(){var e=Object(C.a)(["\n\n  0%{\n    min-width: 25rem;\n min-height: 35rem;\n  }\n  100%{\n    min-width: 30rem;\n    min-height: 40rem;\n  }\n"]);return W=function(){return e},e}function X(){var e=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  margin: 0 auto;\n"]);return X=function(){return e},e}var Y=F.a.div(X()),Z=Object(F.b)(W()),$=F.a.div(V(),Z),ee=function(){return r.a.createElement(Y,null,r.a.createElement($,null))},ne=r.a.lazy((function(){return Promise.all([t.e(0),t.e(8)]).then(t.bind(null,129))})),te=r.a.lazy((function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,126))})),ae=r.a.lazy((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,128))})),re=r.a.lazy((function(){return Promise.all([t.e(0),t.e(5)]).then(t.bind(null,127))})),ie=r.a.lazy((function(){return Promise.all([t.e(0),t.e(6)]).then(t.bind(null,130))})),le=function(){return r.a.createElement(c.a,{basename:""},r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(o.a,{exact:!0,path:"/",component:K}),r.a.createElement(o.a,{exact:!0,path:"/about",component:U}),r.a.createElement(a.Suspense,{fallback:r.a.createElement(ee,null)},r.a.createElement(o.a,{exact:!0,path:"/albania",component:ae})),r.a.createElement(a.Suspense,{fallback:r.a.createElement(ee,null)},r.a.createElement(o.a,{exact:!0,path:"/bookholder",component:te})),r.a.createElement(a.Suspense,{fallback:r.a.createElement(ee,null)},r.a.createElement(o.a,{exact:!0,path:"/posy",component:ne})),r.a.createElement(a.Suspense,{fallback:r.a.createElement(ee,null)},r.a.createElement(o.a,{exact:!0,path:"/spaceforone",component:re})),r.a.createElement(a.Suspense,{fallback:r.a.createElement(ee,null)},r.a.createElement(o.a,{exact:!0,path:"/twodimensionalvase",component:ie}))))};l.a.render(r.a.createElement(le,null),document.getElementById("root"))}},[[43,2,3]]]);
//# sourceMappingURL=main.5097263d.chunk.js.map