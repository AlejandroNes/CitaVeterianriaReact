import React, {useState} from 'react'

const Formulario = ({citas, setCitas, nombre, setNombre, descripcion, setDescripcion,fecha,setFecha, edit, setEdit, nuevoID, estados}) => {

 
    const [incompleto, setIncompleto] = useState(false)

    //funcion validar formulario
    const validarFormulario = (e) => {
        e.preventDefault();
        if(!nombre.trim() || !descripcion.trim()){
            setIncompleto(true);
            setTimeout(() => {
                setIncompleto(false)
            }, 2000);
            return
        }
        
        const objCita = { id: Date.now(), nombre: nombre.toLocaleUpperCase(), descripcion: descripcion, fecha:fecha, estado: false }
        setCitas([...citas, objCita ]);
        setNombre("");
        setDescripcion("");
        setFecha('');
        setEdit(false)
    }

    //editar Formulario
    const editarFormulario = (e) => {
        e.preventDefault();
        if(!nombre.trim() || !descripcion.trim()){
            setIncompleto(true);
            setTimeout(() => {
                setIncompleto(false)
            }, 2000);
            return
        }

        const newCit = citas.map( item => {
            if(item.id === nuevoID){
                item.nombre = nombre
                item.descripcion = descripcion
                item.fecha = fecha
                return item
            }else{
                return item
            }
        } )

        setCitas([...newCit]);
        setNombre("");
        setDescripcion("");
        setFecha('');
        setEdit(false)

    }
    return (
        <form 
        onSubmit={edit ? editarFormulario : validarFormulario}
        className='border p-3 mt-3 shadow mx-5 rounded' 
        style={{ backgroundColor: "#40407a" }}
        >
            {
                incompleto ? (
                    <h2 className='text-center fw-light mb-3' style={{ color: "#ef5777" }}>Formulario Incompleto</h2>
                    ) : (
                    <h2 className='text-center fw-light mb-3 text-white '>
                        {edit ? "Editar Caso" : "Ingrese su Caso" }
                    </h2>
                    )
            }
            <div className='d-sm-flex justify-content-sm-center'>
                <div className="mb-3 w-sm-50 mx-2">
                    <input type="text"
                        className="form-control"
                        id="nombre"
                        placeholder='nombre de la mascota'
                        value={nombre}
                        onChange={ (e) => setNombre(e.target.value) }
                    />
                </div>
                <div className="mb-3 w-sm-50 mx-2">
                    <input type="text"
                        className="form-control"
                        id="nombre"
                        placeholder='descripción del problema'
                        value={descripcion}
                        onChange={ (e) => setDescripcion(e.target.value) }
                    />
                </div>
                <div className="mb-3 w-sm-50 mx-2">
                    <input type="date"
                        className="form-control"
                        id="fecha"
                        value={fecha}
                        onChange={ (e) => setFecha(e.target.value) }
                    />
                </div>
            </div>
            <div className='d-flex justify-content-center'>
                {edit ? (
                    <button 
                type="submit" 
                className="btn w-50 text-white"
                style={{ backgroundColor: "#fb7b0a"}}
                >
                    EDITAR
                </button>
                ): (
<button 
                type="submit" 
                className="btn w-50 text-white"
                style={{ backgroundColor: "#2c2c54"}}
                >
                    ENVIAR
                </button>
                )}
                <p className='text-white mx-2'>total {estados.total}</p>
                <p className='text-white mx-2'>atendidos {estados.atendidos}</p>
                <p className='text-white mx-2'>desatendidos {estados.desatendidos}</p>
            </div>
        </form>
    )
}

export default Formulario