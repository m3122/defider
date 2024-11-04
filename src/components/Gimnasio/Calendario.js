import React, { useState } from 'react';
import './Calendario.css';

function CalendarioSemanal() {
  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const bloquesHorario = [
    '08:00 - 09:00',
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
    '17:00 - 18:00'
  ];

  const [contadores, setContadores] = useState(
    diasSemana.reduce((acc, dia) => {
      acc[dia] = bloquesHorario.reduce((horas, bloque) => {
        horas[bloque] = 0;
        return horas;
      }, {});
      return acc;
    }, {})
  );

  const incrementarContador = (dia, bloque) => {
    setContadores((prevContadores) => ({
      ...prevContadores,
      [dia]: {
        ...prevContadores[dia],
        [bloque]: Math.min(prevContadores[dia][bloque] + 1, 15)
      }
    }));
  };

  return (
    <div className="calendario-semanal">
      {diasSemana.map((dia) => (
        <div key={dia} className="dia">
          <h3>{dia}</h3>
          {bloquesHorario.map((bloque) => {
            const cuposLlenos = contadores[dia][bloque] >= 15;
            return (
              <div
                key={bloque}
                className={`bloque-horario ${cuposLlenos ? 'sin-cupos' : 'con-cupos'}`}
                onClick={() => incrementarContador(dia, bloque)}
              >
                <strong>{bloque}</strong>
                <div>Cupos: {contadores[dia][bloque]} / 15</div>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default CalendarioSemanal;
