import React, { useRef } from 'react';
import styled from '@emotion/styled'
import Head from 'next/head'
import MainImage from './MainImage'
import Navigation from './Navigation';

const App = () => {

  const locationRef = useRef<HTMLParagraphElement>(null)

  function handleBackClick() {
    if (locationRef.current !== null) {
      locationRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return <>
    <Head>
      <title>한종윤 결혼식</title>
      <meta property="og:image" content="https://mindongjoon.blob.core.windows.net/general/hj-pic.jpeg" key="hj-image" />
    </Head>
    <Head>
      <meta property="og:description" content="친구들 내 결혼식 올래?" key="invitation" />
    </Head>
    <Navigation  />
    <Main>
      <Header id="top">
        <p onClick={handleBackClick}>한종윤</p>
        <p>이혜진</p>
      </Header>
      <LocationAndTime >
        <p >2022년 3월 26일 토요일 오후 12시</p>
        <p>대한성공회 서울주교좌성당</p>
      </LocationAndTime>
      <MainImage />
    </Main>
  </>;
};


const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
`

const Header = styled.header`
  margin-right: auto;
  line-height: 0;
  font-size: 2rem;
  font-weight: 700;
`

const LocationAndTime = styled.section`
  font-size: 1rem;
  font-weight: 700;
  line-height: 0;
  margin-right: auto;
`


export default App;
