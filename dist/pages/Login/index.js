"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/Login/index"],{

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Login/index!./src/pages/Login/index.tsx":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Login/index!./src/pages/Login/index.tsx ***!
  \**********************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LoginPage; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _assets_icons_wechat_fill_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/assets/icons/wechat-fill.png */ "./src/assets/icons/wechat-fill.png");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/login */ "./src/services/login.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







function LoginPage() {
  const [agreed, setAgreed] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [showWarn, setShowWarn] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const handleLogin = () => {
    console.log("微信登录跳转逻辑");

    // if (!agreed) {
    //   console.log('!agreed');

    //   setShowWarn(true)
    // }else{
    //   console.log('agreed');

    //   setShowWarn(false)
    // }

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getUserProfile({
      force: true,
      desc: '用于获取您的昵称和头像',
      // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: res => {
        console.log("🚀 ~ handleLogin ~ res:", res);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('avatarUrl', res?.avatarUrl || '"https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132"');
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('nickName', res?.nickName);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().login({
          async success(res) {
            if (res.code) {
              // 获取到 code，发送到服务器
              console.log('登录成功，code:', res.code);
              // 将 code 发送到服务器
              const response = await (0,_services_login__WEBPACK_IMPORTED_MODULE_2__.postLogin)({
                code: res.code
              });
              const {
                openid,
                token
              } = response.data;
              if (openid && token) {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('token', token);
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().setStorageSync('openid', openid);
                console.log(response, 19);
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().switchTab({
                  url: '/pages/HomePage/index'
                });
              } else {
                _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
                  title: '登录失败',
                  icon: 'error',
                  duration: 2000
                });
              }
            } else {
              console.log('登录失败:', res.errMsg);
            }
          }
        });
      }
    });
    // 后续可接入实际登录逻辑
  };
  const handleReadLink1 = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/UserPage/index'
    });
  };
  const handleReadLink2 = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().navigateTo({
      url: '/pages/PrivacyPage/index'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "container",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
        className: "title",
        children: "\u5BCC\u5C71\u5FB7\u6613\u5802"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "subtitle",
        children: "\u6B22\u8FCE\u4F7F\u7528\u5BCC\u5C71\u5FB7\u6613\u5802\u5C0F\u7A0B\u5E8F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Button, {
        disabled: !agreed,
        className: "wechat-btn",
        openType: "getUserInfo",
        onTap: handleLogin,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "wechat-btn-wrapper",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
            src: _assets_icons_wechat_fill_png__WEBPACK_IMPORTED_MODULE_0__,
            style: {
              width: 20,
              height: 20,
              marginRight: 7,
              verticalAlign: 'middle'
            }
          }), "\u5FAE\u4FE1\u4E00\u952E\u767B\u5F55"]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "agreement",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Switch, {
          style: {
            marginRight: 3
          },
          checked: agreed,
          type: "checkbox",
          onChange: e => {
            setAgreed(e.detail.value);
          }
        }), "\u6211\u540C\u610F", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "link",
          onTap: handleReadLink1,
          children: "\u300A\u7528\u6237\u534F\u8BAE\u300B"
        }), "\u548C", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "link",
          onTap: handleReadLink2,
          children: "\u300A\u9690\u79C1\u653F\u7B56\u300B"
        })]
      }), showWarn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        children: "\u8BF7\u9605\u8BFB\u76F8\u5173\u534F\u8BAE\u5E76\u52FE\u9009\u540C\u610F"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "security-tip",
        children: "\u5FAE\u4FE1\u5B98\u65B9\u767B\u5F55\u66F4\u5B89\u5168"
      })]
    })
  });
}

/***/ }),

/***/ "./src/pages/Login/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/Login/index.tsx ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_Login_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Login/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Login/index!./src/pages/Login/index.tsx");


var config = {"navigationBarTitleText":"富山德易堂","usingComponents":{}};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_Login_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/Login/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_Login_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/services/login.ts":
/*!*******************************!*\
  !*** ./src/services/login.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   postLogin: function() { return /* binding */ postLogin; }
/* harmony export */ });
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./src/services/apiClient.ts");

const postLogin = params => {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__["default"].post(`api/login`, params);
};


/***/ }),

/***/ "./src/assets/icons/wechat-fill.png":
/*!******************************************!*\
  !*** ./src/assets/icons/wechat-fill.png ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/icons/wechat-fill.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/Login/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map