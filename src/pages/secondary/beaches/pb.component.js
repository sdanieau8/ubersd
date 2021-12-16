import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import PB_DATA from "../../../components/directory/data/pacificbeach.data";

import './pb.styles.scss';

class PacificBeach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: PB_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/BKXr75h/pb.jpg")`}}>
      <h1 className='pagename'> PACIFIC BEACH</h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      Pacific Beach is great for walking the boardwalk, lounging on the beach,
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


export default PacificBeach;