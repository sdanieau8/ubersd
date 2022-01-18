import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import CRAFTBREWERIES_DATA from "../../../components/directory/data/craftbreweries.data";

import './b.styles.scss';

class CraftBreweries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: CRAFTBREWERIES_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/3czrDfB/craftbrewery.jpg")`}}>
      <h1 className='pagename'> CRAFT BREWERIES </h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      San Diego has the most micro breweries in the country!
      With many options to choose from, we've highlighted our favorites and organized them by neighborhood.
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


export default CraftBreweries;