import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import SUNSETCLIFFS_DATA from "../../../components/directory/data/sunsetcliffs.data";

import './pb.styles.scss';

class SunsetCliffs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SUNSETCLIFFS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/5k6cmrz/sunset-cliffs.jpg")`}}>
      <h1 className='pagename'> SUNSET CLIFFS</h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      Sunset Cliffs is the best spot for sunsets. Not recommended for small children, the area is fun to explore with good footwear.  
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


export default SunsetCliffs;