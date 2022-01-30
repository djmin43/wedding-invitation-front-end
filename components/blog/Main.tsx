import React, { ChangeEvent, useEffect, useState } from 'react'
import Post from './Post'
import Form from './Form'
import * as S from '../../styles/global-styled'
import { v4 as uuid } from 'uuid'
import { palette } from '../../styles/globalTheme'
import axios from 'axios'
import Dialog from '@mui/material/Dialog'
import { css } from '@emotion/css'

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
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className={sampleModal}>
          <span>비밀번호 4자리를 입력해주세요</span>
          <input
            type="password"
            inputMode="numeric"
            name="password"
            maxLength={4}
            autoFocus
            value={password}
            onChange={handlePasswordInput}
            className={passwordInput}
          />
          {isPasswordValid && (
            <S.BaseButton onClick={addNewPost}>작성완료</S.BaseButton>
          )}
        </div>
      </Dialog>
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

const sampleModal = css`
  background-color: #fff;
  text-align: center;
  padding: 1rem;
  font-family: 'Noto Sans KR', sans-serif;
`

const passwordInput = css`
  height: 5%;
  width: 100%;
  font-size: 500%;
  text-align: center;
  border: none;
  outline: none;
  caret-color: transparent;
`

export default Main
