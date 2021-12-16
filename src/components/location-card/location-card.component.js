import React from 'react';
import './location-card.styles.scss';

const LocationCard = ({ id, name, price, type, address, linkUrl }) =>  (
    <div className='location-card' key={id}>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <span className='type'>{type}</span>
      <span className='address'>{address}</span>
      <a className='linkUrl' href={linkUrl} aria-label='github'>
      Click to learn more!</a>
    </div>
  );
export default LocationCard;