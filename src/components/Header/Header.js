import './header.css';
import React from 'react';

const Header = () => {

  return (
    <header className='nav-box'>
      <div className='nav-text-box'>
        <h1 className='nav-title'>Current Climate</h1>
        <p className='nav-overview'>sourcing important climate articles in an easy straightforward way.</p>
      </div>
      <img className='nav-logo' src='/images/logo2.svg' alt='website logo' />
    </header>
  )
}

export default Header;