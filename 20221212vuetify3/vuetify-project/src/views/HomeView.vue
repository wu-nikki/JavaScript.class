<template>
  <CountComp ref="count"></CountComp>
  <v-btn @click="onBtnClick">點</v-btn>
</template>

<script setup>
import CountComp from '@/components/CountComp.vue'
import { ref } from 'vue'

const count = ref(null)
const onBtnClick = () => {
  count.value.plus()
}
</script>
