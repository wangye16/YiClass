import { View, Image,Text } from "@tarojs/components";
import Taro from '@tarojs/taro'
import defaultImg from "@/assets/imgs/defaultImg.png";
import studentImg from "@/assets/icons/student.png";
import "./index.less";


export default function Index({ classInfo }) {
  const { classId, studyNum,price,coverImage, className, description,paymentStatus } = classInfo;

  const getPriceText = ()=>{
    let resObj = {text:`¥${price}`,color:'#000'}
    switch (paymentStatus) {
      case 'free':
         resObj.text = '免费'
         resObj.color = '#22C55E'
        break;
        case 'paid':
         resObj.text = '已支付'
         resObj.color = '#22C55E'
        break;
      default:
        break;
    }
    return resObj
  }

  const onClassItemTap=()=>{
    Taro.navigateTo({
      url:`/pages/Class/ClassDesc/index?classId=${classId}`
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
          src={coverImage || defaultImg}
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

        <View style={{ fontSize: 12, marginTop: 20 ,display:'flex',justifyContent:'space-between'}}>
          <View style={{color:'#4B5563'}}>
            <Image src={studentImg} style={{width:14, height:14,marginRight:3,verticalAlign:'middle'}}></Image>
             <Text style={{verticalAlign:'middle'}}>{studyNum}人学习</Text>
            </View>
          <View style={{fontSize:14,fontWeight:500,color:getPriceText().color}}>{getPriceText().text}</View>
          </View>
      </View>
    </View>
  );
}
