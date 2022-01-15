import type { NextPage } from 'next'
import Main from '../components/Main'
import Layout from '../components/layout/Layout'
import axios from 'axios'
import React, { useEffect } from 'react'

const Home: NextPage = () => {

  useEffect(() => {
    console.log('hello world')
  }, [])

  const getResult = async () => {
    const result = await axios.get('http://localhost:80/all')
    console.log(result, 'get result')
    return result
  }

  getResult()

  return (
   <Layout>
     <Main />
   </Layout>
  )
}

export default Home
