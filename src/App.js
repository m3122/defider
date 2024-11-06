// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Gimnasio from './components/Gimnasio/Gimnasio';
import Deportes from './components/Deportes/Deportes';
import DetalleDeporte from './components/Deportes/DetalleDeporte';
import Talleres from './components/Talleres/Talleres';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/gimnasio" element={<Gimnasio />} />
          <Route path="/deportes" element={<Deportes />} />
          <Route path="/deportes/:deporte" element={<DetalleDeporte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
