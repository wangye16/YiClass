"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/Class/ClassList/index"],{

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Class/ClassList/index!./src/pages/Class/ClassList/index.tsx":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Class/ClassList/index!./src/pages/Class/ClassList/index.tsx ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ClassList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ClassList */ "./src/pages/Class/ClassList/components/ClassList/index.tsx");
/* harmony import */ var _services_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/class */ "./src/services/class.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








function Index() {
  const [classListArr, setClassListArr] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useDidShow)(() => {
    getClassList({});
  });
  const getClassList = async props => {
    try {
      const response = await (0,_services_class__WEBPACK_IMPORTED_MODULE_2__.getClassListAPI)(props);
      const result = response.data || {};
      setClassListArr(result.data);
    } catch (error) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: '请求失败',
        icon: 'error',
        duration: 2000
      });
      console.log('Error sending chat message:', error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {}, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "class-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      className: "search-container"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ClassList__WEBPACK_IMPORTED_MODULE_1__["default"], {
      list: classListArr
    })]
  });
}

/***/ }),

/***/ "./src/pages/Class/ClassList/components/ClassItem/index.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Class/ClassList/components/ClassItem/index.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/const */ "./src/assets/const.ts");
/* harmony import */ var _assets_icons_student_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/student.png */ "./src/assets/icons/student.png");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






function Index(_ref) {
  let {
    classInfo
  } = _ref;
  // const [paymentStatus,setPaymentStatus] = useState<'paid'|'notPaid'|'free'>()
  const {
    classId,
    studyCount,
    price,
    coverImage,
    className,
    description,
    requiresPurchase,
    isPurchased
  } = classInfo;
  const paymentStatus = !requiresPurchase ? 'free' : isPurchased ? 'paid' : 'notPaid';
  const getPriceText = () => {
    let resObj = {
      text: `¥${price}`,
      color: '#000'
    };
    switch (true) {
      case !requiresPurchase:
        resObj.text = '免费';
        resObj.color = '#22C55E';
        break;
      case requiresPurchase && isPurchased:
        resObj.text = '已支付';
        resObj.color = '#22C55E';
        break;
      default:
        break;
    }
    return resObj;
  };
  const onClassItemTap = () => {
    // if (classInfo?.paymentStatus === 'forbid') return
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
      url: `/pages/Class/ClassDesc/index?classId=${classId}&studyCount=${studyCount}&paymentStatus=${paymentStatus}`
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "class-item",
    disableScroll: true,
    onTap: onClassItemTap,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "cover-img",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
        mode: "scaleToFill",
        src: `https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/video/${classId}/coverImage_slim.jpg` || _assets_const__WEBPACK_IMPORTED_MODULE_4__.defaultImg,
        lazyLoad: true,
        style: {
          width: "100%",
          height: "100%",
          background: "#fff",
          objectFit: "contain",
          borderRadius: "7px 7px 0 0"
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
      className: "content-area",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        style: {
          fontSize: 16,
          fontWeight: 500
        },
        children: className
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
        className: "desc-text",
        children: description
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
        style: {
          fontSize: 12,
          marginTop: 14,
          display: 'flex',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          style: {
            color: '#4B5563'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Image, {
            src: _assets_icons_student_png__WEBPACK_IMPORTED_MODULE_1__,
            style: {
              width: 14,
              height: 14,
              marginRight: 3,
              verticalAlign: 'middle'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Text, {
            style: {
              verticalAlign: 'middle'
            },
            children: [studyCount, "\u4EBA\u5B66\u4E60"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
          style: {
            fontSize: 14,
            fontWeight: 500,
            color: getPriceText().color
          },
          children: getPriceText().text
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./src/pages/Class/ClassList/components/ClassList/index.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Class/ClassList/components/ClassList/index.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _ClassItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ClassItem */ "./src/pages/Class/ClassList/components/ClassItem/index.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);





function Index(props) {
  const {
    list
  } = props;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log("ClassList comp loaded.", props);
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.View, {
    className: "class-list",
    children: list?.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ClassItem__WEBPACK_IMPORTED_MODULE_0__["default"], {
      classInfo: item || {}
    }))
  });
}

/***/ }),

/***/ "./src/pages/Class/ClassList/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/Class/ClassList/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_Class_ClassList_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Class/ClassList/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Class/ClassList/index!./src/pages/Class/ClassList/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_Class_ClassList_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/Class/ClassList/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_Class_ClassList_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/Class/ClassList/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map