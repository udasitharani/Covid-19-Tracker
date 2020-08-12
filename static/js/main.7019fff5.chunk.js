(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{101:function(e,t,a){},201:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),s=(a(99),a(23)),i=a.n(s),l=a(34),u=a(16),d=(a(101),a(228)),p=a(235),f=a(236),m=a(62),h=a.n(m),v=function(e){var t=e.selectedCountry,a=e.handleDropdownSelect,n=e.countriesList;return r.a.createElement("div",{className:h.a.app__header},r.a.createElement("h1",null,"COVID-19 TRACKER"),r.a.createElement(d.a,null,r.a.createElement(p.a,{className:h.a.app__dropdown,variant:"outlined",value:t,onChange:a},r.a.createElement(f.a,{value:"worldwide"},"Worldwide"),n.map((function(e,t){return r.a.createElement(f.a,{value:e.countryCode,key:t},e.country)})))))},b=a(84),y=a.n(b),E=a(85),_=a.n(E),C=a(232),w=a(233),g=a(234),j=function(e){var t=e.title,a=e.color,n=e.casesToday,o=e.totalCases;return r.a.createElement(C.a,{className:_.a.card},r.a.createElement(w.a,null,r.a.createElement(g.a,{color:"textSecondary"},t),r.a.createElement(g.a,{style:{color:a},variant:"h3"},n),r.a.createElement(g.a,{color:"textSecondary"},o)))},O=a(89),x=function(e){if(e>=1e3){var t=Math.pow(10,3*Math.floor((String(e).length-1)/3)),a=e/t;if(a=Number(Math.round(a+"e1")+"e-1"),1e3===t)return a+"K";if(1e6===t)return a+"M";if(1e9===t)return a+"B"}return e},k=function(e){var t=Object(O.a)(e);return t.sort((function(e,t){return e.cases<t.cases?1:-1})),t},S=function(e){var t=e.countryData;return r.a.createElement("div",{className:y.a.row},r.a.createElement(j,{title:"Coronavirus Cases",color:"#ff3333",casesToday:"+"+x(t.todayCases),totalCases:x(t.cases)+" Total"}),r.a.createElement(j,{title:"Recovered",color:"#55cc55",casesToday:"+"+x(t.todayRecovered),totalCases:x(t.recovered)+" Total"}),r.a.createElement(j,{title:"Deaths",color:"#ff3333",casesToday:"+"+x(t.todayDeaths),totalCases:x(t.deaths)+" Total"}),r.a.createElement(j,{title:"Tests",color:"#55cc55",casesToday:x(t.tests)}))},T=a(51),R=a.n(T),D=function(e){var t=e.countriesList;return r.a.createElement("div",{className:R.a.tableContainer},r.a.createElement(g.a,{className:R.a.header,variant:"h5",color:"textSecondary"},"Live Cases by Country"),r.a.createElement("div",{className:R.a.table},t.map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",null,e.country),r.a.createElement("td",null,e.cases.toLocaleString()))}))))},I=a(86),N=function(e){var t=[],a=[];if(e.timeline)for(var n in e.timeline.cases)t.push(n),a.push(e.timeline.cases[n]);else for(var r in e.cases)t.push(r),a.push(e.cases[r]);return[t,a]},B=function(e){var t=e.countryCode,a=Object(n.useState)([]),o=Object(u.a)(a,2),c=o[0],s=o[1],d=Object(n.useState)([]),p=Object(u.a)(d,2),f=p[0],m=p[1];Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="worldwide"===t?"https://disease.sh/v3/covid-19/historical/all?lastdays=120":"https://disease.sh/v3/covid-19/historical/".concat(t,"?lastdays=120"),e.next=3,fetch(a).then((function(e){return e.json()})).then((function(e){var t=N(e),a=Object(u.a)(t,2),n=a[0],r=a[1];s(n),m(r)}));case 3:case"end":return e.stop()}}),e)})))()}),[t]);var h={labels:c,datasets:[{label:"Coronavirus Cases",lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:0,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:0,pointHitRadius:10,data:f}]};return r.a.createElement(I.Line,{data:h,options:{responsive:!0,maintainAspectRatio:!0}})},L=a(237),H=a(238),M=a(239),W=a(87),A=a.n(W),J=function(e){var t=e.latitude,a=e.longitude,n=e.countriesData;return r.a.createElement("div",{className:A.a.map},r.a.createElement(H.a,{center:[t,a],zoom:3},r.a.createElement(M.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){return e.map((function(e){return r.a.createElement(L.a,{center:[e.lat,e.long],color:"red",fillOpacity:.4,radius:Math.sqrt(e.cases)/20})}))}(n)))},z=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)("worldwide"),s=Object(u.a)(c,2),d=s[0],p=s[1],f=Object(n.useState)({}),m=Object(u.a)(f,2),h=m[0],b=m[1],y=Object(n.useState)(0),E=Object(u.a)(y,2),_=E[0],C=E[1],w=Object(n.useState)(0),g=Object(u.a)(w,2),j=g[0],O=g[1];Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="worldwide"===d?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(d),e.next=3,fetch(t).then((function(e){return e.json()})).then((function(e){b(e),e.countryInfo?(console.log(e.countryInfo.lat,e.countryInfo.long),C(e.countryInfo.lat),O(e.countryInfo.long)):(C(0),O(0))}));case 3:case"end":return e.stop()}}),e)})))()}),[d]),Object(n.useEffect)((function(){Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://disease.sh/v3/covid-19/countries",e.next=3,fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).then((function(e){var t=e.map((function(e){return{country:e.country,countryCode:e.countryInfo.iso2,cases:e.cases,deaths:e.deaths,recovered:e.recovered,lat:e.countryInfo.lat,long:e.countryInfo.long}}));o(t)}));case 3:case"end":return e.stop()}}),e)})))()}),[]);return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"app__left"},r.a.createElement(v,{selectedCountry:d,handleDropdownSelect:function(e){var t=e.target.value;p(t)},countriesList:a}),r.a.createElement(S,{countryData:h}),r.a.createElement(J,{latitude:_,longitude:j,countriesData:a})),r.a.createElement("div",{className:"app__right"},r.a.createElement(D,{countriesList:k(a)}),r.a.createElement(B,{countryCode:d})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t,a){e.exports={tableContainer:"RankedTable_tableContainer__3CpE_",header:"RankedTable_header__1xrsM",table:"RankedTable_table__1veH7"}},62:function(e,t,a){e.exports={app__dropdown:"AppHeader_app__dropdown__LxBI2",app__header:"AppHeader_app__header__2gWJR"}},84:function(e,t,a){e.exports={row:"CardsRow_row__3ovfG"}},85:function(e,t,a){e.exports={card:"InfoCard_card__lsLmz"}},87:function(e,t,a){e.exports={map:"CovidMap_map__1DQjU"}},94:function(e,t,a){e.exports=a(201)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.7019fff5.chunk.js.map