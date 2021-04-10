import React, { useEffect, useContext } from 'react'
import StateContext from '../StateContext'

function FlashMessage(props) {
  const appState = useContext(StateContext)
  return (
    <div className='floating-alerts'>
      {appState.flashMessage.map((msg, index) => {
        return (
          <div key={index} className={'floating-alert text-centre alert shadow-sm alert-success'}>
            {msg}
          </div>
        )
      })}
    </div>
  )
}

export default FlashMessage
