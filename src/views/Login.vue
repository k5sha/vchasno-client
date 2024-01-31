
<template>
  <div class="graphql-test">
    <input
      v-model="authDetails.username"
      type="text"
      placeholder="username"
    >
    <input
      v-model="authDetails.password"
      type="password"
      placeholder="password"
    >
    <button @click="loginUser">
      Login
    </button>
  </div>
</template>
  
<script lang='ts'>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'LoginPage',
	data() {
		return {
			authDetails: {
				username: null,
				password: null,
			},
		}
	},
	computed: {
		...mapGetters(['authStatus'])
	},
	methods: {
		...mapActions({login: 'account/login'}),
		loginUser() {	
			this.login(this.authDetails)
			.then(() => this.$router.push('/profile'))
		}
	}
}
</script>