import React from 'react'

const BlogList = ({posts}) => {
  return (
    <div className='blog-list'>
        {
            posts.map((post) => (
                <div key={post.id} className='blog-card'>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default BlogList;