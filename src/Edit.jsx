import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from './context/DataContext'

const Edit = () => {
    const { posts, editTitle, setEditTitle, editBody, setEditBody, handleEdit, handleDelete} = useContext(DataContext)
    const { id } = useParams()
    const post = (posts.filter( post => post.id === id ))[0]

    useEffect( () => {
        if( post ){
            setEditTitle(post.title)
            setEditBody(post.body)
        }
    }, [post, setEditTitle, setEditBody])

    return (
        <main className='container'>
            {editTitle && 
                <>
                    <h2>Edit Post</h2>

                    <form className='form' onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input 
                            id='postTitle'
                            type='text'
                            className='form-control'
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            required
                            />
                            
                        <label htmlFor="postBody">Post:</label>
                        <textarea
                            id="postBody"
                            className='form-control'
                            value={editBody}
                            onChange={(e) => setEditBody(e.target.value)}
                            required
                            />

                        <div className="d-flex justify-content-center my-3">
                            <button 
                                type='submit'
                                className='btn btn-primary mx-2'
                                onClick={() => handleEdit(post.id)}
                                >
                                Save Changes
                            </button>
                            
                            <button 
                                className='btn btn-danger mx-2'
                                onClick={() => handleDelete(post.id)}>
                                Delete Post
                            </button>
                        </div>
                    </form>
                </>
            }
        </main>
    )
}

export default Edit