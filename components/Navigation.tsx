import React from 'react'
import styled from '@emotion/styled'


const Navigation = () => {
  return (
    <header>
      <NavigationContainer>
        <span>Home</span>
        <span>Photo</span>
        <span>Map</span>
        <span>Message</span>
      </NavigationContainer>
    </header>
  )
}

const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 8vh;
  background-color: #121858;
  color: #fffef2;

`

export default Navigation
