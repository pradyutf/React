import { useState } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { memo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App2.css'





//todo fetch coresponding to buttons
function App2() {

  const [buttonId, setButtonId] = useState(1)

  const handleClick =  useCallback(function handleClick(id){
        setButtonId(id);
  },[])

  return (
    <div>
      <Button id={1} handleClick = {handleClick}/>
      <Button id={2} handleClick = {handleClick}/>
      <Button id={3} handleClick = {handleClick}/>
      <Button id={4} handleClick = {handleClick}/>
      <TodoWithId id={buttonId}/>
    </div>
  )
}

const Button = memo(function Button(props){
    return (
        <button onClick={() => props.handleClick(props.id)}>{props.id}</button>
    )
})

function TodoWithId(props){
   const [todo,setTodo] = useState({})

   useEffect(function(){
        console.log("i am called")
     fetch('https://dummyjson.com/todos/' + props.id)
     .then(res => res.json())
     .then(data => setTodo(data))

   },[props.id])

   return(
    <div>
      <h3>{todo.todo}</h3>
    </div>
   )
}


export default App2
