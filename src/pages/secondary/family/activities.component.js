import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import ACTIVITIES_DATA from "../../../components/directory/data/activities.data";

import './f.styles.scss';

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ACTIVITIES_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/8xgZv15/activities.jpg")`}}>
      <h1 className='pagename'> ACTIVITIES </h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      San Diego has many family-friendly activities to keep all ages entertained!
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


export default Activities;