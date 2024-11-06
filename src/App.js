// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EventosPage from './components/Eventos/Eventos';
import Talleres from './components/Talleres/Talleres';
import Gimnasio from './components/Gimnasio/Gimnasio';
import Deportes from './components/Deportes/Deportes';
import DetalleDeporte from './components/Deportes/DetalleDeporte';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/eventos" element={<EventosPage />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/gimnasio" element={<Gimnasio />} />
          <Route path="/equipos" element={<Deportes />} />
          <Route path="/deportes/:deporte" element={<DetalleDeporte />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
