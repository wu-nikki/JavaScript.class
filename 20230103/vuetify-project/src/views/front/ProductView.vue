<template lang="pug">
//- 這是點商品大標跳轉得商品頁面
#product
  v-row
    v-col(cols="12")
      h1.text-center {{ product.name }}
    v-divider
    v-col(cols="12")
      v-img(:src="product.image")
    v-col(cols="12")
      p ${{ product.price }}
      p.pre {{ product.description }}
  v-overlay.align-center.justify-center.text-center(:model-value="!product.sell" persistent)
    h1.text-red 已下架
    v-btn(@click="router.go(-1)") 回上頁
</template>

<script setup>
import { reactive } from 'vue'
import { api } from '@/plugins/axios'
import { useRoute, useRouter } from 'vue-router'
// Router是跳頁 ，Route是取現在路由資訊用
import { Swal } from 'sweetalert2'

const route = useRoute()
const router = useRouter()
const product = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: '',
  sell: true,
  category: ''
});

(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product._id = data.result._id
    product.name = data.result.name
    product.price = data.result.price
    product.description = data.result.description
    product.image = data.result.image
    product.sell = data.result.sell
    product.category = data.result.category

    document.title = '購物網 | ' + product.name
    // document.querySelector('meta[property="og:title"]').setAttribute('content', product.name)
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '失敗',
      text: '取得商品失敗'
    })
    router.go(-1)
  }
})()

</script>
