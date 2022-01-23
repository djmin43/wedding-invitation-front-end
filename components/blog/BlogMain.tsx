import React, { useState, useEffect } from 'react'
import BlogCard from './BlogCard'
import { BlogType } from '../../data/dummyBlogData'
import * as S from '../../styles/global-styled'

type BlogMainProps = {
  blogs: BlogType[]
}

const BlogMain = ({ blogs }: BlogMainProps) => {
  const [blogList, setBlogList] = useState<BlogType[]>(blogs)

  useEffect(() => {
    setBlogList(blogs)
  }, [])

  return (
    <S.PageContainer>
      {blogList.map((blog: BlogType) => (
        <div key={blog.id}>
          <BlogCard blog={blog} />
        </div>
      ))}
    </S.PageContainer>
  )
}

export default BlogMain
