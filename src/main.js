import { createApp } from 'vue'
import App from './App.vue'

import rage from './plugins/rage'

createApp(App).use(rage).mount('#app')
