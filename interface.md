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
            "learningSession":1, // 正在学习的章节的sessionId 如果还没学习和未购买则返回1
            "context":[
                {
                    "name":"第一章：易经概述",
                    "sessionId":1,
                    "videoSrc":'http://www.w3school.com.cn/example/html5/mov_bbb.mp4',
                    "progress":20 // 学习进度 百分比数值 值20代表20%
                },
                {
                    "name":"第二章：易经概述述述述述述述述述述述述述述述述述述述述述述述述述述",
                    "videoSrc":'https://www.w3schools.com/html/movie.mp4',
                    "sessionId":2,
                    "progress":15
                },
                {
                    "name":"第三章：易经概述",
                    "sessionId":3,
                    "videoSrc":'https://media.w3.org/2010/05/sintel/trailer.mp4',
                    "progress":10
                },
                {
                    "name":"第四章：易经概述",
                    "sessionId":4,
                     "videoSrc":'https://media.w3.org/2010/05/sintel/trailer.mp4',
                    "progress":10
                },
                {
                    "name":"第五章：易经概述",
                    "sessionId":5,
                     "videoSrc":'https://media.w3.org/2010/05/sintel/trailer.mp4',
                    "progress":10
                }
            ]
        }
    }

## 我的页面接口
    {
        code:200,
        message:'成功',
        data: {
            userInfo:{
                avatar:"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
                userName:"好学生",
            },
            myClass:[{
                classId:"123",
                className:"基础知识基础知识基础知识",
                coverImage:"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain"
            },
            {
                classId:"124",
                className:"基础知识基础知识基础知识",
                coverImage:"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain"
            },
            {
                classId:"125",
                className:"基础知识基础知识基础知识",
                coverImage:"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain"
            },
            {
                classId:"126",
                className:"基础知识基础知识基础知识",
                coverImage:"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain"
            },
            {
                classId:"127",
                className:"基础知识基础知识基础知识",
                coverImage:"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain"
            }],
            myCertificate:[
                {
                    id:"111",
                    coverImage:"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
                    certificateName:"中国xxxxxxx证书"
                },
                {
                    id:"222",
                    coverImage:"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
                    certificateName:"中国xxxxxxx证书"
                },
                {
                    id:"333",
                    coverImage:"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
                    certificateName:"中国xxxxxxx证书"
                },
                {
                    id:"444",
                    coverImage:"https://tse3-mm.cn.bing.net/th/id/OIP-C.qmIh5R-d_DmDKOYgzN09agHaJQ?rs=1&pid=ImgDetMain",
                    certificateName:"中国xxxxxxx证书"
                },
            ]
        }
    }