import React from "react";
import Homebutton from "../../../components/homebutton/homebutton.component";
import InfoCard from "../../../components/info-card/info-card.components";
import CORONADO_DATA from "../../../components/directory/data/coronado.data";

import './pb.styles.scss';

class Coronado extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: CORONADO_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
    <div className='pbpage'>
      <div className='photo' style= {{backgroundImage: `url("https://i.ibb.co/M22XLqv/coronado2.jpg")`}}>
      <h1 className='pagename'> CORONADO</h1>
      </div>
      <Homebutton />
      <h2 className='beachinfo'>
      Coronado is home to the Hotel Del, beautiful sandy beaches, and iconic views of the downtown skyline. 
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


export default Coronado;