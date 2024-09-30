import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username : "nawaz", 
    age : 28
  }

  let newArray = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind CSS</h1>
      <Card name='Asif' btnText="click me" someObject = {myObject} someArray={newArray}/>
      <br />
      <Card name="Nawaz" btnText="visit me"/>

    </>
  )
}

export default App
