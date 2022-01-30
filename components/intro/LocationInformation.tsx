import React from 'react'
import styled from '@emotion/styled'

const LocationInformation = () => {
  return (
    <S.LocationAndTimeSection>
      <p>2022년 3월 26일 토요일 오후 12시</p>
      <p>대한성공회 서울주교좌성당</p>
    </S.LocationAndTimeSection>
  )
}

const LocationAndTimeSection = styled.section`
  font-size: 1rem;
  font-weight: 300;
  line-height: 0.25rem;
  margin-right: auto;
`

const S = {
  LocationAndTimeSection,
}

export default LocationInformation
