import React from 'react'
import { useRouter } from 'next/router'
import * as S from '../../styles/global-styled/'
import { css } from '@emotion/css'

const Navigation = () => {
  const router = useRouter()

  const handleRouter = (route: string) => {
    router.push(route)
  }

  return (
    <header>
      <S.NavigationContainer>
        <div>
          <span onClick={() => handleRouter('/')}>Home</span>
        </div>
        <div>
          <span onClick={() => handleRouter('/')}>Photo</span>
        </div>
        <div>
          <span onClick={() => handleRouter('/')}>Map</span>
        </div>
        <div>
          <span onClick={() => handleRouter('/')}>Message</span>
        </div>
      </S.NavigationContainer>
    </header>
  )
}

export default Navigation
