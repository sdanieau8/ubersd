import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.homepage.styles.scss';

class DirectoryFamily extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Attraction Parks',
          imageUrl: 'https://i.ibb.co/VM35ZZp/attractionpark.jpg',
          id: 10,
          linkUrl: 'attractionparks'
        },
        {
          title: 'Educational',
          imageUrl: 'https://i.ibb.co/JvnymWL/educational.jpg',
          id: 11,
          linkUrl: 'educational'
        },
        {
          title: 'Sports',
          imageUrl: 'https://i.ibb.co/4W4LMnk/sports.jpg',
          id: 12,
          linkUrl: 'sports'
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


export default DirectoryFamily;





