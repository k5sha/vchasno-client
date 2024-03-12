<template>
  <router-view />
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
