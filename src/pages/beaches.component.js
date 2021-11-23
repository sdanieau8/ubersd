import React from 'react';

import DirectoryBeaches from '../components/directory/directory.beaches.component';

import './beaches.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <h1> BEACHES </h1>
    <DirectoryBeaches />
  </div>
);


export default HomePage;