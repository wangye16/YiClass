import { View, Text,Image, ScrollView, Button,Switch} from "@tarojs/components";
import wechat from '@/assets/icons/wechat-fill.png'
import Taro from "@tarojs/taro";
import {postLogin} from '@/services/login'
import "./index.less"; 
import { useState } from "react";

export default function LoginPage() {
  const [agreed,setAgreed] = useState(false)
  const [showWarn,setShowWarn] = useState(false)
  const handleLogin = () => {
    console.log("微信登录跳转逻辑");

    // if (!agreed) {
    //   console.log('!agreed');
      
    //   setShowWarn(true)
    // }else{
    //   console.log('agreed');

    //   setShowWarn(false)
    // }

    Taro.getUserProfile({
      force:true,
      desc: '用于获取您的昵称和头像', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res:any) => {
        console.log("🚀 ~ handleLogin ~ res:", res)
        Taro.setStorageSync('avatarUrl',res?.avatarUrl||'"https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132"')
        Taro.setStorageSync('nickName',res?.nickName)
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
              if (openid && token) {
                Taro.setStorageSync('token',token)
              Taro.setStorageSync('openid',openid)
              console.log(response,19)
              Taro.switchTab({url: '/pages/HomePage/index',})
              }else{
                Taro.showToast({
                  title: '登录失败',
                  icon: 'error',
                  duration: 2000
                })
              }
              
            } else {
              console.log('登录失败:', res.errMsg);
            }
          }
        });
      }
    })
    // 后续可接入实际登录逻辑
    
  };

  const handleReadLink1 = () => {
    Taro.navigateTo({url:'/pages/UserPage/index'})
  };

  const handleReadLink2 = () => {
    Taro.navigateTo({url:'/pages/PrivacyPage/index'})

  };

  return (
    <View className="container">
      <View className="content">
        <Text className="title">富山德易堂</Text>
        <View className="subtitle">欢迎使用富山德易堂小程序</View>

        <Button disabled={!agreed} className="wechat-btn" openType="getUserInfo" onTap={handleLogin}>
          <View className="wechat-btn-wrapper">
            <Image src={wechat} style={{width:20, height:20,marginRight:7,verticalAlign:'middle'}}></Image>
            微信一键登录
          </View>
        </Button>


        <View className="agreement">
          <Switch style={{marginRight:3}} checked={agreed} type='checkbox' onChange={(e)=>{setAgreed(e.detail.value)}}></Switch>
          我同意
          <View className="link" onTap={handleReadLink1}>《用户协议》</View>和
          <View className="link" onTap={handleReadLink2}>《隐私政策》</View>
        </View>
        {showWarn?
        <View>请阅读相关协议并勾选同意</View>:<></>
      }

        <View className="security-tip">微信官方登录更安全</View>
      </View>
    </View>
  );
}