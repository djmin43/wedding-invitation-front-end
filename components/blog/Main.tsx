import React, { ChangeEvent, useState } from 'react'
import Post from './Post'
import { PostType } from '../../data/dummyBlogData'
import * as S from '../../styles/global-styled'
import { v4 as uuid } from 'uuid'

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
    password: '',
  })

  const addNewCard = () => {
    const newState = [...posts, newPost]
    setPosts(newState)
    console.log(posts)
  }

  function handlePostInputChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    const id: string = uuid()
    setNewPost({ ...newPost, id, [name]: value })
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
      <button onClick={() => addNewCard()}>add new post</button>
      {posts.map((post: PostType) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </S.PageContainer>
  )
}

export default Main
