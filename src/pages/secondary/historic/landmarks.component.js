import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import LANDMARKS_DATA from "../../../components/directory/data/landmarks.data";

import './h.styles.scss';

class Landmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: LANDMARKS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/pwZxywX/landmarks.jpg")`}}>
      <h1 className='pagename'> LANDMARKS </h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      Landmarks is great for walking the boardwalk, lounging on the beach,
      bike rentals, surf lessons 
      and amazing food. Extra text to fill up space.
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


export default Landmarks;