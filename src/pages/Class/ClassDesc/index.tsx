import { View, Text, Image, RootPortal } from "@tarojs/components";
import { useRouter, useReady } from "@tarojs/taro";
import { getClassDescAPI } from "@/services/class";
import studentImg from "@/assets/icons/student.png";
import CustomVideo from "./components/VideoComp";
import SessionList from "./components/SessionList";
import PaymentStatusBar from "./components/PaymentStatusBar";
import "./index.less";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

export default function Index() {
  const { params: urlParams } = useRouter();
  const [classDesc, setClassDesc] = useState<any>({});

  useReady(() => {
    getClassDesc();
  });

  const getClassDesc = async () => {
    try {
      const response: any = await getClassDescAPI(urlParams);
      const { satusCode, data = {} } = response;
      setClassDesc(data);
    } catch (error) {
      Taro.showToast({
        title: "请求失败",
        icon: "error",
        duration: 2000,
      });
      console.log("Error sending chat message:", error);
    }
  };

  // 底部支付状态信息的渲染函数
  const renderPaymentStatusView = ()=>{

  }

  useEffect(() => {}, []);

  return (
    <View className="class-container">
      <View className="class-video-container">
        <CustomVideo desc={classDesc} />
      </View>

      <View className="class-desc-container">
        <Text className="class-name-text">{classDesc?.className}</Text>

        <View
          style={{
            fontSize: 12,
            lineHeight: "18px",
            color: "#4B5563",
            marginTop: 6,
          }}
        >
          <Image
            src={studentImg}
            style={{
              width: 14,
              height: 14,
              marginRight: 3,
              verticalAlign: "middle",
            }}
          ></Image>
          <Text style={{ verticalAlign: "middle" }}>
            {classDesc?.studyNum}人学习
          </Text>
        </View>

        <View className="class-desc-text">
          <Text style={{ lineHeight: "21px", color: "#000" }}>课程简介</Text>
          <View
            style={{
              marginTop: 6,
              color: "#4B5563",
              fontSize: 12,
              lineHeight: "19px",
            }}
          >
            {classDesc.desc}
          </View>
        </View>

        <SessionList sessionList={classDesc?.context} />
      </View>
      <PaymentStatusBar 
        classDesc={classDesc}
      />
    </View>
  );
}
