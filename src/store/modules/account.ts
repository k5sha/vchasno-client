import { LOGGED_IN_USER, LOGIN_USER, REGISTER_USER } from "../../grapql/queries/userQueries"
import { apolloClient } from "../../vue-apollo"

const state = () => ({
	token: null,
	user: {},
	authStatus: false
})
  
const getters = {
	isAuthenticated: state => !!state.token,
	authStatus: state => state.authStatus,
	user: state => state.user
}
  
const actions = {
	async register ({ commit, dispatch }, authDetails) {
		try {
			const { data } = await apolloClient.mutate({ mutation: REGISTER_USER, variables: {signup: authDetails } })
			console.log(data);
			const token = data.signup.access_token
			commit('SET_TOKEN', token)
			localStorage.setItem('access-token', token)
			dispatch('setUser')
		} catch (e) {
			console.log(e)
		}
	},
	async login ({ commit, dispatch }, authDetails) {
		try {
			const { data } = await apolloClient.mutate({ mutation: LOGIN_USER, variables: { login: authDetails } })
			const token = data.login.access_token
			commit('SET_TOKEN', token)
			localStorage.setItem('access-token', token)
			dispatch('setUser')
		} catch (e) {
			console.log(e)
		}
	},

	// TODO: user interface
	async setUser ({ commit }) {
		const { data } = await apolloClient.query({ query: LOGGED_IN_USER , fetchPolicy: "no-cache" })
		commit('LOGIN_USER', data.me)
	},

	async logOut ({ commit }) {
		commit('LOGOUT_USER')
	}
}
  
const mutations = {
	SET_TOKEN (state, token) {
		state.token = token
	},
	LOGIN_USER (state, user) {
		state.authStatus = true
		state.user = { ...user }
	},
	LOGOUT_USER (state) {
		localStorage.removeItem('access-token') 
		state.authStatus = false
		state.user = {}
		state.token = null
	}
}
  
export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}