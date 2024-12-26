import { View, Text, Image ,ScrollView} from "@tarojs/components";
import { useReady } from "@tarojs/taro";
import { useState } from "react";
import MyBackgroundImg from "@/assets/imgs/my_background.png";
import { getMyDesc } from "@/services/my";
import Taro from "@tarojs/taro";
import "./index.less";

export default function Index() {
  const [myDesc, setMyDesc] = useState<any>({});

  useReady(() => {
    getClassDesc();
  });

  const getClassDesc = async () => {
    try {
      const response: any = await getMyDesc({});
      const { satusCode, data = {} } = response;
      setMyDesc(data);
    } catch (error) {
      Taro.showToast({
        title: "请求失败",
        icon: "error",
        duration: 2000,
      });
      console.log("Error sending chat message:", error);
    }
  };

  const handleClassTap = (classInfo)=>{
    const {classId} = classInfo
    Taro.navigateTo({
      url:`/pages/Class/ClassDesc/index?classId=${classId}`
    })
  }

  const handleCertificateTap = (item) => {
    console.log("🚀 ~ handleCertificateTap ~ certificateInfo:", item)
    
    const {id,certificateName,coverImage} = item
    Taro.downloadFile({
      url: coverImage,
      success: (res) => {
        console.log("🚀 ~ handleCertificateTap ~ res:", res)
        Taro.showShareImageMenu({
          path: res.tempFilePath
        })
      }
    })
  }

  return (
    <View className="my-container">
      <View
        style={{
          backgroundImage: `url(${MyBackgroundImg})`,
          height: 200,
          backgroundSize: "cover",
          paddingTop: 21,
          paddingLeft: 21,
          boxSizing: "border-box",
        }}
      >
        <View style={{ height: 70 }}>
          <View
            style={{
              boxSizing: "border-box",
              display: "inline-block",
              verticalAlign: "top",
              width: 70,
              height: 70,
              border: "2px solid #FFFFFF",
              borderRadius: "50%",
              backgroundImage: `url(${myDesc.userInfo?.avatar})`,
            }}
          ></View>
          <View
            style={{
              width: 200,
              display: "inline-block",
              verticalAlign: "top",
              height: 70,
              lineHeight: "70px",
              marginLeft: 14,
              fontSize: 18,
              color: "#fff",
              fontWeight: 600,
              overflow: "hidden",
            }}
          >
            {myDesc.userInfo?.userName}
          </View>
        </View>
      </View>

      <View className="list-container">
        <View className="my-class-container">
          <View className="card-title">我的课程</View>
          <ScrollView scrollX className="card-list">
            {myDesc?.myClass?.map((item)=>(
              <View className="card-item"
                onTap={(item)=>(handleClassTap(item)
            )}
              >
                <Image src={item.coverImage} style={{width:140,height:84,borderRadius:7}} />
                <View className="card-item-title">{item.className}</View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>

      <View className="list-container">
        <View className="my-class-container">
          <View className="card-title">我的证书</View>
          <ScrollView scrollX className="card-list">
            {myDesc?.myCertificate?.map((item)=>(
              <View className="card-item"
              onTap={()=>(handleCertificateTap(item))
              }
              >
                <Image src={item.coverImage} style={{width:140,height:84,borderRadius:7}} />
                <View className="card-item-title">{item.certificateName}</View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
