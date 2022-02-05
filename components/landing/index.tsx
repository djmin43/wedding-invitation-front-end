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
          width={161}
          height={236}
        />
      </S.LandingImageWrapper>
      <div className={textWrapperStyle}>
        <S.Header className={headerStyle}>한종윤 이혜진</S.Header>
        <section className={locationStyle}>
          <p>2022년 3월 26일 토요일 오후 12시</p>
          <p>대한성공회 서울주교좌성당</p>
        </section>
      </div>
    </S.LandingContainer>
  )
}

const textWrapperStyle = css`
  text-align: center;
  position: relative;
  top: 0px;
`

const headerStyle = css`
  margin: 2rem;
`

const locationStyle = css``

export default Landing

// IMAGE RATIO: 483 x 707
