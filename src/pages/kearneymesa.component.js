import React from "react";
import Sidebar from "../components/sidebar.component";
import GoogleMaps from "../components/map.component";
import './secondary.styles.scss';
import Weather from "../components/weather.component";



const Kearney = () => (
  <div className="downtownpage">
    {/* Banner */}
    <div className="banner" style={{ backgroundImage: `url("https://i.ibb.co/JmMGSKD/beach.jpg")` }}>
      <h1 className="h1banner">Welcome to San Diego</h1>
    </div>
    {/* Navigation */}
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

    {/* Page Description */}
    <div className="page-description">
      <h1 className="h1">Kearney Mesa and Miramar</h1>
      <p className="p">25 Minutes from the Airport. The center of Asian cuisine and Breweries. 
      </p>
    </div>

    {/* Google Maps Insert */}
    <div className="map">
      <GoogleMaps />
    </div>

    {/* Neighborhood Details */}
    <div className="neighborhood-details">

      <div className="summary">
        <div className="image" style={{ backgroundImage: `url("https://i.ibb.co/G0SKYHf/miramar.jpg")` }}></div>
        <p className="summary-text">Kearney Mesa has several restaurants showcasing delicious Asian flavors. Checkout the recommended restaurants listed below. 10 minutes north from Kearney Mesa is Miramar, 
        the epicenter of craft brewing. Many of the breweries are near each other, making it possible to walk or take a short Uber/Lyft between them. 
        </p>
      </div>

      <div className="information-box">
        <h1 className="h1">Breweries and Bars</h1>
        <p className="p"><span className="name">Ketch Brewing</span> Tasting Room <a href="https://www.yelp.com/biz/ketch-brewing-san-diego">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Common Theory</span> Gastropub <a href="https://www.commontheorysd.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Realm of the 52</span> Speakeasy inside Common Theory <a href="https://www.52remedies.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Quantum Brewing</span> Craft Brewery <a href="https://www.quantumbrewingsd.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Kilowatt Brewing</span> Craft Brewery <a href="https://kilowatt.beer/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Duck Foot Brewing</span> Craft Brewery (Miramar) <a href="https://duckfootbeer.com/miramar/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Brewski's Bar and Arcade</span> Craft Brewery (Miramar) <a href="https://brewskissd.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Ballast Point</span> Large Brewery (Miramar) <a href="https://ballastpoint.com/location/miramar/#_ga=2.86910296.1388175142.1642538465-1818201150.1642201878">Click here to learn more!</a></p>
        <p className="p"><span className="name">Green Flash</span> Large Brewery (Miramar) <a href="https://www.greenflashbrew.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">AleSmith</span> Large Brewery (Miramar) <a href="https://alesmith.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Saint Archer</span> Large Brewery (Miramar) <a href="https://www.saintarcherbrewery.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Cutwater Spirits</span> Large Brewery (Miramar) <a href="https://www.cutwaterspirits.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">JuneShine Ranch</span> Large Brewery (Miramar) <a href="https://juneshine.com/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Recommended Restaurants</h1>
        <p className="p"><span className="name">Ajisen</span> Ramen <a href="http://www.ajisencalifornia.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Sushi Kuchi</span> Japanese and Sushi Bar <a href="https://convoy.sushikuchi.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">The Butcher Shop</span> Steakhouse <a href="https://www.butchershopsandiego.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">SHABUMi</span> Hot Pot and Korean BBQ <a href="https://www.yelp.com/biz/shabumi-san-diego-2?osq=Restaurants">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Bud's Louisiana Cafe</span> Cajun and Creole <a href="https://www.budscafe.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Tigris Mediterranean Grille</span> Salad and Sandwiches <a href="http://tigrisgrille.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Pho Duyen Mai</span> Vietnamese and Noodles <a href="https://www.ezordernow.com/phoduyenmaica">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Dessert Shops</h1>
        <p className="p"><span className="name">Tea N More</span> Boba <a href="https://teanmoresd.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">MNGO cafe</span> Tea and Pastries <a href="http://www.mngocafe.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">SomiSomi</span> Ice Cream and Korean Pastries  <a href="https://www.somisomi.com/">Click here to learn more!</a></p>
      </div>



    </div>

    <div className="weather">
      <Weather />
    </div>
  </div>
);


export default Kearney;