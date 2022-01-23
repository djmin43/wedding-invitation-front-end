import App from '../components/App'
import React from 'react'
import { BlogType, blogList } from '../data/dummyBlogData'

type HomePageProps = {
  blogProps: BlogType[]
}

const Home = ({ blogProps }: HomePageProps) => {

  return (
    <App blogProps={blogProps} />
  )
}

export async function getStaticProps() {

  const blogProps = blogList

  return {
    props: {
      blogProps
    },
  }
}


export default Home
