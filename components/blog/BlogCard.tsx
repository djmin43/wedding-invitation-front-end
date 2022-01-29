import React from 'react'
import { BlogType } from '../../data/dummyBlogData'
import * as S from '../../styles/global-styled/index'

type BlogCardProps = {
  blog: BlogType
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return (
    <S.CardWrapper>
      <S.Avatar backgroundColor={blog.avatarColor}>
        <span>{blog.name}</span>
      </S.Avatar>
      <p className="body">{blog.body}</p>
    </S.CardWrapper>
  )
}

export default BlogCard
