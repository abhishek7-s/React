import { useState } from 'react'

function App() {

  const [color , setColor] = useState("olive")
  return (
    <div className='h-screen w-full duration-700' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-7 inset-x-[25%]  rounded-2xl m-2 bg-white'> 
          <div className='*: flex flex-wrap justify-center items-center gap-6 text-black font-bold m-2'>
                <button onClick={() => setColor("red")} className='bg-red-400 p-1 px-5 rounded-xl shadow-sm hover:shadow-orange-300'>Red</button>
                <button onClick={() => setColor("Cyan")} className='bg-cyan-200 p-1 px-5 rounded-xl shadow-sm hover:shadow-orange-300'>Cyan</button>
                <button onClick={() => setColor("lightblue")} className='bg-blue-100 p-1 px-5 rounded-xl shadow-sm hover:shadow-orange-300'>lightblue</button>
                <button onClick={() => setColor("pink")} className='bg-pink-400 p-1 px-5 rounded-xl shadow-sm hover:shadow-orange-300'>pink</button>
                <button onClick={() => setColor("indigo")} className='bg-indigo-400 p-1 px-5 rounded-xl shadow-sm hover:shadow-orange-300'>indigo</button>
          </div>
        
      </div>
    </div>
  )
}

export default App
