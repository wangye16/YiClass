# 接口文档

## 列表
    {
        code:200,
        message:'成功',
        data: [
                {
                    "classId":123,
                    "className":"易经基础入门课程",
                    "coverImage":"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
                    "desc":"从零开始学习易经，掌握基本概念和原理",
                    "studyNum":2356,
                    "price":99,
                    "paymentStatus" :"paid", // 支付状态：[free | paid | notPaid]
                },
                {
                    "classId":124,
                    "className":"易经基础入门课程",
                    "coverImage":"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
                    "desc":"从零开始学习易经，掌握基本概念和原理",
                    "studyNum":undefined,
                    "price":99,
                    "paymentStatus" :"free", // 支付状态：[free | paid | notPaid]
                },
                {
                    "classId":125,
                    "className":"易经基础入门课程",
                    "coverImage":"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
                    "desc":"从零开始学习易经，掌握基本概念和原理",
                    "studyNum":undefined,
                    "price":99,
                    "paymentStatus" :"notPaid", // 支付状态：[free | paid | notPaid]
                },
                {
                    "classId":126,
                    "className":"易经基础入门课程",
                    "coverImage":"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
                    "desc":"从零开始学习易经，掌握基本概念和原理",
                    "studyNum":undefined,
                    "price":99,
                    "paymentStatus" :"notPaid", // 支付状态：[free | paid | notPaid]
                },
                 {
                    "classId":127,
                    "className":"易经基础入门课程",
                    "coverImage":"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
                    "desc":"从零开始学习易经，掌握基本概念和原理",
                    "studyNum":undefined,
                    "price":99,
                    "paymentStatus" :"notPaid", // 支付状态：[free | paid | notPaid]
                },
                 {
                    "classId":128,
                    "className":"易经基础入门课程",
                    "coverImage":"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
                    "desc":"从零开始学习易经，掌握基本概念和原理",
                    "studyNum":undefined,
                    "price":undefined,
                    "paymentStatus" :"notPaid", // 支付状态：[free | paid | notPaid]
                },
        ]
    }

## 详情

    {
        code:200,
        message:'成功',
        data: {
            "classId":123,
            "className":"易经基础入门课程",
            "coverImage":"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
            "desc":"从零开始学习易经，掌握基本概念和原理",
            "studyNum":2356,
            "price":99,
            "paymentStatus" :"paid", // 支付状态：[free | paid | notPaid]
            "learningSession":1, // 正在学习的章节的sessionId 如果还没学习或者未购买，则不返回该字段或返回undefined
            "context":[
                {
                    "name":"第一章：易经概述",
                    "sessionId":1,
                    "progress":20 // 学习进度 百分比数值 值20代表20%
                },
                {
                    "name":"第二章：易经概述述述述述述述述述述述述述述述述述述述述述述述述述述",
                    "sessionId":2,
                    "progress":15
                },
                {
                    "name":"第三章：易经概述",
                    "sessionId":3,
                    "progress":10
                },
                {
                    "name":"第四章：易经概述",
                    "sessionId":4,
                    "progress":10
                },
                {
                    "name":"第五章：易经概述",
                    "sessionId":5,
                    "progress":10
                }
            ]
        }
    }
