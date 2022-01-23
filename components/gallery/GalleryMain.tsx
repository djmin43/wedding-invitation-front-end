import React from 'react';
import Image from 'next/image'
import styled from '@emotion/styled'

const GalleryMain = () => {
  return     <ImageWrapper>
    <h1>갤러리</h1>
    <Image
      src="https://mindongjoon.blob.core.windows.net/general/IMG_30309D59A65C-1.jpeg"
      alt="이우혁"
      layout="intrinsic"
      width={700}
      height={475}
    />
    <span>친구들 안녕</span>
  </ImageWrapper>;
};

export default GalleryMain;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`


