import React from 'react'
import * as S from '@styled'
import Image from 'next/image'
import { css } from '@emotion/css'

const Landing = () => {
  return (
    <S.LandingContainer>
      <S.LandingImageWrapper>
        <Image
          src="https://mindongjoon.blob.core.windows.net/general/hj-pic.jpeg"
          alt="그림"
          layout="intrinsic"
          width={121}
          height={177}
        />
      </S.LandingImageWrapper>
      <S.BigHeader className={nameStyle}>한종윤 이혜진</S.BigHeader>
      <div className={textWrapperStyle}>
        <section>
          <p>2022년 3월 26일 토요일 오후 12시</p>
          <p>대한성공회 서울주교좌성당</p>
        </section>
      </div>
    </S.LandingContainer>
  )
}

const textWrapperStyle = css`
  text-align: center;
  font-weight: 400;
`

const nameStyle = css`
  margin: 1rem 0;
`

export default Landing

// IMAGE RATIO: 483 x 707
