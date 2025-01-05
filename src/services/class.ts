import apiClient from './apiClient'
const prefix = 'class'

const getClassListAPI = (params:any)=>{
    return apiClient.get(`api/courses`,params)
}

const getClassDescAPI = (params:any)=>{
    return apiClient.get(`${prefix}/desc`,params)
}

export 
{
    getClassListAPI,
    getClassDescAPI
}