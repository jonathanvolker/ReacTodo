import React from 'react';

const EditTodo = () => {

    return (
        <>
          <button type="button" 
                  class="btn btn-primary" 
                  data-toggle="modal" 
                  data-target="#myModal">  Editar
          </button>


        <div class="modal" id="myModal">
            <div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-header">
                        <h4 class="modal-title">Editar Tarea</h4>
                        <button type="button" 
                                class="close" 
                                data-dismiss="modal">&times;</button>
                    </div>  
                    <div class="modal-body">
                        <input type="text" 
                               class="form-control"/>
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