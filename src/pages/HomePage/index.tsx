import { View, Text, Image, Swiper,SwiperItem,ScrollView } from "@tarojs/components";
import { useReady } from "@tarojs/taro";
import { useState } from "react";
import { TextEllipsis } from "@taroify/core"
import { getTeacherInfo } from "@/services/home";
import {teacherAvatar as avatar} from "@/assets/const";
import jiangbei from '@/assets/icons/jiangbei.png'
import jiangpai from '@/assets/icons/jiangpai.png'
import xingxing from '@/assets/icons/xingxing.png'
import huangxingxing from '@/assets/icons/huangxingxing.png'
import IntroductionTxt from './components/introductionTxt'

import {swiper1,swiper2,swiper3} from '@/assets/const'

import Taro from "@tarojs/taro";
import "./index.less";

export default function Index() {
  const [teacherInfo, setTeacherInfo] = useState<any>({});
  const achievementObjArr = [{
    icon:huangxingxing,
    lineOneText:'九宫门三元风水',
    lineTwoText:'第37代传承弟子',
  },{
    icon:jiangbei,
    lineOneText:'中国管理科学学会',
    lineTwoText:'传统文化讲师',
  },{
    icon:xingxing,
    lineOneText:'北京师范大学',
    lineTwoText:'中华优秀文化师资',
  },{
    icon:jiangpai,
    lineOneText:'易经研究院',
    lineTwoText:'学术委员会委员',
  }]

  // const booksObjArr=[{
  //   CoverImage:book1,
  //   bookName:'《易经智慧与现代生活》',
  //   publicDept:'中华书局'
  // },{
  //   CoverImage:book3,
  //   bookName:'《易经智慧与现代生活11111111111》',
  //   publicDept:'中华书局'
  // },{
  //   CoverImage:book1,
  //   bookName:'《易经智慧与现代生活33333333333》',
  //   publicDept:'中华书局111111111111111'
  // },{
  //   CoverImage:book1,
  //   bookName:'《易经智慧与现代生活》',
  //   publicDept:'中华书局'
  // }]

  useReady(() => {
    // getTeacherInfoApi();
  });

  const getTeacherInfoApi = async () => {
    try {
      const response: any = await getTeacherInfo({ teacherId: 1 });
      const { satusCode, data = {} } = response;
      setTeacherInfo(data);
    } catch (error) {
      Taro.showToast({
        title: "请求失败",
        icon: "error",
        duration: 2000,
      });
      console.log("Error sending chat message:", error);
    }
  };

  return (
    <View className="home-container">
      <View className="title-container">
        <Image
          style={{
            display: "inline-block",
            width: 98,
            height: 98,
            borderRadius: 7,
          }}
          src={avatar}
        />

        <View style={{ marginRight: 14 }}>
          <View className="title-line1">付国军 大师</View>
          <View className="title-line2">高级风水堪舆师</View>
          <View className="title-line3">
            <View className="title-tag"> 周易八卦 </View>
            <View className="title-tag"> 命理风水 </View>
            <View className="title-tag"> 奇门遁甲 </View>
          </View>
        </View>
      </View>

      <View className="tags-container">
        <View className="tags-tag">
          <Text className="tags-tag-line1">30+</Text>
          <Text className="tags-tag-line2">易经著作</Text>
        </View>
        <View className="tags-tag">
        <Text className="tags-tag-line1">20年</Text>
        <Text className="tags-tag-line2">研究经验</Text>
        </View>
        <View className="tags-tag">
        <Text className="tags-tag-line1">20K+</Text>
        <Text className="tags-tag-line2">咨询经验</Text>
        </View>
      </View>

      <View className="swiper-container">
        <Swiper 
          style={{height:'100%'}}
          autoplay
        >
          <SwiperItem><Image style={{width:'100%',height:'100%'}} src={swiper1} /></SwiperItem>
          <SwiperItem><Image style={{width:'100%',height:'100%'}} src={swiper2} /></SwiperItem>
          <SwiperItem><Image style={{width:'100%',height:'100%'}} src={swiper3}/></SwiperItem>
        </Swiper>
      </View>

      <View className="achievement-container">
        <View className="achievement-title">荣誉成就</View>
        <View className="achievement-item-container">
          {achievementObjArr.map(((item)=>(<View className="achievement-item">
            <View style={{margin:3}}>
              <Image src={item.icon} style={{width:16, height:16,marginRight:6,verticalAlign:'middle'}}></Image>
              <Text style={{verticalAlign:'middle',fontSize:12,lineHeight:'18px',fontWeight:500}}>{item.lineOneText}</Text>
            </View>
            <View style={{fontSize:10,marginLeft:26,color:'#6B7280',marginTop:6}}>{item.lineTwoText}</View>
          </View>)))}
        </View>
      </View>

      <View className="introduction-container">
        <View className="introduction-title">大师简介</View>
        <IntroductionTxt />
      </View>

      {/* <View className="books-container">
        <View className="books-title">代表著作</View>
            <ScrollView scrollX style={{width:'100%',whiteSpace:'nowrap'}}>
              {booksObjArr.map(((item)=>(<View className="books-item">
                <View style={{width:'100%',height:140,backgroundImage:`url(${item.CoverImage})`,backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}></View>
                <TextEllipsis style={{marginTop:12,fontSize:12,fontWeight:500,color:'#000'}} content={item.bookName}></TextEllipsis>
                <TextEllipsis style={{marginTop:7,fontSize:10,color:'#4B5563',textAlign:'center'}} content={item.publicDept}></TextEllipsis>
              </View>)))}
            </ScrollView>
      </View> */}
    </View>
  );
}
