import React from 'react';
import './location-card.styles.scss';

const LocationCardPhoto = ({ id, name, price, type, address, mapLink, linkUrl, imageUrl }) =>  (
    <div className='location-card' key={id}>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
      <span className='type'>{type}</span>
      <a className='address' href={mapLink} aria-label='address'>{address}</a>
      <a className='linkUrl' href={linkUrl} aria-label='company-page'>
      Click to learn more!</a>
      <div className='imageUrl'
      style={{
        backgroundImage: `url(${imageUrl})`}}></div>
    </div>
  );
export default LocationCardPhoto;