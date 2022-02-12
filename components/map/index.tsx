import React from 'react'
import * as S from '@styled'
import { css } from '@emotion/css'

const ChurchMap = () => {
  return (
    <>
      <S.WhiteCardContainer>
        <S.SectionHeaderWrapper>
          <S.SubHeader>오시는 길</S.SubHeader>
          <S.EnglishHeader>LOCATION</S.EnglishHeader>
        </S.SectionHeaderWrapper>
        <div className={addressWrapperStyle}>
          <p className="church">대한성공회 서울주교좌 성당</p>
          <p className="address">서울특별시 중구 세종대로 21길 15</p>
        </div>
      </S.WhiteCardContainer>

      <S.YellowCardContainer>
        <div>
          <p>지도</p>
        </div>
      </S.YellowCardContainer>
      <S.WhiteCardContainer>
        <div className={guideDescriptionStyle}>
          <div>
            <p className="label">자가용</p>
            <p>주차 공간이 협소합니다. 주변 주차장 안내드립니다.</p>
            <p>하이파킹 코리아나호텔 주차장, 서울시청 신청사 주차장</p>
          </div>
          <div>
            <p className="label">지하철</p>
            <p>지하철 시청열 3번 출구 100m 앞</p>
          </div>
          <div>
            <p className="label">버 스</p>
            <p>버스 시청앞, 덕수궁 정거장 하차 790, 799, 401, 402, 406</p>
          </div>
        </div>
      </S.WhiteCardContainer>
    </>
  )
}

const addressWrapperStyle = css`
  text-align: center;
  margin: 1rem 0;
  & > .church {
    font-size: 1.25rem;
  }
  & > .address {
    color: ${S.palette.font.light};
    font-size: 1rem;
  }
`

const guideDescriptionStyle = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  font-size: 1rem;
  & > div {
    margin: 0.25rem 0;
    & > .label {
      font-weight: 500;
    }
  }
`

export default ChurchMap
