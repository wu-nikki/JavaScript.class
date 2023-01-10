import axios from 'axios'
import { useUserStore } from '@/stores/user'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API
})

//
export const apiAuth = axios.create({
  baseURL: import.meta.env.VITE_API
})

// axios--->interceptors.request---->送出請求----> interceptors.response ---> 呼叫的地方
apiAuth.interceptors.request.use(config => {
  const user = useUserStore()
  //  ='Bearer ' 這裡十分重要
  config.headers.authorization = 'Bearer ' + user.token
  return config
})

// apiAuth.interceptors.response.use(成功時的 function, 失敗時的 function)
apiAuth.interceptors.response.use(res => {
  return res
}, error => {
// 如果失敗的請求有回應
  if (error.response) {
    // 如果失敗的請求回應是401，可能是JWT驗證失敗
    if (error.response.status === 401) {
      // 確認請求的網址不是延長登入、登入、登出，那就重新傳送延長登入請求
      if (!['/users/extend', '/users/login', '/users/logout'].includes(error.config.urll)) {
        const user = useUserStore()
        // 傳送延長登入請求
        return apiAuth.patch('/users/extend').then(({ data }) => {
          // 更新pinia的JWT
          user.token = data.result
          // 修改原請求的 JWT
          error.config.headers.authorization = 'Bearer ' + user.token
          // 重新傳送原請求
          return axios(error.config)
        }).catch(_ => {
          // 重新登入失敗，強制登出
          user.logout()
          // 回傳原本的錯誤到呼叫的地方
          return Promise.reject(error)
        })
      }
    }
  }
  // 如果失敗的請求沒回應，回傳原本的錯誤到呼叫的地方
  return Promise.reject(error)
})
