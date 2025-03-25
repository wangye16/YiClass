import { View, Text, Image, ScrollView } from "@tarojs/components";
import { useRouter, useReady, useUnload, useDidShow } from "@tarojs/taro";
import { getClassDescAPI, postSessionProgress } from "@/services/class";
import studentImg from "@/assets/icons/student.png";
import CustomVideo from "./components/VideoComp";
import SessionList from "./components/SessionList";
import PaymentStatusBar from "./components/PaymentStatusBar";
import { defaultImg } from "@/assets/const";
import "./index.less";
import { useEffect, useState } from "react";
import Taro from "@tarojs/taro";

export default function Index() {
  const { params: urlParams } = useRouter();
  const { classId, studyCount, paymentStatus } = urlParams;
  const [classDesc, setClassDesc] = useState<any>({});
  const [curSessionObj, setCurSessionObj] = useState<any>({});

  useDidShow(() => {
    console.log("useReady");
    console.log("🚀 ~ Index ~ urlParams:", urlParams)

    getClassDesc();
  });

  useUnload(() => {
    // 卸载页面时上传所有章节的进度，然后清除缓存
    const progressArr = classDesc?.context?.map((item) => {
      let obj: any = {
        sessionId: item.sessionId,
        classId,
        progress: Taro.getStorageSync(item.sessionId + ""),
      };
      if (item.sessionId == Taro.getStorageSync("curLearningSession")) {
        obj.isLearning = true;
      }
      return obj;
    });
    postSessionProgress(progressArr);

    console.log("视频页面已经卸载，缓存是：", Taro.getStorageInfoSync());
    classDesc?.context?.map((item) => {
      console.log("a", item.sessionId);
      Taro.removeStorageSync(item.sessionId);
    });

    // 删除curLearningSession字段
    Taro.removeStorageSync("curLearningSession");

    console.log("视频页面已经卸载，清除后缓存是：", Taro.getStorageInfoSync());
  });

  const setProgressStorage = (sessionList) => {
    console.log("🚀 ~ setProgressStorage ~ sessionList:", sessionList);
    sessionList?.map((item) => {
      Taro.setStorageSync(item.sessionId + "", item.progress);
    });
  };

  const getClassDesc = async () => {
    try {
      const response: any = await getClassDescAPI(classId || "");
      const { code, data = {} } = response.data;
      // 把视频进度放在本地存储
      setProgressStorage(data.context || []);
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
    // if(!classDesc.learningSession) return
    const learningSessionObj =
      classDesc?.context?.find(
        (i) => i.sessionId == classDesc.learningSession
      ) ||
      classDesc?.context?.[0] ||
      {};
    console.log("🚀 ~ useEffect ~ learningSessionObj:", learningSessionObj);
    setCurSessionObj(learningSessionObj);
  }, [classDesc.learningSession]);

  return (
    <View className="class-container">
      {classDesc?.paymentStatus !== "forbid" && classDesc?.classId ? (
        <>
          <View className="class-video-container">
            {paymentStatus === "notPaid" ? (
              <Image
                src={
                  `https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/video/${classId}/coverImage.jpg` ||
                  defaultImg
                }
                lazyLoad
                style={{
                  width: "100%",
                  height: "100%",
                  background: "#fff",
                  objectFit: "contain",
                }}
              ></Image>
            ) : (
              <CustomVideo
                key={curSessionObj.sessionId}
                desc={classDesc}
                curSessionObj={curSessionObj}
                sessionId={curSessionObj.sessionId || classDesc.learningSession}
              />
            )}
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
              {studyCount?<Text style={{ verticalAlign: "middle" }}>
                {studyCount}人学习
              </Text>:<></>}
            </View>

            <View className="class-desc-text">
              <Text style={{ lineHeight: "21px", color: "#000" }}>
                课程简介
              </Text>
              <ScrollView
                scrollY
                style={{
                  height: 120,
                  marginTop: 6,
                  color: "#4B5563",
                  fontSize: 12,
                  lineHeight: "19px",
                }}
              >
                {classDesc.description}
              </ScrollView>
            </View>

            <SessionList
              paymentStatus={paymentStatus}
              curSessionId={curSessionObj.sessionId}
              classDesc={classDesc}
              setCurSessionObj={setCurSessionObj}
            />
          </View>
          <PaymentStatusBar paymentStatus={paymentStatus} classDesc={classDesc} />
        </>
      ) : (
        <View> 欢迎来到富山德易堂 </View>
      )}
    </View>
  );
}
