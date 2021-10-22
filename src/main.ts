import { createApp, App } from 'vue'
import ELApp from './App.vue'
import { loadComponents, loadPlugins } from '@/core/use'

const app: App = createApp(ELApp)

loadComponents(app)
loadPlugins(app)

// element-plus config
app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }
app.mount('#app')
