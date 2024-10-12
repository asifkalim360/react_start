import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./counterSlice"
  
function Counter() {
    const count = useSelector((state) => state.counter.count)
    const themeTextColor = useSelector((state) => state.theme.color)

    const dispatch = useDispatch()
  return (
    <>
        <button className="button" aria-label="Increment value" onClick={ () => {dispatch(increment()) }}> + </button>
        <span className="value" style={{color: themeTextColor }}>Count : {count} </span>
        <button className="button" aria-label="Decrement value" onClick={ () => {dispatch(decrement()) }}> - </button> 
        <br/> 
        <button className="button" aria-label="Decrement value" onClick={ () => {dispatch(incrementByAmount(5)) }}> Increment BY 5 </button> 

    </>
  )
}

export default Counter