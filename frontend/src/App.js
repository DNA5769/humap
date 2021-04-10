import React, { useEffect, useState } from 'react'
import './App.css'
import 'mapbox-gl/dist/mapbox-gl.css'
import Header from './components/Header'
import Home from './components/Home'
import { useImmer, useImmerReducer } from 'use-immer'
import FlashMessage from './components/FlashMessage'
import StateContext from './StateContext'
import UpdateContext from './UpdateContext'
import { BrowserRouter } from 'react-router-dom'
import Axios from 'axios'
Axios.defaults.baseURL = 'https://humap-app.herokuapp.com/api'

const App = props => {
  const initial = {
    user: {
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      avatar: localStorage.getItem('avatar'),
      userID: localStorage.getItem('userID'),
    },
    flashMessage: [],
    loggedIn: Boolean(localStorage.getItem('name')),
    // loggedIn: localStorage.getItem('username'),
    location: [79.08886, 21.146633],
    currLocation: [79.08886, 21.146633],
  }

  const useReduce = (draft, action) => {
    switch (action.type) {
      case 'Login': {
        draft.loggedIn = true
        draft.user = action.value
        return
      }
      case 'Flash Message': {
        draft.flashMessage.push(action.value)
        return
      }
      case 'Logout': {
        draft.loggedIn = false
        // props.history.push('/')
        return
      }
      case 'setLocation': {
        draft.location = action.value
        return
      }
      case 'setCurrLocation': {
        draft.currLocation = action.value
        return
      }
    }
  }
  const [state, dispatch] = useImmerReducer(useReduce, initial)

  useEffect(() => {
    if (state.loggedIn) {
      localStorage.setItem('email', state.user.email)
      localStorage.setItem('avatar', state.user.avatar)
      localStorage.setItem('name', state.user.name)
      localStorage.setItem('userID', state.user.userID)
    } else {
      localStorage.removeItem('email')
      localStorage.removeItem('avatar')
      localStorage.removeItem('name')
      localStorage.removeItem('userID')
    }
  }, [state.loggedIn])

  return (
    <StateContext.Provider value={state}>
      <UpdateContext.Provider value={dispatch}>
        <BrowserRouter>
          {/* Header component start */}
          <FlashMessage />
          {/* Header component end */}
          <Header />
          {/* Map component start */}
          <Home />

          {/* Map component end */}

          {/* if (distance between location and currLocation is less than LIMIT) */}
          {/* Create Post Component  */}

          {/* Postslist component start */}
          {/* Postlist component end */}
        </BrowserRouter>
      </UpdateContext.Provider>
    </StateContext.Provider>
  )
}

export default App
