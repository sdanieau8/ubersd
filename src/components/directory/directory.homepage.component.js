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
          imageUrl: 'https://i.ibb.co/JmMGSKD/beach.jpg',
          id: 1,
          linkUrl: 'beaches'
        },
        {
          title: 'HISTORIC',
          imageUrl: 'https://i.ibb.co/qnvMk5L/historic.jpg',
          id: 2,
          linkUrl: 'historic'
        },
        {
          title: 'NIGHT LIFE',
          imageUrl: 'https://i.ibb.co/2ZbJfKx/nightlife.jpg',
          id: 3,
          linkUrl: 'nightlife'
        },
        {
          title: 'FAMILY',
          imageUrl: 'https://i.ibb.co/R0hksNn/zoo.jpg',
          id: 4,
          linkUrl: 'family'
        },
        {
          title: 'RESTAURANTS',
          imageUrl: 'https://i.ibb.co/GxXwH9J/restaurants.jpg',
          id: 5,
          linkUrl: 'restaurants'
        },
        {
          title: 'BREWERIES',
          imageUrl: 'https://i.ibb.co/rZ2vgHK/breweries.jpg',
          id: 6,
          linkUrl: 'breweries'
        },
        {
          title: 'HIKES',
          imageUrl: 'https://i.ibb.co/HzMTLBm/hikes.jpg',
          id: 6,
          linkUrl: 'hikes'
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



