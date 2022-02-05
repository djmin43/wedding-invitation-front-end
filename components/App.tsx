import React from 'react'
import Head from 'next/head'
import Landing from '@components/landing'
import InvitationLetter from '@components/invitation-letter'
import GiftMoney from '@components/gift-money'
import Noticeboard from '@components/noticeboard'
import Map from '@components/map'
import * as S from '@styled'

const App = () => {
  // const handleScroll = () => {
  //   const position = window.pageYOffset
  //   position > 120 ? setShowNavBar(true) : setShowNavBar(false)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true })
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  return (
    <S.App>
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
      <Landing />
      <InvitationLetter />
      <GiftMoney />
      <Noticeboard />
      <Map />
    </S.App>
  )
}

export default App
