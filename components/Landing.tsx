import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'
import Image from 'next/image'

const Main = () => {

  return (
    <ImageWrapper>
      <Image 
        src="https://mindongjoon.blob.core.windows.net/general/hj-pic.jpeg"
        alt="hj pic" 
        layout="intrinsic"
        width={480}
        height={700}
      />
    </ImageWrapper>
  )
}


const ImageWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`


export default Main
