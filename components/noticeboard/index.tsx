import React from 'react'
import { css } from '@emotion/css'
import * as S from '@styled'

const Noticeboard = () => {
  return (
    <S.WhiteCardContainer>
      <div className={noticeboardWrapperStyle}>
        <S.SubHeader>코로나 19 안내</S.SubHeader>
        <S.ParagraphWrapper>
          <p>코로나 종식을 예측 할 수 없기에 결혼식을</p>
          <p>미루지 않고 예정대로 진행 하게 되었습니다.</p>
        </S.ParagraphWrapper>
        <S.ParagraphWrapper>
          <p>전해주시는 축하의 마음만으로도 저희에게는</p>
          <p>큰 기쁨이오니 결혼식 참석에 대한 부담은</p>
          <p>갖지 않으셨으면 합니다.</p>
        </S.ParagraphWrapper>
      </div>
    </S.WhiteCardContainer>
  )
}

const noticeboardWrapperStyle = css`
  text-align: center;
  background-color: ${S.palette.card};
  padding: 2.5rem 2.5rem;
`

export default Noticeboard
