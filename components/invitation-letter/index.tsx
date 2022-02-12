import React from 'react'
import * as S from '@styled'
import { css } from '@emotion/css'
import Image from 'next/image'

const InvitationLetter = () => {
  return (
    <S.YellowCardContainer>
      <Image
        src="/images/hands2.svg"
        layout="fixed"
        width={100}
        height={100}
        alt="손 잡는 이미지"
      />
      <S.ParagraphWrapper className={letterWrapperStyle}>
        <p>어느덧 많은 분들의 보살핌 안에서 자라</p>
        <p>좋은 소식을 전하게 되었습니다.</p>
        <p>서로 아끼고 배려하는 마음으로</p>
        <p>받은 사랑 나누며 예쁘게 살겠습니다.</p>
        <p>격려와 응원의 마음으로 함께 기뻐해주세요.</p>
        <p>감사합니다.</p>
      </S.ParagraphWrapper>
    </S.YellowCardContainer>
  )
}

const letterWrapperStyle = css`
  line-height: 2;
  margin: 2rem 0;
`

export default InvitationLetter
