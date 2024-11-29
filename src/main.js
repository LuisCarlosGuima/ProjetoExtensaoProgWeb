import './assets/home.scss'
import { registerPlugins } from '@/plugins'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
