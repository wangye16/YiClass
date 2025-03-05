const getBaseUrl = () => {
    let BASE_URL = '';
    if (process.env.NODE_ENV === 'development') {
      //开发环境 - 根据请求不同返回不同的BASE_URL
    BASE_URL = 'http://aoltps.demo.natool.cn'
    // BASE_URL = 'http://60.205.91.224:8080'
    // BASE_URL = 'http://fsdyt.cn'
    } else {
      // 生产环境
   
  BASE_URL = 'https://*********'
      
    }
    return BASE_URL
  }
   
  export default getBaseUrl;