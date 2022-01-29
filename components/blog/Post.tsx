import React from 'react'
import { PostType } from '../../data/dummyBlogData'
import * as S from '../../styles/global-styled/index'

type PostProps = {
  post: PostType
}

const Post = ({ post }: PostProps) => {
  return (
    <S.CardWrapper>
      <S.Avatar backgroundColor={post.avatarColor}>
        <span>{post.name}</span>
      </S.Avatar>
      <p className="body">{post.body}</p>
    </S.CardWrapper>
  )
}

export default Post
