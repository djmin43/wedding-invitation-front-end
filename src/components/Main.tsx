import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'


const Main = () => {
  return (
    <MainSection>
      <h1>청첩장</h1>
      <p>안녕하세요 저희는 3월 26일 결혼합니다.</p>
      <p>예쁘게 봐주세요 ^____^</p>
    </MainSection>
  )
}

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100vw;
`

export default Main
