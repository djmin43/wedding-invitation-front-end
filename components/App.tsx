import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../components/layout/Navigation'
import Intro from './intro/Main'
import * as S from '../styles/global-styled'
import Blog from './blog/Main'
import Notice from './notice/Main'
import Money from './money/Main'

const App = () => {
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
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width, maximum-scale=1.0, user-scalable=no"
        />
      </Head>
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
        <S.NavigationWrapper>
          <Navigation />
        </S.NavigationWrapper>
      )}
      <S.Main>
        <Intro />
        <Blog />
        <Notice />
        <Money />
      </S.Main>
    </>
  )
}

export default App
