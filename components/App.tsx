import React from 'react';
import styled from '@emotion/styled'
import Head from 'next/head'
import MainImage from './MainImage'
import Navigation from './Navigation';
import Letter from './Letter'

const App = () => {  

  const jongyunPhoneNumber = `01071304250`

  return <>
    <Head>
      <title>한종윤 결혼식</title>
      <meta property="og:image" content="https://mindongjoon.blob.core.windows.net/general/hj-pic.jpeg" key="hj-image" />
    </Head>
    <Head>
      <meta property="og:description" content="친구들 내 결혼식 올래?" key="invitation" />
    </Head>
    <Navigation />
    <Main>
      <Header id="top">
        <p>한종윤</p>
        <p>이혜진</p>
      </Header>
      <MainImage />
      <Letter />
      <CallButtonWrapper>
        <a href={`tel:[${jongyunPhoneNumber}]`}>신랑측 연락하기</a>
        <a href="">신부측 연락하기</a>
      </CallButtonWrapper>
    </Main>
  </>;
};


const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
`

const Header = styled.header`
  margin-right: auto;
  line-height: 0.25rem;
  font-size: 2rem;
  font-weight: 700;
`

const CallButtonWrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`





export default App;
