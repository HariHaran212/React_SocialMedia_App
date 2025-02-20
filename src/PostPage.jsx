import React, { useContext } from 'react'
import PostView from './PostView'
import { useParams } from 'react-router-dom'
import Missing from './Missing'
import DataContext from './context/DataContext'

const PostPage = () => {
  const { posts, handleDelete } = useContext(DataContext)
  const { id } =useParams()
  const post = posts.find(post => (post.id).toString() === id)

  return (
    <main>
      <article>
        {post && <PostView post={post} handleDelete={handleDelete} />
        }
        {!post && <Missing />}
      </article>
    </main>
  )
}

export default PostPage