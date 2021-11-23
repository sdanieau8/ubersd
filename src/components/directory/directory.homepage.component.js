import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.homepage.styles.scss';

class DirectoryHome extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'BEACHES',
          imageUrl: 'https://i.ibb.co/MhGrm06/lajolla.jpg',
          id: 1,
          linkUrl: 'beaches'
        },
        {
          title: 'HISTORIC',
          imageUrl: 'https://i.ibb.co/cD3KfWy/balboapark.jpg',
          id: 2,
          linkUrl: 'historic'
        },
        {
          title: 'NIGHT LIFE',
          imageUrl: 'https://i.ibb.co/wwKJvM2/gaslamp.jpg',
          id: 3,
          linkUrl: 'nightlife'
        },
        {
          title: 'FAMILY',
          imageUrl: 'https://i.ibb.co/BtTtM3R/belmontpark.jpg',
          id: 4,
          linkUrl: 'family'
        },
        {
          title: 'RESTAURANTS',
          imageUrl: 'https://i.ibb.co/n7N1SQW/restaurant.jpg',
          id: 5,
          linkUrl: 'restaurants'
        },
        {
          title: 'BREWERIES',
          imageUrl: 'https://i.ibb.co/n7N1SQW/restaurant.jpg',
          id: 6,
          linkUrl: 'breweries'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-homepage'>
         {this.state.sections.map(({ title, imageUrl, id, linkUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
        ))}
      </div>
    );
  }
}


export default DirectoryHome;



