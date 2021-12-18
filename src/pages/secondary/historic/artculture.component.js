import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import ART_DATA from "../../../components/directory/data/artculture.data";

import './h.styles.scss';

class ArtCulture extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ART_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/LRrmHMx/artculture.jpg")`}}>
      <h1 className='pagename'> ART &amp; CULTURE </h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      Art and Culture is great for walking the boardwalk, lounging on the beach,
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


export default ArtCulture;