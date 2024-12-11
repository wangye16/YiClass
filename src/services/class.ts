import apiClient from './apiClient'
const prefix = 'class'

export default function requestHelloWorld() {
  return apiClient.get('/')
}
const getClassListAPI = (params:any)=>{
    return apiClient.get(`${prefix}/list`,params)
}

export 
{
    getClassListAPI
}