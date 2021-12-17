import React from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

import HomePage from './pages/main/homepage.component';
import BeachesPage from './pages/main/beaches.component';
import HistoricPage from './pages/main/historic.components';

import PacificBeach from './pages/secondary/beaches/pb.component';
import MissionBeach from './pages/secondary/beaches/mb.component';
import LajollaCove from './pages/secondary/beaches/lajollacove.component';
import LajollaShores from './pages/secondary/beaches/lajollashores.component';
import Coronado from './pages/secondary/beaches/coronado.component';
import SunsetCliffs from './pages/secondary/beaches/sunsetcliffs.component';
import OceanBeach from './pages/secondary/beaches/ob.component';
import Landmarks from './pages/secondary/historic/landmarks.component';


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
      </Routes>
    </div>
  );
}

export default App;
