import React from 'react'
import * as S from '@styled'
import { css } from '@emotion/css'

const InvitationLetter = () => {
  return (
    <S.CardContainer>
      <S.SubHeader>안녕하새우</S.SubHeader>
      <section className={letterWrapperStyle}>
        <p>어느덧 많은 분들의 보살핌 안에서 자라</p>
        <p>좋은 소식을 전하게 되었습니다.</p>
        <p>서로 아끼고 배려하는 마음으로</p>
        <p>받은 사랑 나누며 예쁘게 살겠습니다.</p>
        <p>격려와 응원의 마음으로</p>
        <p>함께 기뻐해주세요.</p>
        <p>감사합니다.</p>
      </section>
      <section className={nameWrapperStyle}>
        <span>김민숙</span>
        <span>의 장남 한종윤</span>
        <span>이재헌 김민수</span>
        <span>의 장녀 이혜진</span>
      </section>
    </S.CardContainer>
  )
}

const letterWrapperStyle = css`
  text-align: center;
  line-height: 1;
  & > p:nth-last-of-type(1) {
    margin-top: 3rem;
  }
`

const nameWrapperStyle = css`
  display: grid;
  grid-template-columns: minmax(3rem, auto) minmax(3rem, auto);
  line-height: 1.5;
`

export default InvitationLetter
