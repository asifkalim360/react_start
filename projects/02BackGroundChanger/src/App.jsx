import { useState } from 'react'

function App() {
  const [colors, setColors] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:colors}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='AllButtons flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-xl bg-gray-300'>
          <button onClick={()=>setColors("red")} className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-xl bg-red-600 mr-5'>Red</button>
          <button onClick={()=>setColors("green")} className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-xl bg-green-700 mr-5'>Green</button>
          <button onClick={()=>setColors("blue")} className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-xl bg-blue-700 mr-5'>Blue</button>
          <button onClick={()=>setColors("gray")} className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-xl bg-gray-700 mr-5'>Gray</button>
          <button onClick={()=>setColors("pink")} className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-xl bg-pink-500 mr-5'>Pink</button>
          <button onClick={()=>setColors("yellow")} className='flex flex-wrap justify-center gap-3 shadow-lg  px-3 py-2 rounded-xl bg-yellow-300 mr-5'>Yellow</button>
          <button onClick={()=>setColors("purple")} className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-xl bg-purple-800 mr-5'>Purple</button>
          <button onClick={()=>setColors("orange")} className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-xl bg-orange-400 mr-5'>Orange</button>
          <button onClick={()=>setColors("white")} className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-xl bg-white mr-5'>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
