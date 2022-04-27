import React, { useEffect, useState } from 'react';
import Formulario from './Components/Formulario';
import Header from "./Components/Header";
import ListaCitas from './Components/ListaCitas';

const App = () => {

  //arreglo citas de localstorage
  let arrayCitas = JSON.parse(localStorage.getItem('citas')) ? JSON.parse(localStorage.getItem('citas')) : [] ;
  
  //estado true/false para editar
  const [edit, setEdit] = useState(false)
  //datos del formulario
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [fecha, setFecha] = useState("");
  const [nuevoID, setNuevoID] = useState('');

  //USESTATE
  //lista de tareas
  const [citas, setCitas] = useState(arrayCitas);
    //local Storage
    useEffect( () => {
      localStorage.setItem('citas', JSON.stringify(citas));
    },[citas])
    
    const total = citas.length;
    const atendidos = citas.filter( (item) => item.estado === true ).length;
    const desatendidos = citas.filter( (item) => item.estado !== true ).length;
   

    const [estados, setEstados] = useState({total:0, atendidos:0, desatendidos:0});
    useEffect( () => {
      setEstados({total,atendidos,desatendidos});
    },[citas] )

    
   
  
  //funcion pasar datos a editar
  const editarCita = (id,nombre,descripcion) => {
      setNombre(nombre);
      setDescripcion(descripcion);
      setNuevoID(id);
      setEdit(true)
  }




  return (
    <div>
      <Header />
      <div className="container">
          <Formulario 
          citas={citas} 
          setCitas={setCitas} 
          nombre={nombre}
          descripcion={descripcion}
          setNombre={setNombre}
          setDescripcion={setDescripcion}
          edit={edit}
          setEdit={setEdit}
          nuevoID={nuevoID}
          fecha={fecha}
          setFecha={setFecha}
          estados={estados}
          />
          <ListaCitas 
          citas={citas} 
          setCitas={setCitas}
          editarCita={editarCita} 
          />
      </div>
    </div>
  );
}

export default App;
