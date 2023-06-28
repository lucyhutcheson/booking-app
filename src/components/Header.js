import React from 'react';
import logo from '../assets/logo.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className='container flex flex-row justify-between align-center'>
        <a href='/'><img src={logo} alt='Little Lemon logo' /></a>
        <Nav />
      </div>
    </header>
  )
};

export default Header;
