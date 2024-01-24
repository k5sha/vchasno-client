import { createApp } from 'vue'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'
import './style.css'
import App from './App.vue'
import router from './router'
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

// Grapql setup

function getHeaders() {
	const headers: { Authorization?: string; "Content-Type"?: string } = {};
	const token = localStorage.getItem("access-token");
	
	if (token) {
		headers["Authorization"] = `Bearer ${token}`;
	}
	headers["Content-Type"] = "application/json";
	return headers;
}


const httpLink = createUploadLink({
  uri: 'http://localhost:3000/graphql',
  headers: getHeaders()
})

export const apolloClient = new ApolloClient({
	link: httpLink,
	cache: new InMemoryCache(),
	connectToDevTools: true
})

const apolloProvider = createApolloProvider({
	defaultClient: apolloClient,
})



createApp(App).use(router).use(apolloProvider).mount('#app')
