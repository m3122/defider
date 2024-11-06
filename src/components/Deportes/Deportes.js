import React from 'react';
import Card from '../Tarjetas';
import './Deportes.css'

function Deportes() {
    const deportes = [
        { nombre: 'Atletismo', tipo: 'individual', ruta: 'atletismo' },
        { nombre: 'Ajedrez', tipo: 'individual', ruta: 'ajedrez' },
        { nombre: 'Balonmano', tipo: 'colectivo', ruta: 'balonmano' },
        { nombre: 'Básquetbol', tipo: 'colectivo', ruta: 'basquetbol' },
        { nombre: 'Futsal', tipo: 'colectivo', ruta: 'futsal' },
        { nombre: 'Karate', tipo: 'de contacto', ruta: 'karate' },
        { nombre: 'Natación', tipo: 'individual', ruta: 'natacion' },
        { nombre: 'Rugby', tipo: 'colectivo', ruta: 'rugby' },
        { nombre: 'Taekwondo', tipo: 'de contacto', ruta: 'taekwondo' },
        { nombre: 'Tenis', tipo: 'individual', ruta: 'tenis' },
        { nombre: 'Tenis de mesa', tipo: 'individual', ruta: 'tenis-de-mesa' },
        { nombre: 'Vóleibol', tipo: 'colectivo', ruta: 'voleibol' },
    ];
    return (
        <div>
            <h2 className='title'>Selecciones deportivas</h2>
            <div className='card-container-wrapper'>
                <div className='card-container'>
                    {deportes.map((deporte, index) => (
                        <Card
                            key={index}
                            nombre={deporte.nombre}
                            tipo={`Deporte ${deporte.tipo}`}
                            ruta={`/deportes/${deporte.ruta}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Deportes;