import React from "react";
import Sidebar from "../components/sidebar.component";
import GoogleMaps from "../components/map.component";
import './secondary.styles.scss';
import Weather from "../components/weather.component";
import GoogleAds from "../components/GoogleAds";


const Coronado = () => (
  <div className="downtownpage">
    {/* Banner */}
    <div className="banner" style={{ backgroundImage: `url("https://i.ibb.co/JmMGSKD/beach.jpg")` }}>
      <h1 className="h1banner">Welcome to San Diego</h1>
    </div>
    {/* Navigation */}
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

    {/* Page Description */}
    <div className="page-description">
      <h1 className="h1">Coronado</h1>
      <p className="p">20 Minutes from the Airport. Great location for a family beach day at the famous Hotel Del. </p>
    </div>

    {/* Google Maps Insert */}
    <div className="map">
      <GoogleMaps />
    </div>
    
    <div className="ad-class">
      <GoogleAds slot="6874715094" />
    </div>

    {/* Neighborhood Details */}
    <div className="neighborhood-details">

      <div className="summary">
        <div className="image" style={{ backgroundImage: `url("https://i.ibb.co/M22XLqv/coronado2.jpg")` }}></div>
        <p className="summary-text"> Coronado has beautiful white sandy beaches and iconic views of the downtown skyline. Home of the Hotel Del, this luxurious resort is also
        rumored to be haunted. Learn more about the haunted happenings with a guided tour on Fridays and Saturdays, or if ghost hunting is not your cup of tea, relax by the pool and outdoor bar.   
        </p>
      </div>

      <div className="information-box">
        <h1 className="h1">Activities</h1>
        <p className="p"><span className="name">Beach:</span> Checkout the long sandy beaches of Coronado and stay for the stunning sunsets. Some would describe the sand as sparkling in the sunlight.</p>
        <p className="p"><span className="name">Bike Tour:</span> Coronado is a bike friendly community which makes it an excellent spot to rent bikes for the day, either with a tour group or a self-guided tour.</p>
        <p className="p"><span className="name">Ferry:</span> A fun way to commute to Coronado, the ferry operates from Downtown at two locations, the Broadway Pier and the Convention Center. Tickets are $7 one way.</p>
        <p className="p"><span className="name">Golf:</span> Rated as one of the top public golf courses, the Coronado golf course delivers amazing views of the Coronado Bridge and Bay. </p>
        <p className="p"><span className="name">Spa and Salon at the Del:</span> The spa offers massages, facials, body treatments, nail care, and hair care.</p>
      </div>

      <div className="information-box">
        <h1 className="h1">Recommended Restaurants</h1>
        <p className="p"><span className="name">Hotel Del Splash Bar</span> Deli and Seafood <a href="https://www.yelp.com/biz/hotel-del-coronado-splash-bar-and-deli-coronado?osq=hotel+del">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Miguel's Cocina</span> Mexican <a href="http://www.miguels-cocina.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Saiko Sushi</span> Sushi Bar <a href="http://saikosushisd.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Peohe's</span> Seafood and Sushi Bar <a href="https://www.peohes.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Lobster West</span> Seafood <a href="https://lobsterwest.com/encinitas-encinitas-lobster-west-locations">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Dessert Shops</h1>
        <p className="p"><span className="name">Nado Gelato by Bottega Italiana</span> Coffee and Gelato <a href="http://www.bottegaitaliana.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Tartine</span> European Cafe, Pastries <a href="https://tartinecoronado.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Fuzziwig's Candy Factory</span> Large variety of candy <a href="https://fuzziwigscandyfactory.com/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Breweries and Bars</h1>
        <p className="p"><span className="name">Coronado Brewing</span> Large Brewery <a href="https://coronadobrewing.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Wine A Bit</span> Beer, Wine, and Spirits <a href="https://wineabitcoronado.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">McP's Irish Pub</span> Indoor and Outdoor <a href="http://mcpspub.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">The Little Club</span> Dive Bar <a href="https://www.yelp.com/biz/the-little-club-coronado">Click here to learn more!</a></p>
        <p className="p"><span className="name">Babcock and Story</span> Cocktail Bar <a href="https://hoteldel.com/dine/babcock-and-story-bar/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Sun Deck</span> Cocktail Bar <a href="https://hoteldel.com/dine/sun-deck/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Rentals</h1>
        <p className="p"><span className="name">Ray's Rentals</span> Bikes, Jetskis, Kayaks <a href="http://www.rays-rentals.com/locations/coronado-island/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Holland's Bikes and Beyond</span> Bikes, Surreys <a href="https://www.hollandsbicycles.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Seaforth Boat Rental</span> Sailboats, Jetskis, Powerboats, and Boat Tours <a href="https://seaforthboatrental.com/">Click here to learn more!</a></p>
        </div>

    </div>
    <div className="weather">
      <Weather />
    </div>
  </div>
);


export default Coronado;