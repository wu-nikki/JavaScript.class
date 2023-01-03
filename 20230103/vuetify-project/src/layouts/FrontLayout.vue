<template lang="pug">
v-app-bar(color="primary")
  v-app-bar-title 購物網
  v-spacer
  v-btn(icon="mdi-account-plus" variant="text" to="/register")
v-main
  v-container
    router-view

</template>
