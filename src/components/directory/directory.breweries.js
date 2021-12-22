import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.homepage.styles.scss';

class DirectoryBreweries extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Craft Breweries',
          imageUrl: 'https://i.ibb.co/3czrDfB/craftbrewery.jpg',
          id: 10,
          linkUrl: 'craftbreweries'
        },
        {
          title: 'Large Breweries',
          imageUrl: 'https://i.ibb.co/ZhZmk5R/largebrewery.jpg',
          id: 11,
          linkUrl: 'largebreweries'
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


export default DirectoryBreweries;





