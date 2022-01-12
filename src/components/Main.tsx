import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'
import Image from 'next/image'


const Main = () => {
  return (
    <MainSection>
      <section className="location">
        <h2>결혼식 기본정보</h2>
        <p>2022년 3월 26일 낮 12시</p>
        <p>대한성공회 서울대성당</p>
        <p>서울특별시 중구 세종대로21길 15</p>
      </section>
      <section className="players">
        <p>김민숙 의 장남 한종윤</p>
        <p>이재헌 김민수 의 장녀 이혜진</p>
      </section>
      <section className="letter">
        <p>어느덧 많은 분들의 보살핌 안에서 자라 좋은 소식을 전하게 되었습니다. 서로 아끼고 배려하는 마음으로 받은 사랑 나무며 예쁘게 살겠습니다. 격려와 응원의 마음으로 함께 기뻐해주세요. 감사합니다.</p>
      </section>
      <div>
        <Image src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ad9f70cd-79b4-4aa6-a702-80a74714dc1d/KakaoTalk_Photo_2022-01-12-10-53-00.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220112T092247Z&X-Amz-Expires=86400&X-Amz-Signature=40c17b67465d122fb3bc48b04748deaf2fb113a60a46e8b180d6fabda8ef45a5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22KakaoTalk_Photo_2022-01-12-10-53-00.jpeg%22&x-id=GetObject" 
      layout="intrinsic" width={628} height={919} alt="haejin's photo" />
      </div>
   
    </MainSection>
  )
}

const MainSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  height: 100vh;
  width: 100vw;
`

export default Main
