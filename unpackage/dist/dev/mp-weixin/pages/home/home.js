require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([41],{22:function(t,i,a){"use strict";var s=c(a(1)),e=c(a(23));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(e.default))},23:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var s=a(25),e=a.n(s),c=a(29),n=!1;var o=function(t){n||a(24)},l=a(0)(e.a,c.a,o,null,null);l.options.__file="MAMP/htdocs/weiduoqun/pages/home/home.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions."),i.default=l.exports},24:function(t,i){},25:function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0});var s,e=a(2),c=(s=e)&&s.__esModule?s:{default:s};var n=a(12).dateUtils;i.default={data:function(){return{listData:[],reload:!1,indicatorDots:!1,autoplay:!1,interval:2e3,duration:500,grids:[{name:"微信群",icon:"duoren2",syicon:"iconwp oneicon",url:"../wxgroup/wxgroup"},{name:"QQ群",icon:"geren2",syicon:"iconwp twoicon"},{name:"个人微信",icon:"xin2",syicon:"iconwp threeicon"},{name:"人脉多",icon:"qq02",syicon:"iconwp fouricon",url:"../contact/contact"},{name:"群交易",icon:"qq02",syicon:"iconwp fiveicon"},{name:"微商圈",icon:"upstagefill",syicon:"iconwp sixicon"},{name:"微商货源",icon:"chanpin2",syicon:"iconwp sevenicon"},{name:"收益中心",icon:"icon_fuzhugongju-mian",syicon:"iconwp eighticon"}],cardList:[{id:1,img:"../../static/avatar/avatar_1.jpg",name:"月儿"},{id:2,img:"../../static/avatar/avatar_2.jpg",name:"萤火虫"},{id:3,img:"../../static/avatar/avatar_3.jpg",name:"萤火虫"},{id:4,img:"../../static/avatar/avatar_4.jpg",name:"萤火虫"},{id:5,img:"../../static/avatar/avatar_5.jpg",name:"萤火虫"},{id:6,img:"../../static/avatar/avatar_6.jpg",name:"萤火虫"}],hotList:[{id:1,img:"../../static/avatar/avatar_1.jpg",name:"月儿"},{id:2,img:"../../static/avatar/avatar_2.jpg",name:"萤火虫"},{id:3,img:"../../static/avatar/avatar_3.jpg",name:"萤火虫"},{id:4,img:"../../static/avatar/avatar_1.jpg",name:"萤火虫"},{id:5,img:"../../static/avatar/avatar_2.jpg",name:"萤火虫"},{id:6,img:"../../static/avatar/avatar_3.jpg",name:"萤火虫"}]}},onLoad:function(){this.getList()},onPullDownRefresh:function(){this.reload=!0,this.last_id="",this.getBanner(),this.getList()},onReachBottom:function(){this.getList()},components:{uniIcon:c.default},methods:{getList:function(){var i=this,a={column:"id,post_id,title,author_name,cover,published_at"};this.last_id&&(a.minId=this.last_id,a.time=(new Date).getTime()+"",a.pageSize=10),t.request({url:"https://unidemo.dcloud.net.cn/api/news",data:a,success:function(t){if(200==t.statusCode){var a=i.setTime(t.data);i.listData=i.reload?a:i.listData.concat(a),i.last_id=a[a.length-1].id,i.reload=!1}},fail:function(t,i){console.log("fail"+JSON.stringify(t))}})},setTime:function(t){var i=[];return t.forEach(function(t){i.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:n.format(t.published_at),title:t.title})}),i},toContact:function(){t.switchTab({url:"/pages/contact/contact"})},toCircle:function(){t.switchTab({url:"/pages/circle/circle"})},toObtain:function(){t.switchTab({url:"/pages/obtain/obtain"})}},onNavigationBarButtonTap:function(){t.navigateTo({url:"/pages/weibi/weibi"})}}}).call(i,a(3).default)},29:function(t,i,a){"use strict";var s=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{staticClass:"content"},[a("view",{staticClass:"shadow"}),a("swiper",{attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration,circular:"true","next-margin":"20rpx","previous-margin":"20rpx"}},[a("swiper-item",{attrs:{mpcomid:"wHF-0"}},[a("view",{staticClass:"swiper-item"},[a("image",{attrs:{src:"../../static/banner.jpg",mode:"widthFix"}})])]),a("swiper-item",{attrs:{mpcomid:"OaP-1"}},[a("view",{staticClass:"swiper-item"},[a("image",{attrs:{src:"../../static/banner.jpg",mode:"widthFix"}})])]),a("swiper-item",{attrs:{mpcomid:"Bnx-2"}},[a("view",{staticClass:"swiper-item"},[a("image",{attrs:{src:"../../static/banner.jpg",mode:"widthFix"}})])])],1),a("view",{staticClass:"content-pad"},[a("view",{staticClass:"white"},[a("view",{staticClass:"uni-grid-9 b-line"},[a("navigator",{staticClass:"uni-grid-9-item",attrs:{"hover-class":"none",url:"../wxgroup/wxgroup"}},[a("view",{staticClass:"iconwp oneicon"},[a("uni-icon",{attrs:{type:"duoren2",mpcomid:"yfe-3"}})],1),a("text",{staticClass:"uni-grid-9-text"},[t._v("微信群")])]),a("navigator",{staticClass:"uni-grid-9-item",attrs:{"hover-class":"none",url:"../wxgroup/wxgroup"}},[a("view",{staticClass:"iconwp fouricon"},[a("uni-icon",{attrs:{type:"qq02",mpcomid:"BGF-4"}})],1),a("text",{staticClass:"uni-grid-9-text"},[t._v("QQ群")])]),a("navigator",{staticClass:"uni-grid-9-item",attrs:{"hover-class":"none",url:"../wxPersonal/wxPersonal"}},[a("view",{staticClass:"iconwp twoicon"},[a("uni-icon",{attrs:{type:"geren2",mpcomid:"jqF-5"}})],1),a("text",{staticClass:"uni-grid-9-text"},[t._v("个人微信")])]),a("view",{staticClass:"uni-grid-9-item",attrs:{eventid:"ImK-0"},on:{click:t.toContact}},[a("view",{staticClass:"iconwp threeicon"},[a("uni-icon",{attrs:{type:"xin2",mpcomid:"68l-6"}})],1),a("text",{staticClass:"uni-grid-9-text"},[t._v("人脉多")])]),a("navigator",{staticClass:"uni-grid-9-item",attrs:{"hover-class":"none",url:"../wxgroup/wxgroup"}},[a("view",{staticClass:"iconwp fiveicon"},[a("uni-icon",{attrs:{type:"upstagefill",mpcomid:"VER-7"}})],1),a("text",{staticClass:"uni-grid-9-text"},[t._v("群交易")])]),a("view",{staticClass:"uni-grid-9-item",attrs:{eventid:"hiP-1"},on:{click:t.toCircle}},[a("view",{staticClass:"iconwp sixicon"},[a("uni-icon",{attrs:{type:"fankui-tianchong",mpcomid:"ms8-8"}})],1),a("text",{staticClass:"uni-grid-9-text"},[t._v("微商圈")])]),a("navigator",{staticClass:"uni-grid-9-item",attrs:{"hover-class":"none",url:"../sourcegoods/sourcegoods"}},[a("view",{staticClass:"iconwp sevenicon"},[a("uni-icon",{attrs:{type:"chanpin2",mpcomid:"IUH-9"}})],1),a("text",{staticClass:"uni-grid-9-text"},[t._v("微商货源")])]),a("view",{staticClass:"uni-grid-9-item",attrs:{eventid:"BR5-2"},on:{click:t.toObtain}},[a("view",{staticClass:"iconwp eighticon"},[a("uni-icon",{attrs:{type:"qiandai-tianchong",mpcomid:"zho-10"}})],1),a("text",{staticClass:"uni-grid-9-text"},[t._v("收益中心")])])],1),a("view",{staticClass:"tips"},[a("view",{staticClass:"tips-text"},[t._v("\n\t\t\t\t\t注意：防骗提醒，让你远离骗子！\n\t\t\t\t")]),a("uni-icon",{attrs:{type:"arrowright",mpcomid:"IJO-11"}})],1)]),a("view",{staticClass:"white"},[a("view",{staticClass:"block-tl"},[a("view",{staticClass:"block-tl-lf"},[a("view",{staticClass:"block-tl-icon block-tl-color1"},[a("uni-icon",{attrs:{type:"geren2",mpcomid:"85w-12"}})],1),a("text",{staticClass:"mdtxt"},[t._v("推荐名片")])]),a("view",{staticClass:"block-tl-rt"},[a("view",{staticClass:"block-tl-rt-item"},[a("uni-icon",{attrs:{type:"laiyuan",mpcomid:"ERr-13"}}),a("text",{staticClass:"mdtxt"},[t._v("导入")])],1),a("view",{staticClass:"block-tl-rt-item"},[a("uni-icon",{attrs:{type:"qinglihuancun",mpcomid:"Ehd-14"}}),a("text",{staticClass:"mdtxt"},[t._v("清理")])],1)])]),a("scroll-view",{staticClass:"card-ls",attrs:{"scroll-x":"","scroll-left":"0"}},t._l(t.cardList,function(i,s){return a("view",{key:i.id,staticClass:"card-item"},[a("view",{staticClass:"card-avatar"},[a("image",{attrs:{src:i.img,mode:"widthFix"}})]),a("view",{staticClass:"card-name"},[a("text",{staticClass:"ding"},[t._v("顶")]),a("text",{staticClass:"mdtxt"},[t._v(t._s(i.name))])])])}))],1),a("view",{staticClass:"white"},[a("view",{staticClass:"block-tl"},[a("view",{staticClass:"block-tl-lf"},[a("view",{staticClass:"block-tl-icon block-tl-color2"},[a("uni-icon",{attrs:{type:"duoren2",mpcomid:"S0M-15"}})],1),a("text",{staticClass:"mdtxt"},[t._v("热门群")])]),a("view",{staticClass:"block-tl-rt"},[a("view",{staticClass:"block-tl-rt-item"},[a("uni-icon",{attrs:{type:"laiyuan",mpcomid:"NvI-16"}}),a("text",{staticClass:"mdtxt"},[t._v("导入")])],1),a("view",{staticClass:"block-tl-rt-item"},[a("uni-icon",{attrs:{type:"qinglihuancun",mpcomid:"bFj-17"}}),a("text",{staticClass:"mdtxt"},[t._v("清理")])],1)])]),a("scroll-view",{staticClass:"card-ls hot-ls",attrs:{"scroll-x":"","scroll-left":"0"}},t._l(t.hotList,function(i,s){return a("view",{key:i.id,staticClass:"hot-item"},[a("view",{staticClass:"card-avatar"},[a("image",{attrs:{src:i.img,mode:"widthFix"}})]),a("view",{staticClass:"hot-name"},[a("text",{staticClass:"ding"},[t._v("顶")]),a("text",{staticClass:"mdtxt"},[t._v(t._s(i.name))])]),a("view",{staticClass:"hot-add"},[a("uni-icon",{attrs:{type:"tianjia",mpcomid:"gpN-18-"+s}}),a("text",{staticClass:"mdtxt"},[t._v("加群")])],1)])}))],1),a("view",{staticClass:"white"},[a("navigator",{attrs:{url:"../sourcegoods/sourcegoods","hover-class":"none"}},[a("view",{staticClass:"block-tl"},[a("view",{staticClass:"block-tl-lf"},[a("view",{staticClass:"block-tl-icon block-tl-color3"},[a("uni-icon",{attrs:{type:"chanpin2",mpcomid:"eiI-19"}})],1),a("text",{staticClass:"mdtxt"},[t._v("微商货源")])]),a("view",{staticClass:"block-tl-rt"},[a("view",{staticClass:"block-tl-rt-more"},[a("text",{staticClass:"mdtxt"},[t._v("更多")]),a("view",{staticClass:"block-more more-color1"},[a("uni-icon",{attrs:{type:"qianjin",mpcomid:"yPS-20"}})],1)])])])]),t._m(0)],1),a("view",{staticClass:"white"},[a("view",{staticClass:"block-tl"},[a("navigator",{staticClass:"block-tl-lf",attrs:{"hover-class":"none",url:"../weinews/weinews"}},[a("view",{staticClass:"block-tl-icon block-tl-color4"},[a("uni-icon",{attrs:{type:"chanpin2",mpcomid:"CPK-21"}})],1),a("text",{staticClass:"mdtxt"},[t._v("头条干货")])]),a("view",{staticClass:"block-tl-rt"},[a("view",{staticClass:"block-tl-rt-item"},[a("uni-icon",{attrs:{type:"shoucang1",mpcomid:"Fep-22"}}),a("text",{staticClass:"mdtxt"},[t._v("收藏")])],1),a("navigator",{staticClass:"block-tl-rt-more",attrs:{"hover-class":"none",url:"../weinews/weinews"}},[a("text",{staticClass:"mdtxt"},[t._v("更多")]),a("view",{staticClass:"block-more more-color2"},[a("uni-icon",{attrs:{type:"qianjin",mpcomid:"emr-23"}})],1)])],1)],1),a("view",{staticClass:"uni-list"},t._l(t.listData,function(i,s){return a("view",{key:s,staticClass:"uni-list-cell b-line",attrs:{"hover-class":"uni-list-cell-hover",eventid:"qhD-3-"+s},on:{click:function(a){t.goDetail(i)}}},[a("view",{staticClass:"uni-media-list"},[a("image",{staticClass:"uni-media-list-logo",attrs:{src:i.cover}}),a("view",{staticClass:"uni-media-list-body"},[a("view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(i.title))]),a("view",{staticClass:"uni-media-list-text-bottom"},[a("text",[t._v(t._s(i.author_name))]),a("text",[t._v(t._s(i.published_at))])])])])])}))])])],1)};s._withStripped=!0;var e={render:s,staticRenderFns:[function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{staticClass:"product-ls"},[a("view",{staticClass:"product-item b-line"},[a("view",{staticClass:"product-tl"},[t._v("\n\t\t\t\t\t\t目前世界上最神奇的面膜\n\t\t\t\t\t")]),a("image",{staticClass:"product-item-img",attrs:{src:"../../static/product.png",mode:"widthFix"}}),a("view",{staticClass:"product-info"},[t._v("\n\t\t\t\t\t\t米色小霞 "),a("text",[t._v("99人阅读")])])]),a("view",{staticClass:"product-item b-line"},[a("view",{staticClass:"product-tl"},[t._v("\n\t\t\t\t\t\t目前世界上最神奇的面膜\n\t\t\t\t\t")]),a("image",{staticClass:"product-item-img",attrs:{src:"../../static/product.png",mode:"widthFix"}}),a("view",{staticClass:"product-info"},[t._v("\n\t\t\t\t\t\t米色小霞 "),a("text",[t._v("99人阅读")])])]),a("view",{staticClass:"product-item"},[a("view",{staticClass:"product-tl"},[t._v("\n\t\t\t\t\t\t目前世界上最神奇的面膜\n\t\t\t\t\t")]),a("image",{staticClass:"product-item-img",attrs:{src:"../../static/product.png",mode:"widthFix"}}),a("view",{staticClass:"product-info"},[t._v("\n\t\t\t\t\t\t米色小霞 "),a("text",[t._v("99人阅读")])])])])}]};i.a=e}},[22]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/home.js.map