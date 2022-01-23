import App from '../components/App'
import React from 'react'
import { BlogType, blogList } from '../data/dummyBlogData'

type HomePageProps = {
  blogs: BlogType[]
}

const Home = ({ blogs }: HomePageProps) => {
  return <App blogs={blogs} />
}

export async function getStaticProps() {
  const blogs = blogList

  return {
    props: {
      blogs,
    },
  }
}

export default Home
