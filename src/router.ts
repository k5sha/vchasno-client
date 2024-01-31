import { createRouter, createWebHistory } from 'vue-router'
import store from './store'
import HomeVue from './views/Home.vue'

export const router = createRouter({
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
			meta: { requiresAuth: true }
		},
		{
			path: '/login',
			component: () => import('./views/Login.vue'),
		},
		{
			path: '/registration',
			component: () => import('./views/Registration.vue'),
		},
		{
			path: '/logout',
			redirect: '/login',
		},
	],
})

router.beforeEach((to, from, next) => {

  // Check if the user is logged in
  if(!store.getters['account/isAuthenticated'] && localStorage.getItem('access-token') != undefined) {
	store.commit("account/SET_TOKEN", localStorage.getItem('access-token'));
	store.dispatch("account/setUser")
  }
  const isUserLoggedIn = store.getters['account/isAuthenticated']

  if(isUserLoggedIn && (to.path == '/login' || to.path == '/logout')) {
	store.dispatch('account/logOut')
	return next()
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isUserLoggedIn) {
      store.dispatch('account/logOut')
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()
  }
})
