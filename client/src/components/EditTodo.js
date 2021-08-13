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

            console.log(response)
        } catch (err) {
            console.error(err.message)
        }

    }


    return (
        <>
          <button type="button" 
                  class="btn btn-warning" 
                  data-toggle="modal" 
                  data-target={`#id${todo.todo_id}`}>  Editar
          </button>

            {/* aca tomo el dato precargado en el input y seteamos que sea el correspondiente
            */}
        <div class="modal" 
             id= {`id${todo.todo_id}`} >
            <div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                        <h4 class="modal-title">Editar Tarea</h4>
                        <button type="button" 
                                class="close" 
                                data-dismiss="modal">
                                &times;
                        </button>
                    </div>  

                    <div class="modal-body">
                        <input type="text" 
                               class="form-control" 
                               value={description} 
                               onChange={e => setDescription(e.target.value)}
                               onclick={e => {editDescription(e) }} />
                    </div>

                    <div class="modal-footer">
                        <button type="button" 
                                class="btn btn-warning" 
                                data-dismiss="modal">Editar</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" 
                                class="btn btn-danger"  
                                data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        </>


    )

}

export default EditTodo;