import { View, ScrollView, Text } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { useEffect } from 'react'
import './index.less'

export default function UserProtocol() {
  useEffect(() => {
    Taro.setNavigationBarTitle({ title: '用户协议' })
  }, [])

  return (
    <ScrollView className="protocol-container" scrollY>
      <View className="title">《富山德易堂》用户协议</View>

      <View className="section-title">第一条 服务内容</View>
      <Text className="paragraph">1. 本小程序致力于为用户提供国学在线学习课程和相关服务。</Text>
      <Text className="paragraph">2. 服务内容包括但不限于线上课程浏览、购买、学习及其他延伸服务。</Text>
      <Text className="paragraph">3. 本小程序保留对服务内容进行优化、调整、中止或终止的权利。</Text>

      <View className="section-title">第二条 用户注册与使用</View>
      <Text className="paragraph">1. 用户需通过微信授权或其他方式注册账号，保证所提供信息真实、准确、合法。</Text>
      <Text className="paragraph">2. 用户应妥善保管账户信息和登录凭证，因用户自身原因导致账号泄露或损失的，由用户自行承担责任。</Text>
      <Text className="paragraph">3. 用户不得利用本小程序从事任何违法违规活动，包括但不限于传播不良信息、侵犯他人知识产权等。</Text>

      <View className="section-title">第三条 课程与知识产权</View>
      <Text className="paragraph">1. 本小程序上的所有国学课程及相关内容（包括但不限于文字、图片、音频、视频等），版权均归《富山德易堂》或相关权利人所有。</Text>
      <Text className="paragraph">2. 未经授权，用户不得复制、转载、传播或用于任何商业用途。</Text>

      <View className="section-title">第四条 费用与支付</View>
      <Text className="paragraph">1. 部分课程和服务可能需要付费，用户应在支付相关费用后方可使用。</Text>
      <Text className="paragraph">2. 用户支付成功后，如因个人原因申请退款，应遵守平台的退款规则。</Text>

      <View className="section-title">第五条 用户行为规范</View>
      <Text className="paragraph">1. 用户应遵守国家法律法规及本协议的规定。</Text>
      <Text className="paragraph">2. 禁止发布涉及政治、宗教、淫秽等违法违规内容。</Text>

      <View className="section-title">第六条 隐私保护</View>
      <Text className="paragraph">我们非常重视用户的隐私保护。详细内容请参见《隐私政策》。</Text>

      <View className="section-title">第七条 协议变更与终止</View>
      <Text className="paragraph">1. 我们有权根据需要随时修改本协议内容，并在小程序内公告。</Text>
      <Text className="paragraph">2. 用户不同意变更内容的，应立即停止使用本服务。否则视为接受协议的变更。</Text>

      <View className="section-title">第八条 法律适用与争议解决</View>
      <Text className="paragraph">本协议适用中华人民共和国法律，若产生争议，双方应协商解决；协商不成的，提交我们所在地法院诉讼解决。</Text>
    </ScrollView>
  )
}
