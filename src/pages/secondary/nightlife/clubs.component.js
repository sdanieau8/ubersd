import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import CLUBS_DATA from "../../../components/directory/data/clubs.data";

import './nl.styles.scss';

class Clubs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: CLUBS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/HnrbbFF/clubs.jpg")`}}>
      <h1 className='pagename'> CLUBS </h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      A majority of San Diego's larger venues are located downtown
      in the Gaslamp district. 
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


export default Clubs;