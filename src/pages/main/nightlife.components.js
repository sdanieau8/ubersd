import React from 'react';
import DirectoryNightLife from '../../components/directory/directory.nightlife';

import Homebutton from '../../components/homebutton/homebutton.component';

import './beaches.styles.scss';

const NightLifePage = () => (
  <div className='beachespage'>
    <Homebutton /> 
    <h1 className='pagename'> NIGHT LIFE</h1> 
    <DirectoryNightLife />
  </div>
);


export default NightLifePage;

