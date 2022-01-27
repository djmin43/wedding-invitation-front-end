import React from 'react'
import { BlogType } from '../../data/dummyBlogData'
import * as S from '../../styles/global-styled/index'

type BlogCardProps = {
  blog: BlogType
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return <S.CardWrapper>{blog.body}</S.CardWrapper>
}

export default BlogCard
