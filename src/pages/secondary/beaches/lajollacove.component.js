import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import LAJOLLACOVE_DATA from "../../../components/directory/data/lajollacove.data";

import './pb.styles.scss';

class LajollaCove extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: LAJOLLACOVE_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/HVC9bnH/cove.jpg")`}}>
      <h1 className='pagename'> LA JOLLA COVE</h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      La Jolla Cove has coastline views, tide pools, and lots of seals! It's a popular spot for scuba diving and kayaking. 
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


export default LajollaCove;