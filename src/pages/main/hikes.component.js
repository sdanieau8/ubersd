import React from "react";
import BackButton from '../../components/backbutton/backbutton.component'
import InfoCard from '../../components/info-card/info-card.components';
import HIKES_DATA from "../../components/directory/data/hikes.data";

import './f.styles.scss';

class Hikes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: HIKES_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/HzMTLBm/hikes.jpg")`}}>
      <h1 className='pagename'> HIKES </h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      San Diego has many beautiful hiking trails to explore! 
      </h2>
      
      <div className='pb-list'>
        {collections.map(( {id, title, items}) => (
          <InfoCard key={id} title={title} items={items} />
        ))}
      </div>
    </div>
    );
  }
}


export default Hikes;