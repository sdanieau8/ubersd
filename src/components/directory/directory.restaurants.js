import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.homepage.styles.scss';

class DirectoryRestaurants extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Local Favorites',
          imageUrl: 'https://i.ibb.co/BtVzzMq/localfavorites.jpg',
          id: 10,
          linkUrl: 'localfavorites'
        },
        {
          title: 'Casual',
          imageUrl: 'https://i.ibb.co/0sP0Cjk/casual.jpg',
          id: 11,
          linkUrl: 'casual'
        },
        {
          title: 'Formal',
          imageUrl: 'https://i.ibb.co/NxYD8Ws/formal.jpg',
          id: 12,
          linkUrl: 'formal'
        },
        {
          title: 'On The Water',
          imageUrl: 'https://i.ibb.co/hm1yxcp/onthewater.jpg',
          id: 13,
          linkUrl: 'onthewater'
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


export default DirectoryRestaurants;





