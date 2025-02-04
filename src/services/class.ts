import apiClient from './apiClient'

const getClassListAPI = (params:any)=>{
    return apiClient.get(`api/courses`,params)
}

const getClassDescAPI = (classId:string)=>{
    return apiClient.get(`api/course-details/${classId}`,{})
}

export 
{
    getClassListAPI,
    getClassDescAPI
}