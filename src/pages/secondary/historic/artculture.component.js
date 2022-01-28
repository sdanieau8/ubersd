import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
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
      <BackButton />
      <h2 className='beachinfo'>
      Art and Culture can be found all throughout the city. The places listed below
      are dedicated to preserving and showcasing the art.
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