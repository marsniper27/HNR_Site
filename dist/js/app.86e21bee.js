(function(e){function n(n){for(var r,o,u=n[0],i=n[1],s=n[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);f&&f(n);while(d.length)d.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,o=1;o<t.length;o++){var u=t[o];0!==a[u]&&(r=!1)}r&&(c.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-04623056":"3aac5426","chunk-463f4924":"cf86d46a"}[e]+".js"}function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.e=function(e){var n=[],t={"chunk-04623056":1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=new Promise((function(n,t){for(var r="css/"+({}[e]||e)+"."+{"chunk-04623056":"af9cecad","chunk-463f4924":"31d6cfe0"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var s=c[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return n()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){s=d[u],l=s.getAttribute("data-href");if(l===r||l===a)return n()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=n,f.onerror=function(n){var r=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),t(c)},f.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)n.push(r[2]);else{var c=new Promise((function(n,t){r=a[e]=[n,t]}));n.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var d=new Error;s=function(n){l.onerror=l.onload=null,clearTimeout(f);var t=a[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(n)},i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var f=l;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},1:function(e,n){},10:function(e,n){},11:function(e,n){},12:function(e,n){},13:function(e,n){},14:function(e,n){},2:function(e,n){},3:function(e,n){},4:function(e,n){},5:function(e,n){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("2b0e"),o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("Header"),t("router-view")],1)},a=[],c=(t("bc3a"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"fw"},[t("div",{staticClass:"topBar"},[t("i",{staticClass:"fas fa-layer-minus toggle",on:{click:e.toggleMenu}})])])}),u=[],i=t("1da1"),s=(t("96cf"),t("4795"),t("5a89")),l=t("5826"),d=(t("99e5"),{data:function(){return{camera:!1,scene:!1,renderer:!1,stars:[],account:!1,showMenu:!1,connected:!1}},components:{},watch:{"$route.params":{handler:function(e,n){console.log(this.$route.path)},immediate:!0}},created:function(){this.webGL(),"undefined"!==typeof window.ethereum&&(console.log("MetaMask is installed!"),null==this.$route.params.web3||null==this.$route.params.account?(console.log("account not set"),this.MetaMask()):(console.log("account already set"),this.account=this.$route.params.account,this.connected=!0))},methods:{toggleMenu:function(){this.showMenu?this.showMenu=!1:this.showMenu=!0},webGL:function(){var e=this,n=function(){e.camera=new s["c"](45,window.innerWidth/window.innerHeight,1,1e3),e.camera.position.z=5,e.scene=new s["d"],e.renderer=new s["f"]({alpha:!0}),e.renderer.setSize(window.innerWidth,window.innerHeight),document.body.prepend(e.renderer.domElement)},t=function(){for(var n=-1e3;n<1e3;n+=20){var t=new s["e"](.5,32,32),r=new s["b"]({color:16777215}),o=new s["a"](t,r);o.position.x=1e3*Math.random()-500,o.position.y=1e3*Math.random()-500,o.position.z=n,o.scale.x=o.scale.y=2,e.scene.add(o),e.stars.push(o)}},r=function(){for(var n=0;n<e.stars.length;n++){var t=e.stars[n];t.position.z+=n/10,t.position.z>1e3&&(t.position.z-=2e3)}},o=function n(){requestAnimationFrame(n),e.renderer.render(e.scene,e.camera),r()};n(),t(),o()},MetaMask:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:Object(l["a"])().then((function(n){var t=n;e.$route.params.web3=t,t.eth.getAccounts().then((function(n){n.length>0?(e.account=n[0],e.$route.params.account=n[0],e.connected=!0,console.log(e.account),e.messages=!1):(e.messages="No account Connected",console.log("no account connected"),setTimeout((function(n){e.messages=!1}),5e3))}))}));case 1:case"end":return n.stop()}}),n)})))()}}}),f=d,h=t("2877"),p=Object(h["a"])(f,c,u,!1,null,null,null),m=p.exports,w={name:"Home",components:{Header:m},data:function(){return{}},watch:{$route:function(e,n){}},methods:{init:function(){}},mounted:function(){},created:function(){}},g=w,v=Object(h["a"])(g,o,a,!1,null,null,null),b=v.exports,y=(t("d3b7"),t("3ca3"),t("ddb0"),t("8c4f"));r["a"].use(y["a"]);var k=[{path:"/",name:"Home",component:function(){return t.e("chunk-463f4924").then(t.bind(null,"bb51"))}},{path:"*",name:"404",component:function(){return t.e("chunk-04623056").then(t.bind(null,"8cdb"))}}],M=new y["a"]({mode:"hash",routes:k}),O=M,j=t("2f62"),E=t("bd8c"),P=t.n(E);t("f843");r["a"].config.productionTip=!1,r["a"].use(j["a"]),new r["a"]({router:O,render:function(e){return e(b)}}).$mount("#app"),r["a"].use(P.a)},5826:function(e,n,t){"use strict";t("d3b7");var r=t("99e5"),o=t.n(r),a=function(){return new Promise((function(e){var n;if(window.ethereum){n=new o.a(window.ethereum);try{window.ethereum.enable(),e(n)}catch(t){alert("Please allow access for the app to work")}}else window.web3?(window.web3=new o.a(web3.currentProvider),e(n)):(console.log("Non-Ethereum browser detected. You should consider trying MetaMask!"),e("Non-Ethereum browser detected. You should consider trying MetaMask!"))}))};n["a"]=a},6:function(e,n){},7:function(e,n){},8:function(e,n){},9:function(e,n){},f843:function(e,n,t){}});
//# sourceMappingURL=app.86e21bee.js.map