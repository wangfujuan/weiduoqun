require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{37:function(e,t,n){"use strict";var o=a(n(1)),s=a(n(38));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(s.default))},38:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(40),s=n.n(o),a=n(41),i=!1;var r=function(e){i||n(39)},u=n(0)(s.a,a.a,r,null,null);u.options.__file="MAMP/htdocs/weiduoqun/pages/pwd/pwd.vue",u.esModule&&Object.keys(u.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] pwd.vue: functional components are not supported with templates, they should use render functions."),t.default=u.exports},39:function(e,t){},40:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o,s=n(6);(o=s)&&o.__esModule;t.default={data:function(){return{email:""}},methods:{findPassword:function(){this.email.length<3||!~this.email.indexOf("@")?e.showToast({icon:"none",title:"邮箱地址不合法"}):e.showToast({icon:"none",title:"已发送重置邮件至注册邮箱，请注意查收。",duration:3e3})}}}}).call(t,n(2).default)},41:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("view",{staticClass:"content"},[n("view",{staticClass:"input-group"},[n("view",{staticClass:"input-row"},[n("text",{staticClass:"title"},[e._v("邮箱：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"text",placeholder:"请输入邮箱",eventid:"s1g-0"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),n("view",{staticClass:"btn-row"},[n("button",{staticClass:"primary",attrs:{type:"primary",eventid:"3Gf-1"},on:{tap:e.findPassword}},[e._v("提交")])],1)])};o._withStripped=!0;var s={render:o,staticRenderFns:[]};t.a=s}},[37]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/pwd/pwd.js.map