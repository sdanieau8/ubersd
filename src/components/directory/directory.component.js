import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'BEACHES',
          imageUrl: 'https://i.ibb.co/MhGrm06/lajolla.jpg',
          id: 1
        },
        {
          title: 'HISTORIC',
          imageUrl: 'https://i.ibb.co/cD3KfWy/balboapark.jpg',
          id: 2
        },
        {
          title: 'NIGHT LIFE',
          imageUrl: 'https://i.ibb.co/wwKJvM2/gaslamp.jpg',
          id: 3
        },
        {
          title: 'FAMILY',
          imageUrl: 'https://i.ibb.co/BtTtM3R/belmontpark.jpg',
          id: 4
        },
        {
          title: 'RESTAURANTS',
          imageUrl: 'https://i.ibb.co/n7N1SQW/restaurant.jpg',
          id: 5
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} />
        ))}
      </div>
    );
  }
}


export default Directory;



