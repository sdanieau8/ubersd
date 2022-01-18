import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import ONTHEWATER_DATA from "../../../components/directory/data/onthewater.data";

import './r.styles.scss';

class OnWater extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ONTHEWATER_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/hm1yxcp/onthewater.jpg")`}}>
      <h1 className='pagename'> ON THE WATER </h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      San Diego has some beautiful views for water front dining downtown. Checkout the locations below! 
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


export default OnWater;