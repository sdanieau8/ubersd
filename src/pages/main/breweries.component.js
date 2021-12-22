import React from 'react';

import DirectoryBreweries from '../../components/directory/directory.breweries';
import Homebutton from '../../components/homebutton/homebutton.component';

import './beaches.styles.scss';

const BreweriesPage = () => (
  <div className='beachespage'>
    <Homebutton /> 
    <h1 className='pagename'> BREWERIES</h1> 
    <DirectoryBreweries />
  </div>
);


export default BreweriesPage;

