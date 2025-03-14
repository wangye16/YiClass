import { View, Image, ScrollView, Button } from "@tarojs/components";
import { useReady,useRouter } from "@tarojs/taro";
import paySuccess from '@/assets/icons/paySuccess.png'
import { useState } from "react";
import Empty from '@/components/Empty'
import Taro from "@tarojs/taro";
import "./index.less";

export default function Index() {

  const { params: urlParams } = useRouter();
  const {courseId,totalFee} = urlParams

  useReady(() => {
  });

  return (
    <View className="pay-result-container">
      <View className="pay-info-container">
        <Image style={{width:82,height:82,marginTop:100}} src={paySuccess} />
        <View style={{fontSize:24,color:'#000',marginTop:30}}>课程购买成功</View>

      </View>
      <Button 
      style={{marginTop:100,width:'80%',height:'50',backgroundColor:'#22C55E',color:'#fff'}}
      onTap={()=>{
        Taro.redirectTo({
          url:`/pages/Class/ClassDesc/index?classId=${courseId}`
          // url:`pages/Class/ClassList/index`
          
        })
      }}
      >前往课程页</Button>
    </View>
  );
}
