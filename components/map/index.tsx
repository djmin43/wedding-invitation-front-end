import React from 'react'
import * as S from '@styled'
import { css } from '@emotion/css'

const ChurchMap = () => {
  return (
    <S.CardContainer>
      <S.SubHeader>오시는 길</S.SubHeader>
      <div className={addressWrapperStyle}>
        <p>대한성고회 서울주교좌 성당</p>
        <p className={lightFontStyle}>서울특별시 중구 세종대로 21길 15</p>
      </div>
      <section className={descriptionStyle}>
        <div>
          <p>자가용</p>
          <p>주차 공간이 협소합니다. 주변 주차장 안내드립니다.</p>
          <p>하이파킹 코리아나호텔 주차장, 서울시청 신청사 주차장</p>
        </div>
        <div>
          <p>지하철</p>
          <p>지하철 시청열 3번 출구 100m 앞</p>
        </div>
        <div>
          <p>버 스</p>
          <p>버스 시청앞, 덕수궁 정거장 하차 790, 799, 401, 402, 406</p>
        </div>
      </section>
    </S.CardContainer>
  )
}

const descriptionStyle = css`
  font-size: 0.75rem;
  & > div {
    margin: 0.5rem 0;
    & > p:nth-of-type(1) {
      font-weight: 400;
    }
  }
`

const lightFontStyle = css`
  color: ${S.palette.font.light};
`

const addressWrapperStyle = css`
  margin: 1rem 0;
  text-align: center;
  & > p {
    font-size: 1rem;
  }
`

export default ChurchMap
