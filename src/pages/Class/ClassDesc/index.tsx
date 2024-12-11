import { View, Text,Video } from '@tarojs/components'
import {useRouter, useReady} from '@tarojs/taro'
import {getClassDescAPI} from '@/services/class'
import CustomVideo from './components/Video'
import './index.less'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'

export default function Index () {
  const {params:urlParams} = useRouter()
  const [classDesc,setClassDesc]=useState<any>({})
  
  useReady(() => {
    getClassDesc()
  })


  const getClassDesc = async () => {
    try {
      const response:any = await getClassDescAPI(urlParams);
      const {satusCode,data={}} = response
      if (satusCode==200){ setClassDesc(data)}else{
        Taro.showToast({
          title: '请求失败',
          icon: 'error',
          duration: 2000
        })
      }
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
      <View
        className='class-video-container'
      >
        <CustomVideo
          desc={classDesc}
        />
      </View>
    </View>
  )
}
