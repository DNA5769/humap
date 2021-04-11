import React, { useState, useEffect, useContext } from 'react'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'
import UpdateContext from '../UpdateContext'
import StateContext from '../StateContext'

function CreatePost(props) {
  const [title, updateTitle] = useState()
  const [content, updateContent] = useState()
  const [tag, setTag] = useState()
  const [isAnonymous, setIsAnonymous] = useState(false)
  const tags = ['Help Wanted', 'Announcement', 'Emergency', 'Complaint', 'Bored At Home', 'Looking For Alikes', 'Confessions', 'Recommendations', 'Miscellaneous']
  const dispatch = useContext(UpdateContext)
  const appState = useContext(StateContext)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      //using short url :) due to set baseURL
      await Axios.post('/create-post', {
        title,
        content,
        // latitude: 32,
        latitude: appState.location[1],
        // longitude: 33,
        longitude: appState.location[0],
        tag,
        isAnonymous,
        userID: appState.user.userID,
      })
      //redirecting to "/post/someid"
      dispatch({ type: 'flashMessage', value: 'Congo, You created a post' })
      props.history.push(`/`)
      console.log('POST CREATED')
      console.log({ title, content, tag, isAnonymous })
    } catch (e) {
      dispatch({ type: 'flashMessage', value: e.response.data.error })
      console.log(e.response.data)
    }
  }
  useEffect(() => {
    console.log(tag)
  }, [tag])

  useEffect(() => {
    if (!appState.allowPost) {
      props.history.push('/')
      dispatch({ type: 'flashMessage', value: 'Post not allowed outside zone' })
    }
  }, [appState.allowPost])
  return (
    <div className='d-flex h-100 justify-content-center align-items-center'>
      <form className='createpost' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='post-title' className='text-muted mb-1'>
            <small>Title</small>
          </label>
          <input onChange={e => updateTitle(e.target.value)} autoFocus name='title' id='post-title' className='form-control-title' type='text' placeholder='' autoComplete='off' />
          {/* {state.title.hasError && <div className="alert alert-danger liveValidateMessage small">{state.title.message}</div>} */}
        </div>
        <div className='form-group'>
          <label htmlFor='post-body' className='text-muted mb-1 d-block'>
            <small>Body Content</small>
          </label>
          <textarea style={{ height: '20vh' }} onChange={e => updateContent(e.target.value)} name='body' id='post-body' className='body-content' type='text'></textarea>
        </div>
        <label class='form-check-label text-white'>
          <input
            onClick={e => {
              setIsAnonymous(e.target.checked)
              // console.log(e.target.checked)
            }}
            type='checkbox'
            class='form-check-input'
            value=''
          ></input>
          Do you want this posted Anonymously?
        </label>
        <div className='dropdown dropright '>
          <button type='button' className='btn btn-primary dropdown-toggle' data-toggle='dropdown'>
            Tag
          </button>
          <div className='dropdown-menu dropdown-menu-right tagmenu'>
            {tags.map((thistag, index) => {
              return (
                <a onClick={() => setTag(thistag)} className={'dropdown-item' + (tag == thistag ? ' active' : '')} href='#' key={index}>
                  {thistag}
                </a>
              )
            })}
          </div>
        </div>
        {/* <select className='form-select' aria-label='Default select example'>
          <option>Select Tag</option>
          {tags.map((tag, index) => {
            return (
              <option onClick={() => setTag(tag)} key={index}>
                {tag}
              </option>
            )
          })}
        </select> */}
        <div className='text-white-50 mb-2'>
          <small>
            Pro Tip: You can use the{' '}
            <a target='_blank' href='https://www.markdownguide.org/cheat-sheet/'>
              Markdown syntax
            </a>{' '}
            to format your body.
          </small>
        </div>
        <button type='submit' className='btn btn-primary pt-2'>
          Post
        </button>
      </form>
    </div>
  )
}

export default withRouter(CreatePost) //gives access to this.props.history
