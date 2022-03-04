import React from 'react'
import {ToDo} from './ToDo'

export const ToDosList = (props) => {
  let myStyle ={
    minHeight : "60vh"
  }
  return (
    <div className='container ' style={myStyle}>
      <h3 className=' my-3'>To Do's List</h3>
      {props.todos.length===0? "No ToDo's to display":
      props.todos.map((todo)=>{
        return (
          <>
        <ToDo todo = {todo} key= {todo.sno} onDelete = {props.onDelete}/><hr/>
        </>
        )
      })}
      </div>
  )
}
