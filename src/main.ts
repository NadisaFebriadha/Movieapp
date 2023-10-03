import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router'

createApp(App).use(router).mount('#app')

// TODO: integarasi tailwindcss
// TODO: update semua component menggunakan talwindcss