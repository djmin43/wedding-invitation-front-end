import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { BlogType } from '../data/dummyBlogData'
import Navigation from '../components/layout/Navigation'
import IntroMain from '../components/intro/IntroMain'
import * as s from '../styles/global-styled'
import BlogMain from './blog/BlogMain'

type AppProps = {
  blogs: BlogType[]
}

const App = ({ blogs }: AppProps) => {
  const [showNavBar, setShowNavBar] = useState<boolean>(false)

  const handleScroll = () => {
    const position = window.pageYOffset
    position > 120 ? setShowNavBar(true) : setShowNavBar(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <Head>
        <title>한종윤 결혼식</title>
        <meta
          property="og:image"
          content="https://mindongjoon.blob.core.windows.net/general/hj-pic.jpeg"
          key="hj-image"
        />
      </Head>
      <Head>
        <meta
          property="og:description"
          content="친구들 내 결혼식 올래?"
          key="invitation"
        />
      </Head>
      {showNavBar && (
        <s.NavigationWrapper>
          <Navigation />
        </s.NavigationWrapper>
      )}
      <s.Main>
        <IntroMain />
        <BlogMain blogs={blogs} />
      </s.Main>
    </>
  )
}

export default App
