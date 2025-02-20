import React, { useContext } from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'
import DataContext from './context/DataContext'

const Header = ({ title }) => {
  const {width} = useContext(DataContext)
  return (
    <header className='card-header w-100 d-flex justify-content-between m-2'>
      <h1>{title}</h1>
      <div className="my-2 mx-3">
        {width < 768 ? <FaMobileAlt />
          : width < 992 ? <FaTabletAlt />
            : <FaLaptop />}
      </div>
    </header>
  )
}

export default Header