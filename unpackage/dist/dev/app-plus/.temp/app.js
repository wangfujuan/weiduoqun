require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([58],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(11);var _vue2 = _interopRequireDefault(_vue);\nvar _App = __webpack_require__(18);var _App2 = _interopRequireDefault(_App);\n\nvar _store = __webpack_require__(21);var _store2 = _interopRequireDefault(_store);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue2.default.config.productionTip = false;\n\n_vue2.default.prototype.$store = _store2.default;\n\n_App2.default.mpType = 'app';\n\nvar app = new _vue2.default(_extends({\n    store: _store2.default },\n_App2.default));\n\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// /Applications/MAMP/htdocs/weiduoqun/main.js\n// module id = 17\n// module chunks = 58\n\n//# sourceURL=uni-app:///main.js?d989");

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_H5_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_MP_false_APP_true_APP_PLUS_NVUE_false_APP_PLUS_NVUE_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(20);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_H5_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_MP_false_APP_true_APP_PLUS_NVUE_false_APP_PLUS_NVUE_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_H5_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_MP_false_APP_true_APP_PLUS_NVUE_false_APP_PLUS_NVUE_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(19)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\nvar __vue_template__ = null\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_runtime_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_H5_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_MP_false_APP_true_APP_PLUS_NVUE_false_APP_PLUS_NVUE_false_APP_PLUS_true_MP_WEIXIN_false_MP_BAIDU_false_MP_ALIPAY_false_MP_TOUTIAO_false_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,\n  __vue_template__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"MAMP/htdocs/weiduoqun/App.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-2cb978da\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-2cb978da\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// /Applications/MAMP/htdocs/weiduoqun/App.vue\n// module id = 18\n// module chunks = 58\n\n");

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-2cb978da\",\"scoped\":false,\"hasInlineConfig\":false}!./node_modules/px2rpx-loader?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"H5\":false,\"APP-PLUS\":true,\"MP-WEIXIN\":false,\"MP-BAIDU\":false,\"MP-ALIPAY\":false,\"MP-TOUTIAO\":false,\"MP\":false,\"APP\":true,\"APP-PLUS-NVUE\":false,\"APP_PLUS_NVUE\":false,\"APP_PLUS\":true,\"MP_WEIXIN\":false,\"MP_BAIDU\":false,\"MP_ALIPAY\":false,\"MP_TOUTIAO\":false}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"H5\":false,\"APP-PLUS\":true,\"MP-WEIXIN\":false,\"MP-BAIDU\":false,\"MP-ALIPAY\":false,\"MP-TOUTIAO\":false,\"MP\":false,\"APP\":true,\"APP-PLUS-NVUE\":false,\"APP_PLUS_NVUE\":false,\"APP_PLUS\":true,\"MP_WEIXIN\":false,\"MP_BAIDU\":false,\"MP_ALIPAY\":false,\"MP_TOUTIAO\":false}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!/Applications/MAMP/htdocs/weiduoqun/App.vue\n// module id = 19\n// module chunks = 58\n\n");

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });\nvar _util = __webpack_require__(12);var _util2 = _interopRequireDefault(_util);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tonLaunch: function onLaunch() {\n\t\tconsole.log('App Launch');\n\t\tvar params = {\n\t\t\t\"n\": \"Session\",\n\t\t\t\"s\": \"\",\n\t\t\t\"t\": \"2014-01-0112:59:59\",\n\t\t\t\"m\": 123,\n\t\t\t\"q\": {\n\t\t\t\t\"model\": \"Mi4s\",\n\t\t\t\t\"version\": \"10.0.1\",\n\t\t\t\t\"resolution\": \"960*640\",\n\t\t\t\t\"deviceToken\": \"116369cafe611f12bfdbd87aa112df21\",\n\t\t\t\t\"deviceTokenPush\": \"\",\n\t\t\t\t\"deviceType\": \"2\",\n\t\t\t\t\"info\": \"5.0.2\" } };\n\n\n\n\t\tuni.request({\n\t\t\turl: _util2.default.PATH_API + '/api/base/Session',\n\t\t\tmethod: 'POST',\n\t\t\tdataType: 'json',\n\t\t\tdata: { \"json\": JSON.stringify(params) },\n\t\t\theader: {\n\t\t\t\t'content-type': 'application/x-www-form-urlencoded' },\n\n\t\t\tsuccess: function success(res) {\n\t\t\t\tconsole.log(JSON.stringify(res.data));\n\t\t\t} });\n\n\t},\n\tonShow: function onShow() {\n\t\tconsole.log('App Show');\n\n\t},\n\tonHide: function onHide() {\n\t\tconsole.log('App Hide');\n\t} };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-preset-stage-2\"],\"plugins\":[[\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-runtime\"}],\"/Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp/node_modules/babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"H5\":false,\"APP-PLUS\":true,\"MP-WEIXIN\":false,\"MP-BAIDU\":false,\"MP-ALIPAY\":false,\"MP-TOUTIAO\":false,\"MP\":false,\"APP\":true,\"APP-PLUS-NVUE\":false,\"APP_PLUS_NVUE\":false,\"APP_PLUS\":true,\"MP_WEIXIN\":false,\"MP_BAIDU\":false,\"MP_ALIPAY\":false,\"MP_TOUTIAO\":false}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!/Applications/MAMP/htdocs/weiduoqun/App.vue\n// module id = 20\n// module chunks = 58\n\n//# sourceURL=uni-app:///App.vue?aa83");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _vue = __webpack_require__(11);var _vue2 = _interopRequireDefault(_vue);\nvar _vuex = __webpack_require__(9);var _vuex2 = _interopRequireDefault(_vuex);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue2.default.use(_vuex2.default);\n\nvar store = new _vuex2.default.Store({\n    state: {\n        /**\n              * 是否需要强制登录\n              */\n        forcedLogin: false,\n        hasLogin: false,\n        userName: \"\" },\n\n    mutations: {\n        login: function login(state, userName) {\n            state.userName = userName || '新用户';\n            state.hasLogin = true;\n        },\n        logout: function logout(state) {\n            state.userName = \"\";\n            state.hasLogin = false;\n        } } });exports.default =\n\n\n\nstore;\n\n//////////////////\n// WEBPACK FOOTER\n// /Applications/MAMP/htdocs/weiduoqun/store/index.js\n// module id = 21\n// module chunks = 58\n\n//# sourceURL=uni-app:///store/index.js?8576");

/***/ })

},[17]);