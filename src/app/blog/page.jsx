import CardList from '@/components/Cards/CardList/CardList';
import { getPosts } from '@/utils/fetchData';
import React from 'react'

const Blog = async () => {

  const posts = await getPosts();

  return (
    <>
      <CardList posts={posts}/>
    </>
  )
}

export default Blog;