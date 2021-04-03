(this.webpackJsonpcorona=this.webpackJsonpcorona||[]).push([[0],{190:function(e,t,a){},191:function(e,t,a){},192:function(e,t,a){},193:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(18),s=a.n(n),o=a(3),d=a(19),i=a.n(d),l=(a(76),a(1)),u=function(){var e=Object(o.c)((function(e){return e.data}));return Object(l.jsx)("div",{className:"cards",children:Object.keys(e).length&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"cards__item",children:[Object(l.jsx)("h1",{className:"cards__item-title",children:"Infected"}),Object(l.jsx)(i.a,{start:0,end:e.confirmed.value,duration:1,separator:",",className:"cards__item-value"}),Object(l.jsx)("p",{className:"cards__item-date",children:new Date(e.lastUpdate).toDateString()}),Object(l.jsx)("p",{className:"cards__item-text",children:"Number of active cases of COVID-19"})]}),Object(l.jsxs)("div",{className:"cards__item",children:[Object(l.jsx)("h1",{className:"cards__item-title",children:"Recovered"}),Object(l.jsx)(i.a,{start:0,end:e.recovered.value,duration:1,separator:",",className:"cards__item-value"}),Object(l.jsx)("p",{className:"cards__item-date",children:new Date(e.lastUpdate).toDateString()}),Object(l.jsx)("p",{className:"cards__item-text",children:"Number of recovered people of COVID-19"})]}),Object(l.jsxs)("div",{className:"cards__item",children:[Object(l.jsx)("h1",{className:"cards__item-title",children:"Died"}),Object(l.jsx)(i.a,{start:0,end:e.deaths.value,duration:1,separator:",",className:"cards__item-value"}),Object(l.jsx)("p",{className:"cards__item-date",children:new Date(e.lastUpdate).toDateString()}),Object(l.jsx)("p",{className:"cards__item-text",children:"Number of death caused by COVID-19"})]})]})})},j=a(34),b=a(11),p=a.n(b),m=a(35),h=a(36),f=a.n(h),O=function(e){return function(){var t=Object(m.a)(p.a.mark((function t(a){var r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://covid19.mathdro.id/api",e&&(r="https://covid19.mathdro.id/api/countries/".concat(e)),t.prev=2,t.next=5,f.a.get(r).then((function(e){var t=e.data,r=t.confirmed,c=t.recovered,n=t.deaths,s=t.lastUpdate;return a(y({confirmed:r,recovered:c,deaths:n,lastUpdate:s}))}));case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(2),a(v());case 10:case"end":return t.stop()}}),t,null,[[2,7]])})));return function(e){return t.apply(this,arguments)}}()},v=function(){return{type:"SET_ERROR"}},_=function(e){return{type:"SET_COUNTRY",payload:e}},x=function(e){return{type:"SET_DATA_DAILY",payload:e}},y=function(e){return{type:"SET_DATA",payload:e}},D=(a(190),function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e}));return c.a.useEffect((function(){e(function(){var e=Object(m.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("https://covid19.mathdro.id/api/daily").then((function(e){var a=e.data.map((function(e){return{confirmed:e.totalConfirmed,totalRecovered:e.totalRecovered,deaths:e.deaths.total,date:e.reportDate}}));return t(x(a))}));case 3:e.next=8;break;case 5:throw e.prev=5,e.t0=e.catch(0),e.t0;case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}()),e(O())}),[]),Object(l.jsx)("div",{className:"chart",children:!t.error&&t.country?Object(l.jsx)(j.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgb(229, 156, 243)","rgb(156, 243, 156)","rgb(243, 156, 156)"],data:[t.data.confirmed.value,t.data.recovered.value,t.data.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(t.country)}}}):Object.keys(t.dataDaily).length&&Object(l.jsx)(j.Line,{data:{labels:t.dataDaily.map((function(e){var t=e.date;return new Date(t).toLocaleDateString()})),datasets:[{data:t.dataDaily.map((function(e){return e.confirmed})),label:"Infected",borderColor:"rgb(229, 156, 243)",fill:!0},{data:t.dataDaily.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgb(243, 156, 156)",fill:!0},{data:t.dataDaily.map((function(e){return e.recovered})),label:"Recovered",borderColor:"green",backgroundColor:"rgb(156, 243, 156)",fill:!0}]}})})}),N=a(65),g=a(63),C=a.n(g),T=(a(191),function(){var e=Object(o.b)(),t=c.a.useState(""),a=Object(N.a)(t,2),r=a[0],n=a[1],s=Object(o.c)((function(e){return e.error}));return Object(l.jsxs)("div",{className:"country",children:[Object(l.jsxs)("div",{children:[s&&Object(l.jsx)("label",{className:"error__message",htmlFor:"country",children:"Enter a correct country"}),Object(l.jsx)("br",{}),Object(l.jsx)("input",{type:"text",name:"country",value:r,onKeyDown:function(t){"Enter"===t.code&&(e(O(r)),e(_(r)))},onChange:function(e){n(e.target.value)},className:C()("country__input",{error:s})})]}),Object(l.jsx)("button",{className:"country__btn",onClick:function(){e(O(r)),e(_(r))},children:"find"})]})});a(192);var E=function(){return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)("h1",{className:"app__title",children:"Corona Tracker"}),Object(l.jsx)(u,{}),Object(l.jsx)(T,{}),Object(l.jsx)(D,{})]})},S=a(10),k=a(64),w=a(6),R={data:{},dataDaily:{},country:"",error:""},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_DATA":return Object(w.a)(Object(w.a)({},e),{},{error:"",data:t.payload});case"SET_DATA_DAILY":return Object(w.a)(Object(w.a)({},e),{},{error:"",dataDaily:t.payload});case"SET_COUNTRY":return Object(w.a)(Object(w.a)({},e),{},{error:"",country:t.payload});case"SET_ERROR":return Object(w.a)(Object(w.a)({},e),{},{error:"error"});default:return e}},I=Object(S.c)(A,Object(S.a)(k.a));s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(o.a,{store:I,children:Object(l.jsx)(E,{})})}),document.getElementById("root"))},76:function(e,t,a){}},[[193,1,2]]]);
//# sourceMappingURL=main.4089fc14.chunk.js.map