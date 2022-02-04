import React, { ChangeEvent, useEffect, useState } from 'react'
import Post from './Post'
import Form from './Form'
import * as S from '../../styles/global-styled'
import { palette } from '../../styles/globalTheme'
import axios from 'axios'

export type PostType = {
  id: string
  user: string
  body: string
  avatarColor: string
  createdAt: string
}

const Main = () => {
  const [postList, setPostList] = useState<PostType[]>([])

  const [newPost, setNewPost] = useState<PostType>(emptyPostValue)

  useEffect(() => {
    getPostList()
  }, [])

  const getPostList = async () => {
    await axios.get('/blog').then((result) => setPostList(result.data))
  }

  const submitForm = () => {
    if (newPost.user.length !== 2) {
      alert('이름을 2글자로 작성해주세요!')
      return
    }
  }

  function handlePostInputChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setNewPost({
      ...newPost,
      avatarColor: randomColorGenerator(),
      [e.target.name]: e.target.value,
    })
  }

  // const addNewPost = async () => {
  //   const payload = {
  //     ...newPost,
  //   }
  //   await axios.post('/blog', payload)
  //   setNewPost(emptyPostValue)
  //   getPostList()
  // }

  return (
    <S.PageContainer>
      <S.PageHeader>축하메세지</S.PageHeader>
      <Form
        handlePostInputChange={handlePostInputChange}
        newPost={newPost}
        submitForm={submitForm}
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
  const pastelValues = Object.values(palette.mui)
  return pastelValues[Math.floor(Math.random() * pastelValues.length)]
}

const emptyPostValue = {
  id: '',
  user: '',
  body: '',
  avatarColor: '',
  createdAt: '',
  password: '',
}

export default Main
