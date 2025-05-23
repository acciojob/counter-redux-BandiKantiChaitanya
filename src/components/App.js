
import React from "react";
import './../styles/App.css';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./CounterSlice";

const App = () => {
  const dispatch=useDispatch()
  const count=useSelector((state)=>state.counter.value)
  // const decrement=useSelector((state)=>state.counter.value)
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{count}</h1>
        <button onClick={()=>{dispatch(increment())}} >increment</button>
        <button onClick={()=>{dispatch(decrement())}} >decrement</button>
    </div>
  )
}

export default App
