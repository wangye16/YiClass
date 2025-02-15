"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/My/index"],{

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/My/index!./src/pages/My/index.tsx":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/My/index!./src/pages/My/index.tsx ***!
  \****************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Empty */ "./src/components/Empty/index.tsx");
/* harmony import */ var _assets_imgs_my_background1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/imgs/my_background1.png */ "./src/assets/imgs/my_background1.png");
/* harmony import */ var _services_my__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/my */ "./src/services/my.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









function Index() {
  const [myDesc, setMyDesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useReady)(() => {
    getClassDesc();
  });
  const getClassDesc = async () => {
    try {
      const response = await (0,_services_my__WEBPACK_IMPORTED_MODULE_4__.getMyDesc)({});
      const {
        satusCode,
        data = {}
      } = response;
      setMyDesc(data);
    } catch (error) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: "请求失败",
        icon: "error",
        duration: 2000
      });
      console.log("Error sending chat message:", error);
    }
  };
  const handleClassTap = classInfo => {
    const {
      classId
    } = classInfo;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: `/pages/Class/ClassDesc/index?classId=${classId}`
    });
  };
  const handleCertificateTap = item => {
    console.log("🚀 ~ handleCertificateTap ~ certificateInfo:", item);
    const {
      id,
      certificateName,
      coverImage
    } = item;
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().downloadFile({
      url: coverImage,
      success: res => {
        console.log("🚀 ~ handleCertificateTap ~ res:", res);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showShareImageMenu({
          path: res.tempFilePath
        });
      }
    });
  };
  const handleLoginTap = () => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().login({
      success: function (res) {
        console.log("🚀 ~ handleLoginTap ~ res:", res);
        if (res.code) {
          //发起网络请求
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
            url: 'https://test.com/onLogin',
            data: {
              code: res.code
            }
          });
        } else {
          console.log('登录失败！' + res.errMsg);
        }
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
    className: "my-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      style: {
        backgroundImage: `url(${_assets_imgs_my_background1_png__WEBPACK_IMPORTED_MODULE_3__})`,
        backgroundColor: "#000",
        height: 200,
        backgroundSize: "cover",
        paddingTop: 21,
        // paddingLeft: 21,
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignContent: "center"
      },
      children:  true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          style: {
            fontSize: 16,
            lineHeight: "24px",
            height: 24,
            borderBottom: "1px solid #fff",
            marginTop: 28,
            color: "#fff"
          },
          onTap: handleLoginTap,
          children: `去登录 >>`
        })
      }) : /*#__PURE__*/0
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "list-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "my-class-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "card-title",
          children: "\u6211\u7684\u8BFE\u7A0B"
        }), myDesc?.myClass?.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.ScrollView, {
          scrollX: true,
          className: "card-list",
          children: myDesc?.myClass?.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "card-item",
            onTap: item => handleClassTap(item),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
              src: item.coverImage,
              style: {
                width: 140,
                height: 84,
                borderRadius: 7
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
              className: "card-item-title",
              children: item.className
            })]
          }))
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
      className: "list-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
        className: "my-class-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
          className: "card-title",
          children: "\u6211\u7684\u8BC1\u4E66"
        }), myDesc?.myCertificate?.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.ScrollView, {
          scrollX: true,
          className: "card-list",
          children: myDesc?.myCertificate?.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
            className: "card-item",
            onTap: () => handleCertificateTap(item),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.Image, {
              src: item.coverImage,
              style: {
                width: 140,
                height: 84,
                borderRadius: 7
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_6__.View, {
              className: "card-item-title",
              children: item.certificateName
            })]
          }))
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
      })
    })]
  });
}

/***/ }),

/***/ "./src/components/Empty/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Empty/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _taroify_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @taroify/core */ "webpack/container/remote/@taroify/core");
/* harmony import */ var _taroify_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_taroify_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Index(_ref) {
  let {
    width = 100,
    height = 100
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_taroify_core__WEBPACK_IMPORTED_MODULE_0__.Empty, {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_taroify_core__WEBPACK_IMPORTED_MODULE_0__.Empty.Image, {
      style: {
        width: width,
        height: height
      }
    })
  });
}

/***/ }),

/***/ "./src/pages/My/index.tsx":
/*!********************************!*\
  !*** ./src/pages/My/index.tsx ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_My_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/My/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/My/index!./src/pages/My/index.tsx");


var config = {"navigationBarTitleText":"富山德易堂","usingComponents":{}};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_My_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/My/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_My_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/services/my.ts":
/*!****************************!*\
  !*** ./src/services/my.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getMyDesc: function() { return /* binding */ getMyDesc; }
/* harmony export */ });
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./src/services/apiClient.ts");

const prefix = 'my';
const getMyDesc = params => {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${prefix}/desc`, params);
};


/***/ }),

/***/ "./src/assets/imgs/my_background1.png":
/*!********************************************!*\
  !*** ./src/assets/imgs/my_background1.png ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/imgs/my_background1.png";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/My/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map