import { createRouter, createWebHistory } from 'vue-router'
import HomeVue from './views/Home.vue'
import { loadLayoutMiddleware } from './middlewares/loadLayoutMiddleware'
import { authMiddleware } from './middlewares/authMiddleware'


// Router
export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: HomeVue,
			meta: {
            	layout: 'AppLayoutHome'
       		}
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
			meta: { requiresAuth: true }
		},
		{
			path: '/login',
			component: () => import('./views/Login.vue'),
			meta: {
				layout: 'AppLayoutAuth'
			}
		},
		{
			path: '/registration',
			component: () => import('./views/Registration.vue'),
			meta: {
				layout: 'AppLayoutAuth'
			}
		},
		{
			path: '/logout',
			redirect: '/login',
		},
	],
})

// Layout system
router.beforeEach(loadLayoutMiddleware)


// Auth system
router.beforeEach(authMiddleware)
