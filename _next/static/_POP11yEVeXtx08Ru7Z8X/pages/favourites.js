(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"/Eg9":function(e,t,r){"use strict";r.r(t);var n=r("rePB"),a=r("q1tI"),i=r.n(a),o=r("xG9w"),s=r("zRbM"),c=r("BtBB"),u=r("FdL+"),l=r("ehm3"),f=r("YFqc"),m=r.n(f),d=i.a.createElement;function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=Object(l.b)((function(e){return d(s.a,{title:"My favourites",desc:"Daily updates from my favourite breweries",longDesc:o.a.isEmpty(e.favourites.breweryIds)?d("p",null,"It looks like you haven't set any favourite breweries yet.  Visit the ",d(m.a,{href:"/breweries"},d("a",{className:"emphasise"},"A-Z page"))," to add some."):d("p",null,"This is a personalised view of your favourite breweries.  Add or remove breweries from the ",d(m.a,{href:"/breweries"},d("a",{className:"emphasise"},"A-Z page")),"."),breweries:c.a.breweries},d(u.a,{inventory:p(p({},c.a),{},{items:o.a.filter(c.a.items,(function(t){return e.favourites.breweryIds.includes(t.brewery.id)}))})}))}))},"FdL+":function(e,t,r){"use strict";var n=r("rePB"),a=r("q1tI"),i=r.n(a),o=r("xG9w"),s=r("YtlM"),c=i.a.createElement,u=function(e){return c("div",{className:"section"},c("h4",null,e.title),o.a.map(e.selections.selections,(function(t,r){return c("label",{key:r,className:"selectable"},r,c("input",{type:"checkbox",checked:t,onChange:function(){return e.selections.toggle(r)}}),c("span",{className:"checkmark"},t?"\u2713":""))})),o.a.size(e.selections.selections)>1&&c("div",null,c("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!0)}},"All"),c("span",{className:"all-or-none",onClick:function(){return e.selections.setGlobal(!1)}},"None")))},l=function(e){var t=Object(a.useState)(!1),r=t[0],n=t[1];return r?c("div",{className:"menu"},c("div",{className:"menu-button"},c("span",{onClick:function(){return n(!1)}},"\xd7")),c("div",{className:"content"},e.children),c("div",{className:"info"},"Data captured: ",e.capturedAt.local().format("lll"),".")):c("div",{className:"menu-hamburger"},c("div",{onClick:function(){return n(!0)}},"Refine search ..."))},f=r("AgaG"),m=r("e/f6"),d=i.a.createElement,b=r("qeRX"),p=i.a.createElement,v=function(e){var t=e.datum;return p(b.a,{id:t.brewery.id},t.brewery.shortName)},y=function(e){var t=e.datum;return p("a",{href:t.url},p("img",{alt:"",src:t.thumbnailUrl,width:"100px",height:"100px"}),t.available||p("div",{className:"sold-out"},"Out of stock"))},w=function(e){var t=e.datum,r=t.new,n=t.brewery.new,a=Object(m.a)(t).format===s.a.Keg,i=!a&&o.a.any(o.a.rest(t.offers),(function(e){return e.format===s.a.Keg})),c=t.mixed;return p("div",{className:"tooltip"},p("a",{className:"item-link",href:t.url},t.name),p("p",{className:"summary"},t.summary),p("p",{className:"summary"},r&&p("span",{className:"pill new"},"NEW !!!"),n&&p("span",{className:"pill just-added"},"Just added"),a&&p("span",{className:"pill keg"},"Keg"),i&&p("span",{className:"pill keg"},"Keg available"),c&&p("span",{className:"pill mixed"},"Mixed case")),void 0!==t.desc&&p(N,{datum:t}))},g=function(e){var t=e.datum;return p(i.a.Fragment,null,void 0!==t.abv?"".concat(t.abv.toFixed(1),"%"):"?")},O=function(e){var t=e.datum;return p(i.a.Fragment,null,p(h,{offer:Object(m.a)(t)}),o.a.size(t.offers)>1&&p("details",null,p("summary",null,o.a.size(t.offers)-1," more"),o.a.map(o.a.rest(t.offers),(function(e,t){return p(h,{key:t,offer:e})}))))},h=function(e){var t=e.offer,r=k(t),n=P(t);return p("div",{className:"offer"},"\xa3",E(t)," ",p("span",{className:"summary hide-small"},"/ ",n),p("p",{className:"summary"},t.quantity>1?"".concat(t.quantity," \xd7 ").concat(null!==r&&void 0!==r?r:"".concat(n,"s")):r))},N=function(e){var t,r=e.datum;return p("span",{className:"tooltip-text hide-small",style:{display:"hidden"}},void 0!==r.desc&&(t=r.desc,o.a.map(t.split("\n"),(function(e,t){return d("p",{key:t},e)}))),p("div",{className:"disclaimer"},"\xa9 ",r.brewery.shortName))},j=function(e,t){var r=o.a.groupBy(e,(function(e){return e.categories[0]||"Other"}));return o.a.map(t.concat("Other"),(function(e){return{name:e,data:r[e]}}))},k=function(e){return void 0===e.sizeMl?void 0:e.sizeMl<1e3?"".concat(e.sizeMl," ml"):"".concat(e.sizeMl/1e3," litres")},P=function(e){switch(e.format){case s.a.Bottle:return"bottle";case s.a.Can:return"can";case s.a.Keg:return"keg";default:return"item"}},E=function(e){return x(e).toFixed(2).replace(/\.00/,"")},x=function(e){return e.totalPrice/e.quantity},B=function(e){return p(f.b,{sections:j(e.items,e.categories)},p(f.a,{render:v,name:"Brewery",className:"brewery",selector:function(e){return e.brewery}}),p(f.a,{render:y,className:"thumbnail"}),p(f.a,{render:w,name:"Name",className:"name",selector:function(e){return e.name}}),p(f.a,{render:g,name:"ABV",className:"hide-tiny",selector:function(e){return e.abv}}),p(f.a,{render:O,name:"Price",className:"price",selector:function(e){return x(Object(m.a)(e))}}))},S=i.a.createElement;function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K=function(e){return o.a.uniq(o.a.map(e,(function(e){return e.brewery.shortName})))},C=function(e){var t=function(e,t){return o.a.object(o.a.map(e,(function(e){return[e,t]})))},r=Object(a.useState)(t(e,!0)),n=r[0],i=r[1];return{selections:n,toggle:function(e){var t=A({},n);t[e]=!t[e],i((function(t){var r=A({},t);return r[e]=!r[e],r}))},setGlobal:function(e){i((function(r){return t(o.a.keys(r),e)}))},setKeys:function(e){i(t(e,!0))}}};t.a=function(e){var t=e.inventory,r=C(["Out of stock"]),n=C(K(t.items)),c=C(["Regular","Mixed case","Keg"]);Object(a.useEffect)((function(){return n.setKeys(K(t.items))}),[t.items]);var f=function(e){return n.selections[e.brewery.shortName]},d=function(e){var t=Object(m.a)(e).format===s.a.Keg;return c.selections.Regular&&!t&&!e.mixed||c.selections["Mixed case"]&&e.mixed||c.selections.Keg&&t},b=function(e){return r.selections["Out of stock"]||e.available};return S(i.a.Fragment,null,S("div",{className:"how-to-use"},"Click on an image to go to the brewery shop!"),S(l,{capturedAt:t.capturedAt},S(u,{title:"Formats",selections:c}),S(u,{title:"Availability",selections:r}),o.a.size(n.selections)>1&&S(u,{title:"Breweries",selections:n})),S("main",null,S(B,{items:t.items.filter((function(e){return f(e)&&d(e)&&b(e)})),categories:t.categories})))}},GTeF:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favourites",function(){return r("/Eg9")}])},YtlM:function(e,t,r){"use strict";var n;r.d(t,"a",(function(){return n})),function(e){e.Bottle="BOTTLE",e.Can="CAN",e.Keg="KEG"}(n||(n={}))},"e/f6":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r("xG9w"),a=function(e){var t=n.a.first(e.offers);if(void 0===t)throw new Error("No offers for item");return t}},ehm3:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var a=r("q1tI"),i=r.n(a),o=r("xG9w"),s=r("BtBB"),c=i.a.createElement,u=i.a.createContext({favourites:{breweryIds:[]},onToggle:function(){}}),l="favourites",f=function(e){var t=Object(a.useState)({breweryIds:[]}),r=t[0],n=t[1],i=function(){var e=window.localStorage.getItem(l);null!==e&&n(JSON.parse(e))};Object(a.useEffect)((function(){m(),i(),window.addEventListener("storage",i)}),[]);return c(u.Provider,{value:{favourites:r,onToggle:function(e){var t=new Set(r.breweryIds);t.has(e)?t.delete(e):t.add(e);var n={breweryIds:o.a.sortBy(Array.from(t),(function(e){return e}))};window.localStorage.setItem(l,JSON.stringify(n)),i()}}},e.children)},m=function(){var e=window.localStorage.getItem(l);if(null!==e){var t=JSON.parse(e),r=o.a.map(t.breweries,(function(e){var t;return void 0!==o.a.find(s.a.breweries,(function(t){return t.id===e}))?e:null===(t=o.a.find(s.a.breweries,(function(t){return t.shortName===e})))||void 0===t?void 0:t.id})),n=o.a.filter(r,(function(e){return void 0!==e}));window.localStorage.setItem(l,JSON.stringify({breweryIds:n}))}},d=function(e){return function(t){return c(u.Consumer,null,(function(r){return c(e,n({},t,r))}))}}}},[["GTeF",1,2,3,7,6,0,4,5]]]);