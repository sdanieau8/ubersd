import React from 'react';

import BEACHES_DATA from './data/beaches.data.js';
import InfoCard from '../info-card/info-card.components.js';

import './directory.beaches.styles.scss';

class DirectoryBeaches extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      beachlocations: BEACHES_DATA
    };
  }

  render() {
    const { beachlocations } = this.state;
    return (
      <div className='directory-beaches'>
        {beachlocations.map(({ id, name, imageUrl, address, notes }) => (
          <InfoCard key={id} name={name} imageUrl={imageUrl} address={address} notes={notes} />
        ))}
      </div>
    );
  }
}

export default DirectoryBeaches;


