import heroImage from '../assets/hero.jpg';

const Hero = () => {
  return (
    <div className='hero relative'>
      <div className='container flex flex-row'>
        <div className='text'>
          <h1 className='yellow'>Little Lemon</h1>
          <h2 className='white'>Chicago</h2>
          <p className='lead white'>
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <a href='/booking' className='button'>Reserve a Table</a>
        </div>
        <div>
          <img src={heroImage} alt='restaurant food' className='br-md' />
        </div>
      </div>
    </div>
  )
}

export default Hero;