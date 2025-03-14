import { View, Image, ScrollView, Button } from "@tarojs/components";
import { useDidShow } from "@tarojs/taro";
import { useState } from "react";
import Empty from '@/components/Empty'
import {my_background1 as MyBackgroundImg} from "@/assets/const";
import { getMyClass } from "@/services/my";
import {defaultImg} from "@/assets/const";
import Taro from "@tarojs/taro";
import "./index.less";

export default function Index() {
  const [myClass, setMyClass] = useState<any>([]);
  const [myCertificate, setMyCertificate] = useState<any>([]);
  

  useDidShow(() => {
    getClassDesc();
  });

  const unique = (arr)=> {
    const res = new Map();
    return arr.filter((a) => !res.has(a) && res.set(a, 1))
}

  const getClassDesc = async () => {
    try {
      const response: any = await getMyClass({});
      const { code, data = {} } = response;
      console.log("🚀 ~ getClassDesc ~ data:", data)
      const uniqueArr = unique(data.data?.viewed?.concat(data.data?.purchased))
      setMyClass(uniqueArr);
    } catch (error) {
      Taro.showToast({
        title: "请求失败",
        icon: "error",
        duration: 2000,
      });
      console.log("Error sending chat message:", error);
    }
  };

  const handleClassTap = (classInfo) => {
    console.log("🚀 ~ handleClassTap ~ classInfo:", classInfo)
    const { classId } = classInfo;
    Taro.navigateTo({
      url: `/pages/Class/ClassDesc/index?classId=${classId}`,
    });
  };

  const handleCertificateTap = (item) => {
    console.log("🚀 ~ handleCertificateTap ~ certificateInfo:", item);

    const { id, certificateName, coverImage } = item;
    Taro.downloadFile({
      url: coverImage,
      success: (res) => {
        console.log("🚀 ~ handleCertificateTap ~ res:", res);
        Taro.showShareImageMenu({
          path: res.tempFilePath,
        });
      },
    });
  };

  const handleLoginTap = ()=>{
    Taro.navigateTo({url:'/pages/Login/index'})
  }

  return (
    <View className="my-container">
      <View
        style={{
          backgroundImage: `url(${MyBackgroundImg})`,
          backgroundColor: "#000",
          height: 200,
          backgroundSize: "cover",
          paddingTop: 21,
          // paddingLeft: 21,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {!Taro.getStorageSync('avatarUrl') ? (
          <>
            <View
              style={{
                fontSize: 16,
                lineHeight: "24px",
                height: 24,
                borderBottom: "1px solid #fff",
                marginTop: 28,
                color: "#fff",
              }}
              onTap={handleLoginTap}
            >{`去登录 >>`}</View>
          </>
        ) : (
          <>
            <View style={{ height: 70, width: 200 }}>
              <View
                style={{
                  boxSizing: "border-box",
                  margin: "0 auto",
                  // display: "inline-block",
                  // verticalAlign: "top",
                  width: 70,
                  height: 70,
                  border: "2px solid #FFFFFF",
                  borderRadius: "50%",
                  backgroundImage: `url(${Taro.getStorageSync('avatarUrl')})`,
                  backgroundRepeat:'no-repeat',
                  backgroundPosition:'center'
                }}
              ></View>
              <View
                style={{
                  width: 200,
                  // display: "inline-block",
                  // verticalAlign: "top",
                  height: 50,
                  lineHeight: "50px",
                  fontSize: 18,
                  color: "#fff",
                  fontWeight: 600,
                  overflow: "hidden",
                  textAlign: "center",
                }}
              >
                {Taro.getStorageSync('nickName')||'微信用户'}
              </View>
            </View>
          </>
        )}
      </View>

      <View className="list-container">
        <View className="my-class-container">
          <View className="card-title">我的课程</View>
          {myClass?.length ? (
            <ScrollView scrollX className="card-list">
              {myClass?.map((item) => (
                <View
                  className="card-item"
                  onTap={() => handleClassTap(item)}
                >
                  <Image
                    src={`https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/video/${item.classId}/coverImage.jpg` || defaultImg}
                    style={{ width: 140, height: 84, borderRadius: 7 }}
                  />
                  <View className="card-item-title">{item.className}</View>
                </View>
              ))}
            </ScrollView>
          ) : (
            <Empty />
          )}
        </View>
      </View>

      <View className="list-container">
        <View className="my-class-container">
          <View className="card-title">我的证书</View>
          {myCertificate?.length?<ScrollView scrollX className="card-list">
            {myCertificate?.map((item) => (
              <View
                className="card-item"
                onTap={() => handleCertificateTap(item)}
              >
                <Image
                  src={item.coverImage}
                  style={{ width: 140, height: 84, borderRadius: 7 }}
                />
                <View className="card-item-title">{item.certificateName}</View>
              </View>
            ))}
          </ScrollView>:<Empty />}
          
        </View>
      </View>
    </View>
  );
}
