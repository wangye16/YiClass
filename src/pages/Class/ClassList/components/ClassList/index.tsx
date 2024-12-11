import { View, Text } from "@tarojs/components";
import ClassItem from "../ClassItem";
import "./index.less";
import { useEffect } from "react";

export default function Index(props) {
  const { list } = props;
  useEffect(() => {
    console.log("ClassList comp loaded.", props);
  });

  return (
    <View className="class-list">
      {list?.map((item: any) => (
        <ClassItem classInfo={item || {}} />
      ))}
    </View>
  );
}
