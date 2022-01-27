import styled from '@emotion/styled'
import { palette } from '../globalTheme'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  background-color: ${palette.background.dark};
`
export const CallButtons = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  & > div {
    padding: 0.25rem;
    border: 2px black solid;
    border-radius: 4px;
  }
`

export const PageContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  background-color: ${palette.background.light};
  padding: 0.5rem;
  margin: 0.5rem 0;
  width: 100%;
`

export const IntroHeader = styled.header`
  margin-right: auto;
  line-height: 0.25rem;
  font-size: 2rem;
  font-weight: 700;
`

export const NavigationWrapper = styled.div`
  top: 0;
  position: sticky;
  z-index: 10;
  animation: fadeIn 0.3s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 8vh;
  background-color: #121858;
  color: ${palette.background.light};
`

export const PageHeader = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 0;
`

export const CardWrapper = styled.div`
  text-align: center;
`