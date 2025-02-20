import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'

import { format } from 'date-fns'
import api from '../api/posts'
import useWindowsize from '../hooks/useWindowsize';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [postTitle, setPostTitle] = useState('')
    const [postBody, setPostBody] = useState('')
    const [editTitle, setEditTitle] = useState('')
    const [editBody, setEditBody] = useState('')
    const [active, setActive] = useState('Home')
    const navigate = useNavigate()
    const { width } = useWindowsize()
    const { data, fetchError, isLoading} = useAxiosFetch('http://localhost:3500/posts')

    useEffect( () => {
        setPosts(data);
    }, [data])



    useEffect( () => {
        const filteredResults = posts.filter(post =>
        ((post.body).toLowerCase()).includes(search.toLowerCase()) ||
        ((post.title).toLowerCase()).includes(search.toLowerCase())
        )
        setSearchResults(filteredResults.reverse())
    }, [posts, search])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const postId = posts.length ? Number(posts[posts.length-1].id)+1 : 1
        const id = String(postId)
        const datetime = format(new Date(), 'MMMM dd, yyyy pp')
        const newPost = { id, title: postTitle, datetime, body: postBody }
        try{
        const response = await api.post('/posts', newPost)
        const allPosts = [...posts, response.data]
        setPosts(allPosts)
        setPostTitle('')
        setPostBody('')
        navigate('/')
        } 
        catch(err) {
        console.log(`Error: ${err.message}`)
        }
    }

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp')
        const updatedPost = { id, title: editTitle, datetime, body: editBody }
        try{
        const response = await api.put(`/posts/${id}`, updatedPost)
        setPosts(posts.map( post => post.id === id ? {...response.data} : post))
        setEditTitle('')
        setEditBody('')
        navigate('/')
        }
        catch (err) {
        console.log(`Error: ${err.message}`)
        }
    }

    const handleDelete = async (id) => {
        try{

        const response = await api.delete(`/posts/${id}`)
        console.log("Post Found:", response.data);
        const newPostList = posts.filter( post => {
            console.log(typeof post.id +' '+ typeof id)
            if(post.id!= id )
            return post});
        console.log(newPostList)
        setPosts(newPostList)
        navigate('/')
        }
        catch(err) {
        console.log(`Error: ${err.message}`)
        }
    }
    return (
        <DataContext.Provider value={{
            width, search, setSearch, active, setActive, 
            searchResults , fetchError, isLoading, 
            handleSubmit, postTitle, setPostTitle, postBody, setPostBody, 
            posts, handleDelete, editTitle, setEditTitle, editBody, 
            setEditBody, handleEdit
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;