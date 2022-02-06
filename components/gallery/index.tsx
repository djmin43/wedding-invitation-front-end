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
    <S.CardContainer>
      <S.SubHeader>갤러리</S.SubHeader>
      <Swiper
        className={swiperStyle}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide className={slideStyle}>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </S.CardContainer>
  )
}

const swiperStyle = css`
  height: 100%;
  width: 100%;
`

const slideStyle = css`
  height: 25rem;
`

export default Gallery
