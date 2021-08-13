const express = require('express');
const app = express();
const cors = require('cors');
//const pool =require("./db");
//conection//
const Pool= require('pg').Pool;
const pool = new Pool({
    user:"postgres",
    password:"12345",
    host:"localhost",
    port:5432,
    database:"todoserver"
});


//middleware
app.use(cors());
app.use(express.json());//req.body


     //ROUTES//

//crete todos
app.post("/todos",async(req,res)=>{
    try {
        console.log(req.body)
        const {description} = req.body;
        const newTodo = await pool.query ("INSERT INTO todo (description) VALUES ($1) RETURNING *",
        [description]);

        res.json(newTodo.rows[0])


    } catch (error) {
        console.error(error.message);
    }
})

//get all todos
app.get("/todos",async (req,res)=>{
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message);
    }
})
//get a todos 
app.get("/todos/:id",async (req,res)=>{
    try {
        //console.log(req.params)
        const {id}= req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        
        res.json(todo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//update a todos 

app.put("/todos/:id",async (req,res)=>{
    try {
        
        const {id}= req.params;
        const {description}= req.body;
        const updateTodo= await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
        [description, id])

        res.json("Actividad modificada")
    } catch (error) {
        console.log(error.message)
    }
})

//delete a todos 

app.delete("/todos/:id", async (req,res)=>{
 try {
     const {id}= req.params;
     const deleteTodo= await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
     res.json("actividad borrada")
 } catch (error) {
     console.error(error.message)
 }

})


app.listen(3001, ()=>{
    console.log(' server start on 3001')});