import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  // let counter = 10

  const addValue = ()=>{
    // console.log("Value Added", Math.random());
    // counter++
    
    if(counter<20)
    {
      setCounter(++counter)
      console.log("Value Added", counter);
    }  
    
  }

  const removeValue = ()=>{
    // console.log("Value Remove", Math.random());
    // counter--;

  if(counter>0)
  {
    setCounter(--counter)
    console.log("Value Added", counter);
  }
  else{
    console.log("please do not count the negative values");
    
  }  
    
  }
 

  return (
    <> 
      <h1>COUNTER</h1>
      <h3>Counter Value: {counter}</h3>
      <button onClick={addValue}>Add Value {counter}</button>
      <button onClick={removeValue}>Remove Value {counter}</button>

      <h6>h6 : {counter}</h6>
      <h5>h5 : {counter}</h5>
      <h4>h4 : {counter}</h4>
      <h1>count is {counter}</h1>
    </>
  )
}

export default App
