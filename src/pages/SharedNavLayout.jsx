import React from 'react';
import {Outlet, NavLink} from 'react-router-dom';

function sharedNavLayout() {
  return (
    <div className="navbar">
        <NavLink to={'/'}>
          <button className='nav-button ui button'>Home</button>
        </NavLink>
    <Outlet />
    </div>
    
  )
}

export default sharedNavLayout