import React,{useEffect,useState} from "react";


const ListTodos = () => {
  const [todos, setTodos] = useState([])

  
  const deleteTodo = async(id) =>{
    try {
       const deleteTodo =  await fetch(`http://localhost:3001/todos/${id}`,
        {
            method:"DELETE",
            headers:{"Content-Type": "application/json"},
            //body:JSON.stringify(body)
        });
        console.log(deleteTodo);
        //window.location="/";
    } catch (err) {
        console.log(err.message,"no annda")
    }
  }


  const getTodos = async() => {
    try {


        const response = await fetch("http://localhost:3001/todos")
        const jsonData = await response.json();
        
        //console.log(jsonData)
        setTodos(jsonData)
    } catch (err) {
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

                {/*<tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                </tr>*/}
                    {todos.map(t => (
                        <tr key={t.todo_id}>
                            <td>{t.description} </td>
                            <button>Editar</button>
                            <button className="btn btn-danger"
                                    onClick={() =>deleteTodo(t.todo_id)}>Eliminar</button>
                        </tr>

                    ))}
                </tbody>
            </table> 
        </>
    
    )
}



export default ListTodos;