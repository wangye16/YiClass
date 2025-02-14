import { FaWeixin } from "react-icons/fa";
import { View, Text,Image, ScrollView, Button,} from "@tarojs/components";
import wechat from '@/assets/icons/wechat-fill.png'
import Taro from "@tarojs/taro";

import "./index.less"; 

export default function LoginPage() {
  const handleLogin = () => {
    console.log("微信登录跳转逻辑");
    // 后续可接入实际登录逻辑
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