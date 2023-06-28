import React from 'react';
import Card from './SpecialsCard';

const specials = [
  {
    image: 'greek-salad',
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. '
  },
  {
    image: 'bruschetta',
    title: 'Bruschetta',
    price: '$ 5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
  },
  {
    image: 'lemon-dessert',
    title: 'Lemon Dessert',
    price: '$ 5.00',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
  }
];

const Specials = () => {
  return (
    <div className='specials container'>
      <div className='heading flex flex-row justify-between align-center'>
        <h2>This week's specials!</h2>
        <a href='/online-menu' className='button'>Online Menu</a>
      </div>
      <div className='card-container flex flex-row justify-between'>
        {specials.map((item) => <Card key={item.image} props={item} />)}
      </div>
    </div>
  )
}

export default Specials;