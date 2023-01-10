/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from './router'
import pinia from './pinia'
import { useUserStore } from '@/stores/user'

export async function registerPlugins (app) {
  loadFonts()
  app.use(pinia)
  // 初始化pinia之後抓使用者資料後 註冊路由 再跳頁
  useUserStore().getUser()
  app.use(router)
  app.use(vuetify)
}
