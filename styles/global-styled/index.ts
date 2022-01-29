import styled from '@emotion/styled'
import { palette } from '../globalTheme'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.5rem;
  background-color: ${palette.background};
`
export const CallButtons = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  & > div {
    padding: 0.5rem;
    border: 1px ${palette.border} solid;
    box-shadow: ${palette.boxshadow};
    border-radius: 4px;
  }
`

export const PageContainer = styled.div`
  box-shadow: ${palette.boxshadow};
  background-color: ${palette.page};
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  width: 100%;
`

export const IntroHeader = styled.header`
  margin-right: auto;
  line-height: 0.25rem;
  font-size: 2rem;
  font-weight: 500;
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
  color: ${palette.page};
`

export const PageHeader = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 0;
`

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0.5rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid #d3d3d3;
  & > .body {
    font-size: 0.75rem;
    padding: 0.125rem;
    font-weight: 600;
  }
`

type AvatarStyeldProps = {
  backgroundColor: string
}

export const Avatar = styled.div<AvatarStyeldProps>`
  vertical-align: middle;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: ${palette.boxshadow};
  color: ${palette.page};
  font-size: 0.75rem;
  font-weight: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
