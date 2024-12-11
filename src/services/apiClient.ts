// ./src/api/request.ts
import Taro from '@tarojs/taro'
import getBAseUrl from '@/utils/getBAseUrl'


export default {
  baseURL: `${getBAseUrl({})}/deyitang/api/`, // set default baseURL

  apiClient(option, method = 'GET') {
    // if option.url is relative path,splicing baseURL
    if (!option.url.startsWith('http')) {
      option.url = this.baseURL + option.url;
    }

    return Taro.request({
      ...option,
      method,
      header: {
        'content-type': 'application/json'
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
