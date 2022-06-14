import React from "react";
import Sidebar from "../components/sidebar.component";
import GoogleMaps from "../components/map.component";
import './secondary.styles.scss';
import Weather from "../components/weather.component";
import GoogleAds from "../components/GoogleAds";


const Oceanbeach = () => (
  <div className="downtownpage">
    {/* Banner */}
    <div className="banner" style={{ backgroundImage: `url("https://i.ibb.co/JmMGSKD/beach.jpg")` }}>
      <h1 className="h1banner">Welcome to San Diego</h1>
    </div>
    {/* Navigation */}
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

    {/* Page Description */}
    <div className="page-description">
      <h1 className="h1">Ocean Beach and Point Loma</h1>
      <p className="p">10 Minutes from the Airport. Relax by the water and enjoy some of the best seafood in the city. 
      </p>
    </div>

    {/* Google Maps Insert */}
    <div className="map">
      <GoogleMaps />
    </div>

    <div className="ad-class">
      <GoogleAds slot="5745466252" />
    </div>

    {/* Neighborhood Details */}
    <div className="neighborhood-details">

      <div className="summary">
        <div className="image" style={{ backgroundImage: `url("https://i.ibb.co/5k6cmrz/sunset-cliffs.jpg")` }}></div>
        <p className="summary-text">Ocean Beach offers an old school beach vibe with eclectic boutiques all around. There are sandy beaches as well as small cliff areas for picnics.
        Point Loma is located on the hillside overlooking the harbor and has some fantastic restaurants on the water as well. 
        </p>
      </div>

      <div className="information-box">
        <h1 className="h1">Activities</h1>
        <p className="p"><span className="name">Cabrillo National Monument:</span> Learn about Juan Rodriguez Cabrillo and enjoy the breathtaking views of the city. 
        Also explore the Old Point Loma Lighthouse. $20 per vehicle.</p>
        <p className="p"><span className="name">Tide Pooling at Cabrillo:</span> Below the monument, when the tide is low, it is possible to observe small ecosystems in the rocks.</p>
        <p className="p"><span className="name">Liberty Station:</span> A former navy training facility that has been converted into a large area for restaurants and shops.</p>
        <p className="p"><span className="name">Beach Day:</span> Next to the Ocean Beach Pier is a long stretch of sand that is perfect for a family beach day.</p>
      </div>

      <div className="information-box">
        <h1 className="h1">Recommended Restaurants</h1>
        <p className="p"><span className="name">OB Noodle House</span> Asian Fusion and Whiskey Bar <a href="https://obnoodlehouse.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Kaiserhof</span> German, Seafood, and Bar <a href="https://www.kaiserhofrestaurant.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Hodads</span> Burgers <a href="https://hodadies.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Wonderland Ocean Pub</span> Sports Bar, American <a href="https://wonderlandob.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Blue Water Seafood</span> Seafood Market <a href="https://bluewaterseafoodsandiego.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Point Loma Seafoods</span> Seafood Market <a href="https://pointlomaseafoods.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Dirty Birds</span> Sports Bar and Chicken Wings <a href="https://www.dirtybirdsbarandgrill.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Corvette Diner</span> 1970's Themed Diner <a href="https://www.cohnrestaurants.com/corvettediner?utm_source=Yelp%20Website">Click here to learn more!</a></p>
        <p className="p"><span className="name">Old Venice Restaurant</span> Italian <a href="https://www.oldvenicerestaurant.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Miguel's Cocina</span> Mexican <a href="http://www.miguels-cocina.com/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Dessert Shops</h1>
        <p className="p"><span className="name">Lighthouse Ice Cream</span> Frozen Yogurt and Ice Cream <a href="https://lighthouseicecreamob.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Azucar</span> Cuban Style Patisserie <a href="https://iloveazucar.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">The Elegant Truffle</span> Pastries <a href="https://www.yelp.com/biz/the-elegant-truffle-san-diego?osq=dessert">Click here to learn more!</a></p>
        <p className="p"><span className="name">Portside Coffee and Gelato</span>   <a href="https://www.yelp.com/biz/portside-coffee-and-gelato-san-diego-3?osq=dessert">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Breweries and Bars</h1>
        <p className="p"><span className="name">OB Brewery</span> Craft Beer and Full Menu <a href="https://www.obbrewingco.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Kilowatt Brewing</span> Handcrafted Beer <a href="https://kilowatt.beer/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Pizza Port OB</span> Beer and Pizza <a href="http://www.pizzaport.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Nova Easy Kombucha</span> Craft Brewery <a href="https://novakombucha.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">California Wild Ales</span> Craft Brewery <a href="https://www.yelp.com/biz/california-wild-ales-tasting-room-ocean-beach-san-diego-2?osq=brewery">Click here to learn more!</a></p>
        <p className="p"><span className="name">Stone Brewing</span> Large Brewery <a href="https://www.stonebrewing.com/visit/bistros/liberty-station">Click here to learn more!</a></p>
        <p className="p"><span className="name">Mike Hess Brewing</span> Large Brewery <a href="https://www.mikehessbrewing.com/">Click here to learn more!</a> </p>
      </div>

      <div className="information-box">
        <h1 className="h1">Rentals</h1>
        <p className="p"><span className="name">The Shed OB</span> Beach Equipment <a href="https://birdssurfshed.com/locations/the-shed-ob/">Click here to learn more!</a></p>
        <p className="p"><span className="name">OB Surf and Skate</span> Beach Equipment and Skates <a href="https://www.obsurfandskate.com/">Click here to learn more!</a></p>
        </div>


    </div>
    <div className="weather">
      <Weather />
    </div>
  </div>
);


export default Oceanbeach;