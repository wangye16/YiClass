import apiClient from './apiClient'

const getMyClass = (params:any)=>{
    return apiClient.get(`api/my-courses`,params)
}

export 
{
    getMyClass
}