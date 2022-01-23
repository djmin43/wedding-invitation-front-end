import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import Head from 'next/head'
import MainImage from './MainImage'
import Letter from './Letter'
import Link from 'next/link'
import LocationInformation from './LocationInformation';
import { BlogType } from '../data/dummyBlogData'
import Navigation from '../components/layout/Navigation'
import { palette } from '../styles/globalTheme'

type AppProps = {
  blogProps: BlogType[]
}

const App = ({ blogProps }: AppProps) => {  

  const jongyunPhoneNumber = '01071304250'
  const haejinPhoneNumber = '01095561185'

  const [showNavBar, setShowNavBar] = useState<boolean>(false)

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 120) {
      setShowNavBar(true)
    } else {
      setShowNavBar(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>
    <Head>
      <title>한종윤 결혼식</title>
      <meta property="og:image" content="https://mindongjoon.blob.core.windows.net/general/hj-pic.jpeg" key="hj-image" />
    </Head>
    <Head>
      <meta property="og:description" content="친구들 내 결혼식 올래?" key="invitation" />
    </Head>
    {showNavBar &&
    <S.NavigationWrapper>
      <Navigation />
    </S.NavigationWrapper>}
    <S.Main>
      <S.IntroPageWrapper>
        <S.Header id="top">
          <p>한종윤</p>
          <p>이혜진</p>
        </S.Header>
        <LocationInformation />
        <MainImage />
        <Letter />
        <S.CallButtons id="buttons">
          <div>
            <Link href={`tel:${jongyunPhoneNumber}`}>신랑측 연락하기</Link>
          </div>
          <div>
            <Link href={`tel:${haejinPhoneNumber}`}>신부측 연락하기</Link>
          </div>
        </S.CallButtons>
      </S.IntroPageWrapper>
    </S.Main>
  </>;
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  background-color: ${palette.background};
`

const Header = styled.header`
  margin-right: auto;
  line-height: 0.25rem;
  font-size: 2rem;
  font-weight: 700;
`

const CallButtons = styled.section`
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

const NavigationWrapper = styled.div`
  top: 0;
  position: sticky;
  z-index: 10;
  animation: fadeIn .3s;
  @keyframes fadeIn {
    from { opacity: 0; }
      to { opacity: 1; }
}
`

const IntroPageWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  background-color: ${palette.page};
  padding: 0.5rem;
`

const S = {
  Main,
  Header,
  CallButtons,
  NavigationWrapper,
  IntroPageWrapper
}

export default App;
