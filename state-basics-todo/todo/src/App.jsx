import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {memo} from 'react'
import './App.css'

let counter = 2
// complex state instead of just a variable
 
function App() {
  
  const [todos, setTodos] = useState([
    {id: 1, title: 'Learn React', description: 'Learn React with the help of the official documentation'},
    {id: 2,title: 'Learn Vite', description: 'Learn Vite with the help of the official documentation'}
  ])

  // const [count, setCount] = useState(0)
  // useEffect(() => {
  //   setCount(count + 1)
  // },[count])



  function addTodo(){
    setTodos([...todos, {id: ++counter, title: 'New Todo', description: 'New Todo Description'}])
  }


  return (
    <div>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map(function(todo){
        //  return <Todo key= {todo.id} title={todo.title} description={todo.description}/>
        return <Todo key= {todo.id} todo = {todo}/>
      })}

      <CardWrapper>
        <img src={reactLogo} alt="React Logo" />
        <img src={viteLogo} alt="Vite Logo" />
      </CardWrapper>
      <CardWrapper>
        <img src={reactLogo} alt="React Logo" />
        <img src={viteLogo} alt="Vite Logo" />
      </CardWrapper>

    </div>
  )
}


// //this would cause infinite loop
// function Counter(){
//   const [count, setCount] = useState(0)
//   useEffect(() => {
//     setCount(count + 1)
//   },[count])
//   return (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   )
// }


function CardWrapper(props){
  return (
      <div style={{border: '1px solid black', padding: '10px'}}>
      {props.children}
      </div>
  )
}


const Todo = memo(function Todo(props){
  return (
    <div>
      <h3> {props.todo.title}</h3>
      <h5> {props.todo.description}</h5>
    </div>
  )
})





export default App
