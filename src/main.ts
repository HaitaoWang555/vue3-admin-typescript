import { createApp, App } from 'vue'
import ELApp from './App.vue'
import { loadComponents, loadPlugins } from '@/core/use'
import 'windi.css'
import './styles/index.scss' // global css

const app: App = createApp(ELApp)

loadComponents(app)
loadPlugins(app)

// element-plus config
app.config.globalProperties.$ELEMENT = { size: 'small', zIndex: 3000 }
app.mount('#app')
