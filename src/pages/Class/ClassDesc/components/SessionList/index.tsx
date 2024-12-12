import { View, Text,Image ,ScrollView} from '@tarojs/components'
import {useRouter, useReady} from '@tarojs/taro'
import './index.less'
import playIcon from '@/assets/icons/playIcon.png'
import { useEffect, useState } from 'react'
import Taro from '@tarojs/taro'

export default function Index ({sessionList}) {
  
  useReady(() => {
  })

  useEffect(()=>{
    
  },[])

  return (
        <View className='session-list'>
          <View style={{marginBottom:7}}>课程目录</View>
          <ScrollView
            scrollY
            style={{height:200}}
          >
            {sessionList?.map(({name,sessionId})=>(
              <View style={{ height:40,fontSize: 12, marginBottom: 10 ,display:'flex',justifyContent:'space-between',backgroundColor:'#F9FAFB'}}>
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
