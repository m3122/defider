import React from 'react';
import CalendarioSemanal from './Calendario';

function Gimnasio() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Bienvenido al Gimnasio</h2>
      <CalendarioSemanal />
    </div>
  );
}

export default Gimnasio;
