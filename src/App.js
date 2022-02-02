import React from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

import HomePage from './pages/main/homepage.component';
import BeachesPage from './pages/main/beaches.component';
import HistoricPage from './pages/main/historic.components';
import NightLifePage from './pages/main/nightlife.components';
import FamilyPage from './pages/main/family.components';
import RestaurantsPage from './pages/main/restaurants.components';
import BreweriesPage from './pages/main/breweries.component';

// Beaches
import PacificBeach from './pages/secondary/beaches/pb.component';
import MissionBeach from './pages/secondary/beaches/mb.component';
import LajollaCove from './pages/secondary/beaches/lajollacove.component';
import LajollaShores from './pages/secondary/beaches/lajollashores.component';
import Coronado from './pages/secondary/beaches/coronado.component';
import SunsetCliffs from './pages/secondary/beaches/sunsetcliffs.component';
import OceanBeach from './pages/secondary/beaches/ob.component';
// Historic
import Landmarks from './pages/secondary/historic/landmarks.component';
import Parks from './pages/secondary/historic/parks.component';
import Museums from './pages/secondary/historic/museums.component';
import ArtCulture from './pages/secondary/historic/artculture.component';
// Night Life
import Bars from './pages/secondary/nightlife/bars.component';
import Clubs from './pages/secondary/nightlife/clubs.component';
import Events from './pages/secondary/nightlife/events.component';
// Family
import AttractionParks from './pages/secondary/family/attractions.component';
import Educational from './pages/secondary/family/educational.component';
import Sports from './pages/secondary/family/sports.component';
import Activities from './pages/secondary/family/activities.component';
// Restaurants
import LocalFavorites from './pages/secondary/restaurants/localfavorites.component';
import Casual from './pages/secondary/restaurants/casual.component';
import Formal from './pages/secondary/restaurants/formal.components';
import OnWater from './pages/secondary/restaurants/onthewater.component';
// Breweries
import CraftBreweries from './pages/secondary/breweries/craftbreweries.component';
import LargeBreweries from './pages/secondary/breweries/largebreweries.component';
//Desserts
import Desserts from './pages/main/desserts.component';
// Hikes
import Hikes from './pages/main/hikes.component';
//Shopping
import Shopping from './pages/main/shopping.component';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beaches' element={<BeachesPage />} />
          <Route path='beaches/pacificbeach' element={<PacificBeach />} />
          <Route path='beaches/missionbeach' element={<MissionBeach />} />
          <Route path='beaches/lajollacove' element={<LajollaCove />} />
          <Route path='beaches/lajollashores' element={<LajollaShores />} />
          <Route path='beaches/coronado' element={<Coronado />} />
          <Route path='beaches/sunsetcliffs' element={<SunsetCliffs />} />
          <Route path='beaches/oceanbeach' element={<OceanBeach />} />
        <Route path='/historic' element={<HistoricPage />} />
          <Route path='historic/landmarks' element={<Landmarks />} />
          <Route path='historic/parks' element={<Parks />} />
          <Route path='historic/museums' element={<Museums />} />
          <Route path='historic/artculture' element={<ArtCulture />} />
        <Route path='/nightlife' element={<NightLifePage />} />
          <Route path='nightlife/bars' element={<Bars />} />
          <Route path='nightlife/clubs' element={<Clubs />} />
          <Route path='nightlife/events' element={<Events />} />
        <Route path='/family' element={<FamilyPage />} />
          <Route path='family/attractionparks' element={<AttractionParks />} />
          <Route path='family/educational' element={<Educational />} />
          <Route path='family/sports' element={<Sports />} />
          <Route path='family/activities' element={<Activities />} />
        <Route path='/restaurants' element={<RestaurantsPage /> } />
          <Route path='restaurants/localfavorites' element={<LocalFavorites />} />
          <Route path='restaurants/casual' element={<Casual />} />
          <Route path='restaurants/formal' element={<Formal />} />
          <Route path='restaurants/onthewater' element={<OnWater />} />
        <Route path='/breweries' element={<BreweriesPage /> } />
          <Route path='breweries/craftbreweries' element={<CraftBreweries />} />
          <Route path='breweries/largebreweries' element={<LargeBreweries />} />
        <Route path='/desserts' element={<Desserts /> } />
        <Route path='/hikes' element={<Hikes /> } />
        <Route path='/shopping' element={<Shopping /> } />
      </Routes>
    </div>
  );
}

export default App;
