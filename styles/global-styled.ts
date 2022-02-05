import styled from '@emotion/styled'

// @COMMON
export const palette = {
  background: '#e0e0e0',
  card: '#fffef2',
  font: {
    dark: '#000000',
    main: '#1B1212',
    light: '#808080',
  },
  boxshadow: 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px',
  mui: {
    orange: '#e53935',
    red: '#d81b60',
    purple: '#8e24aa',
    hardPurple: '#5e35b1',
    indigo: '#3949ab',
    blue: '#1e88e5',
    lightBlue: '#039be5',
    teal: '#00897b',
    green: '#43a047',
    deepOrange: '#f4511e',
    deepIndigo: '#273377',
  },
}

export const Header = styled.h2`
  font-size: 1.5rem;
`

export const SubHeader = styled.h3`
  font-size: 1.25rem;
`

export const App = styled.main`
  background-color: ${palette.background};
  gap: 1rem;
`

export const LandingContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${palette.card};
`

export const LandingImageWrapper = styled.div`
  box-shadow: ${palette.boxshadow};
`

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${palette.card};
  box-shadow: ${palette.boxshadow};
  padding: 1rem;
  margin: 1rem 0;
`
