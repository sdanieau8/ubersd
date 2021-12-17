import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import OCEANBEACH_DATA from "../../../components/directory/data/oceanbeach.data";

import './pb.styles.scss';

class OceanBeach extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: OCEANBEACH_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/jhd3wgt/ob.jpg")`}}>
      <h1 className='pagename'> OCEAN BEACH</h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      Ocean Beach is great for walking the boardwalk, lounging on the beach,
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


export default OceanBeach;