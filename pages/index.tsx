import type { NextPage } from 'next'
import Landing from '../components/Landing'
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
      <Landing />
     </QueryClientProvider>
   </Layout>
  )
}



export default Home
