import React from 'react'
import styled from '@emotion/styled'

const LocationInformation = () => {
  return (
    <LocationAndTimeSection>
      <p>2022년 3월 26일 토요일 오후 12시</p>
      <p>대한성공회 서울주교좌성당</p>
    </LocationAndTimeSection>
  )
}

const LocationAndTimeSection = styled.section`
  font-size: 1rem;
  font-weight: 300;
  line-height: 0.25rem;
  margin-right: auto;
`

export default LocationInformation
