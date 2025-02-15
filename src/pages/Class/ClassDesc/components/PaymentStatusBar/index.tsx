import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import { useState } from "react";
import Taro from "@tarojs/taro";
import {pay} from '@/services/pay'
export default function Index({ classDesc }) {
  const { paymentStatus, price } = classDesc;
  const [payButtonLoading, setPayButtonLoading] = useState<boolean>(false);

  const onPayTap=async ()=>{
    setPayButtonLoading(true)
    // ! todo 支付逻辑
    const paymentParams = await pay({
      openid:Taro.getStorageSync('openid'),
      orderNumber:'order123456',
      totalFee:1,
      description:'随便测试'
    });
    Taro.requestPayment({
      timeStamp: paymentParams.timeStamp,
      nonceStr: paymentParams.nonceStr,
      package: paymentParams.package,
      signType: paymentParams.signType,
      paySign: paymentParams.paySign,
      success(res) {
        console.log("支付成功:", res);
      },
      fail(err) {
        console.error("支付失败:", err);
      },
    });
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
