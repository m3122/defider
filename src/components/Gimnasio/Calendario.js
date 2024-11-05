import React, { useState, useEffect } from 'react';
import './CalendarioSemanal.css';

const urlsJson = ['/cupos.json', '/cupos_alt.json'];

function CalendarioSemanal() {
  const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
  const bloquesHorario = [
    '09:40 - 10:50',
    '11:05 - 12:15',
    '12:30 - 13:40',
    '14:40 - 15:50',
    '16:05 - 17:15',
    '17:30 - 18:40',
    '18:50 - 20:00',
    '20:15 - 21:25'
  ];

  const [contadores, setContadores] = useState({});
  const [jsonIndex, setJsonIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedDia, setSelectedDia] = useState(null);
  const [selectedBloque, setSelectedBloque] = useState(null);

  const semanaTitulo = jsonIndex === 0 ? 'Semana 11/11 - 15/11' : 'Semana 18/11 - 22/11';

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
    if (cupos < 15) {
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
      <h2>{semanaTitulo}</h2>
      <button className="boton-navegacion" onClick={retrocederJSON} disabled={jsonIndex === 0}>
        Anterior
      </button>
      <button className="boton-navegacion" onClick={avanzarJSON} disabled={jsonIndex === urlsJson.length - 1}>
        Siguiente
      </button>


      <div className="calendario-semanal">
        <div className="horarios">
          <h3>Horario</h3>
          {bloquesHorario.map((bloque) => (
            <div key={bloque} className="bloque-horario">
              <strong>{bloque}</strong>
            </div>
          ))}
        </div>
        <div className="dias">
          {diasSemana.map((dia) => (
            <div key={dia} className="dia">
              <h3>{dia}</h3>
              {bloquesHorario.map((bloque) => {
                const cupos = contadores[dia]?.[bloque] ?? 0;
                const cuposLlenos = cupos >= 15;
                return (
                  <div
                    key={bloque}
                    className={`cupos ${cuposLlenos ? 'sin-cupos' : 'con-cupos'}`}
                    onClick={() => abrirModal(dia, bloque)}
                  >
                    <div>Cupos: {cupos} / 15</div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <p>
              ¿Deseas agendar tu hora para el <b>{selectedDia}</b> en el bloque <b>{selectedBloque}</b>?
            </p>
            <button className="cancelar" onClick={cerrarModal}>Cancelar</button>
            <button className="aceptar" onClick={confirmarIncremento}>Aceptar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalendarioSemanal;
