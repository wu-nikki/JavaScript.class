<template lang="pug">
v-app
  v-app-bar(color="primary")
    v-app-bar-title 番茄鐘
    v-spacer
    v-btn(icon="mdi-home" variant="text" to="/")
    v-btn(icon="mdi-format-list-bulleted" variant="text" to="/list")
    v-btn(icon="mdi-cog" variant="text" to="/settings")
  v-main
    v-container
      router-view
</template>

<script setup>
</script>
