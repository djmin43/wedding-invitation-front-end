import React from 'react'
import styled from '@emotion/styled'

const Letter = () => {
  return (
    <S.LetterWrapper>
      <S.Message>
        <p>어느덧</p>
        <p>많은 분들의 보살핌 안에서 자라</p>
        <p>좋은 소식을</p>
        <p>전하게 되었습니다.</p>
        <p>서로 아끼고 배려하는 마음으로</p>
        <p>받은 사랑 나누며</p>
        <p>예쁘게 살겠습니다.</p>
        <p>격려와 응원의 마음으로</p>
        <p>함께 기뻐해주세요.</p>
        <p>감사합니다.</p>
      </S.Message>
      <S.NameWrapper>
        <span>김민숙</span>
        <span>의 장남 한종윤</span>
        <span>이재헌 김민수</span>
        <span>의 장녀 이혜진</span>
      </S.NameWrapper>
    </S.LetterWrapper>
  )
}

const LetterWrapper = styled.section`
  max-width: 15rem;
  margin: auto;
`

const Message = styled.article`
  text-align: center;
  line-height: 0.5rem;
  font-weight: 500;
  margin: 1rem 0;
  & > p:last-of-type {
    margin-top: 3rem;
  }
`

const NameWrapper = styled.section`
  text-align: right;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  width: 100%;
  & > span:nth-of-type(odd) {
    text-align: left;
  }
`

const S = {
  NameWrapper,
  LetterWrapper,
  Message
}

export default Letter
