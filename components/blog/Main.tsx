import React, { ChangeEvent, useEffect, useState } from 'react'
import Post from './Post'
import Form from './Form'
import { PostType } from '../../data/dummyBlogData'
import * as S from '../../styles/global-styled'
import { v4 as uuid } from 'uuid'
import { palette } from '../../styles/globalTheme'
import axios from 'axios'

const Main = () => {
  const [postList, setPostList] = useState<PostType[]>([])

  const [newPost, setNewPost] = useState<PostType>({
    id: '',
    user: '',
    body: '',
    avatarColor: '',
    createdAt: '',
  })

  useEffect(() => {
    getResponse()
  }, [])

  const getResponse = async () => {
    const result = await axios.get('/blog')
    setPostList(result.data)
  }

  const addNewCard = async () => {
    if (!validateForm()) {
      alert('폼을 올바르게 작성해주세요!')
      return
    }
    await axios.post('/blog', newPost, {
      headers: { 'Content-Type': 'text/plain' },
    })
    getResponse()
  }

  function validateForm() {
    if (
      newPost.user.length > 1 &&
      newPost.user.length < 5 &&
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
      {postList &&
        postList.map((post: PostType) => (
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
