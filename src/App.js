import React from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

import HomePage from './pages/main/homepage.component';
import BeachesPage from './pages/main/beaches.component';

import PacificBeach from './pages/secondary/beaches/pb.component';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beaches' element={<BeachesPage />} />
        <Route path='beaches/pacificbeach' element={<PacificBeach />} />
      </Routes>
    </div>
  );
}

export default App;
