import React from 'react';
import styled from '@emotion/styled'

const App = () => {
  return <Main>
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
