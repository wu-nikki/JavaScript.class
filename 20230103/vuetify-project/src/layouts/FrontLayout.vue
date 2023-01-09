<template lang="pug">
v-app-bar(color="primary")
  v-app-bar-title 購物網
  v-spacer
  v-btn(prepend-icon="mdi-account-plus" variant="text" to="/register") 註冊
  v-btn(prepend-icon="mdi-login" variant="text" to="/login") 登入
v-main
  v-container
    router-view

</template>
