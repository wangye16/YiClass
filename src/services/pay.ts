import apiClient from './apiClient'
const pay = (params)=>{
  return apiClient.post(`api/create-wechat-pay-order`,params)
}
export 
{
  pay
}