import React from "react";
import Sidebar from "../components/sidebar.component";
import GoogleMaps from "../components/map.component";
import './secondary.styles.scss';
import Weather from "../components/weather.component";



const Lajolla = () => (
  <div className="downtownpage">
    {/* Banner */}
    <div className="banner" style={{ backgroundImage: `url("https://i.ibb.co/JmMGSKD/beach.jpg")` }}>
      <h1 className="h1banner">Welcome to San Diego</h1>
    </div>
    {/* Navigation */}
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

    {/* Page Description */}
    <div className="page-description">
      <h1 className="h1">La Jolla and Torrey Pines</h1>
      <p className="p">30 Minutes from the Airport. Relax on the beach or enjoy a day of water sports. 
      </p>
    </div>

    {/* Google Maps Insert */}
    <div className="map">
      <GoogleMaps />
    </div>

    {/* Neighborhood Details */}
    <div className="neighborhood-details">

      <div className="summary">
        <div className="image" style={{ backgroundImage: `url("https://i.ibb.co/HVC9bnH/cove.jpg")` }}></div>
        <p className="summary-text">La Jolla and Torrey Pines represent some of the most beautiful coastline in all of California. La Jolla is popular for exploring the tide pools
        and observing the seals at The Children's Pool. It is also a common spot for scuba diving and kayaking. Torrey Pines has long sandy beaches next to stunning cliffs
        and several hiking trails.
        </p>
      </div>

      <div className="information-box">
        <h1 className="h1">Activities</h1>
        <p className="p"><span className="name">Beach:</span> Great spots for a family day are at La Jolla Cove, La Jolla Shores, or Torrey Pines State Beach.</p>
        <p className="p"><span className="name">Mt. Soledad Cross:</span> (La Jolla) A great view point to see the city. There is a parking lot at the top and then you can walk around and explore. </p>
        <p className="p"><span className="name">Kayaking:</span> Whether solo or with a tour group, kayaking between La Jolla Cove and La Jolla Shores, you will encounter lots of wildlife above and below the surface.</p>
        <p className="p"><span className="name">Caves:</span> In downtown La Jolla, The Cave Store has land access to a cave with 145 stairs down to the water. Tickets are $10 for adults and $6 for children under 18. </p>
        <p className="p"><span className="name">Birch Aquarium:</span> 60+ Habitats of Sea Life</p>
      </div>

      <div className="information-box">
        <h1 className="h1">Recommended Restaurants</h1>
        <p className="p"><span className="name">Duke's</span> American and Seafood <a href="https://www.dukeslajolla.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Eddie V's Prime Seafood</span> Steakhouse and Seafood <a href="https://www.eddiev.com/locations/ca/la-jolla/la-jolla/8511?cmpid=br:ev_ag:ie_ch:dry_ca:EVYELP_sn:yelp_gt:la-jolla-ca-8511_pl:locurl_rd:1010">Click here to learn more!</a></p>
        <p className="p"><span className="name">Richard Walker's Pancake House</span> Breakfast and Brunch <a href="https://www.richardwalkers.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Herringbone</span> Seafood <a href="https://taogroup.com/venues/herringbone-la-jolla/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Piatti</span> Italian, Pizza, and Seafood <a href="https://lajolla.piatti.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Shore Rider</span> Seafood, Burgers, and Cocktail Bar <a href="http://www.shoreridersd.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Cusp Dining and Drinks</span> Bar, Seafood, and Italian <a href="http://www.cusprestaurant.com/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Dessert Shops</h1>
        <p className="p"><span className="name">Nekter Juice Bar</span> Smoothies, Acai Bowls, Ice Cream <a href="https://locations.nekterjuicebar.com/ll/us/ca/la-jolla/834-kline-st/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Bobboi Natural Gelato</span>  <a href="https://bobboi.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Sugar and Scribe</span> Bakery and Coffee <a href="https://www.sugarandscribe.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Scoops La Jolla</span> Ice Cream, Crepes, Shakes, and Coffee  <a href="https://scoopslajolla.com/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Bars</h1>
        <p className="p"><span className="name">Nautilus Tavern</span> Sports Bar <a href="https://nautilus-tavern.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">The Spot</span> Sports Bar <a href="https://thespotonline.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Hennessey's Tavern</span> Irish Pub <a href="https://www.hennesseystavern.com/locations-la-jolla">Click here to learn more!</a></p>
        <p className="p"><span className="name">Shore Rider</span> Cocktail Bar <a href="http://www.shoreridersd.com/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Rentals</h1>
        <p className="p"><span className="name">La Jolla Swim and Sport</span> Water Gear, Beach Gear, Scooters <a href="https://www.lajollaswimandsport.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Everyday California</span> Kayak Tours, Surf Lessons, Water Gear <a href="https://www.everydaycalifornia.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">La Jolla Kayak</span> Rentals and Tours for Kayaking, Snorkeling, and Biking <a href="https://www.lajollakayak.com/">Click here to learn more!</a></p>
      </div>

    </div>
    <div className="weather">
      <Weather />
    </div>
  </div>
);


export default Lajolla;