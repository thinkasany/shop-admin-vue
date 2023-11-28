const rootUrl = 'http://127.0.0.1:3000/admin/'
// const rootUrl = 'https://shopserver.zxb66.top/admin/'

const api = {
  rootUrl: rootUrl,
  qiniu: 'http://up-z2.qiniup.com/'
  // 请根据自己创建的七牛的区域进行设置：
  // https://developer.qiniu.com/kodo/manual/1671/region-endpoint
}

// import api from './config/api'
// Axios.defaults.baseURL = api.rootUrl;

export default api
