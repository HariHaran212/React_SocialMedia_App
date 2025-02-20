import React, { useContext } from 'react'
import DataContext from './context/DataContext'

const Header = ({ title }) => {
  const {width} = useContext(DataContext)
  return (
    <header className='card-header w-100 d-flex justify-content-between m-2'>
      <h1>{title}</h1>
      <div className="my-2 mx-3">
        {width < 768 ? <i className="bi bi-phone"></i>
          : width < 992 ? <i className="bi bi-tablet"></i>
            : <i className="bi bi-laptop"></i>}
      </div>
    </header>
  )
}

export default Header