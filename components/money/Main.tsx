import React from 'react'
import * as S from '../../styles/global-styled/index'
import { css } from '@emotion/css'

const Main = () => {
  return (
    <S.PageContainer>
      <S.PageHeader>축하의 마음을 전하세요</S.PageHeader>
      <S.PageSubHeader className={moneySubHeader}>
        축하의 마음을 담아 축의금을 전달해 보세요.
      </S.PageSubHeader>
    </S.PageContainer>
  )
}

const moneySubHeader = css`
  margin-top: 2rem;
`

export default Main
