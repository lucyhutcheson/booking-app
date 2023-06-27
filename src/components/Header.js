import logo from '../assets/Logo.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <img src={logo} alt='Little Lemon logo' />
      <Nav />
    </header>
  )
};

export default Header;
