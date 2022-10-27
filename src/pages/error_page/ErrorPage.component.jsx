import React from 'react';
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className='all-centered'>
      <div>
        <h1>Feeling lost?</h1>
        <p>Well, we can always find our way if we go back to the root. </p>
        <Link to={'/'}>
          <button className='ui button'>Go Home</button>
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage