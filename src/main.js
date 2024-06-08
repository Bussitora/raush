import { createApp } from 'vue'
import { createYmaps } from 'vue-yandex-maps'
import './style.css'
import App from './App.vue'

const app = createApp(App)

app.use(createYmaps({
  apikey: '3172e68a-e11c-4db4-a988-f393c717cf3c',
}))

app.mount('#app')
