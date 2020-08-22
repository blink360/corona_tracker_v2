(this.webpackJsonpcorona_tracker_v2=this.webpackJsonpcorona_tracker_v2||[]).push([[0],{11:function(e,a,t){e.exports={card:"dashboard_card__Sr4Nw",card_rate:"dashboard_card_rate__Ts0b6",card_body:"dashboard_card_body__UyCKO",card_body_items:"dashboard_card_body_items__3oWEa",card_body_lastUpdateDate:"dashboard_card_body_lastUpdateDate__3WIDl",card_body_rate:"dashboard_card_body_rate__2Uwa_"}},163:function(e,a){e.exports=function(e,a){return parseFloat(e/a*100).toFixed(2)}},164:function(e,a){e.exports=function(e){var a=e.slice(),t=a[0].totalCases,r=a.slice(-1)[0].totalCases;return parseFloat(100*(Math.pow(r/t,1/e.length)-1)).toFixed(1)}},174:function(e,a,t){e.exports=t.p+"static/media/logo.8e4628f7.svg"},201:function(e,a,t){e.exports=t(405)},405:function(e,a,t){"use strict";t.r(a);var r=t(1),n=t.n(r),l=t(58),c=t.n(l),d=t(91),o=t.n(d),s=t(157),i=t(98),m=t(421),E=t(422),u=t(423),h=t(158),p=t.n(h),_=t(92),v=t(424),y=t(419),f=t(11),b=t.n(f),g=t(95),D=t.n(g);var w=function(e){return n.a.createElement(n.a.Fragment,null,e.data.length>0?n.a.createElement(v.a,{id:b.a.card,border:"dark"},n.a.createElement(v.a.Body,null,n.a.createElement("div",{id:b.a.card_body},n.a.createElement("div",{className:b.a.card_body_items},n.a.createElement("div",null,n.a.createElement(y.a,{variant:"h2",style:{color:"red"},paragraph:!0},e.data[1].totalCases),n.a.createElement(y.a,{variant:"h5",paragraph:!0},"Confirmed"),n.a.createElement(y.a,{variant:"h5",style:{color:"red"}},n.a.createElement(D.a,null),e.data[1].newCases," ",n.a.createElement(y.a,{variant:"caption"}," new cases")))),n.a.createElement("div",{className:b.a.card_body_items},n.a.createElement(y.a,{variant:"h2",style:{color:"green"},paragraph:!0},e.data[1].totalRecoveries),n.a.createElement(y.a,{variant:"h5",paragraph:!0},"Recovered")),n.a.createElement("div",{className:b.a.card_body_items},n.a.createElement("div",null,n.a.createElement(y.a,{variant:"h2",style:{color:"gray"},paragraph:!0},e.data[1].totalDeaths),n.a.createElement(y.a,{variant:"h5",paragraph:!0},"Deaths"),n.a.createElement(y.a,{variant:"h5",style:{color:"gray"}},n.a.createElement(D.a,null),e.data[1].newDeaths,n.a.createElement(y.a,{variant:"caption"}," new deaths"))))),n.a.createElement("div",{id:b.a.card_body_lastUpdateDate},n.a.createElement(y.a,{style:{color:"gray"}},"Last Updated: ",e.data[1].date)))):"")},C=t(163),R=t.n(C),k=t(164),x=t.n(k);var Y=function(e){return n.a.createElement(v.a,{className:b.a.card_rate,id:b.a.card,border:"dark"},n.a.createElement(v.a.Body,null,n.a.createElement(v.a.Title,null,n.a.createElement(y.a,{variant:"h6",align:"center"},"DR"===e.type?"Fatality Rate":"RR"===e.type?"Recovery Rate":"Daily Growth Rate")),"GR"===e.type?n.a.createElement(y.a,{variant:"h2",id:b.a.card_body_rate},x()(e.data),n.a.createElement(y.a,{variant:"caption"},"%")):n.a.createElement(y.a,{variant:"h2",id:b.a.card_body_rate},R()(e.data,e.totalData),n.a.createElement(y.a,{variant:"caption"},"%"))))},F=t(12);var K=function(e){return n.a.createElement(v.a,{id:b.a.card,border:"dark"},n.a.createElement(v.a.Body,null,n.a.createElement(v.a.Title,null,n.a.createElement(y.a,{variant:"h6",align:"center"},"New Cases Per Day")),n.a.createElement(F.f,{width:"98%",height:300},n.a.createElement(F.b,{width:500,height:250,data:e.data},n.a.createElement(F.h,{dataKey:"date"}),n.a.createElement(F.i,{dataKey:"newCases"}),n.a.createElement(F.g,null),n.a.createElement(F.c,{stroke:"#f5f5f5"}),n.a.createElement(F.a,{dataKey:"newCases",fill:"#8884d8"})))))};var O=function(e){return n.a.createElement(v.a,{id:b.a.card,border:"dark"},n.a.createElement(v.a.Body,null,n.a.createElement(v.a.Title,null,n.a.createElement(y.a,{variant:"h6",align:"center"},"Total Cases")),n.a.createElement(F.f,{width:"98%",height:300},n.a.createElement(F.e,{data:e.data},n.a.createElement(F.h,{dataKey:"date"}),n.a.createElement(F.i,{dataKey:"totalCases"}),n.a.createElement(F.g,null),n.a.createElement(F.c,{stroke:"#f5f5f5"}),n.a.createElement(F.d,{type:"monotone",dataKey:"totalCases",stroke:"#82ca9d"})))))},T=t(174),j=t.n(T),M=t(420);var N=function(){return n.a.createElement("div",{style:{textAlign:"center",marginTop:"5px"}},n.a.createElement(M.a,{src:j.a,fluid:!0}))};var U=function(){var e=Object(r.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(r.useState)([]),d=Object(i.a)(c,2),h=d[0],v=d[1],y=function(){var e=Object(s.a)(o.a.mark((function e(){var a,t,r,n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("https://data.nepalcorona.info/api/v1/covid/timeline").catch((function(){setTimeout((function(){y()}),2e3)}));case 3:a=e.sent,t=a.data,r=_.format(new Date,"YYYY-MM-DD"),n=_.format((d=new Date,new Date(d.setDate(d.getDate()-1))),"YYYY-MM-DD"),c=t.filter((function(e){return e.date===r||e.date===n})),l(t),v(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}var d}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){y()}),[1]),n.a.createElement(m.a,{fluid:!0},n.a.createElement(N,null),n.a.createElement(E.a,null,n.a.createElement(u.a,{sm:12},n.a.createElement(w,{data:h}))),h.length>1?n.a.createElement(n.a.Fragment,null,n.a.createElement(E.a,null,n.a.createElement(u.a,{sm:12,md:4},n.a.createElement(Y,{type:"GR",data:t.filter((function(e){return e.totalCases>0}))})),n.a.createElement(u.a,{sm:12,md:4},n.a.createElement(Y,{type:"RR",data:h[1].totalRecoveries||0,totalData:h[1].totalCases||0})),n.a.createElement(u.a,{sm:12,md:4},n.a.createElement(Y,{type:"DR",data:h[1].totalDeaths||0,totalData:h[1].totalCases||0}))),n.a.createElement(E.a,null,n.a.createElement(u.a,{sm:12},n.a.createElement(K,{data:t.filter((function(e){return e.totalCases>0&&e.newCases>10}))}))),n.a.createElement(E.a,null,n.a.createElement(u.a,{sm:12},n.a.createElement(O,{data:t.filter((function(e,a){return e.totalCases>0&&(a%5===0||a===t.length)}))})))):"")};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(U,null)),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.f6c74f09.chunk.js.map