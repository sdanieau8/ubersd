import React from 'react';

import DirectoryFamily from '../../components/directory/directory.family';
import Homebutton from '../../components/homebutton/homebutton.component';

import './beaches.styles.scss';

const FamilyPage = () => (
  <div className='beachespage'>
    <Homebutton /> 
    <h1 className='pagename'> FAMILY</h1> 
    <DirectoryFamily />
  </div>
);


export default FamilyPage;

