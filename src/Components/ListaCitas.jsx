import React from 'react'
import Cita from './Cita'

const ListaCitas = ({ citas, setCitas, editarCita }) => {

    //Funciones eliminar, editar, cambiar estado
    //funcion cambiar estado de la cita
    const estadoCita = (id) => {
       const cambiarEstado = citas.map( (item) => {
           if(id === item.id){
               item.estado = !item.estado;
               return item;
           }else{
               return item;
           }
       } )
       setCitas([...cambiarEstado]);
    } 
    //funcion para eliminar cita
    const eliminarCita = (id) => {
        const eliminarCita = citas.filter( (item) => item.id !== id );
        setCitas([...eliminarCita]);
    }

    return (
        <div className='container p-2 mt-4 shadow'>
            <h3 className='text-center text-muted fw-light'>Lista de Citas</h3>
            <div className="row">
                {/* iteracion del ciclo para mostrar las citas */}
                {citas.map((cita) => (
                   <Cita 
                   key={cita.id} 
                   cita={cita}
                   estadoCita ={ estadoCita }
                   eliminarCita={eliminarCita}
                   editarCita={editarCita}
                    />
                ))}
            </div>
        </div>
    )
}

export default ListaCitas