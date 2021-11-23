import React from 'react';

import './info-card.styles.scss';

const InfoCard = ({ name, imageUrl, address, notes }) => (
  <div
    className='info-card'
    style={{
      backgroundImage: `url(${imageUrl})`
    }}
  >
    <div className='content'>
      <h1 className='name'>{name}</h1>
      <h2 className='address'>{address}</h2>
      <h2 className='notes'>{notes}</h2>
    </div>
  </div>
);

export default InfoCard;