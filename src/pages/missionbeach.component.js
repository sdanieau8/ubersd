import React from "react";
import Sidebar from "../components/sidebar.component";
import GoogleMaps from "../components/map.component";
import './secondary.styles.scss';
import Weather from "../components/weather.component";
import GoogleAds from "../components/GoogleAds";


const Missionbeach = () => (
  <div className="downtownpage">
    {/* Banner */}
    <div className="banner" style={{ backgroundImage: `url("https://i.ibb.co/JmMGSKD/beach.jpg")` }}>
      <h1 className="h1banner">Welcome to San Diego</h1>
    </div>
    {/* Navigation */}
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

    {/* Page Description */}
    <div className="page-description">
      <h1 className="h1">Mission Beach and Pacific Beach</h1>
      <p className="p">20 Minutes from the Airport. The classic California beach day happens here.
      </p>
    </div>

    {/* Google Maps Insert */}
    <div className="map">
      <GoogleMaps />
    </div>

    <div className="ad-class">
      <GoogleAds slot="9684711268" />
    </div>

    {/* Neighborhood Details */}
    <div className="neighborhood-details">

      <div className="summary">
        <div className="image" style={{ backgroundImage: `url("https://i.ibb.co/BKXr75h/pb.jpg")` }}></div>
        <p className="summary-text">Mission Beach and Pacific Beach are family-friendly communities with fun for all ages. Take a walk on the boardwalk, lounge on the beach, rent some bikes, or learn how to surf with local schools.  
        </p>
      </div>

      <div className="information-box">
        <h1 className="h1">Activities</h1>
        <p className="p"><span className="name">Beach Day:</span> Learn to surf or relax on the sand, there is an activity for every family member.</p>
        <p className="p"><span className="name">Belmont Park:</span> Rides, Arcade games, and Carnival Food. Belmont Park is famous for its Giant Dipper roller coaster. </p>
        <p className="p"><span className="name">Tiki Town Mini Golf:</span> Located at Belmont Park, enjoy 18 holes of a tropical themed mini golf game.</p>
        <p className="p"><span className="name">Kate Sessions Park:</span> The perfect location for a grassy picnic with a view from the ocean to downtown.</p>
        <p className="p"><span className="name">Fishing:</span> Crystal Pier is a popular spot to catch some small fish.</p>
        <p className="p"><span className="name">Boardwalk:</span> Walk, bike, or skate on the boardwalk that goes from Pacific Beach to the Jetty at the end of Mission Beach.</p>
      </div>

      <div className="information-box">
        <h1 className="h1">Recommended Restaurants</h1>
        <p className="p"><span className="name">Kono's</span> Breakfast Burritos <a href="http://www.konoscafe.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Bare Back Grill</span> New Zealand Burgers and Bar <a href="https://barebackgrill.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Dirty Birds</span> Sports Bar and Chicken Wings <a href="https://www.dirtybirdsbarandgrill.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Taco Surf</span> Mexican <a href="https://www.tacosurftacoshop.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Oscar's</span> Mexican Tacos <a href="http://www.oscarsmexicanseafood.com/emerald/">Click here to learn more!</a></p>
        <p className="p"><span className="name">The Fishery</span> Seafood <a href="https://www.thefishery.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">The Grass Skirt</span> Tiki Bar and Poke <a href="https://www.thegrassskirt.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Cannonball</span> Seafood and Sushi <a href="https://www.cannonballsd.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Guava Beach</span> Bar and Grill <a href="https://guava-beach.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Miss B's</span> Brunch and Hawaiian <a href="https://www.missbcoconutclub.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">World Famous</span> Seafood and American <a href="https://www.worldfamouspb.com/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Dessert Shops</h1>
        <p className="p"><span className="name">Baked Bear</span> Ice Cream Sandwiches <a href="https://www.thebakedbear.com/pacificbeach/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Mr. Frostie</span> Ice Cream <a href="https://www.mrfrostiespb.com/">Click here to learn more!</a></p>
       </div>

      <div className="information-box">
        <h1 className="h1">Breweries and Bars</h1>
        <p className="p"><span className="name">PB Ale House</span> Craft Beers, Full Menu <a href="https://pbalehouse.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Tap Room</span> Craft Beer, Cider, Kombucha <a href="https://sdtaproom.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Iron Pig Alehouse</span> Craft Beer and Texas BBQ <a href="http://ironpigalehouse.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Amplified Ale Works</span> Brewpub and Mediterranean <a href="https://amplifiedales.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Waterbar</span> Cocktail Bar and Seafood <a href="https://www.waterbarsd.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">PB Shore Club</span> Bar and Seafood <a href="https://www.pbshoreclub.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">El Prez</span> Beach Bar and Cocina <a href="https://www.elprezpb.com/">Click here to learn more!</a></p>
        
        </div>

      <div className="information-box">
        <h1 className="h1">Rentals</h1>
        <p className="p"><span className="name">Ray's Rentals PB</span> Bikes, Boards, Blades, and Water Gear <a href="http://www.rays-rentals.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">PB Surf Shop</span> Lessons, Rentals, and Gear <a href="https://www.pbsurfshop.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">MB Rentals at Belmont</span> Bikes, Boards, Blades, and Chairs <a href="https://missionbeachsurfrentals.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Ray's Rentals MB</span> Bikes, Boards, Blades, and Water Gear <a href="http://www.rays-rentals.com/locations/mission-beach/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Cheap Rentals</span> Bikes, Boards, Kayaks, and Chairs  <a href="https://cheap-rentals.com/">Click here to learn more!</a></p>
        </div>

    </div>
    <div className="weather">
      <Weather />
    </div>
  </div>
);


export default Missionbeach;