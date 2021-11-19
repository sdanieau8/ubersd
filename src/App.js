import React from 'react';
import { Routes, Route } from 'react-router-dom';


import './App.css';

import HomePage from './pages/homepage.component';

const BeachesPage = () => (
  <div>
    <h1>BEACHES</h1>
  </div>

);

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/beaches' element={<BeachesPage />} />
      </Routes>
    </div>
  );
}

export default App;
