import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import MUSEUMS_DATA from "../../../components/directory/data/museums.data";

import './h.styles.scss';

class Museums extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: MUSEUMS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/64QKJBg/museum.jpg")`}}>
      <h1 className='pagename'> MUSEUMS </h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
     Many of the city's museums are located in Balboa Park, so it is convenient to visit
     multiple museums in one day!
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


export default Museums;