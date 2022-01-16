import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/css'
import Image from 'next/image'
import { useQuery } from 'react-query'
import axios from 'axios'

const Main = () => {
  const { data, status } = useQuery("blog", fetchBlogList);

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

   
    </MainSection>
  )
}

const fetchBlogList = async () => {
  const result = await axios.get("http://localhost:80/all")
  console.log(result)
  return result
};

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
