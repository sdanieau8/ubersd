import React from "react";
import './category.styles.scss';

import LOCATIONS_DATA from "./locations.data";

const CategoryCard = () => {

  const Card = ({ id, title, cardImageUrl }) => { 
    var myRef=id;

    function scrollToRef() {
      var elem = document.getElementById(myRef)
      if (elem != null)
        elem.scrollIntoView({ behavior: 'smooth'})
    }

    return (
      <div className="card" onClick={scrollToRef}>
        <div
          className="card-photo"
          style={{
            backgroundImage: `url(${cardImageUrl})`
          }}/>
          <div className="card-label">
            <h1 className="title">{title}</h1>
          </div>
      </div>
    );
  }


  return (
    <div className="card-container">
      {LOCATIONS_DATA.map(({ title, cardImageUrl, id }) => (
        <Card key={id} id={id} title={title} cardImageUrl={cardImageUrl} />
      ))}
    </div>
  );
};

export default CategoryCard;

