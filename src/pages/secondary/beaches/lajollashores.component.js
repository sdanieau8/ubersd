import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import LAJOLLASHORES_DATA from "../../../components/directory/data/lajollashores.data";

import './pb.styles.scss';

class LajollaShores extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: LAJOLLASHORES_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/ctR6rYH/lajollashores.jpg")`}}>
      <h1 className='pagename'> LA JOLLA SHORES</h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      La Jolla Shores is great for walking the boardwalk, lounging on the beach,
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


export default LajollaShores;