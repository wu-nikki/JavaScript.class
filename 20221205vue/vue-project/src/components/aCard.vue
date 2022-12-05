<template>
  <div class="card">
    <img :src="img">
    <p>{{ text }}</p>
    <input type="button" :value="g ? '收回讚' : '讚'" @click="(g = !g)">
  </div>
</template>

<!-- <script>
import { computed } from 'vue'
export default {
  props: ['img', 'text', 'good'],
  setup (props, { emit }) {
    const g = computed({
      get () {
        return props.good
      },
      set (value) {
        emit('update:good', value)
      }
    })
    return { g }
  }
}
</script> -->

<script setup>
import { computed, defineProps, defineEmits } from 'vue'

const props = defineProps(['img', 'text', 'good'])
const emit = defineEmits(['update:good'])

const g = computed({
  get() {
    return props.good
  },
  set(value) {
    emit('update:good', value)
  }
})
</script>