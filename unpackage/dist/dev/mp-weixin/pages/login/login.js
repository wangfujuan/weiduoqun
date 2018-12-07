require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{27:function(t,e,n){"use strict";var o=s(n(1)),i=s(n(28));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(i.default))},28:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(30),i=n.n(o),s=n(31),a=!1;var r=function(t){a||n(29)},c=n(0)(i.a,s.a,r,null,null);c.options.__file="MAMP/htdocs/weiduoqun/pages/login/login.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},29:function(t,e){},30:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var o,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},s=n(6),a=(o=s)&&o.__esModule?o:{default:o},r=n(3);e.default={data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0,showClearIcon:!1,showPassword:!0}},computed:(0,r.mapState)(["forcedLogin"]),methods:i({},(0,r.mapMutations)(["login"]),{initProvider:function(){var e=this,n=["weixin"];t.getProvider({service:"oauth",success:function(t){if(t.provider&&t.provider.length){for(var o=0;o<t.provider.length;o++)~n.indexOf(t.provider[o])&&e.providerList.push({value:t.provider[o],image:"../../static/img/"+t.provider[o]+".png"});e.hasProvider=!0}},fail:function(t){console.error("获取服务供应商失败："+JSON.stringify(t))}})},initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-100},bindLogin:function(){if(11==this.account.length)if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else{var e=this.account,n=this.password;a.default.getUsers().some(function(t){return e===t.account&&n===t.password})?this.toMain(this.account):t.showToast({icon:"none",title:"用户账号或密码不正确"})}else t.showToast({icon:"none",title:"请输入正确的手机号"})},oauth:function(e){var n=this;t.login({provider:e,success:function(o){t.getUserInfo({provider:e,success:function(t){n.toMain(t.userInfo.nickName)}})},fail:function(t){console.error("授权登录失败："+JSON.stringify(t))}})},toMain:function(e){this.login(e),this.forcedLogin?t.reLaunch({url:"../main/main"}):t.navigateBack()},bindClearInput:function(t){this.account=t.target.value,t.target.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.account="",this.showClearIcon=!1},changePassword:function(){this.showPassword=!this.showPassword}}),onLoad:function(){this.initPosition(),this.initProvider()}}}).call(e,n(2).default)},31:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",{staticClass:"content"},[n("view",{staticClass:"logo"},[t._v("\n\t\t\tLOGO\n\t\t")]),n("view",{staticClass:"input-group"},[n("view",{staticClass:"input-row b-line center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{"placeholder-class":"gray",type:"number",placeholder:"请输入手机号码",eventid:"Ka5-0"},domProps:{value:t.account},on:{input:[function(e){e.target.composing||(t.account=e.target.value)},t.bindClearInput]}}),t.showClearIcon?n("view",{staticClass:"uni-icon uni-icon-shanchu",attrs:{eventid:"kzO-1"},on:{click:t.clearIcon}}):t._e()]),n("view",{staticClass:"input-row b-line center"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{"placeholder-class":"gray",type:"text",password:t.showPassword,placeholder:"请输入密码",eventid:"Szr-2"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.showPassword?n("view",{staticClass:"uni-icon uni-icon-kejian",attrs:{eventid:"3jQ-3"},on:{click:t.changePassword}}):t._e(),t.showPassword?t._e():n("view",{staticClass:"uni-icon uni-icon-yincangbukejian",attrs:{eventid:"6UL-4"},on:{click:t.changePassword}})])]),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"greenlinear loginbtn",attrs:{eventid:"9gp-5"},on:{tap:t.bindLogin}},[t._v("登录")])],1),n("view",{staticClass:"action-row"},[n("navigator",{attrs:{url:"../reg/reg","hover-class":"none"}},[t._v("注册账号")]),n("navigator",{attrs:{url:"../pwd/pwd","hover-class":"none"}},[t._v("忘记密码")])],1),t.hasProvider?n("view",{staticClass:"oauth-row",style:{top:t.positionTop+"px"}},[t._l(t.providerList,function(e,o){return n("view",{key:e.value,staticClass:"oauth-image"},[n("image",{attrs:{src:e.image,eventid:"fRz-6-"+o},on:{tap:function(n){t.oauth(e.value)}}})])}),n("view",{staticClass:"weixinlogin"},[t._v("\n\t\t\t\t微信登录\n\t\t\t")]),n("view",{staticClass:"weixin-info"},[t._v("\n\t\t\t\t无法注册？"),n("navigator",{attrs:{url:"","hover-class":"none"}},[t._v("查看帮助")])],1),n("view",{staticClass:"weixin-info"},[t._v("\n\t\t\t\t注册代表同意 "),n("navigator",{attrs:{url:"","hover-class":"none"}},[t._v("《用户使用服务协议》")])],1)],2):t._e()])};o._withStripped=!0;var i={render:o,staticRenderFns:[]};e.a=i}},[27]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/login/login.js.map