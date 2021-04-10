import React from 'react'

function Pagination(props) {
  return (
    <div>
      <ul className='pagination justify-content-center'>
        <li className='page-item'>
          <a className='page-link' href='#'>
            Previous
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            1
          </a>
        </li>
        <li className='page-item active'>
          <a className='page-link' href='#'>
            2
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            3
          </a>
        </li>
        <li className='page-item'>
          <a className='page-link' href='#'>
            Next
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Pagination
