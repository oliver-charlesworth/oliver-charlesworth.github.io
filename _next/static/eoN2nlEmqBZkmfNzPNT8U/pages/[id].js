(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"3sq2":function(e,t,n){e.exports={contact:"_id__contact__3lLN8"}},"4+LV":function(e,t,n){e.exports={menu:"styles_menu__22X75",collapsed:"styles_collapsed__1m4CV",expanded:"styles_expanded__4S6q8",button:"styles_button__1CUZn",content:"styles_content__2Slmk",section:"styles_section__3-9yL",info:"styles_info__1VXar",option:"styles_option__21_Xt",clickable:"styles_clickable__ChKRZ",selectable:"styles_selectable__2Jq1t",checkmark:"styles_checkmark__3LTDx"}},"6aOp":function(e,t,n){e.exports={brewery:"styles_brewery__bjRYe",name:"styles_name__IYbd7",thumbnail:"styles_thumbnail__1rxWo",pill:"styles_pill__1adtb",new:"styles_new__2JoXy","just-added":"styles_just-added__1gwf7",keg:"styles_keg__ZJsgH",mixed:"styles_mixed__8G3IA","sold-out":"styles_sold-out__3EBEc",info:"styles_info__11fRt",price:"styles_price__1WnTu",offer:"styles_offer__1A_hV",tooltip:"styles_tooltip__3kB3n","tooltip-text":"styles_tooltip-text__xLDBZ",disclaimer:"styles_disclaimer__uXSpL"}},X5zB:function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return v}));var a=n("rePB"),r=n("q1tI"),s=n.n(r),i=n("zG+e"),c=n("BtBB"),o=n("IP2g"),l=n("wHSu"),u=n("8tEE"),f=n("dA1B"),m=n("Yn0G"),d=n("3sq2"),p=n.n(d),b=s.a.createElement;function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=!0;t.default=function(e){var t=e.brewery,n=e.items;return b(i.a,{title:t.name,titleSuffix:b(m.a,{breweryId:t.id}),desc:"Daily updates of beer prices from ".concat(t.name),longDesc:b(s.a.Fragment,null,b("p",null,"Daily updates of beer prices from ",t.name,", a brewery based in ",t.location,"."),b("p",null,"Every item here can be delivered directly to your doorstep from their online shop."),b("p",{className:p.a.contact},b("a",{href:t.websiteUrl},b(o.a,{icon:l.b})," ",t.websiteUrl)),void 0!==t.twitterHandle&&b("p",{className:p.a.contact},b("a",{href:"https://twitter.com/".concat(t.twitterHandle)},b(o.a,{icon:u.b})," @",t.twitterHandle))),breweries:c.a.breweries},b(f.a,{inventory:y(y({},c.a),{},{items:n})}))}},YtlM:function(e,t,n){"use strict";var a;n.d(t,"a",(function(){return a})),function(e){e.Bottle="BOTTLE",e.Can="CAN",e.Keg="KEG"}(a||(a={}))},dA1B:function(e,t,n){"use strict";var a=n("rePB"),r=n("q1tI"),s=n.n(r),i=n("LvDl"),c=n.n(i),o=n("YtlM"),l=n("4+LV"),u=n.n(l),f=n("TSYQ"),m=n.n(f),d=s.a.createElement,p=function(e){return d("div",{className:u.a.section},d("h4",null,e.title),c.a.map(e.selections.selections,(function(t,n){return d("label",{key:n,className:m()(u.a.selectable,u.a.clickable)},n,d("input",{type:"checkbox",checked:t,onChange:function(){return e.selections.toggle(n)}}),d("span",{className:u.a.checkmark},t?"\u2713":""))})),c.a.size(e.selections.selections)>1&&d("div",null,d("span",{className:m()(u.a.option,u.a.clickable),onClick:function(){return e.selections.setGlobal(!0)}},"All"),d("span",{className:m()(u.a.option,u.a.clickable),onClick:function(){return e.selections.setGlobal(!1)}},"None")))},b=function(e){var t=Object(r.useState)(!1),n=t[0],a=t[1];return d("div",{className:u.a.menu},n?d("div",{className:u.a.expanded},d("div",{className:m()(u.a.button,u.a.clickable)},d("span",{onClick:function(){return a(!1)}},"\xd7")),d("div",{className:u.a.content},e.children),d("div",{className:u.a.info},"Data captured: ",e.capturedAt.local().format("lll"),".")):d("div",{className:u.a.collapsed},d("div",{className:u.a.clickable,onClick:function(){return a(!0)}},"Refine search ...")))},_=n("D0oW"),y=n("e/f6"),v=s.a.createElement,w=n("3srb"),O=n("6aOp"),g=n.n(O),h=s.a.createElement,N=function(e){var t=e.datum;return h(w.a,{id:t.brewery.id},t.brewery.shortName)},k=function(e){var t=e.datum;return h("a",{href:t.url},h("img",{alt:"",src:t.thumbnailUrl,width:"100px",height:"100px"}),t.available||h("div",{className:g.a["sold-out"]},"Out of stock"))},j=function(e){var t=e.datum,n=t.new,a=t.brewery.new,r=Object(y.a)(t).format===o.a.Keg,s=!r&&c.a.some(c.a.tail(t.offers),(function(e){return e.format===o.a.Keg})),i=t.mixed;return h("div",{className:g.a.tooltip},h("a",{href:t.url},t.name),h("p",{className:g.a.info},t.summary),h("p",{className:g.a.info},n&&h("span",{className:m()(g.a.pill,g.a.new)},"NEW !!!"),a&&h("span",{className:m()(g.a.pill,g.a["just-added"])},"Just added"),r&&h("span",{className:m()(g.a.pill,g.a.keg)},"Keg"),s&&h("span",{className:m()(g.a.pill,g.a.keg)},"Keg available"),i&&h("span",{className:m()(g.a.pill,g.a.mixed)},"Mixed case")),void 0!==t.desc&&h(B,{datum:t}))},x=function(e){var t=e.datum;return h(s.a.Fragment,null,void 0!==t.abv?"".concat(t.abv.toFixed(1),"%"):"?")},P=function(e){var t=e.datum;return h(s.a.Fragment,null,h(E,{offer:Object(y.a)(t)}),c.a.size(t.offers)>1&&h("details",null,h("summary",null,c.a.size(t.offers)-1," more"),c.a.map(c.a.tail(t.offers),(function(e,t){return h(E,{key:t,offer:e})}))))},E=function(e){var t=e.offer,n=S(t),a=K(t);return h("div",{className:g.a.offer},"\xa3",C(t)," ",h("span",{className:m()(g.a.info,"hide-small")},"/ ",a),h("p",{className:g.a.info},t.quantity>1?"".concat(t.quantity," \xd7 ").concat(null!==n&&void 0!==n?n:"".concat(a,"s")):n))},B=function(e){var t,n=e.datum;return h("span",{className:m()(g.a["tooltip-text"],"hide-small"),style:{display:"hidden"}},void 0!==n.desc&&(t=n.desc,c.a.map(t.split("\n"),(function(e,t){return v("p",{key:t},e)}))),h("div",{className:g.a.disclaimer},"\xa9 ",n.brewery.shortName))},D=function(e,t){var n=c.a.groupBy(e,(function(e){return e.categories[0]||"Other"}));return c.a.map(t.concat("Other"),(function(e){return{name:e,data:n[e]}}))},S=function(e){return void 0===e.sizeMl?void 0:e.sizeMl<1e3?"".concat(e.sizeMl," ml"):"".concat(e.sizeMl/1e3," litres")},K=function(e){switch(e.format){case o.a.Bottle:return"bottle";case o.a.Can:return"can";case o.a.Keg:return"keg";default:return"item"}},C=function(e){return z(e).toFixed(2).replace(/\.00/,"")},z=function(e){return e.totalPrice/e.quantity},A=function(e){return h(_.b,{sections:D(e.items,e.categories)},h(_.a,{render:N,name:"Brewery",className:g.a.brewery,selector:function(e){return e.brewery}}),h(_.a,{render:k,className:g.a.thumbnail}),h(_.a,{render:j,name:"Name",className:g.a.name,selector:function(e){return e.name}}),h(_.a,{render:x,name:"ABV",className:"hide-tiny",selector:function(e){return e.abv}}),h(_.a,{render:P,name:"Price",className:g.a.price,selector:function(e){return z(Object(y.a)(e))}}))},q=n("y8QE"),L=s.a.createElement;function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G=function(e){return c.a.uniq(c.a.map(e,(function(e){return e.brewery.shortName})))},F=function(e){var t=function(e,t){return c.a.fromPairs(c.a.map(e,(function(e){return[e,t]})))},n=Object(r.useState)(t(e,!0)),a=n[0],s=n[1];return{selections:a,toggle:function(e){var t=X({},a);t[e]=!t[e],s((function(t){var n=X({},t);return n[e]=!n[e],n}))},setGlobal:function(e){s((function(n){return t(c.a.keys(n),e)}))},setKeys:function(e){s(t(e,!0))}}};t.a=function(e){var t=e.inventory,n=F(["Out of stock"]),a=F(G(t.items)),i=F(["Regular","Mixed case","Keg"]);Object(r.useEffect)((function(){return a.setKeys(G(t.items))}),[t.items]);var l=function(e){return a.selections[e.brewery.shortName]},u=function(e){var t=Object(y.a)(e).format===o.a.Keg;return i.selections.Regular&&!t&&!e.mixed||i.selections["Mixed case"]&&e.mixed||i.selections.Keg&&t},f=function(e){return n.selections["Out of stock"]||e.available};return L(s.a.Fragment,null,L(q.a,{text:"Click on an image to go to the brewery shop!"}),L(b,{capturedAt:t.capturedAt},L(p,{title:"Formats",selections:i}),L(p,{title:"Availability",selections:n}),c.a.size(a.selections)>1&&L(p,{title:"Breweries",selections:a})),L("main",null,L(A,{items:t.items.filter((function(e){return l(e)&&u(e)&&f(e)})),categories:t.categories})))}},"e/f6":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("LvDl"),r=n.n(a),s=function(e){var t=r.a.first(e.offers);if(void 0===t)throw new Error("No offers for item");return t}},nPOr:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n("X5zB")}])}},[["nPOr",1,2,3,8,6,5,0,4,7,9]]]);