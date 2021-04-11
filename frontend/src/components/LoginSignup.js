import React, { useContext, useEffect, useRef, useState } from 'react'
import UpdateContext from '../UpdateContext'
import StateContext from '../StateContext'
import Axios from 'axios'

function LoginSignup(props) {
  const dispatch = useContext(UpdateContext)
  const appState = useContext(StateContext)
  const [accountStatus, setAccountStatus] = useState(false)
  const firstinput = useRef(null)

  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  async function handleSignup(e) {
    e.preventDefault()
    // console.log(e.target) //(this) waala method use for vanilla js only, here use e.target
    try {
      await Axios.post('/create-user', {
        name: username,
        password,
        email,
      })
      setAccountStatus(true)
      dispatch({ type: 'flashMessage', value: 'You successfully created an account. Log in now.' })
      console.log('successfully created account')
    } catch (e) {
      dispatch({ type: 'flashMessage', value: e.response.data.error })
      console.log(e.response.data.error)
    }
  }

  useEffect(() => {
    // console.log(firstinput.current)
    firstinput.current.focus()
  }, [accountStatus])

  const handleLogin = async e => {
    e.preventDefault()
    try {
      const response = await Axios.post('/login-user', {
        email,
        password,
      })
      console.log(response)
      dispatch({ type: 'Login', value: response.data })
    } catch (e) {
      dispatch({ type: 'flashMessage', value: e.response.data.error })
      console.log(e.response.data.error)
    }
  }

  function toggleAccountStatus() {
    console.log({ username, password, email })
    // accountStatus ? setAccountStatus(false) : setAccountStatus(true)
    setAccountStatus(accountStatus => !accountStatus)
  }
  return (
    <div>
      {accountStatus ? (
        <div className=''>
          <form style={{marginTop: '50px'}} onSubmit={handleLogin} className='box'>
            <h1>Login</h1>
            <p className='text-muted'> Please enter your login and password!</p>
            <input autoFocus ref={firstinput} onChange={e => setEmail(e.target.value)} type='text' name='' placeholder='E-mail'></input>
            <input onChange={e => setPassword(e.target.value)} type='password' name='' placeholder='Password'></input>
            <input type='submit' name='' value='Login'></input>
            <a onClick={toggleAccountStatus} className='forgot text-muted' href='#'>
              Don't have an account? Sign Up
            </a>
          </form>
        </div>
      ) : (
        <div className=''>
          <form style={{marginTop: '30px'}} onSubmit={handleSignup} className='box'>
            <h1>Signup</h1>
            <p className='text-muted'> Please enter your email, username and create a password!</p>
            <input ref={firstinput} onChange={e => setEmail(e.target.value)} type='text' name='' placeholder='E-mail'></input>
            <input onChange={e => setPassword(e.target.value)} type='password' name='' placeholder='Create password'></input>
            <a type='text' name='' placeholder='E-mail'></a>
            <input autoFocus onChange={e => setUsername(e.target.value)} type='text' name='' placeholder='Username'></input>
            <input type='submit' name='' value='Signup'></input>
            <a onClick={toggleAccountStatus} className='forgot text-muted' href='#'>
              Already have an account? Log In
            </a>
          </form>
        </div>
      )}
    </div>
  )
}

export default LoginSignup
