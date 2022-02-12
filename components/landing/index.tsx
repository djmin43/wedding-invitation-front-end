import React from 'react'
import * as S from '@styled'
import Image from 'next/image'
import { css } from '@emotion/css'

const Landing = () => {
  return (
    <S.LandingContainer>
      <div className={landingHeaderWrapper}>
        <S.BigHeader>한종윤 3/26 이혜진</S.BigHeader>
      </div>

      <S.LandingImageWrapper>
        <Image
          src="https://mindongjoon.blob.core.windows.net/general/hj-pic.jpeg"
          alt="그림"
          layout="intrinsic"
          width={121}
          height={177}
        />
      </S.LandingImageWrapper>
      <div className={landingHeaderWrapper}>
        <S.SubHeader>2022년 3월 26일 오후 12시</S.SubHeader>
        <S.SubHeader>대한성공회 서울주교좌성당</S.SubHeader>
      </div>
    </S.LandingContainer>
  )
}

const landingHeaderWrapper = css`
  margin: 3rem 0;
  text-align: center;
`

export default Landing

// IMAGE RATIO: 483 x 707
