import { useState } from "react";


const Tabla = (props)=>{
    let users = props.user
    console.log(users);
    
    
   
    const imprimir = 
       users.map(x =>{
         let{ nombre, apelido}=x;
         
           return(
           <tr>
      <th scope="row"></th>
      <td>{nombre}</td>
      <td>{apelido}</td>
    </tr>
       )
       })
   
    

   return (
<table class="table">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Nombre</th>
      <th scope="col">apellido</th>
    </tr>
  </thead>
  <tbody>
    {imprimir}
  </tbody>
</table>
   ) 
}

export default Tabla;