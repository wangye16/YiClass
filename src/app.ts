import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import Taro from "@tarojs/taro";
import './app.less'

function App({ children }: PropsWithChildren<any>) {
  useLaunch(() => {
    // Taro.checkSession({
    //   success (res) {
    //   console.log("🚀 ~ success ~ res:", res)

    //     //session_key 未过期，并且在本生命周期一直有效
    //   },
    //   fail () {
    //     Taro.navigateTo({url:'pages/Login/index'})
    //   }
    // })
  })

  // children 是将要会渲染的页面
  return children
}
  


export default App
