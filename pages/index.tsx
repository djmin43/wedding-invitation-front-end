import type { NextPage } from 'next'
import Main from '../components/Main'
import Layout from '../components/layout/Layout'
import axios from 'axios'
import React, { useEffect } from 'react'

const Home: NextPage = () => {

  useEffect(() => {
    console.log('hello world')
  }, [])

  return (
   <Layout>
     <Main />
   </Layout>
  )
}

export default Home
