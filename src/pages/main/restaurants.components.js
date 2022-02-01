import React from 'react';

import DirectoryRestaurants from '../../components/directory/directory.restaurants';
import BackButton from '../../components/backbutton/backbutton.component'

import './restaurants.styles.scss';

const RestaurantsPage = () => (
  <div className='beachespage'>
    <BackButton /> 
    <h1 className='pagename'> RESTAURANTS</h1> 
    <DirectoryRestaurants />
  </div>
);


export default RestaurantsPage;

