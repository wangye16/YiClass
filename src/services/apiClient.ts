// ./src/api/request.ts
import Taro from '@tarojs/taro'
import getBAseUrl from '@/utils/getBaseUrl'


export default {
  baseURL: `${getBAseUrl()}/`, // set default baseURL

  apiClient(option, method = 'GET') {
    // if option.url is relative path,splicing baseURL
    if (!option.url.startsWith('http')) {
      option.url = this.baseURL + option.url;
    }

    let header:any = {
      'content-type': 'application/json',
    }
    if (Taro.getStorageSync('token')) {
      header.Authorization = 'Bearer '+Taro.getStorageSync('token')
    }
    return Taro.request({
      ...option,
      method,
      header:header,
      complete:(res)=>{
        console.log('aaa',res.statusCode);
        if (res.statusCode==401||res.statusCode==403) {
          Taro.navigateTo({url:'/pages/Login/index'})
        }
      }
    });
  },

  get(url, data = {}) {
    return this.apiClient({ url, data }, 'GET');
  },

  post(url, data) {
    return this.apiClient({ url, data }, 'POST');
  },
};
