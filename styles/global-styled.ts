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

export const BigHeader = styled.h1`
  font-size: 2.5rem;
  font-weight: 400;
`
export const Header = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const SubHeader = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
`

export const EnglishHeader = styled.h3`
  font-size: 0.75rem;
  font-weight: 300;
  letter-spacing: 0.25rem;
  font-family: 'Maruburi';
`

export const SectionHeaderWrapper = styled.div`
  text-align: center;
  margin: 2.5rem 0;
`

export const ParagraphWrapper = styled.div`
  text-align: center;
  margin: 0.5rem 0;
  font-size: 1rem;
`

export const App = styled.main`
  background-color: ${palette.background};
  gap: 1rem;
`

export const LandingContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
`

export const LandingImageWrapper = styled.div`
  display: flex;
`

export const YellowCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${palette.card};
  padding: 2.5rem 0.5rem;
`

export const WhiteCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 2.5rem 0;
`
