import React, { useContext, useEffect, useRef, useState } from 'react'
import Axios from 'axios'
import StateContext from '../StateContext'
import UpdateContext from '../UpdateContext'

function Posts(props) {
  const appState = useContext(StateContext)
  const dispatch = useContext(UpdateContext)
  const tags = ['All', 'Help Wanted', 'Announcement', 'Emergency', 'Complaint', 'Bored At Home', 'Looking For Alikes', 'Confessions', 'Recommendations', 'Miscellaneous']
  const [comment, updateComment] = useState()
  const commentbar = useRef(null)

  const [filterTag, setFilterTag] = useState('All')
  const [posts, setPosts] = useState([])
  const [page, setPage] = useState(1)
  const postbox = useRef(null)
  const [postsCount, setPostsCount] = useState(0)

  async function getPosts() {
    try {
      const response = await Axios.post(`/get-posts?limit=3&page=${page}`, {
        latitude: appState.currLocation[1],
        longitude: appState.currLocation[0],
        tag: filterTag,
      })
      console.table(response.data)
      setPosts(response.data)
    } catch (e) {
      console.log('error getting posts', e.response.data)
    }
  }
  async function getPostsCount() {
    try {
      const response = await Axios.post('/get-posts-length', {
        latitude: appState.currLocation[1],
        longitude: appState.currLocation[0],
        tag: filterTag,
      })
      setPostsCount(response.data.length)
    } catch (e) {
      console.log('error getting post count', e.response.data)
    }
  }

  useEffect(() => {
    getPosts()
  }, [page])

  useEffect(() => {
    getPosts()
    getPostsCount()
  }, [filterTag])

  useEffect(() => {
    if (appState.currLocation != appState.location) {
      getPosts()
      getPostsCount()
    }
    // dispatch({ type: 'flashMessage', value: 'hello' })
  }, [appState.currLocation])

  const handleComment = async e => {
    e.preventDefault()
    try {
      await Axios.post('/create-comment', {
        userID: appState.user.userID,
        postID: e.target.dataset.post,
        content: comment,
      })
      updateComment('')
      e.target.value = ''
      console.log('comment created')
      getPosts()
      // console.log(commentbar.current.dataset.post)
    } catch (error) {
      dispatch({ type: 'flashMessage', value: error.response.data.error })
      console.log(e.target.dataset.post)
      console.log('ERROR commenting', error.response.data)
      // console.log('ERROR commenting')
    }
    // console.log(commentbar.current.dataset)
    // console.log(comment)
    // console.log(appState.user)
  }

  async function handlePageChange(e) {
    setPage(e.target.dataset.page)

    // console.log(e.target.dataset.page)
  }
  const pageElement = []
  for (let i = 1; i <= parseInt(postsCount / 3) + 1; i++) {
    pageElement.push(
      <li onClick={handlePageChange} data-page={i} key={i} className='page-item'>
        <a data-page={i} className='page-link' href='#'>
          {i}
        </a>
      </li>
    )
  }

  return (
    <>
      <div className='container container--narrow py-md-4'>
        <h2 onClick={() => console.log(appState.flashMessage)} className='text-center text-white'>
          ACTIVITY NEAR YOU
        </h2>{' '}
        <div className='dropdown'>
          <button style={{position: 'absolute', right: 0, bottom: '5px'}} type='button' className='btn btn-primary dropdown-toggle' data-toggle='dropdown'>
            Filter with tags
          </button>
          <div className='dropdown-menu'>
            {tags.map((thistag, index) => {
              return (
                <a onClick={() => setFilterTag(thistag)} className={'dropdown-item' + (filterTag == thistag ? ' active' : '')} href='#' key={index}>
                  {thistag}
                </a>
              )
            })}
          </div>
        </div>{' '}
      </div>

      {/* POSTS */}
      <div className='ml-2 list-group list-group-flush' id='postscontainer'>
        {posts.map((post, index) => {
          const date = new Date(post.createdAt)
          const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
          return (
            <div key={index}>
              <a
                href='#'
                ref={postbox}
                // onClick={() => console.log(postbox.current.dataset)}
                data-toggle='collapse'
                data-target={'#id' + post.postID}
                className='list-group-item post rounded'
              >
                <img className='avatar-tiny' src={post.isAnonymous ? 'https://st4.depositphotos.com/1000507/24488/v/600/depositphotos_244889634-stock-illustration-user-profile-picture-isolate-background.jpg' : post.avatar} />
                <strong className='text-white'>{post.title}</strong>{' '}
                <strong className='text-white-50'>
                  by {post.isAnonymous ? 'anonymous' : post.author} on {formattedDate}{' '}
                </strong>
                <span className='tag'>{post.tag}</span>
                <div className='body-content'> {post.content} </div>
                <span className='badge badge-primary badge-pill align-items-center'>
                  <i className='fas fa-comment'></i> {post.comments.length}
                </span>
              </a>

              {/* comment */}
              <div id={'id' + post.postID} className='list-group collapse'>
                {post.comments.map((comment, index) => (
                  <div key={index}>
                    <div className='list-group-item comment rounded'>
                      <strong>{comment.author}</strong>
                      {'  '}
                      {comment.content}
                    </div>
                  </div>
                ))}
                {appState.allowPost && (
                  <div className='list-group-item comment rounded '>
                    <form data-post={post.postID} onSubmit={handleComment}>
                      <input
                        // ref={commentbar}
                        data-post={post.postID}
                        // onChange={e => updateComment(commentbar.current.value)}
                        onChange={e => updateComment(e.target.value)}
                        autoFocus
                        name='title'
                        id='commentInput'
                        type='text'
                        placeholder='Comment'
                        autoComplete='off'
                      />
                      <input type='submit' name='' value='Comment' href='#'></input>
                    </form>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Paginate */}
      <div>
        <ul className='pagination justify-content-center'>
          <li className='page-item'>
            <a className='page-link' href='#'>
              Previous
            </a>
          </li>
          {pageElement}
          <li className='page-item'>
            <a className='page-link' href='#'>
              Next
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Posts
