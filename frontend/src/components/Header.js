import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { Link } from 'react-router-dom'

function Header(props) {
  return (
    <header className='header-bar'>
      <h4 className='my-0 mr-md-auto font-weight-normal text-center'>
        <Link to='/' className='text-white text-center'>
          MAPPA
        </Link>
      </h4>
    </header>
  )
}

export default Header
