import { use, useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "../public/fonts/bootstrap-icons/font/bootstrap-icons.css";
import '@fontsource/poppins';  // Defaults to 400 weight (regular)
import '@fontsource/poppins/400.css'; // Import specific weight
import '@fontsource/poppins/600.css'; // Import bold weight
import './App.css'

import Header from './Header'
import Nav from './Nav'
import Home from './Home'
import NewPost from './NewPost'
import PostPage from './PostPage'
import Post from './Post'
import About from './About'
import Missing from './Missing'
import Footer from './Footer'
import { Routes, Route } from 'react-router-dom'
import Edit from './Edit';
import { DataProvider } from './context/DataContext';

function App() {

  return (
    <div className='App'>
      {/* <nav>
        <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/postpage'>Post Page</Link></li>
        </ul>
      </nav> */}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/postpage' element={<PostLayout />}>
          <Route index element={<PostPage />} />
          <Route path=':id' element={<Post />} />
          <Route path='newpost' element={<NewPost />} />
        </Route>
        <Route path='*' element={<Missing />} />
      </Routes> */}
      <DataProvider>
        <Header title='Link Sphere'/>
        <Nav />
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='post' >
                <Route index element={<NewPost />} />
                <Route path=':id' element={<PostPage />} />
            </Route>
            <Route 
                  path='/edit/:id' 
                  element={<Edit />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<Missing />} />
          </Routes>
        </div>
        <Footer />
      </DataProvider>
    </div>
  )
}

export default App

// npx json-server -p 3500 -w data/db.json i want to deploy a json file that returns a json formatted