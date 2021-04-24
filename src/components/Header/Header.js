import './header.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className='nav-box'>
      <div className='nav-text-box'>
        <h1 className='nav-title'>Current Climate</h1>
        <p className='nav-overview'>sourcing important climate articles in an easy straightforward way</p>
      </div>
      <Link to='/'>
        <img className='nav-logo' src='/images/logo2.svg' alt='website logo' />
      </Link>
    </header>
  )
}

export default Header;