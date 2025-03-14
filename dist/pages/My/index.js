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
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Empty */ "./src/components/Empty/index.tsx");
/* harmony import */ var _assets_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/const */ "./src/assets/const.ts");
/* harmony import */ var _services_my__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/my */ "./src/services/my.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);










function Index() {
  const [myClass, setMyClass] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [myCertificate, setMyCertificate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useDidShow)(() => {
    getClassDesc();
  });
  const unique = arr => {
    const res = new Map();
    return arr.filter(a => !res.has(a) && res.set(a, 1));
  };
  const getClassDesc = async () => {
    try {
      const response = await (0,_services_my__WEBPACK_IMPORTED_MODULE_3__.getMyClass)({});
      const {
        code,
        data = {}
      } = response;
      console.log("🚀 ~ getClassDesc ~ data:", data);
      const uniqueArr = unique(data.data?.viewed?.concat(data.data?.purchased));
      setMyClass(uniqueArr);
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
    console.log("🚀 ~ handleClassTap ~ classInfo:", classInfo);
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
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: '/pages/Login/index'
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "my-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      style: {
        backgroundImage: `url(${_assets_const__WEBPACK_IMPORTED_MODULE_6__.my_background1})`,
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
      children: !_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('avatarUrl') ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
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
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          style: {
            height: 70,
            width: 200
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            style: {
              boxSizing: "border-box",
              margin: "0 auto",
              // display: "inline-block",
              // verticalAlign: "top",
              width: 70,
              height: 70,
              border: "2px solid #FFFFFF",
              borderRadius: "50%",
              backgroundImage: `url(${_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('avatarUrl')})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            style: {
              width: 200,
              // display: "inline-block",
              // verticalAlign: "top",
              height: 50,
              lineHeight: "50px",
              fontSize: 18,
              color: "#fff",
              fontWeight: 600,
              overflow: "hidden",
              textAlign: "center"
            },
            children: _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('nickName') || '微信用户'
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "list-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "my-class-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "card-title",
          children: "\u6211\u7684\u8BFE\u7A0B"
        }), myClass?.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.ScrollView, {
          scrollX: true,
          className: "card-list",
          children: myClass?.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "card-item",
            onTap: () => handleClassTap(item),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
              src: `https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/video/${item.classId}/coverImage.jpg` || _assets_const__WEBPACK_IMPORTED_MODULE_6__.defaultImg,
              style: {
                width: 140,
                height: 84,
                borderRadius: 7
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "card-item-title",
              children: item.className
            })]
          }))
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "list-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
        className: "my-class-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          className: "card-title",
          children: "\u6211\u7684\u8BC1\u4E66"
        }), myCertificate?.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.ScrollView, {
          scrollX: true,
          className: "card-list",
          children: myCertificate?.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            className: "card-item",
            onTap: () => handleCertificateTap(item),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
              src: item.coverImage,
              style: {
                width: 140,
                height: 84,
                borderRadius: 7
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
              className: "card-item-title",
              children: item.certificateName
            })]
          }))
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_Empty__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
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
/* harmony export */   getMyClass: function() { return /* binding */ getMyClass; }
/* harmony export */ });
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./src/services/apiClient.ts");

const getMyClass = params => {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__["default"].get(`api/my-courses`, params);
};


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/My/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map