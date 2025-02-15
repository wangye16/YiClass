import apiClient from './apiClient'
const prefix = 'my'

const getMyDesc = (params:any)=>{
    return apiClient.get(`${prefix}/desc`,params)
}

export 
{
    getMyDesc
}