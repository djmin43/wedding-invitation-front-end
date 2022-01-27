import React from 'react'
import BlogCard from './BlogCard'
import { BlogType } from '../../data/dummyBlogData'
import * as S from '../../styles/global-styled'

type BlogMainProps = {
  blogs: BlogType[]
}

const BlogMain = ({ blogs }: BlogMainProps) => {
  return (
    <S.PageContainer>
      <S.PageHeader>게시판</S.PageHeader>
      {blogs.map((blog: BlogType) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </S.PageContainer>
  )
}

export default BlogMain
