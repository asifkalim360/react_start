import { useSelector } from "react-redux"

function Counter() {
  const count = useSelector((state) => state.counter.count)
  const themeTextColor = useSelector((state) => state.theme.color)
  return (
    <>
        <span className="value" style={{color: themeTextColor }} > Coin :  {count} </span> 
        {/* <span className="value" style={{color: 'green'}} >Theme :  {themeTextColor} </span>   */}

    </>
  )
}

export default Counter