import './App.css'
import AddTodo from './components/AddTodo'
import SimpleTodo from './components/SimpleTodo'

function App() {

  return (
    <>
       <h1 className='text-2xl font-extrabold p-2'>Todo with Redux</h1>
       <AddTodo/>
       <SimpleTodo/>
    </>
  )
}

export default App
