import React from 'react';
import './App.css';
import { useState } from 'react';

function App() {
  const [Todos,setTodos]=useState([])//[]- Represents array
  const [todo,setTodo]=useState('')//'' - Represents single string
  return (
    
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>setTodos([...Todos,{id:Date.now() ,text:todo ,status:false}])} className="fas fa-plus"></i>{/*using spread operator(...) to split array todos in single elements and add element todo to the array.*/}
    </div>
    <div className="todos">
      {
      Todos.map((obj)=>{
        return(
        <div className="todo">
          <div className="left">
          <input onChange={(e)=>{
          console.log(e.target.checked)
          console.log(obj)
          setTodos(Todos.filter(obj2=>{
            if(obj2.id == obj.id){
              obj.status = e.target.checked
            }
            console.log(obj2)
            return obj2
          }))
          }
          } value={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}</p>
          </div>
          <div className="right">
          <i className="fas fa-times"></i>
          </div>
        </div>
        )
      })
      }

      {Todos.map((obj)=>{
        console.log(obj.text)
        console.log(obj.status)
        if(obj.status){
          return(<h1>{obj.text}</h1>)
        }
        return null
      })}
      
    </div>
  </div>
  );
}

export default App;
