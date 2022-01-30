import React, { SetStateAction, Dispatch, ChangeEvent } from 'react'
import Dialog from '@mui/material/Dialog'
import * as S from '../../../styles/global-styled/index'

type PasswordModalProps = {
  isModalOpen: boolean
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  password: string
  handlePasswordInput: (e: ChangeEvent<HTMLInputElement>) => void
  isPasswordValid: boolean
  handleSubmit: () => void
}

const PasswordModal = ({
  isModalOpen,
  setIsModalOpen,
  password,
  handlePasswordInput,
  isPasswordValid,
  handleSubmit,
}: PasswordModalProps) => {
  return (
    <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <S.PasswordModalContainer>
        <span>비밀번호 4자리를 입력해주세요</span>
        <S.PasswordInput
          type="password"
          inputMode="numeric"
          name="password"
          maxLength={4}
          autoFocus
          value={password}
          onChange={handlePasswordInput}
        />
        {isPasswordValid && (
          <S.BaseButton onClick={handleSubmit}>확인</S.BaseButton>
        )}
      </S.PasswordModalContainer>
    </Dialog>
  )
}

export default PasswordModal
