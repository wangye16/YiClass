import { View, ScrollView, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect } from 'react'
import './index.less'

export default function PrivacyPolicy() {
  useEffect(() => {
    Taro.setNavigationBarTitle({ title: '隐私政策' })
  }, [])

  return (
    <ScrollView className="protocol-container" scrollY>
      <View className="title">《富山德易堂》隐私政策</View>

      <View className="section-title">一、我们收集的信息</View>
      <Text className="paragraph">1. 账户信息：包括微信昵称、头像、地区、OpenID 等。</Text>
      <Text className="paragraph">2. 支付信息：如用户购买课程时的交易记录，但不收集您的银行卡信息。</Text>
      <Text className="paragraph">3. 使用信息：包括学习进度、课程浏览记录、互动信息等。</Text>

      <View className="section-title">二、信息的使用</View>
      <Text className="paragraph">1. 提供、维护和优化服务体验。</Text>
      <Text className="paragraph">2. 完成订单交易及支付流程。</Text>

      <View className="section-title">三、信息的共享与披露</View>
      <Text className="paragraph">1. 获得您的明确同意或授权。</Text>
      <Text className="paragraph">2. 法律法规规定或监管部门要求。</Text>

      <View className="section-title">四、信息存储与保护</View>
      <Text className="paragraph">1. 用户个人信息将存储在中华人民共和国境内，并依法保管。</Text>
      <Text className="paragraph">2. 我们采取合理的安全措施保障用户信息安全。</Text>

      <View className="section-title">五、用户权利</View>
      <Text className="paragraph">1. 用户有权访问、更正、删除您的个人信息。</Text>
      <Text className="paragraph">2. 用户可随时撤回授权或注销账户。</Text>

      <View className="section-title">六、政策更新</View>
      <Text className="paragraph">我们可能不定时更新本隐私政策，任何更新将在本页面公布。</Text>

      <View className="section-title">七、联系我们</View>
      <Text className="paragraph">如您对隐私政策或个人信息保护事项有任何问题，欢迎通过小程序内联系方式与我们联系。</Text>
    </ScrollView>
  )
}
