
<template>
  <div class="registration-block">
    <div class="switch-log-reg">
      <div class="reg-switch on">
        <h3>Реєстрація</h3>
      </div>
      <router-link
        class="log-switch"
        to="/login"
      >
        <h3>Вхід</h3>
      </router-link>
    </div>
    <h1>Реєстрація</h1>
    <div class="forms">
      <form>
        <div class="data-input-block-1">
          <div>
            <label for="first_name">Ім'я</label>
            <input
              v-model="registerDetails.first_name"
              type="text"
            >
          </div>
          <div>
            <label for="second_name">Прізвище</label>
            <input
              v-model="registerDetails.second_name"
              type="text"
            >
          </div>
          <div>
            <label for="patronymic">По батькові</label>
            <input
              v-model="registerDetails.patronymic"
              type="text"
            >
          </div>
        </div>
        <div class="data-input-block-2">
          <div style="display: block;">
            <label for="username">Ім'я користувача</label>
            <input
              id="username"
              v-model="registerDetails.username"
              type="text"
            >
          </div>
          <div style="display: block;">
            <label for="password">Пароль</label>
            <input
              id="password"
              v-model="registerDetails.password"
              type="password"
            >
          </div>
        </div>
        
        <input
          id="terms"
          v-model="registerDetails.terms"
          class="checkbox"
          type="checkbox"
          name="terms"
        >
        <label for="terms">Я погоджусь з умовами <span style="color: #9DA8FF; text-decoration: underline;">угоди користувача</span></label>
      </form>
      <br>
      <button
        class="registration-button"
        :disabled="!isComplete"
        @click="registerUser"
      >
        Зареєструватися
      </button>
    </div>
  </div>
</template>
	
  <script lang='ts'>
  import { mapActions, mapGetters } from 'vuex'
  
  export default {
	name: 'RegistrationPage',
	data() {
		return {
      isComplete: false,
			registerDetails: {
				username: '',
				first_name: '',
				second_name: '',
				patronymic: '',
			  password: '',
        terms: false,
			},
		}
	},
	computed: {
		...mapGetters(['authStatus']),
	},
  watch: {
    registerDetails: {
      handler() {
        this.isComplete = 
          this.registerDetails.username != '' &&
          this.registerDetails.first_name != '' &&
          this.registerDetails.second_name != '' &&
          this.registerDetails.patronymic != '' &&
          this.registerDetails.password != '' &&
          this.registerDetails.terms != false
        },
        deep: true,
    },
    },
	  methods: {
		  ...mapActions({register: 'account/register'}),
		  registerUser() {	
			this.register({
          username: this.registerDetails.username,
          first_name: this.registerDetails.first_name, 
          second_name: this.registerDetails.second_name, 
          patronymic: this.registerDetails.patronymic,
          password: this.registerDetails.password,
      })
		  },
	},
  }
  </script>

<style scoped>
.registration-block {
  display: block;
  width: 800px;
  height: 831px;
  background-color: #ffffff;
  border-radius: 50px;
  margin: auto;
  margin-top: 38px;
}

.registration-block h1 {
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
  padding: 128px;
  display: block;
}

.data-input-block-1 {
  display: flex;
  justify-content: space-between;
}

.data-input-block-2 {
  display: flex;
  justify-content: space-between;
  width: 320px;
}

.data-input-block-2 input {
  width: 305px;
}

label {
  font-family: "Sofia Sans Semi Condensed", sans-serif;
  font-size: 16px;
  margin-left: 14px;
  line-height: 200%;
  font-weight: 600;
  color: #666666;
}

input {
  font-family: "Inter", sans-serif;
  padding-left: 12px; 
  width: 200px;
  height: 48px;
  border: rgb(102, 102, 102,0.35) solid 1px;
  border-radius: 24px;
  margin-bottom: 64px;
  margin-right: 16px;
}

.checkbox {
  width: 16px;
  height: 16px;
  accent-color: #A737D5;
}
/* Button */

.registration-button {
  background: #B37CFF;
  padding: 18px 200px;
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