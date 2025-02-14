import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import Taro from "@tarojs/taro";
import './app.less'

function App({ children }: PropsWithChildren<any>) {
  // useLaunch(() => {
  //   console.log('useLaunch');
    
  //   Taro.checkSession({
  //     success: function () {
  //       console.log('session_key 未过期，并且在本生命周期一直有效');
  //       Taro.showModal({
  //         title:'温馨提示',
  //         content: '亲，授权微信登录后才能正常使用小程序功能',
  //         success(res) {
  //           console.log(res)
  //           //如果用户点击了确定按钮
  //           if (res.confirm) {
  //             Taro.getUserProfile({
  //               desc: '获取你的昵称、头像、地区及性别',
  //               success: res => {
  //                 console.log(res);
  //                 console.log(1);
  //               },
  //               fail: res => {
  //                 console.log(res)
  //                 //拒绝授权
  //                 Taro.showToast({
  //                   title: '您拒绝了请求,不能正常使用小程序',
  //                   icon: 'error',
  //                   duration: 2000
  //                 });
  //                 return;
  //               }
  //             });
  //           } else if (res.cancel) {
  //             //如果用户点击了取消按钮
  //             Taro.showToast({
  //               title: '您拒绝了请求,不能正常使用小程序',
  //               icon: 'error',
  //               duration: 2000
  //             });
  //             return;
  //           }
  //         }
  //       })
  //       Taro.getUserProfile({
  //         desc:'获取头像和昵称',
  //         complete: (res) => {
  //           console.log('res',res);
            
  //         }
  //       })

  //     },
  //     fail: function () {
  //       console.log('session_key 已经失效，需要重新执行登录流程');
  //       Taro.login() //重新登录
  //     }
  //   })
  // })

  // children 是将要会渲染的页面
  return children
}
  


export default App
