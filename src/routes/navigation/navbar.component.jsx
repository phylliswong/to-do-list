import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../components/contexts/user.context';

import './navbar.styles.scss';

const Navigationbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutUser = () => {
    setCurrentUser(null);
  }
  
  return (
    <Fragment>
      <nav className='navigation-container navbar navbar-fixed-top'>
        <div className='logo-container'>
          <Link className='navbar-brand nav-link' to='/'>
            Logo
          </Link>
        </div>
        <div className='navlinks-container'>
          <Link className='nav-link' to='/home'>home</Link>
          <Link className='nav-link' to='#'>link</Link>
          { currentUser ?
          (
            <Link
              onClick={signOutUser}
              className='signin-link'
              to='/auth'
            >sign out</Link>
          ) : (
            <Link
              className='signin-link'
              to='/auth'
            >sign in</Link> 
          )}
        </div>
      </nav>
      <Outlet />
    </Fragment>
  )
}

export default Navigationbar;
