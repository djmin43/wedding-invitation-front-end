import React from 'react'
import * as S from '@styled'
import { css } from '@emotion/css'

const BrideAndGroom = () => {
  return (
    <S.CardContainer>
      <section className={nameWrapperStyle}>
        <span className={highlightStyle}>김민숙</span>
        <span>의 장남</span>
        <span className={highlightStyle}>한종윤</span>
        <span className={highlightStyle}>이재현 김민수</span>
        <span>의 장녀</span>
        <span className={highlightStyle}>이혜진</span>
      </section>
    </S.CardContainer>
  )
}

const nameWrapperStyle = css`
  display: grid;
  grid-template-columns: minmax(2rem, auto) minmax(1rem, auto) minmax(
      3rem,
      auto
    );
  grid-gap: 0.25rem;
`

const highlightStyle = css`
  font-weight: 500;
`

export default BrideAndGroom
