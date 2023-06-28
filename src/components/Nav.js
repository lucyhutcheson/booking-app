import React from 'react';

const links = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '/about'
  },
  {
    title: 'Menu',
    url: '/menu'
  },
  {
    title: 'Reservations',
    url: '/booking'
  },
  {
    title: 'Order Online',
    url: '/order'
  },
  {
    title: 'Login',
    url: '/login'
  },
];

const Nav = () => {
  return (
    <nav>
      {links.map((link, i) => (
        <a key={i} href={link.url}>{link.title}</a>
      ))}
    </nav>
  )
}

export default Nav;