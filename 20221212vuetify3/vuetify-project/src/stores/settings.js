import { defineStore } from 'pinia'

export const useSettingsStore = defineStore({
  // 這個 store 的 id
  id: 'settings',
  // 這個 store 存了哪些資料
  state () {
    return {
      alarms: [
        { id: 1, name: 'Alarm', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
        { id: 2, name: 'Yay', file: new URL('@/assets/yay.mp3', import.meta.url).href }
      ],
      selectedAlarms: 2
    }
  }
})
