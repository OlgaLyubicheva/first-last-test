(function(e){function t(t){for(var r,i,c=t[0],o=t[1],l=t[2],f=0,d=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);u&&u(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var o=n[c];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},s=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01a8":function(e,t,n){"use strict";var r=n("7e28"),a=n.n(r);a.a},"034f":function(e,t,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"351a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[e._m(0),n("Menu",{attrs:{msg:""}}),n("BackgroundScene"),n("Title")],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a",{attrs:{href:"#"}},[r("img",{staticClass:"logo",attrs:{alt:"Name of company",src:n("cf05")}})])}],i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"menu"},[n("div",{staticClass:"menu__btn"},[n("div",{staticClass:"menu__line"}),n("div",{staticClass:"menu__line"})]),n("ul",{staticClass:"menu__list"},[n("li",{staticClass:"menu__listItem"},[n("a",{attrs:{href:"#"}},[e._v("Commercial")])]),n("li",{staticClass:"menu__listItem"},[n("a",{attrs:{href:"#"}},[e._v("Editorial")])]),n("li",{staticClass:"menu__listItem"},[n("a",{attrs:{href:"#"}},[e._v("Reportage")])]),n("li",{staticClass:"menu__listItem"},[n("a",{attrs:{href:"#"}},[e._v("Meet me")])])])])}],o={name:"Menu"},l=o,u=(n("01a8"),n("2877")),f=Object(u["a"])(l,i,c,!1,null,"0da44d22",null),d=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"scene"},[n("div",{staticClass:"scene__layer-wraper"},[e._l(e.images,(function(t,r){return n("div",{key:r,staticClass:"scene__layer layer1",class:{active:e.currentIndex==r},style:{backgroundImage:"url("+t[0]+")"}})})),e._l(e.images,(function(t,r){return n("div",{key:r,staticClass:"scene__layer layer2",class:{active:e.currentIndex==r},style:{backgroundImage:"url("+t[1]+")"}})})),e._l(e.images,(function(t,r){return n("div",{key:r,staticClass:"scene__layer layer3",class:{active:e.currentIndex==r},style:{backgroundImage:"url("+t[2]+")"}})}))],2)])},m=[],v=(n("99af"),{name:"BackgroundScene",data:function(){return{currentIndex:0,images:[["/img/foto1.016989f2.jpg","/img/foto2.41279e2e.png","/img/foto3.df0aa40c.png"],["/img/foto2.41279e2e.png","/img/foto3.df0aa40c.png","/img/foto1.016989f2.jpg"],["/img/foto3.df0aa40c.png","/img/foto1.016989f2.jpg","/img/foto2.41279e2e.png"]]}},mounted:function(){var e=this,t=function(e){document.querySelector(".scene__layer-wraper").style.transform="translate(".concat(-e.clientX/20,"px, ").concat(-e.clientY/15,"px)")},n=function(){var t=document.querySelector(".swiper-slide-active").dataset.swiperSlideIndex;t&&t!==e.currentIndex&&(e.currentIndex=t)};document.addEventListener("mousemove",t),document.querySelector(".swiper-wrapper").addEventListener("mouseover",n)}}),g=v,A=(n("7fc7"),Object(u["a"])(g,p,m,!1,null,"88edbab8",null)),_=A.exports,y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},[n("div",{staticClass:"swiper-slide"},[e._v("Ink Lingerie")]),n("div",{staticClass:"swiper-slide"},[e._v("Ink Lingerie")]),n("div",{staticClass:"swiper-slide"},[e._v("Ink Lingerie")])])])}],w=n("b619"),b={name:"Title",mounted:function(){new w["a"](".swiper-container",{direction:"horizontal",loop:!0})}},C=b,x=(n("d569"),Object(u["a"])(C,y,h,!1,null,"3d8e32bc",null)),E=x.exports,O={name:"app",components:{Menu:d,BackgroundScene:_,Title:E}},S=O,j=(n("034f"),Object(u["a"])(S,a,s,!1,null,null,null)),k=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(k)}}).$mount("#app")},"71b3":function(e,t,n){},"7e28":function(e,t,n){},"7fc7":function(e,t,n){"use strict";var r=n("351a"),a=n.n(r);a.a},"85ec":function(e,t,n){},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAAAQCAYAAADkpAq+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAL4SURBVHgB3VjtkdMwEH2Zuf+YDtQB6QB3cOkAXQW5qyCmAtJBRAUHFThU4HTgUMGZCoIWr/BalmU5OZjk3sybWNL6aVerL2cBYGW5RIvGcovbh7LUomwsj7gxGMsTs8bbQI4uphOXbwp3uA7klveWmeUD3gYoljXa1fvVco8ZuCQx1PGSO3Y4Rhwg+5x/pf1Hy0LUPZyp/1pQ6K8w2t4PCG+FGdsvPXuyfUbn+w/RvgzYB/UN5m1l5MzG8gX97cKR6r+gS4CyLEdsJSmQLb+3i+jX3H8MOeZvZXTWVhH/SvQnyTrio/S14P6n7Hee/qzEZGzjJ6IMdFqzfeXVaXZUe1ou8DqgE9KvIn7mmJeYTSCmCuFErdh3WVdwPdF4bWqGPtX/XU0G6YnxO9Be+2PA4Zi9375DfECLgH4IOdITozBcuZnXXqM/eAbxCRKLaTuhX7oGg/TElML2W4JN5ZVJn5a05t/aC6DyyiFUCT7kSE+MxnCG+1hhOLj+4GumjPcFw8SE4E9odcnh/26kvvHKdJjTYLqDchuwpwF+Qn/2/cK0/pgPl6BJsDHct+ayxnA32KONaeXVZwl9NHeBl3aRF+QSzNFmWg70J88RcqDk92jwv/Oz03G3kQOXqX0ttPbor4oN+rPfIA0b1ksBXVw+o7slKa5zOLKWRhsfDb6Myd2yDvzsLkvSlydRVuhidvp/EmcwPODGSEmokX746xnatFpy/JvDP0bSLwL1ZcAX4mqkfkx7E9B/GdEfPfynSB3QDNgifl12dtmMINxgqwmfpP4Y8hl91vyOnvC1RLdaixn6J4RvoSF95QJYoL8Mp9Cgvz/mGH4AHoSNEh0ay58jumvhw4J/L/3AVEjHUTy7PuWY0HYq496hHeg9+h+PEvfoZj+ds2ZEv2GdlLPt1VCgmxGPwilJ2hrc6itx/VAYriLlkeJ8FnYKVwaF9K2st5SvHP51ObbtapyBBf4PcssPlu+9enKcrsX+VnELUBj+7+VwRHczOwu/AVRADBJIdRm6AAAAAElFTkSuQmCC"},d569:function(e,t,n){"use strict";var r=n("71b3"),a=n.n(r);a.a}});
//# sourceMappingURL=app.4f204c12.js.map