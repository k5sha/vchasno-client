
<template>
  <div class="login-block">
    <div class="switch-log-reg">
      <router-link
        class="reg-switch"
        to="/registration"
      >
        <h3>Реєстрація</h3>
      </router-link>

      <div class="log-switch on">
        <h3>Вхід</h3>
      </div>
    </div>
    <h1>Вхід</h1>
    <div class="forms">
      <form>
        <label for="username">Ім'я користувача</label>
        <input
          id="username"
          v-model="authDetails.username"
          type="text"
        >
        <br>
        <label for="password">Пароль</label>
        <input
          id="password"
          v-model="authDetails.password"
          type="password"
        >
        <input
          id="save-login"
          class="checkbox"
          type="checkbox"
          name="save-login"
          checked
        >
        <label for="save-login">Зберегти данні для <span style="color: #9DA8FF; text-decoration: underline;">входу</span></label>
      </form>
      <br>
      <button
        class="login-button"
        :disabled="!isComplete"
        @click="loginUser"
      >
        Увійти
      </button>
    </div>
  </div>
</template>
  
<script lang='ts'>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'LoginPage',
	data() {
		return {
			isComplete: false,
			authDetails: {
				username: '',
				password: '',
			},
		}
	},
	computed: {
		...mapGetters(['authStatus'])
	},
	watch: {
	authDetails: {
      handler() {
        this.isComplete = 
          this.authDetails.username != '' &&
          this.authDetails.password != '' 
    	},
        deep: true,
    },
    },
	methods: {
		...mapActions({login: 'account/login'}),
		loginUser() {	
			this.login(this.authDetails)
		}
	}
}
</script>

<style scoped>
	.login-block {
		display: block;
		width: 800px;
		height: 831px;
		background-color: #ffffff;
		border-radius: 50px;
		margin: auto;
		margin-top: 38px;
	}

	.login-block h1 {
		text-align: center;
		font-family: "Sofia Sans Semi Condensed", sans-serif;
		padding-top: 64px;
		font-size: 32px;
		font-weight: 600;
	}

	/* Switch */
	.switch-log-reg {
		display: flex;
		justify-content: center;
		padding-top: 64px;
		max-width: 580px;
		margin: auto;
	}

	.switch-log-reg h3 {
		color: white;
		font-family: "Inter", sans-serif;
		font-size: 18px;
		font-weight: 500;
	}

	.reg-switch {
		background-color: #D9D9D9;
		padding: 15px 15%;
		border-top-left-radius: 20px;
		border-bottom-left-radius: 20px;
	}

	.log-switch {
		background-color: #D9D9D9;
		padding: 15px 20%;
		border-top-right-radius: 20px;
		border-bottom-right-radius: 20px;
	}

	.on {
		background: rgb(184,68,192);
		background: linear-gradient(90deg, rgba(184,68,192,0.77) 90%, rgba(167,55,213,0.77	) 100%);
	}

	/* Form */

	.forms {
		padding: 128px 255px;
		display: block;
	}

	label {
		font-family: "Sofia Sans Semi Condensed", sans-serif;
		font-size: 18px;
		margin-left: 14px;
		line-height: 200%;
		font-weight: 600;
		color: #666666;
	}
	input {
		padding-left: 12px; 
		font-family: "Inter", sans-serif;
		width: 320px;
		height: 48px;
		border: rgb(102, 102, 102,0.35) solid 1px;
		border-radius: 24px;
		margin-bottom: 48px;
	}

	.checkbox {
		width: 16px;
		height: 16px;
		accent-color: #A737D5;
	}
	/* Button */

	.login-button {
		background: #B37CFF;
		padding: 18px 128px;
		border-radius: 8px;
		color: white;
		font-family: "Inter", sans-serif;
		font-size: 18px;
		font-weight: 500;
	}

	:disabled {
    	background-color: #D9D9D9;
  	}
</style>