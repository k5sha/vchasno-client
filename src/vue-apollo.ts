import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context';
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";
import { createApolloProvider } from '@vue/apollo-option';


// Name of the localStorage item
const AUTH_TOKEN = 'access-token'

// Http endpoint
const httpEndpoint = import.meta.env.VITE_SERVER_API+'graphql'

// Config
const httpLink = createUploadLink({
  uri: httpEndpoint,
})

const authLink = setContext(async (_, { headers }) => {
  // Use your async token function here:
  const token = localStorage.getItem(AUTH_TOKEN)
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}` || ''
    }
  }
})

const defaultOptions = {  // You can use `https` for secure connection (recommended in production)
  httpEndpoint,
  // LocalStorage token
  tokenName: AUTH_TOKEN,
  // Enable Automatic Query persisting with Apollo Engine
  persisting: false,
  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  websocketsOnly: false,
  // Is being rendered on the server?
  ssr: false,

  // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.
  // link: myLink
  link: authLink.concat(httpLink),
  // Turn in memory cache
  cache: new InMemoryCache(),
  // Dev tools
	connectToDevTools: true

}

// Create apollo client
export const apolloClient = new ApolloClient({
  ...defaultOptions,
})

// Call this in the Vue app file
export function createProvider () {
  // Create vue apollo provider
  const apolloProvider = createApolloProvider({
    defaultClient: apolloClient,
    errorHandler (error) {
      // eslint-disable-next-line no-console
      alert(error)
      console.log('%cError', 'background: red; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;', error.message)
    }
  })

  return apolloProvider
}

// Manually call this when user log in
export async function onLogin (apolloClient, token) {
  if (typeof localStorage !== 'undefined' && token) {
    localStorage.setItem(AUTH_TOKEN, token)
    console.log(token);
  }
  try {
    await apolloClient.resetStore()
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (login)', 'color: orange;', e.message)
  }
}

// Manually call this when user log out
export async function onLogout (apolloClient) {
  if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(AUTH_TOKEN)
  }
  try {
    await apolloClient.resetStore()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.log('%cError on cache reset (logout)', 'color: orange;', e.message)
  }
}