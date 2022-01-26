import React from 'react';
import LocationCard from '../location-card/location-card.component';

import './info-card.styles.scss';

const InfoCard = ({ title, items }) => (
  <div className='info-card'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='card'>
      {items.map(({ id, name, price, type, address, mapLink, linkUrl }) => (
          <LocationCard key={id} name={name} price={price} type={type} address={address} mapLink={mapLink} linkUrl={linkUrl} />
        ))}
    </div>
  </div>
);

export default InfoCard;

