(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"FdL+":function(e,t,n){"use strict";var r=n("rePB"),a=n("q1tI"),c=n.n(a),i=n("xG9w"),s=n("YtlM"),o=c.a.createElement,l=function(e){return o("div",{className:"section"},o("h4",null,e.title),i.a.map(e.selections.selections,(function(t,n){return o("label",{key:n,className:"selectable"},n,o("input",{type:"checkbox",checked:t,onChange:function(){return e.selections.toggle(n)}}),o("span",{className:"checkmark"},t?"\u2713":""))})),i.a.size(e.selections.selections)>1&&o("div",null,o("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!0)}},"All"),o("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!1)}},"None")))},u=function(e){var t=Object(a.useState)(!1),n=t[0],r=t[1];return n?o("div",{className:"menu"},o("div",{className:"menu-button"},o("span",{onClick:function(){return r(!1)}},"\xd7")),o("div",{className:"content"},e.children),o("div",{className:"info"},"Data captured: ",e.capturedAt.local().format("lll"),".")):o("div",{className:"menu-hamburger"},o("div",{onClick:function(){return r(!0)}},"Refine search ..."))},m=n("AgaG"),f=n("e/f6"),d=c.a.createElement,p=n("qeRX"),b=c.a.createElement,y=function(e){var t=e.datum;return b(p.a,{shortName:t.brewery.shortName},t.brewery.shortName)},v=function(e){var t=e.datum;return b("a",{href:t.url},b("img",{alt:"",src:t.thumbnailUrl,width:"100px",height:"100px"}),t.available||b("div",{className:"sold-out"},"Out of stock"))},w=function(e){var t=e.datum,n=t.new&&!t.brewery.new,r=t.new&&t.brewery.new,a=Object(f.a)(t).format===s.a.Keg,c=!a&&i.a.any(i.a.rest(t.offers),(function(e){return e.format===s.a.Keg})),o=t.mixed;return b("div",{className:"tooltip"},b("a",{className:"item-link",href:t.url},t.name),b("p",{className:"summary"},t.summary),b("p",{className:"summary"},n&&b("span",{className:"pill new"},"NEW !!!"),r&&b("span",{className:"pill just-added"},"Just added"),a&&b("span",{className:"pill keg"},"Minikeg"),c&&b("span",{className:"pill keg"},"Minikeg available"),o&&b("span",{className:"pill mixed"},"Mixed case")),void 0!==t.desc&&b(N,{datum:t}))},O=function(e){var t=e.datum;return b(c.a.Fragment,null,void 0!==t.abv?"".concat(t.abv.toFixed(1),"%"):"?")},g=function(e){var t=e.datum;return b(c.a.Fragment,null,b(h,{offer:Object(f.a)(t)}),i.a.size(t.offers)>1&&b("details",null,b("summary",null,i.a.size(t.offers)-1," more"),i.a.map(i.a.rest(t.offers),(function(e,t){return b(h,{key:t,offer:e})}))))},h=function(e){var t=e.offer,n=k(t),r=P(t);return b("div",{className:"offer"},"\xa3",E(t)," ",b("span",{className:"summary hide-small"},"/ ",r),b("p",{className:"summary"},t.quantity>1?"".concat(t.quantity," \xd7 ").concat(null!==n&&void 0!==n?n:"".concat(r,"s")):n))},N=function(e){var t,n=e.datum;return b("span",{className:"tooltip-text hide-small",style:{display:"hidden"}},void 0!==n.desc&&(t=n.desc,i.a.map(t.split("\n"),(function(e,t){return d("p",{key:t},e)}))),b("div",{className:"disclaimer"},"\xa9 ",n.brewery.shortName))},j=function(e,t){var n=i.a.groupBy(e,(function(e){return e.categories[0]||"Other"}));return i.a.map(t.concat("Other"),(function(e){return{name:e,data:n[e]}}))},k=function(e){return void 0===e.sizeMl?void 0:e.sizeMl<1e3?"".concat(e.sizeMl," ml"):"".concat(e.sizeMl/1e3," litres")},P=function(e){switch(e.format){case s.a.Bottle:return"bottle";case s.a.Can:return"can";case s.a.Keg:return"keg";default:return"item"}},E=function(e){return x(e).toFixed(2).replace(/\.00/,"")},x=function(e){return e.totalPrice/e.quantity},B=function(e){return b(m.b,{sections:j(e.items,e.categories)},b(m.a,{render:y,name:"Brewery",className:"brewery",selector:function(e){return e.brewery}}),b(m.a,{render:v,className:"thumbnail"}),b(m.a,{render:w,name:"Name",className:"name",selector:function(e){return e.name}}),b(m.a,{render:O,name:"ABV",className:"hide-tiny",selector:function(e){return e.abv}}),b(m.a,{render:g,name:"Price",className:"price",selector:function(e){return x(Object(f.a)(e))}}))},M=c.a.createElement;function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){return i.a.uniq(i.a.map(e,(function(e){return e.brewery.shortName})))},C=function(e){var t=function(e,t){return i.a.object(i.a.map(e,(function(e){return[e,t]})))},n=Object(a.useState)(t(e,!0)),r=n[0],c=n[1];return{selections:r,toggle:function(e){var t=z({},r);t[e]=!t[e],c((function(t){var n=z({},t);return n[e]=!n[e],n}))},setGlobal:function(e){c((function(n){return t(i.a.keys(n),e)}))},setKeys:function(e){c(t(e,!0))}}};t.a=function(e){var t=e.inventory,n=C(["Out of stock"]),r=C(S(t.items)),o=C(["Regular","Mixed case","Minikeg"]);Object(a.useEffect)((function(){return r.setKeys(S(t.items))}),[t.items]);var m=function(e){return r.selections[e.brewery.shortName]},d=function(e){var t=Object(f.a)(e).format===s.a.Keg;return o.selections.Regular&&!t&&!e.mixed||o.selections["Mixed case"]&&e.mixed||o.selections.Minikeg&&t},p=function(e){return n.selections["Out of stock"]||e.available};return M(c.a.Fragment,null,M("div",{className:"how-to-use"},"Click on an image to go to the brewery shop!"),M(u,{capturedAt:t.capturedAt},M(l,{title:"Formats",selections:o}),M(l,{title:"Availability",selections:n}),i.a.size(r.selections)>1&&M(l,{title:"Breweries",selections:r})),M("main",null,M(B,{items:t.items.filter((function(e){return m(e)&&d(e)&&p(e)})),categories:t.categories})))}},X5zB:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return y}));var r=n("rePB"),a=n("q1tI"),c=n.n(a),i=n("zRbM"),s=n("BtBB"),o=n("IP2g"),l=n("wHSu"),u=n("8tEE"),m=n("FdL+"),f=n("bYa2"),d=c.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=!0;t.default=function(e){var t=e.brewery,n=e.items;return d(i.a,{title:t.name,titleSuffix:d(f.a,{breweryShortName:t.shortName}),desc:"Daily updates of beer prices from ".concat(t.name),longDesc:d(c.a.Fragment,null,d("p",null,"Daily updates of beer prices from ",t.name,", a brewery based in ",t.location,"."),d("p",null,"Every item here can be delivered directly to your doorstep from their online shop."),d("p",{className:"contact"},d("a",{href:t.websiteUrl},d(o.a,{icon:l.b})," ",t.websiteUrl)),void 0!==t.twitterHandle&&d("p",{className:"contact"},d("a",{href:"https://twitter.com/".concat(t.twitterHandle)},d(o.a,{icon:u.b})," @",t.twitterHandle))),breweries:s.a.breweries},d(m.a,{inventory:b(b({},s.a),{},{items:n})}))}},YtlM:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Bottle="BOTTLE",e.Can="CAN",e.Keg="KEG"}(r||(r={}))},nPOr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n("X5zB")}])}},[["nPOr",1,2,6,5,4,0,3,7,8]]]);