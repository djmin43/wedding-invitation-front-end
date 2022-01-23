import React from 'react'
import { useRouter } from 'next/router'
import * as S from '../../styles/global-styled/'

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
          <span onClick={() => handleRouter('/#buttons')}>Photo</span>
        </div>
        <div>
          <span onClick={() => handleRouter('/map')}>Map</span>
        </div>
        <div>
          <span onClick={() => handleRouter('/blog')}>Message</span>
        </div>
      </S.NavigationContainer>
    </header>
  )
}

export default Navigation
