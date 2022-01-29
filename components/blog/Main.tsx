import React, { ChangeEvent, useState } from 'react'
import Post from './Post'
import { PostType } from '../../data/dummyBlogData'
import * as S from '../../styles/global-styled'
import { v4 as uuid } from 'uuid'
import { palette } from '../../styles/globalTheme'

type BlogMainProps = {
  postList: PostType[]
}

const Main = ({ postList }: BlogMainProps) => {
  const [posts, setPosts] = useState<PostType[]>(postList)

  const [newPost, setNewPost] = useState<PostType>({
    id: '',
    writerName: '',
    body: '',
    avatarColor: '',
    createdAt: '',
  })

  const addNewCard = () => {
    const newState = [...posts, newPost]
    validateEmptyForm()
    setPosts(newState)
  }

  function handlePostInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = e.target.value
    const name = e.target.name
    const id: string = uuid()
    const pastelValues = Object.values(palette.pastel)
    const newAvatarColor =
      pastelValues[Math.floor(Math.random() * pastelValues.length)]
    setNewPost({ ...newPost, id, avatarColor: newAvatarColor, [name]: value })
  }

  function validateEmptyForm() {
    if (newPost.writerName.length < 2) {
      alert('이름을 올바르게 입력해주세요(한글자 노노)')
    }
    if (newPost.body.length < 10) {
      alert('내용을 조금만 더 작성해주세요! (10글자 이상)')
    }
  }

  return (
    <S.PageContainer>
      <S.PageHeader>축하메세지</S.PageHeader>
      <S.NewPostInput>
        <div className="writer-name">
          <span>이름:</span>
          <input
            type="text"
            value={newPost.writerName}
            name="writerName"
            onChange={handlePostInputChange}
          />
        </div>
        <div className="body">
          <span>축하메세지:</span>
          <textarea
            rows={10}
            value={newPost.body}
            name="body"
            onChange={handlePostInputChange}
          />
        </div>
        <button className="submit-button" onClick={() => addNewCard()}>
          축하메세지 남기기
        </button>
      </S.NewPostInput>
      {posts.map((post: PostType) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </S.PageContainer>
  )
}

export default Main
