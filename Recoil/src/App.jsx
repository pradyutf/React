import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={count}>
        <Count setCount = {setCount}/>
      </CountContext.Provider>
    </div>
  )
}

function Count(props) {
  console.log("re-render");
  return (
  <div>
    <CountRenderer/>
    <Buttons setCount = {props.setCount}/>
  </div>)
}

function CountRenderer() {
  const count = useContext(CountContext);
  return <div>
   <b>
    {count}
   </b>
  </div>
}


function Buttons(props) {
  const count = useContext(CountContext);
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      props.setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      props.setCount(count => count - 1)
    }}>Decrease</button>
  </div>
}

export default App