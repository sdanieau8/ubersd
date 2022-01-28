import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCardPhoto from "../../../components/info-card/info-card-photo.component";
import LANDMARKS_DATA from "../../../components/directory/data/landmarks.data";

import './h.styles.scss';

class Landmarks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: LANDMARKS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/pwZxywX/landmarks.jpg")`}}>
      <h1 className='pagename'> LANDMARKS </h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      Many of San Diego's Landmarks also have adjacent parks. Make sure to check out the
      Parks page as well!
      </h2>
      
      <div className='pb-list'>
        {collections.map(( {id, title, items}) => (
          <InfoCardPhoto key={id} title={title} items={items} />
        ))}
      </div>
    </div>
    );
  }
}


export default Landmarks;