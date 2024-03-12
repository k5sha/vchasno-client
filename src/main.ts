import { createApp } from 'vue'
import './style.css'
import './reset.css'
import App from './App.vue'
import { router } from './router'
import { createProvider } from './vue-apollo'
import store from './store'

createApp(App).use(router).use(store).use(createProvider()).mount('#app')



