import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "../public/fonts/bootstrap-icons/font/bootstrap-icons.css";
import '@fontsource/poppins';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
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