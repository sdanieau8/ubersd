import React from 'react';
import DirectoryNightLife from '../../components/directory/directory.nightlife';

import BackButton from '../../components/backbutton/backbutton.component'

import './beaches.styles.scss';

const NightLifePage = () => (
  <div className='beachespage'>
    <BackButton /> 
    <h1 className='pagename'> NIGHT LIFE</h1> 
    <DirectoryNightLife />
  </div>
);


export default NightLifePage;

