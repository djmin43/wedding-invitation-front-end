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
  font-family: 'Noto Sans KR', sans-serif;
  & > div {
    padding: 0.5rem 1rem;
    box-shadow: ${palette.boxshadow};
    border-radius: 4px;
    font-size: 0.75rem;
  }
  & > .call-bride-container {
    color: ${palette.page};
    background-color: ${palette.mui.deepIndigo};
  }
  & > .call-groom-container {
    color: ${palette.page};
    background-color: ${palette.mui.deepIndigo};
  }
`

export const BaseButton = styled.button`
  padding: 0.5rem 3rem;
  box-shadow: ${palette.boxshadow};
  background-color: ${palette.mui.deepIndigo};
  color: #fff;
  border: none;
  font-family: 'Noto Sans KR', sans-serif;
`

export const PageContainer = styled.div`
  box-shadow: ${palette.boxshadow};
  background-color: ${palette.page};
  padding: 0.5rem;
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
  background-color: ${palette.mui.deepIndigo};
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
    font-weight: 400;
  }
`

type AvatarStyeldProps = {
  backgroundColor: string | null
}

export const Avatar = styled.div<AvatarStyeldProps>`
  vertical-align: middle;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${palette.page};
  font-size: 0.75rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  white-space: nowrap;
  font-family: 'Noto Sans KR', sans-serif;
`

export const PostBody = styled.p`
  width: 100%;
  margin-left: auto;
  font-family: 'Noto Sans KR', sans-serif;
`

export const NewPostInput = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: 'Noto Sans KR', sans-serif;
  & > .form-rules {
    font-size: 0.75rem;
    line-height: 0.25rem;
    text-align: center;
  }
  & > .writer-name {
    & > input,
    input:focus {
      width: 100%;
      border: none;
      outline: none;
      box-shadow: ${palette.boxshadow};
      padding: 0.5rem;
    }
  }
  & > .body {
    & > textarea,
    textarea:focus {
      width: 100%;
      border: none;
      outline: none;
      box-shadow: ${palette.boxshadow};
    }
  }
`

export const PasswordModalContainer = styled.div`
  background-color: ${palette.page};
  text-align: center;
  padding: 1rem;
  font-family: 'Noto Sans KR', sans-serif;
`

export const PasswordInput = styled.input`
  height: 5%;
  width: 100%;
  font-size: 500%;
  text-align: center;
  border: none;
  outline: none;
  caret-color: transparent;
`
