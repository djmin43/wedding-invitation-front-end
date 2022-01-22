import React from 'react';
import styled from '@emotion/styled'
import Head from 'next/head'
import MainImage from './MainImage'
import Letter from './Letter'
import Link from 'next/link'
import LocationInformation from './LocationInformation';

const App = () => {  

  const jongyunPhoneNumber = '01071304250'
  const haejinPhoneNumber = '01095561185'

  return <>
    <Head>
      <title>한종윤 결혼식</title>
      <meta property="og:image" content="https://mindongjoon.blob.core.windows.net/general/hj-pic.jpeg" key="hj-image" />
    </Head>
    <Head>
      <meta property="og:description" content="친구들 내 결혼식 올래?" key="invitation" />
    </Head>
    <Main>
      <Header id="top">
        <p>한종윤</p>
        <p>이혜진</p>
      </Header>
      <LocationInformation />
      <MainImage />
      <Letter />
      <CallButtonWrapper>
        <div>
          <Link href={`tel:${jongyunPhoneNumber}`}>신랑측 연락하기</Link>
        </div>
        <div>
          <Link href={`tel:${haejinPhoneNumber}`}>신부측 연락하기</Link>
        </div>
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
  gap: 1rem;
  margin-top: 1rem;
  & > div {
    padding: 0.25rem;
    border: 2px black solid;
    border-radius: 4px;

  }
`





export default App;
