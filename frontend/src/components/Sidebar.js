import React, { useContext } from 'react'
import { BrowserRouter, Link, withRouter } from 'react-router-dom'
import StateContext from '../StateContext'
import UpdateContext from '../UpdateContext'

function Sidebar(props) {
  const dispatch = useContext(UpdateContext)
  const appState = useContext(StateContext)
  return (
    <div className='sticky-top'>
      <div className='nav flex-column'>
        <Link to={'/create-post'} className='nav-link'>
          {/* <i className='fa fa-plus-circle plus' aria-hidden='true'></i> */}
          <svg xmlns='http://www.w3.org/2000/svg' width='40' height='40' fill='#2ecc71' className='bi bi-plus-circle plus' viewBox='0 0 16 16'>
            <path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
            <path d='M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z' />
          </svg>
        </Link>

        {/* <a href='#_' className='nav-link'>
          Link
        </a> */}
        <Link to={'/'} className='nav-link'>
          <img className='avatar-small' src={appState.user.avatar} />
        </Link>
        <a onClick={() => dispatch({ type: 'Logout' })} href='#_' className='nav-link'>
          <i className='fa fa-sign-out-alt fa-lg pl-2' style={{ color: '#c62b28' }} aria-hidden='true'></i>
        </a>
      </div>
    </div>
  )
}

export default withRouter(Sidebar)
