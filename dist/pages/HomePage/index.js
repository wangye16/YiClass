"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/HomePage/index"],{

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/HomePage/index!./src/pages/HomePage/index.tsx":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/HomePage/index!./src/pages/HomePage/index.tsx ***!
  \****************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/home */ "./src/services/home.ts");
/* harmony import */ var _assets_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/assets/const */ "./src/assets/const.ts");
/* harmony import */ var _assets_icons_jiangbei_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/assets/icons/jiangbei.png */ "./src/assets/icons/jiangbei.png");
/* harmony import */ var _assets_icons_jiangpai_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/icons/jiangpai.png */ "./src/assets/icons/jiangpai.png");
/* harmony import */ var _assets_icons_xingxing_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/assets/icons/xingxing.png */ "./src/assets/icons/xingxing.png");
/* harmony import */ var _assets_icons_huangxingxing_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icons/huangxingxing.png */ "./src/assets/icons/huangxingxing.png");
/* harmony import */ var _components_introductionTxt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/introductionTxt */ "./src/pages/HomePage/components/introductionTxt/index.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);














function Index() {
  const [teacherInfo, setTeacherInfo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({});
  const achievementObjArr = [{
    icon: _assets_icons_huangxingxing_png__WEBPACK_IMPORTED_MODULE_6__,
    lineOneText: '九宫门三元风水',
    lineTwoText: '第37代传承弟子'
  }, {
    icon: _assets_icons_jiangbei_png__WEBPACK_IMPORTED_MODULE_3__,
    lineOneText: '中国管理科学学会',
    lineTwoText: '传统文化讲师'
  }, {
    icon: _assets_icons_xingxing_png__WEBPACK_IMPORTED_MODULE_5__,
    lineOneText: '北京师范大学',
    lineTwoText: '中华优秀文化师资'
  }, {
    icon: _assets_icons_jiangpai_png__WEBPACK_IMPORTED_MODULE_4__,
    lineOneText: '易经研究院',
    lineTwoText: '学术委员会委员'
  }];

  // const booksObjArr=[{
  //   CoverImage:book1,
  //   bookName:'《易经智慧与现代生活》',
  //   publicDept:'中华书局'
  // },{
  //   CoverImage:book3,
  //   bookName:'《易经智慧与现代生活11111111111》',
  //   publicDept:'中华书局'
  // },{
  //   CoverImage:book1,
  //   bookName:'《易经智慧与现代生活33333333333》',
  //   publicDept:'中华书局111111111111111'
  // },{
  //   CoverImage:book1,
  //   bookName:'《易经智慧与现代生活》',
  //   publicDept:'中华书局'
  // }]

  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useReady)(() => {
    // getTeacherInfoApi();
  });
  const getTeacherInfoApi = async () => {
    try {
      const response = await (0,_services_home__WEBPACK_IMPORTED_MODULE_2__.getTeacherInfo)({
        teacherId: 1
      });
      const {
        satusCode,
        data = {}
      } = response;
      setTeacherInfo(data);
    } catch (error) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: "请求失败",
        icon: "error",
        duration: 2000
      });
      console.log("Error sending chat message:", error);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
    className: "home-container",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "title-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
        style: {
          display: "inline-block",
          width: 98,
          height: 98,
          borderRadius: 7
        },
        src: _assets_const__WEBPACK_IMPORTED_MODULE_10__.teacherAvatar
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        style: {
          marginRight: 14
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "title-line1",
          children: "\u4ED8\u56FD\u519B \u5927\u5E08"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "title-line2",
          children: "\u9AD8\u7EA7\u98CE\u6C34\u582A\u8206\u5E08"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "title-line3",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "title-tag",
            children: " \u5468\u6613\u516B\u5366 "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "title-tag",
            children: " \u547D\u7406\u98CE\u6C34 "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            className: "title-tag",
            children: " \u5947\u95E8\u9041\u7532 "
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "tags-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "tags-tag",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "tags-tag-line1",
          children: "30+"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "tags-tag-line2",
          children: "\u6613\u7ECF\u8457\u4F5C"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "tags-tag",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "tags-tag-line1",
          children: "20\u5E74"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "tags-tag-line2",
          children: "\u7814\u7A76\u7ECF\u9A8C"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "tags-tag",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "tags-tag-line1",
          children: "20K+"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
          className: "tags-tag-line2",
          children: "\u54A8\u8BE2\u7ECF\u9A8C"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "swiper-container",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Swiper, {
        style: {
          height: '100%'
        },
        autoplay: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.SwiperItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
            style: {
              width: '100%',
              height: '100%'
            },
            src: _assets_const__WEBPACK_IMPORTED_MODULE_10__.swiper1
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.SwiperItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
            style: {
              width: '100%',
              height: '100%'
            },
            src: _assets_const__WEBPACK_IMPORTED_MODULE_10__.swiper2
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.SwiperItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
            style: {
              width: '100%',
              height: '100%'
            },
            src: _assets_const__WEBPACK_IMPORTED_MODULE_10__.swiper3
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "achievement-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "achievement-title",
        children: "\u8363\u8A89\u6210\u5C31"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "achievement-item-container",
        children: achievementObjArr.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
          className: "achievement-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            style: {
              margin: 3
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Image, {
              src: item.icon,
              style: {
                width: 16,
                height: 16,
                marginRight: 6,
                verticalAlign: 'middle'
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.Text, {
              style: {
                verticalAlign: 'middle',
                fontSize: 12,
                lineHeight: '18px',
                fontWeight: 500
              },
              children: item.lineOneText
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
            style: {
              fontSize: 10,
              marginLeft: 26,
              color: '#6B7280',
              marginTop: 6
            },
            children: item.lineTwoText
          })]
        }))
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
      className: "introduction-container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_9__.View, {
        className: "introduction-title",
        children: "\u5927\u5E08\u7B80\u4ECB"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_introductionTxt__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
    })]
  });
}

/***/ }),

/***/ "./src/pages/HomePage/components/introductionTxt/index.tsx":
/*!*****************************************************************!*\
  !*** ./src/pages/HomePage/components/introductionTxt/index.tsx ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



function Index() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.ScrollView, {
    className: "lines",
    scrollY: true,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u8363\u83B7\u201C\u5317\u4EAC\u5E08\u8303\u5927\u5B66\u201D\u4E2D\u534E\u4F18\u79C0\u4F20\u7EDF\u6587\u5316\u5E08\u8D44\u57F9\u8BAD\u8BA4\u8BC1\u8BC1\u4E66\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u5317\u4EAC\u5E08\u8303\u5927\u5B66\u54F2\u5B66\u9662\uFF1A\u6613\u5B66\u9AD8\u7EA7\u8BFE\u4F18\u79C0\u5B66\u5458\uFF0C\u7EC8\u751F\u5B66\u5458\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u5317\u4EAC\u5E08\u8303\u5927\u5B66\u6613\u5B66\u4E03\u73ED\u5B66\u751F\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u8363\u83B7\u201C\u4E2D\u56FD\u7BA1\u7406\u79D1\u5B66\u5B66\u4F1A\u57F9\u8BAD\u4E2D\u5FC3\u201D\u4F20\u7EDF\u6587\u5316\u8BB2\u5E08\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u9999\u6E2F\u804C\u5DE5\u6559\u80B2\u53CA\u804C\u4E1A\u57F9\u8BAD\u534F\u4F1A\u7279\u8058\uFF1A\u56FD\u9645\u6613\u5B66\u6587\u5316\u4E13\u4E1A\u59D4\u5458\u4F1A\u4E13\u5BB6\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u4E2D\u56FD\u4EBA\u529B\u8D44\u6E90\u4E13\u4E1A\u4EBA\u624D\u6280\u80FD\u9274\u5B9A\u4E2D\u5FC3\uFF1A\u9AD8\u7EA7\u98CE\u6C34\u582A\u8206\u5E08\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u56FD\u9645\u4FE1\u606F\u5316\u4E13\u4E1A\u4EBA\u624D\u7BA1\u7406\u4E2D\u5FC3\uFF1A\u98CE\u6C34\u582A\u8206\u5E08\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u6CB3\u5357\u5D69\u5C71\u4E2D\u5CB3\u5E99\u51A0\u5DFE\u9053\u58EB\uFF1A\u5B97\u5B57\u8F88\uFF0C\u9053\u540D\uFF1A\u5FB7\u96F2\u5B50\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u4E91\u5357\u9E21\u8DB3\u5C71\u201C\u5B8F\u76DB\u201D\u5927\u548C\u5C1A\u7688\u4F9D\u5F1F\u5B50\u6CD5\u540D\uFF1A\u60DF\u5B66\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u4E5D\u5BAB\u95E8\u4E09\u5143\u98CE\u6C34\u7B2C37\u4EE3\u4F20\u627F\u5F1F\u5B50\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u4E91\u5357\u6BB7\u5927\u6CD5\u5E08\u4EB2\u4F20\u5F1F\u5B50\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u82CD\u6CB3\u660E\u91D1\u6D3E\u516B\u5B57\u7B2C36\u4EE3\u4F20\u627F\u4EBA\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u300A\u7EA2\u65D7\u98D8\u98D8\u4E30\u7891\u9882\u4F18\u79C0\u4E66\u753B\u4F5C\u54C1\u96C6\u300B\u7CFB\u5217\u4E1B\u4E66\u7F16\u59D4\u3001\u5185\u8499\u5206\u9662\u9662\u957F\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "2001 \u5E74\uFF0C\u4ED8\u56FD\u519B\u5148\u751F\u521D\u6B21\u8E0F\u5165\u5468\u6613\u7684\u7814\u5B66\u4E4B\u5883\uFF0C\u5F00\u542F\u4E86\u4E00\u6BB5\u65E2\u6F2B\u957F\u53C8\u7CBE\u5F69\u7EB7\u5448\u7684\u5B66\u672F\u5F81\u7A0B\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "2005 \u5E74\uFF0C\u4E3A\u4E86\u80FD\u591F\u66F4\u52A0\u7CFB\u7EDF\u5168\u9762\u5730\u628A\u63A7\u6613\u5B66\u7684\u6838\u5FC3\u7406\u8BBA\uFF0C\u4ED8\u56FD\u519B\u8001\u5E08\u6BC5\u7136\u51B3\u7136\u5730\u9009\u62E9\u62DC\u5E08\u5B66\u827A\uFF0C\u6DF1\u5165\u94BB\u7814\u5947\u95E8\u9041\u7532\u548C\u56DB\u67F1\u516B\u5B57\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "2007 \u5E74\uFF0C\u4ED8\u56FD\u519B\u5148\u751F\u90A3\u5F3A\u70C8\u65E0\u6BD4\u7684\u6C42\u77E5\u6B32\u671B\u4FC3\u4F7F\u4ED6\u518D\u6B21\u62DC\u5E08\uFF0C\u5168\u8EAB\u5FC3\u5730\u6295\u5165\u5230\u4E09\u5143\u4E09\u5408\u516B\u5B85\u98CE\u6C34\u7684\u7814\u4E60\u4E4B\u4E2D\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "2013 \u5E74\uFF0C\u62DC\u767D\u4E91\u89C2\u90B1\u9053\u957F\u4E3A\u5E08\uFF0C\u5B66\u4E60\u5947\u95E8\u9041\u7532\u548C\u9053\u5BB6\u98CE\u6C34\u3001\u4EBA\u683C\u547D\u7406\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "2015 \u5E74\uFF0C\u4ED8\u56FD\u519B\u5148\u751F\u5C06\u81EA\u5DF1\u591A\u5E74\u6240\u5B66\u5E7F\u6CDB\u5E94\u7528\u4E8E\u5B9E\u9645\u7684\u5B9E\u8DF5\u4E4B\u4E2D\uFF0C\u6210\u529F\u521B\u7ACB\u4E86\u8D64\u5CF0\u5E02\u5927\u5BCC\u5C71\u77F3\u96D5\u6709\u9650\u516C\u53F8\u3002\u5C06\u6613\u5B66\u7406\u8BBA\u4E0E\u5B9E\u9645\u8FD0\u7528\u76F8\u878D\u5408\uFF0C\u5728\u53E4\u8001\u7684\u54F2\u5B66\u4E2D\u8FC8\u51FA\u65B0\u7684\u91CC\u7A0B\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "2017 \u5E74\uFF0C\u4ED8\u56FD\u519B\u5148\u751F\u51ED\u501F\u81EA\u8EAB\u7684\u5353\u8D8A\u624D\u80FD\u8003\u5165\u5317\u4EAC\u5E08\u8303\u5927\u5B66\u6613\u5B66\u4E03\u73ED\uFF0C\u8FDB\u800C\u5C55\u5F00\u4E86\u66F4\u4E3A\u6DF1\u5165\u3001\u5168\u9762\u7684\u201C\u6613\u7ECF\u201D\u7814\u4E60\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "2021 \u5E74\uFF0C\u5E08\u4ECE\u4E5D\u5BAB\u95E8\u82CD\u5C71\u6D3E\u7B2C 36 \u4EE3\u4F20\u4EBA\uFF0C\u5C3D\u60C5\u6C72\u53D6\u53E4\u8001\u4F20\u627F\u6240\u8574\u542B\u7684\u65E0\u5C3D\u667A\u6167\u3002\u5176\u540E\u4ED6\u8FDB\u4E00\u6B65\u62DC\u5E08\u5B66\u4E60\u4E09\u5143\u98CE\u6C34\u548C\u5947\u95E8\u7384\u5B66\uFF0C\u5E08\u4ECE\u4E5D\u5BAB\u95E8\u82CD\u5C71\u6D3E\u7B2C 36 \u4EE3\u4F20\u4EBA\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "\u4ED8\u56FD\u519B\u5148\u751F\u62DC\u5CAD\u5357\u4E2D\u56FD\u4E09\u5143\u6D3E\u56FD\u9645\u98CE\u6C34\u5927\u5E08\u4E3A\u5E08\uFF0C\u6210\u4E3A\u5176\u95E8\u4E0B\u7684\u5F1F\u5B50\uFF0C\u7EE7\u7EED\u6DF1\u5165\u5730\u63A2\u7A76\u4E09\u5143\u53CA\u9053\u5BB6\u98CE\u6C34\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "2022 \u5E74\uFF0C\u4ED8\u56FD\u519B\u5148\u751F\u901A\u8FC7\u201C\u4E2D\u56FD\u7BA1\u7406\u79D1\u5B66\u7814\u7A76\u9662 AYPC \u6267\u4E1A\u8D44\u683C\u8003\u8BD5\u201D\uFF0C\u8363\u83B7\u201C\u6613\u7ECF\u98CE\u6C34\u7B56\u5212\u5E08(\u4E2D\u7EA7)\u201D\u8FD9\u4E00\u8D44\u8D28\u3002"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_1__.View, {
      children: "2023 \u5E74\uFF0C\u4ED8\u56FD\u519B\u5148\u751F\u6210\u4E3A\u5317\u5E08\u5927\u7684\u7EC8\u8EAB\u5236\u5B66\u5458\uFF0C\u8FD9\u6E05\u6670\u5730\u662D\u793A\u7740\u4ED6\u5C06\u5728\u6613\u5B66\u7684\u5EB7\u5E84\u5927\u9053\u4E0A\u6301\u7EED\u4E0D\u65AD\u5730\u63A2\u7D22\u524D\u884C\uFF0C\u6C38\u4E0D\u505C\u6B47\uFF0C\u6C38\u4E0D\u6B62\u6B65\u3002"
    })]
  });
}

/***/ }),

/***/ "./src/pages/HomePage/index.tsx":
/*!**************************************!*\
  !*** ./src/pages/HomePage/index.tsx ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_HomePage_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/HomePage/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/HomePage/index!./src/pages/HomePage/index.tsx");


var config = {"navigationBarTitleText":"富山德易堂","usingComponents":{}};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_HomePage_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/HomePage/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_HomePage_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/services/home.ts":
/*!******************************!*\
  !*** ./src/services/home.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTeacherInfo: function() { return /* binding */ getTeacherInfo; }
/* harmony export */ });
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./src/services/apiClient.ts");

const prefix = 'home';
const getTeacherInfo = params => {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__["default"].get(`${prefix}/desc`, params);
};


/***/ }),

/***/ "./src/assets/icons/huangxingxing.png":
/*!********************************************!*\
  !*** ./src/assets/icons/huangxingxing.png ***!
  \********************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAJYSURBVFiFxZdNctpAEIW/1k+sJV6EKu/kG+AboH1cNidwcQP7JrmB7RMoDska3SDcwOwos7GWuKRRZyHAIIkwpJD9duqZ6vdGmu5+Eiwxi4PQ9bhHCI0yPLtcJJvrL6Mv14LcI5L62eLidEBqk9exFeC69IE+Suii8Tz2e6u1eez3BLkH6aCEmXdyY5vXs90ooleKrJ46eM54HvtRmcUZg3Q2NvcaUjSi8Q3M4iCsxhT6FUkdPGdcIwdQvbbJCayPtMZ8FIyBPsIUSIzy6DompXD/7DhEIwSiHPBEr4pCrkUIgaR7uYh2ClhetOdDiA6FyTk/GyymjQIAXn4Gz0u1x4cw7X5bnG+GanfAcfRHK+QlkhpfNZCrPLXFbpTHvQKs6/I/4Dqm1pzkNaaTeSc3iPTK8qmU1NGhqUCiKk/GkMj8V/CMtnTp9iNxUG35xP+AEDqKDkGtBsdxoalqcSdQDpPGltoiOXkRdQfZZN2IPk7EOzkcMI7bwud/gtko6Lto/HHkGyJU7j65D2jqoEw/hxwQSR2TMwS9BZKP6QeaLrlu/WxxUXdEv/3eoe7HFgLR14qbrpWhKdzWLmPeEKsJcAVrS30oPNGrvQKoud/joSik5pa3BMziIGyzJEUIq/Z8S8DSrSYAqkxF9LuBSGDLSlvBMRcGIoSHpcUHSDYdMTS4YijfRHXjfHTyWu+Wq7Ktx7uXb6f7csKOYdS0EZGKWy77OXkR1fuHTKxy7hLQCNWNpO/DpDvIJnUR9tbeWoCfvz2W37IcIqt5DtAdZBNFh+vfudze2v8Fzi0HbNQT8KgAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/icons/jiangbei.png":
/*!***************************************!*\
  !*** ./src/assets/icons/jiangbei.png ***!
  \***************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAgCAYAAAB6kdqOAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALcSURBVFiFxZdbUtswFIb/I4d0uHQGVlCzgvIICQ/pCmAHJCsoLKCJnC4g7CBhBWlXgJkB2rfSFdSsAM+UkE7AOn3wTbEDVh1P+d8kHR19up4jgoEazkQCdEQE28R+gTxiPrvsrcsiQyoy2Hcmkol6JUHmxMzOdQGUKHQCOqgCJhQdFVkYAGGzGhgzUbP/cAxwD6D/OnBe7APkULM/uXt9mFjsC2byXxsjFjP5NQISoEDR9ne56ulGzf50CHC7miFpdNVd7eg1DXm/Q0L8AAACfEGEBICgdnIuiG+qgQGY1W22ToDT40LwBSPdMsuidzknqrotZUZ+cpb1XivdCDBcrcNh3knwsyogAnt5/+mYSvGFWOE/X7X2Vkvezd24Oh698Eour2u5MbdCu3JqA2jF5TeYucKVWz6QrtKM6sd6p7CdqjhHbraiRqqtt7tyyxcAQCpw4loi6kXkuqoAyq2OHiMZ6gyIQselfOtCm4Fl8VjfOlKBvq2llPVhWTzWiu51d2OUAEUdklUCY+dR1AdxMQRe6hx50aQBAM3+ZAhG8sQEipK3KQGKOpykPqjd6D+M0+2jUXkecgGgJe82m/2Hc4DaSQuzoz/GuXxoQf7jBYo+AIAl+FcZnEDRdg1PNgtrCMwleadX3bUT3XZhgrY4KaMRwDa0a2ooFyBvQfjJwTwLBABhWoLBc+3lFaYZV92100WtL6awu3JqWwK96oIr3EBRJxvAjYFi7cvfLQjrIyMfWkxBSAWOftOWAoq1K6d2zeIDVmiDkMsMshDMfFHn2WkUDYz0T0C69uTkUAgaALmvkUcq6JisRqVAQLiVLKxzvY6hOvGrW0aFv46XVMNTLsYtAwMsCTTDip2ta8j7orP1okoDRbnwOFtPQoyXgTI+Q3ufJ4eCMSzxZfIU8cm3T+tfTIyNV0gwDUr+3+xwIobjmPvlMjCRzD8KxkCK0AHSL5O52FfEuSD6nP4CLesk+o7HKEIAAAAASUVORK5CYII=";

/***/ }),

/***/ "./src/assets/icons/jiangpai.png":
/*!***************************************!*\
  !*** ./src/assets/icons/jiangpai.png ***!
  \***************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAMoSURBVFiFrZffUdtAEMZ/K5E/SvJgOjAdQAd2BcAEM3byAK4guALiCoIrgDwEM0AGUwFKBZAKUAfxQxJ5xiNtHpCCkO+kg+R7sndXe9/d7X23J8dbv/c8YR+kgRE6VZFR7zT4aPabUZ+XKFUdyUlndg26WpdQod87C45cBh934l2Bw/pInXpA5JJU0E+HGz9ss7kfvBs3BfZdcoJMvHge90GnDsGN4HlQm1hS+QA0HUaP1GcoAMdvf214nnfh8BGqtHvnQWjyjbtxUxJunfJkW+oBvPv6egIycflQxL68knDlkgM4yuvJyy3uW0HreOv3Xtk47sS7PGLp8z9/CfQny9NU7x1V8IT9YkE+pvAUhr2TIFogAPDu/NUBEFZ8HyFykIr2y45U0gEiB1SfqqPyUZZyxF0h6XVJQEJVhrbiW8ixFbdEOOThlkTq0y7O3kgAchWTTwCp6iBbmWLyHZBVSLMB5AZkquhlcYbFPDYhMxIAOOnMLlR1lM/aQVr/zjRVHeWkv3R+rvqytNM9fTkwBVsJ5Djc+NEInr28AFp1saXUE/V1UF7yRxHIhOUKt+NlQhTPZ2v9ybL1eHs2B4AkC4VUgk5rtKOZrZ4VVgLj7fgjNcuuKpuqslkVg0W4agmIslOTOOydB2FWpGFVoFch30YCLrKqBdXUWgWVxvH2rw1nAoKsG8whIgci7JZvxN55EKrSBtnL1DAsf+ypZ8rJkoVys2xISAbvT9/cWOIpbsWXzs9VH//6YYQYuy5LDeQKdw8f/2LcjRfsZYy7cdPHN1T+Ys4KAkY0JeGqisRTdMNCwIusJO5aLiOq2zExbp+FgFr3Gq24bqt8iFGwjAQUvlnHUP2e/x5vxa3ilhR9izn10kjLZLy7gF7cmm4+nbPCEs2sN2xl5iP1GaZJ0lisfgCi7lmwYhrLuAJV7Zk802sRrngo07uScGuufkhVRyY71NyGJ524PNBTEHbPgrbNWXkM4/lsE8eXkwWR+iz0j84E+pPlqfq0Xd8MJYTxfLb2Tw1JEVl/5/Ds0mmqDIt95H8hkOPu5SvroI37V7UXgd6o8tm1c87xBxiEYfd33kELAAAAAElFTkSuQmCC";

/***/ }),

/***/ "./src/assets/icons/xingxing.png":
/*!***************************************!*\
  !*** ./src/assets/icons/xingxing.png ***!
  \***************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAgCAYAAACcuBHKAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHwSURBVFiFxdXBVeMwEAbgf4y5W28LWKeCeDsQxNyhApIKYCsAKtgSSAm5Yz/UAdkOTAE8m7us2UOyOARJsYPj/EdHlr43kWcI30g5mTyC6BLMC5Hns333CfZ98S1N70E0BRCBaFqm6e2giFLKKABuPj1kvnEsPwzChOEtgOjTQ6K4PD+fDoKwVqGB3A2CsFahQexVjU4IbxUaSOdqdEJ4q9AgOlejE2JnFRpIp2qQ78fy4iIBcwSiMYxJ1n2hbRYgUjDmFXW9FEoVXkQpZYyTk8QQJQEwBhADSDoc2CYVmCsACkQVmJcIgr/i6WlJ6073p+cDu+Qh+E6n6yXM1wGIqqMiiIoAWl+BuTgKgLmA1rPNi/kMonhQQF2fCaWKj090UMgGANjqE4NAtgBfEAeHWABWxMEgDoAT8QEJwxfsGlhto/XI1bp9A6zqDdDsZ40bcXoa9wgAwtA5i9wIY8a9Ioic+7kRRP1OUea4O2I1zvvMHn8HII+KKKWM0ObLWA2+BTw3fyPRet92CN9N3gDMUddnIsuuoPXIAA87MY597QjPTQbzHFqPRJ7P/jcfoVT1I8vuofUvMM897/5sjzDmtc3h2xFKFSLPZ9B6BEBZlrzb3nO37cnkEYAEUQGtnQf7UqapBHCH1aWciyz7bVv3D4LU3U2zt5DMAAAAAElFTkSuQmCC";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/HomePage/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map