import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from './views/Home.vue'

export default createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: HomeVue,
		},
		{
			path: '/about',
			component: () => import('./views/About.vue'),
		},
		{
			path: '/contact',
			component: () => import('./views/Contact.vue'),
		},
		{
			path: '/profile',
			component: () => import('./views/Profile.vue'),
		},
	],
})
