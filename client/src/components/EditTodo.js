import React,{useState} from 'react';

const EditTodo = ({todo}) => {
    //console.log(todo)
    const [description,setDescription]= useState(todo.description)

    //editar descripcion
    const editDescription = async (e) =>{
       e.preventDefault();
        try {
            const body = {description};
            const response = await fetch(`http://localhost:3001/todos/${todo.todo_id}` ,
            {
                method:"PUT",
                headers:{"Content-Type": "application/json"},
                body:JSON.stringify(body)
            })
            //refresco la pag para ver las lista
            window.location="/";
            //console.log(response)
        } catch (err) {
            console.error(err.message)
        }

    }


    return (
        <>
          <button type="button" 
                  className="btn btn-warning" 
                  data-toggle="modal" 
                  data-target={`#id${todo.todo_id}`}>  Editar
          </button>

            {/* aca tomo el dato precargado en el input y seteamos que sea el correspondiente
            */}
        <div className="modal" 
             id= {`id${todo.todo_id}`}
             onClick={() =>setDescription(todo.description) } 
             >
            <div className="modal-dialog">
                <div className="modal-content">
                   <div className="modal-header">
                        <h4 className="modal-title">Editar Tarea</h4>
                        <button type="button" 
                                className="close" 
                                data-dismiss="modal"
                                onClick= {() =>{setDescription(todo.description)}}
                        >
                                &times;
                        </button>
                    </div>  

                    <div className="modal-body">
                        <input type="text" 
                               className="form-control" 
                               value={description} 
                               onChange={e => setDescription(e.target.value)}
                              />
                    </div>

                    <div className="modal-footer">
                        <button type="button" 
                                className="btn btn-warning" 
                                data-dismiss="modal"
                                onClick={e => {editDescription(e) }} >Editar</button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" 
                                className="btn btn-danger"  
                                data-dismiss="modal"
                                onClick={() =>setDescription(todo.description) }>Close</button>
                    </div>
                </div>
            </div>
        </div>

        </>


    )

}

export default EditTodo;