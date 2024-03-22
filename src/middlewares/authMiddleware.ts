import store from "../store";

export async function authMiddleware(to, from, next) {

	// Check if the user is logged in(cookies)
	if(!store.getters['account/isAuthenticated'] && localStorage.getItem('access-token') != undefined) {
		store.commit("account/SET_TOKEN", localStorage.getItem('access-token'));
		store.dispatch("account/setUser")
	}

	
	const isUserLoggedIn = store.getters['account/isAuthenticated']
	
	// Logout system   
	if(isUserLoggedIn && (to.path == '/login' || to.path == '/logout')) {
		store.dispatch('account/logOut')
		return next()
	}

	// Check can user open page
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
}