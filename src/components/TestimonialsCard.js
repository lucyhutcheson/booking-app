import React from 'react';
import star from '../assets/star.png';

const Card = ({ props }) => {
  return (
    <div className='card br-md overflow-hidden bg-white'>
      <div className='flex flex-row align-center'>
        Rating: &nbsp;
        {[...new Array(props.stars)].map((arr, index) => {
        return index < props.stars ? <img key={index} className='star' src={star} alt='star icon' /> : null;
      })}
      </div>
      <div className='image flex flex-row justify-between align-center'>
        <img src={require(`../assets/${props.image}.jpg`)} alt={props.title} />
        <strong>{props.name}</strong>
      </div>
      <div className='text'>
        <p>"{props.review}"</p>
      </div>
    </div>
  )
}

export default Card;