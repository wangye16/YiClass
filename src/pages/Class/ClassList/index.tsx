import { View, Text } from '@tarojs/components'
import { useLoad ,useTabItemTap} from '@tarojs/taro'
import ClassList from './components/ClassList'
import {getClassListAPI} from '@/services/class'
import './index.less'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'

export default function Index () {
  const [classListArr,setClassListArr] = useState([])

  useTabItemTap(() => {
    getClassList({})
  })


  const getClassList = async (props) => {
    try {
      const response = await getClassListAPI(props);
      console.log("get response", response)
      setClassListArr(response.data);
    } catch (error) {
      Taro.showToast({
        title: '请求失败',
        icon: 'error',
        duration: 2000
      })
      console.log('Error sending chat message:', error);
    }
  }


  useEffect(()=>{
    
  },[])

  return (
    <View className='class-container'>
      <ClassList
        list = {classListArr}
      />
    </View>
  )
}
