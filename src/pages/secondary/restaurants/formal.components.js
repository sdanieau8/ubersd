import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import FORMAL_DATA from "../../../components/directory/data/formal.data";

import './r.styles.scss';

class Formal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: FORMAL_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/NxYD8Ws/formal.jpg")`}}>
      <h1 className='pagename'> FORMAL </h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      Below is a list of restaurants, requiring formal attire, categorized by neighborhood.
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


export default Formal;