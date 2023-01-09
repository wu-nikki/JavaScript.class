import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

import { api } from '@/plugins/axios'

import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const account = ref('')
  const email = ref('')
  const cart = ref(0)
  const role = ref(0)

  const router = useRouter()

  const login = async (form) => {
    try {
      const { data } = await api.post('/users/login', form)
      token.value = data.result.token
      account.value = data.result.account
      email.value = data.result.email
      cart.value = data.result.cart
      role.value = data.result.role
      Swal.fire({
        icon: 'success',
        title: '成功',
        text: '登入成功'
      })
      router.push('/')
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '失敗',
        text: error?.response?.data?.message || '發生錯誤'
      })
    }
  }

  return {
    token,
    account,
    email,
    cart,
    role,
    login
  }
})
