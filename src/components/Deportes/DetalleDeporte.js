import React from 'react';
import { useParams } from 'react-router-dom';
import './DetalleDeporte.css'

function Detalle() {
    const { deporte } = useParams();
    const deportes = [
        {
            id: 'atletismo', nombre: 'Atletismo', detalle: "El atletismo es un deporte organizado que abarca numerosas disciplinas agrupadas en carreras, saltos, lanzamientos y pruebas variadas. Entre las carreras se distinguen las carreras de velocidad, medio fondo, fondo, saltos y relevos. Dentro de las otras pruebas, existe la marcha de 20 o 50 km; salto de longitud, triple salto, salto de altura y salto con pértiga; lanzamientos de peso o bala, de disco, de martillo y de jabalina; y pruebas combinadas tales como el pentatlón, heptatlón y decatlón.\n\n La USM cuenta con selecciones de atletismo en Valparaíso, en categorías damas y varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES).",
            formatos: [
                {
                    sede: 'Casa Central',
                    genero: 'Mixto',
                    profesor: 'Miguel González Vergara',
                    recinto: 'Estadio USM',
                    horarios: ['Lunes, Martes y Jueves: 12:15 - 13:25']
                }
            ]
        },
        {
            id: 'ajedrez', nombre: 'Ajedrez', detalle: 'El ajedrez es un juego entre dos contrincantes, donde cada uno dispone de 16 piezas móviles que se colocan sobre un tablero cuadriculado de 8 × 8 casillas o escaques. Se trata de un juego de estrategia en el que el objetivo es «derrocar» al rey del oponente, amenazando la casilla que ocupa el rey con alguna de las piezas propias sin que el otro jugador pueda protegerlo. \n\nLa selección de Ajedrez de la USM está ubicada en Valparaíso, y es integrada por damas y varones. Compite en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional.',
            formatos: [
                {
                    sede: 'Casa Central',
                    genero: 'Mixto',
                    profesor: 'Raúl Molina Muñoz',
                    recinto: 'Sala de Ajedrez',
                    horarios: ['Martes: 12:15 - 15:40', 'Jueves: 14:30 - 16:00']
                }
            ]
        },
        {
            id: 'balonmano', nombre: 'Balonmano', detalle: 'El balonmano es un deporte colectivo, donde se enfrentan dos equipos de siete jugadores, con seis personas en cancha más un portero. Se juega en una cancha de 42×20 metros y su objetivo es transportar el balón con las manos, haciendo goles en la portería contraria. El jugador de balonmano destaca por su resistencia, velocidad y habilidad para realizar movimientos con el balón.\n\nLa USM cuenta con selecciones de Balonmano en Valparaíso y Santiago, en categorías Damas y Varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES).',
            formatos: [
                {
                    sede: 'Casa Central',
                    genero: 'Damas',
                    profesor: 'Víctor Valenzuela Sagredo',
                    recinto: 'Cancha 7x7 - Gimnasio UTFSM Sede Viña del Mar',
                    horarios: ['Martes y Jueves: 12:20 - 13:50', 'Viernes 19:30 - 21:00']
                },
                {
                    sede: 'Casa Central',
                    genero: 'Varones',
                    profesor: 'Víctor Valenzuela Sagredo',
                    recinto: 'Cancha 7x7',
                    horarios: ['Lunes: 15:50 - 17:30', 'Martes y Jueves: 12:15 - 13:50']
                },
                {
                    sede: 'San Joaquín',
                    genero: 'Damas',
                    profesor: 'Carlos Guaquín Barcenas',
                    recinto: 'Gimnasio Campus San Joaquin',
                    horarios: ['Lunes 17:10 - 19:00', 'Jueves 18:30 - 20:30']
                },
                {
                    sede: 'San Joaquín',
                    genero: 'Varones',
                    profesor: 'José Sánchez Maldonado',
                    recinto: 'Gimnasio Campus San Joaquin',
                    horarios: ['Miércoles 18:15 - 20:15', 'Jueves 20:30 a 22:15']
                }
            ]
        },
        {
            id: 'basquetbol', nombre: 'Básquetbol', detalle: 'El básquetbol es un deporte de equipo jugado entre dos conjuntos de cinco jugadores cada uno. Su objetivo es anotar puntos introduciendo un balón por la canasta, un aro a 3,05 metros sobre la pista de juego. El contacto con la pelota se realiza con las manos y se juega en una cancha de 28×15 metros.\n\nLa USM cuenta con selecciones de Básquetbol en Valparaíso y Santiago, en categorías Damas y Varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES). Además, la Selección de Básquetbol Varones de Casa Central también compite como invitada en la Asociación de Básquetbol de Valparaíso.',
            formatos: [
                {
                    sede: 'Casa Central',
                    genero: 'Damas',
                    profesor: 'Camilo Bustamante Guerrero',
                    recinto: 'Cancha 5x5',
                    horarios: ['Lunes: 17:10 - 18:40', 'Martes y Jueves: 12:15 - 13:45']
                },
                {
                    sede: 'Casa Central',
                    genero: 'Varones',
                    profesor: 'Mauricio Ramírez Alegría',
                    recinto: 'Cancha 5x5',
                    horarios: ['Lunes : 19:50 - 21:20', 'Martes y Miércoles: 18:30 - 20:00']
                },
                {
                    sede: 'San Joaquín',
                    genero: 'Damas',
                    profesor: 'Jaime Castillo Saldias',
                    recinto: 'Gimnasio',
                    horarios: ['Lunes 20:30 - 22:00', 'Martes 19:00 - 20:30']
                },
                {
                    sede: 'San Joaquín',
                    genero: 'Varones',
                    profesor: 'Jaime Castillo Saldias',
                    recinto: 'Gimnasio',
                    horarios: ['Lunes 19:00 - 22:30', 'Martes 20:30 - 22:00']
                }
            ]
        },
        {
            id: 'futsal', nombre: 'Futsal', detalle: 'El futsal es un deporte de equipo jugado entre dos conjuntos de cinco jugadores cada uno, con cuatro jugadores en cancha y un portero. Se juega en una cancha de 40×20 metros y su objetivo es desplazar el balón mayoritariamente con los pies, haciendo goles en la portería contraria.\n\nNuestras selecciones cuentan con jugadores aguerridos, con excelente resistencia, espíritu de equipo y experiencia jugando en equipos de futsal.\n\nLa USM cuenta con selecciones de Futsal en Santiago, en categorías Hombres. Esta compite en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES).',
            formatos: [
                {
                    sede: 'San Joaquín y Campus Vitacura',
                    genero: 'Varones',
                    profesor: 'José Silva',
                    recinto: 'Gimnasio San Joaquín',
                    horarios: ['Miércoles: 20:30 - 22:30', 'Viernes: 20:00 - 22:00']
                }
            ]
        },
        {
            id: 'karate', nombre: 'Karate', detalle: 'El karate es un arte marcial tradicional basada en algunos estilos de las artes marciales chinas (wushu), y en menor medida en otras disciplinas provenientes del sureste asiático. En su práctica competitiva, la Federación Mundial de Karate (WKF) reconoce diferentes modalidades de participación: Kumite (individual y por equipos); Kata (individual y por equipos sincronizados) y Para-Karate.\n\nLa USM cuenta con selecciones de Karate en Valparaíso y Santiago, en categorías damas y varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES).',
            formatos: [
                {
                    sede: 'Casa Central',
                    genero: 'Mixto',
                    profesor: 'Germán Oliveros Santos',
                    recinto: 'Gimnasio 3',
                    horarios: ['Martes y Jueves: 18:30 - 20:00', 'Sábado: 11:45 - 13:25']
                },
                {
                    sede: 'San Joaquín',
                    genero: 'Mixto',
                    profesor: 'Patricio Cifra Abarca',
                    recinto: 'Gimnasio Campus San Joaquín',
                    horarios: ['Jueves 12:15 - 13:25', 'Sábado 09:30 - 11:00']
                },
                {
                    sede: 'Vitacura',
                    genero: 'Mixto',
                    profesor: 'Patricio Cifra Abarca',
                    recinto: 'Gimnasio Campus',
                    horarios: ['Martes 12:15 - 13:25']
                }
            ]
        },
        {
            id: 'natacion', nombre: 'Natación', detalle: 'El deporte acuático en natación se practica individualmente, e implica la competencia entre participantes para ser el más rápido sobre una distancia establecida, exclusivamente mediante propulsión propia. A nivel universitario, se compite en distintas etapas que comprenden pruebas tales como: estilo libre, espalda, mariposa, pecho, combinado y relevos combinados, con diferentes distancias a recorrer.\n\nLa USM cuenta con selecciones de Natación en Valparaíso y Santiago, en categorías damas y varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES).',
            formatos: [
                {
                    sede: 'Casa Central',
                    genero: 'Mixto',
                    profesor: '-',
                    recinto: 'Piscina USM',
                    horarios: ['Martes y Jueves: 18:30 - 20:00', 'Sábado: 11:45 - 13:25']
                },
                {
                    sede: 'San Joaquín',
                    genero: 'Mixto',
                    profesor: 'Juan Páez Ríos',
                    recinto: 'Piscina PUC Campus San Joaquín',
                    horarios: ['Martes 13:00 - 14:00', 'Viernes 15:15 - 16:15']
                },
                {
                    sede: 'Vitacura',
                    genero: 'Mixto',
                    profesor: 'Juan Páez Ríos',
                    recinto: 'Piscina AquaVita',
                    horarios: ['Lunes 20:00 - 21:00', 'Miércoles 20:00 - 21:00']
                }
            ]
        },
        {
            id: 'rugby', nombre: 'Rugby', detalle: 'El rugby es un deporte de evasión y contacto en equipo. Se juega en un campo rectangular, de un máximo de 95×65 metros, más dos áreas de anotación en los extremos. Su objetivo es anotar puntos apoyando o pateando el balón en la zona de anotación.\n\nEl Rugby universitario se juega en modalidad de rugby 7 o rugby seven, variante donde participan siete jugadores por equipo en lugar de 15. Las habilidades más importantes en el seven son la velocidad, la técnica y la buena forma física.\n\nLa USM cuenta con selecciones de Rugby en Valparaíso y Santiago, en categoría Varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional.',
            formatos: [
                {
                    sede: 'Casa Central',
                    genero: 'Varones',
                    profesor: '-',
                    recinto: 'Estadio USM',
                    horarios: ['Martes y Jueves: 12:15 - 13:45', 'Miércoles: 18:30 - 20:00']
                },
                {
                    sede: 'San Joaquín',
                    genero: 'Varones',
                    profesor: 'Miguel González Vergara',
                    recinto: 'USM Campus San Joaquín / PUC Campus San Joaquín',
                    horarios: ['Lunes 20:00 - 22:00', 'Miércoles 19:00 - 21:00']
                }
            ]
        },
        {
            id: 'taekwondo', nombre: 'Taekwondo', detalle: 'El taekwondo es un arte marcial coreano moderno, reconocido como deporte olímpico, que destaca por la variedad y espectacularidad de sus técnicas de patadas, siendo una de las artes marciales más efectivas y conocidas del mundo. El taekwondo se considera un método que busca acondicionar el cuerpo y potenciarlo físicamente, además del desarrollo de la voluntad y la sabiduría por medio de la experiencia. Basándose en las diversas leyes físicas para generar la máxima potencia, enfocándola de manera precisa, mediante la aceleración de la masa corporal.\n\nLa USM cuenta con selecciones de Taekwondo en Valparaíso y Santiago, en categorías damas y varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES).',
            formatos: [
                {
                    sede: 'Casa Central',
                    genero: 'Mixto',
                    profesor: 'Sebastián Aguilar Gajardo',
                    recinto: 'Gimnasio 2',
                    horarios: ['Martes y Jueves: 18:30 - 20:00', 'Viernes: 19:50 - 21:20']
                },
                {
                    sede: 'San Joaquín',
                    genero: 'Mixto',
                    profesor: 'Esteban Vitagliano Einicke',
                    recinto: 'Campus San Joaquín',
                    horarios: ['Martes 12:15 - 14:20', 'Viernes 13:25 - 14:25']
                },
                {
                    sede: 'Vitacura',
                    genero: 'Mixto',
                    profesor: 'Esteban Vitagliano Einicke',
                    recinto: 'Campus Vitacura',
                    horarios: ['Lunes 13:25 - 14:25', 'Jueves 12:15 - 14:25']
                }
            ]
        },
        {
            id: 'tenis', nombre: 'Tenis', detalle: 'El tenis es un deporte de raqueta practicado sobre una pista rectangular, delimitada por líneas y dividida por una red. Se disputa entre dos jugadores (individuales) o entre dos parejas (dobles). El objetivo del juego es lanzar una pelota golpeándola con la raqueta, de modo que pase la red y rebote dentro de los límites del campo del rival, procurando que este no pueda devolverla, para conseguir un segundo rebote en el suelo y por ende un punto.\n\nLa selección de Tenis de la USM es de categoría varones y está ubicada en Valparaíso. Compite en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional.',
            formatos: [
                {
                    sede: 'Casa Central',
                    genero: 'Mixto',
                    profesor: 'Enrique Cabello Contreras',
                    recinto: 'Cancha de Tenis',
                    horarios: ['Lunes y Jueves: 12:15 - 13:25', 'Martes: 12:15 - 13:45']
                }
            ]
        },
        {
            id: 'tenis-de-mesa', nombre: 'Tenis de mesa', detalle: 'El tenis de mesa es un deporte de raqueta que se disputa entre dos jugadores o dos parejas (dobles). Se juega sobre una mesa o superficie de juego de 2,74×1,525 m, y una altura de 76 cm.\n\nDiversos estudios han demostrado que la práctica de este deporte mejora, entre otras, la capacidad y el tiempo de reacción, la coordinación ojo-mano, la concentración y la memoria.\n\nLa USM cuenta con selecciones de Tenis de Mesa en Valparaíso y Santiago, en categorías Damas y Varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES).',
            formatos: [
                {
                    sede: 'Casa Central',
                    genero: 'Mixto',
                    profesor: 'Hugo del Solar Videla',
                    recinto: 'Gimnasio 2',
                    horarios: ['Lunes, Miércoles y Viernes: 19:50 - 21:20']
                },
                {
                    sede: 'San Joaquín',
                    genero: 'Mixto',
                    profesor: 'Isabel Castillo Barrera',
                    recinto: 'Gimnasio Campus San Joaquín',
                    horarios: ['Jueves 12:15 - 14:25', 'Sábado 10:30 - 12:00']
                },
                {
                    sede: 'Vitacura',
                    genero: 'Mixto',
                    profesor: 'Isabel Castillo Barrera',
                    recinto: 'Gimnasio Campus Vitacura',
                    horarios: ['Martes 12:15 - 14:25']
                }
            ]
        },
        {
            id: 'voleibol', nombre: 'Vóleibol', detalle: 'El vóleibol es un deporte que se juega con una pelota y en el que dos equipos, integrados por seis jugadores cada uno, se enfrentan sobre un área de juego de 18×9 metros separada por una red central. El objetivo del juego es pasar el balón por encima de la red, golpeándolo con manos y brazos, logrando que llegue al suelo del campo contrario.\n\nLa USM cuenta con selecciones de Vóleibol en Valparaíso y Santiago, en categorías Damas y Varones. Éstas compiten en campeonatos de la Federación Nacional Universitaria de Deportes (FENAUDE) a nivel Regional y Nacional, y en campeonatos de la Liga Deportiva de Educación Superior (LDES).',
            formatos: [
                {
                    sede: 'Casa Central',
                    genero: 'Damas',
                    profesor: 'Cesar Tapia Pizarro',
                    recinto: 'Gimnasio 1',
                    horarios: ['Lunes: 18:30 - 20:00', 'Martes y Jueves: 17:10 - 18:40']
                },
                {
                    sede: 'Casa Central',
                    genero: 'Varones',
                    profesor: 'Alexis Pino Roa',
                    recinto: 'Gimnasio 1',
                    horarios: ['Martes y Jueves: 18:50 - 20:20', 'Miércoles: 18:30 - 20:00']
                },
                {
                    sede: 'San Joaquín',
                    genero: 'Damas',
                    profesor: 'Francisco García Vásquez',
                    recinto: 'Gimnasio Campus San Joaquín',
                    horarios: ['Lunes 19:00 - 21:00', 'Martes 20:30 - 22:30']
                },
                {
                    sede: 'San Joaquín',
                    genero: 'Varones',
                    profesor: 'Luis Bugueño Lizana',
                    recinto: 'Gimnasio Campus San Joaquín',
                    horarios: ['Lunes 21:00 - 22:30', 'Martes 18:30 - 20:30']
                }
            ]
        }
    ]

    const seleccion = deportes.find(d => d.id === deporte);

    return (
        <div className='seccion'>
            <h1 className='title'>{seleccion.nombre}</h1>
            <div className='contenido'>
                <div className='descripcion'>
                    <p>{seleccion.detalle}</p>
                    <img src="/voleibolUSM.jpg" alt="Seleccion de Voleibol USM - Varones" />
                </div>
                <div className='tablas'>
                    {seleccion.formatos.map((formato, index) => (
                        <div key={index} className='formato-seccion'>
                            <h3>{formato.sede} - {formato.genero}</h3>
                            <table className='tabla'>
                                <tbody>
                                    <tr>
                                        <th>Profesor</th>
                                        <td>{formato.profesor}</td>
                                    </tr>
                                    <tr>
                                        <th>Recinto</th>
                                        <td>{formato.recinto}</td>
                                    </tr>
                                    <tr>
                                        <th>Horarios</th>
                                        <td>
                                            {formato.horarios.map((horario, idx) => (
                                                <div key={idx}>{horario}</div>
                                            ))}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

}

export default Detalle;