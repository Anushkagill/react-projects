import { useState } from 'react'
import './App.css'

function App() {
  let [counter,setCounter]=useState(15)//Hooks se hoga directly we cant recat have special hook
  //let counter=15
  const addValue=()=>{
    //counter=counter+1
    if(counter<20){
      setCounter(counter+1)
    }
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
  return (
    <>
    <h1>chai or  react</h1>
    <h2>counter value:{counter}</h2>
    <button onClick={addValue}>add value</button>
    <br />
    <br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
