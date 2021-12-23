import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import EDUCATIONAL_DATA from "../../../components/directory/data/educational.data";

import './f.styles.scss';

class Educational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: EDUCATIONAL_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/JvnymWL/educational.jpg")`}}>
      <h1 className='pagename'> EDUCATIONAL </h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      Educational is great for walking the boardwalk, lounging on the beach,
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


export default Educational;