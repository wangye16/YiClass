import { FaWeixin } from "react-icons/fa";
import { View, Text,Image, ScrollView, Button,} from "@tarojs/components";
import wechat from '@/assets/icons/wechat-fill.png'
import Taro from "@tarojs/taro";
import {postLogin} from '@/services/login'
import "./index.less"; 

export default function LoginPage() {
  const handleLogin = () => {
    console.log("微信登录跳转逻辑");
    // 后续可接入实际登录逻辑
    Taro.login({
      async success(res) {
        if (res.code) {
          // 获取到 code，发送到服务器
          console.log('登录成功，code:', res.code);
          // 将 code 发送到服务器
          const response = await postLogin({
            code: res.code
          });
          const {openid,token} = response.data
          Taro.setStorageSync('token',token)
          Taro.setStorageSync('openid',openid)
          console.log(response,19)
          Taro.switchTab({url: '/pages/HomePage/index',})
        } else {
          console.log('登录失败:', res.errMsg);
        }
      }
    });
  };

  const hndleReadLink1 = () => {
    // Taro.showModal({
    //   title:'用户协议',
    //   content:
    // })
  };

  const hndleReadLink2 = () => {
    // Taro.showModal({
    //   title:'用户协议',
    //   content:
    // })
  };

  return (
    <View className="container">
      <View className="content">
        <Text className="title">富山德易堂</Text>
        <View className="subtitle">欢迎使用富山德易堂小程序</View>

        <Button className="wechat-btn" onClick={handleLogin}>
          <View className="wechat-btn-wrapper">
            <Image src={wechat} style={{width:20, height:20,marginRight:7,verticalAlign:'middle'}}></Image>
            微信一键登录
          </View>
        </Button>

        <View className="agreement">
          登录即表示同意
          <View className="link" onTap={hndleReadLink1}>《用户协议》</View>和
          <View className="link" onTap={hndleReadLink2}>《隐私政策》</View>
        </View>

        <View className="security-tip">微信官方登录更安全</View>
      </View>
    </View>
  );
}