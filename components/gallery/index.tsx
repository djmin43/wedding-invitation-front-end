import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { css } from '@emotion/css'
import * as S from '@styled'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Pagination } from 'swiper'

const Gallery = () => {
  return (
    <S.WhiteCardContainer>
      <S.SectionHeaderWrapper>
        <S.SubHeader>갤러리</S.SubHeader>
        <S.EnglishHeader>GALLERY</S.EnglishHeader>
      </S.SectionHeaderWrapper>
      <Swiper
        className={swiperStyle}
        loop={true}
        pagination={true}
        modules={[Pagination]}
      >
        <SwiperSlide className={slideStyle}>한</SwiperSlide>
        <SwiperSlide className={slideStyle}>종</SwiperSlide>
        <SwiperSlide className={slideStyle}>윤</SwiperSlide>
      </Swiper>
    </S.WhiteCardContainer>
  )
}

const swiperStyle = css`
  height: 100%;
  width: 100%;
`

const slideStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25rem;
  font-size: 3rem;
  background-color: ${S.palette.card};
`

export default Gallery
