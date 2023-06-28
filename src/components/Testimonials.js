import React from 'react';
import Card from './TestimonialsCard';

const ratings = [
  {
    image: 'testimonial-1',
    name: 'Nancy Bush',
    review: 'Loved it!',
    stars: 5
  },
  {
    image: 'testimonial-2',
    name: 'Carmen San Diego',
    review: 'It all tasted great!',
    stars: 4
  },
  {
    image: 'testimonial-3',
    name: 'Chris Lee',
    review: 'Highly recommended!',
    stars: 5
  },
  {
    image: 'testimonial-4',
    name: 'Joe Bush',
    review: 'Always a great time here.',
    stars: 4
  }
];

const Testimonials = () => {
  return (
    <div className='testimonials bg-yellow'>
      <div className='container'>
        <h2 className='text-center'>Testimonials</h2>
        <div className='card-container flex flex-row justify-between'>
          {ratings.map((item) => <Card key={item.image} props={item} />)}
        </div>
      </div>
    </div>
  )
};

export default Testimonials;