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
        />
      </div>
      <div className="body">
        <p>축하메세지:</p>
        <textarea
          rows={10}
          value={newPost.body}
          name="body"
          onChange={handlePostInputChange}
        />
      </div>
      <div className="form-rules">
        <p>* 이름은 1 - 4 글자로 작성해주세요!</p>
        <p>* 내용은 10글자 이상 부탁드립니다 :)</p>
      </div>
      <button className="submit-button" onClick={() => submitForm()}>
        축하메세지 남기기
      </button>
    </S.NewPostInput>
  )
}

export default Form
