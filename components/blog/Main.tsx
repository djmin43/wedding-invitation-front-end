import React, { ChangeEvent, useState } from 'react'
import Post from './Post'
import { PostType } from '../../data/dummyBlogData'
import * as S from '../../styles/global-styled'

type BlogMainProps = {
  postList: PostType[]
}

const Main = ({ postList }: BlogMainProps) => {
  const [popsts, setPosts] = useState<PostType[]>(postList)

  const [newPost, setNewPost] = useState<PostType>({
    id: '',
    writerName: '',
    body: '',
    avatarColor: '',
    createdAt: '',
    password: '',
  })

  const addNewCard = (newBlog: PostType) => {
    const newState = [...popsts, newBlog]
    setPosts(newState)
  }

  function handlePostInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setNewPost({ ...newPost, [name]: value })
  }

  return (
    <S.PageContainer>
      <S.PageHeader>축하메세지</S.PageHeader>
      <div>
        <span>이름:</span>
        <input
          type="text"
          value={newPost.writerName}
          name="writerName"
          onChange={handlePostInputChange}
        />
      </div>
      <div>
        <span>축하메세지</span>
        <input
          type="text"
          value={newPost.body}
          name="body"
          onChange={handlePostInputChange}
        />
      </div>
      <div>
        <span>비밀번호</span>
        <input
          type="text"
          inputMode="numeric"
          value={newPost.password}
          onChange={handlePostInputChange}
        />
      </div>

      {newPost.password}
      {popsts.map((post: PostType) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </S.PageContainer>
  )
}

export default Main
