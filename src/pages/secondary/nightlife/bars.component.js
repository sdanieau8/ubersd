import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import BARS_DATA from "../../../components/directory/data/bars.data";

import './nl.styles.scss';

class Bars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: BARS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/KVDrH1w/bars.jpg")`}}>
      <h1 className='pagename'> BARS </h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      Below is a list of bars categorized by neighborhood. If you are
      looking for a larger brewery, check out the Breweries tab on the home page. 
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


export default Bars;