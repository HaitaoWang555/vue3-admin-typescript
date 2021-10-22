// use components
import {
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
} from 'element-plus'

// use components
import Hamburger from '@/components/Hamburger/index.vue' // Hamburger component
import { App } from 'vue'

const plugins = [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
]

export const loadPlugins = (app: App): void => {
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}

export const loadComponents = (app: App): void => {
  app.component('Hamburger', Hamburger)
}
