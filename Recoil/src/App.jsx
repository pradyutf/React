import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context';
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';
import React from 'react';



function App() {

  return (
    <div>
      <RecoilRoot>
        <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  // const [even,setEven] = useState(0);
  // const count = useRecoilValue(countAtom);

  // useEffect(function(){
  //   if (count%2==0){
  //     setEven(2)
  //   }
  //   else{
  //     setEven(1)
  //   }
  // },[count]);


  console.log("re-render");
  return (
  <div>
    
    <CountRenderer/>
    <Buttons />
    {/* {even} */}

  </div>)
}

function CountRenderer() {
  console.log("countRendered re-rendered");
  const count = useRecoilValue(countAtom);
  return <div>
   <b>
    {count}
   </b>
   <EvenCountRenderer/>

  </div>
}

const EvenCountRenderer = React.memo(function EvenCountRenderer(){
  console.log("hi");
 // const count = useRecoilValue(countAtom);
  const isEven = useRecoilValue(evenSelector)
  if (isEven){
    return (
      <div>It is Even</div>
    )
  }
  return (<div></div>)
})


const Buttons = React.memo(function Buttons() {
 // const [count,setCount] = useRecoilState(countAtom);
 const setCount = useSetRecoilState(countAtom)
  console.log("buttons re-rendererd");

  return <div>
    <button onClick={() => {
      setCount(count => count + 1)
    }}>Increase</button>

    <button onClick={() => {
      setCount(count => count - 1)
    }}>Decrease</button>
  </div>
})


export default App;




 

// using context API


// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CountContext.Provider value={count}>
//         <Count setCount = {setCount}/>
//       </CountContext.Provider>
//     </div>
//   )
// }

// function Count(props) {
//   console.log("re-render");
//   return (
//   <div>
//     <CountRenderer/>
//     <Buttons setCount = {props.setCount}/>
//   </div>)
// }

// function CountRenderer() {
//   const count = useContext(CountContext);
//   return <div>
//    <b>
//     {count}
//    </b>
//   </div>
// }


// function Buttons(props) {
//   const count = useContext(CountContext);
//   console.log("buttons re-rendererd");

//   return <div>
//     <button onClick={() => {
//       props.setCount(count => count + 1)
//     }}>Increase</button>

//     <button onClick={() => {
//       props.setCount(count => count - 1)
//     }}>Decrease</button>
//   </div>
// }

//export default App