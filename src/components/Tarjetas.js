import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tarjetas.css'

function Card({ nombre, tipo, lugar, ruta, openModal }) {
    const navigate = useNavigate();
    const handleClick = () => {
        if (openModal) {
            openModal();
        } else {
            navigate(ruta);
        }
    };
    return (
        <div className='card' onClick={handleClick}>
            <h3>{nombre}</h3>
            <p>{tipo != null ? tipo : lugar}</p>
        </div>
    );
}

export default Card;