(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd6b2294"],{"51ec":function(t,e,s){t.exports=s.p+"img/eth-matic.e40c32d5.png"},"7eb0":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"main"}},[s("div",{staticClass:"content"},[s("h3",{staticClass:"account"},[t._v("Connected Account "),s("span",{staticClass:"purple",attrs:{id:"account"}},[t._v(t._s(t.account))]),s("button",{staticClass:"addStar",on:{click:t.CustomToken}},[t._v("Add Stars to "),s("img",{attrs:{width:"30px",src:"https://jaguarswap.com/images/tokens/metamask.png"}})])]),s("h4",{staticClass:"heading center"},[t._v("Yield Farming")]),s("p",{staticClass:"sm-heading center"},[t._v("Stake Tokens to earn STAR")]),t._m(0),s("div",{staticClass:"cards"},[s("div",{staticClass:"container"},t._l(t.starSeed,(function(e){return s("div",{staticClass:"card",class:{larger:e.type}},[e.type?t._e():s("div",[s("div",{staticClass:"icon"},[s("img",{attrs:{src:e.img}}),t._v(" "+t._s(e.name)+" ")]),t._m(1,!0),t._m(2,!0),t._m(3,!0),t._m(4,!0),t._m(5,!0),s("button",{on:{click:t.MetaMask}},[t._v("Unlock Wallet")]),s("hr"),e.show?t._e():s("button",{staticClass:"btn-sm",on:{click:function(t){e.show=!0}}},[t._v("Details")]),e.show?s("button",{staticClass:"btn-sm",on:{click:function(t){e.show=!1}}},[t._v("Hide Details")]):t._e(),e.show?s("div",{staticClass:"info"},[t._m(6,!0),t._m(7,!0),t._m(8,!0)]):t._e()]),e.type?s("div",{staticStyle:{width:"100%",height:"100%"},domProps:{innerHTML:t._s(e.url)}}):t._e()])})),0)])])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h6",[t._v(" Stake tokens to earn STAR "),s("br"),t._v(" 50% of the Deposit Fee will be used to buyback STAR and Burn the Tokens"),s("br"),t._v(" Burn Time: Everyday 14:00 UTC"),s("br"),t._v(" 50% of the Deposit Fee will be sent to treasury wallet for Future Development (example, for Jungle pools)"),s("br"),t._v(" Farms and Pools are live"),s("br")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid"},[s("div",{staticClass:"label"},[t._v(" APR : ")]),s("div",{staticClass:"cont"},[t._v(" NaN% ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid"},[s("div",{staticClass:"label"},[t._v(" Earn : ")]),s("div",{staticClass:"cont"},[t._v(" STAR ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid"},[s("div",{staticClass:"label large-text"},[t._v(" Deposit Fee : ")]),s("div",{staticClass:"cont  large-text"},[t._v(" NaN% ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid"},[s("div",{staticClass:"label colored"},[t._v(" STAR EARNED ")]),s("div",{staticClass:"cont"},[s("button",[t._v("Compound")]),s("button",[t._v("Harvest")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid"},[s("div",{staticClass:"label colored"},[t._v(" STAR STAKED ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid"},[s("div",{staticClass:"label colored"},[t._v(" Deposit: ")]),s("div",{staticClass:"cont sm-text"},[t._v(" STAR "),s("i",{staticClass:"far fa-external-link-square-alt"})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid"},[s("div",{staticClass:"label colored"},[t._v(" Total Liquidity: ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"grid"},[s("div",{staticClass:"label colored"},[s("a",{attrs:{href:""}},[t._v("View on Matic Explorer")])])])}],i=s("1da1"),c=(s("96cf"),s("bc3a"),s("c1df"),s("bba9")),r=s.n(c),o=s("e857"),l=s.n(o),u=s("51ec"),d=s.n(u),m=s("c6c0"),v=s.n(m),p=s("8fd4"),h=s.n(p),f=(s("7eba"),{components:{},data:function(){return{starSeed:[{name:"StartSeed Matic",color:"blue",img:r.a,show:!1},{name:"BTC Matic",color:"purple",img:l.a,show:!1},{name:"ETH Matic",color:"red",img:d.a,show:!1},{name:"ETH BTC",color:"green",img:v.a,show:!1},{name:"Matic USD",color:"orange",img:h.a,show:!1}],account:"Not Connected"}},watch:{$route:{handler:function(t,e){}}},created:function(){"undefined"!==typeof window.ethereum&&console.log("MetaMask is installed!")},methods:{MetaMask:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ethereum.request({method:"eth_requestAccounts"});case 2:s=e.sent,console.log(s),t.account=s[0];case 5:case"end":return e.stop()}}),e)})))()},CustomToken:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,a,n,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.MetaMask();case 2:return e.sent,s="0xC6e2e8395A671eE3f6f55177F8Fe5984D5dA7741",a="STAR",n=18,i="https://upwork-usw2-prod-file-storage-wp1.s3.us-west-2.amazonaws.com/workplace/attachment/fa082a5b2e94bf1e76ca0f9b5fc23411?response-content-disposition=inline%3B%20filename%3D%22Starseed-Dimension1.jpg%22%3B%20filename%2A%3Dutf-8%27%27Starseed-Dimension1.jpg&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGw2APTHGT%2BDzrP4FrawkgDvU5hD%2Fr2hbDHPVM074KpkAiEAw3sFP5RDbQn1YefTCH8FISnhl724N4UQ0KBQPmIKouAq1gQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw3Mzk5MzkxNzM4MTkiDAImma6YwmGQI3Wu3SqqBIuFEDzBiTY5AOjndBtNhTUDamknRsuB4AX8IDsrm6bMNu8sVHOhQFMJ7UiFK155cMYs%2FM6IfhxFJUqzZuAZsks4dLdKMe%2FVpe10XlmbulaYyJXKY577ULBsuhh56ba3Jx4UVWydotee0NMbjZOb%2FBuHXlogYtBvmk258j8mqjuVVxsgdo8slUfw85os%2Bzmk7%2F%2B3onTI2vl2BdTmI3oD1cpCz334mNvsxMLsAwTSl8f2A7L12W3MWuNAQtvNh%2By7Q5LSPn9cyqb1raUIoF2jS%2FRvH%2BaulGp2bhn733qJGqzwUNLYmi9pQyVnpJg66V5dPjF1t168QLbbSjEx9t7fp%2FWidZK08yL0%2FAy1doNH2FzNkPKmrhmiPAYqoohEgLlIeBqACzy70MLA9YJcsL%2Fe5Xh%2F7tkmYUdPk%2BtfKbMVo9fOxsibrmYaZ0vOr%2F5VdpckU%2FW%2FE2VUS%2BJwi21h%2Bee7UXXSsdSQBIBisOPhRj4dEn6skev41s49kmtHgsQvzCNvCzMc4kAteI87c7WnUb9CQjDVPxgpcMuLrR8xzh9Hd1PpOhB5aObvxaWJpCiAbDt8NgpcxUNWAr0HTxHmCRNV4iRz4GxwODTx9OHTv8xpkWsOlBMGw0%2BKgwZ9KKD1BvFu%2BsktKg2pLg3lkU0Er0%2FZe1fo%2Bs2STOPpoax8%2BlXU1w11R5XaC34KnJW0zz%2BUx6twfOy%2F7cFI4CF1Qsj%2BVD0%2BhLjJYu0%2BTKFJFo3SMNPp04oGOqcB%2Bg0mDvadqMC65u%2FMo3EWEkRwlPAByx8QTbIbNLPzVOcY5lqCEVhQVBYoXs2%2FbsNhKdUH3y5FjRewUPsk0grVBvanllaDyu6wHbCWcjcclKm8TmSKCOFFqCszfbqOU6nvOhnTL6sawLSx7f%2FGQI1FuYgqJIBTnuujPxGYrmq55XnVg%2Fdi30ijaSDj9VhpHqwukthXwNAlUUQnTsFvqzwOdkG6G2JvNSQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20210930T001840Z&X-Amz-SignedHeaders=host&X-Amz-Expires=599&X-Amz-Credential=ASIA2YR6PYW54ATYNRN4%2F20210930%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=b071723508914fffe021f4069504334a80e996e73e3079cc6b01ea48879aa57a",e.prev=7,e.next=10,ethereum.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:s,symbol:a,decimals:n,image:i}}});case 10:c=e.sent,c?console.log("Thanks for your interest!"):console.log("Your loss!"),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](7),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})))()}}}),b=f,g=s("2877"),_=Object(g["a"])(b,a,n,!1,null,null,null);e["default"]=_.exports},"8fd4":function(t,e,s){t.exports=s.p+"img/matic-usd.afd34c18.png"},bba9:function(t,e,s){t.exports=s.p+"img/matic.e7b8589c.png"},c6c0:function(t,e,s){t.exports=s.p+"img/eth-btc.798f079d.png"},e857:function(t,e,s){t.exports=s.p+"img/btc-matic.adbc6ade.png"}}]);
//# sourceMappingURL=chunk-cd6b2294.8b01f471.js.map