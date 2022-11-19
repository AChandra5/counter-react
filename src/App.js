/* eslint-disable no-template-curly-in-string */
import { useState, useEffect } from "react"
import CounterComponent from './components/CounterComponent';
import Reset from "./components/Reset";
import './App.css';

function App() {
  let [count, setCount] = useState(0)

  useEffect(()=>{
    console.log(`The value is ${count}`)
  },[count]
  
  )

  //increment
  const increment = () =>{
    if(count<=9)
    return setCount(
      (prevCount)=>prevCount + 1
    )
  }

  //decrement
  const decrement = () =>{
    if(count>0)
    return setCount((prevCount)=>prevCount -1)
  }

  //reset
  const reset = () =>{
    return setCount(0)
  }

  //rendering reset button
  // if({count:10}){
  //   return <button onClick={reset}>Reset</button>
  // }

  return (
    <div className="App">
      <CounterComponent count={count} increment={increment} decrement={decrement} reset={reset} />
      <Reset />
    </div>
  );
}

export default App;
