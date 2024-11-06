import React from "react";
import "./Modal.css";

function Modal({ onClose, children }) {
    return (
        <div className="modal-container">
            <div className="modal">
                <div className="modal-header" onClick={() => onClose()}>
                    <p className="close">&times;</p>
                </div>
                <div className="modal-content">
                    {children.map((detalle, index) => (
                        <div key={index} className='formato-seccion'>
                            <h3>{detalle.sede}</h3>
                            <table className='tabla'>
                                <tbody>
                                    <tr>
                                        <th>Profesor</th>
                                        <td>{detalle.profesor}</td>
                                    </tr>
                                    <tr>
                                        <th>Recinto</th>
                                        <td>{detalle.recinto}</td>
                                    </tr>
                                    <tr>
                                        <th>Horarios</th>
                                        <td>
                                            {detalle.horarios.map((horario, idx) => (
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
};

export default Modal;