import { Empty } from "@taroify/core";


export default function Index ({width=100,height=100}) {
  
  return (
    <Empty style={{width:'100%',height:'100%',display:'flex',justifyContent:'center',alignContent:'center'}}>
    <Empty.Image style={{width:width,height:height}}/>
  </Empty>
  )
}
