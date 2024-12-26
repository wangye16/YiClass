import { View, Text, Image } from "@tarojs/components";
import { useRouter, useReady } from "@tarojs/taro";
import { getClassDescAPI } from "@/services/class";
import studentImg from "@/assets/icons/student.png";
import CustomVideo from "./components/VideoComp";
import SessionList from "./components/SessionList";
import PaymentStatusBar from "./components/PaymentStatusBar";
import defaultImg from "@/assets/imgs/defaultImg.png";
import "./index.less";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

export default function Index() {
  const { params: urlParams } = useRouter();
  const [classDesc, setClassDesc] = useState<any>({});
  const [curSessionObj, setCurSessionObj] = useState<any>({});

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

  useEffect(() => {
    const learningSessionObj = classDesc?.context?.find((i)=>(i.sessionId == classDesc.learningSession))||{}
    setCurSessionObj(learningSessionObj)
  }, [classDesc.learningSession]);

  return (
    <View className="class-container">
      <View className="class-video-container">
        {classDesc?.paymentStatus == 'notPaid'?<Image
          src={classDesc?.coverImage || defaultImg}
          lazyLoad
          style={{
            width: "100%",
            height: "100%",
            background: "#fff",
            objectFit: "contain",
          }}
        ></Image>:<CustomVideo 
        desc={classDesc}
        curSessionObj={curSessionObj}
        sessionId={curSessionObj.sessionId}
         />}
        
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

        <SessionList classDesc={classDesc} setCurSessionObj={setCurSessionObj}/>
      </View>
      <PaymentStatusBar 
        classDesc={classDesc}
      />
    </View>
  );
}
