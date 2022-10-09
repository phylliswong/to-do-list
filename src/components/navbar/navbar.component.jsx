import './navbar.styles.scss';

const Navigationbar = () => {
  return (
    <nav className='navbar navbar-expand-lg'>
      <button className='navbar-toggler' type='button' data-toggle='collapse'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse'>
        <a className='navbar-brand' href='#'>Logo</a>
        <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
          <li className='nav-item active'>
            <a className='nav-link' href='#'>home</a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>link</a>
          </li>
        </ul>
      </div>
      <div>
          <a className='signin-link'>sign in</a>
        </div>
    </nav>
  )
}

export default Navigationbar;
