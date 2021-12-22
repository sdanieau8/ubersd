import React from 'react';

import DirectoryRestaurants from '../../components/directory/directory.restaurants';
import Homebutton from '../../components/homebutton/homebutton.component';

import './restaurants.styles.scss';

const RestaurantsPage = () => (
  <div className='beachespage'>
    <Homebutton /> 
    <h1 className='pagename'> RESTAURANTS</h1> 
    <DirectoryRestaurants />
  </div>
);


export default RestaurantsPage;

