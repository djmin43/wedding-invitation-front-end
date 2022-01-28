import React from 'react'
import { BlogType } from '../../data/dummyBlogData'
import * as S from '../../styles/global-styled/index'

type BlogCardProps = {
  blog: BlogType
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return <S.CardWrapper>
    <span>{blog.name}</span>
    <span>{blog.createdAt} </span>
    <p>{blog.body}</p>
  </S.CardWrapper>
}

export default BlogCard
