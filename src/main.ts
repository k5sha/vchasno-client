import { createApp } from 'vue'
import './style.css'
import './reset.css'
import App from './App.vue'
import { router } from './router'
import { createProvider } from './vue-apollo'
import store from './store'
import Toast, { PluginOptions, useToast } from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

export const toast = useToast();

const options: PluginOptions = {
	transition: "Vue-Toastification__bounce",
	maxToasts: 3,
	newestOnTop: true
};

createApp(App).use(router).use(store).use(Toast, options).use(createProvider()).mount('#app')



