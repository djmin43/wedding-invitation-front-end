import React from 'react'
import { PostType } from './Main'
import * as S from '../../styles/global-styled/index'

type PostProps = {
  post: PostType
}

const Post = ({ post }: PostProps) => {
  return (
    <S.CardWrapper>
      <S.Avatar backgroundColor={post.avatarColor}>
        <span>{post.user}</span>
      </S.Avatar>
      <S.PostBody className="body">{post.body}</S.PostBody>
    </S.CardWrapper>
  )
}

export default Post
