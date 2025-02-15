import { View, Button, Text } from "@tarojs/components";
import "./index.less";
import { useState } from "react";
import Taro from "@tarojs/taro";

export default function Index({ classDesc }) {
  const { paymentStatus, price } = classDesc;
  const [payButtonLoading, setPayButtonLoading] = useState<boolean>(false);

  const onPayTap=()=>{
    setPayButtonLoading(true)
    // ! todo 支付逻辑
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
