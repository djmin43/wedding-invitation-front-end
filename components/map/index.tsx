import React, { useEffect } from 'react'
import * as S from '@styled'
import { css } from '@emotion/css'
import Head from 'next/head'

const Map = () => {
  useEffect(() => initMap(), [])
  const initMap = () => {
    const latitude = 37.56727934114503
    const longitude = 126.97577996889999
    const church = new naver.maps.Map('church', {
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 15,
      zoomControl: true,
    })
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const churchMarker = new naver.maps.Marker({
      position: new naver.maps.LatLng(latitude, longitude),
      map: church,
    })
  }
  return (
    <S.CardContainer>
      <Head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/javascript"
          src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=pb78a7v6oa"
        ></script>
      </Head>

      <S.SubHeader>오시는 길</S.SubHeader>
      <section className={descriptionStyle}>
        <span>자가용:</span>
        <span>
          주차 공간이 협소합니다. 주변 주차장 안내드립니다. 하이파킹
          코리아나호텔 주차장, 서울시청 신청사 주차장
        </span>
        <span>지하철:</span>
        <span>지하철 시청열 3번 출구 100m 앞</span>
        <span>버 스:</span>
        <span>버스 시청앞, 덕수궁 정거장 하차 790, 799, 401, 402, 406</span>
      </section>
      <div id="church" className={naverMapStyle}></div>
    </S.CardContainer>
  )
}

const descriptionStyle = css`
  display: grid;
  grid-template-columns: 4rem auto;
  row-gap: 1rem;
  line-height: 1.25;
`

const naverMapStyle = css`
  width: 15rem;
  height: 15rem;
`

export default Map
