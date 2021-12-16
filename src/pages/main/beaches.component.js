import React from 'react';

import DirectoryBeaches from '../../components/directory/directory.beaches.component';
import Homebutton from '../../components/homebutton/homebutton.component';

import './beaches.styles.scss';

const BeachesPage = () => (
  <div className='beachespage'>
    <Homebutton /> 
    <h1 className='pagename'> BEACHES</h1> 
    <DirectoryBeaches />
  </div>
);


export default BeachesPage;

