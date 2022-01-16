import type { NextPage } from 'next'
import Main from '../components/Main'
import Layout from '../components/layout/Layout'
import axios from 'axios'
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
      <Main />
     </QueryClientProvider>
   </Layout>
  )
}



export default Home
