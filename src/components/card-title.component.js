import React from "react";
import CardExpanded from "./card-expanded.component";

import './card-title.styles.scss';


const CardTitle = ({ id, title, imageUrl, items }) => {
  
  function scrollToRef() {
    var elem = document.getElementsByClassName('categorycard-container')[0]
    if (elem != null)
      elem.scrollIntoView({ behavior: 'smooth' })
  }

  return (    
  <div className="card-title" id={id} >
    <h1 className="title" style={{ backgroundImage: `url(${imageUrl})` }}>{title.toUpperCase()}
    </h1>
    <div className="card">
      {items.map(({ id, name, price, address, mapLink, description, linkUrl, imageUrl }) => (
        <CardExpanded key={id} name={name} price={price} description={description} address={address} mapLink={mapLink} linkUrl={linkUrl} imageUrl={imageUrl} />
      ))}
    </div>
    <button className="button" onClick={scrollToRef}>Return to Menu</button>
  </div>
  );
}
export default CardTitle;