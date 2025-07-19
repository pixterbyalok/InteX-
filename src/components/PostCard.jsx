import React from 'react'

const PostCard = () => {
  return (
    <div className="bg-white shadow rounded-2xl p-4">
      <div className="font-semibold">Alok Kumar</div>
      <div className="text-sm text-gray-500">@alok</div>
      <img
        className="mt-2 rounded-xl"
        src="https://source.unsplash.com/random/500x300"
        alt="post"
      />
      <p className="mt-2 text-gray-700">Yeh ek sample post hai InteX app ka 😄</p>
    </div>
  )
}

export default PostCard
