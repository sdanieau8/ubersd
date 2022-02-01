import React from 'react';

import DirectoryHistoric from '../../components/directory/directory.historic';
import BackButton from '../../components/backbutton/backbutton.component'

import './beaches.styles.scss';

const HistoricPage = () => (
  <div className='beachespage'>
    <BackButton /> 
    <h1 className='pagename'> HISTORIC</h1> 
    <DirectoryHistoric />
  </div>
);


export default HistoricPage;

