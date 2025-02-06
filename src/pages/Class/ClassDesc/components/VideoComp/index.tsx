import { View, Text,Video } from '@tarojs/components'
import {useRouter, useReady} from '@tarojs/taro'
import './index.less'
import { useEffect, useState ,useRef} from 'react'
import Taro from '@tarojs/taro'

export default function Index ({desc,curSessionObj,sessionId}) {
  const {videoSrc,progress}=curSessionObj
  const videoRef = useRef<HTMLInputElement>(null)
  
  useReady(() => {
  })

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
          src={`https://fsdyt-1258842400.cos.ap-chengdu.myqcloud.com/${desc.classId}/${desc.classId}-${sessionId}.mp4`}
          initialTime={progress}
          playBtnPosition='center'
          signature='水印'
          pageGesture
          showPlayBtn
          // showCenterPlayBtn
          // showCastingButton
          showScreenLockButton
          showSnapshotButton
        />
  )
}
