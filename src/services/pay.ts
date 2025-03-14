import apiClient from './apiClient'
const pay = (params)=>{
  return apiClient.post(`api/create-wechat-pay-order`,params)
}

const getPayRes = (orderId)=>{
  return apiClient.get(`api/order-info/${orderId}`,{})
}
export 
{
  pay,getPayRes
}