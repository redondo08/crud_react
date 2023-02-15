import { useState } from "react";
import Tabla from "./tabla";

const Formulario = () => {
    const [Nombre , setNombre] = useState('');
const [Apellido , setApellido] = useState('');
const [Estado, setEstado] = useState([])

const agregarUsuario = (e)=>{
    e.preventDefault();
    let usuario = {
        nombre:Nombre,
        apelido:Apellido
    }

    var buscar = Estado.find( usr => usr.nombre === Nombre && usr.apelido === Apellido)

    console.log(buscar) 

if(buscar == undefined){
  setEstado([...Estado,usuario]);
}
else{
  Swal.fire(
    'Error',
    'No puedes tener mas de 1 registro igual',
    'error'
  )
}
    
   
}

  return (
    <>
    <form action="" onSubmit={(e)=>agregarUsuario(e)}>
  <div class="mb-3">
    <label for="Nombre" class="form-label">Nombres</label>
    <input type="text" onChange={(e)=>setNombre(e.target.value)} class="form-control" id="Nombre" name="nombre" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="Apellido" class="form-label">Apellidos</label>
    <input type="text" onChange={(e)=>setApellido(e.target.value)} class="form-control" name="apellido" id="Apellido"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>

</form>
<br />

<Tabla user={Estado}/>
    </>
  );
};

export default Formulario
