
import './App.css';
import Header from './MyComponents/Header';
import {ToDosList} from './MyComponents/ToDosList';
import { AddToDo } from './MyComponents/AddToDo';
import {Footer} from './MyComponents/Footer';
import React, { useState, useEffect } from 'react';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo)=>{
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.getItem("todos");
  }

  const addTodo = (title,desc)=>{
      console.log("I am adding this "+ title +" and "+ desc )
      let sno;
      if(todos.length==0){
        sno = 1;
      }else{
       sno = todos[todos.length - 1].sno +1;
      }
      let myTodo ={
        sno : sno,
        title : title,
        desc : desc
      }
      setTodos([...todos,myTodo]);
      
  }

  const [todos,setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
  }, [todos])
  
  return (
    <>
      <Header title = "My ToDos List"/>
      <AddToDo addTodo ={addTodo}/>
      <ToDosList todos = {todos} onDelete ={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
