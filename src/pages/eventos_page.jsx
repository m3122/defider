import React, {useState} from 'react'

export const EventosPage = () => {
    const months = {
      octubre: {
        name: 'Octubre',
        events: [
          { day: 15, dayName: 'MARTES', title: 'Torneo de Fútbol Interfacultades' },
          { day: 22, dayName: 'MARTES', title: 'Campeonato de Vóleibol' },
          { day: 31, dayName: 'JUEVES', title: 'Maratón USM' }
        ]
      },
      septiembre: {
        name: 'Noviembre',
        events: [
          { day: 13, dayName: 'VIERNES', title: 'Competencia de Natación' },
          { day: 24, dayName: 'MARTES', title: 'Torneo de Tenis de Mesa' },
          { day: 26, dayName: 'JUEVES', title: 'Encuentro de Básquetbol' }
        ]
      },
      diciembre: {
        name: 'Diciembre',
        events: [
          { day: 5, dayName: 'JUEVES', title: 'Final Copa USM' },
          { day: 12, dayName: 'JUEVES', title: 'Premiación Deportistas Destacados' },
          { day: 19, dayName: 'JUEVES', title: 'Cierre Actividades Deportivas 2024' }
        ]
      }
    };
  
    const monthOrder = ['octubre', 'septiembre', 'diciembre'];
    const [currentMonthIndex, setCurrentMonthIndex] = useState(1); // Septiembre como mes inicial
  
    const handlePrevMonth = () => {
      setCurrentMonthIndex(prev => (prev > 0 ? prev - 1 : prev));
    };
  
    const handleNextMonth = () => {
      setCurrentMonthIndex(prev => (prev < monthOrder.length - 1 ? prev + 1 : prev));
    };
  
    const currentMonth = months[monthOrder[currentMonthIndex]];
  
    return (
      <div className="events-container">
        <h1 className="events-title">Eventos</h1>
        
        <div className="month-navigation">
          <button 
            className="nav-button"
            onClick={handlePrevMonth}
            disabled={currentMonthIndex === 0}
          >
            <span className="arrow">←</span>
          </button>
          <h2 className="month-title">{currentMonth.name}</h2>
          <button 
            className="nav-button"
            onClick={handleNextMonth}
            disabled={currentMonthIndex === monthOrder.length - 1}
          >
            <span className="arrow">→</span>
          </button>
        </div>
  
        <div className="events-list">
          {currentMonth.events.map((event, index) => (
            <div className="event-item" key={index}>
              <div className="event-date">
                <span className="day-name">{event.dayName}</span>
                <span className="day-number">{event.day}</span>
              </div>
              <div className="event-content">
                <div className="event-details">
                  <h3 className="event-title">{event.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
  )
}

export default EventosPage
