import apiClient from './apiClient'
const prefix = 'class'

const getClassListAPI = (params:any)=>{
    return apiClient.get(`${prefix}/list`,params)
}

const getClassDescAPI = (params:any)=>{
    return apiClient.get(`${prefix}/desc`,params)
}

export 
{
    getClassListAPI,
    getClassDescAPI
}