import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import LARGEBREWERIES_DATA from "../../../components/directory/data/largebreweries.data";

import './b.styles.scss';

class LargeBreweries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: LARGEBREWERIES_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/ZhZmk5R/largebrewery.jpg")`}}>
      <h1 className='pagename'> LARGE BREWERIES </h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      Come take a tour of some world class facilities
      while enjoying a fresh cold beer!
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


export default LargeBreweries;