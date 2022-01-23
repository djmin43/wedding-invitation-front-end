import React from 'react'
import MainImage from '../MainImage'
import Letter from '../Letter'
import Link from 'next/link'
import LocationInformation from '../LocationInformation'
import * as S from '../../styles/global-styled/index'

const IntroMain = () => {
  const jongyunPhoneNumber = '01071304250'
  const haejinPhoneNumber = '01095561185'

  return (
    <S.PageContainer>
      <S.IntroHeader id="top">
        <p>한종윤</p>
        <p>이혜진</p>
      </S.IntroHeader>
      <LocationInformation />
      <MainImage />
      <Letter />
      <S.CallButtons id="buttons">
        <div>
          <Link href={`tel:${jongyunPhoneNumber}`}>신랑측 연락하기</Link>
        </div>
        <div>
          <Link href={`tel:${haejinPhoneNumber}`}>신부측 연락하기</Link>
        </div>
      </S.CallButtons>
    </S.PageContainer>
  )
}

export default IntroMain
