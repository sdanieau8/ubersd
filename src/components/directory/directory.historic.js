import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.homepage.styles.scss';

class DirectoryHistoric extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'LANDMARKS',
          imageUrl: 'https://i.ibb.co/pwZxywX/landmarks.jpg',
          id: 10,
          linkUrl: 'landmarks'
        },
        {
          title: 'PARKS',
          imageUrl: 'https://i.ibb.co/KN77B7y/parks.jpg',
          id: 11,
          linkUrl: 'parks'
        },
        {
          title: 'MUSEUMS',
          imageUrl: 'https://i.ibb.co/64QKJBg/museum.jpg',
          id: 12,
          linkUrl: 'museums'
        },
        {
          title: 'ART & CULTURE',
          imageUrl: 'https://i.ibb.co/LRrmHMx/artculture.jpg',
          id: 13,
          linkUrl: 'art&culture'
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


export default DirectoryHistoric;





