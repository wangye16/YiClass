import { View, Text,Video } from '@tarojs/components'
import {useRouter, useReady} from '@tarojs/taro'
import './index.less'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'

export default function Index ({desc}) {
  
  useReady(() => {
  })

  useEffect(()=>{
    
  },[])

  return (
        <Video 
          style={{width:'100%',height:'100%'}}
          src='http://www.w3school.com.cn/example/html5/mov_bbb.mp4'
          controls={false}
          initialTime={0}
          playBtnPosition='center'
          signature='测试水印12121'
          pageGesture
          showCastingButton
          showScreenLockButton
          showSnapshotButton
        />
  )
}
