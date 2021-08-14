import React,{useEffect,useState} from "react";

import EditTodo from "./EditTodo"

const ListTodos = () => {
  const [todos, setTodos] = useState([])

  
  const deleteTodo = async(id) =>{
    try {
       const deleteTodo =  await fetch(`http://localhost:3001/todos/${id}`,
        {
            method:"DELETE",
          
        });

        setTodos(todos.filter(t => t.todo_id !== id))
       // console.log(deleteTodo);
      
    } catch (err) {
        console.log(err.message,"no anda el map listado")
    }
  }


  const getTodos = async() => {
    try {
        const response = await fetch("http://localhost:3001/todos")
        const jsonData = await response.json();
        
        //console.log(jsonData)
        setTodos(jsonData)
    } 
    catch (err) {
        console.log(err.message)
    }
  }
  
  
    useEffect(() => {
        getTodos();
       
    },[])
    
   // console.log(todos)
    return (
    
        <>
            <table className="table">
                <thead>
                <tr>
                    <th>Descripcion</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
                </thead>
                <tbody>
                    {todos.map(todo => (
                        <tr key={todo.todo_id}>
                            <td>{todo.description} </td>
                             <td> <EditTodo todo={todo} /> </td>
                            <button className="btn btn-danger"
                                    onClick={() =>deleteTodo(todo.todo_id)}>Eliminar</button>
                        </tr>

                    ))}
                </tbody>
            </table> 
        </>
    
    )
}



export default ListTodos;