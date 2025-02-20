import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const NewPost = () => {
  const { handleSubmit, postTitle, setPostTitle, postBody, setPostBody }  =useContext(DataContext)
  return (
    <main className='container'>
      <h2>New Post</h2>
      <form className='form' onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input 
          id='postTitle'
          type='text'
          className='form-control'
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
          required
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          className='form-control'
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          required
        />

        <div className="d-flex justify-content-center">
          <button 
            type='submit'
            className='btn btn-primary my-2'
            >
            Submit
          </button>
        </div>
      </form>
    </main>
  )
}

export default NewPost