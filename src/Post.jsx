import React from 'react'
import { Link } from 'react-router-dom'
// import { useParams } from 'react-router-dom'

const Post = ({ post }) => {
    // const {id} = useParams()
    return (
    <article className='card m-3 pb-2'>
        <div className="card-body">
            <Link to={`post/${post.id}`}>
                <h2 className='card-title'>{post.title}</h2>
                <p className='fw-light fs-7'>{post.datetime}</p>
            </Link>
            <p className='card-text'>{ 
                (post.body).length <=25 
                    ? post.body
                    : `${(post.body).slice(0,25)}...`
            }
            </p>
        </div>
    </article>
    )
}

export default Post