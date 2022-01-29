import React, { ChangeEvent } from 'react'
import * as S from '../../styles/global-styled/index'
import { PostType } from '../../data/dummyBlogData'

type FormProps = {
  handlePostInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void
  newPost: PostType
  addNewCard: () => void
}

const Form = ({ handlePostInputChange, newPost, addNewCard }: FormProps) => {
  return (
    <S.NewPostInput>
      <div className="writer-name">
        <p>이름:</p>
        <input
          type="text"
          value={newPost.writerName}
          name="writerName"
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
      <button className="submit-button" onClick={() => addNewCard()}>
        축하메세지 남기기
      </button>
    </S.NewPostInput>
  )
}

export default Form
