import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0) 
  const [todos, setTodos] = useState([
    { id: 1, todo: 'Learn React'},
    { id: 2, todo: 'Learn Vite'  },
    { id: 3, todo: 'Build Something Awesome'}
  ])

  async function apiCall(){
      const res = await fetch("https://dummyjson.com/todos?limit=5")
      const data = await res.json()
      console.log(data.todos);
      setTodos([...todos,...data.todos])
  }

  useEffect( function(){
     // setTodos([...todos,apiCall()])
    apiCall();
  },[])

  return (
    <>
      {todos.map(function(todo){
        return <Todo key={todo.id} ele={todo}></Todo>
      })}
    </>
  )
}


function Todo(props){
  return (
    <div>
      <h3> {props.ele.todo}</h3>
    </div>
  )
}

export default App
