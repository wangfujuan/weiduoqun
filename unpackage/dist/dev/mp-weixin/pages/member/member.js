require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([18],{93:function(t,e,i){"use strict";var s=o(i(1)),a=o(i(94));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(a.default))},94:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(96),a=i.n(s),o=i(97),n=!1;var c=function(t){n||i(95)},l=i(0)(a.a,o.a,c,null,null);l.options.__file="MAMP/htdocs/weiduoqun/pages/member/member.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] member.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},95:function(t,e){},96:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s,a=i(2),o=(s=a)&&s.__esModule?s:{default:s};e.default={data:function(){return{isActive:1,payList:[{name:"zhifubaozhifu",value:"支付宝支付",icon:"zhifubaozhifu",color:"#459ae5",size:"22",checked:!0},{name:"weixinzhifu",value:"微信支付",icon:"weixinzhifu",color:"#44b549",size:"21"}]}},components:{uniIcon:o.default},methods:{levelOne:function(){this.isActive=0},levelTwo:function(){this.isActive=1},levelThree:function(){this.isActive=2},openClick:function(){t.pageScrollTo({scrollTop:2e3}),0==this.isActive&&(this.isActive=1)}}}}).call(e,i(3).default)},97:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"member-top"},[i("image",{staticClass:"avatar-120",attrs:{src:"../../static/avatar/avatar_1.jpg",mode:"widthFix"}}),i("view",{staticClass:"member-name"},[t._v("\n\t\t\tHi, 150****2019\n\t\t")]),i("view",{staticClass:"member-id"},[t._v("\n\t\t\tUID: 1029292929\n\t\t")]),i("view",{staticClass:"member-btn",attrs:{eventid:"4zb-0"},on:{click:t.openClick}},[t._v("\n\t\t\t开通超级会员\n\t\t")])]),i("view",{staticClass:"member-cl b-line"},[i("view",{staticClass:"member-cl-item center",class:0==t.isActive?"member-active":"",attrs:{eventid:"vZa-1"},on:{click:t.levelOne}},[t._v("\n\t\t\t普通会员\n\t\t")]),i("view",{staticClass:"line"}),i("view",{staticClass:"member-cl-item center",class:1==t.isActive?"member-active":"",attrs:{eventid:"YaJ-2"},on:{click:t.levelTwo}},[i("uni-icon",{attrs:{color:"#b28431",size:"18",type:"huiyuan",mpcomid:"ID0-0"}}),t._v("超级会员 "),i("text",{staticClass:"coupons"},[t._v("折扣")])],1),i("view",{staticClass:"line"}),i("view",{staticClass:"member-cl-item center",class:2==t.isActive?"member-active":"",attrs:{eventid:"w6j-3"},on:{click:t.levelThree}},[i("uni-icon",{attrs:{type:"huiyuan1",color:"#b28431",size:"18",mpcomid:"UqB-1"}}),t._v("钻石代理\n\t\t")],1)]),i("view",{staticClass:"member-box",class:0==t.isActive?"displaybox":""},[i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color1"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"kwQ-2"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t尊贵身份标识\n\t\t\t\t")])]),t._m(0)]),i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color2"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"h9f-3"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t尊贵身份标识\n\t\t\t\t")])]),t._m(1)]),i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color6"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"6In-4"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t尊贵身份标识\n\t\t\t\t")])]),t._m(2)]),i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color4"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"CdJ-5"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t尊贵身份标识\n\t\t\t\t")])]),t._m(3)]),i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color4"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"J3g-6"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t尊贵身份标识\n\t\t\t\t")])]),t._m(4)]),i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color4"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"wTa-7"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t尊贵身份标识\n\t\t\t\t")])]),t._m(5)])]),i("view",{staticClass:"member-box",class:1==t.isActive?"displaybox":""},[i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color1"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"fz8-8"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t尊贵身份标识\n\t\t\t\t")])]),t._m(6)]),i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color1"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"Pmh-9"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t尊贵身份标识\n\t\t\t\t")])]),t._m(7)]),i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color1"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"Swt-10"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t尊贵身份标识\n\t\t\t\t")])]),t._m(8)]),i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color1"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"bXH-11"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t尊贵身份标识\n\t\t\t\t")])]),t._m(9)]),i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color1"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"hbA-12"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t会员价格\n\t\t\t\t")])]),t._m(10)])]),i("view",{staticClass:"member-box",class:2==t.isActive?"displaybox":""},[i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color1"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"dJk-13"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t尊贵身份标识\n\t\t\t\t")])]),t._m(11)]),i("view",{staticClass:"member-box-item b-line"},[i("view",{staticClass:"member-box-item-lf"},[i("view",{staticClass:"tool-item-icon block-tl-color1"},[i("uni-icon",{attrs:{size:"22",color:"#fff",type:"diqiuquanqiu",mpcomid:"Ueb-14"}})],1),i("view",{staticClass:"member-box-item-tl"},[t._v("\n\t\t\t\t\t会员价格\n\t\t\t\t")])]),t._m(12)])]),t.isActive>0?i("view",[i("radio-group",{staticClass:"pay-box",attrs:{eventid:"1ju-4",mpcomid:"2dB-16"},on:{change:t.radioChange}},t._l(t.payList,function(e,s){return i("view",{key:e,staticClass:"pay-item"},[i("label",{staticClass:"pay-item-con"},[i("uni-icon",{attrs:{size:e.size,color:e.color,type:e.icon,mpcomid:"KX2-15-"+s}}),t._v(t._s(e.value)),i("radio",{staticClass:"pay-radio",attrs:{value:e.name,checked:e.checked}})],1)],1)}))],1):t._e(),i("view",{staticClass:"fixed-btn-wp"},[i("navigator",{staticClass:"fixed-btn",attrs:{url:""}},[t._v("开通超级会员")])],1)])};s._withStripped=!0;var a={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t不能自动刷新\n\t\t\t\t")]),e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t名片数量，每个分类下可发布"),e("text",{staticClass:"fontred"},[this._v("3")]),this._v("个\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t不能自动刷新\n\t\t\t\t")]),e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t名片数量，每个分类下可发布"),e("text",{staticClass:"fontred"},[this._v("3")]),this._v("个\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t不能自动刷新\n\t\t\t\t")]),e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t名片数量，每个分类下可发布"),e("text",{staticClass:"fontred"},[this._v("3")]),this._v("个\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t不能自动刷新\n\t\t\t\t")]),e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t名片数量，每个分类下可发布"),e("text",{staticClass:"fontred"},[this._v("3")]),this._v("个\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t不能自动刷新\n\t\t\t\t")]),e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t名片数量，每个分类下可发布"),e("text",{staticClass:"fontred"},[this._v("3")]),this._v("个\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t不能自动刷新\n\t\t\t\t")]),e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t名片数量，每个分类下可发布"),e("text",{staticClass:"fontred"},[this._v("3")]),this._v("个\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t不能自动刷新\n\t\t\t\t")]),e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t名片数量，每个分类下可发布"),e("text",{staticClass:"fontred"},[this._v("3")]),this._v("个\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t不能自动刷新\n\t\t\t\t")]),e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t名片数量，每个分类下可发布"),e("text",{staticClass:"fontred"},[this._v("3")]),this._v("个\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t不能自动刷新\n\t\t\t\t")]),e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t名片数量，每个分类下可发布"),e("text",{staticClass:"fontred"},[this._v("3")]),this._v("个\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t不能自动刷新\n\t\t\t\t")]),e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t名片数量，每个分类下可发布"),e("text",{staticClass:"fontred"},[this._v("3")]),this._v("个\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-price center"},[e("view",{staticClass:"fontred"},[this._v("\n\t\t\t\t\t\t¥"),e("text",{staticClass:"fontsize"},[this._v("199.00")])]),e("text",{staticClass:"fontunder"},[this._v("¥299.00")]),e("text",[this._v("1年")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t不能自动刷新\n\t\t\t\t")]),e("view",{staticClass:"member-box-info"},[this._v("\n\t\t\t\t\t名片数量，每个分类下可发布"),e("text",{staticClass:"fontred"},[this._v("3")]),this._v("个\n\t\t\t\t")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"member-box-item-rt"},[e("view",{staticClass:"member-box-price center"},[e("view",{staticClass:"fontred"},[this._v("\n\t\t\t\t\t\t¥"),e("text",{staticClass:"fontsize"},[this._v("299.00")])]),e("text",{staticClass:"fontunder"},[this._v("¥499.00")]),e("text",[this._v("1年")])])])}]};e.a=a}},[93]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/member/member.js.map