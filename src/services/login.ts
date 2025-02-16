import apiClient from './apiClient'
const postLogin = (params)=>{
  return apiClient.post(`api/login`,params)
}
export 
{
  postLogin
}