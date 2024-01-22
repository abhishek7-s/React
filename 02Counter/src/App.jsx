import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  let adder = ()=>{
    if (count < 20) {
      setCount((count) => count + 1)
    }
  }
  const substrator = ()=>{
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }

  return (
    <>
      <div className="card">
      <h1>Count is {count}</h1>
        <button onClick= {adder}>
          +
        </button>
        <button onClick= {substrator}>
          -
        </button>
      </div>
    </>
  )
}

export default App
