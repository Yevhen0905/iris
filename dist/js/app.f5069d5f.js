(function(){"use strict";var t={3894:function(t,e,n){var r=n(6369),a=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("nav",[e("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),e("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),e("router-view")],1)},i=[],o=n(1001),l={},s=(0,o.Z)(l,a,i,!1,null,null,null),u=s.exports,c=n(2631),f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("PhotoApp")],1)},d=[],m=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ba-container"},[e("Header"),e("Controls"),e("div",{staticClass:"ba-row"},[e("div",{staticClass:"ba-col-8"},[e("Photo")],1),e("div",{staticClass:"ba-col-4"},[e("Filters")],1)])],1)},p=[],h=function(){var t=this,e=t._self._c;return e("div",[e("h1",{staticClass:"hl"},[e("svg",{staticClass:"header__logo",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 29 29"}},[e("g",{attrs:{"fill-rule":"evenodd"}},[e("path",{attrs:{d:"M8.495 3.628S4.939 4.95 2.839 9.922l11.585-2.19-5.929-4.104zm-5.831 7.003s-1.568 3.455.481 8.448l6.612-9.763-7.093 1.315zm.924 8.94s1.322 3.556 6.294 5.656L7.693 13.64l-4.105 5.931zm7.003 5.83s3.455 1.567 8.448-.481l-9.763-6.61 1.315 7.091zm9.131-.772s3.557-1.322 5.656-6.296l-11.586 2.189 5.93 4.107zm5.349-15.452l-6.61 9.763 7.093-1.316c0 .001 1.566-3.454-.483-8.447zm-.443-.492s-1.322-3.556-6.295-5.655l2.189 11.585 4.106-5.93zm-7.004-5.83s-3.453-1.568-8.447.482l9.764 6.61-1.317-7.092z"}}),e("path",{attrs:{d:"M14.151 0C6.336 0 0 6.336 0 14.15 0 21.963 6.335 28.3 14.151 28.3c7.813 0 14.149-6.338 14.149-14.15C28.301 6.336 21.965 0 14.151 0zm0 27.206c-7.199 0-13.057-5.857-13.057-13.056 0-7.199 5.858-13.056 13.057-13.056 7.197 0 13.055 5.857 13.055 13.056 0 7.199-5.858 13.056-13.055 13.056z"}})])]),t._v(" CSSgram ")]),t._m(0)])},v=[function(){var t=this,e=t._self._c;return e("h2",[t._v("Update CSS Variables with "),e("span",{staticClass:"hl"},[t._v("JS")])])}],b={name:"Header"},g=b,_=(0,o.Z)(g,h,v,!1,null,null,null),C=_.exports,y=function(){var t=this;t._self._c;return t._m(0)},w=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"controls"},[e("label",{attrs:{for:"spacing"}},[t._v("Border:")]),e("input",{staticClass:"range",attrs:{id:"spacing",type:"range",name:"spacing",min:"0",max:"50",value:"10"}}),e("label",{attrs:{for:"base"}},[t._v("Base Color")]),e("input",{attrs:{id:"base",type:"color",name:"base",value:"#ffc600"}})])}],S={name:"Controls"},x=S,P=(0,o.Z)(x,y,w,!1,null,null,null),k=P.exports,O=function(){var t=this;t._self._c;return t._m(0)},Z=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"ba-filtered-img-wrap"},[e("img",{staticClass:"ba-filtered-img",attrs:{src:"https://images.unsplash.com/photo-1542360579756-222c55226761?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=665282b37ac42b334e2b7fab0bca737c&auto=format&fit=crop&w=1350&q=80",alt:"CSSgram"}})])}],A={name:"Photo"},I=A,j=(0,o.Z)(I,O,Z,!1,null,null,null),E=j.exports,T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ba-filters"},[t._l(t.filtersArr,(function(n,r){return e("FilterItem",{key:r,attrs:{"filter-item":n},on:{updateState:t.updateState}})})),e("button",{staticClass:"ba-clear",attrs:{"data-clear":""}},[t._v("Clear all")])],2)},z=[],F=function(){var t=this,e=t._self._c;return e("div",{staticClass:"ba-filter"},[e("div",{staticClass:"ba-filter__top"},[e("label",{attrs:{for:"blur"}},[t._v(" "+t._s(t.filterItem.label)+": ")]),e("span",{staticClass:"ba-filter__value"},[t._v(" "+t._s(t.rangeValue)+" "+t._s(t.filterItem.dimension)+" ")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rangeValue,expression:"rangeValue"}],staticClass:"range",attrs:{type:"range",id:t.filterItem.id,name:t.filterItem.id,min:"0",max:t.filterItem.max},domProps:{value:t.rangeValue},on:{change:t.onImputChange,__r:function(e){t.rangeValue=e.target.value}}})])},N=[],V={name:"FilterItem",props:{filterItem:{type:Object,required:!0}},data(){return{rangeValue:this.filterItem.default}},mounted(){this.onImputChange()},methods:{onImputChange(){this.$emit("updateState",this.filterItem.id,this.rangeValue)}}},B=V,H=(0,o.Z)(B,F,N,!1,null,null,null),$=H.exports,L={name:"Filters",components:{FilterItem:$},data(){return{filterState:{blur:0,contrast:100,hue:0,sepia:0},filtersArr:[{label:"blur",dimension:"px",max:20,id:"blur",default:0},{label:"contrast",dimension:"%",max:200,id:"contrast",default:100},{label:"hue rotate",dimension:"deg",max:360,id:"hue",default:0},{label:"sepia",dimension:"%",max:100,id:"sepia",default:0}]}},methods:{updateState(t,e){this.filterState[t]=e;let n=document.getElementsByTagName("html")[0];n.style.cssText=this.htmlStyle}},computed:{htmlStyle(){return`--blur:${this.filterState.blur}px; --contrast:${this.filterState.contrast}%; --hue:${this.filterState.hue}deg; --sepia:${this.filterState.sepia}%; --saturate:${this.filterState.saturate}%;`}}},M=L,q=(0,o.Z)(M,T,z,!1,null,null,null),D=q.exports,J={name:"photoApp",components:{Header:C,Controls:k,Photo:E,Filters:D}},U=J,K=(0,o.Z)(U,m,p,!1,null,null,null),Q=K.exports,W={name:"HomeView",components:{PhotoApp:Q}},G=W,R=(0,o.Z)(G,f,d,!1,null,null,null),X=R.exports;r.ZP.use(c.ZP);const Y=[{path:"/",name:"home",component:X},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,6659))}],tt=new c.ZP({mode:"history",base:"/",routes:Y});var et=tt,nt=n(3822);r.ZP.use(nt.ZP);var rt=new nt.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}});r.ZP.config.productionTip=!1,new r.ZP({router:et,store:rt,render:t=>t(u)}).$mount("#app")}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,a,i){if(!r){var o=1/0;for(c=0;c<t.length;c++){r=t[c][0],a=t[c][1],i=t[c][2];for(var l=!0,s=0;s<r.length;s++)(!1&i||o>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(l=!1,i<o&&(o=i));if(l){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[r,a,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.88a6e166.js"}}(),function(){n.miniCssF=function(t){return"css/about.136a2dc8.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="iris:";n.l=function(r,a,i,o){if(t[r])t[r].push(a);else{var l,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){l=f;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",e+i),l.src=r),t[r]=[a];var d=function(e,n){l.onerror=l.onload=null,clearTimeout(m);var a=t[r];if(delete t[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var t=function(t,e,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(i){if(a.onerror=a.onload=null,"load"===i.type)n();else{var o=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=o,s.request=l,a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=i,a.href=e,document.head.appendChild(a),a},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===t||i===e))return a}var o=document.getElementsByTagName("style");for(r=0;r<o.length;r++){a=o[r],i=a.getAttribute("data-href");if(i===t||i===e)return a}},r=function(r){return new Promise((function(a,i){var o=n.miniCssF(r),l=n.p+o;if(e(o,l))return a();t(r,l,a,i)}))},a={143:0};n.f.miniCss=function(t,e){var n={443:1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=r(t).then((function(){a[t]=0}),(function(e){throw delete a[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var a=n.o(t,e)?t[e]:void 0;if(0!==a)if(a)r.push(a[2]);else{var i=new Promise((function(n,r){a=t[e]=[n,r]}));r.push(a[2]=i);var o=n.p+n.u(e),l=new Error,s=function(r){if(n.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var i=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,a[1](l)}};n.l(o,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var a,i,o=r[0],l=r[1],s=r[2],u=0;if(o.some((function(e){return 0!==t[e]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var c=s(n)}for(e&&e(r);u<o.length;u++)i=o[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},r=self["webpackChunkiris"]=self["webpackChunkiris"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3894)}));r=n.O(r)})();
//# sourceMappingURL=app.f5069d5f.js.map