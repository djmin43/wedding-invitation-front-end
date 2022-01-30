import React, { ChangeEvent } from 'react'
import * as S from '../../styles/global-styled/index'
import { PostType } from './Main'

type FormProps = {
  handlePostInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  newPost: PostType
  submitForm: () => void
}

const Form = ({ handlePostInputChange, newPost, submitForm }: FormProps) => {
  return (
    <S.NewPostInput>
      <div className="writer-name">
        <p>이름:</p>
        <input
          type="text"
          value={newPost.user}
          name="user"
          onChange={handlePostInputChange}
          autoFocus={false}
          maxLength={2}
          placeholder="이름은 2글자로만 작성해주세요! (이름 또는 이니셜)"
        />
      </div>
      <div className="body">
        <p>축하메세지:</p>
        <textarea
          rows={10}
          value={newPost.body}
          name="body"
          onChange={handlePostInputChange}
          autoFocus={false}
        />
      </div>
      <S.BaseButton onClick={() => submitForm()}>
        축하메세지 남기기
      </S.BaseButton>
    </S.NewPostInput>
  )
}

export default Form
