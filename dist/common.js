"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/assets/const.ts":
/*!*****************************!*\
  !*** ./src/assets/const.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultImg: function() { return /* binding */ defaultImg; },
/* harmony export */   my_background1: function() { return /* binding */ my_background1; },
/* harmony export */   swiper1: function() { return /* binding */ swiper1; },
/* harmony export */   swiper2: function() { return /* binding */ swiper2; },
/* harmony export */   swiper3: function() { return /* binding */ swiper3; },
/* harmony export */   teacherAvatar: function() { return /* binding */ teacherAvatar; }
/* harmony export */ });
const defaultImg = 'https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/public/imgs/defaultImg.png';
const my_background1 = 'https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/public/imgs/my_background1.png';
const swiper1 = 'https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/public/imgs/swiper1.jpg';
const swiper2 = 'https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/public/imgs/swiper2.jpg';
const swiper3 = 'https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/public/imgs/swiper3.jpg';
const teacherAvatar = 'https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/public/imgs/teacherAvatar.jpg';


/***/ }),

/***/ "./src/services/apiClient.ts":
/*!***********************************!*\
  !*** ./src/services/apiClient.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_getBAseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/getBAseUrl */ "./src/utils/getBAseUrl.ts");
// ./src/api/request.ts


/* harmony default export */ __webpack_exports__["default"] = ({
  baseURL: `${(0,_utils_getBAseUrl__WEBPACK_IMPORTED_MODULE_1__["default"])()}/`,
  // set default baseURL

  apiClient(option) {
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'GET';
    // if option.url is relative path,splicing baseURL
    if (!option.url.startsWith('http')) {
      option.url = this.baseURL + option.url;
    }
    let header = {
      'content-type': 'application/json'
    };
    if (_tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token')) {
      header.Authorization = 'Bearer ' + _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync('token');
    }
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
      ...option,
      method,
      header: header,
      complete: res => {
        console.log('aaa', res.statusCode);
        if (res.statusCode == 401 || res.statusCode == 403) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().navigateTo({
            url: '/pages/Login/index'
          });
        }
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

/***/ "./src/utils/getBAseUrl.ts":
/*!*********************************!*\
  !*** ./src/utils/getBAseUrl.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__) {

const getBaseUrl = () => {
  let BASE_URL = '';
  if (true) {
    //开发环境 - 根据请求不同返回不同的BASE_URL
    BASE_URL = 'http://aoltps.demo.natool.cn';
    // BASE_URL = 'http://60.205.91.224:8080'
    // BASE_URL = 'http://fsdyt.cn'
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

/***/ })

}]);
//# sourceMappingURL=common.js.map