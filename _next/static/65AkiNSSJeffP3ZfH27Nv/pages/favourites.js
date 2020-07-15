(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/Eg9":function(e,t,r){"use strict";r.r(t);var n=r("rePB"),a=r("q1tI"),i=r.n(a),s=r("xG9w"),o=r("zRbM"),c=r("BtBB"),u=r("FdL+"),l=r("ehm3"),f=r("YFqc"),m=r.n(f),d=i.a.createElement;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=Object(l.b)((function(e){return d(o.a,{title:"My favourites",desc:"Daily updates from my favourite breweries",longDesc:s.a.isEmpty(e.favourites.breweries)?d("p",null,"It looks like you haven't set any favourite breweries yet.  Visit the ",d(m.a,{href:"/breweries"},d("a",{className:"emphasise"},"A-Z page"))," to add some."):d("p",null,"This is a personalised view of your favourite breweries.  Add or remove breweries from the ",d(m.a,{href:"/breweries"},d("a",{className:"emphasise"},"A-Z page")),"."),breweries:c.a.breweries},d(u.a,{inventory:p(p({},c.a),{},{items:s.a.filter(c.a.items,(function(t){return e.favourites.breweries.includes(t.brewery.shortName)}))})}))}))},"FdL+":function(e,t,r){"use strict";var n=r("rePB"),a=r("q1tI"),i=r.n(a),s=r("xG9w"),o=r("YtlM"),c=i.a.createElement,u=function(e){return c("div",{className:"section"},c("h4",null,e.title),s.a.map(e.selections.selections,(function(t,r){return c("label",{key:r,className:"selectable"},r,c("input",{type:"checkbox",checked:t,onChange:function(){return e.selections.toggle(r)}}),c("span",{className:"checkmark"},t?"\u2713":""))})),s.a.size(e.selections.selections)>1&&c("div",null,c("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!0)}},"All"),c("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!1)}},"None")))},l=function(e){var t=Object(a.useState)(!1),r=t[0],n=t[1];return r?c("div",{className:"menu"},c("div",{className:"menu-button"},c("span",{onClick:function(){return n(!1)}},"\xd7")),c("div",{className:"content"},e.children),c("div",{className:"info"},"Data captured: ",e.capturedAt.local().format("lll"),".")):c("div",{className:"menu-hamburger"},c("div",{onClick:function(){return n(!0)}},"Refine search ..."))},f=r("YFqc"),m=r.n(f),d=r("AgaG"),b=r("e/f6"),p=i.a.createElement,v=i.a.createElement,y=function(e){var t=e.datum;return v(m.a,{href:"/".concat(Object(b.b)(t.brewery.shortName))},v("a",null,t.brewery.shortName))},w=function(e){var t=e.datum;return v("a",{href:t.url},v("img",{alt:"",src:t.thumbnailUrl,width:"100px",height:"100px"}),t.available||v("div",{className:"sold-out"},"Out of stock"))},g=function(e){var t=e.datum,r=t.new&&!t.brewery.new,n=t.new&&t.brewery.new,a=Object(b.a)(t).format===o.a.Keg,i=!a&&s.a.any(s.a.rest(t.offers),(function(e){return e.format===o.a.Keg})),c=t.mixed;return v("div",{className:"tooltip"},v("a",{className:"item-link",href:t.url},t.name),v("p",{className:"summary"},t.summary),v("p",{className:"summary"},r&&v("span",{className:"pill new"},"NEW !!!"),n&&v("span",{className:"pill just-added"},"Just added"),a&&v("span",{className:"pill keg"},"Minikeg"),i&&v("span",{className:"pill keg"},"Minikeg available"),c&&v("span",{className:"pill mixed"},"Mixed case")),void 0!==t.desc&&v(j,{datum:t}))},O=function(e){var t=e.datum;return v(i.a.Fragment,null,void 0!==t.abv?"".concat(t.abv.toFixed(1),"%"):"?")},h=function(e){var t=e.datum;return v(i.a.Fragment,null,v(N,{offer:Object(b.a)(t)}),s.a.size(t.offers)>1&&v("details",null,v("summary",null,s.a.size(t.offers)-1," more"),s.a.map(s.a.rest(t.offers),(function(e,t){return v(N,{key:t,offer:e})}))))},N=function(e){var t=e.offer,r=P(t),n=E(t);return v("div",{className:"offer"},"\xa3",x(t)," ",v("span",{className:"summary hide-small"},"/ ",n),v("p",{className:"summary"},t.quantity>1?"".concat(t.quantity," \xd7 ").concat(null!==r&&void 0!==r?r:"".concat(n,"s")):r))},j=function(e){var t,r=e.datum;return v("span",{className:"tooltip-text hide-small",style:{display:"hidden"}},void 0!==r.desc&&(t=r.desc,s.a.map(t.split("\n"),(function(e,t){return p("p",{key:t},e)}))),v("div",{className:"disclaimer"},"\xa9 ",r.brewery.shortName))},k=function(e,t){var r=s.a.groupBy(e,(function(e){return e.categories[0]||"Other"}));return s.a.map(t.concat("Other"),(function(e){return{name:e,data:r[e]}}))},P=function(e){return void 0===e.sizeMl?void 0:e.sizeMl<1e3?"".concat(e.sizeMl," ml"):"".concat(e.sizeMl/1e3," litres")},E=function(e){switch(e.format){case o.a.Bottle:return"bottle";case o.a.Can:return"can";case o.a.Keg:return"keg";default:return"item"}},x=function(e){return M(e).toFixed(2).replace(/\.00/,"")},M=function(e){return e.totalPrice/e.quantity},B=function(e){return v(d.b,{sections:k(e.items,e.categories)},v(d.a,{render:y,name:"Brewery",className:"brewery",selector:function(e){return e.brewery}}),v(d.a,{render:w,className:"thumbnail"}),v(d.a,{render:g,name:"Name",className:"name",selector:function(e){return e.name}}),v(d.a,{render:O,name:"ABV",className:"hide-tiny",selector:function(e){return e.abv}}),v(d.a,{render:h,name:"Price",className:"price",selector:function(e){return M(Object(b.a)(e))}}))},A=i.a.createElement;function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C=function(e){return s.a.uniq(s.a.map(e,(function(e){return e.brewery.shortName})))},D=function(e){var t=function(e,t){return s.a.object(s.a.map(e,(function(e){return[e,t]})))},r=Object(a.useState)(t(e,!0)),n=r[0],i=r[1];return{selections:n,toggle:function(e){var t=S({},n);t[e]=!t[e],i((function(t){var r=S({},t);return r[e]=!r[e],r}))},setGlobal:function(e){i((function(r){return t(s.a.keys(r),e)}))},setKeys:function(e){i(t(e,!0))}}};t.a=function(e){var t=e.inventory,r=D(["Out of stock"]),n=D(C(t.items)),c=D(["Regular","Mixed case","Minikeg"]);Object(a.useEffect)((function(){return n.setKeys(C(t.items))}),[t.items]);var f=function(e){return n.selections[e.brewery.shortName]},m=function(e){var t=Object(b.a)(e).format===o.a.Keg;return c.selections.Regular&&!t&&!e.mixed||c.selections["Mixed case"]&&e.mixed||c.selections.Minikeg&&t},d=function(e){return r.selections["Out of stock"]||e.available};return A(i.a.Fragment,null,A("div",{className:"how-to-use"},"Click on an image to go to the brewery shop!"),A(l,{capturedAt:t.capturedAt},A(u,{title:"Formats",selections:c}),A(u,{title:"Availability",selections:r}),s.a.size(n.selections)>1&&A(u,{title:"Breweries",selections:n})),A("main",null,A(B,{items:t.items.filter((function(e){return f(e)&&m(e)&&d(e)})),categories:t.categories})))}},GTeF:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favourites",function(){return r("/Eg9")}])},YtlM:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e.Bottle="BOTTLE",e.Can="CAN",e.Keg="KEG"}(n||(n={}))},ehm3:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return l}));var a=r("q1tI"),i=r.n(a),s=r("xG9w"),o=i.a.createElement,c=i.a.createContext({favourites:{breweries:[]},onToggle:function(){}}),u=function(e){var t="favourites",r=Object(a.useState)({breweries:[]}),n=r[0],i=r[1],u=function(){var e=window.localStorage.getItem(t);null!==e&&i(JSON.parse(e))};Object(a.useEffect)((function(){window.addEventListener("storage",u),u()}),[]);return o(c.Provider,{value:{favourites:n,onToggle:function(e){var r=new Set(n.breweries);r.has(e)?r.delete(e):r.add(e);var a={breweries:s.a.sortBy(Array.from(r),(function(e){return e}))};window.localStorage.setItem(t,JSON.stringify(a)),u()}}},e.children)},l=function(e){return function(t){return o(c.Consumer,null,(function(r){return o(e,n({},t,r))}))}}}},[["GTeF",1,2,7,6,4,0,3,5]]]);