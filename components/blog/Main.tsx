import React, { ChangeEvent, useEffect, useState } from 'react'
import Post from './Post'
import Form from './Form'
import * as S from '../../styles/global-styled'
import { v4 as uuid } from 'uuid'
import { palette } from '../../styles/globalTheme'
import axios from 'axios'
import PasswordModal from '../common/modal/PasswordModal'

export type PostType = {
  id: string
  user: string
  body: string
  avatarColor: string
  createdAt: string
  password: string
}

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [postList, setPostList] = useState<PostType[]>([])

  const [newPost, setNewPost] = useState<PostType>(initialNewPostValue)
  const [password, setPassword] = useState<string>('')
  const [isPasswordValid, setIsPasswordValid] = useState<boolean>(false)

  useEffect(() => {
    getPostList()
  }, [])

  useEffect(() => {
    if (password.length === 4) {
      setIsPasswordValid(true)
      return
    }
    setIsPasswordValid(false)
  }, [password])

  const getPostList = async () => {
    await axios.get('/blog').then((result) => setPostList(result.data))
  }

  const submitForm = () => {
    if (!validateForm(newPost)) {
      alert('폼을 올바르게 작성해주세요!')
      return
    }
    setIsModalOpen(true)
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

  function handlePasswordInput(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  const addNewPost = async () => {
    if (isPasswordValid) {
      const payload = {
        ...newPost,
        password,
      }
      await axios.post('/blog', payload, {
        headers: { 'Content-Type': 'text/plain' },
      })
      setNewPost(initialNewPostValue)
      getPostList()
      setIsModalOpen(false)
    }
  }

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
      <PasswordModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        password={password}
        handlePasswordInput={handlePasswordInput}
        isPasswordValid={isPasswordValid}
        handleSubmit={addNewPost}
      />
    </S.PageContainer>
  )
}

const randomColorGenerator = () => {
  const pastelValues = Object.values(palette.mui)
  return pastelValues[Math.floor(Math.random() * pastelValues.length)]
}

const validateForm = (newPost: PostType) => {
  if (
    newPost.user.length > 1 &&
    newPost.user.length < 5 &&
    newPost.body.length > 10
  ) {
    return true
  }
  return false
}

const initialNewPostValue = {
  id: '',
  user: '',
  body: '',
  avatarColor: '',
  createdAt: '',
  password: '',
}

export default Main
