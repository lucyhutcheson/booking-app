import logo from '../assets/logo.svg';
import Nav from './Nav';

const Header = () => {
  return (
    <header>
      <div className='container flex flex-row justify-between align-center'>
        <img src={logo} alt='Little Lemon logo' />
        <Nav />
      </div>
    </header>
  )
};

export default Header;
