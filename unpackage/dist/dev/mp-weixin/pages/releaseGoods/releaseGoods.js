require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([20],{164:function(t,e,i){"use strict";var a=n(i(1)),s=n(i(165));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},165:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(167),s=i.n(a),n=i(168),o=!1;var c=function(t){o||i(166)},l=i(0)(s.a,n.a,c,null,null);l.options.__file="MAMP/htdocs/weiduoqun/pages/releaseGoods/releaseGoods.vue",l.esModule&&Object.keys(l.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),l.options.functional&&console.error("[vue-loader] releaseGoods.vue: functional components are not supported with templates, they should use render functions."),e.default=l.exports},166:function(t,e){},167:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var a=c(i(2)),s=c(i(7)),n=c(i(10)),o=c(i(8));function c(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{mulLinkageTwoPicker:o.default,pickerValueDefault:[0,0],themeColor:"#44b549",mode:"",deepLength:1}},components:{uniIcon:a.default,mpvuePicker:s.default,mpvueCityPicker:n.default},methods:{formSubmit:function(t){console.log("form发生了submit事件，携带数据为："+JSON.stringify(t.detail.value))},formReset:function(){console.log("form发生了reset事件")},onCancel:function(t){console.log(t)},onConfirm:function(t){this.pickerText=JSON.stringify(t)},showMulLinkageTwoPicker:function(){this.pickerValueArray=this.mulLinkageTwoPicker,this.mode="multiLinkageSelector",this.deepLength=2,this.pickerValueDefault=[0,0],this.$refs.mpvuePicker.show()},toSelectTrade:function(){t.navigateTo({url:"../selectTrade/selectTrade"})},switchChange:function(t){console.log("switch1 发生 change 事件，携带值为",t.target.value)}},onNavigationBarButtonTap:function(){t.navigateTo({url:"/pages/help/help"})}}}).call(e,i(3).default)},168:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("form",{attrs:{eventid:"ZTp-2"},on:{submit:t.formSubmit,reset:t.formReset}},[i("view",{staticClass:"content-pad"},[i("view",{staticClass:"white"},[i("view",{staticClass:"summary"},[i("view",{staticClass:"summary-con"},[t._v("\n\t\t\t\t\t当前微币："),i("text",[t._v("55")]),t._v("\n\t\t\t\t\t发布扣除："),i("text",[t._v("1")])]),i("view",{staticClass:"center"},[i("uni-icon",{attrs:{type:"bangzhu",size:"12",color:"#8a8a8a",mpcomid:"oFQ-0"}}),t._v("\n\t\t\t\t\t微币使用规则\n\t\t\t\t")],1)])]),i("view",{staticClass:"white"},[i("navigator",{attrs:{"hover-class":"none",url:"../selectGroup/selectGroup"}},[i("view",{staticClass:"rc-line b-line"},[i("view",{staticClass:"rc-line-lf"},[t._v("\n\t\t\t\t\t\t分类\n\t\t\t\t\t")]),i("view",{staticClass:"rc-select"},[t._v("\n\t\t\t\t\t\t选择产品分类\n\t\t\t\t\t")]),i("uni-icon",{attrs:{color:"#acacac",size:"16",type:"qianjin",mpcomid:"d5W-1"}})],1)]),i("view",{staticClass:"rc-line b-line",attrs:{eventid:"Xev-0"},on:{click:t.showMulLinkageTwoPicker}},[i("view",{staticClass:"rc-line-lf"},[t._v("\n\t\t\t\t\t名片\n\t\t\t\t")]),i("view",{staticClass:"rc-select"},[t._v("\n\t\t\t\t\t选择个人名片做为联系方式\n\t\t\t\t")]),i("uni-icon",{attrs:{color:"#acacac",size:"16",type:"qianjin",mpcomid:"5bJ-2"}})],1),i("view",{staticClass:"rc-line",attrs:{eventid:"qur-1"},on:{tap:t.toSelectTrade}},[i("view",{staticClass:"rc-line-lf"},[t._v("\n\t\t\t\t\t地区\n\t\t\t\t")]),i("view",{staticClass:"rc-select"},[t._v("\n\t\t\t\t\t请选择地区\n\t\t\t\t")]),i("uni-icon",{attrs:{color:"#acacac",size:"16",type:"qianjin",mpcomid:"U69-3"}})],1)],1),i("view",{staticClass:"white"},[i("view",{staticClass:"rc-line b-line"},[i("view",{staticClass:"rc-line-lf"},[t._v("\n\t\t\t\t\t标题\n\t\t\t\t")]),i("input",{attrs:{type:"text","placeholder-style":"color: #c7c7c7",placeholder:"想个吸引人的标题",value:""}})]),i("view",{staticClass:"rc-line"},[i("view",{staticClass:"rc-line-lf"},[t._v("\n\t\t\t\t\t描述\n\t\t\t\t")]),i("input",{attrs:{type:"text","placeholder-style":"color: #c7c7c7",placeholder:"认真填写描述,要一鸣惊人哦",value:""}})])]),i("view",{staticClass:"white"},[i("view",{staticClass:"rc-upload"},[i("view",{staticClass:"up-avatar"},[i("uni-icon",{attrs:{type:"tianjia",color:"#b9b9b9",mpcomid:"ZiI-4"}})],1),i("view",{staticClass:"rc-upload-info"},[t._v("\n\t\t\t\t\t上传产品图 "),i("text",[t._v("(限1张)")])])])]),i("view",{staticClass:"user-agree"},[t._v("\n\t\t\t发布代表同意"),i("navigator",{attrs:{url:""}},[t._v("《用户使用服务协议》")])],1),i("view",{staticClass:"submitbtn-wp"},[i("button",{staticClass:"block-tl-color8 submitbtn",attrs:{formType:"submit"}},[t._v("确认发布")])],1)])]),i("mpvue-picker",{ref:"mpvuePicker",attrs:{themeColor:t.themeColor,mode:t.mode,deepLength:t.deepLength,pickerValueDefault:t.pickerValueDefault,pickerValueArray:t.pickerValueArray,eventid:"vqx-3",mpcomid:"El1-5"},on:{onConfirm:t.onConfirm,onCancel:t.onCancel}})],1)};a._withStripped=!0;var s={render:a,staticRenderFns:[]};e.a=s}},[164]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/releaseGoods/releaseGoods.js.map