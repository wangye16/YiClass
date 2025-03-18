import { View, Image,Text } from "@tarojs/components";
import Taro from '@tarojs/taro'
import {defaultImg} from "@/assets/const";
import studentImg from "@/assets/icons/student.png";
import "./index.less";
import { useState } from "react";


export default function Index({ classInfo }) {
  // const [paymentStatus,setPaymentStatus] = useState<'paid'|'notPaid'|'free'>()
  const { classId, studyCount,price,coverImage, className, description,requiresPurchase,isPurchased } = classInfo;
  const paymentStatus = !requiresPurchase?'free':(isPurchased?'paid':'notPaid')
  const getPriceText = ()=>{
    let resObj = {text:`¥${price}`,color:'#000'}
    switch (true) {
      case !requiresPurchase:
         resObj.text = '免费'
         resObj.color = '#22C55E'
        break;
        case requiresPurchase && isPurchased:
         resObj.text = '已支付'
         resObj.color = '#22C55E'
        break;
      default:
        break;
    }
    return resObj
  }

  const onClassItemTap=()=>{
    if (classInfo?.paymentStatus === 'forbid') return
    Taro.navigateTo({
      url:`/pages/Class/ClassDesc/index?classId=${classId}&studyCount=${studyCount}&paymentStatus=${paymentStatus}`
    })
  }

  return (
    <View 
    className="class-item" 
    disableScroll
    onTap={onClassItemTap}
    >
      <View
        className="cover-img"
      >
        <Image
          mode='scaleToFill'
          src={`https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/video/${classId}/coverImage.jpg` || defaultImg}
          lazyLoad
          style={{
            width: "100%",
            height: "100%",
            background: "#fff",
            objectFit: "contain",
            borderRadius: "7px 7px 0 0",
          }}
        ></Image>
      </View>
      <View className="content-area">
        <View style={{ fontSize: 16, fontWeight: 500 }}>{className}</View>
        <Text className="desc-text">{description}</Text>

        <View style={{ fontSize: 12, marginTop: 14 ,display:'flex',justifyContent:'space-between'}}>
          <View style={{color:'#4B5563'}}>
            <Image src={studentImg} style={{width:14, height:14,marginRight:3,verticalAlign:'middle'}}></Image>
             <Text style={{verticalAlign:'middle'}}>{studyCount}人学习</Text>
            </View>
          <View style={{fontSize:14,fontWeight:500,color:getPriceText().color}}>{getPriceText().text}</View>
          </View>
      </View>
    </View>
  );
}
