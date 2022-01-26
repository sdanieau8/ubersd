import React from 'react';
import LocationCardPhoto from '../location-card/location-card-photo.component';

import './info-card.styles.scss';

const InfoCardPhoto = ({ title, items }) => (
  <div className='info-card'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='card'>
      {items.map(({ id, name, price, type, address, mapLink, linkUrl, imageUrl }) => (
          <LocationCardPhoto key={id} name={name} price={price} type={type} address={address} mapLink={mapLink} linkUrl={linkUrl} imageUrl={imageUrl} />
        ))}
    </div>
  </div>
);

export default InfoCardPhoto;

