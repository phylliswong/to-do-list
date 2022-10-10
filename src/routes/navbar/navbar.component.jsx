import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';

import './navbar.styles.scss';

const Navigationbar = () => {
  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg'>
        <button className='navbar-toggler' type='button' data-toggle='collapse'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse'>
          <Link className='navbar-brand nav-link' to='/home'>
            Logo
          </Link>
          <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/home'>home</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='#'>link</Link>
            </li>
          </ul>
        </div>
        <div>
            <a className='signin-link' href='/sign-in'>sign in</a>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  )
}

export default Navigationbar;
