import React from 'react';

import DirectoryBeaches from '../../components/directory/directory.beaches.component';
import BackButton from '../../components/backbutton/backbutton.component'

import './beaches.styles.scss';

const BeachesPage = () => (
  <div className='beachespage'>
    <BackButton /> 
    <h1 className='pagename'> BEACHES</h1> 
    <DirectoryBeaches />
  </div>
);


export default BeachesPage;

