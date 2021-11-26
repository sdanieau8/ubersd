import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.beaches.styles.scss';

class DirectoryBeaches extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'PACIFIC BEACH',
          imageUrl: 'https://i.ibb.co/BKXr75h/pb.jpg',
          id: 10,
          linkUrl: 'pacificbeach'
        },
        {
          title: 'MISSION BEACH',
          imageUrl: 'https://i.ibb.co/JC2tp62/mb.jpg',
          id: 11,
          linkUrl: 'missionbeach'
        },
        {
          title: 'LA JOLLA COVE',
          imageUrl: 'https://i.ibb.co/HVC9bnH/cove.jpg',
          id: 12,
          linkUrl: 'lajollacove'
        },
        {
          title: 'LA JOLLA SHORES',
          imageUrl: 'https://i.ibb.co/ctR6rYH/lajollashores.jpg',
          id: 13,
          linkUrl: 'lajollashores'
        },
        {
          title: 'CORONADO',
          imageUrl: 'https://i.ibb.co/M22XLqv/coronado2.jpg',
          id: 14,
          linkUrl: 'coronado'
        },
        {
          title: 'SUNSET CLIFFS',
          imageUrl: 'https://i.ibb.co/5k6cmrz/sunset-cliffs.jpg',
          id: 15,
          linkUrl: 'sunsetcliffs'
        },
        {
          title: 'OCEAN BEACH',
          imageUrl: 'https://i.ibb.co/jhd3wgt/ob.jpg',
          id: 16,
          linkUrl: 'oceanbeach'
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-beaches'>
         {this.state.sections.map(({ title, imageUrl, id, linkUrl }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
        ))}
      </div>
    );
  }
}


export default DirectoryBeaches;
