import { useContext } from "react"
import { Link, useParams } from "react-router-dom"
import DataContext from "./context/DataContext"

const Nav = () => {
  const {search, setSearch, active, setActive} = useContext(DataContext)
  return (
    <nav className="navbar navbar-expand bg-body-tertiary w-100">
      <div className="row">
        <div className="col">
          <ul className="navbar-nav d-flex justify-content-between align-items-center w-50 mt-2">
            <li 
              className={'nav-link nav-tab '+(active == 'Home' ? 'active' : '')}
              onClick={() => setActive('Home')}>
                <Link to='/'>Home</Link>
            </li>
            <li 
              className={'nav-link nav-tab '+(active == 'Post' ? 'active' : '')}
              onClick={() => setActive('Post')}>
                <Link to='/post'>Post</Link>
            </li>
            <li 
              className={'nav-link nav-tab '+(active == 'About' ? 'active' : '')}
              onClick={() => setActive('About')}>
                <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <form className="mt-2" onSubmit={
            (e) => e.preventDefault()}>
            <label htmlFor="search" className="hidden">Search Posts</label>
            <input 
              type="search" 
              name="search" 
              className="form-control m-2"
              id="search" 
              placeholder="search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              />
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Nav