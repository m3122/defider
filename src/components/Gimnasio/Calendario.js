import React, { useState, useEffect } from 'react';
import './CalendarioSemanal.css';

const urlsJson = ['/cupos.json', '/cupos_alt.json'];

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

  const [contadores, setContadores] = useState({});
  const [jsonIndex, setJsonIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedDia, setSelectedDia] = useState(null);
  const [selectedBloque, setSelectedBloque] = useState(null);
  
  // Definición del título de la semana
  const semanaTitulo = jsonIndex === 0 ? 'Semana 1' : 'Semana 2';

  useEffect(() => {
    fetch(urlsJson[jsonIndex])
      .then((response) => response.json())
      .then((data) => setContadores(data))
      .catch((error) => console.error('Error al cargar los datos de cupos:', error));
  }, [jsonIndex]);

  const avanzarJSON = () => {
    if (jsonIndex < urlsJson.length - 1) {
      setJsonIndex((prevIndex) => prevIndex + 1);
    }
  };

  const retrocederJSON = () => {
    if (jsonIndex > 0) {
      setJsonIndex((prevIndex) => prevIndex - 1);
    }
  };

  const abrirModal = (dia, bloque) => {
    const cupos = contadores[dia]?.[bloque] ?? 0;
    if (cupos < 15) { // Verifica si el horario tiene cupos disponibles
      setSelectedDia(dia);
      setSelectedBloque(bloque);
      setShowModal(true);
    }
  };

  const cerrarModal = () => {
    setShowModal(false);
    setSelectedDia(null);
    setSelectedBloque(null);
  };

  const confirmarIncremento = () => {
    if (selectedDia && selectedBloque) {
      setContadores((prevContadores) => ({
        ...prevContadores,
        [selectedDia]: {
          ...prevContadores[selectedDia],
          [selectedBloque]: Math.min((prevContadores[selectedDia]?.[selectedBloque] || 0) + 1, 15)
        }
      }));
    }
    cerrarModal();
  };

  return (
    <div>
      <h3>{semanaTitulo}</h3> {/* Título de la semana */}
      <button onClick={retrocederJSON} disabled={jsonIndex === 0}>
        Volver
      </button>
      <button onClick={avanzarJSON} disabled={jsonIndex === urlsJson.length - 1}>
        Avanzar
      </button>

      <div className="calendario-semanal">
        {diasSemana.map((dia) => (
          <div key={dia} className="dia">
            <h3>{dia}</h3>
            {bloquesHorario.map((bloque) => {
              const cupos = contadores[dia]?.[bloque] ?? 0;
              const cuposLlenos = cupos >= 15;
              return (
                <div
                  key={bloque}
                  className={`bloque-horario ${cuposLlenos ? 'sin-cupos' : 'con-cupos'}`}
                  onClick={() => abrirModal(dia, bloque)}
                >
                  <strong>{bloque}</strong>
                  <div>Cupos: {cupos} / 15</div>
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>
              ¿Deseas agendar tu hora para el <b>{selectedDia}</b> en el bloque <b>{selectedBloque}</b>?
            </p>
            <button onClick={cerrarModal}>Cancelar</button>
            <button onClick={confirmarIncremento}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarioSemanal;
