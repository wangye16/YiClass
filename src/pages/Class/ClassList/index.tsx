import { View, Text,Input } from '@tarojs/components'
import { useLoad ,useTabItemTap,useDidShow} from '@tarojs/taro'
import ClassList from './components/ClassList'
import {getClassListAPI} from '@/services/class'
import './index.scss'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'

export default function Index () {
  const [classListArr,setClassListArr] = useState([])

  useDidShow(() => {
    getClassList({})
  })


  const getClassList = async (props) => {
    try {
      const response = await getClassListAPI(props);
      const result = response.data||{}
      setClassListArr(result.data);
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
      
      <View className='search-container'>
        {/* <AtSearchBar 
        fixed
        showActionButton={false}
        value='123'
        onChange={()=>{
          console.log(123);
        }}
      /> */}
        <Input
          className='search-input'
          placeholder={'搜索'}
          placeholderClass='search-input-placeholder'
        ></Input>
      </View>
      
      <ClassList
        list = {classListArr}
      />
    </View>
  )
}
