import React,{useState,Fragment} from "react";

const InputTodo =()=>{
    const [description, setDescription]=useState("");

    const onSubmitForm = async(e)=>{
        e.preventDefault();
        
    try {
        const body = {description};
        const response = await fetch("http://localhost:3001/todos",
        {
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify(body)
        });
        console.log(window.location);
        window.location="/";
    } catch (err) {
        console.log(err,"no annda")
    }
}

    return <Fragment> 
                
    <h1 className="text-center mt-5">Lista de tareas</h1>
    <form className="d-flex" onSubmit={onSubmitForm}> 
        <input type="text" 
               className="form-control"     
                value={description} 
                onChange={e => setDescription(e.target.value)} />
        <button className="btn btn-success"> Agregar </button>
    </form>
    
           </Fragment>
};

export default InputTodo;