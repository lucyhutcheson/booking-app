import React from 'react';
import scooter from '../assets/icon-scooter.svg';

const Card = ({ props }) => {
  return (
    <div className='card br-md overflow-hidden'>
      <img src={require(`../assets/${props.image}.jpg`)} alt={props.title} />
      <div className='details'>
        <div className='heading flex flex-row justify-between align-center'>
          <h4>{props.title}</h4>
          <span className='price'>{props.price}</span>
        </div>
        <p>{props.description}</p>
        <a href='/delivery'>Order a delivery&nbsp;<img src={scooter} className='icon' alt='scooter icon' /></a>
      </div>
    </div>
  )
}

export default Card;