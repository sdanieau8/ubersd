import React from "react";
import BackButton from "../../../components/backbutton/backbutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import EDUCATIONAL_DATA from "../../../components/directory/data/educational.data";

import './f.styles.scss';

class Educational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: EDUCATIONAL_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/JvnymWL/educational.jpg")`}}>
      <h1 className='pagename'> EDUCATIONAL </h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      From museums to aquariums, San Diego has many places to learn about
      the world around us.
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


export default Educational;