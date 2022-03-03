
import './App.css';
import Header from './MyComponents/Header';
import {ToDosList} from './MyComponents/ToDosList';
import {Footer} from './MyComponents/Footer';
import React, { useState } from 'react';

function App() {
  const onDelete = (todos)=>{
    setTodos(todos.filter((e)=>{
      return e!==todos;
    }))
  }

  const [todos,setTodos] = useState([
    {
      sno : 1,
      title : "Go to the market",
      desc : "Need to go to market and buy supplies"
    },
    {
      sno : 2,
      title : "Finish React tutorial",
      desc : "Need to complete the tutorial and example project"
    },
    {
      sno : 3,
      title: "Get cash from bank",
      desc : "Need to withdraw rs.10000 cash"
    }
  ]);
  
  return (
    <>
      <Header title = "My ToDos List"/>
      <ToDosList todos = {todos} onDelete ={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
