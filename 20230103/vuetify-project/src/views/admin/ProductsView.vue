<template lang="pug">
#admin-products
  h1.text-center 商品管理
  v-divider
  v-row.text-center
    v-col(cols="12")
      v-btn(color="success" @click="openDialog(-1)") 新增商品
    v-col(cols="12")
      v-table
  v-dialog(v-model="form.dialog" persistent)
      v-card
        v-card-title
          h5.text-center {{ form._id.length > 0 ? '編輯商品' : '新增商品' }}
        v-card-text
          v-row
            v-col(cols="12")
</template>

<script setup>
import { apiAuth } from '@/plugins/axios'
import { reactive } from 'vue'

const products = reactive([])
const form = reactive({
  _id: '',
  name: '',
  price: 0,
  description: '',
  image: undefined,
  sell: false,
  category: '',
  valid: false,
  loading: false,
  dialog: false
})

const openDialog = (idx) => {
  if (idx === -1) {
    form._id = ''
    form.name = ''
    form.price = 0
    form.description = ''
    form.image = undefined
    form.sell = false
    form.category = ''
    form.valid = false
    form.loading = false
  } else {
    form._id = products[idx]._id
    form.name = products[idx].name
    form.price = products[idx].price
    form.description = products[idx].description
    form.image = undefined
    form.sell = products[idx].sell
    form.category = products[idx].category
    form.valid = false
    form.loading = false
  }
  form.dialog = true
}
</script>
