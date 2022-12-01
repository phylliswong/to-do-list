import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './landing.styles.scss';

const Landing = () => {
  const navigateToHome = () => {
    // console.log(navigateToHome)
  }

  return (
    <Fragment>
      <div className='landing-button-wrapper'>
        <Link
          to='/home'
          onClick={navigateToHome}
          className='navigate-home-btn btn btn-lg btn-success'
        >
          View Tasks
        </Link>
      </div>
    </Fragment>
  )
};

export default Landing;
