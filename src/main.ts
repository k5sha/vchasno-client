import { createApp } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import './style.css'
import App from './App.vue'
import router from './router'
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

// Grapql setup


const httpLink = createUploadLink({
  uri: 'http://localhost:3000/graphql',
})

export const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
	connectToDevTools: true,
	fetchOptions: {
		mode: 'no-cors',
	},
})

const apolloProvider = createApolloProvider({
	defaultClient: apolloClient,
})



createApp(App).use(router).use(apolloProvider).mount('#app')
