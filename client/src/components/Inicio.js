import React from 'react';
import InputTodo from './InputTodo';
const Inicio = ()=>{


    return(
        <>
      <div class="jumbotron">
        <h1>Bienvenido a sus Tareas</h1>
        <p></p>
        <a className="btn btn-success"
               href="http://localhost:3000/list"> Agregar/editar... </a>
      </div>
        </>
    )
}

export default Inicio;