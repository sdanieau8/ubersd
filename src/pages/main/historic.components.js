import React from 'react';

import DirectoryHistoric from '../../components/directory/directory.historic';
import Homebutton from '../../components/homebutton/homebutton.component';

import './beaches.styles.scss';

const HistoricPage = () => (
  <div className='beachespage'>
    <Homebutton /> 
    <h1 className='pagename'> HISTORIC</h1> 
    <DirectoryHistoric />
  </div>
);


export default HistoricPage;

