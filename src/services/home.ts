import apiClient from './apiClient'
const prefix = 'home'

const getTeacherInfo = (params:any)=>{
    return apiClient.get(`${prefix}/desc`,params)
}

export 
{
    getTeacherInfo
}