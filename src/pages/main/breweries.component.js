import React from 'react';

import DirectoryBreweries from '../../components/directory/directory.breweries';
import BackButton from '../../components/backbutton/backbutton.component'

import './beaches.styles.scss';

const BreweriesPage = () => (
  <div className='beachespage'>
    <BackButton /> 
    <h1 className='pagename'> BREWERIES</h1> 
    <DirectoryBreweries />
  </div>
);


export default BreweriesPage;

