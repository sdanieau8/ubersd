import React from "react";
import Sidebar from "../components/sidebar.component";
import GoogleMaps from "../components/map.component";
import './secondary.styles.scss';
import Weather from "../components/weather.component";


const Oldtown = () => (
  <div className="downtownpage">
    {/* Banner */}
    <div className="banner" style={{ backgroundImage: `url("https://i.ibb.co/JmMGSKD/beach.jpg")` }}>
      <h1 className="h1banner">Welcome to San Diego</h1>
    </div>
    {/* Navigation */}
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

    {/* Page Description */}
    <div className="page-description">
      <h1 className="h1">Old Town</h1>
      <p className="p">15 Minutes from the Airport. Learn about the history of San Diego, enjoy the delicious restaurants, and browse the many boutiques. 
      </p>
    </div>

    {/* Google Maps Insert */}
    <div className="map">
      <GoogleMaps />
    </div>

    {/* Neighborhood Details */}
    <div className="neighborhood-details">

      <div className="summary">
        <div className="image" style={{ backgroundImage: `url("https://i.ibb.co/kxjYcYW/oldtown.jpg")` }}></div>
        <p className="summary-text">Old Town will take you back in time to see how the first European settlements in San Diego looked. There are several tour options
        to walk around and explore the art and culture of the area. 
        </p>
      </div>

      <div className="information-box">
        <h1 className="h1">Activities</h1>
        <p className="p"><span className="name">Whaley House:</span> It once was a commercial theater, a county courthouse, and a general store. Today it is a museum with a haunted side.</p>
        <p className="p"><span className="name">Presidio Park:</span> Up on the hillside and over looking Old Town, this park is a great place for picnics and a quiet retreat from the city.</p>
        <p className="p"><span className="name">San Diego Mission:</span> 10 minutes east from Old Town, visit California's first Mission.</p>
        <p className="p"><span className="name">Candle Making:</span> Visit Toby's Candle and Soap Shop to make a one of a kind candle and learn about candle carving.</p>
        <p className="p"><span className="name">Taco Tuesday:</span> Many of the restaurants in Old Town offer food and drink specials on Tuesday's.</p>
      </div>

      <div className="information-box">
        <h1 className="h1">Recommended Restaurants</h1>
        <p className="p"><span className="name">Jack and Giulio's</span> Italian <a href="https://www.jackandgiulios.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Cafe Coyote</span> Mexican, Margarita Flights <a href="https://www.cafecoyoteoldtown.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Miguel's Cocina</span> Mexican <a href="https://www.miguels-cocina.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">New Orleans Creole Cafe</span> Cajun and Creole <a href="https://www.yelp.com/biz/new-orleans-creole-cafe-san-diego-2">Click here to learn more!</a></p>
        <p className="p"><span className="name">Hungry's Kitchen and Tap</span> Beer Bar, Burgers, Breakfast and Brunch <a href="https://www.yelp.com/biz/hungrys-kitchen-and-tap-san-diego">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Dessert Shops</h1>
        <p className="p"><span className="name">Cousin's Candy Shop</span> <a href="https://cousinscandyshop.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Old Town Ice Cream and Frozen Yogurt</span>  <a href="https://www.yelp.com/biz/old-town-ice-cream-and-frozen-yogurt-san-diego">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Trolley Lines</h1>
        <p className="p"><span className="blue">Blue Line</span> Starts at the San Ysidro/Tijuana border, goes through Downtown, and ends at the UTC shopping mall next to UCSD (University of California San Diego). <a href="https://www.sdmts.com/getting-around/departures-and-schedules/schedules/510">Click here for times!</a> </p>
        <p className="p"><span className="green">Green Line</span>  Starts in Downtown, goes through Mission Valley, and ends in Santee. <a href="https://www.sdmts.com/getting-around/departures-and-schedules/schedules/530">Click here for times!</a></p>
        <p className="p"><span className="orange">Orange Line</span> Starts in Downtown, goes through Lemon Grove and La Mesa, and ends in El Cajon. <a href="https://www.sdmts.com/getting-around/departures-and-schedules/schedules/520">Click here for times!</a></p>
      </div>

    </div>
    <div className="weather">
      <Weather />
    </div>
  </div>
);


export default Oldtown;