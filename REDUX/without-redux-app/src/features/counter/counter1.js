import {useState} from "react"
  
function Counter() {
    const [count, setCount] = useState(0)
  return (
    <>
        <button className="button" aria-label="Increment value" onClick={ () => {setCount(count+1)}}> + </button>
        <span className="value">Count : {count} </span>
        <button className="button" aria-label="Decrement value" onClick={ () => {setCount(count-1)}}> - </button>   
    </>
  )
}

export default Counter