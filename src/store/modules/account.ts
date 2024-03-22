import { LOGGED_IN_USER, LOGIN_USER, REGISTER_USER } from "../../grapql/queries/userQueries"
import { apolloClient } from "../../vue-apollo"
import { User } from "/@/interfaces/user.interface"
import { router } from "../../router"
import { toast } from "../../main";
import { POSITION } from "vue-toastification";

// User data

interface UserState {
	token: string | null,
	user: User,
	authStatus: boolean	
}
const state = () => ({
	token: null,
	user: {},
	authStatus: false
}) as UserState
  
const getters = {
	isAuthenticated: state => !!state.token as boolean,
	authStatus: state => state.authStatus as string,
	user: state => state.user as User
}
  
const actions = {
	async register ({ commit, dispatch }, authDetails) {
			apolloClient.mutate({ mutation: REGISTER_USER, variables: {signup: authDetails } })
			.catch((err: Error) => {
				let err_message;
				console.log(err.message)
				switch (err.message) {
					case 'User already exists!': 
						err_message = 'Цей користувач вже зареєстрований'
					break;
					case 'Failed to fetch':
						err_message = 'Щось з сервером, вже працюємо'
					break;
					default:
						err_message = 'Невідома помилка'
				}
				toast.error(err_message, {
					timeout: 5000,
					position: POSITION.TOP_CENTER,
				});
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			}).then(({ data }: any) => {
				const token = data.signup.access_token
				commit('SET_TOKEN', token)
				localStorage.setItem('access-token', token)
				dispatch('setUser')
				router.push('/profile').then(() => {
					toast.success(`Привіт, ${authDetails.first_name} 👋`, {
						timeout: 5000,
						position: POSITION.TOP_CENTER,
					});
				})
			})
	},
	async login ({ commit, dispatch, getters }, authDetails) {
			apolloClient.mutate({ mutation: LOGIN_USER, variables: { login: authDetails} })
			.catch((err: Error) => {
				let err_message;
				console.log(err.message)
				switch (err.message) {
					case 'Unauthorized': 
						err_message = "Ім'я користувача чи пароль не правильні"
					break;
					case 'Failed to fetch':
						err_message = 'Щось з сервером, вже працюємо'
					break;
					default:
						err_message = 'Невідома помилка'
				}
				toast.error(err_message, {
					timeout: 5000,
					position: POSITION.TOP_CENTER,
				});
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			}).then(async ({ data }: any)=> {
				const token = data.login.access_token
				commit('SET_TOKEN', token)
				localStorage.setItem('access-token', token);
				await dispatch('setUser')
				router.push('/profile').then(() => {
					toast.success(`Привіт, ${getters.user.userInfo.first_name} 👋`, {
						timeout: 5000,
						position: POSITION.TOP_CENTER,
					});
				})

			}) 

	},

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
	LOGIN_USER (state, user: User) {
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