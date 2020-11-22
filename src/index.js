import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'

const GRAPHQL_ENDPOINT = 'https://serene-tundra-45425.herokuapp.com/graphql'

const cache = new InMemoryCache({
  addTypename: false,
  resultCaching: false,
})
const client = new ApolloClient({
  uri: GRAPHQL_ENDPOINT,
  cache,
})

const rootElement = document.getElementById('root')
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  rootElement,
)
