"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/services/apiClient.ts":
/*!***********************************!*\
  !*** ./src/services/apiClient.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/getBaseUrl */ "./src/utils/getBaseUrl.ts");
// ./src/api/request.ts


/* harmony default export */ __webpack_exports__["default"] = ({
  baseURL: `${(0,_utils_getBaseUrl__WEBPACK_IMPORTED_MODULE_1__["default"])()}/`,
  // set default baseURL

  apiClient(option) {
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    // if option.url is relative path,splicing baseURL
    if (!option.url.startsWith('http')) {
      option.url = this.baseURL + option.url;
    }
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      ...option,
      method,
      header: {
        'content-type': 'application/json'
      }
    });
  },
  get(url) {
    let data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return this.apiClient({
      url,
      data
    }, 'GET');
  },
  post(url, data) {
    return this.apiClient({
      url,
      data
    }, 'POST');
  }
});

/***/ }),

/***/ "./src/services/class.ts":
/*!*******************************!*\
  !*** ./src/services/class.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getClassDescAPI: function() { return /* binding */ getClassDescAPI; },
/* harmony export */   getClassListAPI: function() { return /* binding */ getClassListAPI; },
/* harmony export */   postSessionProgress: function() { return /* binding */ postSessionProgress; }
/* harmony export */ });
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./src/services/apiClient.ts");

const getClassListAPI = params => {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__["default"].get(`api/courses`, params);
};
const getClassDescAPI = classId => {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__["default"].get(`api/course-details/${classId}`, {});
};
const postSessionProgress = params => {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__["default"].post(`api/course-progress`, params);
};


/***/ }),

/***/ "./src/utils/getBaseUrl.ts":
/*!*********************************!*\
  !*** ./src/utils/getBaseUrl.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getBaseUrl = () => {
  let BASE_URL = '';
  if (true) {
    //开发环境 - 根据请求不同返回不同的BASE_URL
    BASE_URL = 'http://pwxjqz.demo.natool.cn';
  } else {}
  return BASE_URL;
};
/* harmony default export */ __webpack_exports__["default"] = (getBaseUrl);

/***/ }),

/***/ "./src/assets/icons/student.png":
/*!**************************************!*\
  !*** ./src/assets/icons/student.png ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/icons/student.png";

/***/ }),

/***/ "./src/assets/imgs/defaultImg.png":
/*!****************************************!*\
  !*** ./src/assets/imgs/defaultImg.png ***!
  \****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/imgs/defaultImg.png";

/***/ })

}]);
//# sourceMappingURL=common.js.map