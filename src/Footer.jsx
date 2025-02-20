import React from 'react'

const Footer = () => {
  const today = new Date()
  return (
    <footer className='d-flex justify-content-center align-items-center bg-body-tertiary w-100 py-2 footer'>
      <p>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer