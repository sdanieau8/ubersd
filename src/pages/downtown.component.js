import React from "react";
import Sidebar from "../components/sidebar.component";
import GoogleMaps from "../components/map.component";
import './secondary.styles.scss';
import Weather from "../components/weather.component";
import GoogleAds from "../components/GoogleAds";


const Downtown = () => (
  <div className="downtownpage">
    {/* Banner */}
    <div className="banner" style={{ backgroundImage: `url("https://i.ibb.co/JmMGSKD/beach.jpg")` }}>
      <h1 className="h1banner">Welcome to San Diego</h1>
    </div>
    {/* Navigation */}
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

    {/* Page Description */}
    <div className="page-description">
      <h1 className="h1">Downtown</h1>
      <p className="p">10 Minutes from the Airport. Home to the San Diego Opera, the Convention Center, Petco Park, Gaslamp District, and several other cultural sites.
      </p>
    </div>

    {/* Google Maps Insert */}
    <div className="map">
      <GoogleMaps />
    </div>

    <div className="ad-class">
      <GoogleAds slot="4993838976" />
    </div>

    {/* Neighborhood Details */}
    <div className="neighborhood-details">

      <div className="summary">
        <div className="image" style={{ backgroundImage: `url("https://i.ibb.co/Cz0Bs2t/downtown.jpg")` }}></div>
        <p className="summary-text">Downtown is the heart of the city. Explore this California urban center via public transportation or by foot. During the day, the city offers several family-friendly activities and at night, Downtown becomes a top destination for adults.
        </p>
      </div>

      <div className="information-box">
        <h1 className="h1">Activities</h1>
        <p className="p"><span className="name">Gaslamp District:</span> Downtown's most vibrant nightlife can be found in the gaslamp. From themed bars and nightclubs to exquisite restaurants and craft beer, there are many options to please the whole group.</p>
        <p className="p"><span className="name">Little Italy:</span> Come check out "Top Chef Alley" and immerse yourself in the local Italian culture. Or for a quick treat, stop by one of the specialty dessert stores.</p>
        <p className="p"><span className="name">Embarcadero:</span> The gateway to the bay! Here you can find the USS Midway museum, harbor cruises, and waterfront restaurants. There is a also a new concert venue, The Rady Shell at Jacobs Park and a rooftop cinema at the Marriott Hotel.</p>
        <p className="p"><span className="name">Petco Park:</span> Home of the San Diego Padres, Petco Park also hosts concerts and other events. Be sure to checkout their website for a current schedule.</p>
        <p className="p"><span className="name">Barrio Logan:</span> Known for its colorful murals, Barrio Logan has beautiful art and delicious food from the local hispanic community.</p>
      </div>

      <div className="information-box">
        <h1 className="h1">Recommended Restaurants</h1>
        <p className="p"><span className="name">Meze Greek Fusion</span> Mediterranean <a href="https://gaslampmeze.com/#">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Werewolf</span> American Pub  <a href="http://www.thewerewolf.net/">Click here to learn more!</a></p>
        <p className="p"><span className="name">La Puerta</span> Mexican  <a href="https://lapuertasd.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">El Chingon</span> Mexican  <a href="https://elchingon.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Brigantine</span> Seafood and Oyster Bar <a href="https://www.brigantine.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">The Fish Market</span> Seafood <a href="https://www.thefishmarket.com/location/san-diego/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Dessert Shops</h1>
        <p className="p"><span className="name">Sugar Factory</span> Variety of Desserts <a href="https://sugarfactory.com/location/sugar-factory-san-diego/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Ghiradelli</span> Ice Cream and Chocolate Shop <a href="https://www.ghirardelli.com/StoreLocations-SanDiego">Click here to learn more!</a></p>
        <p className="p"><span className="name">Salt and Straw</span> Ice Cream <a href="https://saltandstraw.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Extraordinary Desserts</span> Lunch, Dinner, and Desserts <a href="http://extraordinarydesserts.com/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Breweries and Bars</h1>
        <p className="p"><span className="name">Mike Hess Brewing</span> Craft Brewery <a href="https://www.mikehessbrewing.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Bolt Brewery</span> Craft Brewery <a href="https://boltbrewery.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Resident Brewing Company</span> Craft Brewery <a href="http://residentbrewing.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Pure Project</span> Craft Brewery <a href="https://www.purebrewing.org/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Stone Brewing</span> Large Brewery <a href="https://www.stonebrewing.com/visit/outposts/kettner">Click here to learn more!</a></p>
        <p className="p"><span className="name">Ballast Point</span> Large Brewery <a href="https://ballastpoint.com/location/littleitaly/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Altitude</span> Rooftop Bar <a href="https://altitudeskylounge.com/sandiego/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Werewolf</span> American Pub <a href="http://www.thewerewolf.net/">Click here to learn more!</a></p>
        <p className="p"><span className="name">False Idol</span> Tiki Bar <a href="https://falseidoltiki.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Bar Moxy</span> Cocktail Bar <a href="https://www.yelp.com/biz/bar-moxy-san-diego">Click here to learn more!</a></p>
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


export default Downtown;