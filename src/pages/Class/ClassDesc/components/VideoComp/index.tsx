import { View, Text,Video } from '@tarojs/components'
import {useRouter, useReady, getStorageSync} from '@tarojs/taro'
import './index.less'
import { useEffect, useState ,useRef} from 'react'
import Taro from '@tarojs/taro'
import { log } from 'console'

export default function Index ({desc,curSessionObj,sessionId}) {
  const videoRef = useRef<HTMLInputElement>(null)
  
  useReady(() => {
  })

  const handleProgressChange = (e)=>{
    Taro.setStorageSync(sessionId+'',Math.floor(e.detail?.currentTime))
    console.log(sessionId,getStorageSync(sessionId+''));
    
  }

  // useEffect(()=>{
  //   const videoContext = Taro.createVideoContext(sessionId+'',videoRef)
  //   console.log('src变化了',curSessionObj,videoContext,videoRef.current);
  //   // 设置为停止播放状态
  //   videoContext.sendDanmu({text:'123'})
  //   videoContext.stop()
  // },[videoSrc])

  return (
        <Video 
          ref={videoRef}
          id={sessionId+''}
          style={{width:'100%',height:'100%'}}
          autoplay={false}
          // src={videoSrc}
          src={`https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/video/${desc.classId}/${sessionId}.mp4`}
          initialTime={Taro.getStorageSync(sessionId+'')}
          playBtnPosition='center'
          signature='水印'
          pageGesture
          showPlayBtn
          // showCenterPlayBtn
          // showCastingButton
          showScreenLockButton
          showSnapshotButton
          onTimeUpdate={(e)=>{handleProgressChange(e)}}
        />
  )
}
