"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/Class/ClassDesc/index"],{

/***/ "./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Class/ClassDesc/index!./src/pages/Class/ClassDesc/index.tsx":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Class/ClassDesc/index!./src/pages/Class/ClassDesc/index.tsx ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/class */ "./src/services/class.ts");
/* harmony import */ var _assets_icons_student_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/icons/student.png */ "./src/assets/icons/student.png");
/* harmony import */ var _components_VideoComp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/VideoComp */ "./src/pages/Class/ClassDesc/components/VideoComp/index.tsx");
/* harmony import */ var _components_SessionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/SessionList */ "./src/pages/Class/ClassDesc/components/SessionList/index.tsx");
/* harmony import */ var _components_PaymentStatusBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PaymentStatusBar */ "./src/pages/Class/ClassDesc/components/PaymentStatusBar/index.tsx");
/* harmony import */ var _assets_const__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/assets/const */ "./src/assets/const.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);












function Index() {
  const {
    params: urlParams
  } = (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
  const {
    classId,
    studyCount,
    paymentStatus
  } = urlParams;
  const [classDesc, setClassDesc] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({});
  const [curSessionObj, setCurSessionObj] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({});
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useDidShow)(() => {
    console.log("useReady");
    console.log("🚀 ~ Index ~ urlParams:", urlParams);
    getClassDesc();
  });
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useUnload)(() => {
    // 卸载页面时上传所有章节的进度，然后清除缓存
    const progressArr = classDesc?.context?.map(item => {
      let obj = {
        sessionId: item.sessionId,
        classId,
        progress: _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync(item.sessionId + "")
      };
      if (item.sessionId == _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync("curLearningSession")) {
        obj.isLearning = true;
      }
      return obj;
    });
    (0,_services_class__WEBPACK_IMPORTED_MODULE_1__.postSessionProgress)(progressArr);
    console.log("视频页面已经卸载，缓存是：", _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageInfoSync());
    classDesc?.context?.map(item => {
      console.log("a", item.sessionId);
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync(item.sessionId);
    });

    // 删除curLearningSession字段
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().removeStorageSync("curLearningSession");
    console.log("视频页面已经卸载，清除后缓存是：", _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageInfoSync());
  });
  const setProgressStorage = sessionList => {
    console.log("🚀 ~ setProgressStorage ~ sessionList:", sessionList);
    sessionList?.map(item => {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync(item.sessionId + "", item.progress);
    });
  };
  const getClassDesc = async () => {
    try {
      const response = await (0,_services_class__WEBPACK_IMPORTED_MODULE_1__.getClassDescAPI)(classId || "");
      const {
        code,
        data = {}
      } = response.data;
      // 把视频进度放在本地存储
      setProgressStorage(data.context || []);
      setClassDesc(data);
    } catch (error) {
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().showToast({
        title: "请求失败",
        icon: "error",
        duration: 2000
      });
      console.log("Error sending chat message:", error);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    // if(!classDesc.learningSession) return
    const learningSessionObj = classDesc?.context?.find(i => i.sessionId == classDesc.learningSession) || classDesc?.context?.[0] || {};
    console.log("🚀 ~ useEffect ~ learningSessionObj:", learningSessionObj);
    setCurSessionObj(learningSessionObj);
  }, [classDesc.learningSession]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
    className: "class-container",
    children: classDesc?.paymentStatus !== "forbid" && classDesc?.classId ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "class-video-container",
        children: paymentStatus === "notPaid" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
          src: `https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/video/${classId}/coverImage.jpg` || _assets_const__WEBPACK_IMPORTED_MODULE_9__.defaultImg,
          lazyLoad: true,
          style: {
            width: "100%",
            height: "100%",
            background: "#fff",
            objectFit: "contain"
          }
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_VideoComp__WEBPACK_IMPORTED_MODULE_3__["default"], {
          desc: classDesc,
          curSessionObj: curSessionObj,
          sessionId: curSessionObj.sessionId || classDesc.learningSession
        }, curSessionObj.sessionId)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
        className: "class-desc-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
          className: "class-name-text",
          children: classDesc?.className
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          style: {
            fontSize: 12,
            lineHeight: "18px",
            color: "#4B5563",
            marginTop: 6
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Image, {
            src: _assets_icons_student_png__WEBPACK_IMPORTED_MODULE_2__,
            style: {
              width: 14,
              height: 14,
              marginRight: 3,
              verticalAlign: "middle"
            }
          }), studyCount ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            style: {
              verticalAlign: "middle"
            },
            children: [studyCount, "\u4EBA\u5B66\u4E60"]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {})]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
          className: "class-desc-text",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.Text, {
            style: {
              lineHeight: "21px",
              color: "#000"
            },
            children: "\u8BFE\u7A0B\u7B80\u4ECB"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.ScrollView, {
            scrollY: true,
            style: {
              height: 120,
              marginTop: 6,
              color: "#4B5563",
              fontSize: 12,
              lineHeight: "19px"
            },
            children: classDesc.description
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_SessionList__WEBPACK_IMPORTED_MODULE_4__["default"], {
          paymentStatus: paymentStatus,
          curSessionId: curSessionObj.sessionId,
          classDesc: classDesc,
          setCurSessionObj: setCurSessionObj
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_PaymentStatusBar__WEBPACK_IMPORTED_MODULE_5__["default"], {
        paymentStatus: paymentStatus,
        classDesc: classDesc
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_8__.View, {
      children: " \u6B22\u8FCE\u6765\u5230\u5BCC\u5C71\u5FB7\u6613\u5802 "
    })
  });
}

/***/ }),

/***/ "./src/pages/Class/ClassDesc/components/PaymentStatusBar/index.tsx":
/*!*************************************************************************!*\
  !*** ./src/pages/Class/ClassDesc/components/PaymentStatusBar/index.tsx ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_pay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/services/pay */ "./src/services/pay.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






function Index(_ref) {
  let {
    classDesc,
    paymentStatus
  } = _ref;
  const {
    price,
    classId,
    className
  } = classDesc;
  const [payButtonLoading, setPayButtonLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const orderId = `fsdyt_${classId}${Date.now()}`;
  const onPayTap = async () => {
    setPayButtonLoading(true);
    const paymentParams = await (0,_services_pay__WEBPACK_IMPORTED_MODULE_2__.pay)({
      openid: _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().getStorageSync('openid'),
      orderNumber: orderId,
      totalFee: price * 100,
      // 微信支付金额的单位是分，所以需要乘以100
      description: `课程《${className}》的支付订单`,
      courseId: classId
    });
    console.log("🚀 ~ onPayTap ~ paymentParams:", paymentParams);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().requestPayment({
      timeStamp: paymentParams.data.timeStamp,
      nonceStr: paymentParams.data.nonceStr,
      package: paymentParams.data.package,
      signType: paymentParams.data.signType,
      paySign: paymentParams.data.paySign,
      success(res) {
        console.log("支付成功:", res);
        (0,_services_pay__WEBPACK_IMPORTED_MODULE_2__.getPayRes)(orderId).then(res => {
          console.log('hahah', res.data);
          if (res.data?.code != 200) {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showModal({
              title: '提示',
              content: '订单异常，请联系客服。客服电话：18804180217',
              showCancel: false
            });
          } else {
            _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().redirectTo({
              url: `/pages/PayResult/index?courseId=${res.data?.data?.courseId}&totalFee=${res.data?.data?.totalFee}`
            });
          }
        }).catch(err => {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
            title: '订单异常，请联系客服',
            icon: 'error',
            duration: 4000
          });
        });
      },
      fail(err) {
        console.error("支付失败:", err);
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default().showToast({
          title: '支付失败',
          icon: 'error',
          duration: 2000
        });
      }
    });
    setPayButtonLoading(false);
  };

  // 底部支付状态信息的渲染函数
  const renderPaymentStatusView = () => {
    switch (paymentStatus) {
      case "notPaid":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
          className: "bottom-info",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.View, {
            style: {
              margin: 15,
              height: 42,
              lineHeight: '42px',
              display: 'flex',
              justifyContent: 'space-between'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Text, {
              style: {
                fontSize: 26,
                fontWeight: "bold"
              },
              children: ["\xA5", price]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
              style: {
                borderRadius: 21,
                width: 112,
                height: 42,
                fontSize: 14,
                lineHeight: "42px",
                backgroundColor: "#000",
                display: "inline-block",
                color: "#fff",
                margin: 0
              },
              loading: payButtonLoading,
              onTap: onPayTap,
              children: "\u7ACB\u5373\u8D2D\u4E70"
            })]
          })
        });
      default:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});
    }
  };
  return renderPaymentStatusView();
}

/***/ }),

/***/ "./src/pages/Class/ClassDesc/components/SessionList/index.tsx":
/*!********************************************************************!*\
  !*** ./src/pages/Class/ClassDesc/components/SessionList/index.tsx ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_playIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/assets/icons/playIcon.png */ "./src/assets/icons/playIcon.png");
/* harmony import */ var _assets_icons_locked_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/icons/locked.png */ "./src/assets/icons/locked.png");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








function Index(_ref) {
  let {
    curSessionId,
    classDesc,
    setCurSessionObj,
    paymentStatus
  } = _ref;
  const {
    context,
    learningSession
  } = classDesc;
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useReady)(() => {});
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {}, []);
  const handleSessionTap = sessionId => {
    const learningSessionObj = classDesc?.context?.find(i => i.sessionId === sessionId);
    setCurSessionObj(learningSessionObj);
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync('curLearningSession', sessionId);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
    className: "session-list",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
      style: {
        marginBottom: 7
      },
      children: "\u8BFE\u7A0B\u76EE\u5F55"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.ScrollView, {
      scrollY: true,
      style: {
        height: 200
      },
      children: context?.map(_ref2 => {
        let {
          chapterName,
          sessionId
        } = _ref2;
        return paymentStatus == 'notPaid' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          style: {
            height: 40,
            fontSize: 12,
            marginBottom: 10,
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#F9FAFB'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            style: {
              color: '#9CA3AF',
              lineHeight: '40px',
              marginLeft: 10
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
              src: _assets_icons_locked_png__WEBPACK_IMPORTED_MODULE_2__,
              style: {
                width: 14,
                height: 14,
                marginRight: 7,
                verticalAlign: 'middle'
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              style: {
                verticalAlign: 'middle',
                width: 300,
                display: 'inline-block',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-all',
                whiteSpace: 'nowrap'
              },
              children: chapterName
            })]
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
          style: {
            height: 40,
            fontSize: 12,
            marginBottom: 10,
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: sessionId == curSessionId ? '#EFF6FF' : '#F9FAFB'
          },
          onTap: () => handleSessionTap(sessionId),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.View, {
            style: {
              color: sessionId == curSessionId ? '#2563EB' : '#4B5563',
              lineHeight: '40px',
              marginLeft: 10
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Image, {
              src: _assets_icons_playIcon_png__WEBPACK_IMPORTED_MODULE_1__,
              style: {
                width: 14,
                height: 14,
                marginRight: 7,
                verticalAlign: 'middle'
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_5__.Text, {
              style: {
                verticalAlign: 'middle',
                width: 300,
                display: 'inline-block',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                wordBreak: 'break-all',
                whiteSpace: 'nowrap'
              },
              children: chapterName
            })]
          })
        });
      })
    })]
  });
}

/***/ }),

/***/ "./src/pages/Class/ClassDesc/components/VideoComp/index.tsx":
/*!******************************************************************!*\
  !*** ./src/pages/Class/ClassDesc/components/VideoComp/index.tsx ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Index; }
/* harmony export */ });
/* harmony import */ var _tarojs_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/components */ "./node_modules/.pnpm/@tarojs+plugin-platform-weapp@4.0.7_@tarojs+service@4.0.7_@tarojs+shared@4.0.7/node_modules/@tarojs/plugin-platform-weapp/dist/components-react.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "webpack/container/remote/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "webpack/container/remote/react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






function Index(_ref) {
  let {
    desc,
    curSessionObj,
    sessionId
  } = _ref;
  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.useReady)(() => {});
  const handleProgressChange = e => {
    _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().setStorageSync(sessionId + '', Math.floor(e.detail?.currentTime));
    console.log(sessionId, (0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__.getStorageSync)(sessionId + ''));
  };

  // useEffect(()=>{
  //   const videoContext = Taro.createVideoContext(sessionId+'',videoRef)
  //   console.log('src变化了',curSessionObj,videoContext,videoRef.current);
  //   // 设置为停止播放状态
  //   videoContext.sendDanmu({text:'123'})
  //   videoContext.stop()
  // },[videoSrc])

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tarojs_components__WEBPACK_IMPORTED_MODULE_3__.Video, {
    ref: videoRef,
    id: sessionId + '',
    style: {
      width: '100%',
      height: '100%'
    },
    autoplay: false
    // src={videoSrc}
    ,
    src: `https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/video/${desc.classId}/${sessionId}.mp4`,
    initialTime: _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().getStorageSync(sessionId + ''),
    playBtnPosition: "center",
    signature: "\u6C34\u5370",
    pageGesture: true,
    showPlayBtn: true,
    direction: 90
    // showCenterPlayBtn
    // showCastingButton
    ,
    showScreenLockButton: true,
    showSnapshotButton: true,
    onTimeUpdate: e => {
      handleProgressChange(e);
    }
  });
}

/***/ }),

/***/ "./src/pages/Class/ClassDesc/index.tsx":
/*!*********************************************!*\
  !*** ./src/pages/Class/ClassDesc/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_Class_ClassDesc_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Class/ClassDesc/index!./index.tsx */ "./node_modules/.pnpm/@tarojs+taro-loader@4.0.7_webpack@5.91.0_@swc+core@1.3.96_/node_modules/@tarojs/taro-loader/lib/entry-cache.js?name=pages/Class/ClassDesc/index!./src/pages/Class/ClassDesc/index.tsx");


var config = {};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_Class_ClassDesc_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/Class/ClassDesc/index', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_pnpm_tarojs_taro_loader_4_0_7_webpack_5_91_0_swc_core_1_3_96_node_modules_tarojs_taro_loader_lib_entry_cache_js_name_pages_Class_ClassDesc_index_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/services/pay.ts":
/*!*****************************!*\
  !*** ./src/services/pay.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getPayRes: function() { return /* binding */ getPayRes; },
/* harmony export */   pay: function() { return /* binding */ pay; }
/* harmony export */ });
/* harmony import */ var _apiClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiClient */ "./src/services/apiClient.ts");

const pay = params => {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__["default"].post(`api/create-wechat-pay-order`, params);
};
const getPayRes = orderId => {
  return _apiClient__WEBPACK_IMPORTED_MODULE_0__["default"].get(`api/order-info/${orderId}`, {});
};


/***/ }),

/***/ "./src/assets/icons/locked.png":
/*!*************************************!*\
  !*** ./src/assets/icons/locked.png ***!
  \*************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/icons/locked.png";

/***/ }),

/***/ "./src/assets/icons/playIcon.png":
/*!***************************************!*\
  !*** ./src/assets/icons/playIcon.png ***!
  \***************************************/
/***/ (function(module) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAE7SURBVEiJvZbtTcMwEIafeoKMcExA2CBMQDcgTEA3QUwATMAIGaFhgmSDdgP4YVstllufc1Ff6eSqSvzoPvw6G3RqgWegCb8l/D+fxXtYTdoCA/CrjAHol4CkEpQDixbWApMBFmMKexVhVlAa3SWYrJRZLlPJAS090/T0n3rFSwcjdFuT3YQ/gwK8WbMUxcMfSUWEZf3uHMsO6gzcAS/UucuTA+4XAKM+gcewatQ4fG8smvGZPlDOtgXd9KU9vKSmsN/BadOoAF6tmGOFKyWoI3PAE40OGI0gAb7R3RBHBxwNsB2wJ3GRK/oBX4raoekCqPbgS9ygZG17TgNhtjZCSSzGrIk+rW8pS0tkp1e48QUMugGqDdV3zRqZThpYlHDDz8Rz9ZXggYIJbJRgAV7DGgO8D494t/pCYZN/rlOWclKdNUIAAAAASUVORK5CYII=";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["taro","common"], function() { return __webpack_exec__("./src/pages/Class/ClassDesc/index.tsx"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=index.js.map