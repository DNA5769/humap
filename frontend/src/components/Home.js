import React, { useState, useEffect, useContext } from 'react'
import Pagination from './Pagination'
import Posts from './Posts'
import Map from './Map'
import LoginSignup from './LoginSignup'
import StateContext from '../StateContext'
import UpdateContext from '../UpdateContext'
import Sidebar from './Sidebar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CreatePost from './CreatePost'

function Home(props) {
  const appState = useContext(StateContext)
  const dispatch = useContext(UpdateContext)
  useEffect(() => {
    console.log(appState.loggedIn)
  }, [])

  return (
    <>
      <div className='container-fluid' id='Home'>
        <div className='row'>
          <div className='col-4'>
            <Map />
          </div>
          <div className='col-7point7'>
            <Switch>
              <Route exact path='/'>
                {appState.loggedIn ? <Posts /> : <LoginSignup />}
              </Route>
              <Route path='/create-post'>
                <CreatePost />
              </Route>
            </Switch>
          </div>
          {appState.loggedIn && (
            <div className='sticky-sidebar d-flex col-0point3'>
              <Sidebar />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Home
