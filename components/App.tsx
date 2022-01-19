import React from 'react';
import styled from '@emotion/styled'
import Head from 'next/head'

const App = () => {
  return <Main>
    <Head>
      <title>한종윤 결혼식</title>
      <meta property="og:image" content="https://mindongjoon.blob.core.windows.net/general/hj-pic.jpeg" key="hj-image" />
    </Head>
    <Header>
      <p>한종윤</p>
      <p>이혜진</p>
      <p>이우혁</p>
    </Header>
  </Main>;
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = styled.header`
  margin-right: auto;
  line-height: 0;
  font-size: 2rem;
  font-weight: 700;
`



export default App;
