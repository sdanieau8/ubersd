import React from "react";
import BackButton from '../../components/backbutton/backbutton.component'
import InfoCard from '../../components/info-card/info-card.components';
import SHOPPING_DATA from "../../components/directory/data/shopping.data";

import './f.styles.scss';

class Shopping extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOPPING_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/nRqqyff/shopping.jpg")`}}>
      <h1 className='pagename'> SHOPPING </h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      San Diego has several beautiful outdoor shopping centers as well as outlet malls! 
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


export default Shopping;