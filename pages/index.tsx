import type { NextPage } from 'next'
import App from '../components/App'
import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

const Home: NextPage = () => {

  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  )
}



export default Home
