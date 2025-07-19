import React from 'react'
import PostCard from '../components/PostCard'

const Home = () => {
  return (
    <div className="max-w-xl mx-auto p-4 space-y-4">
      {[1, 2, 3, 4, 5].map((post) => (
        <PostCard key={post} />
      ))}
    </div>
  )
}

export default Home
