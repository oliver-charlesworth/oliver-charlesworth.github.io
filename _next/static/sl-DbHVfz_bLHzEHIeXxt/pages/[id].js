(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"FdL+":function(e,t,n){"use strict";var r=n("rePB"),a=n("q1tI"),c=n.n(a),i=n("LvDl"),o=n.n(i),s=n("YtlM"),l=c.a.createElement,u=function(e){return l("div",{className:"section"},l("h4",null,e.title),o.a.map(e.selections.selections,(function(t,n){return l("label",{key:n,className:"selectable"},n,l("input",{type:"checkbox",checked:t,onChange:function(){return e.selections.toggle(n)}}),l("span",{className:"checkmark"},t?"\u2713":""))})),o.a.size(e.selections.selections)>1&&l("div",null,l("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!0)}},"All"),l("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!1)}},"None")))},f=function(e){var t=Object(a.useState)(!1),n=t[0],r=t[1];return n?l("div",{className:"menu"},l("div",{className:"menu-button"},l("span",{onClick:function(){return r(!1)}},"\xd7")),l("div",{className:"content"},e.children),l("div",{className:"info"},"Data captured: ",e.capturedAt.local().format("lll"),".")):l("div",{className:"menu-hamburger"},l("div",{onClick:function(){return r(!0)}},"Refine search ..."))},m=n("AgaG"),d=n("e/f6"),p=c.a.createElement,b=n("qeRX"),v=c.a.createElement,y=function(e){var t=e.datum;return v(b.a,{id:t.brewery.id},t.brewery.shortName)},w=function(e){var t=e.datum;return v("a",{href:t.url},v("img",{alt:"",src:t.thumbnailUrl,width:"100px",height:"100px"}),t.available||v("div",{className:"sold-out"},"Out of stock"))},O=function(e){var t=e.datum,n=t.new,r=t.brewery.new,a=Object(d.a)(t).format===s.a.Keg,c=!a&&o.a.some(o.a.tail(t.offers),(function(e){return e.format===s.a.Keg})),i=t.mixed;return v("div",{className:"tooltip"},v("a",{href:t.url},t.name),v("p",{className:"summary"},t.summary),v("p",{className:"summary"},n&&v("span",{className:"pill new"},"NEW !!!"),r&&v("span",{className:"pill just-added"},"Just added"),a&&v("span",{className:"pill keg"},"Keg"),c&&v("span",{className:"pill keg"},"Keg available"),i&&v("span",{className:"pill mixed"},"Mixed case")),void 0!==t.desc&&v(j,{datum:t}))},g=function(e){var t=e.datum;return v(c.a.Fragment,null,void 0!==t.abv?"".concat(t.abv.toFixed(1),"%"):"?")},h=function(e){var t=e.datum;return v(c.a.Fragment,null,v(N,{offer:Object(d.a)(t)}),o.a.size(t.offers)>1&&v("details",null,v("summary",null,o.a.size(t.offers)-1," more"),o.a.map(o.a.tail(t.offers),(function(e,t){return v(N,{key:t,offer:e})}))))},N=function(e){var t=e.offer,n=k(t),r=E(t);return v("div",{className:"offer"},"\xa3",x(t)," ",v("span",{className:"summary hide-small"},"/ ",r),v("p",{className:"summary"},t.quantity>1?"".concat(t.quantity," \xd7 ").concat(null!==n&&void 0!==n?n:"".concat(r,"s")):n))},j=function(e){var t,n=e.datum;return v("span",{className:"tooltip-text hide-small",style:{display:"hidden"}},void 0!==n.desc&&(t=n.desc,o.a.map(t.split("\n"),(function(e,t){return p("p",{key:t},e)}))),v("div",{className:"disclaimer"},"\xa9 ",n.brewery.shortName))},P=function(e,t){var n=o.a.groupBy(e,(function(e){return e.categories[0]||"Other"}));return o.a.map(t.concat("Other"),(function(e){return{name:e,data:n[e]}}))},k=function(e){return void 0===e.sizeMl?void 0:e.sizeMl<1e3?"".concat(e.sizeMl," ml"):"".concat(e.sizeMl/1e3," litres")},E=function(e){switch(e.format){case s.a.Bottle:return"bottle";case s.a.Can:return"can";case s.a.Keg:return"keg";default:return"item"}},x=function(e){return B(e).toFixed(2).replace(/\.00/,"")},B=function(e){return e.totalPrice/e.quantity},D=function(e){return v(m.b,{sections:P(e.items,e.categories)},v(m.a,{render:y,name:"Brewery",className:"brewery",selector:function(e){return e.brewery}}),v(m.a,{render:w,className:"thumbnail"}),v(m.a,{render:O,name:"Name",className:"name",selector:function(e){return e.name}}),v(m.a,{render:g,name:"ABV",className:"hide-tiny",selector:function(e){return e.abv}}),v(m.a,{render:h,name:"Price",className:"price",selector:function(e){return B(Object(d.a)(e))}}))},K=c.a.createElement;function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=function(e){return o.a.uniq(o.a.map(e,(function(e){return e.brewery.shortName})))},C=function(e){var t=function(e,t){return o.a.fromPairs(o.a.map(e,(function(e){return[e,t]})))},n=Object(a.useState)(t(e,!0)),r=n[0],c=n[1];return{selections:r,toggle:function(e){var t=M({},r);t[e]=!t[e],c((function(t){var n=M({},t);return n[e]=!n[e],n}))},setGlobal:function(e){c((function(n){return t(o.a.keys(n),e)}))},setKeys:function(e){c(t(e,!0))}}};t.a=function(e){var t=e.inventory,n=C(["Out of stock"]),r=C(S(t.items)),i=C(["Regular","Mixed case","Keg"]);Object(a.useEffect)((function(){return r.setKeys(S(t.items))}),[t.items]);var l=function(e){return r.selections[e.brewery.shortName]},m=function(e){var t=Object(d.a)(e).format===s.a.Keg;return i.selections.Regular&&!t&&!e.mixed||i.selections["Mixed case"]&&e.mixed||i.selections.Keg&&t},p=function(e){return n.selections["Out of stock"]||e.available};return K(c.a.Fragment,null,K("div",{className:"how-to-use"},"Click on an image to go to the brewery shop!"),K(f,{capturedAt:t.capturedAt},K(u,{title:"Formats",selections:i}),K(u,{title:"Availability",selections:n}),o.a.size(r.selections)>1&&K(u,{title:"Breweries",selections:r})),K("main",null,K(D,{items:t.items.filter((function(e){return l(e)&&m(e)&&p(e)})),categories:t.categories})))}},X5zB:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return v}));var r=n("rePB"),a=n("q1tI"),c=n.n(a),i=n("zRbM"),o=n("BtBB"),s=n("IP2g"),l=n("wHSu"),u=n("8tEE"),f=n("FdL+"),m=n("bYa2"),d=c.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=!0;t.default=function(e){var t=e.brewery,n=e.items;return d(i.a,{title:t.name,titleSuffix:d(m.a,{breweryId:t.id}),desc:"Daily updates of beer prices from ".concat(t.name),longDesc:d(c.a.Fragment,null,d("p",null,"Daily updates of beer prices from ",t.name,", a brewery based in ",t.location,"."),d("p",null,"Every item here can be delivered directly to your doorstep from their online shop."),d("p",{className:"contact"},d("a",{href:t.websiteUrl},d(s.a,{icon:l.b})," ",t.websiteUrl)),void 0!==t.twitterHandle&&d("p",{className:"contact"},d("a",{href:"https://twitter.com/".concat(t.twitterHandle)},d(s.a,{icon:u.b})," @",t.twitterHandle))),breweries:o.a.breweries},d(f.a,{inventory:b(b({},o.a),{},{items:n})}))}},YtlM:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Bottle="BOTTLE",e.Can="CAN",e.Keg="KEG"}(r||(r={}))},"e/f6":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("LvDl"),a=n.n(r),c=function(e){var t=a.a.first(e.offers);if(void 0===t)throw new Error("No offers for item");return t}},nPOr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n("X5zB")}])}},[["nPOr",1,2,4,8,6,5,0,3,7,9]]]);