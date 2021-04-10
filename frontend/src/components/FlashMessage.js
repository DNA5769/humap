import React, { useEffect, useContext } from 'react'
import StateContext from '../StateContext'

function FlashMessage(props) {
  const appState = useContext(StateContext)
  return (
    <div className='floating-alerts'>
      {appState.flashMessage.map((msg, index) => {
        return (
          <div key={index} className={'floating-alert text-centre alert shadow-sm alert-info'}>
            {msg}
          </div>
        )
      })}
      {/* <div className={'floating-alert text-centre alert shadow-sm alert-success'}>qfeijeq</div>
      <div className={'floating-alert text-centre alert shadow-sm alert-dark'}>qfeijeq222</div> */}
    </div>
  )
}

export default FlashMessage
