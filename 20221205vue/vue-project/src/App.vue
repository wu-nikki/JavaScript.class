<template>
  <h1>卡片</h1>
  <p>總共 {{ totalGood }} 個讚</p>
  <aCard v-for="(card, i) in cards" :key="i" :img="card.img" :text="card.text" v-model:good="card.good"></aCard>
</template>


<!-- <script>
import { reactive, computed } from 'vue';
import aCard from './components/aCard.vue'
export default {
  components: { aCard },
  setup() {
    const cards = reactive([{ img: 'https://github.com/rogeraabbccdd.png', text: 'rogeraabbccdd', good: true },
    { img: 'https://github.com/vuejs.png', text: 'Vue.js', good: true },
    { img: 'https://github.com/vitejs.png', text: 'Vite.js', good: true }])
    const totalGood = computed(() => {
      return cards.filter(card => card.good).length
    })
    return { cards, totalGood }
  }

}
</script> -->

<!-- 更簡單的 -->
<script setup>
import { reactive, computed } from 'vue'
import aCard from './components/aCard.vue'

const cards = reactive([{ img: 'https://github.com/rogeraabbccdd.png', text: 'rogeraabbccdd', good: true },
{ img: 'https://github.com/vuejs.png', text: 'Vue.js', good: true },
{ img: 'https://github.com/vitejs.png', text: 'Vite.js', good: true }])
const totalGood = computed(() => {
  return cards.filter(card => card.good).length
})
</script>
<style>
p {
  color: brown;
}
</style>

<style scoped>
p {
  color: rgb(25, 49, 207);
}
</style>