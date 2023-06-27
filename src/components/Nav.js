const links = [
  {
    title: 'Home',
    url: '/'
  },
  {
    title: 'About',
    url: '#'
  },
  {
    title: 'Menu',
    url: '#'
  },
  {
    title: 'Reservations',
    url: '#'
  },
  {
    title: 'Order Online',
    url: '#'
  },
  {
    title: 'Login',
    url: '#'
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