(this.webpackJsonpclima=this.webpackJsonpclima||[]).push([[0],{54:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(19),r=a.n(o),s=a(23),i=a.n(s),l=a(37),d=a(20),j=(a(49),a(39)),u=a(32),b=a(41),h=a(43),O=a(28),m=a(40),p=a(42),x=a(15),f=a(24),g=a(33),v=a(38),_=a(5);var A=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],o=t[1],r=Object(c.useState)(null),s=Object(d.a)(r,2),A=s[0],E=s[1],P=Object(c.useState)(!1),S=Object(d.a)(P,2),w=(S[0],S[1]),y=Object(c.useState)(null),C=Object(d.a)(y,2),N=C[0],k=C[1],I=Object(c.useState)(null),T=Object(d.a)(I,2),R=T[0],H=T[1];function B(){return(B=Object(l.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!0),"573d7d727be60c60b0c68eeeff1d978e",a="http://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&lang=pt&units=metric&appid=").concat("573d7d727be60c60b0c68eeeff1d978e"),e.next=5,fetch(a).then((function(e){return e.json()})).then((function(e){switch(e.cod){case"401":k("A API Key informada \xe9 inv\xe1lida."),E(null);break;case"404":k("A cidade informada n\xe3o existe."),E(null),o("");break;case"409":k("O uso gratuito da API foi excedido (60 chamadas por minuto)"),E(null);break;default:E(e)}})).catch((function(e){console.error("Erro ao obter o clima: ".concat(e.message))}));case 5:w(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){var e=Object({NODE_ENV:"production",PUBLIC_URL:"/clima",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_WEATHER:"573d7d727be60c60b0c68eeeff1d978e",REACt_APP_API_GEO:"c3d1ac40569746a8b5e54cc6eefee348"}).REACT_APP_API_GEO;function t(){return(t=Object(l.a)(i.a.mark((function t(a,c){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.opencagedata;com/geocode/v1/json?q=".concat(a," + ").concat(c," &key=").concat(e),t.next=3,fetch(n).then((function(e){return e.json})).then((function(e){console.log(e),o(e.results[0].components.city+", "+e.results[0].components.country)})).catch((function(e){console.error("N\xe3o foi poss\xedvel buscar a cidade a partir da latitude/longitude. Erro: ".concat(e.message))}));case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}"geolocation"in navigator&&navigator.geolocation.getCurrentPosition((function(e){console.log(e),function(e,a){t.apply(this,arguments)}(e.coords.latitude,e.coords.longitude)}),(function(e){console.error(e),H(e.code)}))}),[]),Object(_.jsxs)(n.a.Fragment,{children:[Object(_.jsxs)(j.a,{bg:"primary",children:[Object(_.jsx)(j.a.Brand,{href:"#inicio",children:"FateClima"}),Object(_.jsxs)(u.a,{className:"mr-auto",children:[Object(_.jsx)(u.a.Link,{href:"inicio",children:"In\xedcio"}),Object(_.jsx)(u.a.Link,{href:"contato",children:"Contato"})]}),Object(_.jsxs)(h.a,{inline:!0,children:[Object(_.jsx)(O.a,{type:"text",value:a,onChange:function(e){return o(e.target.value)},placeholder:"Informe a cidade"}),"\xa0",Object(_.jsxs)(m.a,{variant:"secondary",onClick:function(){!function(e){B.apply(this,arguments)}(a)},disabled:a.length<3,children:[Object(_.jsx)(f.d,{}),"Obter Clima"]})]})]}),Object(_.jsxs)(b.a,{children:[Object(_.jsxs)("h1",{children:[Object(_.jsx)(f.c,{}),"FateClima"]}),Object(_.jsxs)("p",{children:["Consulte o clima de qualquer cidade do mundo. ",Object(_.jsx)("br",{}),"App desenvolvido em ReactJS integrado com a API OpenWeatherMap."]})]}),R&&Object(_.jsxs)(v.a,{variant:"danger",onClose:function(){return H(null)},dismissible:!0,children:[Object(_.jsx)(v.a.Heading,{children:"Ops! Ocorreu um erro ao obter sua localiza\xe7\xe3o."}),Object(_.jsx)("p",{children:[{codigo:1,texto:"N\xe3o foi dada permiss\xe3o para o sistema encontrar sua localiza\xe7\xe3o"},{codigo:2,texto:"N\xe3o foi poss\xedvel obter sua localiza\xe7\xe3o"},{codigo:3,texto:"O tempo para obter sua localiza\xe7\xe3o foi expirado"}][R].texto})]}),N&&Object(_.jsxs)(g.a,{onClose:function(){return k(null)},delay:4e3,autohide:!0,className:"bg-danger",children:[Object(_.jsxs)(g.a.Header,{children:[Object(_.jsxs)("strong",{className:"mr-auto",children:[" ",N," "]}),Object(_.jsx)("small",{children:"\ud83d\ude22"})]}),Object(_.jsxs)(g.a.Body,{className:"bg-white text-danger",children:[" ","Por favor, fa\xe7a uma nova busca."]})]}),Object(_.jsx)(p.a,{className:"justify-content-center",children:A&&Object(_.jsxs)(x.a,{bg:"primary",className:"text-center",children:[Object(_.jsxs)(x.a.Header,{children:[Object(_.jsx)("h2",{children:A.name}),Object(_.jsxs)("h3",{children:[A.main.temp,"\u2103"]}),Object(_.jsxs)("h5",{children:["min: ",Object(_.jsx)("strong",{children:A.main.temp_min}),"\u2103",Object(_.jsx)(f.a,{className:"text/danger"}),"- m\xe1x:"," ",Object(_.jsx)("strong",{children:A.main.temp_max}),"\u2103",Object(_.jsx)(f.b,{className:"text/danger"})]})]}),Object(_.jsxs)(x.a.Body,{children:[Object(_.jsx)(x.a.Img,{src:"http://openweathermap.org/img/wn/".concat(A.weather[0].icon,"@4x.png"),title:A.weather[0].description}),Object(_.jsx)(x.a.Title,{className:"text-light",children:A.weather[0].description})]}),Object(_.jsxs)(x.a.Footer,{className:"text-white",children:["Atualizado em:"," ",new Date(1e3*A.dt).toLocaleString("pt-BR",{timeZone:"America/Sao_Paulo"})]})]})})]})};r.a.render(Object(_.jsx)(n.a.StrictMode,{children:Object(_.jsx)(A,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.f3d22f1a.chunk.js.map