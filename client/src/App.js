import React from 'react';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
import Inicio from './components/Inicio';
import {BrowserRouter as  Router,Route,Switch, Link } from "react-router-dom";

function App() {
 
 
 
  return (

  <>
    <Router>
      
    <Switch>

          <Route path="/list">
            <InputTodo />
            <ListTodos />
          </Route>
          <Route path="/">
            <Inicio/>
          </Route>
        </Switch>
      
      
      
       </Router>
  </>
  );
}

export default App;
