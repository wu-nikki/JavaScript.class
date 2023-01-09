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
