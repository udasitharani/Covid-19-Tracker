(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},216:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=(a(104),a(23)),i=a.n(s),l=a(34),u=a(16),d=(a(106),a(243)),p=a(250),f=a(251),m=a(64),v=a.n(m),h=a(45),b=function(e){var t=e.selectedCountry,a=e.handleDropdownSelect,n=e.countriesList;return r.a.createElement("div",{className:v.a.app__header},r.a.createElement(h.CSSTransitionGroup,{transitionName:"slideUp",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},r.a.createElement("h1",null,"Covid-19 Tracker")),r.a.createElement(d.a,null,r.a.createElement(p.a,{className:v.a.app__dropdown,variant:"outlined",value:t,onChange:a},r.a.createElement(f.a,{value:"worldwide"},"Worldwide"),n.map((function(e,t){return r.a.createElement(f.a,{value:e.countryCode,key:t},e.country)})))))},y=a(89),E=a.n(y),_=a(90),C=a.n(_),w=a(247),g=a(248),j=a(249),O=function(e){var t=e.title,a=e.color,n=e.casesToday,o=e.totalCases;return r.a.createElement(w.a,{className:C.a.card},r.a.createElement(g.a,null,r.a.createElement(j.a,{color:"textSecondary"},t),r.a.createElement(j.a,{style:{color:a},variant:"h3"},n),r.a.createElement(j.a,{color:"textSecondary"},o)))},S=a(94),k=function(e){if(void 0===e)return 0;if(e>=1e3){var t=Math.pow(10,3*Math.floor((String(e).length-1)/3)),a=e/t;if(a=Number(Math.round(a+"e1")+"e-1"),1e3===t)return a+"K";if(1e6===t)return a+"M";if(1e9===t)return a+"B"}return e},x=function(e){var t=Object(S.a)(e);return t.sort((function(e,t){return e.cases<t.cases?1:-1})),t},T=function(e){var t=e.countryData;return r.a.createElement("div",{className:E.a.row},r.a.createElement(O,{title:"Coronavirus Cases",color:"#ff3333",casesToday:"+"+k(t.todayCases),totalCases:k(t.cases)+" Total"}),r.a.createElement(O,{title:"Recovered",color:"#55cc55",casesToday:"+"+k(t.todayRecovered),totalCases:k(t.recovered)+" Total"}),r.a.createElement(O,{title:"Deaths",color:"#ff3333",casesToday:"+"+k(t.todayDeaths),totalCases:k(t.deaths)+" Total"}),r.a.createElement(O,{title:"Tests",color:"#55cc55",casesToday:k(t.tests)}))},N=a(52),L=a.n(N),D=function(e){var t=e.countriesList;return r.a.createElement("div",{className:L.a.tableContainer},r.a.createElement(j.a,{className:L.a.header,variant:"h5",color:"textSecondary"},"Live Cases by Country"),r.a.createElement("div",{className:L.a.table},t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement(h.CSSTransitionGroup,{transitionName:"slideUpLittle",transitionAppear:!0,transitionAppearTimeout:500,transitionEnter:!1,transitionLeave:!1},r.a.createElement("td",null,e.country),r.a.createElement("td",null,e.cases.toLocaleString())))}))))},I=a(91),R=function(e){var t=[],a=[];if(e.timeline)for(var n in e.timeline.cases)t.push(n),a.push(e.timeline.cases[n]);else for(var r in e.cases)t.push(r),a.push(e.cases[r]);return[t,a]},B=function(e){var t=e.countryCode,a=Object(n.useState)([]),o=Object(u.a)(a,2),c=o[0],s=o[1],d=Object(n.useState)([]),p=Object(u.a)(d,2),f=p[0],m=p[1];Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="worldwide"===t?"https://disease.sh/v3/covid-19/historical/all?lastdays=120":"https://disease.sh/v3/covid-19/historical/".concat(t,"?lastdays=120"),e.next=3,fetch(a).then((function(e){return e.json()})).then((function(e){var t=R(e),a=Object(u.a)(t,2),n=a[0],r=a[1];s(n),m(r)}));case 3:case"end":return e.stop()}}),e)})))()}),[t]);var v={labels:c,datasets:[{label:"Coronavirus Cases",lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:0,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:0,pointHitRadius:10,data:f}]};return r.a.createElement(I.Line,{data:v,options:{responsive:!0,maintainAspectRatio:!0}})},H=a(252),M=a(253),A=a(254),W=a(92),J=a.n(W),z=function(e){var t=e.latitude,a=e.longitude,n=e.countriesData;return r.a.createElement("div",{className:J.a.map},r.a.createElement(M.a,{center:[t,a],zoom:3},r.a.createElement(A.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){return e.map((function(e,t){return r.a.createElement(H.a,{key:t,center:[e.lat,e.long],color:"red",fillOpacity:.4,radius:Math.sqrt(e.cases)/20})}))}(n)))},G=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("worldwide"),s=Object(u.a)(c,2),d=s[0],p=s[1],f=Object(n.useState)({}),m=Object(u.a)(f,2),v=m[0],h=m[1],y=Object(n.useState)(0),E=Object(u.a)(y,2),_=E[0],C=E[1],w=Object(n.useState)(0),g=Object(u.a)(w,2),j=g[0],O=g[1];Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="worldwide"===d?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(d),e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){h(e),e.countryInfo?(console.log(e.countryInfo.lat,e.countryInfo.long),C(e.countryInfo.lat),O(e.countryInfo.long)):(C(0),O(0))}));case 3:case"end":return e.stop()}}),e)})))()}),[d]),Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://disease.sh/v3/covid-19/countries",e.next=3,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{country:e.country,countryCode:e.countryInfo.iso2,cases:e.cases,deaths:e.deaths,recovered:e.recovered,lat:e.countryInfo.lat,long:e.countryInfo.long}}));o(t)}));case 3:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement(b,{selectedCountry:d,handleDropdownSelect:function(e){var t=e.target.value;p(t)},countriesList:a}),r.a.createElement(T,{countryData:v}),r.a.createElement(z,{latitude:_,longitude:j,countriesData:a})),r.a.createElement("div",{className:"app__right"},r.a.createElement(D,{countriesList:x(a)}),r.a.createElement(B,{countryCode:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},52:function(e,t,a){e.exports={tableContainer:"RankedTable_tableContainer__3CpE_",header:"RankedTable_header__1xrsM",table:"RankedTable_table__1veH7"}},64:function(e,t,a){e.exports={app__dropdown:"AppHeader_app__dropdown__LxBI2",app__header:"AppHeader_app__header__2gWJR"}},89:function(e,t,a){e.exports={row:"CardsRow_row__3ovfG"}},90:function(e,t,a){e.exports={card:"InfoCard_card__lsLmz"}},92:function(e,t,a){e.exports={map:"CovidMap_map__1DQjU"}},99:function(e,t,a){e.exports=a(216)}},[[99,1,2]]]);
//# sourceMappingURL=main.4461c8cb.chunk.js.map