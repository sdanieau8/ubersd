import React from "react";
import BackButton from '../../components/backbutton/backbutton.component'
import InfoCard from '../../components/info-card/info-card.components';
import DESSERTS_DATA from "../../components/directory/data/desserts.data";

import './f.styles.scss';

class Desserts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: DESSERTS_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/m9fZH2C/desserts.jpg")`}}>
      <h1 className='pagename'> DESSERTS </h1>
      </div>
      <BackButton />
      <h2 className='beachinfo'>
      Looking for something sweet? Checkout some of our favorite spots listed below! 
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


export default Desserts;