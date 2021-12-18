import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.homepage.styles.scss';

class DirectoryNightLife extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'BARS',
          imageUrl: 'https://i.ibb.co/KVDrH1w/bars.jpg',
          id: 10,
          linkUrl: 'bars'
        },
        {
          title: 'CLUBS',
          imageUrl: 'https://i.ibb.co/HnrbbFF/clubs.jpg',
          id: 11,
          linkUrl: 'clubs'
        },
        {
          title: 'EVENTS',
          imageUrl: 'https://i.ibb.co/9NnBW9v/events.jpg',
          id: 12,
          linkUrl: 'events'
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


export default DirectoryNightLife;





