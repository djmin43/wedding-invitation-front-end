import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'


const Main = () => {
  return (
    <MainSection>
      <h1>청첩장</h1>
      <p>안녕하세요 저희는 3월 26일 결혼합니다. 예쁘게 봐주세요</p>
    </MainSection>
  )
}

const MainSection = styled.section`
  text-align: center;
`

export default Main
