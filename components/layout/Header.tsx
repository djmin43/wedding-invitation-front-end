import React from 'react'
import styled from '@emotion/styled'

const Header = () => {
  return (
    <header>
      <Navigation>
        <span>Home</span>
        <span>Photo</span>
        <span>Map</span>
        <span>Message</span>
      </Navigation>
    </header>
  )
}

const Navigation = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 8vh;
  background-color: #121858;
  color: #fffef2;

`

export default Header
