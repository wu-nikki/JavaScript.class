<template lang="pug">
v-app
  router-view
</template>

<script setup>
// 把拉資料的程式打 在大家都會跑的文件
import { useUserStore } from './stores/user'
useUserStore().getUser()
</script>
