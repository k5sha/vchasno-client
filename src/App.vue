<template>
  <nav>
    <router-link to="/">
      Home
    </router-link> | <router-link to="/about">
      About
    </router-link> |
    <router-link to="/contact">
      Contact
    </router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import { ApolloClients } from '@vue/apollo-composable'
import { apolloClient } from './main'

  export default defineComponent({
    name: 'App',
    setup() {
      provide(ApolloClients, apolloClient)
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
