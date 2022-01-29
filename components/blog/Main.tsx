import React, { useState } from 'react'
import Post from './Post'
import { PostType } from '../../data/dummyBlogData'
import * as S from '../../styles/global-styled'

type BlogMainProps = {
  postList: PostType[]
}

const Main = ({ postList }: BlogMainProps) => {
  const [popsts, setPosts] = useState<PostType[]>(postList)

  const addNewCard = (newBlog: PostType) => {
    const newState = [...popsts, newBlog]
    setPosts(newState)
  }

  return (
    <S.PageContainer>
      <S.PageHeader>축하메세지</S.PageHeader>
      {popsts.map((post: PostType) => (
        <div key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </S.PageContainer>
  )
}

export default Main
