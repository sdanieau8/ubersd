import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import SPORTS_DATA from "../../../components/directory/data/sports.data";

import './f.styles.scss';

class Sports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SPORTS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/4W4LMnk/sports.jpg")`}}>
      <h1 className='pagename'> SPORTS </h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      San Diego is home to four professional teams and hosts many college sports!
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


export default Sports;