import React from 'react'
import * as S from '@styled'
import Image from 'next/image'

const Landing = () => {
  return (
    <S.LandingContainer>
      <S.ImageWrapper>
        <Image
          src="https://mindongjoon.blob.core.windows.net/general/hj-pic.jpeg"
          alt="그림"
          layout="intrinsic"
          width={161}
          height={236}
        />
      </S.ImageWrapper>
    </S.LandingContainer>
  )
}

export default Landing

// IMAGE RATIO: 483 x 707
