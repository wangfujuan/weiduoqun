require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{163:function(t,e,a){"use strict";var n=i(a(1)),s=i(a(164));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},164:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(166),s=a.n(n),i=a(174),r=!1;var o=function(t){r||a(165)},c=a(0)(s.a,i.a,o,null,null);c.options.__file="MAMP/htdocs/weiduoqun/pages/sourcegoods/sourcegoods.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] sourcegoods.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},165:function(t,e){},166:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n,s=a(167),i=(n=s)&&n.__esModule?n:{default:n};function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,a){return function n(s,i){try{var r=e[s](i),o=r.value}catch(t){return void a(t)}if(!r.done)return Promise.resolve(o).then(function(t){n("next",t)},function(t){n("throw",t)});t(o)}("next")})}}e.default={components:{},data:function(){return{scrollLeft:0,isClickChange:!1,tabIndex:0,newsitems:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9}],tabBars:[{name:"全部",id:"guanzhu"},{name:"护肤彩妆",id:"tuijian"},{name:"减肥瘦身",id:"tiyu"},{name:"鞋帽箱包",id:"redian"},{name:"食品保健",id:"caijing"},{name:"电子数码",id:"yule"},{name:"母婴亲子",id:"junshi"},{name:"男装女装",id:"lishi"},{name:"其他",id:"bendi"}]}},onLoad:function(){this.newsitems=this.randomfn()},methods:{goDetail:function(e){t.navigateTo({url:"/pages/template/tabbar/detail/detail?data="+e.title})},close:function(e,a){var n=this;t.showModal({content:"是否删除本条信息？",success:function(t){t.confirm&&n.newsitems[e].data.splice(a,1)}})},loadMore:function(t){var e=this;setTimeout(function(){e.addData(t)},1e3)},addData:function(t){if(console.log("加载更多..."),this.newsitems[t].data.length>30)this.newsitems[t].loadingText="没有更多了";else for(var e=1;e<=10;e++)this.newsitems[t].data.push(this["data"+Math.floor(5*Math.random())])},changeTab:function(e){var a=this;return r(i.default.mark(function n(){var s,r,o,c,l,u,d,f,m;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(s=e.target.current,!a.isClickChange){n.next=5;break}return a.tabIndex=s,a.isClickChange=!1,n.abrupt("return");case 5:return n.next=7,a.getElSize("tab-bar");case 7:r=n.sent,o=r.scrollLeft,c=0,l=0;case 11:if(!(l<s)){n.next=19;break}return n.next=14,a.getElSize(a.tabBars[l].id);case 14:u=n.sent,c+=u.width;case 16:l++,n.next=11;break;case 19:return d=t.getSystemInfoSync().windowWidth,n.next=22,a.getElSize(a.tabBars[s].id);case 22:f=n.sent,m=f.width,c+m-o>d&&(a.scrollLeft=c+m-d),c<o&&(a.scrollLeft=c),a.isClickChange=!1,a.tabIndex=s;case 28:case"end":return n.stop()}},n,a)}))()},getElSize:function(e){return new Promise(function(a,n){t.createSelectorQuery().select("#"+e).fields({size:!0,scrollOffset:!0},function(t){a(t)}).exec()})},tapTab:function(t){var e=this;return r(i.default.mark(function a(){var n,s;return i.default.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(e.tabIndex!==t.target.dataset.current){a.next=4;break}return a.abrupt("return",!1);case 4:return a.next=6,e.getElSize("tab-bar");case 6:n=a.sent,s=n.scrollLeft,e.scrollLeft=s,e.isClickChange=!0,e.tabIndex=t.target.dataset.current;case 11:case"end":return a.stop()}},a,e)}))()},randomfn:function(){for(var t=[],e=0,a=this.tabBars.length;e<a;e++){for(var n={loadingText:"加载更多...",data:[]},s=1;s<=10;s++)n.data.push(this["data"+Math.floor(5*Math.random())]);t.push(n)}return t}}}}).call(e,a(3).default)},174:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"index"},[a("scroll-view",{staticClass:"swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabBars,function(e,n){return a("view",{key:e.id,class:["swiper-tab-list",t.tabIndex==n?"active":""],attrs:{id:e.id,"data-current":n,eventid:"RaG-0-"+n},on:{tap:t.tapTab}},[t._v(t._s(e.name))])})),a("swiper",{staticClass:"swiper-box",attrs:{current:t.tabIndex,duration:"300",eventid:"hEE-2"},on:{change:t.changeTab}},t._l(t.newsitems,function(e,n){return a("swiper-item",{key:e.id,attrs:{mpcomid:"Khz-0-"+n}},[a("scroll-view",{staticClass:"list",attrs:{"scroll-y":"",eventid:"7BF-1-"+n},on:{scrolltolower:function(e){t.loadMore(n)}}},[a("view",{staticClass:"goods-ls"},[a("view",{staticClass:"goods-item"},[a("view",{staticClass:"goods-item-con"},[a("image",{staticClass:"goods-img",attrs:{src:"../../static/goods.jpg",mode:"aspectFill"}}),a("view",{staticClass:"goods-item-tl"},[t._v("\n\t\t\t\t\t\t\t\t\t九分裤格子条纹复古风女裤\n\t\t\t\t\t\t\t\t")]),a("view",{staticClass:"goods-item-user"},[a("image",{staticClass:"avatar-36",attrs:{src:"../../static/avatar/avatar_2.jpg",mode:"widthFix"}}),t._v("\n\t\t\t\t\t\t\t\t\t150***1029\n\t\t\t\t\t\t\t\t\t"),a("view",{staticClass:"goods-item-sum"},[t._v("\n\t\t\t\t\t\t\t\t\t\t100查看\n\t\t\t\t\t\t\t\t\t")])])])])]),a("view",{staticClass:"loadmore"},[a("text",{staticClass:"loadmore-text"},[t._v(t._s(e.loadingText))])])])],1)}))],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};e.a=s}},[163]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/sourcegoods/sourcegoods.js.map