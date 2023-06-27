import ownerImg1 from '../assets/owners-1.jpg';
import ownerImg2 from '../assets/owners-2.jpg';

const About = () => {
  return (
    <section className='about'>
      <div className='container flex flex-row justify-between align-center'>
        <div className='text'>
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
        </div>
        <div className='images flex flex-row align-center'>
          <img src={ownerImg1} className='image-1' alt='owners working hard in the kitchen' />
          <img src={ownerImg2} className='image-2' alt='owners standing in the restaurant' />
        </div>
      </div>
    </section>
  )
};

export default About;