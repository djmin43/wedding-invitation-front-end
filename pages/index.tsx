import type { NextPage } from 'next'
import App from '../components/App'
import Layout from '../components/layout/Layout'
import React from 'react'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

const Home: NextPage = () => {

  return (
    <Layout>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Layout>
  )
}



export default Home
