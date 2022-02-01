import React from 'react';

import DirectoryFamily from '../../components/directory/directory.family';
import BackButton from '../../components/backbutton/backbutton.component'

import './beaches.styles.scss';

const FamilyPage = () => (
  <div className='beachespage'>
    <BackButton /> 
    <h1 className='pagename'> FAMILY</h1> 
    <DirectoryFamily />
  </div>
);


export default FamilyPage;

