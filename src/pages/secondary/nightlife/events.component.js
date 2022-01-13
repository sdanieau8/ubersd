import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import EVENTS_DATA from "../../../components/directory/data/events.data";

import './nl.styles.scss';

class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: EVENTS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/9NnBW9v/events.jpg")`}}>
      <h1 className='pagename'> EVENTS </h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      San Diego hosts many local and national events. Be sure to check a venue's
      website for updates and new event listings!
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


export default Events;