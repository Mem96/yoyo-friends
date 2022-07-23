import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'


let app = createApp(App)
app.use(router).use(createPinia()).mount('#app')
