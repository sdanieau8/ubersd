import React from "react";
import Sidebar from "../components/sidebar.component";
import GoogleMaps from "../components/map.component";
import './secondary.styles.scss';
import Weather from "../components/weather.component";



const Balboa = () => (
  <div className="downtownpage">
    {/* Banner */}
    <div className="banner" style={{ backgroundImage: `url("https://i.ibb.co/JmMGSKD/beach.jpg")` }}>
      <h1 className="h1banner">Welcome to San Diego</h1>
    </div>
    {/* Navigation */}
    <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />

    {/* Page Description */}
    <div className="page-description">
      <h1 className="h1">Balboa Park and Hillcrest</h1>
      <p className="p">10 Minutes from the Airport. Visit the Old Globe Theater and spend the day in the botanical gardens and museums.   
      </p>
    </div>

    {/* Google Maps Insert */}
    <div className="map">
      <GoogleMaps />
    </div>

    {/* Neighborhood Details */}
    <div className="neighborhood-details">

      <div className="summary">
        <div className="image" style={{ backgroundImage: `url("https://i.ibb.co/KN77B7y/parks.jpg")` }}></div>
        <p className="summary-text">Balboa Park is a beautiful area to walk around and explore a variety of art and culture in several museums and the row of international houses. 
        End the day in neighboring Hillcrest at one of the many delicious restaurants. The center of San Diego's LGBTQ+ community, Hillcrest is known for its welcoming vibes and a popular spot to party.
        </p>
      </div>

      <div className="information-box">
        <h1 className="h1">Activities</h1>
        <p className="p"><span className="name">Museums:</span> Museum of Art | Air and Space Museum | Natural History Museum | Fleet Science Center | Hall of Nations | Botanical Building | Japanese Friendship Garden </p>
        <p className="p"><span className="name">Theater:</span> Old Globe Theatre (Professional) | San Diego Junior Theatre (Children) | Spreckels Organ Pavilion</p>
        <p className="p"><span className="name">San Diego Zoo:</span> 100 acres that are home to 12,000 animals.</p>
        <p className="p"><span className="name">Art Fair:</span> Individual vendors line the main walkway in the park and showcase their artistic talents.</p>
        <p className="p"><span className="name">Park Tram: </span> A free tram that runs daily from 9am to 6pm. The tram goes in a loop and shuttles visitors from the center of the park to three different parking lots.</p>
      </div>

      <div className="information-box">
        <h1 className="h1">Recommended Restaurants</h1>
        <p className="p"><span className="name">Pop Pie Co.</span> Variety of Pot Pies <a href="https://www.poppieco.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Rudford's</span> Diner <a href="https://www.rudfords.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Massachusetts Mike's Pizzeria</span> Sandwiches, Pizza, Salad <a href="https://massmikes.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Breakfast Republic</span> Breakfast and Brunch <a href="https://www.breakfastrepublic.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Soichi Sushi</span> Japanese and Seafood <a href="https://www.soichisushi.com/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Dessert Shops</h1>
        <p className="p"><span className="name">Chocolat Hillcrest</span> European Bistro, Creperie <a href="http://www.chocolat-hillcrest.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Uncle Biff's California Killer Cookies</span>  <a href="https://www.unclebiffskillercookies.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">DixiePops</span> Desserts, Ice Cream, and Frozen Yogurt <a href="https://dixiepops.com/">Click here to learn more!</a></p>
      </div>

      <div className="information-box">
        <h1 className="h1">Breweries and Bars</h1>
        <p className="p"><span className="name">Kairoa Brewing Company</span> Craft Brewery <a href="https://www.kairoa.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">North Park Beer Company</span> Craft Brewery <a href="https://www.northparkbeerco.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Modern Times Flavordome</span> Craft Brewery <a href="http://www.moderntimesbeer.com/site/age-verification">Click here to learn more!</a></p>
        <p className="p"><span className="name">Pariah Brewing Company</span> Craft Brewery <a href="https://www.pariahbrewing.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">One Door North</span> Bar and Eatery <a href="https://www.onedoornorthsd.com/">Click here to learn more!</a> </p>
        <p className="p"><span className="name">Park and Rec</span> Cocktail Bar and Lounge <a href="http://parkandrecsd.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">insideOUT</span> Cocktail Bar and Mediterranean Food <a href="https://insideoutsd.com/">Click here to learn more!</a></p>
        <p className="p"><span className="name">Louisiana Purchase</span> Cocktail Bar and Cajun/Creole Food <a href="https://www.louisianapurchasesd.com/">Click here to learn more!</a></p>
      </div>


    </div>
    <div className="weather">
      <Weather />
    </div>
  </div>
);


export default Balboa;