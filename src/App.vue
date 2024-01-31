<template>
  <nav>
    <router-link to="/">
      Головна
    </router-link> | <router-link to="/about">
      Тест2
    </router-link> |
    <router-link to="/contact">
      Тест1
    </router-link> |
    <div v-if="isAuthenticated">
      <router-link to="/profile">
        Профіль
      </router-link>
      <router-link to="/logout">
        Вийти
      </router-link>
    </div>
    <div v-else>
      <router-link
        to="/login"
      >
        Увійти
      </router-link>
      /
      <router-link
        to="/registration"
      >
        Зареєструватися
      </router-link>
    </div>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import { ApolloClients } from '@vue/apollo-composable'
import { apolloClient } from './vue-apollo'
import { mapGetters } from 'vuex'

  export default defineComponent({
    name: 'App',
    setup() {
      provide(ApolloClients, apolloClient)
    },
    computed: {
		...mapGetters({isAuthenticated: 'account/isAuthenticated'})
	},
  })
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
