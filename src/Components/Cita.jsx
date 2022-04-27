import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare, faCheckDouble, faMoneyCheck } from '@fortawesome/free-solid-svg-icons'

const Cita = ({ cita, estadoCita, eliminarCita, editarCita }) => {
    const { nombre, descripcion, fecha, id } = cita


    return (
        <div className='col-12 col-sm-6 my-2'>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{nombre}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{fecha}</h6>
                    <p className="card-text">{descripcion}</p>
                    <div className='d-flex justify-content-between'>
                        <div>
                            <button
                                className="card-link btn btn-sm btn-warning text-white"
                                onClick={() => editarCita(id, nombre, descripcion)}

                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </button>

                            <button
                                className="card-link btn btn-sm btn-danger"
                                onClick={() => eliminarCita(id)}
                            >
                                <FontAwesomeIcon icon={faTrashCan} />
                            </button>

                        </div>

                        {cita.estado ? (
                            <button
                                className="card-link btn btn-sm btn-muted"
                                onClick={() => estadoCita(id)}
                            >
                                <FontAwesomeIcon icon={faCheckDouble} />
                            </button>
                        ) : (

                            <button
                                className="card-link btn btn-sm btn-muted"
                                onClick={() => estadoCita(id)}
                            >
                                <FontAwesomeIcon icon={faMoneyCheck} />
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cita