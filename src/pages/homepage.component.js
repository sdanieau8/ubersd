import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1> SAN DIEGO </h1>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>BEACHES</h1>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>HISTORIC</h1>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>NIGHT LIFE</h1>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>RESTAURANTS</h1>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>FAMILY</h1>
        </div>
      </div>
    </div>
  </div>
);


export default HomePage;