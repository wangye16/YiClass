import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import { useState } from "react";
import Taro from "@tarojs/taro";
import {pay,getPayRes} from '@/services/pay'
export default function Index({ classDesc }) {
  const { paymentStatus, price ,classId,className,} = classDesc;
  const [payButtonLoading, setPayButtonLoading] = useState<boolean>(false);
  const orderId = `fsdyt_${classId}${Date.now()}`

  const onPayTap=async ()=>{
    setPayButtonLoading(true)
    const paymentParams = await pay({
      openid:Taro.getStorageSync('openid'),
      orderNumber:orderId,
      totalFee:2, // 微信支付金额的单位是分，所以需要乘以100
      description:`课程《${className}》的支付订单`,
      courseId:classId,
    });
    console.log("🚀 ~ onPayTap ~ paymentParams:", paymentParams)
    Taro.requestPayment({
      timeStamp: paymentParams.data.timeStamp,
      nonceStr: paymentParams.data.nonceStr,
      package: paymentParams.data.package,
      signType: paymentParams.data.signType,
      paySign: paymentParams.data.paySign,
      success(res) {
        console.log("支付成功:", res);
          getPayRes(orderId).then(res=>{
            console.log('hahah',res.data);
            if (res.data?.code != 200) {
              Taro.showToast({
                title:'订单异常，请联系客服',
                icon:'error',
                duration:4000,
              })
            }else{
              Taro.redirectTo({
                url:`/pages/PayResult/index?courseId=${res.data?.data?.courseId}&totalFee=${res.data?.data?.totalFee}`
              })
            }
          }).catch(err=>{
            Taro.showToast({
              title:'订单异常，请联系客服',
              icon:'error',
              duration:4000,
            })
          })
      },
      fail(err) {
        console.error("支付失败:", err);
        Taro.showToast({
          title:'支付失败',
          icon:'error',
          duration:2000,
        })
      },
    });
    setPayButtonLoading(false)
  }

  // 底部支付状态信息的渲染函数
  const renderPaymentStatusView = () => {
    switch (paymentStatus) {
      case "notPaid":
        return (
          <View className="bottom-info">
            <View style={{ margin: 15 ,height:42,lineHeight:'42px',display:'flex',justifyContent:'space-between'}}>
              <Text style={{ fontSize: 26, fontWeight: "bold" }}>¥{price}</Text>
              <Button
                style={{
                  borderRadius: 21,
                  width: 112,
                  height: 42,
                  fontSize:14,
                  lineHeight: "42px",
                  backgroundColor: "#000",
                  display: "inline-block",
                  color: "#fff",
                  margin: 0,
                }}
                loading={payButtonLoading}
                onTap={onPayTap}
              >
                立即购买
              </Button>
            </View>
          </View>
        );

      default:
        return <></>;
    }
  };

  return renderPaymentStatusView();
}
