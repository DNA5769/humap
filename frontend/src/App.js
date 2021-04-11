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
Axios.defaults.baseURL = 'http://localhost:5000/api'

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
    allowPost: true,
  }

  const useReduce = (draft, action) => {
    switch (action.type) {
      case 'Login': {
        draft.loggedIn = true
        draft.user = action.value
        return
      }
      case 'flashMessage': {
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
      case 'setAllowPost': {
        draft.allowPost = action.value
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

  useEffect(() => {
    let p = Math.PI / 180
    let a = 0.5 - Math.cos((state.currLocation[1] - state.location[1]) * p) / 2 + (Math.cos(state.location[1] * p) * Math.cos(state.currLocation[1] * p) * (1 - Math.cos((state.currLocation[0] - state.location[0]) * p))) / 2
    let dist = 12742 * Math.asin(Math.sqrt(a))
    dispatch({ type: 'setAllowPost', value: dist < 2 })
    dist > 2 && dispatch({ type: 'flashMessage', value: 'You moved outside your zone, commenting/posting disabled now' })
  }, [state.currLocation])

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
