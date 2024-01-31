
<template>
  <h1>Реєстрація вчителів</h1>
  <div class="graphql-test">
    <input
      v-model="registerDetails.username"
      type="text"
      placeholder="Логін"
    >
    <br>
    <br>
    <input
      v-model="registerDetails.first_name"
      type="text"
      placeholder="Ім'я"
      style="margin-left: 32px;"
    >
    <input
      v-model="registerDetails.second_name"
      type="text"
      placeholder="Прізвище"
      style="margin-left: 32px;"
    >
    <input
      v-model="registerDetails.patronymic"
      type="text"
      placeholder="По батькові"
      style="margin-left: 32px;"
    >
    <br>
    <br>
    <input
      v-model="registerDetails.password"
      type="password"
      placeholder="Пароль"
    >
    <br>
    <br>
    <button @click="registerUser">
      Зареєструватися
    </button>
  </div>
</template>
	
  <script lang='ts'>
  import { mapActions, mapGetters } from 'vuex'
  
  export default {
	name: 'RegistrationPage',
	data() {
		return {
			registerDetails: {
				username: null,
				first_name: null,
				second_name: null,
				patronymic: null,
				password: null,
			},
		}
	},
	computed: {
		...mapGetters(['authStatus'])
	},
	methods: {
		  ...mapActions({register: 'account/register'}),
		  registerUser() {	
			this.register(this.registerDetails)
			.then(() => this.$router.push('/profile'))
		  }
	  }
  }
  </script>