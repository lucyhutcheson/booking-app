import React from 'react';
import Nav from './Nav';
import logo from '../assets/logo-footer.png';

const socialLinks = [
  {
    title: 'Facebook',
    url: 'https://facebook.com'
  },
  {
    title: 'Instagram',
    url: 'https://instagram.com'
  },
  {
    title: 'TikTok',
    url: 'https://tiktok.com'
  }
]

const Footer = () => {
  return (
    <footer>
      <div className='container flex flex-row justify-around align-start'>
        <div>
          <a href='/'><img src={logo} alt="Little Lemon logo" /></a>
        </div>
        <div>
          <h4>Doormat Navigation</h4>
          <Nav />
        </div>
        <div>
          <h4>Contact</h4>
          <p>123 Main St<br/>City, ST 12345</p>
          <p>(123) 456-7890</p>
          <p><a href='mailto:hello@littlelemon.com'>hello@littlelemon.co</a></p>
        </div>
        <div className='social'>
          <h4>Social Media Links</h4>
          {socialLinks.map((link, i) => <a key={i} href={link.url}>{link.title}</a>)}
        </div>
      </div>
    </footer>
  )
};

export default Footer;