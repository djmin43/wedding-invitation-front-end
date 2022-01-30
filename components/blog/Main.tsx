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

  useEffect(() => {
    getPostList()
  }, [])

  useEffect(() => {
    // FIXME: Needs to be refactored. Bad code.
    if (newPost.password.length > 3) {
      const addNewPost = async () => {
        await axios.post('/blog', newPost, {
          headers: { 'Content-Type': 'text/plain' },
        })
        setNewPost(initialNewPostValue)
        getPostList()
        setIsModalOpen(false)
      }
      addNewPost()
    }
  }, [newPost, newPost.password])

  const getPostList = async () => {
    const result = await axios.get('/blog')
    setPostList(result.data)
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
    const { value } = e.target
    setNewPost({
      ...newPost,
      password: value,
    })
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
          <span>비밀번호 4자리를 입력해주세요!</span>
          <input
            type="password"
            inputMode="numeric"
            name="password"
            maxLength={4}
            autoFocus
            value={newPost.password}
            onChange={handlePasswordInput}
            className={passwordInput}
          />
        </div>
      </Dialog>
    </S.PageContainer>
  )
}

const randomColorGenerator = () => {
  const pastelValues = Object.values(palette.pastel)
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
  color: black;
  text-align: center;
`

const passwordInput = css`
  height: 5%;
  width: 100%;
  font-size: 1000%;
  text-align: center;
  border: none;
  outline: none;
  caret-color: transparent;
`

export default Main
