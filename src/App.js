import React from 'react';
import { Routes, Route } from 'react-router-dom'; 

import './App.css';
import Balboa from './pages/balboapark.component';
import Coronado from './pages/coronado.component';
import Downtown from './pages/downtown.component';
import Homepage from './pages/homepage.component';
import Kearney from './pages/kearneymesa.component';
import Lajolla from './pages/lajolla.component';
import Missionbeach from './pages/missionbeach.component';
import Oceanbeach from './pages/oceanbeach.component';
import Oldtown from './pages/oldtown.component';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/balboapark' element={<Balboa />} />
        <Route path='/coronado' element={<Coronado />} />
        <Route path='/downtown' element={<Downtown />} />
        <Route path='/kearneymesa' element={<Kearney />} />
        <Route path='/lajolla' element={<Lajolla />} />
        <Route path='/missionbeach' element={<Missionbeach />} />
        <Route path='/oceanbeach' element={<Oceanbeach />} />
        <Route path='/oldtown' element={<Oldtown />} />
      </Routes>
    </div>
  );
}

export default App;
