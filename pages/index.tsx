import App from '../components/App'
import React from 'react'
import { PostType, postList } from '../data/dummyBlogData'

type HomePageProps = {
  postList: PostType[]
}

const Home = ({ postList }: HomePageProps) => {
  return <App postList={postList} />
}

export async function getStaticProps() {
  return {
    props: {
      postList,
    },
  }
}

export default Home
