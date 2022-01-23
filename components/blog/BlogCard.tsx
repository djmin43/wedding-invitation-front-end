import React from 'react'
import { BlogType } from '../../data/dummyBlogData'

type BlogCardProps = {
  blog: BlogType
}

const BlogCard = ({ blog }: BlogCardProps) => {
  return <div>{blog.body}</div>
}

export default BlogCard
