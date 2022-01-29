import React, { ChangeEvent, useState } from 'react'
import Post from './Post'
import Form from './Form'
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
    if (!validateForm()) {
      alert('폼을 올바르게 작성해주세요!')
      return
    }
    setPosts(newState)
  }

  function validateForm() {
    if (
      newPost.writerName.length > 1 &&
      newPost.writerName.length < 5 &&
      newPost.body.length > 10
    ) {
      return true
    }
    return false
  }

  function handlePostInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value, name } = e.target
    const id: string = uuid()
    setNewPost({
      ...newPost,
      id,
      avatarColor: randomColorGenerator(),
      [name]: value,
    })
  }

  return (
    <S.PageContainer>
      <S.PageHeader>축하메세지</S.PageHeader>
      <Form
        handlePostInputChange={handlePostInputChange}
        newPost={newPost}
        addNewCard={addNewCard}
      />
      {posts.map((post: PostType) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </S.PageContainer>
  )
}

const randomColorGenerator = () => {
  const pastelValues = Object.values(palette.pastel)
  return pastelValues[Math.floor(Math.random() * pastelValues.length)]
}

export default Main
