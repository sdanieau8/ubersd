import React from "react";
import './card-expanded.styles.scss';


const CardExpanded = ({ id, name, price, mapLink, address, imageUrl, description, linkUrl }) => (
  <div className="card-expanded" key={id}>
    <div className="title-bar">
      <div className="name">
        {name}
      </div>
      <div className="price">
        {price}
      </div>
      <div className="address">
        <a href={mapLink} aria-label="address">{address}</a>
      </div>
    </div>
    <div className="info-bar">
      <div className="location-photo"
        style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="location-description">
        {description}
        <div className="url-link">
          <a href={linkUrl} aria-label="company-page">Click to learn more!</a>
        </div>
      </div>
    </div>
  </div>
);


export default CardExpanded;
