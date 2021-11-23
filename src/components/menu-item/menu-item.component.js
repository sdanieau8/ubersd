import React from 'react';
import { useNavigate } from 'react-router';
import './menu-item.styles.scss';


const MenuItem = ({ title, imageUrl, linkUrl }) => {
  const navigate = useNavigate();
  return (
    <div
      className='menu-item'
      onClick={() => navigate(linkUrl)}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    >
      <div className='content'>
        <h1 className='title'>{title}</h1>
      </div>
    </div>
  );
};


export default MenuItem;