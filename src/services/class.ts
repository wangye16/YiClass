import apiClient from './apiClient'

const getClassListAPI = (params:any)=>{
    return apiClient.get(`api/courses`,params)
}

const getClassDescAPI = (classId:string)=>{
    return apiClient.get(`api/course-details/${classId}`,{})
}

const postSessionProgress = (params)=>{
    return apiClient.post(`api/course-progress`,params)
}

export 
{
    getClassListAPI,
    getClassDescAPI,
    postSessionProgress
}