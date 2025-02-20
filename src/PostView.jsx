import React from 'react'
import { Link } from 'react-router-dom'

const PostView = ({ post, handleDelete }) => {
  return (
    <div className="card-body m-3">
      <h2 className='card-title'>{post.title}</h2>
      <p className='fw-light fs-7'>{post.datetime}</p>
      <p className='card-text'>{ post.body }
      </p>

      <Link to={`/edit/${post.id}`}>
        <button className='btn btn-primary mx-2'>Edit Post</button>
      </Link>
      
      <button 
        className='btn btn-danger mx-2'
        onClick={() => handleDelete(post.id)}>
        Delete Post
      </button>
    </div>
  )
}

export default PostView