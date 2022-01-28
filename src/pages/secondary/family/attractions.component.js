import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import ATTRACTION_DATA from "../../../components/directory/data/attractions.data";

import './f.styles.scss';

class AttractionParks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ATTRACTION_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/VM35ZZp/attractionpark.jpg")`}}>
      <h1 className='pagename'> ATTRACTION PARKS </h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      Looking for a full day filled with exotic animals?
      Check out one of San Diego's famous attraction parks
      for a day of fun!  
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


export default AttractionParks;