import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import PARKS_DATA from "../../../components/directory/data/parks.data";

import './h.styles.scss';

class Parks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: PARKS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/KN77B7y/parks.jpg")`}}>
      <h1 className='pagename'> PARKS </h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      There are many beautiful parks all around the city. Below is a list of our favorite spots!
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


export default Parks;