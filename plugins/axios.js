export default ({ $axios }) => {
  $axios.onRequest((config) => {
    // 判断如果不是服务端，获取token
    if (!process.server) {
      config.headers.token = localStorage.getItem('token')
    }
  })
}
