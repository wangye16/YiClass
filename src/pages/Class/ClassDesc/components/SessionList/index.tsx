import { View, Text,Image ,ScrollView} from '@tarojs/components'
import {useRouter, useReady} from '@tarojs/taro'
import './index.less'
import playIcon from '@/assets/icons/playIcon.png'
import lockedIcon from '@/assets/icons/locked.png'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'

export default function Index ({classDesc,setCurSessionObj}) {
  const {context,paymentStatus} = classDesc
  
  useReady(() => {
  })

  useEffect(()=>{
    
  },[])

  const handleSessionTap = (sessionId)=>{
    const learningSessionObj = classDesc?.context?.find((i)=>(i.sessionId === sessionId))
    setCurSessionObj(learningSessionObj)
  }

  return (
        <View className='session-list'>
          <View style={{marginBottom:7}}>课程目录</View>
          <ScrollView
            scrollY
            style={{height:200}}
          >
            {context?.map(({name,sessionId})=>(
              paymentStatus=='notPaid'?
              <View 
                style={{ height:40,fontSize: 12, marginBottom: 10 ,display:'flex',justifyContent:'space-between',backgroundColor:'#F9FAFB'}}
              >
                  <View style={{color:'#9CA3AF',lineHeight:'40px',marginLeft:10}}>
                    <Image src={lockedIcon} style={{width:14, height:14,marginRight:7,verticalAlign:'middle'}}></Image>
                    <Text style={{verticalAlign:'middle',width:320,display:'inline-block',overflow:'hidden',textOverflow:'ellipsis',wordBreak:'break-all',whiteSpace:'nowrap'}}>{name}</Text>
                  </View>
              </View>:
              <View 
                style={{ height:40,fontSize: 12, marginBottom: 10 ,display:'flex',justifyContent:'space-between',backgroundColor:'#F9FAFB'}}
                onTap={()=>handleSessionTap(sessionId)}
              >
                  <View style={{color:'#4B5563',lineHeight:'40px',marginLeft:10}}>
                    <Image src={playIcon} style={{width:14, height:14,marginRight:7,verticalAlign:'middle'}}></Image>
                    <Text style={{verticalAlign:'middle',width:320,display:'inline-block',overflow:'hidden',textOverflow:'ellipsis',wordBreak:'break-all',whiteSpace:'nowrap'}}>{name}</Text>
                  </View>
              </View>
            ))}
          </ScrollView>
        </View>
  )
}
