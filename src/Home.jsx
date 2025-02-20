import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from './context/DataContext'

const Home = () => {
  const { searchResults , fetchError, isLoading } = useContext(DataContext)
  return (
    <main className='m-2'>
      {isLoading && <p>Loading posts...</p>}
      {!isLoading && fetchError && <p className='text-danger'>{fetchError}</p>}
      {!isLoading && !fetchError && ( searchResults.length ? (
        <Feed posts={searchResults} />
      ):(
        <p style={{marginTop: '2rem'}}>
          No posts to display
        </p>
      ) )}
    </main>
  )
}

export default Home