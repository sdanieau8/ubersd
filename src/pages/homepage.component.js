import React from "react";
import Sidebar from "../components/sidebar.component";
import GoogleMaps from "../components/map.component";
import CategoryCard from "../components/category-component";
import CardTitle from "../components/card-title.component";
import GoogleAds from "../components/GoogleAds";
import LOCATIONS_DATA from "../components/locations.data";

import './homepage.styles.scss';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: LOCATIONS_DATA
    };
  }


  render() {
    const { locations } = this.state;
    return (
      <div className="homepage">
        {/* Banner */}
        <div className="banner" style={{ backgroundImage: `url("https://i.ibb.co/JmMGSKD/beach.jpg")` }}>
          <h1 className="h1banner">Welcome to San Diego</h1>
        </div>
        {/* Navigation */}
        <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
         {/* Card Preview */}
         <div className="categorycard-container">
          <CategoryCard />
        </div>
        {/* Google Maps Insert */}
        <div className="map">
          <GoogleMaps />
        </div>
        <div className="ad-class">
          <GoogleAds slot="8716858927" />
        </div>
        {/* Page Description */}
        <div className="page-description">
          <h1 className="h1">The Ultimate SD Guide</h1>
          <p className="p">Information for specific neighborhoods
            as well as general points of interest in America's Finest City!</p>
        </div>
        {/* Card Details */}
        <div className="categorycard-expanded">
          {locations.map(({ id, title, items, imageUrl }) => (
            <CardTitle key={id} id={id} title={title} items={items} imageUrl={imageUrl} />
          ))}
        </div>
      </div>
    );
  }
}

export default Homepage;