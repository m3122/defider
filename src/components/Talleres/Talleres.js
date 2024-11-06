import React, { useState } from 'react';
import Card from '../Tarjetas';
import Modal from './Modal';

function Talleres() {
    const talleresDep = [
        {
            nombre: 'Ajedrez', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Raúl Molina Muñoz',
                    recinto: 'Sala de Estar',
                    horarios: ['Jueves: 12:30 - 13:40']
                }]
        },
        {
            nombre: 'Balonmano', detalles: [
                {
                    sede: 'San Joaquín',
                    profesor: 'José Sanchez Maldonado',
                    recinto: 'Sala de Estar',
                    horarios: ['Viernes: 13:25 - 14:25']
                }]
        },
        {
            nombre: 'Básquetbol', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Antonio López Pérez',
                    recinto: 'Cancha 5x5',
                    horarios: ['Jueves: 12:30 - 13:40']
                }
            ]
        },
        {
            nombre: 'Básquetbol 3×3', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Mauricio Ramírez Alegría',
                    recinto: 'Cancha 5x5',
                    horarios: ['Viernes: 16:05 - 17:15']
                },
                {
                    sede: 'San Joaquín',
                    profesor: 'Felipe Reyes Sangermani',
                    recinto: 'Gimnasio',
                    horarios: ['Jueves: 12:15 - 13:25']
                },
                {
                    sede: 'Vitacura',
                    profesor: 'Felipe Reyes Sangermani',
                    recinto: 'Gimnasio',
                    horarios: ['Lunes: 13:25 - 14:25']
                }
            ]
        },
        {
            nombre: 'Fútbol', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Pablo Fernández Troncoso',
                    recinto: 'Estadio USM',
                    horarios: ['Lunes: 17:30 - 18:40']
                }
            ]
        },
        {
            nombre: 'Futsal', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Pablo Fernández Troncoso',
                    recinto: 'Cancha 7x7',
                    horarios: ['Miércoles: 17:30 - 18:40']
                },
                {
                    sede: 'San Joaquín',
                    profesor: 'Jose Silva Albornoz',
                    recinto: 'Gimnasio',
                    horarios: ['Miércoles: 17:10 - 18:20']
                }
            ]
        },
        {
            nombre: 'Gimnasia Artística', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Bruce Gallardo',
                    recinto: 'Gimnasio 1',
                    horarios: ['Martes y Jueves: 12:30 - 13:40']
                }
            ]
        },
        {
            nombre: 'Judo', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Gastón Vergara Verdejo',
                    recinto: 'Sala Multiuso Gimnasio 3',
                    horarios: ['Lunes: 20:15 - 21:25', 'Miércoles 18:50 - 20:00', 'Viernes: 17:30 - 18:40']
                }
            ]
        },
        {
            nombre: 'Running', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Miguel Gonzalez Vergara',
                    recinto: 'Pista Atlética Estadio USM',
                    horarios: ['Martes y Jueves: 11:05 - 12:15']
                }
            ]
        },
        {
            nombre: 'Karate', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Germán Oliveros Santos',
                    recinto: 'Sala Multiuso Gimnasio 3',
                    horarios: ['Sábado: 10:30 - 11:40']
                },
                {
                    sede: 'San Joaquín',
                    profesor: 'Patricio Cifra Abarca',
                    recinto: 'Gimnasio',
                    horarios: ['Jueves: 13:25 - 14:25']
                },
                {
                    sede: 'Vitacura',
                    profesor: 'Patricio Cifra Abarca',
                    recinto: 'Gimnasio',
                    horarios: ['Martes: 12:15 - 13:25']
                }
            ]
        },
        {
            nombre: 'Taekwondo', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Sebastián Aguilar Gajardo',
                    recinto: 'Gimnasio 2',
                    horarios: ['Martes : 17:30 - 18:40', 'Viernes: 16:05 - 17:15']
                }
            ]
        },
        {
            nombre: 'Tenis', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Enrique Cabello Contreras',
                    recinto: 'Cancha Tenis',
                    horarios: ['Jueves: 11:05 - 11:15']
                }
            ]
        },
        {
            nombre: 'Tenis de Mesa', detalles: [
                {
                    sede: 'San Joaquín',
                    profesor: 'Isabel Castillo Barrera',
                    recinto: 'Gimnasio',
                    horarios: ['Jueves: 17:10 - 18:20']
                }
            ]
        },
        {
            nombre: 'Ultimate Frisbee', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Antonio López Pérez',
                    recinto: 'Estadio USM',
                    horarios: ['Jueves: 17:30 - 18:40', 'Sábado: 11:05 - 12:15']
                }
            ]
        },
        {
            nombre: 'Vóleibol', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Jorge Botau Mancilla',
                    recinto: 'Gimnasio 2',
                    horarios: ['Martes y Jueves: 12:30 - 13:40']
                },
                {
                    sede: 'San Joaquín',
                    profesor: 'Luis Bugueño Lizana',
                    recinto: 'Gimnasio',
                    horarios: ['Martes: 13:25 - 14:25', 'Martes: 17:10 - 18:20']
                }
            ]
        },
        {
            nombre: 'Vóleibol Playa', detalles: [
                {
                    sede: 'San Joaquín',
                    profesor: 'Luis Bugueño Lizana',
                    recinto: 'Cancha Vóleibol Playa',
                    horarios: ['Jueves: 17:10 - 18:20']
                }
            ]
        }
    ];

    const talleresFit = [
        {
            nombre: 'Entrenamiento Funcional', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Gonzalo Riesco Camus y Jorge Botau Mancilla',
                    recinto: 'Sala Multiuso Gimnasio 3',
                    horarios: ['Martes: 9:35 - 10:45', 'Viernes: 12:15 - 13:25']
                },
                {
                    sede: 'San Joaquín',
                    profesor: 'Karen Cea',
                    recinto: 'Gimnasio',
                    horarios: ['Lunes: 13:25 - 14:25', 'Jueves: 12:15 - 13:25']
                },
                {
                    sede: 'Vitacura',
                    profesor: 'Karen Cea',
                    recinto: 'Gimnasio',
                    horarios: ['Martes: 13:25 - 14:25']
                }
            ]
        },
        {
            nombre: 'GAP', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Gonzalo Riesco Camus y Jorge Botau Mancilla',
                    recinto: 'Sala Multiuso Gimnasio 3',
                    horarios: ['Martes: 15:50 - 17:00', 'Viernes: 09:35 - 10:45']
                }
            ]
        },
        {
            nombre: 'Pilates', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Nicole Monsalve Vargas',
                    recinto: 'Sala Multiuso Gimnasio 3',
                    horarios: ['Lunes: 15:50 - 17:00', 'Jueves: 12:15 - 13:25']
                }
            ]
        },
        {
            nombre: 'Spinning', detalles: [
                {
                    sede: 'San Joaquín',
                    profesor: 'Valeska Ahumada',
                    recinto: 'Sala de Spinning',
                    horarios: ['Martes: 12:20 - 13:00', 'Martes: 13:10 - 14:00', 'Jueves: 12:20 - 13:00', 'Jueves: 13:10 - 14:00']
                }
            ]
        },
        {
            nombre: 'TRX', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Gonzalo Riesco Camus',
                    recinto: 'Sala Multiuso Gimnasio 3',
                    horarios: ['Jueves: 14:30 - 15:40', 'Viernes: 10:55 - 12:05']
                }
            ]
        },
        {
            nombre: 'Yoga', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Nicole Monsalve Vargas',
                    recinto: 'Sala Multiuso Gimnasio 3',
                    horarios: ['Lunes: 10:55 - 12:05', 'Jueves: 15:50 - 17:00']
                }
            ]
        }
    ];
    const talleresCul = [
        {
            nombre: 'Danza', detalles: [
                {
                    sede: 'San Joaquín',
                    profesor: 'Haruko Tsukame Saez',
                    recinto: 'Sala Multiuso',
                    horarios: ['Martes: 12:15 - 13:25', 'Viernes: 15:00 - 17:00']
                },
                {
                    sede: 'Vitacura',
                    profesor: 'Haruko Tsukame Saez',
                    recinto: 'Gimnasio',
                    horarios: ['Jueves: 12:15 - 13:25']
                }
            ]
        },
        {
            nombre: 'Danza Contemporánea', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Eveleen Rojas Salgado',
                    recinto: 'Gimnasio 2',
                    horarios: ['Lunes: 17:30 - 18:40']
                }
            ]
        },
        {
            nombre: 'Folclor', detalles: [
                {
                    sede: 'Casa Central',
                    profesor: 'Eveleen Rojas Salgado',
                    recinto: 'Sala Multiuso Gimnasio 3',
                    horarios: ['Martes: 11.05 - 13:40']
                },
                {
                    sede: 'San Joaquín',
                    profesor: 'Haruko Tsukame Saez',
                    recinto: 'Sala Multiuso',
                    horarios: ['Martes: 13:25 - 14:25'] /*Este horario es inventado*/
                },
                {
                    sede: 'Vitacura',
                    profesor: 'Haruko Tsukame Saez',
                    recinto: 'Gimnasio',
                    horarios: ['Viernes 17:30 - 19:40'] /*Este horario es inventado*/
                }
            ]
        },
        {
            nombre: 'Salsa', detalles: [
                {
                    sede: 'San Joaquín',
                    profesor: 'Haruko Tsukame Saez',
                    recinto: 'Sala Multiuso',
                    horarios: ['Viernes: 12:15 - 13:25']
                },
                {
                    sede: 'Vitacura',
                    profesor: 'Haruko Tsukame Saez',
                    recinto: 'Gimnasio',
                    horarios: ['Jueves: 12:25 - 14:25']
                }
            ]
        },
        {
            nombre: 'Teatro', detalles: [
                {
                    sede: 'San Joaquín',
                    profesor: 'José Gallardo Hurtado',
                    recinto: 'TAM San Joaquín',
                    horarios: ['Jueves: 12:15 - 13:25']
                },
                {
                    sede: 'Vitacura',
                    profesor: 'José Gallardo Hurtado',
                    recinto: 'Belloto 1',
                    horarios: ['Martes: 12:15 - 13:25']
                }
            ]
        },
    ];

    const [isModalOpen, setModalOpen] = useState(false);
    const [taller, setTaller] = useState(null);

    const handleOpen = (nombre, tallerArray) => {
        const selectedTaller = tallerArray.find((t) => t.nombre === nombre);
        if (selectedTaller) {
            setTaller(selectedTaller.detalles)
            setModalOpen(true);
        }
    };

    const handleClose = () => {
        setModalOpen(false);
        setTaller(null);
    };

    return (
        <div>
            <h2 className='title'>Talleres deportivos</h2>
            <div className='card-container-wrapper'>
                <div className='card-container'>
                    {talleresDep.map((taller, index) => {
                        const sedes = taller.detalles
                            .map((detalle) => detalle.sede)
                            .join(', ')
                            .replace(/, ([^,]*)$/, ' y $1');
                        return (
                            <Card
                                key={index}
                                nombre={taller.nombre}
                                lugar={sedes}
                                openModal={() => handleOpen(taller.nombre, talleresDep)}
                            />
                        );
                    })}
                    {isModalOpen && (
                        <Modal onClose={handleClose} children={taller} />
                    )}
                </div>
            </div>
            <h2 className='title'>Talleres Fitness</h2>
            <div className='card-container-wrapper'>
                <div className='card-container'>
                    {talleresFit.map((taller, index) => {
                        const sedes = taller.detalles
                            .map((detalle) => detalle.sede)
                            .join(', ')
                            .replace(/, ([^,]*)$/, ' y $1');
                        return (
                            <Card
                                key={index}
                                nombre={taller.nombre}
                                lugar={sedes}
                                openModal={() => handleOpen(taller.nombre, talleresFit)}
                            />
                        );
                    })}
                    {isModalOpen && (
                        <Modal onClose={handleClose} children={taller} />
                    )}
                </div>
            </div>
            <h2 className='title'>Talleres Artísticos y Culturales</h2>
            <div className='card-container-wrapper'>
                <div className='card-container'>
                    {talleresCul.map((taller, index) => {
                        const sedes = taller.detalles
                            .map((detalle) => detalle.sede)
                            .join(', ')
                            .replace(/, ([^,]*)$/, ' y $1');
                        return (
                            <Card
                                key={index}
                                nombre={taller.nombre}
                                lugar={sedes}
                                openModal={() => handleOpen(taller.nombre, talleresCul)}
                            />
                        );
                    })}
                    {isModalOpen && (
                        <Modal onClose={handleClose} children={taller} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Talleres;