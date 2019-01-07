require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{224:function(t,e,n){"use strict";var i=s(n(1)),a=s(n(225));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},225:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(227),a=n.n(i),s=n(228),r=!1;var o=function(t){r||n(226)},l=n(0)(a.a,s.a,o,null,null);l.options.__file="MAMP/htdocs/weiduoqun/pages/weinews/weinews.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] weinews.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},226:function(t,e){},227:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=s(n(16)),a=s(n(2));function s(t){return t&&t.__esModule?t:{default:t}}function r(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function i(a,s){try{var r=e[a](s),o=r.value}catch(t){return void n(t)}if(!r.done)return Promise.resolve(o).then(function(t){i("next",t)},function(t){i("throw",t)});t(o)}("next")})}}var o=n(12).dateUtils;e.default={components:{uniIcon:a.default},data:function(){return{listData:[],scrollLeft:0,isClickChange:!1,tabIndex:0,newsitems:[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9}],tabBars:[{name:"全部",id:"guanzhu"},{name:"推广引流",id:"tuijian"},{name:"销售成交",id:"tiyu"},{name:"新手入门",id:"redian"},{name:"朋友圈",id:"caijing"},{name:"文案写作",id:"yule"},{name:"营销技巧",id:"junshi"}]}},onLoad:function(){this.newsitems=this.randomfn(),this.getList()},onPullDownRefresh:function(){this.reload=!0,this.last_id="",this.getBanner(),this.getList()},onReachBottom:function(){this.getList()},methods:{goDetail:function(e){t.navigateTo({url:"/pages/weinewsDetail/weinewsDetail?data="+e.title})},close:function(e,n){var i=this;t.showModal({content:"是否删除本条信息？",success:function(t){t.confirm&&i.newsitems[e].data.splice(n,1)}})},loadMore:function(t){var e=this;setTimeout(function(){e.addData(t)},1e3)},addData:function(t){if(console.log("加载更多..."),this.newsitems[t].data.length>30)this.newsitems[t].loadingText="没有更多了";else for(var e=1;e<=10;e++)this.newsitems[t].data.push(this["data"+Math.floor(5*Math.random())])},changeTab:function(e){var n=this;return r(i.default.mark(function a(){var s,r,o,l,u,c,d,f,h;return i.default.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(s=e.target.current,!n.isClickChange){i.next=5;break}return n.tabIndex=s,n.isClickChange=!1,i.abrupt("return");case 5:return i.next=7,n.getElSize("tab-bar");case 7:r=i.sent,o=r.scrollLeft,l=0,u=0;case 11:if(!(u<s)){i.next=19;break}return i.next=14,n.getElSize(n.tabBars[u].id);case 14:c=i.sent,l+=c.width;case 16:u++,i.next=11;break;case 19:return d=t.getSystemInfoSync().windowWidth,i.next=22,n.getElSize(n.tabBars[s].id);case 22:f=i.sent,h=f.width,l+h-o>d&&(n.scrollLeft=l+h-d),l<o&&(n.scrollLeft=l),n.isClickChange=!1,n.tabIndex=s;case 28:case"end":return i.stop()}},a,n)}))()},getElSize:function(e){return new Promise(function(n,i){t.createSelectorQuery().select("#"+e).fields({size:!0,scrollOffset:!0},function(t){n(t)}).exec()})},tapTab:function(t){var e=this;return r(i.default.mark(function n(){var a,s;return i.default.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(e.tabIndex!==t.target.dataset.current){n.next=4;break}return n.abrupt("return",!1);case 4:return n.next=6,e.getElSize("tab-bar");case 6:a=n.sent,s=a.scrollLeft,e.scrollLeft=s,e.isClickChange=!0,e.tabIndex=t.target.dataset.current;case 11:case"end":return n.stop()}},n,e)}))()},randomfn:function(){for(var t=[],e=0,n=this.tabBars.length;e<n;e++){for(var i={loadingText:"加载更多...",data:[]},a=1;a<=10;a++)i.data.push(this["data"+Math.floor(5*Math.random())]);t.push(i)}return t},getList:function(){var e=this,n={column:"id,post_id,title,author_name,cover,published_at"};this.last_id&&(n.minId=this.last_id,n.time=(new Date).getTime()+"",n.pageSize=10),t.request({url:"https://unidemo.dcloud.net.cn/api/news",data:n,success:function(t){if(200==t.statusCode){var n=e.setTime(t.data);e.listData=e.reload?n:e.listData.concat(n),e.last_id=n[n.length-1].id,e.reload=!1}},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},setTime:function(t){var e=[];return t.forEach(function(t){e.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:o.format(t.published_at),title:t.title})}),e}}}}).call(e,n(3).default)},228:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"index"},[n("scroll-view",{staticClass:"swiper-tab",attrs:{id:"tab-bar","scroll-x":"","scroll-left":t.scrollLeft}},t._l(t.tabBars,function(e,i){return n("view",{key:e.id,class:["swiper-tab-list",t.tabIndex==i?"active":""],attrs:{id:e.id,"data-current":i,eventid:"nfP-0-"+i},on:{tap:t.tapTab}},[t._v(t._s(e.name))])})),n("swiper",{staticClass:"swiper-box",attrs:{current:t.tabIndex,duration:"300",eventid:"rDZ-3"},on:{change:t.changeTab}},t._l(t.newsitems,function(e,i){return n("swiper-item",{key:e.id,attrs:{mpcomid:"30g-0-"+i}},[n("scroll-view",{staticClass:"list",attrs:{"scroll-y":"",eventid:"aYX-2-"+i},on:{scrolltolower:function(e){t.loadMore(i)}}},[n("view",{staticClass:"uni-list"},t._l(t.listData,function(e,a){return n("view",{key:a,staticClass:"uni-list-cell b-line",attrs:{"hover-class":"uni-list-cell-hover",eventid:"lbd-1-"+i+"-"+a},on:{click:function(n){t.goDetail(e)}}},[n("view",{staticClass:"uni-media-list"},[n("image",{staticClass:"uni-media-list-logo",attrs:{src:e.cover}}),n("view",{staticClass:"uni-media-list-body"},[n("view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(e.title))]),n("view",{staticClass:"uni-media-list-text-bottom"},[n("text",[t._v(t._s(e.author_name))]),n("text",[t._v(t._s(e.published_at))])])])])])}))])],1)}))],1)};i._withStripped=!0;var a={render:i,staticRenderFns:[]};e.a=a}},[224]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/weinews/weinews.js.map